import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';


const DELETED_KEY = 'deletedAlbumIds';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService, private router: Router) {}

  private getDeletedIds(): number[] {
    const raw = localStorage.getItem(DELETED_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private saveDeletedId(id: number): void {
    const ids = this.getDeletedIds();
    ids.push(id);
    localStorage.setItem(DELETED_KEY, JSON.stringify(ids));
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        const deleted = this.getDeletedIds();
        this.albums = data.filter(a => !deleted.includes(a.id));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    this.saveDeletedId(id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
