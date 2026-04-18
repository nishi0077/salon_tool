import Link from "next/link";

const CORPORATE = "https://techplus-company.com/funect/";
const CONTACT = "https://techplus-company.com/";

/* ─── SVG Icons (inline) ─── */

function IconCalendar({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function IconShield({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconList({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  );
}

function IconChat({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

function IconUsers({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function IconBuilding({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>
  );
}

function IconClipboard({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  );
}

function IconSearch({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconCog({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconArrow({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  );
}

function IconLink({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  );
}

/** ロゴ横のマーク（「F」テキストはクローラーで FFUNECT と連結されやすいためアイコンに統一） */
function LogoMark({ className = "h-9 w-9 text-sm" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-gold text-white shadow ${className}`}
      aria-hidden
    >
      <IconChat className="h-[55%] w-[55%] text-white" />
    </span>
  );
}

/* ─── CTA Buttons ─── */

function CtaPrimary({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a
      href={CORPORATE}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full px-8 py-3 text-sm font-bold shadow-lg transition hover:scale-[1.02] active:scale-[0.98] ${
        light
          ? "bg-white text-brand-taupe hover:bg-brand-cream"
          : "bg-gradient-to-r from-brand-rose to-brand-gold text-white"
      } ${className}`}
    >
      2週間トライアルを申し込む
    </a>
  );
}

function CtaSecondary({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a
      href={CONTACT}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full border-2 px-8 py-3 text-sm font-bold transition hover:scale-[1.02] active:scale-[0.98] ${
        light
          ? "border-white/40 text-white hover:bg-white/10"
          : "border-brand-taupe/20 bg-white text-brand-taupe hover:border-brand-gold/50"
      } ${className}`}
    >
      お問い合わせ
    </a>
  );
}

/* ─── CTA Band ─── */

function CtaBand({ text }: { text: string }) {
  return (
    <section className="bg-gradient-to-r from-brand-taupe to-brand-dark px-4 py-12 md:py-14">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-lg font-bold text-white md:text-xl">{text}</p>
        <CtaPrimary light className="flex-shrink-0" />
      </div>
    </section>
  );
}

/* ─── Data ─── */

const painCards = [
  {
    id: "pain-shift",
    icon: <IconCalendar className="h-7 w-7" />,
    title: "シフト管理がめんどくさい...",
    body: "スタッフの勤務時間や施術可能メニュー、カレンダー上の予約状況を一元管理し、現場の負担を減らします。",
  },
  {
    id: "pain-refusal",
    icon: <IconShield className="h-7 w-7" />,
    title: "来店拒否機能が欲しい...",
    body: "スタッフごとに時間単位で予約受付不可を設定するなど、枠と条件に基づいて予約をコントロールできます。",
  },
  {
    id: "pain-menu",
    icon: <IconList className="h-7 w-7" />,
    title: "メニューの施術時間と金額を細かく登録したい...",
    body: "カテゴリ・詳細メニュー別に施術時間と金額を整理して登録できます。",
  },
];

const strengths = [
  { icon: <IconArrow className="h-6 w-6" />, title: "分かりやすい導線設計", body: "利用者が迷わず進める流れを意識し、問い合わせや予約までの体験を整えます。" },
  { icon: <IconCog className="h-6 w-6" />, title: "運用しやすい仕組み", body: "導入後の運用まで見据え、扱いやすく続けやすい仕組みづくりを大切にしています。" },
  { icon: <IconUsers className="h-6 w-6" />, title: "顧客対応の最適化支援", body: "顧客との接点を整理し、対応品質の向上と負担軽減の両立を支援します。" },
  { icon: <IconLink className="h-6 w-6" />, title: "継続的な価値提供", body: "一時的な改善で終わらせず、事業に合わせて価値を高め続けることを目指します。" },
];

const features = [
  { icon: <IconBuilding />, title: "複数店舗の登録", body: "同一メールで複数店舗を管理。" },
  { icon: <IconUsers />, title: "利用ユーザー管理", body: "ユーザーごとにログイン・運用。" },
  { icon: <IconBuilding />, title: "店舗情報の登録", body: "営業時間・所在地・ロゴ等を管理。" },
  { icon: <IconSearch />, title: "製品情報の登録", body: "チャットから公式サイトを検索・取得。" },
  { icon: <IconClipboard />, title: "電子カルテ登録", body: "基本情報・施術情報を記録。" },
  { icon: <IconList />, title: "メニュー表登録", body: "カテゴリ別に施術時間・金額を管理。" },
  { icon: <IconChat />, title: "チャット機能", body: "AI回答・予約受付・LINE連携対応。" },
  { icon: <IconCalendar />, title: "予約管理", body: "カレンダー表示・スタッフ別管理。" },
];

const faqs = [
  { q: "今使っている予約システムと併用できますか？", a: "はい。FUNECTは受付業務の自動化・補助を担うレイヤーとして設計しています。既存の予約台帳と役割を分けて導入いただく想定です。" },
  { q: "AIが間違った回答をしたり、クレームにまで自動で答えたりしませんか？", a: "リスクが高い内容はAIが勝手に断定せず、スタッフへ引き継ぎます。現場の安心感を優先した設計です。" },
  { q: "導入や運用は少人数でも回りますか？", a: "24時間の一次対応とFAQの自動化で負荷を下げ、必要な案件だけスタッフが拾える設計を目指しています。" },
  { q: "LINE以外のチャネルは？", a: "チャットを中心とした受付に対応します。詳細はお問い合わせください。" },
  { q: "トライアル後の解約は？", a: "社内ポリシーに合わせてご案内します。お問い合わせください。" },
  { q: "個人情報・ログの扱いは？", a: "プライバシーポリシーをご確認ください。" },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-taupe/10 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="FUNECT トップへ">
            <LogoMark />
            <span className="text-lg font-bold tracking-tight text-brand-taupe">
              FUNECT
              <span className="block text-[10px] font-normal tracking-wide text-brand-muted">AI Concierge</span>
            </span>
          </Link>
          <div className="flex flex-shrink-0 items-center gap-2 md:gap-3">
            <CtaPrimary className="hidden text-xs sm:inline-flex sm:text-sm" />
            <CtaSecondary className="hidden md:inline-flex" />
            <a href={CORPORATE} className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-brand-rose to-brand-gold px-4 py-2 text-xs font-bold text-white shadow sm:hidden">
              トライアル
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero (dark bg) ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-taupe via-brand-dark to-brand-taupe px-4 py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.15),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 inline-block rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-gold">
                AI Concierge for Salon
              </p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                施術中も、休みの日も。
                <br />
                <span className="text-brand-gold">「受付」</span>を、AIがつなぐ。
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                予約の受付・変更・キャンセル、よくある質問、LINEやチャットからの問い合わせまで。少人数の店舗でも、「受付がいる」状態をつくります。
              </p>
              <p className="mt-3 text-sm text-white/60">
                想定外の内容やクレームは、AIが勝手に答えずスタッフへ引き継ぎます。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaPrimary />
                <CtaSecondary light />
              </div>
            </div>

            {/* Phone mock */}
            <div className="flex justify-center" aria-hidden>
              <div className="relative w-[260px] rounded-[2rem] border-4 border-white/20 bg-brand-dark p-2 shadow-2xl md:w-[280px]">
                <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-brand-dark" />
                <div className="overflow-hidden rounded-[1.5rem] bg-white">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-rose to-brand-gold px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-white/80" />
                    <span className="text-xs font-semibold text-white">FUNECT チャット</span>
                  </div>
                  <div className="space-y-2.5 px-3 py-4 text-xs">
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      こんにちは。ご希望のメニューとご希望日を教えてください。
                    </div>
                    <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2 text-brand-taupe">
                      カット＋カラー希望、土曜午後は可能ですか？
                    </div>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      空き状況を確認しています…
                    </div>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      14:00〜の枠でご予約可能です。ご予約しますか？
                    </div>
                    <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2 text-brand-taupe">
                      はい、お願いします！
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Numbers bar ── */}
        <section className="border-b border-brand-taupe/10 bg-white px-4 py-10">
          <div className="mx-auto grid max-w-[900px] gap-6 text-center sm:grid-cols-3">
            {[
              { num: "9,800", unit: "円/月", label: "月額（税抜）" },
              { num: "0", unit: "円", label: "初期費用" },
              { num: "2", unit: "週間", label: "無料トライアル" },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-3xl font-extrabold tabular-nums text-brand-taupe md:text-4xl">
                  {d.num}
                  <span className="ml-1 text-base font-bold text-brand-gold">{d.unit}</span>
                </p>
                <p className="mt-1 text-xs text-brand-muted">{d.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pain ── */}
        <section id="pain" className="bg-brand-light px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-2xl font-extrabold text-brand-taupe md:text-3xl">
              こんなお悩みに
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-muted md:text-base">
              予約台帳だけでは埋まらない、現場の運用負荷にお悩みの方へ。
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {painCards.map((c) => (
                <article key={c.id} id={c.id} className="rounded-2xl border-l-4 border-l-brand-gold bg-white p-6 shadow-sm transition hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-taupe">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band 1 ── */}
        <CtaBand text="まずは2週間、自店の受付をAIに任せてみませんか。" />

        {/* ── About + Strengths ── */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-extrabold text-brand-taupe md:text-3xl">FUNECTとは</h2>
                <p className="mt-6 text-pretty leading-relaxed text-brand-muted">
                  FUNECTは、問い合わせ対応や予約受付の流れを整え、事業者と利用者の双方にとって使いやすい体験を実現するためのサービスです。
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-brand-muted">
                  単なる受付機能ではなく、導線設計や運用のしやすさまで見据え、継続的に価値を生み出す仕組みづくりを支援します。
                </p>
              </div>
              {/* Service flow diagram (CSS only) */}
              <div className="flex items-center justify-center" aria-hidden>
                <div className="flex flex-col items-center gap-3 text-sm">
                  {["お客様がアクセス", "AIが自動で受付・回答", "予約確定 or スタッフへ引き継ぎ"].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="rounded-lg bg-brand-light px-4 py-2 font-medium text-brand-taupe">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="mt-16 text-center text-xl font-bold text-brand-taupe">主な特長</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {strengths.map((s) => (
                <div key={s.title} className="flex gap-4 rounded-2xl border border-brand-taupe/10 bg-white p-5 transition hover:shadow-md">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-bold text-brand-taupe">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-brand-light px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-2xl font-extrabold text-brand-taupe md:text-3xl">
              FUNECTでできること
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm text-brand-muted">
              詳細は{" "}
              <a href={CORPORATE} className="font-medium text-brand-rose underline-offset-2 hover:underline">
                コーポレートサイト
              </a>{" "}
              をご覧ください。
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-lg">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    {f.icon}
                  </div>
                  <p className="font-bold text-brand-taupe">{f.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-brand-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band 2 ── */}
        <CtaBand text="少人数サロンでも「受付がいる」状態をつくれます。" />

        {/* ── LINE ── */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-taupe md:text-3xl">LINEとも連携</h2>
              <p className="mt-6 text-pretty leading-relaxed text-brand-muted">
                公式LINEアカウントがある場合はLINE連携も可能です。チャットごとにAI自動応答のON/OFFを設定でき、難しい案件は店舗対応へ切り替えられます。
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "LINE経由でも自然な会話で予約・変更・質問に対応",
                  "AI自動応答のON/OFFをチャットごとに切り替え",
                  "対応が難しい場合は自動でスタッフへ引き継ぎ",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                    <span className="text-sm text-brand-taupe">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* LINE-style chat mock */}
            <div className="flex justify-center" aria-hidden>
              <div className="w-[280px] overflow-hidden rounded-2xl border border-brand-taupe/10 bg-white shadow-lg">
                <div className="flex items-center gap-2 bg-[#06C755] px-4 py-3">
                  <span className="text-xs font-bold text-white">LINE トーク</span>
                </div>
                <div className="space-y-2.5 bg-[#8CABD9]/10 px-3 py-4 text-xs">
                  <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    明日の予約を変更したいのですが…
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-[#06C755] px-3 py-2 text-white shadow-sm">
                    かしこまりました。ご希望の日時を教えてください。
                  </div>
                  <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    木曜の15時は空いていますか？
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-[#06C755] px-3 py-2 text-white shadow-sm">
                    15:00〜空きがございます。変更しますか？
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="bg-brand-light px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-center text-2xl font-extrabold text-brand-taupe md:text-3xl">
              料金・トライアル
            </h2>
            <div className="mx-auto mt-10 max-w-[480px] overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="bg-gradient-to-r from-brand-rose to-brand-gold px-6 py-4 text-center">
                <p className="text-sm font-semibold text-white/90">シンプルなワンプラン</p>
              </div>
              <div className="px-6 py-8 text-center">
                <p className="text-sm text-brand-muted">月額（税抜）</p>
                <p className="mt-1 text-5xl font-extrabold tabular-nums text-brand-taupe">
                  9,800<span className="ml-1 text-xl font-bold">円</span>
                </p>
                <ul className="mx-auto mt-8 max-w-xs space-y-3 text-left text-sm text-brand-taupe">
                  {["初期費用なし", "追加費用なし", "2週間のトライアル期間付き"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <IconCheck className="h-5 w-5 flex-shrink-0 text-brand-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-brand-muted">
                  お支払い：システム内で決済代行経由のクレジットカード決済を予定
                </p>
                <div className="mt-8">
                  <CtaPrimary className="w-full sm:w-auto" />
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid gap-4 text-center sm:grid-cols-3">
              {[
                { icon: <IconShield className="mx-auto h-6 w-6 text-brand-gold" />, text: "安心のAI引き継ぎ設計" },
                { icon: <IconCalendar className="mx-auto h-6 w-6 text-brand-gold" />, text: "24時間自動受付" },
                { icon: <IconChat className="mx-auto h-6 w-6 text-brand-gold" />, text: "LINE連携対応" },
              ].map((tp) => (
                <div key={tp.text} className="rounded-xl bg-white p-4 shadow-sm">
                  {tp.icon}
                  <p className="mt-2 text-xs font-medium text-brand-taupe">{tp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-center text-2xl font-extrabold text-brand-taupe md:text-3xl">
              よくある質問
            </h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="group rounded-xl border border-brand-taupe/10 bg-white open:border-l-4 open:border-l-brand-gold open:shadow-md">
                  <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-3 px-5 py-4 font-medium text-brand-taupe [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span className="flex-shrink-0 text-lg text-brand-gold transition group-open:hidden">+</span>
                    <span className="hidden flex-shrink-0 text-lg text-brand-gold group-open:inline">−</span>
                  </summary>
                  <p className="border-t border-brand-taupe/10 px-5 pb-4 pt-3 text-sm leading-relaxed text-brand-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="bg-gradient-to-br from-brand-taupe via-brand-dark to-brand-taupe px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-xl font-extrabold text-white md:text-2xl">
              まずは2週間、自店の「受付」を試しませんか。
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">
              トライアル期間中は全機能をお試しいただけます。お気軽にお申し込みください。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaPrimary light />
              <CtaSecondary light />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-dark px-4 py-10 text-sm text-white/70">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="font-bold text-white">
              FUNECT
              <span className="ml-1 text-[10px] font-normal text-white/50">AI Concierge</span>
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://techplus-company.com/" className="hover:text-white hover:underline">株式会社TECH Plus</a>
            <a href="https://techplus-company.com/funect/" className="hover:text-white hover:underline">FUNECT</a>
            <a href="https://techplus-company.com/privacy-policy/" className="hover:text-white hover:underline">プライバシーポリシー</a>
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} 株式会社TECH Plus
        </p>
      </footer>
    </div>
  );
}
