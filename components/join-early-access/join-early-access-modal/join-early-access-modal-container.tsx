"use client";

import "react-phone-number-input/style.css";
import useJoinEarlyAccessModalContainer from "./use-join-early-access-modal-container";
import PhoneInput from "react-phone-number-input";
import { X } from "lucide-react";

type Props = {
  onSuccessCallback: () => void;
  handleClose: () => void;
};

const JoinEarlyAccessModalContainer = ({
  onSuccessCallback,
  handleClose,
}: Props) => {
  const {
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
  } = useJoinEarlyAccessModalContainer(onSuccessCallback);

  const showNameError = (touched.name || hasSubmitted) && errors.name;
  const showEmailError = (touched.email || hasSubmitted) && errors.email;
  const showPhoneError = (touched.phone || hasSubmitted) && errors.phone;

  return (
    <div className="bg-white rounded-xl border border-black/5 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <div className="p-6 sm:p-7 border-b border-black/5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
            Join Early Access
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-1 leading-relaxed">
            Get early access updates. No spam, just important updates.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="shrink-0 rounded-lg p-2 text-neutral-600 hover:text-neutral-900 hover:bg-black/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form
        className="p-6 sm:p-7 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-900">
            Name <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => markTouched("name")}
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(showNameError)}
            className={`w-full rounded-xl border px-4 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-shadow focus:ring-4 focus:ring-primary-100 ${
              showNameError ? "border-primary-500" : "border-black/10"
            }`}
          />
          {showNameError ? (
            <p className="text-sm text-primary-600">{errors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-900">
            Email <span className="text-primary-600">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => markTouched("email")}
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(showEmailError)}
            className={`w-full rounded-xl border px-4 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-shadow focus:ring-4 focus:ring-primary-100 ${
              showEmailError ? "border-primary-500" : "border-black/10"
            }`}
          />
          {showEmailError ? (
            <p className="text-sm text-primary-600">{errors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-900">
            Phone <span className="text-neutral-500">(optional)</span>
          </label>

          <div
            className={`w-full rounded-xl border px-3 py-2 focus-within:ring-4 focus-within:ring-primary-100 transition-shadow ${
              showPhoneError ? "border-primary-500" : "border-black/10"
            }`}
          >
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="NP"
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              className="PhoneInput w-full gap-2"
              numberInputProps={{
                className:
                  "w-full bg-transparent px-2 py-2 text-neutral-900 placeholder:text-neutral-400 outline-none",
                onBlur: () => markTouched("phone"),
              }}
              countrySelectProps={{
                className:
                  "rounded-lg border border-black/10 bg-white px-2 py-2 text-sm text-neutral-900 outline-none",
              }}
            />
          </div>

          {showPhoneError ? (
            <p className="text-sm text-primary-600">{errors.phone}</p>
          ) : (
            <p className="text-xs text-neutral-500">
              Only used if we need to reach you quickly. Leave blank if you
              prefer.
            </p>
          )}
        </div>

        <div className="pt-1 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white rounded-full px-6 py-3 font-semibold transition-colors"
          >
            Join waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinEarlyAccessModalContainer;
