import { Lock, Send, UserPen } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { boolean, z } from "zod";
import TermsModal from "../components/termsModal/TermsModal";
import { useNavigate } from "react-router-dom";
import pb from "../lib/pb";
import { toast } from "react-toastify";
const shema = z
  .object({
    email: z.email("invalid email address"),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    profileImage: z.file().optional(),
    isTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
    password: z
      .string()
      .min(6, "Must be at least 6 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
        "Must include at least one letter, one number, and one special character"
      ),
    confirmPassword: z.string().min(6, "Must be at least 6 characters"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.custom,
        path: ["confirmPassword"],
        message: "Passwords must match",
      });
    }
  });

function Register() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(shema), mode: "onBlur" });
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { email, fullName, username, password } = data;

      const userData = {
        email,
        username,
        password,
        passwordConfirm: password,
        name: fullName,
      };
      const user = await pb.collection("users").create(userData);

      await pb.collection("users").authWithPassword(email, password);
      document.cookie = pb.authStore.exportToCookie();
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const onError = (error) => {
    console.log(errors);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full">
      <TermsModal isOpen={open} onClose={handleClose} />
      <img
        src="/bgImg.png"
        className="fixed top-0 bottom-0 left-0 right-0 h-screen z-0 w-screen object-cove"
        alt=""
      />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="w-full max-w-[900px] md:min-w-[580px] p-4 md:p-6  bg-black rounded-2xl relative z-10 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[1.3rem] font-heading font-semibold">
                Create your account!
              </h1>
              <p className="text-white/60 font-thin text-xs font-mono">
                Sign up to unlock exclusive featuers
              </p>
            </div>
            <img src="/logo.svg" className="max-w-[150px]" alt="" />
          </div>
          <div className="mt-6 w-full text-xs md:text-sm">
            <div className="flex flex-col gap-5 mt-4 font-mono mb-6">
              {/* fullName */}
              {/* andProfile */}

              <div className="flex gap-3 items-end">
                <div className="flex items-center justify-center rounded-md border border-white/20 p-2 w-22 h-20 bg-white/12">
                  <UserPen className="stroke-[1px] text-white/22" />
                </div>
                <div className="w-full ">
                  <p className="text-xs md:text-sm font-thin font-mono">
                    Full Name
                  </p>
                  <div className="flex items-center rounded-md px-3 border border-white/20 bg-white/12 w-fulll">
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Enter Full Name..."
                      className="w-full bg-transparent text-white outline-none px-2 py-1 h-10 text-xs md:text-sm"
                    />
                  </div>
                  {errors.fullName?.message && (
                    <p className=" text-red-500 text-xs leading-loose mt-1 font-mono">
                      {errors.fullName?.message}
                    </p>
                  )}
                </div>
              </div>
              {/* fullName */}
              {/*use name and email  */}
              <div className="flex items-start gap-3 sm:flex-row flex-col">
                <div className="w-full">
                  {/* useANme */}
                  <p className="text-xs md:text-sm font-thin font-mono">
                    user Name
                  </p>
                  <div className="flex items-center rounded-md px-3 border border-white/20 bg-white/12 w-full">
                    <input
                      type="text"
                      {...register("username")}
                      placeholder="Enter use name..."
                      className="w-full bg-transparent text-white outline-none px-2 py-1 h-10 text-xs md:text-sm"
                    />
                  </div>
                  {errors.username?.message && (
                    <p className=" text-red-500 text-xs leading-loose mt-1 font-mono">
                      {errors.username?.message}
                    </p>
                  )}
                </div>
                {/* email */}
                <div className="w-full">
                  <p className="text-xs md:text-sm font-thin font-mono">
                    Email
                  </p>
                  <div className="flex items-center rounded-md px-3 border border-white/20 bg-white/12 w-full">
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Enter Email Adreess..."
                      className="w-full bg-transparent text-white outline-none px-2 py-1 h-10 text-xs md:text-sm"
                    />
                  </div>
                  {errors.email?.message && (
                    <p className=" text-red-500 text-xs leading-loose mt-1 font-mono">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
              </div>
              {/* email */}
              <div className="flex items-start gap-3 sm:flex-row flex-col">
                <div className="w-full">
                  <p className="text-xs md:text-sm font-thin font-mono">
                    Password
                  </p>
                  <div className="flex items-center rounded-md px-3 border border-white/20 bg-white/12 w-full">
                    <input
                      type="password"
                      placeholder="Enter Password..."
                      {...register("password")}
                      className="w-full bg-transparent text-white outline-none px-2 py-1 h-10"
                    />
                  </div>
                  {errors.password?.message && (
                    <p className=" text-red-500 text-xs leading-loose mt-1 font-mono">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <p className="text-xs md:text-sm font-thin font-mono">
                    Confirm Password
                  </p>
                  <div className="flex items-center rounded-md px-3 border border-white/20 bg-white/12">
                    <input
                      type="password"
                      placeholder="Enter confirm password..."
                      {...register("confirmPassword")}
                      className="w-full bg-transparent text-white outline-none px-2 py-1 h-10"
                    />
                  </div>
                  {errors.confirmPassword?.message && (
                    <p className=" text-red-500 text-xs leading-loose mt-1 font-mono">
                      {errors.confirmPassword?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* remeber */}
            <div className="flex items-center justify-between pb-6 border-b border-white/16 md:flex-row flex-col gap-4">
              <div className="w-full">
                <div className="flex items-center gap-2 w-full">
                  <input
                    {...register("isTerms")}
                    type="checkbox"
                    className="w-4 h-4 border-none"
                  />
                  <span className="text-xs  text-white/90">I accept the</span>{" "}
                  <span
                    onClick={handleOpen}
                    className="text-xs underline cursor-pointer"
                  >
                    Terms & conditions
                  </span>
                </div>
                {errors.isTerms?.message && (
                  <p className=" text-red-500 text-xs leading-loose mt-1 font-mono">
                    {errors.isTerms?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center p-2 py-3 rounded-md justify-center w-full bg-white text-black font-heading text-xs md:text-sm font-semibold"
              >
                {isLoading ? "Loading...." : "Create Account"}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-white/60 text-center mt-4 font-mono">
                alredy have an account?{" "}
                <span onClick={() => navigate("/login")} className="underline">
                  Login
                </span>
              </p>
              <p className="text-center font-mono text-xs text-white/60 mt-7">
                2025 © Demo Panel | FE
              </p>
            </div>
            {/* remeber */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
