import { Lock, Send } from "lucide-react";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, z } from "zod";
import { useAsyncError, useNavigate } from "react-router-dom";
import pb from "../lib/pb";
import { toast } from "react-toastify";
const shema = z.object({
  email: z.email("invalid email address"),
  password: z
    .string()
    .min(6, "Must be at least 6 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      "Must include at least one letter, one number, and one special character"
    ),
});

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(shema), mode: "onChange" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);

      console.log("Login successful!", authData);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      console.log(err?.message);
      setErr(err?.message);
    } finally {
      setLoading(false);
    }
  };
  const onError = (error) => {
    console.log(errors.email?.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <img
        src="/bgImg.png"
        className="fixed top-0 bottom-0 left-0 right-0 h-screen z-0 w-screen object-cove"
        alt=""
      />
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="w-full max-w-[400px] md:min-w-[380px] p-4 md:p-6  bg-black rounded-2xl relative z-10 text-white">
          <img src="/logo.svg" className="max-w-[200px]" alt="" />
          <div className="mt-6 w-full">
            <h1 className="text-[1.4rem]  font-semibold">
              Login in to your account!
            </h1>
            <p className="text-white/60 text-xs md:text-sm  mb-4">
              Enter your email and pssword to login
            </p>
            {err && (
              <p className=" mb-2 text-center text-xs text-red-500">{err}</p>
            )}
            <div className="flex flex-col gap-5    mb-6">
              {/* email */}
              <div>
                <div className="flex items-center rounded-md px-3 border border-white/30 bg-white/12">
                  <Send className="text-white/50 stroke-[1px]" />
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter Email Adreess..."
                    className="w-full bg-transparent text-white outline-none px-2 py-1 h-10 text-xs md:text-sm"
                  />
                </div>
                {errors.email?.message && (
                  <p className=" text-red-500 text-xs leading-loose mt-1  ">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              {/* email */}
              <div>
                <div className="flex items-center rounded-md px-3 border border-white/30 bg-white/12">
                  <Lock className="text-white/50 stroke-[1px]" />
                  <input
                    type="password"
                    placeholder="Enter Password..."
                    {...register("password")}
                    className="w-full bg-transparent text-white outline-none px-2 py-1 h-10"
                  />
                </div>
                {errors.password?.message && (
                  <p className=" text-red-500 text-xs leading-loose mt-1  ">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>
            {/* remeber */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 border-none" />
                <span className="text-xs md:text-sm">Remember me</span>
              </div>
              <span className="text-xs md:text-sm text-white/60 cursor-pointer hover:text-white hover:underline">
                Forgot Password?
              </span>
            </div>
            <div className="pb-6 mt-6 border-b border-white/26">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center p-2 py-3 rounded-md justify-center w-full bg-white text-black font-heading text-xs md:text-sm font-semibold"
              >
                {loading ? "Loading...." : "Sign In To Your Accound"}
              </button>
            </div>
            <p className="text-xs md:text-sm text-white/60 text-center mt-4  ">
              Don't have an account?{" "}
            </p>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="flex items-center p-2 py-3 mt-4 rounded-md justify-center w-full border-[1.5px] text-white/80 border-white/40 font-heading text-xs md:text-sm font-semibold"
            >
              Create New Account
            </button>
            <p className="text-center   text-xs text-white/60 mt-7">
              2025 © Demo Panel | FE
            </p>
            {/* remeber */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
