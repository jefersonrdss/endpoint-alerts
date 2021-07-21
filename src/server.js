/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-07-20
 * Updated at: 2021-07-20
 */

import moment from "moment"
import express from "express"
import router from "./routes.js"

const now = moment().format("YYYY-MM-DD HH:mm:ss") // data hora atual

const server = express()

server.use(express.json()) // application/json
server.use(router) // declaracao de rotas

// server port 3001
server.listen(3001, () => console.log(`${now} Server is running on port 3001`))