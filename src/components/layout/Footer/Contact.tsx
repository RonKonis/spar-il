"use client";

import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ActionButton from "@/components/ui/ActionButton";
import ErrorText from "@/components/ui/ErrorText";
import { Form, FormFields, FormFieldsData } from "@/components/ui/Form";
import { ContactData, contactSchema } from "@/schemas/contact";
import styles from "@/styles/components/layout/footer/contact.module.scss";

const contactFieldsData: FormFieldsData<ContactData> = {
	fullName: {
		inputKind: "text",
		placeholder: "שם מלא",
	},
	phoneNumber: {
		inputKind: "text",
		kind: "tel",
		placeholder: "טלפון",
	},
	email: {
		inputKind: "text",
		kind: "email",
		placeholder: 'דוא"ל',
	},
} as const;

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ContactData>({
		mode: "onTouched",
		resolver: zodResolver(contactSchema),
		shouldFocusError: false,
	});

	const contactFields = useMemo<FormFieldsData<ContactData>>(() => {
		const newContactFields = { ...contactFieldsData };
		Object.keys(newContactFields).forEach((field) => {
			newContactFields[field as keyof ContactData].classNames = {
				container: styles["contact-field-container"],
				input: styles["contact-field-input"],
				error: styles["contact-field-error"],
			};
		});
		return newContactFields;
	}, []);

	const sendContact = async ({ fullName, phoneNumber, email }: ContactData) => {
		console.log({
			fullName,
			phoneNumber,
			email,
		});
		// await sendEmail({
		// 	method: "POST",
		// 	body: {
		// 		fullName,
		// 		phoneNumber,
		// 		email,
		// 	},
		// });
	};

	return (
		<Form onSubmit={handleSubmit(sendContact)}>
			<FormFields formFields={contactFields} register={register} errors={errors} />
			{/* <ErrorText error={fetchError?.message} /> */}
			<ActionButton className={styles["submit-contact"]} variant="primary" kind="submit" disabled={isSubmitting}>
				שלח/י
			</ActionButton>
		</Form>
	);
}
