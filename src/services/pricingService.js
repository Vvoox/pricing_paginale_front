import axios from 'axios';
// import interceptor from '../utils/interceptor';

// const CHARGE_API = "https://gateway.paginale.com/hello";
// const CHARGE_API = "gateway.paginale.com/hello";
const CHARGE_API = "https://gateway.paginale.com/master-handler/apps/codify/api/add-charges/trial";
// const CHARGE_API1 = "http://localhost:3002/master-handler/apps/codify";
// const RETURN_API = "https://codify.paginale.com/";
// const params = window.location.search.split("?")[1].split("&");
let token ="";
let shop = "";
token = window.location.search.split("?")[1].split("&")[1].split("=")[1];
shop = window.location.search.split("?")[1].split("&")[2].split("=")[1];
// console.log(shop);
// console.log(token);
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
            type:'F',
            token:token
        };
        return axios.post(CHARGE_API, charges).then(r => {
            console.log(r);
            console.log("REDIRECTION avec status => ", r.data);
            window.open(r.data, "_blank")
        })
    }
    addBasicCharge_month(){

        const charges ={
            plan:"basic",
            shop:shop,
            type:'M',
            token:token
        };
         return axios.post(CHARGE_API, charges).then(r => {
             // console.log(r);
             // console.log("REDIRECTION avec status => ", r.data);
             window.open(r.data, "_blank")
         });
    }
    addBasicCharge_yearly(){
            const charges ={
                plan:"basic",
                shop:shop,
                type:'Y',
                token:token
        };
        return axios.post(CHARGE_API, charges).then(r => {
            // console.log(r);
            console.log("REDIRECTION avec status => ", r.data);
            window.open(r.data, "_blank")
        });
    }
    //---------------------------------------- Creative Plan --------------------------------------------------------
    addCreativeCharge_monthly(){
        const charges ={
            plan:"creative",
            shop:shop,
            type:'M',
            token:token
        };
        return axios.post(CHARGE_API, charges).then(r => {
            // console.log(r);
            console.log("REDIRECTION avec status => ", r.data);
            window.open(r.data, "_blank")
        });
    }
    addCreativeCharge_yearly(){
        const charges ={
            plan:"creative",
            shop:shop,
            type:'Y',
            token:token
        };
        return axios.post(CHARGE_API, charges).then(r => {
            // console.log(r);
            console.log("REDIRECTION avec status => ", r.data);
            window.open(r.data, "_blank")
        });
    }
    //---------------------------------------- Premium Plan --------------------------------------------------------
    addPremiumCharge_monthly(){
        const charges ={
            plan:"premium",
            shop:shop,
            type:'M',
            token:token
        };
        return axios.post(CHARGE_API, charges).then(r => {
            // console.log(r);
            console.log("REDIRECTION avec status => ", r.data);
            window.open(r.data, "_blank")
        });
    }
    addPremiumCharge_yearly(){
        const charges ={
            plan:"premium",
            shop:shop,
            type:'Y',
            token:token
        };
        return axios.post(CHARGE_API, charges).then(r => {
            // console.log(r);
            console.log("REDIRECTION avec status => ", r.data);
            window.open(r.data, "_blank")
        });
    }



}

export default new PricingService()
