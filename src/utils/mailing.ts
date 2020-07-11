export function sendEmail({ name, email, number, message }: MailData) {
	const mailjet = require("node-mailjet").connect(
		process.env.MJ_APIKEY_PUBLIC,
		process.env.MJ_APIKEY_PRIVATE
	);
	const request = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: process.env.FROM_EMAIL,
					Name: process.env.FROM_NAME,
				},
				To: [
					{
						Email: email,
						Name: name,
					},
				],
				Subject: "Portfolio contact form",
				HtmlPart: `
                    <strong>Name: </strong> ${name} <br/>
                    <strong>Number: </strong> ${number || "-"} <br/>
                    <strong>Email: </strong> ${email} <br/>
                    <strong>Message: </strong> ${message} <br/>
                `,
			},
		],
	});
	request
		.then((result: any) => {
			console.log(result.body);
		})
		.catch((err: any) => {
			console.log("err", err);
			console.log(err.statusCode);
		});
}

export interface MailData {
	name: string;
	number?: string;
	email: string;
	message: string;
}
