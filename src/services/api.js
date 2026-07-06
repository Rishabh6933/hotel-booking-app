import axios from 'axios';
export const api = axios.create({baseURL:'https://demohotelsapi.pythonanywhere.com',timeout:20000,headers:{Accept:'application/json'}});
const normalize = h => ({...h,price:Number(h.price),country:'India'});
export async function getHotels(){const {data}=await api.get('/hotels/');return (data.data||[]).map(normalize)}
export async function getHotel(id){const hotels=await getHotels();const hotel=hotels.find(h=>String(h.id)===String(id));if(!hotel)throw new Error('Hotel not found');return hotel}
