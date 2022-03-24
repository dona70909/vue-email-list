const app = new Vue({
    
    el:"#app",
    
    data:{ 
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
                self.emailArray.push(response.data.response);
            });
        }
        
        return self.emailArray;
    }, 
})


/* prova axios and api */
function createEmail(){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (response){
        console.log(response.data.response);
    });
    
};

createEmail();