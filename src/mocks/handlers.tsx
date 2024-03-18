// mocks/handlers.js
import {http, HttpResponse} from 'msw'
import {data} from './mockData'

export const handlers = [
    http.get('https://localhost:8080/data', () => {
        return HttpResponse.json(
            data
        )
    }),
]