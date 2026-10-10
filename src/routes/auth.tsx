import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

type AuthSearch = { mode?: "login" | "register" };

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): AuthSearch => ({
    mode: search["mode"] === "register" ? "register" : "login",
  }),
  head: () => ({
    meta: [
      { title: "تسجيل الدخول — منصة المهندس أحمد جمال" },
      { name: "description", content: "سجّل دخولك أو أنشئ حساباً جديداً في منصة المهندس أحمد جمال." },
      { property: "og:title", content: "تسجيل الدخول — منصة المهندس أحمد جمال" },
      { property: "og:description", content: "سجّل دخولك أو أنشئ حساباً جديداً في المنصة." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // المرحلة 2 هتربط ده بـ Supabase Auth — حالياً واجهة فقط
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.info("جاري تجهيز نظام تسجيل الدخول", {
      description: "هيتم تفعيل التسجيل الحقيقي في المرحلة التالية من التطوير.",
    });
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-hero-gradient px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border/60 bg-card-gradient p-8 shadow-2xl shadow-black/30">
          <div className="flex flex-col items-center text-center">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="size-6" />
            </span>
            <h1 className="mt-4 font-display text-2xl font-bold">
              {mode === "register" ? "إنشاء حساب جديد" : "أهلاً بيك تاني"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {mode === "register"
                ? "سجّل بياناتك وهيتم مراجعة حسابك من الإدارة"
                : "سجّل دخولك عشان تكمل رحلة التعلم"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {mode === "register" && (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    الاسم بالكامل
                  </label>
                  <input
                    id="fullName"
                    required
                    placeholder="مثال: أحمد محمد علي"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium">
                    رقم الموبايل <span className="text-muted-foreground">(اختياري)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    dir="ltr"
                    placeholder="01xxxxxxxxx"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </>
            )}

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

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  dir="ltr"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 ps-3 pe-10 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              {mode === "register" && (
                <p className="text-xs text-muted-foreground">8 أحرف على الأقل</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 disabled:opacity-60"
            >
              {loading
                ? "جاري التنفيذ..."
                : mode === "register"
                  ? "إنشاء الحساب"
                  : "تسجيل الدخول"}
            </button>
          </form>

          {mode === "login" && (
            <div className="mt-4 text-center">
              <Link to="/reset-password" className="text-sm text-primary hover:underline">
                نسيت كلمة المرور؟
              </Link>
            </div>
          )}

          <div className="mt-6 border-t border-border/60 pt-4 text-center text-sm text-muted-foreground">
            {mode === "register" ? (
              <>
                عندك حساب بالفعل؟{" "}
                <Link to="/auth" search={{ mode: "login" }} className="font-medium text-primary hover:underline">
                  سجّل دخولك
                </Link>
              </>
            ) : (
              <>
                لسه معندكش حساب؟{" "}
                <Link to="/auth" search={{ mode: "register" }} className="font-medium text-primary hover:underline">
                  أنشئ حساب جديد
                </Link>
              </>
            )}
          </div>
        </div>

        {mode === "register" && (
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            بعد التسجيل، حسابك هيكون في حالة "قيد المراجعة" لحد ما الإدارة توافق عليه،
            وبعدها هتقدر تدخل على الكورسات المخصصة ليك.
          </p>
        )}
      </div>
    </div>
  );
}
