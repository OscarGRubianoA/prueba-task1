const { createApp } = Vue

createApp  ({
    data() {
        return {
            clients: [],
            datos:[],
            firstName: '',
            lastName: '',
            email: '',
            clients: {},
            alerta: false,
        }
    },
    created() {
        this.loadData();
        console.log(this.clients)
    },
    methods: {
        loadData() {
            axios.get("/clients")
                .then(response => {
                    this.datos = response
                    this.cliente = response.data._embedded.clients
                    console.log(this.clients)
                })
        },
        addClient(e) {
            nuevoUsuario = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email.toLowerCase()
            };if (this.firstName == "" || this.lastName == "" || this.email == "") {
                e.preventDefault()
                this.alerta = true
            }
            else {
                this.postClient(nuevoUsuario)
                location.reload()
                this.alerta = false
            }
            console.log("si esta haciendo algo")
        },
        postClient(obj) {
            axios.post("/clients".obj)
                .then(this.loadData())
        },
        deleteClient(client){
            axios.delete(client._links.self.href)
            .then(()=>this.loadData())
        }
    },
    computed: {

    },

}).mount('#App')