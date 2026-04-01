from models import Product
from models import Drink
from models import Bread

prod = Product(1,"Apple",155.0,3)
bread = Bread(2, "Napoleon", 3500.0, 3, True)
drink = Drink(3, "Cola", 500.0, 5, 1000, True)

products = [prod,bread, drink]

for product in products:
    print(product)
    print(product.expiration_date())
    print("----------------------")

# unuiqe method

print(bread.i_can_eat())
print(drink.halal_or_haram())

