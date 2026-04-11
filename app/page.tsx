import Link from "next/link";

const CORPORATE = "https://techplus-company.com/funect/";

function CtaPrimary({ className = "" }: { className?: string }) {
  return (
    <a
      href={CORPORATE}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-brand-rose to-brand-gold px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95 ${className}`}
    >
      2週間トライアルを申し込む
    </a>
  );
}

function CtaSecondary({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://techplus-company.com/"
      className={`inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-brand-taupe/20 bg-white px-6 py-3 text-sm font-semibold text-brand-taupe transition hover:border-brand-gold/50 ${className}`}
    >
      お問い合わせ
    </a>
  );
}

const painCards = [
  {
    id: "pain-shift",
    title: "シフト管理がめんどくさい...",
    body: "スタッフの勤務時間や施術可能メニュー、カレンダー上の予約状況を一元管理し、現場の負担を減らします。",
  },
  {
    id: "pain-refusal",
    title: "来店拒否機能が欲しい...",
    body: "スタッフごとに時間単位で予約受付不可を設定するなど、枠と条件に基づいて予約をコントロールできます（※表現はプロダクト仕様・法務と整合のうえ確定してください）。",
  },
  {
    id: "pain-menu",
    title:
      "カテゴリや詳細メニューごとに、施術時間と金額を登録したい...",
    body: "メニュー表登録で、カテゴリ・詳細メニュー別に施術時間と金額を整理して登録できます。",
  },
];

const features = [
  "複数店舗の登録",
  "利用ユーザー管理",
  "店舗情報の登録",
  "製品情報の登録（チャットから検索・取得）",
  "電子カルテ登録",
  "メニュー表登録",
  "チャット機能（AI・予約・LINE連携）",
  "予約管理",
];

const faqs = [
  {
    q: "今使っている予約システムと併用できますか？",
    a: "FUNECTは受付業務の自動化・補助を担うレイヤーとして設計しています。既存の予約台帳と役割を分けて導入いただく想定です。連携の詳細はお問い合わせ時にご案内します。",
  },
  {
    q: "AIが間違った回答をしたり、クレームにまで自動で答えたりしませんか？",
    a: "リスクが高い内容はAIが勝手に断定せず、スタッフへ引き継ぎます。",
  },
  {
    q: "導入や運用は少人数でも回りますか？",
    a: "24時間の一次対応とFAQの自動化で負荷を下げ、必要な案件だけスタッフが拾える設計を目指しています。",
  },
  {
    q: "LINE以外のチャネルは？",
    a: "チャットを中心とした受付に対応します。詳細はお問い合わせください。",
  },
  {
    q: "トライアル後の解約は？",
    a: "社内ポリシーに合わせてご案内します。お問い合わせください。",
  },
  {
    q: "個人情報・ログの扱いは？",
    a: "プライバシーポリシーをご確認ください。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-brand-taupe/10 bg-brand-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-gold text-xs font-bold text-white shadow"
              aria-hidden
            >
              F
            </span>
            <span className="text-lg font-semibold tracking-tight text-brand-taupe">
              FUNECT
              <span className="block text-[10px] font-normal text-brand-muted">
                AI Concierge
              </span>
            </span>
          </Link>
          <div className="flex flex-shrink-0 items-center gap-2 md:gap-3">
            <CtaPrimary className="hidden text-xs sm:inline-flex sm:text-sm" />
            <CtaSecondary className="hidden md:inline-flex" />
            <CtaPrimary className="sm:hidden" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-brand-taupe/10 px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-flex flex-wrap gap-2 text-xs text-brand-muted">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-brand-gold/30">
                  2週間トライアル付き
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-brand-gold/30">
                  月額9,800円（税抜）・初期費用なし
                </span>
              </p>
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-brand-taupe md:text-4xl lg:text-[2.5rem]">
                施術中も、休みの日も。
                <br />
                取りこぼしている「受付」を、AIコンシェルジュがつなぐ。
              </h1>
              <p className="mt-6 text-pretty text-base leading-relaxed text-brand-muted md:text-lg">
                予約の受付・変更・キャンセル、よくある質問、LINEやチャットからの問い合わせまで。少人数の店舗でも、「受付がいる」状態をつくります。
              </p>
              <p className="mt-4 text-sm text-brand-muted/90">
                想定外の内容やクレームは、AIが勝手に答えずスタッフへ引き継ぎます。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaPrimary />
                <CtaSecondary />
              </div>
            </div>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-white to-brand-cream shadow-inner ring-1 ring-brand-gold/20"
              aria-hidden
            >
              <div className="absolute inset-4 rounded-xl bg-white/80 p-4 shadow-lg ring-1 ring-brand-taupe/10">
                <div className="mb-2 flex items-center gap-2 border-b border-brand-taupe/10 pb-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs text-brand-muted">FUNECT チャット</span>
                </div>
                <div className="space-y-2 text-xs text-brand-taupe">
                  <p className="rounded-lg bg-brand-cream px-3 py-2">
                    こんにちは。ご希望のメニューとご希望日を教えてください。
                  </p>
                  <p className="ml-4 rounded-lg bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 px-3 py-2">
                    カット＋カラー希望、土曜午後は可能ですか？
                  </p>
                  <p className="rounded-lg bg-brand-cream px-3 py-2">
                    空き状況を確認しています…この枠ならご予約可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain */}
        <section
          id="pain"
          className="border-b border-brand-taupe/10 px-4 py-16 md:py-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-center text-2xl font-bold text-brand-taupe md:text-3xl">
              こんなお悩みに
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-muted md:text-base">
              予約台帳だけでは埋まらない、現場の運用負荷にお悩みの方へ。
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {painCards.map((c) => (
                <article
                  key={c.id}
                  id={c.id}
                  className="rounded-2xl border border-brand-gold/25 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-brand-taupe">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <CtaPrimary />
            </div>
          </div>
        </section>

        {/* About + strengths */}
        <section className="border-b border-brand-taupe/10 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-2xl font-bold text-brand-taupe md:text-3xl">
              FUNECTとは
            </h2>
            <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-brand-muted">
              FUNECTは、問い合わせ対応や予約受付の流れを整え、事業者と利用者の双方にとって使いやすい体験を実現するためのサービスです。単なる受付機能ではなく、導線設計や運用のしやすさまで見据え、継続的に価値を生み出す仕組みづくりを支援します。
            </p>
            <h3 className="mt-12 text-xl font-semibold text-brand-taupe">
              主な特長
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "分かりやすい導線設計",
                "運用しやすい仕組み",
                "顧客対応の最適化支援",
                "継続的な価値提供",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-xl border border-brand-taupe/10 bg-white px-4 py-3"
                >
                  <span
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold"
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-brand-taupe">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-brand-taupe/10 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-2xl font-bold text-brand-taupe md:text-3xl">
              FUNECTでできること
            </h2>
            <p className="mt-4 text-sm text-brand-muted">
              詳細は{" "}
              <a
                href={CORPORATE}
                className="font-medium text-brand-rose underline-offset-2 hover:underline"
              >
                コーポレートサイト
              </a>
              をご覧ください。
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <li
                  key={f}
                  className="rounded-xl border border-brand-taupe/10 bg-white px-4 py-3 text-sm text-brand-taupe"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LINE */}
        <section className="border-b border-brand-taupe/10 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-2xl font-bold text-brand-taupe md:text-3xl">
              LINEとも連携
            </h2>
            <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-brand-muted">
              公式LINEアカウントがある場合はLINE連携も可能です。チャットごとにAI自動応答のON/OFFを設定でき、難しい案件は店舗対応へ切り替えられます。
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="border-b border-brand-taupe/10 px-4 py-16 md:py-20"
        >
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-2xl font-bold text-brand-taupe md:text-3xl">
              料金・トライアル
            </h2>
            <div className="mt-10 rounded-2xl border border-brand-gold/30 bg-white p-8 shadow-lg">
              <p className="text-sm text-brand-muted">月額（税抜）</p>
              <p className="mt-2 text-4xl font-bold tabular-nums text-brand-taupe">
                9,800
                <span className="text-xl font-semibold">円</span>
              </p>
              <ul className="mt-6 space-y-2 text-left text-sm text-brand-muted">
                <li>初期費用なし</li>
                <li>追加費用なし（※提供範囲に応じて要確認）</li>
                <li>2週間のトライアル期間付き</li>
              </ul>
              <p className="mt-6 text-xs text-brand-muted">
                お支払い：システム内で決済代行経由のクレジットカード決済を予定
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <CtaPrimary className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-center text-2xl font-bold text-brand-taupe md:text-3xl">
              よくある質問
            </h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-brand-taupe/10 bg-white px-4 py-1 open:shadow-md"
                >
                  <summary className="min-h-[44px] cursor-pointer list-none py-3 font-medium text-brand-taupe marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-2">
                      {item.q}
                      <span className="text-brand-gold transition group-open:rotate-180">
                        ▼
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-brand-taupe/10 pb-4 pt-2 text-sm leading-relaxed text-brand-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-brand-gold/20 bg-gradient-to-b from-white to-brand-cream px-4 py-16">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-xl font-bold text-brand-taupe md:text-2xl">
              まずは2週間、自店の「受付」を試しませんか。
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaPrimary />
              <CtaSecondary />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-taupe/10 bg-brand-taupe px-4 py-10 text-center text-sm text-white/80">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 md:flex-row md:justify-between">
          <p>
            <a
              href="https://techplus-company.com/"
              className="underline-offset-2 hover:underline"
            >
              株式会社TECH Plus
            </a>
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            <a
              href="https://techplus-company.com/funect/"
              className="hover:underline"
            >
              FUNECT（コーポレート）
            </a>
            <a
              href="https://techplus-company.com/privacy-policy/"
              className="hover:underline"
            >
              プライバシーポリシー
            </a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} 株式会社TECH Plus
        </p>
      </footer>
    </div>
  );
}
