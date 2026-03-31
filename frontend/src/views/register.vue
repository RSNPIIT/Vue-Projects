<template>
    <h1 align="center">Registration Page</h1>
    <center>
        <form @submit.prevent = "sendRegData">
            <input v-model = 'name' type="text" placeholder="name"> 
            <br><br>
            <input v-model = 'email' type="email" placeholder="email">
            <br><br>
            <input v-model = 'password' type="password" placeholder="password">
            <br><br>            
            <button type="submit">Submit</button>
            <br><br>
        </form>
    </center>
</template>
<script>
    export default{
        data(){
            return{
                name: "",
                email: "",
                password: ""
            }
        },
        methods:{
            sendRegData(){
                let formData = {
                    'name' : this.name,
                    'email' : this.email,
                    'password' : this.password
                };
                fetch('http://127.0.0.1:5000/reg', {
                    method : "POST",
                    body : JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
            }
        }
    }
</script>
<style>
    *{
        background-color: cyan;
    }
    h1{
        border: 3px solid black;
        border-radius: 25px;
        background-color: teal;
    }
</style>