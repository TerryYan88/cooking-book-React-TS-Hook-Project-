import axios from 'axios';

interface Get {
    url: string;
}

const get = ({url}:Get)=>{
    return new Promise((resolve, reject)=>{
        axios({
            url,
        })
        .then(result=> resolve(result))
        .catch(err=> reject(err))
    })
}




export{
    get,
};