import { z } from "zod";
import Regex from "@/utils/regex";

export const contactSchema = z.object({
	fullName: z
		.string({ required_error: "יש להזין שם מלא" })
		.min(1, { message: "יש להזין שם מלא" })
		.regex(Regex.NAME, "יש להזין שם מלא תקין")
		.includes(" ", { message: "יש להזין שם מלא תקין" }),
	phoneNumber: z
		.string({ required_error: "יש להזין מספר טלפון" })
		.min(1, { message: "יש להזין מספר טלפון" })
		.regex(Regex.PHONE_NUMBER, "יש להזין מספר טלפון תקין"),
	email: z.string({ required_error: 'יש להזין דוא"ל' }).min(1, { message: 'יש להזין דוא"ל' }).email({ message: 'יש להזין דוא"ל תקין' }),
});

export type ContactData = z.infer<typeof contactSchema>;
