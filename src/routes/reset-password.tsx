import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { KeyRound } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "استعادة كلمة المرور — منصة المهندس أحمد جمال" },
      { name: "description", content: "استعد كلمة المرور الخاصة بحسابك على المنصة." },
      { property: "og:title", content: "استعادة كلمة المرور — منصة المهندس أحمد جمال" },
      { property: "og:description", content: "استعد كلمة المرور الخاصة بحسابك." },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);

  // هيتم ربطه بـ Supabase resetPasswordForEmail في المرحلة 2
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.info("جاري تجهيز خاصية استعادة كلمة المرور", {
      description: "هيتم تفعيلها مع نظام المصادقة في المرحلة التالية.",
    });
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-hero-gradient px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card-gradient p-8 shadow-2xl shadow-black/30">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <KeyRound className="size-6" />
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold">استعادة كلمة المرور</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            اكتب بريدك الإلكتروني وهنبعتلك رابط إعادة تعيين كلمة المرور
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              required
              dir="ltr"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
          </button>
        </form>

        <div className="mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground">
          فاكر كلمة المرور؟{" "}
          <Link to="/auth" search={{ mode: "login" }} className="font-medium text-primary hover:underline">
            سجّل دخولك
          </Link>
        </div>
      </div>
    </div>
  );
}
