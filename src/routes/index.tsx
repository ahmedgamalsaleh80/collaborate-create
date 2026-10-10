import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, BrainCircuit, ShieldCheck, PlayCircle, Users, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "منصة المهندس أحمد جمال — نفهم قبل ما نبرمج يا هندسة" },
      {
        name: "description",
        content:
          "كورسات برمجة وذكاء اصطناعي بالعربي، شرح مبسط من الأساسيات للاحتراف مع المهندس أحمد جمال.",
      },
      { property: "og:title", content: "منصة المهندس أحمد جمال" },
      {
        property: "og:description",
        content: "كورسات برمجة وذكاء اصطناعي بالعربي — نفهم قبل ما نبرمج يا هندسة.",
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Code2,
    title: "كورسات برمجة من الصفر",
    description: "ابدأ رحلتك في البرمجة خطوة بخطوة، من الأساسيات لحد ما تبني مشاريع حقيقية.",
  },
  {
    icon: BrainCircuit,
    title: "ذكاء اصطناعي وتعلم آلي",
    description: "افهم مفاهيم الـ AI والـ Machine Learning بشرح عربي مبسط وتطبيقات عملية.",
  },
  {
    icon: ShieldCheck,
    title: "محتوى محمي ومنظم",
    description: "الكورسات متاحة للطلاب المسجلين والمعتمدين بس، عشان نضمن جودة المجتمع.",
  },
];

const stats = [
  { icon: PlayCircle, value: "+120", label: "درس فيديو" },
  { icon: Users, value: "+500", label: "طالب مسجل" },
  { icon: Code2, value: "+8", label: "كورسات متخصصة" },
];

function Index() {
  return (
    <div className="bg-hero-gradient">
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-24 text-center">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          نفهم قبل ما نبرمج يا هندسة
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-snug md:text-6xl md:leading-tight">
          اتعلم البرمجة والذكاء الاصطناعي
          <span className="text-gradient-azure block">بالعربي ومن الأساس</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          منصة تعليمية متخصصة بتقدم كورسات برمجة وذكاء اصطناعي بشرح عربي مبسط،
          من الأساسيات للاحتراف، مع متابعة شخصية لكل طالب.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/auth"
            search={{ mode: "register" }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
          >
            ابدأ رحلتك دلوقتي
            <ArrowLeft className="size-4" />
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-accent"
          >
            تصفح الكورسات
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border/60 bg-card-gradient p-4">
              <s.icon className="mx-auto size-6 text-primary" />
              <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="text-center font-display text-3xl font-bold">ليه تختار المنصة؟</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          منهجية تعليمية بتركز على الفهم العميق قبل كتابة الكود
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border/60 bg-card-gradient p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-bold">جاهز تبدأ؟</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            سجّل حسابك وهيتم مراجعته من الإدارة، وبعد الموافقة هتقدر تدخل على الكورسات المخصصة ليك.
          </p>
          <Link
            to="/auth"
            search={{ mode: "register" }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
          >
            إنشاء حساب جديد
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
