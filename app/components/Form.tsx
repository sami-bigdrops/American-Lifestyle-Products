'use client';

import { useState } from "react";

interface FormProps {
    onSuccess?: () => void;
}

export function Form({ onSuccess }: FormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSelectFocused, setIsSelectFocused] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const services = [
        'Home & Kitchen',
        'Personal Care',
        'Organization',
        'Wellness & Comfort',
        'Product Inquiry',
        'Order Support',
        'General Question',
    ];

    const formatPhoneNumber = (digits: string) => {
        if (digits.length === 0) return '';
        
        if (digits.length <= 3) {
            return `(${digits}`;
        } else if (digits.length <= 6) {
            return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        } else {
            return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} - ${digits.slice(6, 10)}`;
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const digits = value.replace(/\D/g, '');
        
        if (digits.length > 10) return;
        
        const formatted = formatPhoneNumber(digits);
        
        setFormData(prev => ({
            ...prev,
            phone: formatted,
        }));
        
        if (errors.phone) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.phone;
                return newErrors;
            });
        }
    };

    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            const input = e.currentTarget;
            const cursorPosition = input.selectionStart || 0;
            const value = formData.phone;
            
            if (cursorPosition > 0) {
                const isDeletingDigit = /[0-9]/.test(value[cursorPosition - 1]);
                
                if (isDeletingDigit) {
                    const beforeCursor = value.slice(0, cursorPosition);
                    const afterCursor = value.slice(cursorPosition);
                    const digitsBefore = beforeCursor.replace(/\D/g, '');
                    const digitsAfter = afterCursor.replace(/\D/g, '');
                    const allDigits = digitsBefore.slice(0, -1) + digitsAfter;
                    
                    const formatted = formatPhoneNumber(allDigits);
                    
                    setFormData(prev => ({
                        ...prev,
                        phone: formatted,
                    }));
                    
                    setTimeout(() => {
                        const newPosition = Math.max(0, cursorPosition - 1);
                        input.setSelectionRange(newPosition, newPosition);
                    }, 0);
                    
                    e.preventDefault();
                }
            }
        }
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateFullName = (name: string): boolean => {
        const trimmed = name.trim();
        const parts = trimmed.split(/\s+/);
        return parts.length >= 2 && parts.every(part => part.length >= 2);
    };

    const validatePhone = (phone: string): boolean => {
        const digits = phone.replace(/\D/g, '');
        return digits.length === 10;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const email = e.target.value.trim();
        if (email && !validateEmail(email)) {
            setErrors(prev => ({
                ...prev,
                email: 'Please enter a valid email address',
            }));
        }
    };

    const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const name = e.target.value.trim();
        if (name && !validateFullName(name)) {
            setErrors(prev => ({
                ...prev,
                fullName: 'Please enter your first and last name',
            }));
        }
    };

    const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        if (phone && !validatePhone(phone)) {
            setErrors(prev => ({
                ...prev,
                phone: 'Please enter a valid 10-digit phone number',
            }));
        }
    };

    const handleMessageBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const message = e.target.value.trim();
        if (message && message.length < 10) {
            setErrors(prev => ({
                ...prev,
                message: 'Message must be at least 10 characters',
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors: Record<string, string> = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (!validateFullName(formData.fullName)) {
            newErrors.fullName = 'Please enter your first and last name';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        
        if (!formData.service) {
            newErrors.service = 'Please select a category';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            
            try {
                const response = await fetch('/api/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                
                const data = await response.json();
                
                if (response.ok && data.success) {
                    // Show success toast
                    setShowToast(true);
                    
                    // Reset form
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                    
                    // Hide toast after 5 seconds and close modal if callback provided
                    setTimeout(() => {
                        setShowToast(false);
                        if (onSuccess) {
                            setTimeout(() => {
                                onSuccess();
                            }, 500);
                        }
                    }, 5000);
                } else {
                    // Show error message
                    setErrors({
                        submit: data.error || 'Failed to submit form. Please try again.',
                    });
                }
            } catch {
                setErrors({
                    submit: 'An error occurred. Please try again later.',
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="relative">
            {showToast && (
                <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-6">
                    <div className="rounded-lg bg-green-500 px-5 py-3.5 shadow-lg sm:px-6 sm:py-4">
                        <p className="font-body text-[13px] font-medium text-white sm:text-[14px] md:text-[15px]">
                            Thank you for contacting us. We will contact you within 24-48 hours.
                        </p>
                    </div>
                </div>
            )}
            
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:gap-4">
            <div>
                <label htmlFor="fullName" className="mb-1.5 block font-body text-[13px] font-medium text-(--color-black-grey) sm:mb-2 sm:text-[14px]">
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleNameBlur}
                    className={`w-full rounded-lg border bg-(--color-white) px-3 py-2.5 font-body text-[14px] text-(--color-black-grey) placeholder:text-(--color-black-grey) placeholder:opacity-60 focus:outline-none sm:px-4 sm:py-3 sm:text-[15px] ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-(--color-grey) focus:border-(--color-blue)'
                    }`}
                    placeholder="Enter your full name"
                />
                {errors.fullName && (
                    <p className="mt-1 font-body text-[12px] text-red-500 sm:text-[13px]">
                        {errors.fullName}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="mb-1.5 block font-body text-[13px] font-medium text-(--color-black-grey) sm:mb-2 sm:text-[14px]">
                    Email Address
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    className={`w-full rounded-lg border bg-(--color-white) px-3 py-2.5 font-body text-[14px] text-(--color-black-grey) placeholder:text-(--color-black-grey) placeholder:opacity-60 focus:outline-none sm:px-4 sm:py-3 sm:text-[15px] ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-(--color-grey) focus:border-(--color-blue)'
                    }`}
                    placeholder="Enter your email address"
                />
                {errors.email && (
                    <p className="mt-1 font-body text-[12px] text-red-500 sm:text-[13px]">
                        {errors.email}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="phone" className="mb-1.5 block font-body text-[13px] font-medium text-(--color-black-grey) sm:mb-2 sm:text-[14px]">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    onBlur={handlePhoneBlur}
                    maxLength={18}
                    className={`w-full rounded-lg border bg-(--color-white) px-3 py-2.5 font-body text-[14px] text-(--color-black-grey) placeholder:text-(--color-black-grey) placeholder:opacity-60 focus:outline-none sm:px-4 sm:py-3 sm:text-[15px] ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-(--color-grey) focus:border-(--color-blue)'
                    }`}
                    placeholder="(123) 456 - 7890"
                />
                {errors.phone && (
                    <p className="mt-1 font-body text-[12px] text-red-500 sm:text-[13px]">
                        {errors.phone}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="service" className="mb-1.5 block font-body text-[13px] font-medium text-(--color-black-grey) sm:mb-2 sm:text-[14px]">
                    Select Category
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setIsSelectFocused(true)}
                    onBlur={() => setIsSelectFocused(false)}
                    className={`w-full appearance-none rounded-lg border bg-(--color-white) bg-size-[18px] bg-position-[right_0.75rem_center] bg-no-repeat px-3 py-2.5 font-body text-[14px] text-(--color-black-grey) focus:outline-none sm:px-4 sm:py-3 sm:text-[15px] ${
                        errors.service ? 'border-red-500 focus:border-red-500' : 'border-(--color-grey) focus:border-(--color-blue)'
                    } ${
                        isSelectFocused
                            ? "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23000%22 stroke-width=%222%22%3E%3Cpath d=%22M6 15l6-6 6 6%22/%3E%3C/svg%3E')]"
                            : "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23000%22 stroke-width=%222%22%3E%3Cpath d=%22M6 9l6 6 6-6%22/%3E%3C/svg%3E')]"
                    }`}
                >
                    <option value="" className="text-(--color-black-grey) opacity-60">Select a category</option>
                    {services.map((service) => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select>
                {errors.service && (
                    <p className="mt-1 font-body text-[12px] text-red-500 sm:text-[13px]">
                        {errors.service}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="mb-1.5 block font-body text-[13px] font-medium text-(--color-black-grey) sm:mb-2 sm:text-[14px]">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleMessageBlur}
                    rows={4}
                    className={`w-full resize-none rounded-lg border bg-(--color-white) px-3 py-2.5 font-body text-[14px] text-(--color-black-grey) placeholder:text-(--color-black-grey) placeholder:opacity-60 focus:outline-none sm:px-4 sm:py-3 sm:text-[15px] ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-(--color-grey) focus:border-(--color-blue)'
                    }`}
                    placeholder="Enter your message"
                />
                {errors.message && (
                    <p className="mt-1 font-body text-[12px] text-red-500 sm:text-[13px]">
                        {errors.message}
                    </p>
                )}
            </div>

                {errors.submit && (
                    <p className="mt-1 font-body text-[12px] text-red-500 sm:text-[13px]">
                        {errors.submit}
                    </p>
                )}
                
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-(--color-blue) px-5 py-2.5 font-body text-[14px] font-semibold text-(--color-white) transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-2 sm:px-6 sm:py-3 sm:text-[15px] md:text-[16px] ${
                        isSubmitting ? 'opacity-70' : ''
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <svg
                                className="h-4 w-4 animate-spin text-(--color-white) sm:h-5 sm:w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                            <span>Sending...</span>
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
}

