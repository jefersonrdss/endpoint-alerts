## End Point para Alertas via POST HTTP Notification

### <strong>v2.0.0</strong> - Recebe os alertas do tipo HTTP Notification do Graylog e Grafana
#### A aplicação receberá nos endpoints abaixo o POST HTTP Notification enviado pelo Graylog e Grafana. Após tratar o objeto JSON, enviará um email utilizando as configurações setadas no arquivo <strong>.env</strong><br><br>
```js
/**
* End Points da aplicação - PORT 3001
* http://enpoint-alerts:3001/graylog/alert  # Para receber alertas enviado pelo GRAYLOG
* http://enpoint-alerts:3001/grafana/alert  # Para receber alertas enviado pelo GRAFANA
*/
```

#### O envio de email da aplicação utiliza um servidor SMTP previamente configurado no arquivo .env na raiz do projeto, conforme abaixo

```env
# Configurantion endPoint Alert

# Email
SMTP_SERVER=
SMTP_USER=
SMTP_PASS=
SMTP_PORT=587
SMTP_FROM=
SMTP_TO=
```
#### <strong>Observação: </strong> Em SMTP_TO, separe por vírgula, sem espaços, a lista de email que receberá os alertas como exemplo abaixo
```env
SMTP_TO=email1@example.com,email2@example.com
```
<br>

```js
/**
 * Projeto: End Point for Alerts
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-07-20
 * Updated at: 2021-07-21
 * 
 * Aplicação Backend com Node.js
 */
```
