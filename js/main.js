const app = Vue.createApp({
    data(){
        return {
            title: "Contador App - Vue",
            count: 0,
        }
    },
    methods: {
        // add(){
        //     this.count += 1;
        // },
        // remove(){
        //     this.count -= 1;
        // },
        modcount(operation = "add", limit = 1){

            if(operation === "add")
                this.count += limit;
            else
                this.count -= limit;
        }
    }
});