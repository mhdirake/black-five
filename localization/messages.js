export const messages = {
  fa: {
    common: {
      brand: "بلک فایو",
      live: "زنده",
      active: "فعال",
      expired: "پایان‌یافته",
      previous: "قبلی",
      next: "بعدی",
      switchLanguage: "English",
    },
    header: {
      nav: [
        { label: "خانه", href: "/" },
        { label: "حراج‌ها", href: "#auctions" },
        { label: "بازار بلیت", href: "#tickets" },
        { label: "کیف پول", href: "#wallet" },
        { label: "راهنمای شرکت", href: "#guide" },
        { label: "اعتماد و امنیت", href: "#security" },
      ],
      login: "ورود",
      register: "ثبت‌نام",
      registerFull: "ثبت‌نام در بلک فایو",
      accountLogin: "ورود به حساب",
      logout: "خروج",
      account: "حساب کاربری",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
      mainNavigation: "ناوبری اصلی",
      mobileNavigation: "ناوبری موبایل",
      logoAlt: "لوگوی بلک فایو",
    },
    hero: {
      badge: "پلتفرم حراج، بلیت و بازار ثانویه بلک فایو",
      titleBefore: "فرصت‌های خاص را در",
      titleAccent: "حراج‌های شفاف بلک فایو",
      titleAfter: "دنبال کنید",
      description:
        "در بلک فایو می‌توانید در حراج‌های زمان‌بندی‌شده شرکت کنید، بلیت‌های خود را مدیریت کنید، وارد بازار ثانویه شوید و با کیف پول امن، تراکنش‌های خود را ساده و قابل پیگیری انجام دهید.",
      primaryAction: "ثبت‌نام و شروع",
      secondaryAction: "مشاهده حراج‌های فعال",
      stats: [
        { value: "۲۴/۷", label: "دسترسی به حراج‌ها" },
        { value: "شفاف", label: "قیمت‌گذاری و رقابت" },
        { value: "امن", label: "کیف پول و احراز هویت" },
      ],
      preview: {
        heading: "حراج ویژه امروز",
        title: "MacBook Neo",
        alt: "MacBook Neo",
        description:
          "حراج مک‌بوک نئو با ظرفیت محدود؛ پیشنهادها به‌صورت شفاف ثبت می‌شوند و برنده پس از پایان زمان حراج مشخص خواهد شد.",
        info: [
          { label: "زمان باقی‌مانده", value: "۰۱:۲۸:۴۵" },
          { label: "پیشنهاد فعلی", value: "۱۲۵,۰۰۰,۰۰۰ تومان" },
          { label: "بلیت‌های فعال", value: "۳۴۰ بلیت" },
          { label: "شرکت‌کنندگان", value: "۱,۲۸۰ نفر" },
        ],
      },
    },
    auctions: {
      title: "حراج‌های بلک فایو را دنبال کنید",
      description:
        "حراج‌های فعال، رقابت‌های نزدیک به پایان و نتایج پایان‌یافته را در یک ویترین شفاف ببینید.",
      tabs: [
        { label: "فعال", value: "active" },
        { label: "پایان‌یافته", value: "expired" },
      ],
      card: {
        activeAction: "مشاهده و شرکت",
        expiredAction: "مشاهده نتیجه",
        activeTime: "زمان باقی‌مانده",
        expiredTime: "زمان پایان",
        activePrice: "پیشنهاد فعلی",
        expiredPrice: "قیمت نهایی",
        tickets: "بلیت‌ها",
        participants: "شرکت‌کنندگان",
      },
      items: [
        {
          id: 1,
          status: "active",
          title: "MacBook Neo",
          description: "حراج مک‌بوک نئو با ظرفیت محدود و ثبت پیشنهادهای شفاف در لحظه.",
          image: "/images/template/csm_macbook_neo.webp",
          time: "۰۱:۲۸:۴۵",
          price: "۱۲۵,۰۰۰,۰۰۰ تومان",
          tickets: "۳۴۰ بلیت",
          participants: "۱,۲۸۰ نفر",
        },
        {
          id: 2,
          status: "active",
          title: "ASUS Zenbook Duo",
          description: "فرصت شرکت در حراج لپ‌تاپ دو نمایشگره ایسوس با کیف پول بلک فایو.",
          image: "/images/template/asus-dual-screen-3t68.png",
          time: "۰۳:۱۲:۱۰",
          price: "۹۴,۵۰۰,۰۰۰ تومان",
          tickets: "۲۱۸ بلیت",
          participants: "۷۹۴ نفر",
        },
        {
          id: 3,
          status: "active",
          title: "iPad Pro",
          description: "حراج آیپد پرو با زمان محدود و امکان پیگیری لحظه‌ای رقابت.",
          image: "/images/template/ipad.webp",
          time: "۰۰:۴۷:۲۲",
          price: "۶۴,۰۰۰,۰۰۰ تومان",
          tickets: "۱۵۶ بلیت",
          participants: "۵۱۲ نفر",
        },
        {
          id: 4,
          status: "expired",
          title: "Redmi Monitor G27U",
          description: "نتیجه حراج مانیتور گیمینگ ردمی با نمایش قیمت نهایی و تعداد شرکت‌کنندگان.",
          image: "/images/template/redmi-monitor-g27u.jpg",
          time: "دیروز، ۱۸:۳۰",
          price: "۳۶,۸۰۰,۰۰۰ تومان",
          tickets: "۲۹۰ بلیت",
          participants: "۹۶۰ نفر",
        },
        {
          id: 5,
          status: "expired",
          title: "iPad Pro",
          description: "آرشیو حراج آیپد پرو برای بررسی شفاف نتیجه و وضعیت پیشنهادها.",
          image: "/images/template/ipad.webp",
          time: "۲ روز پیش",
          price: "۵۸,۲۰۰,۰۰۰ تومان",
          tickets: "۱۷۸ بلیت",
          participants: "۴۳۰ نفر",
        },
        {
          id: 6,
          status: "expired",
          title: "ASUS Zenbook Duo",
          description: "نتیجه حراج لپ‌تاپ دو نمایشگره ایسوس با ثبت کامل رقابت کاربران.",
          image: "/images/template/asus-dual-screen-3t68.png",
          time: "۳ روز پیش",
          price: "۸۹,۷۰۰,۰۰۰ تومان",
          tickets: "۲۴۶ بلیت",
          participants: "۶۸۵ نفر",
        },
        {
          id: 7,
          status: "expired",
          title: "MacBook Neo",
          description: "آرشیو حراج مک‌بوک نئو با قیمت نهایی، تعداد بلیت و شرکت‌کنندگان.",
          image: "/images/template/csm_macbook_neo.webp",
          time: "۵ روز پیش",
          price: "۱۱۸,۹۰۰,۰۰۰ تومان",
          tickets: "۳۱۲ بلیت",
          participants: "۱,۰۴۰ نفر",
        },
      ],
    },
    howItWorks: {
      title: "شرکت در حراج‌های بلک فایو چطور انجام می‌شود؟",
      description:
        "مسیر ورود به حراج‌ها ساده است؛ از ساخت حساب تا ثبت پیشنهاد، همه‌چیز در چند مرحله شفاف انجام می‌شود.",
      steps: [
        {
          title: "ثبت‌نام و احراز هویت",
          description: "حساب کاربری خود را بسازید و اطلاعات هویتی لازم برای شرکت امن در حراج‌ها را تکمیل کنید.",
        },
        {
          title: "فعال‌سازی کیف پول",
          description: "کیف پول بلک فایو را آماده کنید تا پرداخت‌ها، بلیت‌ها و تسویه‌ها قابل پیگیری باشند.",
        },
        {
          title: "دریافت بلیت حراج",
          description: "برای حراج موردنظر بلیت تهیه کنید و وارد رقابت شفاف با سایر کاربران شوید.",
        },
        {
          title: "ثبت پیشنهاد و مشاهده نتیجه",
          description: "پیشنهادها در زمان حراج ثبت می‌شوند و پس از پایان، نتیجه و جزئیات قابل مشاهده است.",
        },
      ],
      summaryTitle: "قبل از اولین پیشنهاد",
      summaryItems: ["شروع سریع بدون پیچیدگی", "کیف پول امن و قابل پیگیری", "نتیجه شفاف بعد از پایان حراج"],
    },
    tickets: {
      title: "بلیت؛ مسیر ورود به فرصت‌های بلک فایو",
      description:
        "بلیت در بلک فایو فقط مجوز ورود نیست؛ ابزار مدیریت دسترسی، پیگیری مالکیت و حضور در بازار ثانویه است.",
      action: "مشاهده بازار بلیت",
      features: [
        {
          title: "ورود به حراج",
          description: "برای هر حراج، بلیت فعال خود را انتخاب کنید و با وضعیت قابل پیگیری وارد رقابت شوید.",
        },
        {
          title: "انتقال یا فروش",
          description: "بلیت‌های واجد شرایط می‌توانند در بازار ثانویه معامله یا منتقل شوند.",
        },
        {
          title: "پیگیری وضعیت",
          description: "مالکیت، وضعیت استفاده و تاریخچه بلیت‌ها در حساب کاربری قابل مشاهده است.",
        },
      ],
      panel: {
        status: "بلیت فعال",
        product: "حراج MacBook Neo",
        marketLabel: "قیمت بازار ثانویه",
        marketValue: "۳,۴۵۰,۰۰۰ تومان",
        ownerLabel: "مالکیت",
        ownerValue: "قابل انتقال",
        validityLabel: "اعتبار",
        validityValue: "تا پایان حراج",
        badge: "قابل معامله",
      },
    },
    security: {
      title: "اعتماد، امنیت و شفافیت در هر معامله",
      description:
        "بلک فایو برای حراج، بلیت و تراکنش‌ها یک مسیر قابل پیگیری می‌سازد تا کاربر بداند هر اتفاقی در چه مرحله‌ای ثبت شده است.",
      highlight: "هر پیشنهاد، بلیت و تراکنش در بلک فایو قابل ردیابی و بررسی است.",
      items: [
        {
          title: "احراز هویت کاربران",
          description: "حساب‌ها قبل از ورود جدی به فرایند حراج و بازار بلیت، با اطلاعات قابل اتکا کنترل می‌شوند.",
        },
        {
          title: "کیف پول امن",
          description: "پرداخت‌ها، شارژها و تسویه‌ها در یک مسیر مالی قابل مشاهده و قابل پیگیری مدیریت می‌شوند.",
        },
        {
          title: "ثبت شفاف پیشنهادها",
          description: "زمان، مبلغ و وضعیت پیشنهادها به شکلی ثبت می‌شود که نتیجه حراج قابل بررسی باشد.",
        },
        {
          title: "حریم خصوصی داده‌ها",
          description: "اطلاعات کاربران با دسترسی کنترل‌شده نگهداری می‌شود و فقط در مسیرهای ضروری استفاده می‌شود.",
        },
      ],
    },
    faq: {
      title: "سوال‌های رایج قبل از شروع",
      description:
        "اگر هنوز درباره ثبت‌نام، بلیت، کیف پول یا نتیجه حراج سوال دارید، این بخش پاسخ‌های کوتاه و کاربردی را جمع کرده است.",
      action: "ثبت‌نام در بلک فایو",
      items: [
        {
          question: "برای شرکت در حراج باید ثبت‌نام کنم؟",
          answer: "بله، برای شرکت در حراج، مدیریت بلیت‌ها و پیگیری نتیجه‌ها به حساب کاربری نیاز دارید.",
        },
        {
          question: "بلیت حراج چه کاربردی دارد؟",
          answer: "بلیت مسیر ورود به حراج است و در بعضی شرایط می‌تواند در بازار ثانویه منتقل یا معامله شود.",
        },
        {
          question: "نتیجه حراج چطور مشخص می‌شود؟",
          answer: "پیشنهادها تا پایان زمان حراج ثبت می‌شوند و پس از پایان، نتیجه و جزئیات قابل مشاهده است.",
        },
        {
          question: "کیف پول چه نقشی دارد؟",
          answer: "پرداخت‌ها، شارژها، بلیت‌ها و تسویه‌ها از طریق کیف پول قابل پیگیری و مدیریت هستند.",
        },
        {
          question: "آیا می‌توانم نتیجه حراج‌های قبلی را ببینم؟",
          answer: "بله، حراج‌های پایان‌یافته و نتیجه آن‌ها در بخش حراج‌ها قابل مشاهده هستند.",
        },
      ],
    },
    footer: {
      description:
        "بلک فایو پلتفرم یکپارچه حراج، مدیریت بلیت، بازار ثانویه و خدمات مالی کاربران است؛ با تمرکز بر شفافیت معاملات، امنیت داده و تجربه سریع برای خریداران و برگزارکنندگان.",
      columns: [
        {
          title: "پلتفرم بلک فایو",
          links: [
            { label: "حراج‌های فعال", href: "#auctions" },
            { label: "بازار ثانویه بلیت", href: "#tickets" },
            { label: "دسته‌بندی کالاها", href: "#inventory" },
            { label: "تقویم عرضه‌ها", href: "#launches" },
          ],
        },
        {
          title: "حساب و مالی",
          links: [
            { label: "کیف پول بلک فایو", href: "#wallet" },
            { label: "احراز هویت کاربران", href: "#identity" },
            { label: "تسویه و تراکنش‌ها", href: "#settlement" },
            { label: "گزارش‌های مالی", href: "#reports" },
          ],
        },
        {
          title: "پشتیبانی و اعتماد",
          links: [
            { label: "مرکز راهنما", href: "#guide" },
            { label: "قوانین حراج و بلیت", href: "#rules" },
            { label: "امنیت و حریم خصوصی", href: "#security" },
            { label: "تماس با پشتیبانی", href: "#support" },
          ],
        },
      ],
      rights: "همه حقوق محفوظ است.",
      privacy: "حریم خصوصی",
      rules: "قوانین معاملات",
    },
  },
  en: {
    common: {
      brand: "Black Five",
      live: "Live",
      active: "Active",
      expired: "Ended",
      previous: "Previous",
      next: "Next",
      switchLanguage: "فارسی",
    },
    header: {
      nav: [
        { label: "Home", href: "/" },
        { label: "Auctions", href: "#auctions" },
        { label: "Ticket Market", href: "#tickets" },
        { label: "Wallet", href: "#wallet" },
        { label: "How It Works", href: "#guide" },
        { label: "Trust & Security", href: "#security" },
      ],
      login: "Log in",
      register: "Sign up",
      registerFull: "Sign up for Black Five",
      accountLogin: "Log in to account",
      logout: "Log out",
      account: "Account",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      logoAlt: "Black Five logo",
    },
    hero: {
      badge: "Auction, ticketing, and secondary market platform",
      titleBefore: "Discover exclusive opportunities in",
      titleAccent: "transparent Black Five auctions",
      titleAfter: "",
      description:
        "With Black Five, you can join scheduled auctions, manage tickets, enter the secondary market, and keep transactions simple and traceable through a secure wallet.",
      primaryAction: "Sign up and start",
      secondaryAction: "View active auctions",
      stats: [
        { value: "24/7", label: "Auction access" },
        { value: "Clear", label: "Pricing and bidding" },
        { value: "Secure", label: "Wallet and identity" },
      ],
      preview: {
        heading: "Today’s featured auction",
        title: "MacBook Neo",
        alt: "MacBook Neo",
        description:
          "A limited-capacity MacBook Neo auction with transparent bids and a clear winner when the auction ends.",
        info: [
          { label: "Time left", value: "01:28:45" },
          { label: "Current bid", value: "$2,980" },
          { label: "Active tickets", value: "340 tickets" },
          { label: "Participants", value: "1,280 users" },
        ],
      },
    },
    auctions: {
      title: "Follow Black Five Auctions",
      description:
        "Browse active auctions, near-ending competitions, and completed results in one transparent showcase.",
      tabs: [
        { label: "Active", value: "active" },
        { label: "Ended", value: "expired" },
      ],
      card: {
        activeAction: "View and join",
        expiredAction: "View result",
        activeTime: "Time left",
        expiredTime: "Ended at",
        activePrice: "Current bid",
        expiredPrice: "Final price",
        tickets: "Tickets",
        participants: "Participants",
      },
      items: [
        {
          id: 1,
          status: "active",
          title: "MacBook Neo",
          description: "A limited-capacity MacBook Neo auction with transparent live bidding.",
          image: "/images/template/csm_macbook_neo.webp",
          time: "01:28:45",
          price: "$2,980",
          tickets: "340 tickets",
          participants: "1,280 users",
        },
        {
          id: 2,
          status: "active",
          title: "ASUS Zenbook Duo",
          description: "Join the dual-screen ASUS laptop auction using your Black Five wallet.",
          image: "/images/template/asus-dual-screen-3t68.png",
          time: "03:12:10",
          price: "$2,250",
          tickets: "218 tickets",
          participants: "794 users",
        },
        {
          id: 3,
          status: "active",
          title: "iPad Pro",
          description: "A limited-time iPad Pro auction with real-time competition tracking.",
          image: "/images/template/ipad.webp",
          time: "00:47:22",
          price: "$1,520",
          tickets: "156 tickets",
          participants: "512 users",
        },
        {
          id: 4,
          status: "expired",
          title: "Redmi Monitor G27U",
          description: "Completed gaming monitor auction with final price and participant count.",
          image: "/images/template/redmi-monitor-g27u.jpg",
          time: "Yesterday, 18:30",
          price: "$880",
          tickets: "290 tickets",
          participants: "960 users",
        },
        {
          id: 5,
          status: "expired",
          title: "iPad Pro",
          description: "Archived iPad Pro auction with transparent result and bid status.",
          image: "/images/template/ipad.webp",
          time: "2 days ago",
          price: "$1,390",
          tickets: "178 tickets",
          participants: "430 users",
        },
        {
          id: 6,
          status: "expired",
          title: "ASUS Zenbook Duo",
          description: "Completed dual-screen ASUS laptop auction with full competition history.",
          image: "/images/template/asus-dual-screen-3t68.png",
          time: "3 days ago",
          price: "$2,135",
          tickets: "246 tickets",
          participants: "685 users",
        },
        {
          id: 7,
          status: "expired",
          title: "MacBook Neo",
          description: "Archived MacBook Neo auction with final price, tickets, and participants.",
          image: "/images/template/csm_macbook_neo.webp",
          time: "5 days ago",
          price: "$2,830",
          tickets: "312 tickets",
          participants: "1,040 users",
        },
      ],
    },
    howItWorks: {
      title: "How do you join Black Five auctions?",
      description:
        "Getting into auctions is simple. From account setup to bidding, everything happens through a clear step-by-step flow.",
      steps: [
        {
          title: "Sign up and verify",
          description: "Create your account and complete the identity details needed for secure auction participation.",
        },
        {
          title: "Activate your wallet",
          description: "Prepare your Black Five wallet so payments, tickets, and settlements stay traceable.",
        },
        {
          title: "Get an auction ticket",
          description: "Pick the auction you want, get your ticket, and enter a transparent competition.",
        },
        {
          title: "Bid and view results",
          description: "Bids are recorded during the auction, and results become visible when it ends.",
        },
      ],
      summaryTitle: "Before your first bid",
      summaryItems: ["Quick start without complexity", "Secure and traceable wallet", "Transparent result after every auction"],
    },
    tickets: {
      title: "Tickets are your entry into Black Five opportunities",
      description:
        "A ticket in Black Five is more than access. It connects auction entry, ownership tracking, and secondary market activity.",
      action: "View ticket market",
      features: [
        {
          title: "Enter auctions",
          description: "Choose an active ticket for each auction and join the competition with traceable status.",
        },
        {
          title: "Transfer or sell",
          description: "Eligible tickets can be traded or transferred through the secondary market.",
        },
        {
          title: "Track status",
          description: "Ownership, usage state, and ticket history stay visible inside the user account.",
        },
      ],
      panel: {
        status: "Active ticket",
        product: "MacBook Neo auction",
        marketLabel: "Secondary market price",
        marketValue: "$82",
        ownerLabel: "Ownership",
        ownerValue: "Transferable",
        validityLabel: "Valid until",
        validityValue: "Auction ends",
        badge: "Tradable",
      },
    },
    security: {
      title: "Trust, security, and transparency in every transaction",
      description:
        "Black Five creates a traceable flow for auctions, tickets, and payments so users know what happened at every stage.",
      highlight: "Every bid, ticket, and transaction in Black Five is traceable and reviewable.",
      items: [
        {
          title: "User verification",
          description: "Accounts are checked with reliable details before meaningful auction or ticket-market activity.",
        },
        {
          title: "Secure wallet",
          description: "Payments, top-ups, and settlements are managed through a visible and traceable financial flow.",
        },
        {
          title: "Transparent bid records",
          description: "Bid timing, amount, and status are recorded so auction outcomes can be reviewed clearly.",
        },
        {
          title: "Data privacy",
          description: "User data is protected with controlled access and used only where the product flow requires it.",
        },
      ],
    },
    faq: {
      title: "Common questions before you start",
      description:
        "Still wondering about sign-up, tickets, wallet flow, or auction results? Here are the short answers users usually need first.",
      action: "Sign up for Black Five",
      items: [
        {
          question: "Do I need to sign up to join an auction?",
          answer: "Yes. You need an account to join auctions, manage tickets, and track results.",
        },
        {
          question: "What is an auction ticket used for?",
          answer: "A ticket is your entry into an auction, and eligible tickets may be transferred or traded in the secondary market.",
        },
        {
          question: "How is the auction result determined?",
          answer: "Bids are recorded until the auction ends, then the result and details become available for review.",
        },
        {
          question: "What does the wallet do?",
          answer: "Payments, top-ups, tickets, and settlements are managed and tracked through the wallet.",
        },
        {
          question: "Can I see results from previous auctions?",
          answer: "Yes. Ended auctions and their results are available in the auctions section.",
        },
      ],
    },
    footer: {
      description:
        "Black Five is an integrated platform for auctions, ticket management, secondary markets, and user financial services with a focus on transparent trading, data security, and a fast experience.",
      columns: [
        {
          title: "Black Five Platform",
          links: [
            { label: "Active auctions", href: "#auctions" },
            { label: "Secondary ticket market", href: "#tickets" },
            { label: "Product categories", href: "#inventory" },
            { label: "Launch calendar", href: "#launches" },
          ],
        },
        {
          title: "Account & Finance",
          links: [
            { label: "Black Five wallet", href: "#wallet" },
            { label: "User verification", href: "#identity" },
            { label: "Settlement and payments", href: "#settlement" },
            { label: "Financial reports", href: "#reports" },
          ],
        },
        {
          title: "Support & Trust",
          links: [
            { label: "Help center", href: "#guide" },
            { label: "Auction and ticket rules", href: "#rules" },
            { label: "Security and privacy", href: "#security" },
            { label: "Contact support", href: "#support" },
          ],
        },
      ],
      rights: "All rights reserved.",
      privacy: "Privacy",
      rules: "Trading rules",
    },
  },
};
