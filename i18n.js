(() => {
  const supported = ["en", "zh", "ja"];
  const languageLabels = { en: "English", zh: "中文", ja: "日本語" };

  const translations = {
    en: {
      "nav.features": "Features",
      "nav.vision": "Vision",
      "nav.getStarted": "Get Started",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.home": "Home",
      "hero.title": "Minimal Desktop, Maximum Focus",
      "hero.subtitle":
        "minimalist delivers cohesive icons, widgets, and wallpapers that remove noise and keep only what matters.",
      "hero.primaryCta": "Get the App",
      "hero.secondaryCta": "Explore Features",
      "section.features.title": "Core Features",
      "section.features.subtitle":
        "Designed for clarity and efficiency, so your desktop stays calm and intentional.",
      "feature.icons.title": "Themed Icons",
      "feature.icons.body":
        "Consistent icon packs that unify every app into one visual language.",
      "feature.widgets.title": "Themed Widgets",
      "feature.widgets.body":
        "Widgets that match your theme for clean, readable information.",
      "feature.wallpapers.title": "Themed Wallpapers",
      "feature.wallpapers.body":
        "Curated wallpapers that align with icons and widgets for cohesion.",
      "feature.refresh.title": "Desktop Refresh",
      "feature.refresh.body":
        "Reshape your layout with minimal structure and fewer distractions.",
      "feature.flow.title": "Less Feed, More Flow",
      "feature.flow.body":
        "Step away from noisy streams and return to focused work.",
      "section.vision.title": "Our Vision",
      "section.vision.body":
        "We believe your desktop should feel quiet, balanced, and purpose-built every time you unlock the screen.",
      "section.tutorials.title": "Get Started",
      "section.tutorials.subtitle":
        "Choose a tutorial to learn how to customize your minimalist setup.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.back": "Back to Get Started",
      "page.home.title": "minimalist | Minimal Desktop",
      "page.home.description":
        "minimalist is a minimal desktop app offering themed icons, widgets, and wallpapers to restore clarity and focus.",
      "page.privacy.title": "Privacy Policy | minimalist",
      "page.privacy.description":
        "Privacy Policy for minimalist. Learn how we collect, use, and protect information.",
      "page.privacy.heading": "Privacy Policy",
      "page.privacy.updated": "Last Updated: Jan 20, 2026",
      "privacy.intro":
        "This Privacy Policy explains how minimalist (\"we,\" \"us,\" or \"our\") collects, uses, and protects information when you use the minimalist app, website, and related services (collectively, the \"Service\").",
      "privacy.collect.title": "Information We Collect",
      "privacy.collect.body":
        "We collect information in the following ways:",
      "privacy.collect.item1":
        "Information you provide: If you contact us or request support, we may collect your email address and the content of your message.",
      "privacy.collect.item2":
        "Device and usage data: The app may collect basic device information (such as device model, operating system version, language, and app version) and usage analytics (such as feature usage and performance metrics).",
      "privacy.collect.item3":
        "Diagnostics and crash data: We may receive crash logs and diagnostic data to improve stability and fix issues.",
      "privacy.collect.item4":
        "Content delivery logs: When downloading themes, widgets, or wallpapers, our hosting providers may process standard log data such as IP address, request time, and file requested.",
      "privacy.use.title": "How We Use Information",
      "privacy.use.item1":
        "Provide and improve themed icons, widgets, and wallpaper content.",
      "privacy.use.item2":
        "Maintain performance, reliability, and security of the Service.",
      "privacy.use.item3":
        "Respond to inquiries and provide customer support.",
      "privacy.use.item4":
        "Analyze usage trends to improve user experience.",
      "privacy.share.title": "How We Share Information",
      "privacy.share.body":
        "We do not sell your personal information. We may share data with:",
      "privacy.share.item1":
        "Service providers: Hosting, analytics, and support tools that help us operate the Service.",
      "privacy.share.item2":
        "Legal requirements: When required by law, regulation, or legal process.",
      "privacy.share.item3":
        "Business transfers: If we undergo a merger, acquisition, or asset sale, information may be transferred.",
      "privacy.retention.title": "Data Retention",
      "privacy.retention.body":
        "We retain personal information only as long as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce agreements. Diagnostic data may be retained for a shorter period.",
      "privacy.security.title": "Security",
      "privacy.security.body":
        "We use reasonable administrative, technical, and physical safeguards to protect information. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
      "privacy.rights.title": "Your Choices and Rights",
      "privacy.rights.item1":
        "You may opt out of analytics where the platform provides controls.",
      "privacy.rights.item2":
        "You can request access, correction, or deletion of your information.",
      "privacy.rights.item3":
        "You can contact us to withdraw consent where consent is the legal basis for processing.",
      "privacy.children.title": "Children's Privacy",
      "privacy.children.body":
        "The Service is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided information, please contact us.",
      "privacy.transfer.title": "International Transfers",
      "privacy.transfer.body":
        "Your information may be processed in countries other than your own. We take steps to ensure appropriate protections for international transfers.",
      "privacy.changes.title": "Changes to This Policy",
      "privacy.changes.body":
        "We may update this Privacy Policy from time to time. The updated version will be posted on this page, with the revision date updated above.",
      "privacy.contact.title": "Contact Us",
      "privacy.contact.body":
        "If you have questions about this Privacy Policy, please email <a href=\"mailto:hello@minimalist.app\">hello@minimalist.app</a>.",
      "page.terms.title": "Terms of Use | minimalist",
      "page.terms.description":
        "Terms of Use for minimalist. Read the conditions for using the service.",
      "page.terms.heading": "Terms of Use",
      "page.terms.updated": "Last Updated: Jan 20, 2026",
      "terms.intro":
        "Welcome to minimalist. By accessing or using the Service, you agree to these Terms of Use (\"Terms\"). If you do not agree, do not use the Service.",
      "terms.service.title": "About the Service",
      "terms.service.body":
        "minimalist provides themed icons, widgets, and wallpapers to help you create a calm, minimal desktop experience. Features may change over time.",
      "terms.eligibility.title": "Eligibility",
      "terms.eligibility.body":
        "You must be at least 13 years old to use the Service. If you are under 18, you must have permission from a parent or legal guardian.",
      "terms.license.title": "License",
      "terms.license.body":
        "We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes, subject to these Terms.",
      "terms.restrictions.title": "Restrictions",
      "terms.restrictions.item1":
        "Do not copy, resell, or distribute assets without permission.",
      "terms.restrictions.item2":
        "Do not reverse engineer, decompile, or attempt to bypass security.",
      "terms.restrictions.item3":
        "Do not use the Service for unlawful or harmful activities.",
      "terms.thirdparty.title": "Third-Party Services",
      "terms.thirdparty.body":
        "The Service may rely on third-party tools for hosting, analytics, or support. Your use of those services is subject to their terms and privacy policies.",
      "terms.payments.title": "Payments and Subscriptions",
      "terms.payments.body":
        "If paid features are offered, prices and billing terms will be disclosed at purchase. Subscriptions, if any, are managed through the app store and are subject to the store's payment policies.",
      "terms.ip.title": "Intellectual Property",
      "terms.ip.body":
        "The Service and all related content are owned by minimalist or its licensors and protected by intellectual property laws. All rights not expressly granted are reserved.",
      "terms.disclaimer.title": "Disclaimer",
      "terms.disclaimer.body":
        "The Service is provided \"as is\" and \"as available\" without warranties of any kind. We do not guarantee that the Service will be uninterrupted or error-free.",
      "terms.liability.title": "Limitation of Liability",
      "terms.liability.body":
        "To the maximum extent permitted by law, minimalist will not be liable for indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service.",
      "terms.termination.title": "Termination",
      "terms.termination.body":
        "We may suspend or terminate access to the Service if you violate these Terms or if required to do so by law.",
      "terms.changes.title": "Changes to These Terms",
      "terms.changes.body":
        "We may update these Terms from time to time. The updated version will be posted on this page with the revised date.",
      "terms.contact.title": "Contact Us",
      "terms.contact.body":
        "If you have questions about these Terms, please email <a href=\"mailto:hello@minimalist.app\">hello@minimalist.app</a>."
    },
    zh: {
      "nav.features": "功能",
      "nav.vision": "理念",
      "nav.getStarted": "开始使用",
      "nav.privacy": "隐私政策",
      "nav.terms": "用户协议",
      "nav.home": "首页",
      "hero.title": "极简桌面，从此更专注",
      "hero.subtitle":
        "minimalist 为你的桌面提供统一风格的图标、组件与壁纸，去除噪音，留下真正重要的信息。",
      "hero.primaryCta": "获取应用",
      "hero.secondaryCta": "查看功能",
      "section.features.title": "核心功能",
      "section.features.subtitle": "围绕极简与效率设计，让桌面更清晰有序。",
      "feature.icons.title": "主题图标",
      "feature.icons.body": "统一风格的图标素材，让每个应用都融入整体设计。",
      "feature.widgets.title": "主题组件",
      "feature.widgets.body": "与主题匹配的组件，信息展示更清爽。",
      "feature.wallpapers.title": "主题壁纸",
      "feature.wallpapers.body": "精选壁纸与图标、组件相呼应，保持视觉一致性。",
      "feature.refresh.title": "桌面重塑",
      "feature.refresh.body": "用极简风格重塑桌面层级，减少干扰，提升专注。",
      "feature.flow.title": "远离信息流",
      "feature.flow.body": "屏蔽杂乱信息流，帮助你更快进入高效状态。",
      "section.vision.title": "我们的理念",
      "section.vision.body":
        "我们希望你的桌面回归本质：安静、清晰、每次点亮都舒适。",
      "section.tutorials.title": "开始使用",
      "section.tutorials.subtitle": "选择一个教程，快速完成极简桌面设置。",
      "footer.privacy": "隐私政策",
      "footer.terms": "用户协议",
      "footer.back": "返回开始使用",
      "page.home.title": "minimalist | 极简桌面",
      "page.home.description":
        "minimalist 是一款极简桌面应用，提供主题图标、组件与壁纸，重塑桌面秩序与专注。",
      "page.privacy.title": "隐私政策 | minimalist",
      "page.privacy.description": "minimalist 隐私政策，说明我们如何处理你的数据。",
      "page.privacy.heading": "隐私政策",
      "page.privacy.updated": "最后更新：2026 年 1 月 20 日",
      "privacy.intro":
        "本隐私政策说明 minimalist（“我们”）在你使用应用、网站及相关服务（统称“服务”）时如何收集、使用与保护信息。",
      "privacy.collect.title": "我们收集的信息",
      "privacy.collect.body": "我们可能通过以下方式收集信息：",
      "privacy.collect.item1":
        "你提供的信息：当你联系我们或寻求支持时，我们可能收集你的邮箱及消息内容。",
      "privacy.collect.item2":
        "设备与使用数据：应用可能收集设备信息（如设备型号、系统版本、语言、应用版本）以及使用分析（如功能使用与性能指标）。",
      "privacy.collect.item3":
        "诊断与崩溃数据：我们可能收到崩溃日志和诊断数据以提升稳定性。",
      "privacy.collect.item4":
        "内容分发日志：下载主题、组件或壁纸时，托管服务可能处理 IP、请求时间和文件等日志。",
      "privacy.use.title": "信息的使用方式",
      "privacy.use.item1": "提供并改进主题图标、组件与壁纸内容。",
      "privacy.use.item2": "维护服务的性能、稳定性与安全性。",
      "privacy.use.item3": "回应咨询并提供客户支持。",
      "privacy.use.item4": "分析使用趋势以优化体验。",
      "privacy.share.title": "信息的共享",
      "privacy.share.body": "我们不会出售你的个人信息。我们可能与以下对象共享数据：",
      "privacy.share.item1":
        "服务提供商：用于托管、分析与支持的第三方工具。",
      "privacy.share.item2": "法律要求：因法律、法规或司法程序要求而披露。",
      "privacy.share.item3":
        "业务转移：如发生合并、收购或资产转移，信息可能随业务转移。",
      "privacy.retention.title": "数据保留",
      "privacy.retention.body":
        "我们仅在提供服务、履行法律义务、解决争议及执行协议所需的期限内保留信息。诊断数据可能保留更短时间。",
      "privacy.security.title": "安全",
      "privacy.security.body":
        "我们采取合理的管理、技术与物理措施保护信息安全，但任何传输或存储方式都无法保证 100% 安全。",
      "privacy.rights.title": "你的选择与权利",
      "privacy.rights.item1": "你可以在平台提供的设置中选择退出分析。",
      "privacy.rights.item2": "你可以请求访问、更正或删除你的信息。",
      "privacy.rights.item3": "在以同意为依据的处理场景下，你可以撤回同意。",
      "privacy.children.title": "未成年人隐私",
      "privacy.children.body":
        "本服务不面向 13 岁以下儿童，我们不会有意收集其个人信息。如你认为有儿童提供了信息，请联系我们。",
      "privacy.transfer.title": "国际数据传输",
      "privacy.transfer.body":
        "你的信息可能在你所在国家/地区之外处理，我们会采取适当措施确保跨境传输保护。",
      "privacy.changes.title": "政策变更",
      "privacy.changes.body":
        "我们可能不时更新本政策，更新版本会发布在本页面并更新日期。",
      "privacy.contact.title": "联系我们",
      "privacy.contact.body":
        "如有任何问题，请发送邮件至 <a href=\"mailto:hello@minimalist.app\">hello@minimalist.app</a>。",
      "page.terms.title": "用户协议 | minimalist",
      "page.terms.description": "minimalist 用户协议，说明使用产品的基本条款。",
      "page.terms.heading": "用户协议",
      "page.terms.updated": "最后更新：2026 年 1 月 20 日",
      "terms.intro":
        "欢迎使用 minimalist。访问或使用本服务即表示你同意本协议。如不同意，请勿使用。",
      "terms.service.title": "服务内容",
      "terms.service.body":
        "minimalist 提供主题图标、组件与壁纸，帮助你构建极简桌面体验。功能可能会调整或更新。",
      "terms.eligibility.title": "使用资格",
      "terms.eligibility.body":
        "你需年满 13 周岁方可使用本服务；未满 18 周岁需征得监护人同意。",
      "terms.license.title": "许可",
      "terms.license.body":
        "我们授予你有限的、非独占、不可转让、可撤销的许可，用于个人非商业用途。",
      "terms.restrictions.title": "使用限制",
      "terms.restrictions.item1": "未经许可不得复制、转售或分发素材。",
      "terms.restrictions.item2": "不得反向工程、反编译或绕过安全措施。",
      "terms.restrictions.item3": "不得用于任何违法或有害活动。",
      "terms.thirdparty.title": "第三方服务",
      "terms.thirdparty.body":
        "服务可能依赖第三方的托管、分析或支持工具，你的使用受其条款与隐私政策约束。",
      "terms.payments.title": "付费与订阅",
      "terms.payments.body":
        "如提供付费功能，将在购买时说明价格与计费条款。订阅（如有）由应用商店管理并遵循其规则。",
      "terms.ip.title": "知识产权",
      "terms.ip.body":
        "服务及相关内容归 minimalist 或其许可方所有，受知识产权法保护。未明确授予的权利均保留。",
      "terms.disclaimer.title": "免责声明",
      "terms.disclaimer.body":
        "服务按“现状”与“可用”提供，我们不保证服务始终可用或无错误。",
      "terms.liability.title": "责任限制",
      "terms.liability.body":
        "在法律允许范围内，minimalist 不对因使用服务产生的间接、附带、特殊或惩罚性损失负责。",
      "terms.termination.title": "终止",
      "terms.termination.body":
        "如你违反本协议或法律要求，我们可暂停或终止服务。",
      "terms.changes.title": "协议变更",
      "terms.changes.body":
        "我们可能不时更新本协议，更新版本将发布于本页面并注明日期。",
      "terms.contact.title": "联系我们",
      "terms.contact.body":
        "如有任何问题，请发送邮件至 <a href=\"mailto:hello@minimalist.app\">hello@minimalist.app</a>。"
    },
    ja: {
      "nav.features": "機能",
      "nav.vision": "理念",
      "nav.getStarted": "はじめに",
      "nav.privacy": "プライバシー",
      "nav.terms": "利用規約",
      "nav.home": "ホーム",
      "hero.title": "最小のデスクトップ、最大の集中力",
      "hero.subtitle":
        "minimalist は統一されたアイコン・ウィジェット・壁紙でノイズを減らし、本当に必要な情報だけを残します。",
      "hero.primaryCta": "アプリを入手",
      "hero.secondaryCta": "機能を見る",
      "section.features.title": "主な機能",
      "section.features.subtitle": "シンプルで効率的なデスクトップを実現します。",
      "feature.icons.title": "テーマアイコン",
      "feature.icons.body": "統一感あるアイコンでアプリを一つの世界観に。",
      "feature.widgets.title": "テーマウィジェット",
      "feature.widgets.body": "テーマに合わせたウィジェットで情報をすっきり表示。",
      "feature.wallpapers.title": "テーマ壁紙",
      "feature.wallpapers.body": "アイコンやウィジェットと調和する壁紙を提供。",
      "feature.refresh.title": "デスクトップの再構成",
      "feature.refresh.body": "ミニマルな構成で階層を整理し集中力を向上。",
      "feature.flow.title": "情報のノイズを減らす",
      "feature.flow.body": "雑多な情報から距離を置き、作業に集中できます。",
      "section.vision.title": "私たちの理念",
      "section.vision.body":
        "毎回画面を開くたびに、静かで整った心地よさを感じられるデスクトップを目指します。",
      "section.tutorials.title": "はじめに",
      "section.tutorials.subtitle": "チュートリアルを選んでセットアップを始めましょう。",
      "footer.privacy": "プライバシーポリシー",
      "footer.terms": "利用規約",
      "footer.back": "はじめにへ戻る",
      "page.home.title": "minimalist | ミニマルデスクトップ",
      "page.home.description":
        "minimalist はテーマアイコン、ウィジェット、壁紙で集中できるデスクトップ体験を提供します。",
      "page.privacy.title": "プライバシーポリシー | minimalist",
      "page.privacy.description":
        "minimalist のプライバシーポリシー。情報の収集・利用・保護について説明します。",
      "page.privacy.heading": "プライバシーポリシー",
      "page.privacy.updated": "最終更新日：2026年1月20日",
      "privacy.intro":
        "本プライバシーポリシーは、minimalist（「当社」）がアプリ、ウェブサイトおよび関連サービス（総称「サービス」）の提供において、情報をどのように収集・使用・保護するかを説明します。",
      "privacy.collect.title": "収集する情報",
      "privacy.collect.body": "当社は以下の方法で情報を収集します。",
      "privacy.collect.item1":
        "提供情報：お問い合わせやサポート依頼時に、メールアドレスやメッセージ内容を収集する場合があります。",
      "privacy.collect.item2":
        "端末・利用データ：端末情報（端末モデル、OS、言語、アプリ版本）および使用分析（機能利用、性能指標）を収集する場合があります。",
      "privacy.collect.item3":
        "診断・クラッシュデータ：安定性向上のためクラッシュログ等を受け取る場合があります。",
      "privacy.collect.item4":
        "配信ログ：テーマ・ウィジェット・壁紙のダウンロード時に、IP、リクエスト時間、ファイルなどのログが処理される場合があります。",
      "privacy.use.title": "情報の利用目的",
      "privacy.use.item1": "テーマアイコン、ウィジェット、壁紙の提供と改善。",
      "privacy.use.item2": "サービスの性能・信頼性・安全性の維持。",
      "privacy.use.item3": "お問い合わせへの対応とサポート提供。",
      "privacy.use.item4": "利用傾向の分析による体験の改善。",
      "privacy.share.title": "情報の共有",
      "privacy.share.body":
        "当社は個人情報を販売しません。以下の相手と共有する場合があります。",
      "privacy.share.item1":
        "サービス提供者：ホスティング、分析、サポートのためのツール。",
      "privacy.share.item2": "法的要件：法律や規制、法的手続きによる要求。",
      "privacy.share.item3":
        "事業移転：合併、買収、資産譲渡などに伴う情報移転。",
      "privacy.retention.title": "データ保存",
      "privacy.retention.body":
        "サービス提供、法令遵守、紛争解決、契約履行に必要な期間のみ保存します。診断データはより短期間保存される場合があります。",
      "privacy.security.title": "セキュリティ",
      "privacy.security.body":
        "合理的な管理・技術・物理的対策を講じますが、100%の安全性は保証できません。",
      "privacy.rights.title": "ユーザーの選択と権利",
      "privacy.rights.item1": "プラットフォームが提供する場合、分析のオプトアウトが可能です。",
      "privacy.rights.item2": "情報へのアクセス、訂正、削除を請求できます。",
      "privacy.rights.item3": "同意を法的根拠とする処理では、同意の撤回が可能です。",
      "privacy.children.title": "子どものプライバシー",
      "privacy.children.body":
        "本サービスは13歳未満を対象としておらず、意図的に個人情報を収集しません。該当する情報がある場合はご連絡ください。",
      "privacy.transfer.title": "国際移転",
      "privacy.transfer.body":
        "情報は居住国以外で処理される場合があります。適切な保護措置を講じます。",
      "privacy.changes.title": "ポリシーの変更",
      "privacy.changes.body":
        "本ポリシーは随時更新され、更新版は本ページに掲載されます。",
      "privacy.contact.title": "お問い合わせ",
      "privacy.contact.body":
        "本ポリシーに関するお問い合わせは <a href=\"mailto:hello@minimalist.app\">hello@minimalist.app</a> までご連絡ください。",
      "page.terms.title": "利用規約 | minimalist",
      "page.terms.description":
        "minimalist の利用規約。サービスの利用条件を説明します。",
      "page.terms.heading": "利用規約",
      "page.terms.updated": "最終更新日：2026年1月20日",
      "terms.intro":
        "minimalist をご利用いただきありがとうございます。本サービスを利用することで本規約に同意したものとみなされます。同意しない場合は利用しないでください。",
      "terms.service.title": "サービス内容",
      "terms.service.body":
        "minimalist はテーマアイコン、ウィジェット、壁紙を提供し、ミニマルなデスクトップ体験を支援します。機能は随時変更される場合があります。",
      "terms.eligibility.title": "利用資格",
      "terms.eligibility.body":
        "13歳以上であることが必要です。18歳未満の場合は保護者の同意が必要です。",
      "terms.license.title": "ライセンス",
      "terms.license.body":
        "個人の非商用目的に限り、限定的・非独占・譲渡不可・取消可能なライセンスを付与します。",
      "terms.restrictions.title": "禁止事項",
      "terms.restrictions.item1": "許可なく素材をコピー、再販、配布しないこと。",
      "terms.restrictions.item2": "リバースエンジニアリングやセキュリティ回避をしないこと。",
      "terms.restrictions.item3": "違法または有害な目的で使用しないこと。",
      "terms.thirdparty.title": "第三者サービス",
      "terms.thirdparty.body":
        "サービスは第三者のホスティングや分析ツールに依存する場合があります。利用は各社の規約に従います。",
      "terms.payments.title": "支払いとサブスクリプション",
      "terms.payments.body":
        "有料機能が提供される場合、価格と請求条件は購入時に提示されます。サブスクリプションはアプリストアの規約に従います。",
      "terms.ip.title": "知的財産",
      "terms.ip.body":
        "サービスおよび関連コンテンツの権利は minimalist またはライセンサーに帰属します。",
      "terms.disclaimer.title": "免責事項",
      "terms.disclaimer.body":
        "サービスは現状有姿で提供され、継続性や無障害性を保証しません。",
      "terms.liability.title": "責任の制限",
      "terms.liability.body":
        "法律が許す範囲で、間接的・付随的・特別・結果的損害について当社は責任を負いません。",
      "terms.termination.title": "終了",
      "terms.termination.body":
        "本規約違反や法的要請がある場合、サービスを停止または終了することがあります。",
      "terms.changes.title": "規約の変更",
      "terms.changes.body":
        "本規約は随時更新され、更新版は本ページに掲載されます。",
      "terms.contact.title": "お問い合わせ",
      "terms.contact.body":
        "本規約に関するお問い合わせは <a href=\"mailto:hello@minimalist.app\">hello@minimalist.app</a> までご連絡ください。"
    }
  };

  const getPreferredLanguage = () => {
    const saved = localStorage.getItem("minimalist-lang");
    if (supported.includes(saved)) {
      return saved;
    }
    const navigatorLang = navigator.language || "en";
    if (navigatorLang.startsWith("zh")) return "zh";
    if (navigatorLang.startsWith("ja")) return "ja";
    return "en";
  };

  const applyTranslations = (lang) => {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    const pageKey = document.body?.dataset?.page;
    if (pageKey && dictionary[`page.${pageKey}.title`]) {
      document.title = dictionary[`page.${pageKey}.title`];
    }
    const description = document.querySelector("meta[name=\"description\"]");
    if (description && pageKey && dictionary[`page.${pageKey}.description`]) {
      description.setAttribute(
        "content",
        dictionary[`page.${pageKey}.description`]
      );
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dictionary[key]) {
        el.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const attr = el.getAttribute("data-i18n-attr");
      if (key && attr && dictionary[key]) {
        el.setAttribute(attr, dictionary[key]);
      }
    });

    document.querySelectorAll(".language-option").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-lang]").forEach((item) => {
      if (!item.classList.contains("tutorial-item")) return;
      item.classList.toggle("is-hidden", item.dataset.lang !== lang);
    });
  };

  const setLanguage = (lang) => {
    if (!supported.includes(lang)) return;
    localStorage.setItem("minimalist-lang", lang);
    applyTranslations(lang);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const initialLang = getPreferredLanguage();
    applyTranslations(initialLang);

    document.querySelectorAll(".language-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
      });
      btn.setAttribute(
        "aria-label",
        `Switch language to ${languageLabels[btn.dataset.lang] || btn.dataset.lang}`
      );
    });
  });
})();
