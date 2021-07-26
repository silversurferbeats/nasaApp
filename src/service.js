import App from "./App";

const peticion = async() => {
    App.use(cors());
    const resp = await fetch('https://api.fbi.gov/wanted/v1/list')
    .then(resp => resp.json())
    .then(json => {
        console.log(json);
    })
    .catch(console.error())     
}



peticion();