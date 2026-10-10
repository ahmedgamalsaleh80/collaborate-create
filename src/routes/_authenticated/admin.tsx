import { createFileRoute } from "@tanstack/react-router";
import { Users, BookOpen, UserCheck, Clock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "لوحة الإدارة — منصة المهندس أحمد جمال" },
      { name: "description", content: "إدارة الطلاب والكورسات والتسجيلات على المنصة." },
      { property: "og:title", content: "لوحة الإدارة — منصة المهندس أحمد جمال" },
      { property: "og:description", content: "إدارة الطلاب والكورسات والتسجيلات." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

// واجهة مؤقتة — إدارة الطلاب والموافقات والكورسات هتتفعل في المراحل 4-6
function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold">لوحة الإدارة</h1>
      <p className="mt-2 text-muted-foreground">
        إدارة حسابات الطلاب والموافقات والكورسات والتسجيلات.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Clock, label: "طلبات قيد المراجعة", value: "0" },
          { icon: Users, label: "إجمالي الطلاب", value: "0" },
          { icon: UserCheck, label: "طلاب معتمدون", value: "0" },
          { icon: BookOpen, label: "الكورسات", value: "0" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border/60 bg-card-gradient p-5">
            <s.icon className="size-5 text-primary" />
            <p className="mt-3 font-display text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border/60 bg-card-gradient p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold">
            <Clock className="size-5 text-warning" />
            طلبات التسجيل الجديدة
          </h2>
          <div className="mt-6 rounded-xl border border-dashed border-border bg-background/40 px-4 py-10 text-center text-sm text-muted-foreground">
            مفيش طلبات قيد المراجعة حالياً
          </div>
        </section>

        <section className="rounded-2xl border border-border/60 bg-card-gradient p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold">
            <BookOpen className="size-5 text-primary" />
            إدارة الكورسات
          </h2>
          <div className="mt-6 rounded-xl border border-dashed border-border bg-background/40 px-4 py-10 text-center text-sm text-muted-foreground">
            إضافة وتعديل الكورسات والدروس هتتاح بعد ربط قاعدة البيانات
          </div>
        </section>
      </div>
    </div>
  );
}
