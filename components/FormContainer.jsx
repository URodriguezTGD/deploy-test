import React, { useEffect, useState } from "react";
import FormContainerStyle from "../styles/FormContainer.module.css";
import { useForm } from "react-hook-form";

// imports i18n
import { useRouter } from "next/router";
import es from "../locales/FormContainer/FormContainer_es";
import en from "../locales/FormContainer/FormContainer_en";

export const FormContainer = () => {
	// Selecting language
	const router = useRouter();
	const { locale } = router;
	const t = locale === "es" ? es : en;
	const [messageSended, setMessageSended] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmitForm = async (values) => {
		let result = await fetch(`/api/addContact`, {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(values),
		});
		console.log(`result`, result);
		if (!result.ok) {
			reset();
			// console.log(`error ${result.status}: ${result.statusText}`);
		} else {
			reset();
			setMessageSended(true);
		}
	};
	
	return (
		<div className={FormContainerStyle.formContainer}>
			{
				messageSended
				?
				<div className={FormContainerStyle.sended}>
					<span className='mdi mdi-cloud-check'></span>
					<p>{t.sentMessage}</p>
				</div>
				:
				<form
					id="contactForm"
					className={FormContainerStyle.form}
					autoComplete="off"
					onSubmit={handleSubmit(onSubmitForm)}
				>
					<div className={FormContainerStyle.row}>
						<input
							type="text"
							id="fullName"
							name="fullName"
							placeholder={t.nombrePH}
							{...register("fullName", {
								required: {
									value: true,
									message: `${t.nombreReq}`,
								},
								maxLength: {
									value: 45,
									message: `${t.nombreMax}`,
								},
								minLength: {
									value: 5,
									message: `${t.nombreMin}`,
								},
								pattern: /[A-Za-z]+/,
							})}
						/>
						<label htmlFor="fullName">{t.nombre}</label>
						<span className={FormContainerStyle.error}>
							{errors?.fullName?.message}
						</span>
					</div>
					<div className={FormContainerStyle.row}>
						<input
							type="text"
							id="email"
							name="email"
							placeholder={t.emailPH}
							{...register("email", {
								required: {
									value: true,
									message: `${t.emailReq}`,
								},
								maxLength: 320,
								minLength: {
									value: 10,
									message: `${t.emailMin}`,
								},
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: `${t.emailValid}`,
								},
							})}
						/>
						<label htmlFor="email">{t.email}</label>
						<span className={FormContainerStyle.error}>
							{errors?.email?.message}
						</span>
					</div>
					<div className={FormContainerStyle.row}>
						<input
							type="text"
							id="asunto"
							name="asunto"
							placeholder={t.asuntoPH}
							{...register("asunto", {
								required: {
									value: true,
									message: `${t.asuntoReq}`,
								},
								maxLength: {
									value: 100,
									message: `${t.asuntoMax}`,
								},
								pattern: /[A-Za-z0-9.-\/]+/,
							})}
						/>
						<label htmlFor="asunto">{t.asunto}</label>
						<span className={FormContainerStyle.error}>
							{errors?.asunto?.message}
						</span>
					</div>
					<div className={FormContainerStyle.row}>
						<textarea
							id="message"
							name="message"
							placeholder={t.mensajePH}
							{...register("message", {
								required: {
									value: true,
									message: `${t.mensajeReq}`,
								},
								maxLength: {
									value: 750,
									message: `${t.mensajeM}`,
								},
								pattern: /[A-Za-z0-9.-\/]+/,
							})}
						/>
						<label htmlFor="message">{t.mensaje}</label>
						<span className={FormContainerStyle.error}>
							{errors?.message?.message}
						</span>
					</div>
					<div className={FormContainerStyle.row}>
						<input type="checkbox" name="terms" id="terms" required />
						<label htmlFor="terms"></label>
						<label className={FormContainerStyle.terms}>
							{t.acepto} <a href={t.privacidadLink}>{t.privacidad}</a>
						</label>
					</div>
					<div className={FormContainerStyle.row}>
						<button type="submit">{t.boton}</button>
					</div>
				</form>
			}
		</div>
	);
};
