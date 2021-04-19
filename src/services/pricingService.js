import axios from 'axios';
// import interceptor from '../utils/interceptor';

const CHARGE_API = "http://localhost:3001/master-handler/apps/orderify/api/add-charges/trial";
const CHARGE_API1 = "http://localhost:3001/master-handler/apps/orderify";
const RETURN_API = "http://orderify.paginale.com/";
const params = window.location.search.split("?")[1].split("&");
const token = params[0].split("=")[1]
const shop = params[1].split("=")[1]
console.log(shop)
console.log(token)

class PricingService {

    addBasicCharge_month(){

        const charges ={
            plan:"basic_month",
            shop:shop,
            token:token,
            recurring_application_charge: {
                name: "Orderify",
                price: 6.99,
                return_url: RETURN_API,
                trial_days: 10,
                test: true
            }
        };
         return axios.post(CHARGE_API, charges);
    }
    addBasicCharge_yearly(){
            const charges ={
                plan:"basic_year",
                shop:shop,
                token:token,
                recurring_application_charge: {
                name: "Orderify",
                price: 79.99,
                return_url: RETURN_API,
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Creative Plan --------------------------------------------------------
    addCreativeCharge_monthly(){
        const charges ={
            plan:"creative_month",
            shop:shop,
            token:token,
            recurring_application_charge: {
                name: "Orderify",
                price: 149.99,
                return_url: RETURN_API,
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    addCreativeCharge_yearly(){
        const charges ={
            plan:"creative_year",
            shop:shop,
            token:token,
            recurring_application_charge: {
                name: "Orderify",
                price: 149.99,
                return_url: RETURN_API,
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Premium Plan --------------------------------------------------------
    addPremiumCharge_monthly(){
        const charges ={
            plan:"premium_month",
            shop:shop,
            token:token,
            recurring_application_charge: {
                name: "Orderify",
                price: 13.99,
                return_url: RETURN_API,
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    addPremiumCharge_yearly(){
        const charges ={
            plan:"premium_year",
            shop:shop,
            token:token,
            recurring_application_charge: {
                name: "Orderify",
                price: 165.99,
                return_url: RETURN_API,
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }



}

export default new PricingService()
