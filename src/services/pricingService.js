import axios from 'axios';
// import interceptor from '../utils/interceptor';

const CHARGE_API = "https://gateway.paginale.com/master-handler/apps/codify/api/add-charges/trial";
// const CHARGE_API = "https://gateway.paginale.com/add-charges";
// const CHARGE_API1 = "http://localhost:3002/master-handler/apps/codify";
// const RETURN_API = "https://codify.paginale.com/";
// const params = window.location.search.split("?")[1].split("&");
let token ="";
let shop = "";
token = window.location.search.split("?")[1].split("&")[1].split("=")[1];
shop = window.location.search.split("?")[1].split("&")[2].split("=")[1];
console.log(shop);
console.log(token);
// if(window.location.search.split("?")[1].split("&")[1].split("=")[0] === "signature" ){
//     const signature= window.location.search.split("?")[1].split("&")[1].split("=")[1];
//     window.open("https://mystoreofdev.myshopify.com/admin/charges/21792620684/confirm_recurring_application_charge?signature"+
//         signature)
// }else{
//      token = window.location.search.split("?")[1].split("&")[1].split("=")[1]
//      shop = window.location.search.split("?")[1].split("&")[2].split("=")[1]
//     console.log(shop)
//     console.log(token)
//     console.log(window.location.search.split("?")[1].split("&"))
// }


class PricingService {

    addFreeCharge(){
        const charges ={
            plan:"free",
            shop:shop,
            token:token
        };
        return fetch(CHARGE_API, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(charges), // body data type must match "Content-Type" header
        }).then(r => console.log(r))
         // return axios.post(CHARGE_API, charges);
    }
    addBasicCharge_month(){

        const charges ={
            plan:"basic",
            shop:shop,
            token:token
        };
        return axios.post(CHARGE_API, charges);
    }
    addBasicCharge_yearly(){
            const charges ={
                plan:"basic",
                shop:shop,
                token:token
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Creative Plan --------------------------------------------------------
    addCreativeCharge_monthly(){
        const charges ={
            plan:"creative",
            shop:shop,
            token:token
        };
        return axios.post(CHARGE_API, charges);
    }
    addCreativeCharge_yearly(){
        const charges ={
            plan:"creative",
            shop:shop,
            token:token
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Premium Plan --------------------------------------------------------
    addPremiumCharge_monthly(){
        const charges ={
            plan:"premium",
            shop:shop,
            token:token
        };
        return axios.post(CHARGE_API, charges);
    }
    addPremiumCharge_yearly(){
        const charges ={
            plan:"premium",
            shop:shop,
            token:token
        };
        return axios.post(CHARGE_API, charges);
    }



}

export default new PricingService()
