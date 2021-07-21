/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-20
 * Updated at: 2021-07-21
 */

import 'dotenv/config';
import nodemailer from "nodemailer"

class SendEmailGraylogService {

    // construtor
    constructor(subject, message) {

        // smtp config
        this.smtp_server = process.env.SMTP_SERVER
        this.smtp_port = process.env.SMTP_PORT
        this.smtp_user = process.env.SMTP_USER
        this.smtp_pass = process.env.SMTP_PASS
        
        // email config
        this.source = process.env.SMTP_FROM
        this.destination = process.env.SMTP_TO
        this.subject = subject
        this.message = message
    }

    // Metodo para realizar o envio do email
    async sendEmail(destination) {
        
        // insere as configs do smtp server
        const transport = nodemailer.createTransport({
            host: this.smtp_server,
            port: this.smtp_port,
            secure: false,
            auth: { // auth
                user: this.smtp_user,
                pass: this.smtp_pass
            },
            tls: {
                // desabilita erros para certificado invalido
                rejectUnauthorized: false,
                ciphers: 'TLSv1'
            },
        });

        // enviar o email
        await transport.sendMail({
            from: this.source,
            to: destination,
            subject: this.subject,
            html: this.message
        })
    }
}

export default SendEmailGraylogService