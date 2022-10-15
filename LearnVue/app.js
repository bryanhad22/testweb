const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title: "Doraemon", author:"Bruh", age:54, img: 'img/doraemon.jpg', isFave: true},
                {title: "Sinchan", author:"WIlliam", age:21, img: 'img/sinchan comic.jpg', isFave: false},
                {title: "Bleach", author:"Caesar", age:22, img: 'img/bleach comic.jpg', isFave: true},
            ],
            x: 0,
            y: 0,
            
        }
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvents (e, b) {
            console.log(e, e.type)
            if(b) {
                console.log(b)
            }
        },
        handleMousemove (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")