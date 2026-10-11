import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Menu,
  MessageCircle,
  NotebookPen,
  Target,
  Users,
  X,
  Clock3,
  FileText,
  Trophy,
  Sparkles,
  Search,
  Compass,
} from "lucide-react";

// Replace these placeholders with your real Google Forms links and QR image paths.
const REGISTRATION = {
  participant: {
    title: "Đăng ký tham gia Study Buddy",
    description:
      "Đăng ký nhu cầu học tập để chúng mình hiểu môn học, mục tiêu và lịch rảnh của bạn.",
    url: "https://forms.google.com",
    qr: "",
  },
  mentor: {
    title: "Đăng ký ứng tuyển Peer Mentor",
    description:
      "Chia sẻ kiến thức và đồng hành cùng những sinh viên đang cần hỗ trợ.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfRSegxuyiyuapF0WjPJ1x0tb5trAW7aHWlMBCuiRJM3UfuCw/viewform",
    qr: "",
  },
};
const logoUrl = "/img/studyBuddyLogo.jpg";
const problems = [
  {
    icon: Search,
    title: "Khó tìm người học cùng",
    text: "Muốn học nhóm nhưng chưa biết tìm người có cùng nhu cầu ở đâu.",
    color: "bg-brand-sky text-brand-blue",
  },
  {
    icon: CalendarDays,
    title: "Lịch học không khớp",
    text: "Mỗi người một thời gian rảnh, khó thống nhất buổi học.",
    color: "bg-brand-mint text-brand-green",
  },
  {
    icon: Target,
    title: "Khác mục tiêu học tập",
    text: "Cùng ngồi học nhưng mỗi người lại muốn đạt được điều khác nhau.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Users,
    title: "Nhóm học dễ bỏ cuộc",
    text: "Thiếu kế hoạch và động lực khiến nhóm dần không còn hoạt động.",
    color: "bg-violet-100 text-violet-700",
  },
];
const steps = [
  [
    "01",
    "Đăng ký nhu cầu",
    "Chia sẻ môn học, mục tiêu, lịch rảnh và điều bạn cần hỗ trợ.",
  ],
  [
    "02",
    "Kết nối phù hợp",
    "Tìm sinh viên có môn học, thời gian và mục tiêu tương đồng.",
  ],
  [
    "03",
    "Hình thành nhóm",
    "Cùng thống nhất mục tiêu, lịch học và cách phối hợp.",
  ],
  [
    "04",
    "Học cùng Mentor",
    "Trao đổi kiến thức, gỡ rối chủ đề khó và chia sẻ phương pháp.",
  ],
  [
    "05",
    "Cùng tiến bộ",
    "Thực hiện thử thách, phản hồi và duy trì động lực học tập.",
  ],
];
const mentorTasks = [
  "Chia sẻ kiến thức và kinh nghiệm học tập",
  "Giải thích lý thuyết hoặc chủ đề khó",
  "Chia sẻ tài liệu và phương pháp học",
  "Hỗ trợ các nhóm trong Mentor Session 60–90 phút",
  "Đồng hành cùng các thử thách học tập hằng tuần",
];
const mentorBenefits = [
  "Phát triển kỹ năng giao tiếp và thuyết trình",
  "Bổ sung trải nghiệm cho CV & Portfolio",
  "Rèn luyện kỹ năng lãnh đạo và mentoring",
  "Mở rộng kết nối với sinh viên khác",
  "Thời gian tham gia linh hoạt",
];
const faqs = [
  [
    "Study Buddy là gì?",
    "Study Buddy là chương trình hỗ trợ học tập đồng đẳng dành cho sinh viên FPT University, giúp kết nối nhóm học nhỏ và duy trì việc học với mục tiêu rõ ràng cùng sự hỗ trợ của Peer Mentor.",
  ],
  [
    "Ai có thể tham gia Study Buddy?",
    "Sinh viên FPT quan tâm đến việc học cùng người khác, chia sẻ kiến thức và duy trì động lực học tập đều có thể đăng ký.",
  ],
  [
    "Tôi có cần học thật xuất sắc mới được làm Peer Mentor không?",
    "Không nhất thiết. Điều quan trọng là bạn nắm vững kiến thức mình chia sẻ, có trách nhiệm và sẵn lòng hỗ trợ các bạn khác.",
  ],
  [
    "Study Buddy có phải lớp học thêm không?",
    "Không. Đây là hoạt động học tập đồng đẳng; Peer Mentor chia sẻ kinh nghiệm và hỗ trợ học tập, không thay thế giảng viên.",
  ],
  [
    "Tôi có bắt buộc tham gia mọi buổi học không?",
    "Bạn hãy đăng ký nhu cầu và thời gian có thể tham gia. Nhóm sẽ trao đổi để thống nhất lịch phù hợp với các thành viên.",
  ],
  [
    "Làm thế nào để đăng ký?",
    "Chọn hình thức tham gia phù hợp, sau đó quét QR hoặc mở Google Form từ phần đăng ký trên website.",
  ],
];

