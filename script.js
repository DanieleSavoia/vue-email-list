const app = Vue.createApp({
    data() {
        return {
            arrMail: [],
        }
    },
    methods: {
       
    },
    created() {
        for ( i = 0; i<10 ;i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(serverResponse => this.arrMail.push(serverResponse.data.response)); 
        }
       
    },
});
app.mount('#app')

