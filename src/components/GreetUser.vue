<template>
    <h1>{{ greet }}</h1>      
</template>

<script>
import axios from "axios";
export default {
    name: "GreetUser",
    data() {
        return {
            token_value: null,
            greet: ""
        }
    },
    mounted() {
        this.greetingUser();
        this.$watch(() => localStorage.getItem('token'), (newValue, oldValue) => {
            if(newValue !== oldValue) {
                this.greetingUser;
            }
        });
    },
    methods: {
        greetingUser() {
            this.token_value = localStorage.getItem('token');
            const config =  {
                headers: {
                    'token_access': this.token_value                    
                }
            }
            axios.get('http://localhost:3000/auth', config)
            .then(response => {
                console.log('respuesta del endpoint',response.data)
                this.greet = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style></style>