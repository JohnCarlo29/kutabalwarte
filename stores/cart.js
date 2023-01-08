export const useCartStore = defineStore('cart-store', {
    state: () => {
        return {
            cartMenus: [],
            showCart: false,
        }
    },

    getters: {
        subtotal(state) {
            let subtotal = 0

            state.cartMenus.forEach((cartMenu) => subtotal = subtotal + (cartMenu.quantity * cartMenu.product.price))

            return subtotal
        }
    },

    actions: {
        addItem(menu) {
            const found = this.cartMenus.find(cartMenu => cartMenu.product.id === menu.id)

            if (found == undefined || found == null) {
                this.cartMenus.push({ quantity: 1, product: menu })
            } else {
                found.quantity++
            }
        },

        removeItem(menu) {
            const found = this.cartMenus.find(cartMenu => cartMenu.product.id === menu.id)

            if (found == undefined || found == null) {
                return
            }

            found.quantity--

            if (found.quantity === 0) {
                const itemIndex = this.cartMenus.findIndex(cartMenu => cartMenu.product.id === menu.id)
                this.cartMenus.splice(itemIndex, 1)
            }
        },

        toggleCart() {
            this.showCart = !this.showCart
        },

        resetCart() {
            this.cartMenus = []
        }
    }
})
