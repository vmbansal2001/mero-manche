"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { isValidPhoneNumber } from "react-phone-number-input";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

type FieldName = keyof FieldErrors;

const useJoinEarlyAccessModalContainer = (onSuccessCallback: () => void) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    phone: false,
  });

  const errors = useMemo<FieldErrors>(() => {
    const next: FieldErrors = {};

    if (!name.trim()) next.name = "Name is required.";

    if (!email.trim()) next.email = "Email is required.";
    else if (!EMAIL_REGEX.test(email.trim()))
      next.email = "Enter a valid email.";

    if (phone && !isValidPhoneNumber(phone)) {
      next.phone = "Enter a valid phone number.";
    }

    return next;
  }, [name, email, phone]);

  const markTouched = (field: FieldName) => {
    setTouched((prev) => (prev[field] ? prev : { ...prev, [field]: true }));
  };

  const handleSubmit = () => {
    setHasSubmitted(true);
    setTouched({ name: true, email: true, phone: true });

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      toast.error("Please enter your name.");
      return;
    }

    if (!trimmedEmail) {
      toast.error("Please enter your email.");
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (phone && !isValidPhoneNumber(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // Required by request: log the 3 fields from handleSubmit.
    console.log({
      name: trimmedName,
      email: trimmedEmail,
      phone: phone ?? "",
    });

    toast.success("Thanks, you're officially on the waitlist!", {
      duration: 10000,
    });
    onSuccessCallback();
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    errors,
    touched,
    hasSubmitted,
    markTouched,
    handleSubmit,
  };
};

export default useJoinEarlyAccessModalContainer;
