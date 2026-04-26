/* الإسلام والاستبداد السياسي — ISLAM AND POLITICAL TYRANNY — app.js v1.0 */
/* Based on "Al-Islam wal-Istibdad al-Siyasi" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الإسلام والاستبداد السياسي',
    splashSub: 'العدل أساس الحكم في الإسلام',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النساء ٤: ٥٨',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabPillars: 'الأركان',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الحكم الرشيد',
    cardsDesc: '٢٠ بطاقة من كتاب الإسلام والاستبداد السياسي — كل بطاقة تكشف حقيقة عن العدل والشورى',
    pillarsTitle: 'أركان الحكم العادل',
    pillarsDesc: 'مبادئ أساسية للحكم الراشد كما بيّنها الشيخ الغزالي',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من مبادئ العدل والحرية — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر معرفتك',
    quizDesc: 'هل تعرف حقوقك وواجباتك كما بيّنها الإسلام؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    verse: 'الآية',
    principle: 'المبدأ',
    example: 'المثال',
    lesson: 'الدرس',
    splashFeatures: [
      '٢٠ بطاقة عن العدل والشورى',
      'أركان الحكم الراشد في الإسلام',
      'عادات يومية مع تتبع مستمر',
      'اختبار + أدعية'
    ],
  },
  en: {
    appTitle: 'Islam & Political Tyranny',
    splashSub: 'Justice is the foundation of governance in Islam',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nisa 4:58',
    tabHome: 'Home', tabCards: 'Cards', tabPillars: 'Pillars',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Good Governance Cards',
    cardsDesc: '20 cards from Islam and Political Tyranny — each reveals a truth about justice and consultation',
    pillarsTitle: 'Pillars of Just Governance',
    pillarsDesc: 'Fundamental principles of righteous governance as explained by Sheikh al-Ghazali',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by principles of justice and freedom — track your daily progress',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'Do you know your rights and duties as Islam describes them?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    verse: 'Verse',
    principle: 'Principle',
    example: 'Example',
    lesson: 'Lesson',
    splashFeatures: [
      '20 cards on justice and consultation',
      'Pillars of righteous governance in Islam',
      'Daily habits with streak tracking',
      'Quiz + duas'
    ],
  },
  fr: {
    appTitle: 'Islam et Tyrannie Politique',
    splashSub: 'La justice est le fondement du gouvernement en Islam',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nisa 4:58',
    tabHome: 'Accueil', tabCards: 'Cartes', tabPillars: 'Piliers',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Bonne Gouvernance',
    cardsDesc: '20 cartes du livre Islam et Tyrannie Politique — chacune revele une verite sur la justice et la consultation',
    pillarsTitle: 'Piliers de la Gouvernance Juste',
    pillarsDesc: 'Principes fondamentaux de la gouvernance vertueuse selon Sheikh al-Ghazali',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees des principes de justice et de liberte — suivez vos progres',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous vos droits et devoirs tels que l\'Islam les decrit ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    verse: 'Verset',
    principle: 'Principe',
    example: 'Exemple',
    lesson: 'Lecon',
    splashFeatures: [
      '20 cartes sur la justice et la consultation',
      'Piliers de la gouvernance vertueuse en Islam',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas'
    ],
  }
};

// ═══════════════ CARDS DATA (20 cards) ═══════════════
const CARDS = [
  {
    id:1, emoji:'⚖️',
    ar:{title:'العدل فريضة إلهية',desc:'يرفض الغزالي في هذا الكتاب: العدل ليس منّة من الحاكم بل فريضة من الله. الحاكم الظالم خائن لأمانة الله مهما ادّعى التدين.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا',verseRef:'النساء: ٥٨',lesson:'العدل واجب ديني قبل أن يكون مطلباً سياسياً'},
    en:{title:'Justice Is a Divine Obligation',desc:'Al-Ghazali rejects in this book: Justice is not a favor from rulers but an obligation from God. An unjust ruler betrays God\'s trust no matter how religious they claim to be.',verse:'Indeed, God commands you to render trusts to whom they are due',verseRef:'An-Nisa: 58',lesson:'Justice is a religious duty before being a political demand'},
    fr:{title:'La Justice Est une Obligation Divine',desc:'Al-Ghazali rejette dans ce livre: La justice n\'est pas une faveur des dirigeants mais une obligation de Dieu. Un dirigeant injuste trahit la confiance de Dieu.',verse:'Dieu vous commande de rendre les depots a leurs proprietaires',verseRef:'An-Nisa: 58',lesson:'La justice est un devoir religieux avant d\'etre une exigence politique'}
  },
  {
    id:2, emoji:'🗣️',
    ar:{title:'الشورى ليست اختيارية',desc:'يرفض الغزالي في هذا الكتاب: الشورى في الإسلام ليست نصيحة يأخذها الحاكم أو يتركها. هي نظام ملزم يمنع تفرّد شخص بالقرار ويحمي الأمة من الاستبداد.',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى: ٣٨',lesson:'الشورى حق للأمة وليست منحة من الحاكم'},
    en:{title:'Consultation Is Not Optional',desc:'Al-Ghazali rejects in this book: Shura in Islam is not advice a ruler may take or leave. It is a binding system that prevents one-person rule and protects the nation from tyranny.',verse:'And their affair is consultation among themselves',verseRef:'Ash-Shura: 38',lesson:'Consultation is the nation\'s right, not a ruler\'s gift'},
    fr:{title:'La Consultation N\'est Pas Facultative',desc:'La Choura en Islam n\'est pas un conseil que le dirigeant peut prendre ou laisser. C\'est un systeme obligatoire qui empeche le pouvoir absolu.',verse:'Et leur affaire est consultation entre eux',verseRef:'Ash-Shura: 38',lesson:'La consultation est un droit du peuple, pas un cadeau du dirigeant'}
  },
  {
    id:3, emoji:'🔗',
    ar:{title:'محاسبة الحاكم',desc:'يرفض الغزالي في هذا الكتاب: لا أحد فوق المحاسبة في الإسلام. الخليفة عمر قال: "إذا رأيتم فيّ اعوجاجاً فقوّموني." هذا هو النموذج الإسلامي الحقيقي.',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ',verseRef:'آل عمران: ١٠٤',lesson:'محاسبة الحاكم واجب ديني لا جريمة سياسية'},
    en:{title:'Holding Rulers Accountable',desc:'Al-Ghazali rejects in this book: No one is above accountability in Islam. Caliph Umar said: "If you see crookedness in me, straighten me." This is the true Islamic model.',verse:'And let there arise from you a nation inviting to good and forbidding evil',verseRef:'Aal-Imran: 104',lesson:'Holding rulers accountable is a religious duty, not a political crime'},
    fr:{title:'Responsabilite des Dirigeants',desc:'Al-Ghazali rejette dans ce livre: Personne n\'est au-dessus de la responsabilite en Islam. Le Calife Omar a dit : "Si vous voyez en moi une deviation, redressez-moi."',verse:'Que soit issue de vous une communaute qui invite au bien et ordonne le convenable',verseRef:'Aal-Imran: 104',lesson:'La responsabilite des dirigeants est un devoir religieux, pas un crime politique'}
  },
  {
    id:4, emoji:'🏛️',
    ar:{title:'الإسلام ضد الحكم المطلق',desc:'يرفض الغزالي في هذا الكتاب: الإسلام لا يعرف الحكم المطلق ولا الملك المقدس. كل حاكم وكيل عن الأمة يُعزل إذا خان الأمانة.',verse:'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ',verseRef:'هود: ١١٣',lesson:'السكوت على الظلم مشاركة فيه'},
    en:{title:'Islam Opposes Absolute Rule',desc:'Al-Ghazali rejects in this book: Islam does not recognize absolute rule or sacred kingship. Every ruler is a representative of the people who is removed if they betray the trust.',verse:'And do not incline toward those who do wrong, lest the Fire touch you',verseRef:'Hud: 113',lesson:'Silence before injustice is complicity'},
    fr:{title:'L\'Islam S\'oppose au Pouvoir Absolu',desc:'L\'Islam ne reconnait ni le pouvoir absolu ni la royaute sacree. Chaque dirigeant est un representant du peuple, revocable s\'il trahit.',verse:'Ne penchez pas vers les injustes, sinon le Feu vous toucherait',verseRef:'Hud: 113',lesson:'Le silence face a l\'injustice est une complicite'}
  },
  {
    id:5, emoji:'📜',
    ar:{title:'حقوق المواطن في الإسلام',desc:'يرفض الغزالي في هذا الكتاب: للمسلم حقوق لا يجوز لأحد انتهاكها: حرية العقيدة، حرية التعبير، حق العيش الكريم، وحق الأمان من الظلم.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء: ٧٠',lesson:'كرامة الإنسان أصل ثابت لا يُنتقص'},
    en:{title:'Citizens\' Rights in Islam',desc:'A Muslim has inviolable rights: freedom of belief, freedom of expression, the right to a dignified life, and protection from oppression.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra: 70',lesson:'Human dignity is a fixed principle that cannot be diminished'},
    fr:{title:'Droits du Citoyen en Islam',desc:'Al-Ghazali rejette dans ce livre: Un musulman a des droits inviolables : liberte de croyance, liberte d\'expression, droit a une vie digne, et protection contre l\'oppression.',verse:'Nous avons certes honore les fils d\'Adam',verseRef:'Al-Isra: 70',lesson:'La dignite humaine est un principe fixe qui ne peut etre diminue'}
  },
  {
    id:6, emoji:'👑',
    ar:{title:'الخلافة الراشدة نموذج',desc:'يرفض الغزالي في هذا الكتاب: أبو بكر الصديق في أول خطبة: "وُلّيت عليكم ولست بخيركم. إن أحسنت فأعينوني، وإن أسأت فقوّموني." هذا هو الحكم الإسلامي.',verse:'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',verseRef:'الحجرات: ١٣',lesson:'التواضع صفة الحاكم الحقيقي في الإسلام'},
    en:{title:'The Rightly Guided Caliphate as Model',desc:'Al-Ghazali rejects in this book: Abu Bakr in his first speech: "I have been placed in authority over you, but I am not the best of you. If I do well, help me; if I err, correct me." This is Islamic governance.',verse:'Indeed, the most noble of you in the sight of God is the most righteous',verseRef:'Al-Hujurat: 13',lesson:'Humility is the quality of a true Islamic ruler'},
    fr:{title:'Le Califat Bien Guide comme Modele',desc:'Al-Ghazali rejette dans ce livre: Abu Bakr dans son premier discours : "J\'ai ete place a votre tete mais je ne suis pas le meilleur d\'entre vous. Si je fais bien, aidez-moi ; si je me trompe, corrigez-moi."',verse:'Le plus noble d\'entre vous aupres de Dieu est le plus pieux',verseRef:'Al-Hujurat: 13',lesson:'L\'humilite est la qualite d\'un vrai dirigeant islamique'}
  },
  {
    id:7, emoji:'⚔️',
    ar:{title:'الاستبداد يدمّر الأمم',desc:'التاريخ يشهد: كل أمة سقطت بدأ سقوطها بالاستبداد. الطاغية يحطم المؤسسات ويقتل الكفاءات حتى تنهار الدولة.',verse:'فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا',verseRef:'النمل: ٥٢',lesson:'الاستبداد طريق الانهيار لا الاستقرار'},
    en:{title:'Tyranny Destroys Nations',desc:'Al-Ghazali rejects in this book: History testifies: every fallen nation began its fall with tyranny. A tyrant destroys institutions and eliminates talent until the state collapses.',verse:'So those are their houses, desolate because of the wrong they had done',verseRef:'An-Naml: 52',lesson:'Tyranny is the path to collapse, not stability'},
    fr:{title:'La Tyrannie Detruit les Nations',desc:'Al-Ghazali rejette dans ce livre: L\'histoire temoigne : chaque nation tombee a commence sa chute par la tyrannie. Un tyran detruit les institutions et elimine les talents.',verse:'Voila leurs maisons, desertes, a cause de leurs injustices',verseRef:'An-Naml: 52',lesson:'La tyrannie est le chemin de l\'effondrement, pas de la stabilite'}
  },
  {
    id:8, emoji:'🤝',
    ar:{title:'البيعة عقد اجتماعي',desc:'البيعة في الإسلام عقد بين الحاكم والمحكوم. إذا أخلّ الحاكم بشروط العقد سقطت طاعته. ليست ولاء أعمى.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ',verseRef:'المائدة: ١',lesson:'الطاعة مشروطة بالعدل لا مطلقة'},
    en:{title:'The Pledge Is a Social Contract',desc:'The pledge of allegiance in Islam is a contract between ruler and people. If the ruler breaks the contract\'s conditions, obedience is no longer due. It is not blind loyalty.',verse:'O you who believe, fulfill your contracts',verseRef:'Al-Ma\'idah: 1',lesson:'Obedience is conditional on justice, not absolute'},
    fr:{title:'L\'Allegeance Est un Contrat Social',desc:'L\'allegeance en Islam est un contrat entre le dirigeant et le peuple. Si le dirigeant rompt les conditions, l\'obeissance n\'est plus due.',verse:'O vous qui croyez, remplissez vos engagements',verseRef:'Al-Ma\'idah: 1',lesson:'L\'obeissance est conditionnelle a la justice, pas absolue'}
  },
  {
    id:9, emoji:'🗽',
    ar:{title:'الحرية أصل لا استثناء',desc:'الحرية في الإسلام أصل وليست استثناء. عمر بن الخطاب قال: "متى استعبدتم الناس وقد ولدتهم أمهاتهم أحراراً؟"',verse:'لَا إِكْرَاهَ فِي الدِّينِ',verseRef:'البقرة: ٢٥٦',lesson:'الحرية حق إلهي لكل إنسان'},
    en:{title:'Freedom Is the Rule, Not the Exception',desc:'Freedom in Islam is the rule, not the exception. Umar ibn al-Khattab said: "Since when have you enslaved people when their mothers bore them free?"',verse:'There shall be no compulsion in religion',verseRef:'Al-Baqarah: 256',lesson:'Freedom is a divine right for every human being'},
    fr:{title:'La Liberte Est la Regle',desc:'Al-Ghazali rejette dans ce livre: La liberte en Islam est la regle, pas l\'exception. Omar ibn al-Khattab a dit : "Depuis quand avez-vous asservi les gens alors que leurs meres les ont enfantes libres ?"',verse:'Nulle contrainte en religion',verseRef:'Al-Baqarah: 256',lesson:'La liberte est un droit divin pour chaque etre humain'}
  },
  {
    id:10, emoji:'📖',
    ar:{title:'العلماء حُرّاس العدل',desc:'دور العلماء ليس تبرير ظلم السلطان بل محاسبته. العالم الحقيقي يقول الحق ولو على حساب منصبه.',verse:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ',verseRef:'البقرة: ٤٢',lesson:'علماء السلطان خونة للعلم والأمة'},
    en:{title:'Scholars Are Guardians of Justice',desc:'The role of scholars is not to justify a ruler\'s oppression but to hold them accountable. A true scholar speaks the truth even at the cost of their position.',verse:'And do not mix the truth with falsehood or conceal the truth while you know it',verseRef:'Al-Baqarah: 42',lesson:'Court scholars betray both knowledge and the nation'},
    fr:{title:'Les Savants Sont les Gardiens de la Justice',desc:'Le role des savants n\'est pas de justifier l\'oppression mais de demander des comptes. Un vrai savant dit la verite meme au prix de sa position.',verse:'Ne melez pas le vrai au faux et ne cachez pas la verite alors que vous savez',verseRef:'Al-Baqarah: 42',lesson:'Les savants de cour trahissent le savoir et la nation'}
  },
  {
    id:11, emoji:'🌍',
    ar:{title:'المساواة بين الناس',desc:'لا فرق في الإسلام بين حاكم ومحكوم أمام القانون. الناس سواسية كأسنان المشط، لا فضل لأحد إلا بالتقوى.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ',verseRef:'الحجرات: ١٣',lesson:'المساواة أمام القانون حق إسلامي أصيل'},
    en:{title:'Equality Among People',desc:'In Islam, there is no difference between ruler and ruled before the law. People are equal like the teeth of a comb; none is superior except in righteousness.',verse:'O mankind, indeed We have created you from male and female',verseRef:'Al-Hujurat: 13',lesson:'Equality before the law is an authentic Islamic right'},
    fr:{title:'L\'Egalite entre les Gens',desc:'En Islam, il n\'y a pas de difference entre dirigeant et gouverne devant la loi. Les gens sont egaux comme les dents d\'un peigne.',verse:'O hommes, Nous vous avons crees d\'un male et d\'une femelle',verseRef:'Al-Hujurat: 13',lesson:'L\'egalite devant la loi est un droit islamique authentique'}
  },
  {
    id:12, emoji:'🏗️',
    ar:{title:'المؤسسات لا الأشخاص',desc:'الحكم الرشيد يقوم على مؤسسات قوية لا على أشخاص. عندما يرحل القائد تبقى المؤسسات. الاستبداد يبني على شخص فإذا رحل انهار كل شيء.',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'آل عمران: ١٤٠',lesson:'المؤسسات تدوم والأشخاص يرحلون'},
    en:{title:'Institutions, Not Individuals',desc:'Good governance is built on strong institutions, not individuals. When a leader departs, institutions remain. Tyranny builds on a person — when they leave, everything collapses.',verse:'And those days We alternate among the people',verseRef:'Aal-Imran: 140',lesson:'Institutions last while individuals depart'},
    fr:{title:'Des Institutions, Pas des Individus',desc:'La bonne gouvernance repose sur des institutions solides, pas sur des individus. Quand un leader part, les institutions restent.',verse:'Ces jours, Nous les alternons parmi les gens',verseRef:'Aal-Imran: 140',lesson:'Les institutions durent tandis que les individus partent'}
  },
  {
    id:13, emoji:'💰',
    ar:{title:'المال العام أمانة',desc:'المال العام في الإسلام أمانة لا غنيمة. أبو بكر رفض أن يأخذ أكثر من كفايته. عمر كان يحاسب ولاته على كل درهم.',verse:'وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ',verseRef:'البقرة: ١٨٨',lesson:'الفساد المالي خيانة للأمة بأكملها'},
    en:{title:'Public Wealth Is a Trust',desc:'Public wealth in Islam is a trust, not a spoil. Abu Bakr refused to take more than his basic needs. Umar held his governors accountable for every coin.',verse:'And do not consume one another\'s wealth unjustly',verseRef:'Al-Baqarah: 188',lesson:'Financial corruption is a betrayal of the entire nation'},
    fr:{title:'Les Richesses Publiques Sont un Depot',desc:'Les richesses publiques en Islam sont un depot, pas un butin. Abu Bakr refusait de prendre plus que ses besoins de base.',verse:'Ne mangez pas vos biens entre vous injustement',verseRef:'Al-Baqarah: 188',lesson:'La corruption financiere est une trahison de toute la nation'}
  },
  {
    id:14, emoji:'🧑‍⚖️',
    ar:{title:'القضاء المستقل',desc:'القضاء في الإسلام مستقل عن الحاكم. القاضي شريح حكم ضد علي بن أبي طالب وهو الخليفة. هذا هو القضاء الحقيقي.',verse:'وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ',verseRef:'النساء: ٥٨',lesson:'القضاء المستقل ضمانة العدل'},
    en:{title:'Independent Judiciary',desc:'The judiciary in Islam is independent of the ruler. Judge Shuraih ruled against Ali ibn Abi Talib while Ali was the Caliph. This is true justice.',verse:'And when you judge between people, judge with justice',verseRef:'An-Nisa: 58',lesson:'An independent judiciary is the guarantee of justice'},
    fr:{title:'Un Pouvoir Judiciaire Independant',desc:'Le pouvoir judiciaire en Islam est independant du dirigeant. Le juge Chouraih a statue contre Ali alors qu\'il etait Calife. C\'est la vraie justice.',verse:'Quand vous jugez entre les gens, jugez avec equite',verseRef:'An-Nisa: 58',lesson:'Un pouvoir judiciaire independant est la garantie de la justice'}
  },
  {
    id:15, emoji:'🕊️',
    ar:{title:'حرية الرأي مصانة',desc:'الإسلام صان حرية الرأي حتى مع المخالف. امرأة اعترضت على عمر في المسجد فقال: "أصابت امرأة وأخطأ عمر." قَبِل النقد العلني بتواضع.',verse:'وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',verseRef:'العصر: ٣',lesson:'قبول النقد علامة القوة لا الضعف'},
    en:{title:'Freedom of Opinion Is Protected',desc:'Islam protected freedom of opinion even with opponents. A woman corrected Umar in the mosque and he said: "The woman is right and Umar is wrong." He accepted public criticism with humility.',verse:'And advised each other to truth and advised each other to patience',verseRef:'Al-Asr: 3',lesson:'Accepting criticism is a sign of strength, not weakness'},
    fr:{title:'La Liberte d\'Opinion Est Protegee',desc:'L\'Islam a protege la liberte d\'opinion meme face aux opposants. Une femme a corrige Omar a la mosquee et il a dit : "La femme a raison et Omar a tort."',verse:'Se sont recommande la verite et la patience',verseRef:'Al-Asr: 3',lesson:'Accepter la critique est un signe de force, pas de faiblesse'}
  },
  {
    id:16, emoji:'📊',
    ar:{title:'العدالة الاجتماعية',desc:'الإسلام يرفض تركّز الثروة في أيدي قلة. الزكاة والصدقات نظام إلزامي لتوزيع الثروة ومحاربة الفقر.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'الحشر: ٧',lesson:'العدالة الاجتماعية ركن من أركان الحكم الراشد'},
    en:{title:'Social Justice',desc:'Islam rejects the concentration of wealth in the hands of a few. Zakat and charity are a mandatory system for distributing wealth and fighting poverty.',verse:'So that it will not be a perpetual distribution among the rich from among you',verseRef:'Al-Hashr: 7',lesson:'Social justice is a pillar of righteous governance'},
    fr:{title:'La Justice Sociale',desc:'L\'Islam rejette la concentration des richesses entre les mains d\'une minorite. La Zakat et les aumones sont un systeme obligatoire pour distribuer la richesse.',verse:'Afin que cela ne circule pas seulement entre les riches parmi vous',verseRef:'Al-Hashr: 7',lesson:'La justice sociale est un pilier de la bonne gouvernance'}
  },
  {
    id:17, emoji:'🛡️',
    ar:{title:'حماية الأقليات',desc:'الإسلام يحمي حقوق غير المسلمين في الدولة الإسلامية. الرسول قال: "من آذى ذمياً فأنا خصمه." العدل شامل للجميع.',verse:'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ أَن تَبَرُّوهُمْ',verseRef:'الممتحنة: ٨',lesson:'العدل في الإسلام لا يعرف تمييزاً'},
    en:{title:'Protection of Minorities',desc:'Islam protects the rights of non-Muslims in the Islamic state. The Prophet said: "Whoever harms a non-Muslim citizen, I am his opponent." Justice is universal.',verse:'God does not forbid you from being kind to those who do not fight you because of religion',verseRef:'Al-Mumtahanah: 8',lesson:'Justice in Islam knows no discrimination'},
    fr:{title:'Protection des Minorites',desc:'L\'Islam protege les droits des non-musulmans dans l\'Etat islamique. Le Prophete a dit : "Quiconque nuit a un citoyen non-musulman, je suis son adversaire."',verse:'Dieu ne vous interdit pas d\'etre bienfaisants envers ceux qui ne vous combattent pas pour la religion',verseRef:'Al-Mumtahanah: 8',lesson:'La justice en Islam ne connait pas de discrimination'}
  },
  {
    id:18, emoji:'🔔',
    ar:{title:'النصيحة واجب',desc:'النصيحة للحاكم واجب شرعي. الرسول قال: "الدين النصيحة." العالم الذي يسكت عن الحق شريك في الظلم.',verse:'وَلَا تَكْتُمُوا الشَّهَادَةَ وَمَن يَكْتُمْهَا فَإِنَّهُ آثِمٌ قَلْبُهُ',verseRef:'البقرة: ٢٨٣',lesson:'كتمان الحق إثم عظيم'},
    en:{title:'Sincere Advice Is a Duty',desc:'Advising the ruler is a religious duty. The Prophet said: "Religion is sincerity." A scholar who stays silent about injustice is a partner in oppression.',verse:'And do not conceal testimony, for whoever conceals it — his heart is sinful',verseRef:'Al-Baqarah: 283',lesson:'Concealing the truth is a great sin'},
    fr:{title:'Le Conseil Sincere Est un Devoir',desc:'Conseiller le dirigeant est un devoir religieux. Le Prophete a dit : "La religion, c\'est le conseil sincere." Un savant qui se tait devant l\'injustice est complice.',verse:'Ne cachez pas le temoignage, car celui qui le cache a un coeur pecheur',verseRef:'Al-Baqarah: 283',lesson:'Cacher la verite est un grand peche'}
  },
  {
    id:19, emoji:'🌱',
    ar:{title:'الاستبداد يقتل الإبداع',desc:'لا إبداع تحت الخوف. المجتمعات المستبدة تفقد عقولها لأن المبدعين يهربون أو يُسكتون. الحرية بيئة الإبداع الوحيدة.',verse:'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ',verseRef:'العنكبوت: ٢٠',lesson:'الحرية شرط الإبداع والتقدم'},
    en:{title:'Tyranny Kills Creativity',desc:'There is no creativity under fear. Tyrannical societies lose their minds because innovators flee or are silenced. Freedom is the only environment for creativity.',verse:'Say: Travel through the land and observe how He began creation',verseRef:'Al-Ankabut: 20',lesson:'Freedom is the condition for creativity and progress'},
    fr:{title:'La Tyrannie Tue la Creativite',desc:'Il n\'y a pas de creativite sous la peur. Les societes tyranniques perdent leurs cerveaux car les innovateurs fuient ou sont reduits au silence.',verse:'Dis : Parcourez la terre et observez comment Il a commence la creation',verseRef:'Al-Ankabut: 20',lesson:'La liberte est la condition de la creativite et du progres'}
  },
  {
    id:20, emoji:'🕌',
    ar:{title:'الإسلام دين ودولة',desc:'الإسلام ليس مجرد عبادات. هو نظام شامل فيه حكم وعدل واقتصاد واجتماع. من يقصره على المسجد يخون رسالته الكاملة.',verse:'وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ',verseRef:'النحل: ٨٩',lesson:'الإسلام منهج حياة شامل لا مجرد طقوس'},
    en:{title:'Islam: Religion and State',desc:'Islam is not just rituals. It is a comprehensive system encompassing governance, justice, economics, and society. Confining it to the mosque betrays its complete message.',verse:'And We have sent down to you the Book as clarification for all things',verseRef:'An-Nahl: 89',lesson:'Islam is a comprehensive way of life, not just rituals'},
    fr:{title:'L\'Islam : Religion et Etat',desc:'L\'Islam n\'est pas que des rituels. C\'est un systeme complet englobant gouvernance, justice, economie et societe. Le confiner a la mosquee trahit son message complet.',verse:'Et Nous avons fait descendre sur toi le Livre comme clarification de toute chose',verseRef:'An-Nahl: 89',lesson:'L\'Islam est un mode de vie complet, pas de simples rituels'}
  },
  {
    id:21, emoji:'📡',
    ar:{title:'حرية الإعلام',desc:'الإعلام الحر ركيزة من ركائز مقاومة الاستبداد. إعلام الحاكم يكذب على الشعب ويزيّف الحقائق. الحرية الإعلامية ضمانة للمساءلة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ',verseRef:'النساء: ١٣٥',lesson:'الإعلام الحر حارس للحقيقة وكاشف للظلم'},
    en:{title:'Media Freedom',desc:'Free media is a pillar of resisting tyranny. The ruler\'s media lies to the people and falsifies facts. Media freedom is a guarantee of accountability.',verse:'O you who believe, be persistently standing firm in justice, witnesses for God',verseRef:'An-Nisa: 135',lesson:'Free media is a guardian of truth and an exposer of injustice'},
    fr:{title:'La Liberte des Medias',desc:'Les medias libres sont un pilier de la resistance a la tyrannie. Les medias du dirigeant mentent au peuple et falsifient les faits. La liberte des medias est une garantie de responsabilite.',verse:'O vous qui croyez, soyez fermes dans la justice, temoins pour Dieu',verseRef:'An-Nisa: 135',lesson:'Les medias libres sont gardiens de la verite et revelateurs de l\'injustice'}
  },
  {
    id:22, emoji:'🏛️',
    ar:{title:'استقلال القضاء',desc:'القضاء المستقل هو الحصن الأخير ضد الاستبداد. إذا فقد القاضي استقلاله أصبح أداة بيد الحاكم لا حامياً للحقوق.',verse:'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ',verseRef:'النساء: ٥٨',lesson:'القضاء المستقل ضمانة لحقوق الجميع'},
    en:{title:'Judicial Independence',desc:'An independent judiciary is the last fortress against tyranny. When a judge loses independence, they become a tool in the ruler\'s hand, not a protector of rights.',verse:'Indeed, God commands you to render trusts to whom they are due and when you judge between people, to judge with justice',verseRef:'An-Nisa: 58',lesson:'An independent judiciary guarantees everyone\'s rights'},
    fr:{title:'L\'Independance Judiciaire',desc:'Un pouvoir judiciaire independant est le dernier rempart contre la tyrannie. Quand un juge perd son independance, il devient un outil entre les mains du dirigeant.',verse:'Dieu vous ordonne de rendre les depots a leurs ayants droit et quand vous jugez entre les gens, de juger avec equite',verseRef:'An-Nisa: 58',lesson:'Un pouvoir judiciaire independant garantit les droits de tous'}
  },
  {
    id:23, emoji:'📜',
    ar:{title:'الدستور والشريعة',desc:'الدستور العادل يستمد مبادئه من الشريعة ومقاصدها. ليس المطلوب نقل نصوص حرفية بل تحقيق مقاصد العدل والحرية والمساواة.',verse:'وَشَاوِرْهُمْ فِي الْأَمْرِ',verseRef:'آل عمران: ١٥٩',lesson:'الدستور الإسلامي يحقق مقاصد الشريعة لا مجرد نصوصها'},
    en:{title:'Constitution and Shariah',desc:'A just constitution derives its principles from Shariah and its objectives. The goal is not literal text transfer but achieving the objectives of justice, freedom, and equality.',verse:'And consult them in the matter',verseRef:'Aal Imran: 159',lesson:'An Islamic constitution achieves the objectives of Shariah, not mere literal texts'},
    fr:{title:'La Constitution et la Charia',desc:'Une constitution juste tire ses principes de la Charia et de ses objectifs. Le but n\'est pas le transfert litterale des textes mais la realisation des objectifs de justice, liberte et egalite.',verse:'Et consulte-les dans l\'affaire',verseRef:'Aal Imran: 159',lesson:'Une constitution islamique realise les objectifs de la Charia, pas de simples textes'}
  },
  {
    id:24, emoji:'🏗️',
    ar:{title:'نماذج الحكم الحديثة',desc:'يمكن الاستفادة من تجارب الحكم الحديثة مع الحفاظ على الثوابت الإسلامية. الحكمة ضالة المؤمن أنّى وجدها فهو أحق بها.',verse:'خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ',verseRef:'الأعراف: ١٩٩',lesson:'الإسلام يقبل كل نظام يحقق العدل والشورى'},
    en:{title:'Modern Governance Models',desc:'Modern governance experiences can be beneficial while preserving Islamic constants. Wisdom is the believer\'s lost property — wherever they find it, they have the most right to it.',verse:'Take what is given freely, enjoin what is good',verseRef:'Al-A\'raf: 199',lesson:'Islam accepts any system that achieves justice and consultation'},
    fr:{title:'Les Modeles de Gouvernance Modernes',desc:'Les experiences modernes de gouvernance peuvent etre benefiques tout en preservant les constantes islamiques. La sagesse est la propriete perdue du croyant.',verse:'Prends ce qui est offert, ordonne le bien',verseRef:'Al-A\'raf: 199',lesson:'L\'Islam accepte tout systeme qui realise la justice et la consultation'}
  },
  {
    id:25, emoji:'🤝',
    ar:{title:'المجتمع المدني',desc:'المجتمع المدني القوي هو صمام الأمان ضد الاستبداد. الجمعيات والنقابات والمؤسسات الأهلية تمنع تركّز السلطة في يد واحدة.',verse:'وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ',verseRef:'آل عمران: ١٠٤',lesson:'المجتمع المدني حصانة للأمة من الطغيان'},
    en:{title:'Civil Society',desc:'A strong civil society is the safety valve against tyranny. Associations, unions, and civic institutions prevent the concentration of power in one hand.',verse:'And let there arise from you a nation inviting to good, enjoining right and forbidding wrong',verseRef:'Aal Imran: 104',lesson:'Civil society is the nation\'s immunity against tyranny'},
    fr:{title:'La Societe Civile',desc:'Une societe civile forte est la soupape de surete contre la tyrannie. Les associations, syndicats et institutions civiques empechent la concentration du pouvoir en une seule main.',verse:'Que soit issue de vous une communaute qui appelle au bien, ordonne le convenable et interdit le blamable',verseRef:'Aal Imran: 104',lesson:'La societe civile est l\'immunite de la nation contre la tyrannie'}
  },
  {
    id:26, emoji:'📡',
    ar:{title:'الرقابة الشعبية',desc:'الأمة هي مصدر السلطة. حق الرقابة على الحاكم حق أصيل لكل مواطن. السكوت عن مراقبة الحاكم تفريط في أمانة.',verse:'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ',verseRef:'آل عمران: ١١٠',lesson:'المراقبة الشعبية فريضة لا منحة'},
    en:{title:'Popular Oversight',desc:'The nation is the source of authority. The right to oversee the ruler is an inherent right of every citizen. Silence about monitoring the ruler is negligence of a trust.',verse:'You are the best nation produced for mankind — you enjoin what is right and forbid what is wrong',verseRef:'Aal Imran: 110',lesson:'Popular oversight is an obligation, not a privilege'},
    fr:{title:'Le Controle Populaire',desc:'La nation est la source de l\'autorite. Le droit de surveiller le dirigeant est un droit inherent de chaque citoyen. Se taire sur le controle du dirigeant est une negligence.',verse:'Vous etes la meilleure communaute suscitee pour les gens — vous ordonnez le bien et interdisez le mal',verseRef:'Aal Imran: 110',lesson:'Le controle populaire est une obligation, pas un privilege'}
  },
  {
    id:27, emoji:'💰',
    ar:{title:'الفساد المالي',desc:'نهب المال العام أعظم أنواع الفساد. الحاكم الذي يسرق شعبه يوم القيامة يأتي بما سرق يحمله على رقبته.',verse:'وَمَن يَغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ الْقِيَامَةِ',verseRef:'آل عمران: ١٦١',lesson:'المال العام أمانة والسرقة منه خيانة عظمى'},
    en:{title:'Financial Corruption',desc:'Plundering public funds is the greatest type of corruption. A ruler who steals from their people will come on Judgment Day carrying what they stole on their neck.',verse:'And whoever betrays the trust will come on the Day of Judgment carrying what they misappropriated',verseRef:'Aal Imran: 161',lesson:'Public funds are a trust and stealing from them is the greatest betrayal'},
    fr:{title:'La Corruption Financiere',desc:'Le pillage des fonds publics est le pire type de corruption. Un dirigeant qui vole son peuple viendra au Jour du Jugement portant ce qu\'il a vole sur son cou.',verse:'Et quiconque trahit la confiance viendra au Jour du Jugement portant ce qu\'il a detourne',verseRef:'Aal Imran: 161',lesson:'Les fonds publics sont un depot et les voler est la plus grande trahison'}
  },
  {
    id:28, emoji:'🎓',
    ar:{title:'العلماء والسلطة',desc:'العلماء الذين يبررون ظلم الحاكم أشد خطراً من الحاكم نفسه. عالم السوء يعطي الظلم شرعية دينية زائفة.',verse:'إِنَّ كَثِيرًا مِّنَ الْأَحْبَارِ وَالرُّهْبَانِ لَيَأْكُلُونَ أَمْوَالَ النَّاسِ بِالْبَاطِلِ',verseRef:'التوبة: ٣٤',lesson:'العالم الحق يقول الحق ولو غضب الحاكم'},
    en:{title:'Scholars and Authority',desc:'Scholars who justify the ruler\'s oppression are more dangerous than the ruler himself. A corrupt scholar gives tyranny a false religious legitimacy.',verse:'Indeed, many of the scholars and monks devour the wealth of people unjustly',verseRef:'At-Tawbah: 34',lesson:'A true scholar speaks the truth even if the ruler is angered'},
    fr:{title:'Les Savants et l\'Autorite',desc:'Les savants qui justifient l\'oppression du dirigeant sont plus dangereux que le dirigeant lui-meme. Un savant corrompu donne a la tyrannie une fausse legitimite religieuse.',verse:'Beaucoup de savants et de moines devorent les biens des gens injustement',verseRef:'At-Tawbah: 34',lesson:'Un vrai savant dit la verite meme si le dirigeant se met en colere'}
  },
  {
    id:29, emoji:'⛓️',
    ar:{title:'الاستبداد والتخلف',desc:'كل أمة حكمها مستبد تأخرت عن ركب الحضارة. الاستبداد يقتل الإبداع ويهجّر العقول ويدمّر الاقتصاد ويفسد الأخلاق.',verse:'فَاسْتَخَفَّ قَوْمَهُ فَأَطَاعُوهُ إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ',verseRef:'الزخرف: ٥٤',lesson:'الاستبداد أصل كل تخلف وانحطاط'},
    en:{title:'Tyranny and Backwardness',desc:'Every nation ruled by a tyrant falls behind in civilization. Tyranny kills creativity, exiles minds, destroys the economy, and corrupts morals.',verse:'So he made his people unsteady and they obeyed him. Indeed, they were a disobedient people',verseRef:'Az-Zukhruf: 54',lesson:'Tyranny is the root of all backwardness and decline'},
    fr:{title:'La Tyrannie et le Retard',desc:'Toute nation dirigee par un tyran prend du retard civilisationnel. La tyrannie tue la creativite, exile les esprits, detruit l\'economie et corrompt les moeurs.',verse:'Il rendit son peuple instable et ils lui obeirent. C\'etaient des gens pervers',verseRef:'Az-Zukhruf: 54',lesson:'La tyrannie est la racine de tout retard et declin'}
  },
  {
    id:30, emoji:'🌍',
    ar:{title:'نماذج الخلفاء الراشدين',desc:'الخلفاء الراشدون أقاموا نموذجاً في الحكم الرشيد. عمر بن الخطاب كان يمشي في الليل يتفقد رعيته ويخشى أن يُسأل عن بغلة عثرت في العراق.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل: ٩٠',lesson:'الخلافة الراشدة نموذج حقيقي للحكم العادل'},
    en:{title:'Models of the Rightly-Guided Caliphs',desc:'The Rightly-Guided Caliphs established a model of good governance. Umar ibn al-Khattab used to walk at night checking on his people, fearing he would be questioned about a mule that stumbled in Iraq.',verse:'Indeed, God commands justice and good conduct',verseRef:'An-Nahl: 90',lesson:'The Rightly-Guided Caliphate is a real model of just governance'},
    fr:{title:'Les Modeles des Califes Bien-Guides',desc:'Les califes bien-guides ont etabli un modele de bonne gouvernance. Umar ibn al-Khattab marchait la nuit pour verifier l\'etat de son peuple, craignant d\'etre questionne sur une mule qui a trebuche en Irak.',verse:'Dieu ordonne la justice et la bienfaisance',verseRef:'An-Nahl: 90',lesson:'Le califat bien-guide est un vrai modele de gouvernance juste'}
  },
  {
    id:31, emoji:'📢',
    ar:{title:'حرية التعبير',desc:'حرية التعبير حق مكفول في الإسلام. عمر بن الخطاب قال: "متى استعبدتم الناس وقد ولدتهم أمهاتهم أحراراً." قمع الأصوات بداية الانهيار.',verse:'وَقُولُوا لِلنَّاسِ حُسْنًا',verseRef:'البقرة: ٨٣',lesson:'حرية الكلمة أساس كل إصلاح'},
    en:{title:'Freedom of Expression',desc:'Freedom of expression is a guaranteed right in Islam. Umar ibn al-Khattab said: "When did you enslave people whose mothers gave birth to them free?" Suppressing voices is the beginning of collapse.',verse:'And speak to people good words',verseRef:'Al-Baqarah: 83',lesson:'Freedom of speech is the foundation of all reform'},
    fr:{title:'La Liberte d\'Expression',desc:'La liberte d\'expression est un droit garanti en Islam. Umar ibn al-Khattab a dit : Quand avez-vous asservi les gens alors que leurs meres les ont mis au monde libres.',verse:'Et dites aux gens de bonnes paroles',verseRef:'Al-Baqarah: 83',lesson:'La liberte de parole est le fondement de toute reforme'}
  },
  {
    id:32, emoji:'👁️',
    ar:{title:'الاستبداد والفساد توأمان',desc:'الاستبداد والفساد لا ينفصلان. كل مستبد فاسد وكل فاسد يسعى للاستبداد. محاربة أحدهما تستلزم محاربة الآخر.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف: ٥٦',lesson:'الاستبداد أم الفساد والفساد وليد الاستبداد'},
    en:{title:'Tyranny and Corruption Are Twins',desc:'Tyranny and corruption are inseparable. Every tyrant is corrupt and every corrupt person seeks tyranny. Fighting one requires fighting the other.',verse:'And do not cause corruption on earth after its reformation',verseRef:'Al-A\'raf: 56',lesson:'Tyranny is the mother of corruption and corruption is the child of tyranny'},
    fr:{title:'Tyrannie et Corruption Sont Jumeaux',desc:'La tyrannie et la corruption sont inseparables. Tout tyran est corrompu et tout corrompu cherche la tyrannie. Combattre l\'un exige de combattre l\'autre.',verse:'Et ne semez pas le desordre sur terre apres sa reforme',verseRef:'Al-A\'raf: 56',lesson:'La tyrannie est la mere de la corruption et la corruption est l\'enfant de la tyrannie'}
  },
  {
    id:33, emoji:'🏫',
    ar:{title:'التعليم سلاح التحرير',desc:'المستبد أول ما يفسده التعليم. لأنه يعلم أن العقل الحر لا يقبل العبودية. إصلاح التعليم بداية إصلاح الأمة.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق: ١',lesson:'العلم نور يبدد ظلمات الاستبداد'},
    en:{title:'Education: The Weapon of Liberation',desc:'The first thing a tyrant corrupts is education. Because they know a free mind does not accept slavery. Reforming education is the beginning of reforming the nation.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq: 1',lesson:'Knowledge is a light that dispels the darkness of tyranny'},
    fr:{title:'L\'Education : L\'Arme de la Liberation',desc:'La premiere chose qu\'un tyran corrompt est l\'education. Car il sait qu\'un esprit libre n\'accepte pas l\'esclavage. Reformer l\'education est le debut de la reforme de la nation.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq: 1',lesson:'Le savoir est une lumiere qui dissipe les tenebres de la tyrannie'}
  },
  {
    id:34, emoji:'🕊️',
    ar:{title:'المقاومة السلمية',desc:'الإسلام يشجع المقاومة السلمية للظلم. "أفضل الجهاد كلمة حق عند سلطان جائر." القوة الحقيقية في الحجة لا في العنف.',verse:'ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ',verseRef:'فصلت: ٣٤',lesson:'المقاومة السلمية أقوى من العنف على المدى البعيد'},
    en:{title:'Peaceful Resistance',desc:'Islam encourages peaceful resistance to injustice. "The best jihad is a word of truth before an unjust ruler." True power lies in argument, not in violence.',verse:'Repel evil with that which is better',verseRef:'Fussilat: 34',lesson:'Peaceful resistance is stronger than violence in the long term'},
    fr:{title:'La Resistance Pacifique',desc:'L\'Islam encourage la resistance pacifique a l\'injustice. Le meilleur jihad est un mot de verite devant un dirigeant injuste. Le vrai pouvoir reside dans l\'argument, pas dans la violence.',verse:'Repousse le mal par ce qui est meilleur',verseRef:'Fussilat: 34',lesson:'La resistance pacifique est plus forte que la violence a long terme'}
  },
  {
    id:35, emoji:'⚖️',
    ar:{title:'العدل مع الخصوم',desc:'العدل في الإسلام يشمل حتى الخصوم والأعداء. لا يجوز ظلم أحد مهما كان الخلاف معه. هذا من أعظم دروس الحكم الرشيد.',verse:'وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا اعْدِلُوا',verseRef:'المائدة: ٨',lesson:'العدل واجب حتى مع من نكره'},
    en:{title:'Justice Even with Opponents',desc:'Justice in Islam includes even opponents and enemies. It is not permissible to oppress anyone regardless of the extent of disagreement. This is among the greatest lessons of good governance.',verse:'And let not the hatred of a people prevent you from being just. Be just',verseRef:'Al-Maidah: 8',lesson:'Justice is obligatory even toward those we dislike'},
    fr:{title:'La Justice Meme Envers les Adversaires',desc:'La justice en Islam inclut meme les adversaires et les ennemis. Il n\'est pas permis d\'opprimer quiconque quel que soit le desaccord. C\'est parmi les plus grandes lecons de bonne gouvernance.',verse:'Et que la haine d\'un peuple ne vous incite pas a etre injustes. Soyez equitables',verseRef:'Al-Maidah: 8',lesson:'La justice est obligatoire meme envers ceux que nous n\'aimons pas'}
  },
  {
    id:36, emoji:'💰',
    ar:{title:'الفساد الاقتصادي',desc:'الفساد الاقتصادي يولّد الفقر والبطالة. حين تُنهب الثروات ولا تُوزع بعدل، يزداد الفقراء فقراً ويزداد الأغنياء غنى.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'الحشر: ٧',lesson:'التوزيع العادل للثروة واجب شرعي'},
    en:{title:'Economic Corruption',desc:'Economic corruption breeds poverty and unemployment. When wealth is looted and not distributed justly, the poor get poorer and the rich get richer.',verse:'So that it will not be a perpetual distribution among the rich from among you',verseRef:'Al-Hashr: 7',lesson:'Fair distribution of wealth is a religious obligation'},
    fr:{title:'La Corruption Economique',desc:'La corruption economique engendre la pauvrete et le chomage. Quand les richesses sont pillees et non distribuees equitablement, les pauvres s\'appauvrissent et les riches s\'enrichissent.',verse:'Afin que cela ne circule pas parmi les seuls riches d\'entre vous',verseRef:'Al-Hashr: 7',lesson:'La distribution equitable des richesses est une obligation religieuse'}
  },
  {
    id:37, emoji:'📝',
    ar:{title:'العهود والمواثيق',desc:'الإسلام يحث على الوفاء بالعهود والعقود. الحاكم الذي يعد شعبه ولا يفي مخادع. الوفاء أساس الثقة بين الحاكم والمحكوم.',verse:'وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا',verseRef:'الإسراء: ٣٤',lesson:'الوفاء بالعهد واجب شرعي وأخلاقي'},
    en:{title:'Covenants and Pledges',desc:'Islam urges fulfilling covenants and contracts. A ruler who promises their people and does not fulfill is a deceiver. Fulfillment is the foundation of trust between ruler and ruled.',verse:'And fulfill the covenant. Indeed, the covenant is ever questioned about',verseRef:'Al-Isra: 34',lesson:'Fulfilling covenants is a religious and moral obligation'},
    fr:{title:'Les Pactes et les Engagements',desc:'L\'Islam encourage le respect des pactes et des contrats. Un dirigeant qui promet a son peuple sans tenir est un trompeur. Le respect des engagements est le fondement de la confiance.',verse:'Et respectez l\'engagement. L\'engagement sera questionne',verseRef:'Al-Isra: 34',lesson:'Le respect des engagements est une obligation religieuse et morale'}
  },
  {
    id:38, emoji:'🌍',
    ar:{title:'حقوق الإنسان في الإسلام',desc:'أقر الإسلام حقوق الإنسان قبل الإعلانات الحديثة بقرون. حق الحياة والكرامة والملكية والتعليم والعدل كلها مكفولة.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء: ٧٠',lesson:'كرامة الإنسان أصل في الإسلام لا استثناء فيها'},
    en:{title:'Human Rights in Islam',desc:'Islam established human rights centuries before modern declarations. The right to life, dignity, property, education, and justice are all guaranteed.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra: 70',lesson:'Human dignity is a fundamental principle in Islam with no exceptions'},
    fr:{title:'Les Droits de l\'Homme en Islam',desc:'L\'Islam a etabli les droits de l\'homme des siecles avant les declarations modernes. Le droit a la vie, la dignite, la propriete, l\'education et la justice sont tous garantis.',verse:'Et Nous avons certes honore les enfants d\'Adam',verseRef:'Al-Isra: 70',lesson:'La dignite humaine est un principe fondamental en Islam sans exception'}
  },
  {
    id:39, emoji:'🔔',
    ar:{title:'صوت الشعب',desc:'صوت الشعب أمانة لا يجوز تجاهله. الحاكم خادم لشعبه لا سيده. من يستبد بالحكم يخالف أمر الله بالشورى.',verse:'فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ',verseRef:'آل عمران: ١٥٩',lesson:'الحاكم الناجح يسمع شعبه قبل أن يأمره'},
    en:{title:'The People\'s Voice',desc:'The people\'s voice is a trust that must not be ignored. The ruler is a servant of their people, not their master. Whoever rules tyrannically contradicts God\'s command for consultation.',verse:'So by mercy from God you were lenient with them',verseRef:'Aal Imran: 159',lesson:'A successful ruler listens to their people before commanding them'},
    fr:{title:'La Voix du Peuple',desc:'La voix du peuple est un depot qui ne doit pas etre ignore. Le dirigeant est un serviteur de son peuple, pas son maitre. Quiconque gouverne tyranniquement contredit l\'ordre de Dieu pour la consultation.',verse:'C\'est par la misericorde de Dieu que tu as ete doux envers eux',verseRef:'Aal Imran: 159',lesson:'Un dirigeant reussi ecoute son peuple avant de le commander'}
  },
  {
    id:40, emoji:'🏛️',
    ar:{title:'الفصل بين السلطات',desc:'الفصل بين السلطات ضمانة لمنع الاستبداد. إذا جمع شخص واحد التشريع والتنفيذ والقضاء فقد أصبح طاغوتاً.',verse:'أَلَمْ تَرَ إِلَى الَّذِي حَاجَّ إِبْرَاهِيمَ فِي رَبِّهِ أَنْ آتَاهُ اللَّهُ الْمُلْكَ',verseRef:'البقرة: ٢٥٨',lesson:'تركيز السلطة في يد واحدة طريق مباشر للطغيان'},
    en:{title:'Separation of Powers',desc:'Separation of powers is a guarantee to prevent tyranny. If one person combines legislation, execution, and judiciary, they have become a tyrant.',verse:'Have you not considered the one who argued with Abraham about his Lord because God had given him kingship',verseRef:'Al-Baqarah: 258',lesson:'Concentration of power in one hand is a direct path to tyranny'},
    fr:{title:'La Separation des Pouvoirs',desc:'La separation des pouvoirs est une garantie pour empecher la tyrannie. Si une seule personne combine legislation, execution et justice, elle est devenue un tyran.',verse:'N\'as-tu pas vu celui qui a dispute avec Abraham au sujet de son Seigneur parce que Dieu lui avait donne la royaute',verseRef:'Al-Baqarah: 258',lesson:'La concentration du pouvoir en une seule main est un chemin direct vers la tyrannie'}
  },
  {
    id:41, emoji:'🧠',
    ar:{title:'الوعي السياسي واجب',desc:'الجهل بالحقوق السياسية يسهّل الاستبداد. المواطن الواعي هو خط الدفاع الأول ضد الظلم. التعلم عن حقوقك فريضة.',verse:'وَقُلْ رَبِّ زِدْنِي عِلْمًا',verseRef:'طه: ١١٤',lesson:'الوعي سلاح والجهل عبودية'},
    en:{title:'Political Awareness Is a Duty',desc:'Ignorance of political rights facilitates tyranny. An aware citizen is the first line of defense against injustice. Learning about your rights is an obligation.',verse:'And say: My Lord, increase me in knowledge',verseRef:'Taha: 114',lesson:'Awareness is a weapon and ignorance is slavery'},
    fr:{title:'La Conscience Politique Est un Devoir',desc:'L\'ignorance des droits politiques facilite la tyrannie. Un citoyen conscient est la premiere ligne de defense contre l\'injustice. Apprendre ses droits est une obligation.',verse:'Et dis : Mon Seigneur, augmente-moi en savoir',verseRef:'Taha: 114',lesson:'La conscience est une arme et l\'ignorance est un esclavage'}
  },
  {
    id:42, emoji:'🌱',
    ar:{title:'الأمل في التغيير',desc:'اليأس من الإصلاح خطيئة. التغيير سنة كونية والأمم تتبدل أحوالها. من يعمل للإصلاح بإخلاص سيرى الثمار ولو بعد حين.',verse:'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ',verseRef:'يوسف: ٨٧',lesson:'اليأس حرام والعمل للتغيير فريضة'},
    en:{title:'Hope for Change',desc:'Despair of reform is a sin. Change is a cosmic law and nations\' conditions shift. Whoever works sincerely for reform will see results, even if after some time.',verse:'And do not despair of the relief of God',verseRef:'Yusuf: 87',lesson:'Despair is forbidden and working for change is obligatory'},
    fr:{title:'L\'Espoir du Changement',desc:'Desesperer de la reforme est un peche. Le changement est une loi cosmique et les conditions des nations changent. Quiconque travaille sincerement pour la reforme verra des resultats.',verse:'Et ne desesperez pas du soulagement de Dieu',verseRef:'Yusuf: 87',lesson:'Le desespoir est interdit et travailler pour le changement est obligatoire'}
  },
  {
    id:43, emoji:'📚',
    ar:{title:'المثقف والمسؤولية',desc:'المثقف مسؤول أمام الله والناس عن نشر الحق. من يملك العلم ويسكت عن الظلم شريك فيه.',verse:'إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنزَلْنَا مِنَ الْبَيِّنَاتِ وَالْهُدَىٰ',verseRef:'البقرة: ١٥٩',lesson:'العلم أمانة والسكوت عن الحق خيانة'},
    en:{title:'The Intellectual and Responsibility',desc:'The intellectual is responsible before God and people for spreading truth. Whoever has knowledge and stays silent about injustice is a partner in it.',verse:'Indeed, those who conceal what We sent down of clear proofs and guidance',verseRef:'Al-Baqarah: 159',lesson:'Knowledge is a trust and silence about truth is betrayal'},
    fr:{title:'L\'Intellectuel et la Responsabilite',desc:'L\'intellectuel est responsable devant Dieu et les gens de la diffusion de la verite. Quiconque possede le savoir et se tait sur l\'injustice en est complice.',verse:'Ceux qui cachent ce que Nous avons fait descendre de preuves claires et de guidance',verseRef:'Al-Baqarah: 159',lesson:'Le savoir est un depot et le silence sur la verite est une trahison'}
  }
];

// ═══════════════ PILLARS DATA (6 pillars) ═══════════════
const PILLARS = [
  {emoji:'⚖️',ar:{title:'العدل',desc:'أساس الحكم كله. بدونه لا شرعية لأي سلطة. العدل يشمل المسلم وغيره، الغني والفقير.'},en:{title:'Justice',desc:'The foundation of all governance. Without it, no authority is legitimate. Justice encompasses Muslim and non-Muslim, rich and poor.'},fr:{title:'La Justice',desc:'Le fondement de toute gouvernance. Sans elle, aucune autorite n\'est legitime.'}},
  {emoji:'🗣️',ar:{title:'الشورى',desc:'لا يجوز للحاكم أن يستبد بالرأي. القرارات الكبرى تُتخذ بالشورى مع أهل الخبرة والحكمة.'},en:{title:'Consultation (Shura)',desc:'A ruler may not monopolize opinion. Major decisions are made through consultation with people of expertise and wisdom.'},fr:{title:'La Consultation (Choura)',desc:'Un dirigeant ne peut monopoliser l\'opinion. Les grandes decisions se prennent par consultation.'}},
  {emoji:'🔗',ar:{title:'المحاسبة',desc:'كل مسؤول محاسب أمام الله والناس. لا حصانة مطلقة ولا قداسة لأي منصب بشري.'},en:{title:'Accountability',desc:'Every official is accountable before God and the people. No absolute immunity and no sacredness for any human position.'},fr:{title:'La Responsabilite',desc:'Chaque responsable est redevable devant Dieu et le peuple. Aucune immunite absolue.'}},
  {emoji:'🕊️',ar:{title:'الحرية',desc:'الحرية حق إلهي. حرية الرأي والعقيدة والتعبير مكفولة ما لم تُستخدم للإفساد.'},en:{title:'Freedom',desc:'Freedom is a divine right. Freedom of opinion, belief, and expression are guaranteed unless used for corruption.'},fr:{title:'La Liberte',desc:'La liberte est un droit divin. Liberte d\'opinion, de croyance et d\'expression sont garanties.'}},
  {emoji:'🤝',ar:{title:'المساواة',desc:'لا فرق بين حاكم ومحكوم أمام القانون. الناس سواسية كأسنان المشط.'},en:{title:'Equality',desc:'No difference between ruler and ruled before the law. People are equal like the teeth of a comb.'},fr:{title:'L\'Egalite',desc:'Aucune difference entre dirigeant et gouverne devant la loi. Les gens sont egaux.'}},
  {emoji:'📜',ar:{title:'سيادة القانون',desc:'القانون فوق الجميع. لا أحد فوق الشريعة، لا الحاكم ولا عائلته ولا حاشيته.'},en:{title:'Rule of Law',desc:'The law is above everyone. No one is above the law — not the ruler, their family, or their inner circle.'},fr:{title:'L\'Etat de Droit',desc:'La loi est au-dessus de tous. Personne n\'est au-dessus de la loi.'}},
  {emoji:'🛡️',ar:{title:'حماية الحريات',desc:'حماية حرية الرأي والتعبير والتجمع واجب على الدولة. القمع يولّد التطرف والعنف.'},en:{title:'Protecting Freedoms',desc:'Protecting freedom of opinion, expression, and assembly is the state\'s duty. Repression breeds extremism and violence.'},fr:{title:'La Protection des Libertes',desc:'Proteger la liberte d\'opinion, d\'expression et de rassemblement est le devoir de l\'Etat. La repression engendre l\'extremisme.'}},
  {emoji:'📊',ar:{title:'الشفافية المالية',desc:'المال العام أمانة. الحاكم الذي يسرق مال الشعب خائن للأمانة. الشفافية المالية حق للمواطنين.'},en:{title:'Financial Transparency',desc:'Public funds are a trust. A ruler who steals public money is a betrayer of trust. Financial transparency is a right of citizens.'},fr:{title:'La Transparence Financiere',desc:'Les fonds publics sont un depot. Un dirigeant qui vole l\'argent public trahit la confiance. La transparence financiere est un droit des citoyens.'}},
  {emoji:'📰',ar:{title:'حرية الصحافة',desc:'الصحافة الحرة عين الشعب على الحاكم. تكميم الصحافة أول خطوات الاستبداد.'},en:{title:'Press Freedom',desc:'A free press is the people\'s eye on the ruler. Muzzling the press is the first step toward tyranny.'},fr:{title:'La Liberte de la Presse',desc:'Une presse libre est l\'oeil du peuple sur le dirigeant. Museler la presse est le premier pas vers la tyrannie.'}},
  {emoji:'🏫',ar:{title:'التعليم الحر',desc:'التعليم الذي يصنع عقولاً حرة ناقدة هو أعظم سلاح ضد الاستبداد. المناهج المؤدلجة تصنع عبيداً لا مواطنين.'},en:{title:'Free Education',desc:'Education that produces free, critical minds is the greatest weapon against tyranny. Ideologized curricula create slaves, not citizens.'},fr:{title:'L\'Education Libre',desc:'L\'education qui produit des esprits libres et critiques est la plus grande arme contre la tyrannie. Les programmes ideologiques creent des esclaves, pas des citoyens.'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قراءة آية عن العدل والتأمل فيها',source:'العدل فريضة'},en:{label:'Read a verse about justice and reflect on it',source:'Justice is an obligation'},fr:{label:'Lire un verset sur la justice et y reflechir',source:'La justice est une obligation'}},
  {emoji:'🗣️',ar:{label:'قول الحق ولو على النفس',source:'الشورى والنصيحة'},en:{label:'Speak the truth even against yourself',source:'Consultation and advice'},fr:{label:'Dire la verite meme contre soi-meme',source:'Consultation et conseil'}},
  {emoji:'🤲',ar:{label:'الدعاء للمظلومين',source:'حماية الضعفاء'},en:{label:'Pray for the oppressed',source:'Protecting the weak'},fr:{label:'Prier pour les opprimes',source:'Proteger les faibles'}},
  {emoji:'⚖️',ar:{label:'العدل مع الأهل والأصدقاء',source:'المساواة بين الناس'},en:{label:'Be just with family and friends',source:'Equality among people'},fr:{label:'Etre juste avec la famille et les amis',source:'Egalite entre les gens'}},
  {emoji:'📚',ar:{label:'تعلّم حق من حقوقك اليوم',source:'حقوق المواطن'},en:{label:'Learn about one of your rights today',source:'Citizens\' rights'},fr:{label:'Apprendre un de vos droits aujourd\'hui',source:'Droits du citoyen'}},
  {emoji:'🤝',ar:{label:'مساعدة شخص محتاج',source:'العدالة الاجتماعية'},en:{label:'Help someone in need',source:'Social justice'},fr:{label:'Aider une personne dans le besoin',source:'Justice sociale'}},
  {emoji:'🌙',ar:{label:'محاسبة النفس قبل النوم',source:'المحاسبة'},en:{label:'Self-review before sleep',source:'Accountability'},fr:{label:'Auto-examen avant le sommeil',source:'Responsabilite'}},
  {emoji:'📰',ar:{label:'قراءة خبر عن حقوق الإنسان',source:'الوعي بالحقوق'},en:{label:'Read a human rights news article',source:'Rights awareness'},fr:{label:'Lire un article sur les droits de l\'homme',source:'Sensibilisation aux droits'}},
  {emoji:'🤲',ar:{label:'الدعاء لعلماء الأمة الشجعان',source:'دعم العلماء'},en:{label:'Pray for the courageous scholars of the Ummah',source:'Supporting scholars'},fr:{label:'Prier pour les savants courageux de la Oumma',source:'Soutenir les savants'}},
  {emoji:'💡',ar:{label:'اقتراح فكرة إصلاحية في محيطك',source:'المبادرة الفردية'},en:{label:'Suggest a reform idea in your circle',source:'Individual initiative'},fr:{label:'Proposer une idee de reforme dans votre entourage',source:'Initiative individuelle'}},
  {emoji:'📖',ar:{label:'قراءة صفحة من كتاب عن الحكم الرشيد',source:'التثقيف السياسي'},en:{label:'Read a page about good governance',source:'Political education'},fr:{label:'Lire une page sur la bonne gouvernance',source:'Education politique'}},
  {emoji:'🗣️',ar:{label:'ناقش حقاً من حقوقك مع شخص',source:'نشر الوعي'},en:{label:'Discuss one of your rights with someone',source:'Spreading awareness'},fr:{label:'Discutez d\'un de vos droits avec quelqu\'un',source:'Sensibilisation'}},
  {emoji:'🏛️',ar:{label:'قراءة عن استقلال القضاء في الإسلام',source:'مؤسسات الحكم'},en:{label:'Read about judicial independence in Islam',source:'Governance institutions'},fr:{label:'Lire sur l\'independance judiciaire en Islam',source:'Institutions de gouvernance'}},
  {emoji:'⚖️',ar:{label:'كن عادلاً في كل قرار تتخذه اليوم',source:'العدل فريضة'},en:{label:'Be just in every decision you make today',source:'Justice is an obligation'},fr:{label:'Soyez juste dans chaque decision que vous prenez aujourd\'hui',source:'La justice est une obligation'}},
  {emoji:'🌱',ar:{label:'ادعُ لإصلاح أحوال الأمة',source:'الدعاء للأمة'},en:{label:'Pray for the reform of the Ummah',source:'Praying for the nation'},fr:{label:'Priez pour la reforme de la Oumma',source:'Prier pour la nation'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تعرف أن الشورى في الإسلام ملزمة وليست اختيارية؟',en:'Do you know that Shura in Islam is binding, not optional?',fr:'Savez-vous que la Choura en Islam est obligatoire, pas facultative ?'},
  {ar:'هل تسكت عن الظلم خوفاً من العواقب؟',en:'Do you stay silent about injustice out of fear of consequences?',fr:'Gardez-vous le silence sur l\'injustice par peur des consequences ?'},
  {ar:'هل تؤمن بأن كل إنسان له حقوق لا تُنتقص؟',en:'Do you believe every human has inviolable rights?',fr:'Croyez-vous que chaque etre humain a des droits inviolables ?'},
  {ar:'هل تقبل الظلم ما دام لا يمسّك شخصياً؟',en:'Do you accept injustice as long as it doesn\'t affect you personally?',fr:'Acceptez-vous l\'injustice tant qu\'elle ne vous touche pas personnellement ?'},
  {ar:'هل تعدل بين أبنائك وأصدقائك؟',en:'Are you just with your children and friends?',fr:'Etes-vous juste avec vos enfants et amis ?'},
  {ar:'هل تحترم حق الآخرين في الاختلاف معك؟',en:'Do you respect others\' right to disagree with you?',fr:'Respectez-vous le droit des autres de ne pas etre d\'accord avec vous ?'},
  {ar:'هل تعرف الفرق بين الطاعة المشروعة والطاعة العمياء؟',en:'Do you know the difference between legitimate and blind obedience?',fr:'Connaissez-vous la difference entre l\'obeissance legitime et l\'obeissance aveugle ?'},
  {ar:'هل تنصح من تحب بصدق حتى لو لم يعجبه ذلك؟',en:'Do you advise those you love honestly even if they don\'t like it?',fr:'Conseillez-vous ceux que vous aimez honnetement meme s\'ils n\'aiment pas ca ?'},
  {ar:'هل تشعر بمسؤولية تجاه مجتمعك ووطنك؟',en:'Do you feel responsible toward your community and country?',fr:'Vous sentez-vous responsable envers votre communaute et votre pays ?'},
  {ar:'هل تدافع عن حقوق غير المسلمين كما تدافع عن حقوق المسلمين؟',en:'Do you defend non-Muslims\' rights as you defend Muslims\' rights?',fr:'Defendez-vous les droits des non-musulmans comme ceux des musulmans ?'},
  {ar:'هل تؤمن بأن حرية الإعلام ضرورة لمحاربة الاستبداد؟',en:'Do you believe media freedom is necessary to fight tyranny?',fr:'Croyez-vous que la liberte des medias est necessaire pour combattre la tyrannie ?'},
  {ar:'هل تعرف مقاصد الشريعة الخمسة وعلاقتها بالحكم الرشيد؟',en:'Do you know the five objectives of Shariah and their relation to good governance?',fr:'Connaissez-vous les cinq objectifs de la Charia et leur lien avec la bonne gouvernance ?'},
  {ar:'هل تشارك في مؤسسات المجتمع المدني أو تدعمها؟',en:'Do you participate in or support civil society institutions?',fr:'Participez-vous aux institutions de la societe civile ou les soutenez-vous ?'},
  {ar:'هل تؤمن بأن الفصل بين السلطات ضرورة لمنع الاستبداد؟',en:'Do you believe separation of powers is necessary to prevent tyranny?',fr:'Croyez-vous que la separation des pouvoirs est necessaire pour empecher la tyrannie ?'},
  {ar:'هل تعلّم أبناءك حقوقهم وواجباتهم كمواطنين؟',en:'Do you teach your children their rights and duties as citizens?',fr:'Enseignez-vous a vos enfants leurs droits et devoirs de citoyens ?'},
  {ar:'هل تؤمن بأن الإسلام يدعم حرية التعبير والرأي؟',en:'Do you believe Islam supports freedom of expression and opinion?',fr:'Croyez-vous que l\'Islam soutient la liberte d\'expression et d\'opinion ?'},
  {ar:'هل تقرأ في تاريخ الخلفاء الراشدين كنموذج للحكم العادل؟',en:'Do you read about the Rightly-Guided Caliphs as a model of just governance?',fr:'Lisez-vous l\'histoire des califes bien-guides comme modele de gouvernance juste ?'},
  {ar:'هل تؤمن بأن الفساد الاقتصادي يقتل التنمية؟',en:'Do you believe economic corruption kills development?',fr:'Croyez-vous que la corruption economique tue le developpement ?'},
  {ar:'هل تدعم جهود مكافحة الفساد في مجتمعك؟',en:'Do you support anti-corruption efforts in your community?',fr:'Soutenez-vous les efforts de lutte contre la corruption dans votre communaute ?'},
  {ar:'هل تعتقد أن اليأس من الإصلاح خطيئة؟',en:'Do you believe that despair of reform is a sin?',fr:'Croyez-vous que le desespoir de la reforme est un peche ?'},
  {ar:'هل تؤمن بمسؤولية المثقف عن نشر الحق والعدل؟',en:'Do you believe in the intellectual\'s responsibility to spread truth and justice?',fr:'Croyez-vous en la responsabilite de l\'intellectuel de repandre la verite et la justice ?'},
  {ar:'هل تعدل بين أبنائك لتربيتهم على قيم العدل؟',en:'Do you treat your children equally to raise them on values of justice?',fr:'Traitez-vous vos enfants equitablement pour les elever sur les valeurs de justice ?'},
  {ar:'هل تحترم حرية الرأي حتى مع من يخالفك؟',en:'Do you respect freedom of opinion even with those who disagree with you?',fr:'Respectez-vous la liberte d\'opinion meme avec ceux qui ne sont pas d\'accord avec vous ?'},
  {ar:'هل تسعى لنقل مبادئ الحكم الرشيد لمحيطك ومجتمعك؟',en:'Do you strive to convey principles of good governance to your circle and community?',fr:'Vous efforcez-vous de transmettre les principes de bonne gouvernance a votre entourage et communaute ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء العدل',text:'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَادِلِينَ',tr:'اللهم اجعلني من العادلين'},en:{label:'Dua for Justice',text:'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَادِلِينَ',tr:'O God, make me among the just'},fr:{label:'Dua pour la Justice',text:'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَادِلِينَ',tr:'O Dieu, fais de moi un juste'}},
  {ar:{label:'دعاء الحق',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'رب أرني الحق حقاً وارزقني اتباعه'},en:{label:'Dua for Truth',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'Lord, show me truth as truth and grant me to follow it'},fr:{label:'Dua pour la Verite',text:'رَبِّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'Seigneur, montre-moi la verite et accorde-moi de la suivre'}},
  {ar:{label:'دعاء المظلومين',text:'اللَّهُمَّ انْصُرِ الْمَظْلُومِينَ فِي كُلِّ مَكَانٍ',tr:'اللهم انصر المظلومين في كل مكان'},en:{label:'Dua for the Oppressed',text:'اللَّهُمَّ انْصُرِ الْمَظْلُومِينَ فِي كُلِّ مَكَانٍ',tr:'O God, aid the oppressed everywhere'},fr:{label:'Dua pour les Opprimes',text:'اللَّهُمَّ انْصُرِ الْمَظْلُومِينَ فِي كُلِّ مَكَانٍ',tr:'O Dieu, aide les opprimes partout'}},
  {ar:{label:'دعاء الحكمة',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'رب هب لي حكماً وألحقني بالصالحين'},en:{label:'Dua for Wisdom',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'My Lord, grant me wisdom and join me with the righteous'},fr:{label:'Dua pour la Sagesse',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'Seigneur, accorde-moi la sagesse et joins-moi aux vertueux'}},
  {ar:{label:'دعاء الثبات',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Steadfastness',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Constance',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, accorde-nous patience et affermis nos pas'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and keep me on the right path'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et maintiens-moi sur le droit chemin'}},
  {ar:{label:'دعاء نصرة الحق',text:'اللَّهُمَّ انْصُرِ الْحَقَّ وَأَهْلَهُ وَاخْذُلِ الْبَاطِلَ وَأَهْلَهُ',tr:'اللهم انصر الحق وأهله واخذل الباطل وأهله'},en:{label:'Dua for Supporting Truth',text:'اللَّهُمَّ انْصُرِ الْحَقَّ وَأَهْلَهُ وَاخْذُلِ الْبَاطِلَ وَأَهْلَهُ',tr:'O God, support truth and its people, and defeat falsehood and its people'},fr:{label:'Dua pour le Soutien de la Verite',text:'اللَّهُمَّ انْصُرِ الْحَقَّ وَأَهْلَهُ وَاخْذُلِ الْبَاطِلَ وَأَهْلَهُ',tr:'O Dieu, soutiens la verite et ses gens, et defais le mensonge et ses gens'}},
  {ar:{label:'دعاء الحرية',text:'اللَّهُمَّ حَرِّرْ عِبَادَكَ مِنْ كُلِّ ظُلْمٍ وَاسْتِبْدَادٍ',tr:'اللهم حرر عبادك من كل ظلم واستبداد'},en:{label:'Dua for Freedom',text:'اللَّهُمَّ حَرِّرْ عِبَادَكَ مِنْ كُلِّ ظُلْمٍ وَاسْتِبْدَادٍ',tr:'O God, free Your servants from all oppression and tyranny'},fr:{label:'Dua pour la Liberte',text:'اللَّهُمَّ حَرِّرْ عِبَادَكَ مِنْ كُلِّ ظُلْمٍ وَاسْتِبْدَادٍ',tr:'O Dieu, libere Tes serviteurs de toute oppression et tyrannie'}},
  {ar:{label:'دعاء الوحدة',text:'اللَّهُمَّ وَحِّدْ صُفُوفَنَا وَأَلِّفْ بَيْنَ قُلُوبِنَا وَاجْعَلْنَا مِنْ أَنْصَارِ الْحَقِّ',tr:'اللهم وحد صفوفنا وألف بين قلوبنا'},en:{label:'Dua for Unity',text:'اللَّهُمَّ وَحِّدْ صُفُوفَنَا وَأَلِّفْ بَيْنَ قُلُوبِنَا وَاجْعَلْنَا مِنْ أَنْصَارِ الْحَقِّ',tr:'O God, unite our ranks, reconcile our hearts, and make us supporters of truth'},fr:{label:'Dua pour l\'Unite',text:'اللَّهُمَّ وَحِّدْ صُفُوفَنَا وَأَلِّفْ بَيْنَ قُلُوبِنَا وَاجْعَلْنَا مِنْ أَنْصَارِ الْحَقِّ',tr:'O Dieu, unis nos rangs, reconcilie nos coeurs et fais de nous des partisans de la verite'}},
  {ar:{label:'دعاء النصر',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ',tr:'ربنا افتح بيننا وبين قومنا بالحق'},en:{label:'Dua for Victory',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ',tr:'Our Lord, decide between us and our people in truth, and You are the best of those who decide'},fr:{label:'Dua pour la Victoire',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ',tr:'Notre Seigneur, juge entre nous et notre peuple en verite, Tu es le meilleur des juges'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('istibdad-lang') || 'ar';
let theme = localStorage.getItem('istibdad-theme') || 'charcoal';
const themes = ['charcoal','night','steel'];
const themeIcons = ['⚖️','🌙','🏛️'];
const themeNames = {charcoal:'فحمي',night:'ليل هادئ',steel:'فولاذي'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderPillars();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('istibdad-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabPillars', t.tabPillars);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('pillarsTitle', t.pillarsTitle); set('pillarsDesc', t.pillarsDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderPillars(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('istibdad-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'⚖️',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة للحكم الرشيد':lang==='fr'?'20 cartes':'20 cards'},
    {icon:'🏛️',tab:'pillars',title:t.tabPillars,desc:lang==='ar'?'أركان الحكم العادل':lang==='fr'?'Piliers de gouvernance':'Governance pillars'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.lesson}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('cardsContainer')||{}).innerHTML= searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.lesson}\n\n— الإسلام والاستبداد السياسي | Islam & Political Tyranny`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: PILLARS ═══════════════
function renderPillars() {
  (document.getElementById('pillarsContainer')||{}).innerHTML= PILLARS.map(p => {
    const d = p[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${p.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${T[lang].principle}</span>
        ${d.desc}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('istibdad-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('istibdad-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('istibdad-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('istibdad-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('istibdad-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length, pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('istibdad-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) streakData.count++;
    else if (prevState.date !== new Date().toDateString()) streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('istibdad-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('istibdad-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#37474F','#546E7A','#78909C','#B0BEC5','#CFD8DC','#455A64'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  (document.getElementById('quizContainer')||{}).innerHTML= QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const invertedQs = [1, 3]; // silence/accept injustice = bad
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji = '⚖️'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'لديك وعي عميق بمبادئ العدل والحكم الراشد.':lang==='fr'?'Vous avez une conscience profonde des principes de justice.':'You have deep awareness of justice and governance principles.';
  } else if (pct >= 50) {
    emoji = '📖'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'أنت على الطريق الصحيح. واصل التعلم عن حقوقك وواجباتك.':lang==='fr'?'Vous etes sur la bonne voie. Continuez a apprendre.':'You\'re on the right track. Keep learning about your rights.';
  } else {
    emoji = '🔄'; title = lang==='ar'?'حان وقت التعلم':lang==='fr'?'Il est temps d\'apprendre':'Time to Learn';
    desc = lang==='ar'?'راجع بطاقات الحكم الرشيد وتعرف على حقوقك كما بيّنها الإسلام.':lang==='fr'?'Relisez les cartes de bonne gouvernance.':'Review the governance cards and learn your rights as Islam describes them.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"الإسلام والاستبداد السياسي" يكشف فيه الشيخ الغزالي أن الإسلام يرفض الاستبداد بكل أشكاله. يبيّن أن الشورى ملزمة، والعدل فريضة، ومحاسبة الحاكم واجب. الكتاب رد على من يستخدم الدين لتبرير الظلم والطغيان.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الإسلام والاستبداد السياسي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سيرة الخلفاء الراشدين'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Islam and Political Tyranny" reveals that Islam rejects tyranny in all its forms. Sheikh al-Ghazali shows that Shura is binding, justice is obligatory, and holding rulers accountable is a duty. The book responds to those who use religion to justify oppression.',
      sourcesTitle: 'Sources',
      sources: ['"Islam and Political Tyranny" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Biography of the Rightly Guided Caliphs'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"L\'Islam et la Tyrannie Politique" revele que l\'Islam rejette la tyrannie sous toutes ses formes. Sheikh al-Ghazali montre que la Choura est obligatoire, la justice est un devoir, et demander des comptes aux dirigeants est une obligation.',
      sourcesTitle: 'Sources',
      sources: ['"L\'Islam et la Tyrannie Politique" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Biographie des Califes Bien Guides'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الإسلام والاستبداد السياسي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، ٦ أركان، تتبع العادات، اختبار.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Islam and Political Tyranny" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, 6 pillars, habit tracker, quiz.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate between cards. Press Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"L\'Islam et la Tyrannie Politique" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, 6 piliers, suivi habitudes, quiz.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches pour naviguer entre les cartes. Echap pour fermer les panneaux.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(() => {
      document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
    }, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
(function() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home', 'cards', 'pillars', 'habits', 'quiz', 'about'];
  document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    const isRTL = document.documentElement.dir === 'rtl';
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;
    const currentIdx = tabOrder.indexOf(activeTab.dataset.tab);
    if (currentIdx < 0) return;
    let nextIdx = isRTL ? (dx > 0 ? currentIdx + 1 : currentIdx - 1) : (dx < 0 ? currentIdx + 1 : currentIdx - 1);
    if (nextIdx >= 0 && nextIdx < tabOrder.length) {
      const nextTab = document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`);
      if (nextTab) nextTab.click();
    }
  }, { passive: true });
})();

// ═══════════════ TICKER ═══════════════
function startTicker(){
  var el=document.getElementById('tickerText');
  if(!el)return;
  var tips={
    ar:['⚖️ ٢٠ بطاقة عن العدل والشورى','🏛️ أركان الحكم الراشد في الإسلام','📋 تتبع عاداتك اليومية','🕊️ الحرية حق إلهي لكل إنسان','🤲 اللّهُمّ انصُر المظلومين','💡 Powered by workshop-diy.org'],
    en:['⚖️ 20 cards on justice and consultation','🏛️ Pillars of righteous governance','📋 Track your daily habits','🕊️ Freedom is a divine right','🤲 O God, aid the oppressed','💡 Powered by workshop-diy.org'],
    fr:['⚖️ 20 cartes sur la justice et la consultation','🏛️ Piliers de la bonne gouvernance','📋 Suivez vos habitudes','🕊️ La liberte est un droit divin','🤲 O Dieu, aide les opprimes','💡 Powered by workshop-diy.org']
  };
  var l=document.documentElement.lang||'ar';
  var msgs=tips[l]||tips.ar;
  var txt=msgs.join('  ✦  ');
  el.innerHTML='<span class="tc">'+txt+'  ✦  </span><span class="tc" aria-hidden="true">'+txt+'  ✦  </span>';
  el.style.animation='tickerMarquee '+Math.max(25,txt.length*0.12)+'s linear infinite';
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',startTicker)}else{startTicker()}
