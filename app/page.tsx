import Link from "next/link";
import Image from "next/image";

const CORPORATE = "https://techplus-company.com/funect/";
const CONTACT = "https://techplus-company.com/%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b/";
const APPLY = "https://portal.funect.net/Apply";

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

function IconHeart({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function IconClock({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function IconSpark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
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
      href={APPLY}
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
    body: "スタッフの勤務時間や施術可能メニュー、予約状況を一元管理。スタッフ自身がログインして自分の予約受付を停止／再開できるので、運用に応じてシフトを自由に組めます。",
  },
  {
    id: "pain-refusal",
    icon: <IconShield className="h-7 w-7" />,
    title: "当日キャンセルを繰り返す客に困ってる...",
    body: "「来店拒否リスト」に設定したお客様からは、以後の予約を一切受け付けません。当日キャンセルを繰り返す常連にも、はっきり線を引けます。",
  },
  {
    id: "pain-menu",
    icon: <IconList className="h-7 w-7" />,
    title: "メニューと指名の組み合わせが複雑...",
    body: "メニュー別に施術時間・金額を登録。スタッフごとに対応可能メニューを設定でき、指名なしの予約は希望メニューに対応できるスタッフへ自動アサインします。",
  },
];

const strengths = [
  { icon: <IconHeart className="h-6 w-6" />, title: "リピーターを取りこぼさない", body: "新規獲得より「来店経験のあるお客様を逃さない」設計。24時間どの瞬間でもチャットが受け付け、思い立ったタイミングで予約を確定できます。" },
  { icon: <IconSpark className="h-6 w-6" />, title: "初期設定の手間を大幅削減", body: "店舗の公式サイトURLからメニューや製品情報を自動取得。導入時の煩雑な情報入力作業を圧縮し、すぐに運用を開始できます。" },
  { icon: <IconClock className="h-6 w-6" />, title: "受付に奪われる時間を施術へ", body: "電話・問い合わせ対応に追われる時間を削減し、本来注力すべき施術サービスへ集中。施術品質の向上が、自然なリピート来店につながります。" },
  { icon: <IconCog className="h-6 w-6" />, title: "現場で使い続けられる設計", body: "AIが勝手に断定せず、想定外はスタッフへ引き継ぎ。少人数店舗でも継続運用できる導線とUIです。" },
];

const features = [
  { icon: <IconBuilding />, title: "複数店舗の登録", body: "同一メールで複数店舗を一元管理。" },
  { icon: <IconUsers />, title: "スタッフ別ユーザー管理", body: "スタッフごとにログイン。各自で予約受付の停止／再開が可能。" },
  { icon: <IconSearch />, title: "ホームページから自動取得", body: "店舗公式サイトのURLから製品・メニュー情報を取得し、初期設定の手間を圧縮。" },
  { icon: <IconList />, title: "メニュー × 担当割当", body: "スタッフごとに対応可能メニューを設定。指名なしは対応可能スタッフへ自動アサイン。" },
  { icon: <IconClipboard />, title: "事前カルテ作成", body: "予約確定時、未登録のお客様には来店カードURLを自動送付。来店前に入力で電子カルテが事前作成されます。" },
  { icon: <IconCalendar />, title: "予約枠の柔軟調整", body: "メニューの施術時間で枠を確定。予約ごとに施術時間を個別変更でき、予約と予約の間に大きな空きが生まれません。" },
  { icon: <IconChat />, title: "Webチャット & LINE連携", body: "Webチャットを軸にLINE連携にも対応。AIが受付・回答、難しい案件はスタッフへ。" },
  { icon: <IconShield />, title: "来店拒否リスト", body: "当日キャンセルを繰り返す顧客を登録すると、以後の予約受付を一切ブロック。" },
];

const faqs = [
  { q: "今使っている予約システムと併用できますか？", a: "はい。FUNECTは受付業務の自動化・補助を担うレイヤーとして設計しています。既存の予約台帳と役割を分けて導入いただく想定です。なお、既存予約システムとの併用は可能ですが、システム間の自動連携は行いませんので、お客様管理のもとで併用をお願いいたします。" },
  { q: "AIが間違った回答をしたり、クレームにまで自動で答えたりしませんか？", a: "リスクが高い内容はAIが勝手に断定せず、スタッフへ引き継ぎます。現場の安心感を優先した設計です。" },
  { q: "導入時の初期設定は大変ですか？", a: "店舗の公式ホームページからメニューや製品情報を自動取得する仕組みを備えており、初期設定の作業を大幅に削減しています。基本情報の登録だけで運用を開始できます。" },
  { q: "対応チャネルは？", a: "Webサイトに設置するチャットを中心に、公式LINEアカウントとの連携にも対応しています。" },
  { q: "事前のカルテ登録はどうやりますか？", a: "予約確定時、未登録のお客様には来店カード入力用のURLを自動でご案内します。来店前に入力・送信いただくと、電子カルテが事前に作成されます。" },
  { q: "トライアル後の解約はどうなりますか？", a: "トライアル終了後、継続利用の支払い登録をしない限り自動的に「利用停止」状態へ移行します（解約と同じ扱い）。アカウントは削除されないため、再開したい場合は支払い登録から1ヶ月分の利用料金をお支払いいただくことでそのまま再開できます。" },
  { q: "決済手段は？", a: "クレジットカード決済のみ対応しています。決済代行はStripeを利用します。" },
  { q: "個人情報・ログの扱いは？", a: "プライバシーポリシーをご確認ください。" },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-taupe/10 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center" aria-label="FUNECT - AI Concierge トップへ">
            <Image
              src="/funect-logo.png"
              alt="FUNECT - AI Concierge"
              width={345}
              height={398}
              priority
              className="h-16 w-auto md:h-20"
            />
          </Link>
          <div className="flex flex-shrink-0 items-center gap-2 md:gap-3">
            <CtaPrimary className="hidden text-xs sm:inline-flex sm:text-sm" />
            <CtaSecondary className="hidden md:inline-flex" />
            <a href={APPLY} className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-brand-rose to-brand-gold px-4 py-2 text-xs font-bold text-white shadow sm:hidden">
              トライアル
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero (dark bg) ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-taupe via-brand-dark to-brand-taupe px-4 py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.15),transparent_60%)]" />
          <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-center md:gap-12">
            {/* テキスト + CTA（PCのみCTA表示） */}
            <div className="order-1 md:flex-1">
              <p className="mb-5 inline-block rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-gold">
                AI Concierge for Salon
              </p>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                <span className="text-brand-gold">リピーター</span>を、
                <br className="hidden md:block" />
                逃がさないサロンへ。
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                予約の受付・変更・キャンセル、よくある質問への対応まで、Webチャット／LINEでまるごと自動化。施術中も休みの日も、24時間「受付がいる」状態をつくり、来店経験のあるお客様を取りこぼしません。
              </p>
              <p className="mt-3 text-sm text-white/60">
                想定外の内容やクレームは、AIが勝手に答えずスタッフへ引き継ぎます。
              </p>
              {/* PC: テキスト直下にCTA / SP: モックの下に出すので非表示 */}
              <div className="mt-8 hidden flex-col gap-3 md:flex md:flex-row md:items-center">
                <CtaPrimary />
                <CtaSecondary light />
              </div>
            </div>

            {/* Phone mock — 平面表示 */}
            <div className="order-2 flex justify-center md:flex-1" aria-hidden>
              <div className="relative w-[260px] rounded-[2rem] border-4 border-white/20 bg-brand-dark p-2 shadow-2xl md:w-[280px]">
                <div className="overflow-hidden rounded-[1.5rem] bg-white">
                  {/* ヘッダー：ノッチを内包し、テキストは下段に配置して被りを回避 */}
                  <div className="relative bg-gradient-to-r from-brand-rose to-brand-gold px-4 pt-6 pb-3">
                    {/* ノッチ（ヘッダー内の最上端中央） */}
                    <div className="absolute left-1/2 top-1 h-4 w-16 -translate-x-1/2 rounded-full bg-brand-dark" />
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/80" />
                      <span className="text-xs font-semibold text-white">FUNECT チャット</span>
                    </div>
                  </div>
                  <div className="space-y-2 px-3 py-4 text-[11px]">
                    <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2 text-brand-taupe">
                      明日空いてますか？
                    </div>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      ご希望のメニューを選んでください（カット／カラー／パーマ…）
                    </div>
                    <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2 text-brand-taupe">
                      カット
                    </div>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      明日のカットの空きは 11:00 / 13:00 / 16:00 です。
                    </div>
                    <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2 text-brand-taupe">
                      カラーも追加したい
                    </div>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      カット＋カラーの空きは 11:00 / 16:00 です。
                    </div>
                    <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2 text-brand-taupe">
                      担当を◯◯さんで
                    </div>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-brand-light px-3 py-2 text-brand-taupe">
                      ◯◯指名の空きは 16:00 です。ご予約しますか？
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SPのみ表示：モック直下のCTA */}
            <div className="order-3 flex flex-col gap-3 sm:flex-row sm:items-center md:hidden">
              <CtaPrimary className="w-full sm:w-auto" />
              <CtaSecondary light className="w-full sm:w-auto" />
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
            {/* セクションヘッダー（中央寄せ） */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-brand-rose">SERVICE FLOW</p>
              <h2 className="mt-3 text-2xl font-extrabold text-brand-taupe md:text-3xl">FUNECTとは</h2>
              <div className="mx-auto mt-4 h-0.5 w-12 bg-brand-gold" />
              <p className="mt-6 text-pretty text-sm leading-relaxed text-brand-muted md:text-base">
                FUNECTは、問い合わせ対応や予約受付の流れを整え、サロンの「受付」をまるごと自動化するAIコンシェルジュです。
                <br className="hidden md:block" />
                施術中も休みの日も、24時間お客様を取りこぼさない仕組みを、たった3ステップでつくります。
              </p>
            </div>

            {/* ①②③ カード横並び */}
            <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
              {[
                {
                  num: 1,
                  title: "お客様がアクセス",
                  body: "ホームページやLINEから、24時間いつでも気軽にチャット開始。「明日空いてる？」のひと言で会話が始まります。",
                  gradient: "from-brand-rose/15 via-brand-gold/10 to-brand-cream",
                  icon: <IconChat />,
                  accent: "text-brand-rose",
                },
                {
                  num: 2,
                  title: "AIが自動で受付・回答",
                  body: "メニュー・空き時間・担当指名を会話形式で案内。よくある質問や事前カルテの送付までAIが対応します。",
                  gradient: "from-brand-gold/15 via-brand-rose/10 to-brand-cream",
                  icon: <IconSpark />,
                  accent: "text-brand-gold",
                },
                {
                  num: 3,
                  title: "予約確定 or スタッフへ",
                  body: "条件が揃えばその場で予約確定。判断が必要な内容やクレームは、AIが勝手に答えずスタッフへ自然に引き継ぎます。",
                  gradient: "from-brand-cream via-brand-gold/15 to-brand-rose/15",
                  icon: <IconCalendar />,
                  accent: "text-brand-rose",
                },
              ].map((step) => (
                <article
                  key={step.num}
                  className="relative rounded-2xl border border-brand-taupe/10 bg-white p-6 pt-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* 番号バッジ（カード上端中央に浮かせる） */}
                  <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-gold text-sm font-extrabold text-white shadow-lg ring-4 ring-white">
                    {step.num}
                  </span>

                  {/* 画像エリア（差し替え可能なビジュアルブロック） */}
                  <div
                    className={`relative mt-2 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${step.gradient}`}
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_55%)]" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 text-brand-rose shadow-sm backdrop-blur-sm [&>svg]:h-10 [&>svg]:w-10">
                      {step.icon}
                    </div>
                  </div>

                  {/* タイトル + アクセント線 */}
                  <h3 className={`mt-5 text-center text-base font-bold md:text-lg ${step.accent}`}>
                    {step.title}
                  </h3>
                  <div className="mx-auto mt-2 h-px w-12 bg-brand-gold/40" />

                  {/* 説明 */}
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted">{step.body}</p>
                </article>
              ))}
            </div>

            <h3 className="mt-20 text-center text-xl font-bold text-brand-taupe">主な特長</h3>
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

        {/* ── 対応チャネル（Webチャット & LINE連携） ── */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold tracking-wide text-brand-gold">
                対応チャネル
              </p>
              <h2 className="text-2xl font-extrabold text-brand-taupe md:text-3xl">
                Webチャット ＆ LINE連携
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-brand-muted">
                サロン公式サイトに設置するWebチャットを軸に、公式LINEアカウントとの連携にも対応。お客様が普段使う場所で、思い立ったその瞬間に予約まで進められます。
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Webチャット：サイト来訪者をその場で予約へ",
                  "LINE連携：既存のLINE友だちもそのまま受付窓口に",
                  "AI自動応答のON/OFFをチャットごとに切替、難しい案件はスタッフへ引き継ぎ",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                    <span className="text-sm text-brand-taupe">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* デュアルチャネル モック */}
            <div className="flex justify-center gap-4" aria-hidden>
              {/* Webチャット */}
              <div className="w-[150px] overflow-hidden rounded-2xl border border-brand-taupe/10 bg-white shadow-lg sm:w-[170px]">
                <div className="flex items-center gap-2 bg-gradient-to-r from-brand-rose to-brand-gold px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span className="text-[10px] font-bold text-white">Web Chat</span>
                </div>
                <div className="space-y-1.5 px-2 py-3 text-[10px]">
                  <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-brand-light px-2 py-1.5 text-brand-taupe">
                    ご希望のメニューは？
                  </div>
                  <div className="ml-auto max-w-[90%] rounded-lg rounded-tr-sm bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-2 py-1.5 text-brand-taupe">
                    カット
                  </div>
                  <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-brand-light px-2 py-1.5 text-brand-taupe">
                    明日 11:00 / 13:00 / 16:00
                  </div>
                </div>
              </div>
              {/* LINE */}
              <div className="w-[150px] overflow-hidden rounded-2xl border border-brand-taupe/10 bg-white shadow-lg sm:w-[170px]">
                <div className="flex items-center gap-2 bg-[#06C755] px-3 py-2">
                  <span className="text-[10px] font-bold text-white">LINE</span>
                </div>
                <div className="space-y-1.5 bg-[#8CABD9]/10 px-2 py-3 text-[10px]">
                  <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 shadow-sm">
                    予約変更したいです
                  </div>
                  <div className="ml-auto max-w-[90%] rounded-lg rounded-tr-sm bg-[#06C755] px-2 py-1.5 text-white shadow-sm">
                    変更先の日時は？
                  </div>
                  <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 shadow-sm">
                    木曜15時で
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 導入後の未来 ── */}
        <section className="bg-brand-light px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <p className="mx-auto mb-3 inline-block rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold tracking-wide text-brand-gold">
              導入後の未来
            </p>
            <h2 className="text-2xl font-extrabold text-brand-taupe md:text-3xl">
              受付に追われる時間を、
              <br className="hidden md:block" />
              <span className="text-brand-gold">本来の施術と、お客様への時間</span>へ。
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-brand-muted">
              電話・問い合わせ・予約調整に奪われていた時間を大幅に削減。生まれた余白をそのまま施術品質と接客に投じられるので、お客様満足が高まり、自然なリピート来店につながります。
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <IconClock className="h-7 w-7" />,
                  step: "01",
                  title: "受付の時間が消える",
                  body: "予約・変更・キャンセル・FAQをチャットが自動対応。スタッフは施術中も電話に追われません。",
                },
                {
                  icon: <IconSpark className="h-7 w-7" />,
                  step: "02",
                  title: "施術と接客に集中できる",
                  body: "生まれた余白を施術品質・カウンセリング・接客に投資。1人ひとりに丁寧に向き合えます。",
                },
                {
                  icon: <IconHeart className="h-7 w-7" />,
                  step: "03",
                  title: "リピーターが増える",
                  body: "満足度の高い体験 × 24時間の受付窓口。「次回もまた行きたい」が、思い立った瞬間に予約に繋がります。",
                },
              ].map((s) => (
                <article key={s.step} className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                      {s.icon}
                    </span>
                    <span className="font-mono text-xs font-bold tracking-wider text-brand-gold">{s.step}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-taupe">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="bg-white px-4 py-16 md:py-20">
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
                <p className="mt-6 text-xs leading-relaxed text-brand-muted">
                  決済はクレジットカード決済（決済代行：<span className="font-semibold text-brand-taupe">Stripe</span>）。
                  <br />
                  トライアル終了後、継続利用の支払い登録をしない限り自動的に利用停止となります。
                </p>
                <div className="mt-8">
                  <CtaPrimary className="w-full sm:w-auto" />
                </div>
              </div>
            </div>

            {/* 解約・再開ポリシー */}
            <div className="mx-auto mt-8 max-w-[480px] rounded-2xl border border-brand-taupe/10 bg-white p-5 text-sm leading-relaxed text-brand-muted">
              <p className="mb-2 font-semibold text-brand-taupe">トライアル後の解約・再開について</p>
              <ul className="space-y-1.5">
                <li>・トライアル終了後、支払い登録がなければ自動で利用停止（解約扱い）</li>
                <li>・アカウント・データは削除されません</li>
                <li>・再開したい場合は支払い登録から1ヶ月分の利用料金で再開できます</li>
              </ul>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid gap-4 text-center sm:grid-cols-3">
              {[
                { icon: <IconHeart className="mx-auto h-6 w-6 text-brand-gold" />, text: "リピーター流出を防ぐ" },
                { icon: <IconCalendar className="mx-auto h-6 w-6 text-brand-gold" />, text: "24時間自動受付" },
                { icon: <IconChat className="mx-auto h-6 w-6 text-brand-gold" />, text: "Webチャット & LINE連携" },
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
        <section className="bg-brand-light px-4 py-16 md:py-20">
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
