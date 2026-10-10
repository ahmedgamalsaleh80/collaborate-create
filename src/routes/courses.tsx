import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, BrainCircuit, Database, Lock, Clock, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "الكورسات — منصة المهندس أحمد جمال" },
      {
        name: "description",
        content: "تصفح كورسات البرمجة والذكاء الاصطناعي المتاحة على منصة المهندس أحمد جمال.",
      },
      { property: "og:title", content: "الكورسات — منصة المهندس أحمد جمال" },
      { property: "og:description", content: "تصفح كورسات البرمجة والذكاء الاصطناعي المتاحة." },
    ],
  }),
  component: CoursesPage,
});

// بيانات تعريفية مؤقتة — هتتربط بقاعدة البيانات في المرحلة 3
const courses = [
  {
    icon: Code2,
    title: "أساسيات البرمجة بلغة بايثون",
    description: "ابدأ من الصفر: المتغيرات، الشروط، الحلقات، والدوال، مع تمارين عملية على كل درس.",
    lessons: 24,
    hours: 12,
    level: "مبتدئ",
  },
  {
    icon: BrainCircuit,
    title: "مدخل إلى الذكاء الاصطناعي",
    description: "افهم يعني إيه ذكاء اصطناعي وتعلم آلي، وابني أول نموذج تعلم آلي بنفسك.",
    lessons: 18,
    hours: 9,
    level: "متوسط",
  },
  {
    icon: Database,
    title: "قواعد البيانات و SQL",
    description: "صمم قواعد بيانات احترافية واتعلم الاستعلامات من الأساسيات للمتقدم.",
    lessons: 16,
    hours: 8,
    level: "مبتدئ",
  },
];

function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">الكورسات المتاحة</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          اختار الكورس المناسب لمستواك. المحتوى متاح للطلاب المعتمدين المسجلين في كل كورس.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col rounded-2xl border border-border/60 bg-card-gradient p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <c.icon className="size-6" />
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {c.level}
              </span>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">{c.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {c.description}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <PlayCircle className="size-3.5" />
                {c.lessons} درس
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {c.hours} ساعة
              </span>
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-border/60 bg-background/50 px-3 py-2.5 text-sm text-muted-foreground">
              <Lock className="size-4 text-primary" />
              المحتوى متاح بعد الموافقة والتسجيل في الكورس
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="font-display text-2xl font-bold">عايز تدخل على الكورسات؟</h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          سجّل حسابك، واستنى موافقة الإدارة، وبعدها هيتم تخصيص الكورسات المناسبة ليك.
        </p>
        <Link
          to="/auth"
          search={{ mode: "register" }}
          className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
        >
          إنشاء حساب جديد
        </Link>
      </div>
    </div>
  );
}
