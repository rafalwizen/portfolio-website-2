import React, {FormEvent, useState} from 'react';
import {useTranslation} from 'react-i18next';
import emailjs from '@emailjs/browser';

interface FormData {
    domain: string;
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    domain?: string;
    name?: string;
    email?: string;
    message?: string;
}

const ContactForm = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        domain: "Portfolio RW",
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);

        const form = e.target as HTMLFormElement;
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
        const userID = import.meta.env.VITE_EMAILJS_USER_ID as string;

        emailjs.sendForm(serviceID, templateID, form, userID)
            .then(() => {
                console.log("Wiadomość wysłana pomyślnie");
                setSubmitStatus('success');
                setFormData({
                    domain: "Portfolio RW",
                    name: "",
                    email: "",
                    message: "",
                });
            }, (error) => {
                console.log("Błąd podczas wysyłania wiadomości");
                console.log(error);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    return (
        <div className="bg-background p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                        {t('contact.form.name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:ring-2 focus:ring-black`}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                        {t('contact.form.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:ring-2 focus:ring-black`}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
                        {t('contact.form.message')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 rounded-lg border ${
                            errors.message ? 'border-red-500' : 'border-border'
                        } focus:outline-none focus:ring-2 focus:ring-black`}
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-custom-primary text-white rounded-lg transition-colors
                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                >
                    {isSubmitting ? (
                        <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            {t('contact.form.sending')}
                        </span>
                    ) : (
                        t('contact.form.send')
                    )}
                </button>

                {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                        {t('contact.form.success')}
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                        {t('contact.form.error')}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;