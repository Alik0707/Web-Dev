class Product:
    def __init__(self, 
                 product_id: int, 
                 product_name: str, 
                 product_price: float, 
                 product_amount: int):
        self.id = product_id
        self.name = product_name
        self.price = product_price
        self.amount = product_amount
    
    def set_id(self, id): self.id = id

    def set_name(self, name): self.name = name

    def set_price(self, price ): self.price = price

    def set_amount(self, n): self.amount = n


    def expiration_date(self):
         return "Experation date: unknown"

     
    def __str__(self):
        return f"""Product ID: {self.id}\nProduct Name: {self.name}\nProduct Price: {self.price}\nProduct Amount: {self.amount}"""

class Bread(Product):
    def __init__(self,
                 id: int,
                 name: str,
                 price: float,
                 amount: int, 
                 is_white:bool):
        
        super().__init__(id,name,price,amount)
        self.is_white = is_white
    
    def __str__(self):
        return f"""{super().__str__()}\nit is white: {self.is_white}"""

    def i_can_eat(self):
        if(self.is_white): return "not you can t eat it"
        else:"of course"
   
    def expiration_date(self):
         return "Experation date: 2 days"
    
    
   

class Drink(Product):
    def __init__(self, 
                 product_id: int, 
                 name: str, 
                 price: float,
                 amount: int, 
                 volume_ml: int, 
                 is_cold: bool):
        super().__init__(product_id, name, price, amount)

        self.volume_ml = volume_ml
        self.is_cold = is_cold

    def halal_or_haram(self):
        if(self.name == "beer") :return "haram"
        else : return "halal"
    

    def __str__(self):
        return f"""{super().__str__()}\nVolume: {self.volume_ml} ml\nCold drink: {self.is_cold}"""
    
    def expiration_date(self):
         return "Experation date: 160 days"
    

    

        

