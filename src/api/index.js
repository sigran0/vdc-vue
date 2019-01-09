
import axios from 'axios'

const SERVER_ADDRESS = 'http://collector.bi-vdc.com'

export default {
    getRandomItem: () => {
        const targetUrl = 'api/getRandomItem'
        let baseUrl = `${SERVER_ADDRESS}/${targetUrl}`
        console.log(baseUrl)
        return new Promise((resolve, reject) => {
            axios
                .get(baseUrl)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    console.error('Error occured in api/getRandomItem\n', err)
                })
        })
    }
}