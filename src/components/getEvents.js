import Fetch from 'react-fetch';

export const getEvents = () => {

    return new Promise((resolve, reject) => {
        fetchUrl('https://94omh50edg.execute-api.eu-central-1.amazonaws.com/yogalates?page=classes', (error, meta, body) => {
            if (!error){
                resolve(body);
            } else {
                reject(error);
            }
        });
    });

};
