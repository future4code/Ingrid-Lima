import app from "./app"
import createUser from './endpoints/createUser'
import { getAdressInfo } from "./services/getAdressInfo"
import {transporter} from './services/mailTransporter'
import {config} from  'dotenv'

config()

app.post('/users/signup', createUser)

 getAdressInfo(8599390)
 .then(console.log)
 .catch(console.log)

transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: ['silva_ingrid@outlook.com', 'lbn_report_lovelace-aaaad37cn7wjenxehl4g4qe34e@labenualunos.slack.com'],
    subject: "Assunto muito interessante",
    text: `Clique no link abaixo para finalizar seu cadastro:
    wwww.link.com`,
    html: `<p> Clique no botão para finalizar seu cadastro:</p>
            <button> Verificar Meu email</button>   `,
})

.then (console.log)
.catch(console.log)