/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-20
 * Updated at: 2021-07-21
 */

import Router from "express"
import SendEmailGraylogController from "./controllers/SendEmailGraylogController.js"

const sendEmailGraylogController = new SendEmailGraylogController()

const router = Router()

// Rota POST para receber os alertas do Graylog Server
router.post("/graylog/alert", (request, response) => {
    sendEmailGraylogController.handle(request, response).catch((error) => {
        console.error(`ERROR: ${error.message}`)
        response.sendStatus(400) // status code 400
    })
})


// Rota PoST para receber os alertas do Grafana Server
router.post("/grafana/alert", (request, response) => {
    // implements
})

export default router