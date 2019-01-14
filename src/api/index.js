
import axios from 'axios'

const SERVER_ADDRESS = 'http://collector.bi-vdc.com'

const makeBaseUrl = targetUrl => {
    return `${SERVER_ADDRESS}/${targetUrl}`
}

export default {
    getRandomItem: () => {
        const targetUrl = 'api/getRandomItem'
        let baseUrl = makeBaseUrl(targetUrl)
        return new Promise((resolve, reject) => {
            axios
                .get(baseUrl)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    console.error('Error occured in api/getRandomItem\n', err)
                    reject(err)
                })
        })
    },
    postCommitItem: (batch, items) => {
        const targetUrl = 'api/commitItem'
        let baseUrl = makeBaseUrl(targetUrl)
        return new Promise((resolve, reject) => {
            axios.post(baseUrl, {
                    batch: batch,
                    items: items
                })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    console.error('Error occured in api/postCommitItem\n', err)
                    reject(err)
                })
        })
    }
}