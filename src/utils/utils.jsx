import axios from "axios";

const productionUrl = 'https://api.escuelajs.co/api/v1'

export const customFetch = axios.create({
    baseURL: productionUrl,
})
// customFetch is an Axios instance created with the baseURL set to productionUrl. 
//This means that any requests made with customFetch will have this base URL automatically prefixed to their URLs







export const formatPrice = (price) =>{
    const RupeesAmount = new Intl.NumberFormat('en-IN', {
        style:'currency',
        currency:'INR',
    }).format((price).toFixed(2));
    return ` ${" " +RupeesAmount}`;
}


export const generateAmountOptions = (number) => {
    return Array.from( { length : number }, (_, index) => {
            const amount = index + 1;
            return <option value={amount} key={amount}>{amount}</option>
        }
    )
}