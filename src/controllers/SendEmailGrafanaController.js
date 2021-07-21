/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-21
 * Updated at: 2021-07-21
 */

 import moment from "moment"
 import SendEmailService from "../services/SendEmailService.js"

class SendEmailGrafanaController {

    // prepara os dados para envio do email
    async handle(request, response) {
        
        const now = moment().format("YYYY-MM-DD HH:mm:ss") // data hora atual

        //desestruturar objeto enviado pelo grafana
        const { message, ruleName, state, title } = request.body

        //construir mensagem que ira no corpo do email
        const messageEmail = `
            <strong><h3>${title}</h3></strong>
            <strong><h4>${ruleName}</h4></strong>
            <strong>${state}</strong> ${message}
        `

        const sendEmailService = new SendEmailService(title, messageEmail)
        const destinations = sendEmailService.destination.split(',') // lista de destinos separado por virgula

        // faz o envio pra todos os emails da lista
        destinations.forEach(destination => {

            // chama metodo async da classe sendEmailService
            sendEmailService.sendEmail(destination).then(() => {
                console.log(`${now} Alert Grafana ${title} - E-mail enviado para: ${destination}`)
            }).catch((error) => {

                console.error(`ERROR: ${error.message}`) // mensagem de erro
            })
        })

        //console.log(request.body)
        response.sendStatus(200) // status code 200 OK
    }
}

export default SendEmailGrafanaController