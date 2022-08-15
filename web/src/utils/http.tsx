const apiUrl = 'http://192.168.1.108'
const baseUrl:string = `${apiUrl}:3001/`

const err = (httpCode: number) =>{
    return {
        code: httpCode
    }
}

const http = {
    async post (url : string, options: object){
        const response = await fetch(baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(options),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
        })
        const httpCode = response.status
        if(httpCode !== 200) {
            return err(httpCode)
        } else {
            const result = await response.json()
            return result
        }

    }, 
    async get (url : string, options: object){
        const response = await fetch(baseUrl + url, {
            method: 'GET',
            body: JSON.stringify(options),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
        })
        const httpCode = response.status
        if(httpCode !== 200) {
            return err(httpCode)
        } else {
            const result = await response.json()
            return result
        }
    }, 
}

export default http;