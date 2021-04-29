import axios from 'axios';
// import interceptor from '../utils/interceptor';

const CHARGE_API = "http://localhost:3002/master-handler/apps/codify/api/add-charges/trial";
// const CHARGE_API1 = "http://localhost:3002/master-handler/apps/codify";
const RETURN_API = "https://codify.paginale.com/";
const params = window.location.search.split("?")[1].split("&");
const token = params[0].split("=")[1]
const shop = params[1].split("=")[1]
console.log(shop)
console.log(token)

class PricingService {

    addFreeCharge(){

        const charges ={
            plan:"free",
            shop:shop,
            token:token,
        };
         return axios.post(CHARGE_API, charges);
    }
    addBasicCharge_month(){

        const charges ={
            plan:"basic_month",
            shop:shop,
            token:token,
        };
        return axios.post(CHARGE_API, charges);
    }
    addBasicCharge_yearly(){
            const charges ={
                plan:"basic_year",
                shop:shop,
                token:token,
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Creative Plan --------------------------------------------------------
    addCreativeCharge_monthly(){
        const charges ={
            plan:"creative_month",
            shop:shop,
            token:token,
        };
        return axios.post(CHARGE_API, charges);
    }
    addCreativeCharge_yearly(){
        const charges ={
            plan:"creative_year",
            shop:shop,
            token:token,
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Premium Plan --------------------------------------------------------
    addPremiumCharge_monthly(){
        const charges ={
            plan:"premium_month",
            shop:shop,
            token:token,
        };
        return axios.post(CHARGE_API, charges);
    }
    addPremiumCharge_yearly(){
        const charges ={
            plan:"premium_year",
            shop:shop,
            token:token,
        };
        return axios.post(CHARGE_API, charges);
    }



}

export default new PricingService()
