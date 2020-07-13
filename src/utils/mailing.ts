import axios from "axios";

export async function sendEmail(data: MailData) {
	try {
		const formData = new FormData();
		Object.keys(data).forEach((key) =>
			formData.append(key, (data as any)[key])
		);
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};
		await axios.post(
			`http://www.mouadk.xyz/php/mail/contact_me.php`,
			formData,
			config
		);
		return true;
	} catch (error) {
		// Even when we receive an error, it's successful 🤷‍♂️
		return true;
	}
}

export interface MailData {
	name?: string | null;
	number?: string | null;
	email?: string | null;
	message?: string | null;
}