function Brand({ light = false }) {
  return (
    <a
      href="#hero"
      className="flex shrink-0 items-center gap-3"
      aria-label="Study Buddy - Trang chủ"
    >
      <img
        src={logoUrl}
        alt="Logo Study Buddy"
        className="h-11 w-11 rounded-full bg-white object-contain"
      />
      <span
        className={`leading-tight ${light ? "text-white" : "text-brand-navy"}`}
      >
        <strong className="block text-xl font-black tracking-tight">
          Study{" "}
          <span className={light ? "text-brand-yellow" : "text-brand-green"}>
            Buddy
          </span>
        </strong>
        <small
          className={`mt-1 block text-[10px] font-bold tracking-wide ${light ? "text-white/75" : "text-slate-500"}`}
        >
          Find • Match • Study • Improve
        </small>
      </span>
    </a>
  );
}
function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-mint px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-green">
        <Sparkles size={14} />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

const openForm = (type) => {
  const url = REGISTRATION[type].url;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registration, setRegistration] = useState(null);
  const nav = [
    ["Về dự án", "#about"],
    ["Khảo sát", "#survey"],
    ["Cách hoạt động", "#how-it-works"],
    ["Peer Mentor", "#peer-mentor"],
    ["Hỏi đáp", "#faq"],
  ];
  const go = () => setMenuOpen(false);
  return (
    <div className="overflow-hidden bg-white text-slate-700">
      <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/90 px-4 py-3 backdrop-blur-lg sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Brand />
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-bold text-slate-600 transition hover:text-brand-blue"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden sm:block">
            <button className="rounded-full border-2 border-brand-navy bg-brand-blue px-5 py-2.5 text-sm font-extrabold text-white shadow-comic-blue transition hover:-translate-y-0.5">
              <a href="#register">
                Đăng ký tham gia{" "}
                <ArrowRight className="ml-1 inline" size={16} />
              </a>
            </button>
          </div>
          <button
            className="rounded-xl p-2 text-brand-navy hover:bg-brand-sky lg:hidden"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg lg:hidden">
            {nav.map(([label, href]) => (
              <a
                onClick={go}
                key={href}
                href={href}
                className="rounded-xl px-3 py-3 font-bold hover:bg-brand-sky"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => openForm(participant)}
              className="mt-1 rounded-xl bg-brand-blue px-4 py-3 font-bold text-white"
            >
              Đăng ký tham gia
            </button>
          </nav>
        )}
      </header>

      <main>
        <section
          id="hero"
          className="relative isolate bg-gradient-to-br from-white via-brand-surface to-brand-sky/70"
        >
          <div className="absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-brand-mint/70 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-xs font-extrabold tracking-wide text-brand-blue shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                CHƯƠNG TRÌNH HỖ TRỢ HỌC TẬP ĐỒNG ĐẲNG
              </span>
              <h1 className="mt-7 text-4xl font-black leading-[1.13] tracking-tight text-brand-navy sm:text-5xl lg:text-[4rem]">
                Đừng học
                <br />
                một mình.
                <br />
                <span className="text-brand-blue">Tiến bộ cùng nhau.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-brand-navy/90">
                Tìm đúng bạn học. Chia sẻ mục tiêu. Cùng nhau xây dựng hành
                trình học tập tích cực hơn.
              </p>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Study Buddy kết nối sinh viên có môn học, mục tiêu và lịch học
                phù hợp — đồng thời giúp nhóm duy trì động lực với sự hỗ trợ của
                Peer Mentor.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => openForm("participant")}
                  className="rounded-full border-2 border-brand-navy bg-brand-blue px-6 py-3.5 font-extrabold text-white shadow-comic transition hover:-translate-y-1"
                >
                  Tìm bạn học cùng{" "}
                  <ArrowRight className="ml-2 inline" size={18} />
                </button>
                <a
                  href="#how-it-works"
                  className="rounded-full border-2 border-brand-navy/15 bg-white px-6 py-3.5 text-center font-extrabold text-brand-navy transition hover:border-brand-green"
                >
                  Khám phá cách hoạt động{" "}
                  <ArrowRight className="ml-2 inline" size={18} />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm font-bold text-slate-500">
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-sky text-brand-blue">
                    <Users size={15} />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-mint text-brand-green">
                    <BookOpen size={15} />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-amber-700">
                    <HeartHandshake size={15} />
                  </span>
                </div>
                Sinh viên đồng hành cùng sinh viên
              </div>
            </div>
            <div className="hero-art relative mx-auto w-full max-w-xl">
              <div className="relative mx-auto flex aspect-square max-w-[520px] items-center justify-center">
                <div className="absolute inset-[8%] rounded-[42%_58%_53%_47%] bg-brand-sky" />
                <div className="absolute inset-[18%] rounded-full border-2 border-dashed border-brand-blue/25" />
                <div className="relative grid w-[78%] grid-cols-2 gap-3 rounded-[32px] border-2 border-brand-navy bg-white p-4 shadow-comic sm:p-7">
                  <div className="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-brand-surface py-4">
                    <span className="font-extrabold">✦ STUDDY</span>
                    <span className="text-brand-green font-extrabold">
                      BUDDY ✦
                    </span>
                  </div>
                  <div className="rounded-2xl bg-brand-blue px-3 py-5 text-center text-white">
                    <Users className="mx-auto mb-2" size={30} />
                    <p className="text-sm font-extrabold">Kết nối</p>
                  </div>
                  <div className="rounded-2xl bg-brand-mint px-3 py-5 text-center text-brand-green">
                    <Lightbulb className="mx-auto mb-2" size={30} />
                    <p className="text-sm font-extrabold">Chia sẻ</p>
                  </div>
                  <div className="col-span-2 rounded-2xl bg-amber-100 px-3 py-3 text-center text-sm font-extrabold text-brand-navy">
                    Find • Match • Study • Improve
                  </div>
                </div>
                <span className="absolute bottom-[10%] left-[7%] flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-brand-navy bg-brand-green text-white shadow-comic-blue">
                  <HeartHandshake size={25} />
                </span>
                <span className="absolute bottom-[12%] right-[7%] flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-brand-navy bg-brand-yellow text-brand-navy shadow-comic-blue">
                  <Sparkles size={25} />
                </span>
              </div>
              <p className="mx-auto max-w-sm text-center text-sm font-semibold text-brand-navy/70">
                Một cộng đồng nhỏ, những mục tiêu rõ ràng, và hành trình học tập
                bền vững hơn.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Hiểu vấn đề"
              title="Bạn có từng gặp những tình huống này?"
              description="Muốn học tốt hơn không phải lúc nào cũng dễ dàng khi bạn phải tự xoay xở một mình."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map(({ icon: Icon, title, text, color }, i) => (
                <article
                  key={title}
                  className={`rounded-[26px] border-2 border-brand-navy/10 p-6 transition hover:-translate-y-1 hover:shadow-card-soft bg-white`}
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
                  >
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-extrabold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="survey"
          className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Từ khảo sát thực tế"
              title="Bạn không phải người duy nhất."
              description="Kết quả khảo sát của nhóm dự án với 55 sinh viên cho thấy nhu cầu kết nối và duy trì nhóm học là điều đáng quan tâm."
            />
            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-[28px] border-2 border-brand-navy bg-white p-7 shadow-comic">
                <p className="text-5xl font-black tracking-tight text-brand-blue sm:text-6xl">
                  78.1<span className="text-3xl">%</span>
                </p>
                <p className="mt-4 font-extrabold text-brand-navy">
                  Gặp khó khăn tìm bạn học phù hợp
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Ít nhất đôi khi trong quá trình học.
                </p>
              </article>
              <article className="rounded-[28px] border-2 border-brand-navy bg-brand-mint p-7">
                <p className="text-5xl font-black tracking-tight text-brand-green sm:text-6xl">
                  47.3<span className="text-3xl">%</span>
                </p>
                <p className="mt-4 font-extrabold text-brand-navy">
                  Từng có nhóm học không hiệu quả
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nhóm không duy trì được hoạt động như mong muốn.
                </p>
              </article>
              <article className="rounded-[28px] border-2 border-brand-navy bg-amber-50 p-7">
                <p className="text-5xl font-black tracking-tight text-amber-700 sm:text-6xl">
                  69.1<span className="text-3xl">%</span>
                </p>
                <p className="mt-4 font-extrabold text-brand-navy">
                  Coi trọng mục tiêu học tập chung
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Một yếu tố quan trọng khi lựa chọn bạn học.
                </p>
              </article>
            </div>
            <p className="mt-6 text-center text-xs text-slate-500">
              Nguồn: Khảo sát nội bộ của dự án Study Buddy, n = 55 sinh viên.
              Kết quả không đại diện cho toàn bộ sinh viên FPT.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Lộ trình đồng hành"
              title="Kết nối chỉ là bước đầu."
              description="Study Buddy giúp nhóm có mục tiêu, sự hỗ trợ và hoạt động để tiếp tục học cùng nhau — không chỉ dừng lại ở việc tìm bạn."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map(([number, title, text], i) => (
                <article
                  key={number}
                  className={`relative rounded-[26px] border-2 border-brand-navy p-6 ${i % 2 === 0 ? "bg-brand-sky" : "bg-white"} shadow-[4px_4px_0_#0F2D59]`}
                >
                  <span
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black ${i === 3 ? "bg-brand-green text-white" : "bg-brand-blue text-white"}`}
                  >
                    {number}
                  </span>
                  <h3 className="text-base font-extrabold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                  {i < 4 && (
                    <ArrowRight
                      className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border-2 border-brand-navy bg-brand-yellow p-1 text-brand-navy lg:block"
                      size={28}
                    />
                  )}
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[26px] bg-brand-navy p-6 text-white sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white/10 p-3 text-brand-yellow">
                  <Compass size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">
                    Không chỉ tìm người học cùng.
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-white/75">
                    Cùng thống nhất mục tiêu, duy trì lịch học và có người hỗ
                    trợ khi gặp chủ đề khó.
                  </p>
                </div>
              </div>
              <button
                onClick={() => openForm("participant")}
                className="shrink-0 rounded-full bg-brand-yellow px-5 py-3 font-extrabold text-brand-navy transition hover:scale-[1.02]"
              >
                Bắt đầu hành trình{" "}
                <ArrowRight className="ml-1 inline" size={16} />
              </button>
            </div>
          </div>
        </section>

        <section
          id="peer-mentor"
          className="relative bg-gradient-to-br from-brand-sky via-white to-brand-mint px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-brand-blue px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white">
                Dành cho người muốn sẻ chia
              </span>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-brand-navy sm:text-5xl">
                Chia sẻ kiến thức.
                <br />
                <span className="text-brand-green">Lan tỏa giá trị.</span>
              </h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-brand-navy">
                Bạn không cần phải là một “giảng viên”. Chỉ cần có kiến thức và
                sẵn sàng chia sẻ, bạn đã có thể giúp một người khác tiến bộ.
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                Peer Mentor là sinh viên đồng hành, giúp giải thích chủ đề khó,
                chia sẻ kinh nghiệm và hỗ trợ nhóm học duy trì hoạt động. Vai
                trò này không thay thế giảng viên.
              </p>
              <button
                onClick={() => openForm("mentor")}
                className="mt-7 rounded-full border-2 border-brand-navy bg-brand-green px-6 py-3.5 font-extrabold text-white shadow-comic-green transition hover:-translate-y-1"
              >
                Trở thành Peer Mentor{" "}
                <ArrowRight className="ml-2 inline" size={18} />
              </button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-[28px] border-2 border-brand-navy bg-white p-6 shadow-comic-blue">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                  <BookOpen size={26} />
                </div>
                <h3 className="mb-4 text-xl font-black text-brand-navy">
                  Bạn sẽ làm gì?
                </h3>
                <ul className="space-y-3">
                  {mentorTasks.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <Check
                        className="mt-1 shrink-0 rounded-full bg-brand-blue p-0.5 text-white"
                        size={18}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[28px] border-2 border-brand-green/40 bg-white p-6 shadow-card-soft">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-brand-green">
                  <Trophy size={26} />
                </div>
                <h3 className="mb-4 text-xl font-black text-brand-navy">
                  Bạn nhận được gì?
                </h3>
                <ul className="space-y-3">
                  {mentorBenefits.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <Check
                        className="mt-1 shrink-0 rounded-full bg-brand-green p-0.5 text-white"
                        size={18}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="register" className="px-4 py-20 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Bắt đầu từ hôm nay"
              title="Bạn muốn đồng hành theo cách nào?"
              description="Dù bạn đang tìm bạn học hay sẵn sàng chia sẻ kiến thức, Study Buddy chào đón bạn."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <article className="relative overflow-hidden rounded-[30px] border-2 border-brand-navy bg-brand-sky p-7 sm:p-9">
                <div className="absolute -right-5 -top-6 h-32 w-32 rounded-full bg-white/60" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-brand-navy bg-white text-brand-blue">
                    <Users size={29} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy">
                    Người tham gia
                  </h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Tìm bạn học cùng, chia sẻ tài liệu, đặt mục tiêu và duy trì
                    động lực học tập.
                  </p>
                  <button
                    onClick={() => openForm("participant")}
                    className="mt-7 rounded-full border-2 border-brand-navy bg-brand-blue px-6 py-3 font-extrabold text-white shadow-comic-blue transition hover:-translate-y-0.5"
                  >
                    Đăng ký tham gia{" "}
                    <ArrowRight className="ml-1 inline" size={17} />
                  </button>
                </div>
              </article>
              <article className="relative overflow-hidden rounded-[30px] border-2 border-brand-navy bg-brand-mint p-7 sm:p-9">
                <div className="absolute -right-5 -top-6 h-32 w-32 rounded-full bg-white/60" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-brand-navy bg-white text-brand-green">
                    <HeartHandshake size={29} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy">
                    Peer Mentor
                  </h3>
                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Chia sẻ điều bạn biết, hỗ trợ sinh viên khác và phát triển
                    kỹ năng mentoring.
                  </p>
                  <button
                    onClick={() => openForm("mentor")}
                    className="mt-7 rounded-full border-2 border-brand-navy bg-brand-green px-6 py-3 font-extrabold text-white shadow-comic-green transition hover:-translate-y-0.5"
                  >
                    Đăng ký làm Mentor{" "}
                    <ArrowRight className="ml-1 inline" size={17} />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Hỏi đáp"
              title="Giải đáp thắc mắc của bạn"
              description="Một vài thông tin trước khi bạn bắt đầu hành trình cùng Study Buddy."
            />
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group mb-3 rounded-2xl border-2 border-brand-navy/10 bg-white p-5 open:border-brand-blue open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-extrabold text-brand-navy">
                  {q}
                  <ChevronDown
                    className="shrink-0 text-brand-blue transition group-open:rotate-180"
                    size={20}
                  />
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-brand-green bg-brand-navy px-4 pb-8 pt-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <Brand light />
              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Sáng kiến hỗ trợ học tập đồng đẳng dành cho sinh viên FPT
                University. Cùng xây dựng môi trường học tập cởi mở, gắn kết và
                cùng tiến bộ.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="mb-4 font-extrabold text-brand-yellow">
                  Khám phá
                </h3>
                <ul className="space-y-3 text-white/75">
                  {nav.map(([label, href]) => (
                    <li key={href}>
                      <a className="hover:text-white" href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-extrabold text-brand-yellow">
                  Tham gia
                </h3>
                <ul className="space-y-3 text-white/75">
                  <li>
                    <button
                      onClick={() => openForm(participant)}
                      className="hover:text-white"
                    >
                      Tìm bạn học cùng
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openForm(mentor)}
                      className="hover:text-white"
                    >
                      Ứng tuyển Peer Mentor
                    </button>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Study Buddy. Find • Match • Study •
              Improve.
            </span>
            <span>Dự án hỗ trợ học tập đồng đẳng dành cho sinh viên FPT.</span>
          </div>
        </div>
      </footer>
      {registration && (
        <RegistrationModal
          type={registration}
          onClose={() => setRegistration(null)}
        />
      )}
    </div>
  );
}
