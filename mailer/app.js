const express = require("express");
const env = require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.post('/api/mail', async (request, response) => {
    try {
        if (!request.body.mailRecipient || !request.body.usernameRecipient || !request.body.mailSubject || !request.body.mailContent) {
            return response.status(400).json({
                "response": "Bad json format"
            });
        }
        new Promise((resolve, reject) => {
            var transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                secure: false,
                requireTLS: true,
                port: 587,
                debug: true,
                pool: true,
                maxConnections: 20,
                maxMessages: Infinity,
                auth: {
                    user: process.env.APP_MAILER_USER,
                    pass: process.env.APP_MAILER_PASSWORD
                }
            });
            var html = `<h3>
            Dear ${request.body.usernameRecipient}
            </h3>
            <p>This is the summary of your order in LITTLESHOP</p>
            <ul>
            `
            for (let i = 0; i < request.body.mailContent.length; i++) {
                html += "<li>" + request.body.mailContent[i].quantity.toString() + " " + request.body.mailContent[i].productName + "</li>"
            }
            html += "</ul>"

            var mailSettings = {
                from: process.env.APP_MAILER_USER,
                to: request.body.mailRecipient || "alexboury@hotmail.fr",
                subject: request.body.mailSubject,
                html: request.body.mailContent
            };
            transporter.sendMail(mailSettings, (error, response) => {
                if (error) {
                    console.log(error)
                    return error
                    // response.status(424).json({
                    //     "response": "An error occured during mail sending"
                    // })
                } else {
                    console.log(response)
                    console.log(`Email sent to ${request.body.mailRecipient} about ${request.body.mailSubject}`)
                    resolve()
                }

                // response.statusHandler only applies to 'direct' transport
                response.statusHandler.once("failed", function (data) {
                    console.log(
                        "Permanently failed delivering message to %s with the following response: %s",
                        data.domain, data.response);
                });

                response.statusHandler.once("requeue", function (data) {
                    console.log("Temporarily failed delivering message to %s", data.domain);
                });

                response.statusHandler.once("sent", function (data) {
                    console.log("Message was accepted by %s", data.domain);
                });
            });

        }).then(() => {
            return response.status(200).json({
                "response": "Mail sent"
            })
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log("##################")
        console.log(error)
    }
});


app.post('/api/newsLetter', async (request, response) => {
    try {
        if (!request.body.mailRecipient || !request.body.usernameRecipient || !request.body.mailSubject || !request.body.mailContent) {
            return response.status(400).json({
                "response": "Bad json format"
            });
        }
        new Promise((resolve, reject) => {
            var transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                secure: false,
                requireTLS: true,
                port: 587,
                debug: true,
                pool: true,
                maxConnections: 20,
                maxMessages: Infinity,
                auth: {
                    user: process.env.APP_MAILER_USER,
                    pass: process.env.APP_MAILER_PASSWORD
                }
            });
            var html = `<h3>
            Dear ${request.body.usernameRecipient}
            </h3>
            <p>These products from your wishlist are currenlty available on LITTLESHOP marketplace:</p>
            <ul>
            `
            for (let i = 0; i < request.body.mailContent.length; i++) {
                html += "<li>" + request.body.mailContent[i].availableQuantity.toString() + " units of " + request.body.mailContent[i].productName + " are currently available</li>"
            }
            html += "</ul>"

            var mailSettings = {
                from: process.env.APP_MAILER_USER,
                to: request.body.mailRecipient || "alexboury@hotmail.fr",
                subject: request.body.mailSubject,
                html: request.body.mailContent
            };
            transporter.sendMail(mailSettings, (error, response) => {
                if (error) {
                    console.log(error)
                    return error
                    // response.status(424).json({
                    //     "response": "An error occured during mail sending"
                    // })
                } else {
                    console.log(response)
                    console.log(`Email sent to ${request.body.mailRecipient} about ${request.body.mailSubject}`)
                    resolve()
                }

                // response.statusHandler only applies to 'direct' transport
                response.statusHandler.once("failed", function (data) {
                    console.log(
                        "Permanently failed delivering message to %s with the following response: %s",
                        data.domain, data.response);
                });

                response.statusHandler.once("requeue", function (data) {
                    console.log("Temporarily failed delivering message to %s", data.domain);
                });

                response.statusHandler.once("sent", function (data) {
                    console.log("Message was accepted by %s", data.domain);
                });
            });

        }).then(() => {
            return response.status(200).json({
                "response": "Mail sent"
            })
        }).catch((error) => {
            console.log(error)
        })

    } catch (error) {
        console.log("##################")
        console.log(error)
    }
});






//NETWORK SETTINGS
app.listen(process.env.APP_MAILER_PORT, () => {
    console.log(`Mailer is running on port ${process.env.APP_MAILER_PORT}`);
});