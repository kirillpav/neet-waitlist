import { validate as EmailValidator } from "email-validator";
import type { NextApiRequest, NextApiResponse } from "next";

export async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> {
	if (req.method === "POST") {
		await postHandler(req, res);
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}

async function postHandler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> {
	try {
		const body = JSON.parse(req.body);
		const email = parseAndValidate(body, res);

		if (email) {
			await saveEmail(email);
			res.status(200).send("Email Saved");
		}
	} catch (error: any) {
		res.status(500).send("Error" + error);
	}
}

async function saveEmail(email: string): Promise<void> {
	console.log("Email Saved:" + email);
}

function parseAndValidate(body: any, res: NextApiResponse): string | null {
	if (!body) {
		res.status(400).send("Bad Request");
		return null;
	}

	const email: string = body.email;

	if (!email) {
		res.status(400).send("Missing Email");
		return null;
	} else if (email.length > 300) {
		res.status(400).send("Email too long");
		return null;
	} else if (!EmailValidator(email)) {
		res.status(400).send("Invalid Email");
		return null;
	}
	return email;
}
