const app = new Vue({
    
    el:"#app",
    
    data:{
        email:"",
        
        emailArray:[],
    },
    
    methods: {
        
        getEmail(){
            
        }
    },
    
    mounted() {

        const self = this;
        for(let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (response){
                self.emailArray.push(response.data);
                console.log(self.emailArray);
            });
        }

        return self.emailArray;
    }, 
})


