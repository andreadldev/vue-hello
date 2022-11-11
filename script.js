const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello',
            img: 'img/1.jpg'
        }
    }
}).mount('#app');