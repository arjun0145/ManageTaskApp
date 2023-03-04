import axios from 'axios'
import { url } from './UrlManageMent';




// here is functions for calling api of task crud 

export function save(data) {
    return axios.post(`${url.BASE_URL}/save/task`, data)
}
export function GetTask(id) {
    return axios.get(url.BASE_URL+'/fetch/task/'+id);
}
export function DeleteTask(id) {
    console.log(id);
    return axios.delete(url.BASE_URL+'/task/delete/' + id);
}
export function incompleated() {
    return axios.get(url.BASE_URL+'/incompleated');
}


export function TotalCount() {
    return axios.get(url.BASE_URL+'/count/task/all');
}

export function MarkAscompleated(id) {
    return axios.put(url.BASE_URL+'/task/mark-complete/' + id);
}








// here we are calling apis  for user regisration and authentication  



export function Registeruser(data) {
    return axios.post(url.BASE_URL+'/savedata', data)

}


export function Login(data) {
    return axios.post(url.BASE_URL+'/fetchdata', data)
}



