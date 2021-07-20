/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-20
 * Updated at: 2021-07-20
 */

import Router from "express"
import SendEmailController from "./controllers/SendEmailController.js"

const sendEmailController = new SendEmailController()

const router = Router()

// Rota POST para receber os alerts
router.post("/graylog/alert", (request, response) => {
    sendEmailController.handle(request, response).catch((error) => {
        console.error(`ERROR: ${error.message}`)
        response.sendStatus(400) // status code 400
    })
})

export default router