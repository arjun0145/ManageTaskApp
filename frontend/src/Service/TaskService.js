import axios from 'axios'
export function save(data) {
    return axios.post('http://localhost:7800/save/task', data)
}
export function GetTask(id) {
    return axios.get('http://localhost:7800/fetch/task/'+id);
}
export function DeleteTask(id) {
    console.log(id);
    return axios.delete('http://localhost:7800/task/delete/' + id);
}
export function incompleated() {
    return axios.get('http://localhost:7800/incompleated');
}


export function TotalCount() {
    return axios.get('http://localhost:7800/count/task/all');
}

export function MarkAscompleated(id) {
    return axios.put('http://localhost:7800/task/mark-complete/' + id);
}








// here is service for user 



export function Registeruser(data) {
    return axios.post('http://localhost:7800/savedata', data)

}


export function Login(data) {
    return axios.post('http://localhost:7800/fetchdata', data)
}



