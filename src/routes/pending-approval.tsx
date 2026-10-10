import { createFileRoute, Link } from "@tanstack/react-router";
import { Hourglass, Mail, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/pending-approval")({
  head: () => ({
    meta: [
      { title: "حسابك قيد المراجعة — منصة المهندس أحمد جمال" },
      { name: "description", content: "حسابك قيد المراجعة من إدارة المنصة." },
      { property: "og:title", content: "حسابك قيد المراجعة — منصة المهندس أحمد جمال" },
      { property: "og:description", content: "حسابك قيد المراجعة من إدارة المنصة." },
    ],
  }),
  component: PendingApprovalPage,
});

function PendingApprovalPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-hero-gradient px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-border/60 bg-card-gradient p-10 text-center shadow-2xl shadow-black/30">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-warning/15 text-warning">
          <Hourglass className="size-8" />
        </span>
        <h1 className="mt-6 font-display text-2xl font-bold">حسابك قيد المراجعة</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          شكراً لتسجيلك في منصة المهندس أحمد جمال. حسابك دلوقتي في حالة
          <span className="font-semibold text-warning"> "قيد المراجعة" </span>
          وهيتم تفعيله فور موافقة الإدارة.
        </p>

        <div className="mt-8 space-y-3 text-start">
          <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-4">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">ليه في مراجعة؟</p>
              <p className="mt-1 text-sm text-muted-foreground">
                بنراجع كل حساب جديد عشان نحافظ على جودة المجتمع ونحمي المحتوى التعليمي.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-4">
            <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">هتعرف إمتى؟</p>
              <p className="mt-1 text-sm text-muted-foreground">
                فور الموافقة على حسابك هتقدر تسجل دخولك وتدخل على الكورسات المخصصة ليك مباشرة.
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg border border-border bg-card px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
