import axios from 'axios';
// import interceptor from '../utils/interceptor';

const CHARGE_API = "http://localhost:3001/master-handler/apps/orderify/api/add-charges/trial";

class PricingService {

    addBasicCharge_month(){
        const charges ={
            recurring_application_charge: {
                name: "Orderify",
                price: 6.99,
                return_url: "http://localhost:3000/",
                trial_days: 10,
                test: true
            }
        };
         return axios.post(CHARGE_API, charges);
    }
    addBasicCharge_yearly(){
        const charges ={
            recurring_application_charge: {
                name: "Orderify",
                price: 79.99,
                return_url: "http://localhost:3000/",
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Creative Plan --------------------------------------------------------
    addCreativeCharge_monthly(){
        const charges ={
            recurring_application_charge: {
                name: "Orderify",
                price: 149.99,
                return_url: "http://localhost:3000/",
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    addCreativeCharge_yearly(){
        const charges ={
            recurring_application_charge: {
                name: "Orderify",
                price: 149.99,
                return_url: "http://localhost:3000/",
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    //---------------------------------------- Premium Plan --------------------------------------------------------
    addPremiumCharge_monthly(){
        const charges ={
            recurring_application_charge: {
                name: "Orderify",
                price: 13.99,
                return_url: "http://localhost:3000/",
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }
    addPremiumCharge_yearly(){
        const charges ={
            recurring_application_charge: {
                name: "Orderify",
                price: 165.99,
                return_url: "http://localhost:3000/",
                trial_days: 10,
                test: true
            }
        };
        return axios.post(CHARGE_API, charges);
    }



}

export default new PricingService()
