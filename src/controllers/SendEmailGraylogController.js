/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-20
 * Updated at: 2021-07-21
 */

import moment from "moment"
import SendEmailGraylogService from "../services/SendEmailGraylogService.js"

class SendEmailGraylogController {

    // prepara os dados para envio do email
    async handle(request, response) {

        const now = moment().format("YYYY-MM-DD HH:mm:ss") //data hora atual

        // event title e event description
        const { event_definition_title, event_definition_description } = request.body

        //*** Construindo corpo do email */
        let messageAlert = "" // recebera toda a mensagem de log
        request.body.backlog.forEach(log => {
            messageAlert += `${log.timestamp} ${log.message}<br><br>` // inserindo os logs
        })

        const messageEmail = `
            <strong><h3>${event_definition_title}</h3></strong>
            <strong><h4>${event_definition_description}</h4></strong><br>
            ${messageAlert}
        `
        //*** fim corpo email */

        const sendEmailGraylogService = new SendEmailGraylogService(event_definition_title, messageEmail) // instancia da classe SendEmailService
        const destinations = sendEmailGraylogService.destination.split(',') // lista de destinos separado por virgula

        // faz o envio pra todos os emails da lista
        destinations.forEach(destination => {

            // chama metodo async da classe sendEmailGraylogService
            sendEmailGraylogService.sendEmail(destination).then(() => {
                console.log(`${now} ${event_definition_title} - E-mail enviado para: ${destination}`)
            }).catch((error) => {

                console.error(`ERROR: ${error.message}`) // mensagem de erro
            })
        })

        response.sendStatus(200) // status code 200 OK
    }
}

export default SendEmailGraylogController