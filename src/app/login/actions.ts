"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "admin.nexolve@gmail.com" && password === "nexolve@admin") {
    // Setting cookie (using Next.js 15 async cookies API since next 15+ is commonly used, 
    // but wait, Next.js version in package.json is "16.1.6". Wait, is there Next 16? It's likely 15+ syntax.)
    // Next 15 requires awaiting cookies()
    const cookieStore = await cookies();
    cookieStore.set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    
    redirect("/admin");
  }

  return {
    error: "Invalid email or password",
  };
}
