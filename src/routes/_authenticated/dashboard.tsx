import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CheckCircle2, TrendingUp, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "لوحة الطالب — منصة المهندس أحمد جمال" },
      { name: "description", content: "تابع كورساتك وتقدمك الدراسي على منصة المهندس أحمد جمال." },
      { property: "og:title", content: "لوحة الطالب — منصة المهندس أحمد جمال" },
      { property: "og:description", content: "تابع كورساتك وتقدمك الدراسي." },
    ],
  }),
  component: DashboardPage,
});

// واجهة مؤقتة — هتتربط ببيانات الطالب الحقيقية بعد تفعيل المصادقة وقاعدة البيانات
function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold">لوحة الطالب</h1>
      <p className="mt-2 text-muted-foreground">
        تابع كورساتك المسجلة ونسبة تقدمك في كل كورس.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: BookOpen, label: "كورسات مسجلة", value: "0" },
          { icon: CheckCircle2, label: "دروس مكتملة", value: "0" },
          { icon: TrendingUp, label: "متوسط التقدم", value: "0%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border/60 bg-card-gradient p-5">
            <s.icon className="size-5 text-primary" />
            <p className="mt-3 font-display text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border bg-card/40 px-6 py-16 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <PlayCircle className="size-7" />
        </span>
        <h2 className="mt-4 font-display text-xl font-bold">لسه مفيش كورسات مسجلة</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          لما الإدارة تخصص ليك كورس، هيظهر هنا مع كل الدروس ونسبة تقدمك فيه.
        </p>
      </div>
    </div>
  );
}
