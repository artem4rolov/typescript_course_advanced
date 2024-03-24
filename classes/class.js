// interface IProduct {
//     id: number
//     name: string
//     price: number
// }

// class Delivery {
//     constructor(public date: Date) {
//     }
// }

// class HomeDelivery extends Delivery {
//     constructor(public address: string, date: Date) {
//         super(date)
//     }
// }
 
// class ShopDelivery extends Delivery {
//     constructor(public shopId: number, date: Date) {
//         super(new Date())
//     }
// }
 
// interface ICart {
//     products: IProduct[]
//     addToCart(product: IProduct): void
//     removeFromCart(productId: number): void
//     totalPrice(): number
//     setDelivery(delivery: HomeDelivery | ShopDelivery): void
// }

// class Product implements IProduct {
//     id: number = 1
//     name: string
//     price: number

//     constructor(name: string, price: number) {
//         this.name = name
//         this.price = price
//     }
// }

// class Cart implements ICart {
//     products: IProduct[] = []
//     delivery: HomeDelivery | ShopDelivery

//     addToCart(product: IProduct): void {
//         this.products.push(product)
//     }

//     removeFromCart(productId: number): void {
//         try {
//             this.products = this.products.filter(product => product.id !== productId)
//         } catch {
//             throw new Error('Такого продукта нет в корзине')
//         }
//     }

//     totalPrice(): number {
//         return this.products.reduce((sum, product) => sum + product.price, 0)
//     }

//     setDelivery(delivery: HomeDelivery | ShopDelivery): void {
//         this.delivery = delivery
//     }
   
// }

// const product1 = new Product('продукт 1', 40)
// setTimeout(() => {}, 200)
// const product2 = new Product('продукт 2', 80)

// const cart = new Cart()

// cart.addToCart(product1)
// console.log(cart)

// cart.addToCart(product2)
// console.log(cart)

// console.log(cart.totalPrice())

// cart.setDelivery({address: 'УЛица', date: new Date()})
// cart.setDelivery({shopId: 1, date: new Date()})

// console.log(cart)

// cart.removeFromCart(1711046567004)

// console.log('удалено', cart)

// ВОПРОС с собеса сбербанка ----------------------------
// class A {
//     constructor() {
//         this.name = 'foo'
//         this.getName1() 
//     }

//     getName1() {
//         console.log('класс А', 'foo' + this.name)
//     }
// }
// class B extends A {
//     constructor() {
//         super()
//         this.name = 'bar'
//         this.getName() 
//     }

//     getName() {
//         console.log('класс В', 'bar' + this.name)
//     }
// }

// new B()

// const obj1 = {name: 'foo'}
// const obj2 = obj1
// obj2.name = 'bar'
// console.log(obj1)

// function duplicate(arr) {
// arr.concat(arr)
// }

// const a = [1,2,3]
// duplicate(a)
// console.log(a)