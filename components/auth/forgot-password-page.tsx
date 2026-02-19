"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "otp" | "reset" | "success">(
    "email",
  );
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep("otp");
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every((digit) => digit)) {
      setStep("reset");
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      setStep("success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-blue-900">Collegium</span>
        </Link>

        <div className="bg-white rounded-xl border shadow-lg p-8">
          {/* Step 1: Email */}
          {step === "email" && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-blue-900" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600">
                  No worries! Enter your email and we&apos;ll send you a reset
                  code.
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Reset Code
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </>
          )}

          {/* Step 2: OTP */}
          {step === "otp" && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-blue-900" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Enter Verification Code
                </h1>
                <p className="text-gray-600">
                  We&apos;ve sent a 6-digit code to <strong>{email}</strong>
                </p>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-14 text-center text-xl font-bold border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ))}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Verify Code
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Didn&apos;t receive the code?{" "}
                  <button
                    type="button"
                    className="text-blue-900 font-medium hover:underline"
                  >
                    Resend
                  </button>
                </p>
              </form>
            </>
          )}

          {/* Step 3: Reset Password */}
          {step === "reset" && (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-blue-900" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Reset Password
                </h1>
                <p className="text-gray-600">
                  Create a new password for your account
                </p>
              </div>

              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {password && (
                    <p
                      className={`text-sm mt-1 ${password.length >= 8 ? "text-green-600" : "text-gray-500"}`}
                    >
                      {password.length >= 8
                        ? "✓ Password strength: Good"
                        : "Minimum 8 characters required"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  {confirmPassword && (
                    <p
                      className={`text-sm mt-1 ${password === confirmPassword ? "text-green-600" : "text-red-500"}`}
                    >
                      {password === confirmPassword
                        ? "✓ Passwords match"
                        : "Passwords do not match"}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Reset Password
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>
            </>
          )}

          {/* Step 4: Success */}
          {step === "success" && (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Password Reset Successful
              </h1>
              <p className="text-gray-600 mb-6">
                Your password has been reset successfully. You can now sign in
                with your new password.
              </p>
              <Button asChild className="w-full" size="lg">
                <Link href="/login">
                  Sign In
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          )}

          {/* Back Link */}
          {step !== "success" && (
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 mt-6 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
