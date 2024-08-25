import { ComponentProps } from "react";
import { FieldErrors, FieldPath, FieldValues, Message, UseFormRegister } from "react-hook-form";
import InputController from "@/components/ui/Inputs/InputController";
import styles from "@/styles/components/ui/form/formFields.module.scss";

export type FormFieldsData<T extends FieldValues> = Record<keyof T, ComponentProps<typeof InputController>>;

interface Props<T extends FieldValues> {
	formFields: FormFieldsData<T>;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
}

export default function FormFields<T extends FieldValues>({ formFields, register, errors }: Props<T>) {
	return (
		<div className={styles["form-fields"]}>
			{Object.entries(formFields).map(([fieldName, fieldData]) => (
				<InputController key={fieldName} {...fieldData} {...register(fieldName as FieldPath<T>)} error={errors[fieldName]?.message as Message} />
			))}
		</div>
	);
}
