import axios from "axios";

const getHeaders = () => {
    return {
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'text/plain',
        }
    }
};
const getArguments = (args) => {
    return {
        params: args,
        headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // 'x-access-token': `${process.env.TOKEN}`
        }
    }
};

export const getApi = (path, args) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${path}`, args ? getArguments(args) : getHeaders())
            .then(response => { resolve(response) })
            .catch(error => {reject(error) });
    });
};

export const handleExceptionMessage = (err) => {
    console.log(err)
    // let errMessage = err.MSG_DEFAULT_ERROR_MESSAGE;
    // let errCode = err.response.status;
    // return { "code": errCode, "msg": errMessage };
};