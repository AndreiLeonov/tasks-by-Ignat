import axios from 'axios'

export const RequestsAPI = {
    sendCheckboxValue(data: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: data})
            .then(res => res.data.info)
            .catch(err => err.response.data.errorText)
    }
}

