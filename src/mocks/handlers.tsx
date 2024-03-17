// src/mocks/handlers.ts
import {http, HttpResponse} from 'msw'

import {Notification} from "@douyinfe/semi-ui";


export const handlers = [
    http.get('/data', ({request}) => {
        console.log('Just observing:', request.method, request.url)
        Notification.open({
            title: 'Success',
            content: 'Mocked data',
            duration: 3,
        })
        return HttpResponse.json({name: 'John'})
    }),
]
