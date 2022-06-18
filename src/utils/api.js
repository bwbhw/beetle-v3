import requests from "./requests";


export const http = {
   login (url, params){return requests({method: 'get', url: url, params: params});},

}

// export const login = (url, params) =>{
//     return requests({
//         method: 'get',
//         url: url,
//         params: params,
//     });
// };

