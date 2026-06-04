const QUIZ_QUESTIONS = [
  {
    category: "素材知識",
    type: "multi",
    q: "リネンの特徴として正しいものをすべて選んでください。",
    choices: [
      { text: "吸湿性がある", correct: true },
      { text: "発散性がある", correct: true },
      { text: "天然素材である", correct: true },
      { text: "完全防水である", correct: false }
    ],
    exp: "リネンは吸湿・発散性があり、さらっとした肌触りを伝えやすい天然素材です。",
    image: "",
    expImage: ""
  },
  {
    category: "素材知識",
    type: "single",
    q: "ギザコットンの説明として近いものは？",
    choices: [
      { text: "上質なエジプト綿", correct: true },
      { text: "羊毛の一種", correct: false },
      { text: "麻の一種", correct: false },
      { text: "合成皮革", correct: false }
    ],
    exp: "ギザコットンは高級綿として、なめらかさ・上質感を伝えやすい素材です。",
    image: "",
    expImage: ""
  },
  {
    category: "素材知識",
    type: "single",
    q: "シルク素材の魅力として正しいものは？",
    choices: [
      { text: "なめらかな肌触りと上品な光沢", correct: true },
      { text: "完全防水", correct: false },
      { text: "紙素材", correct: false },
      { text: "ゴム素材", correct: false }
    ],
    exp: "シルクは肌あたりのやさしさ、光沢感、上質感を伝えやすい素材です。",
    image: "",
    expImage: ""
  },
  {
    category: "素材知識",
    type: "multi",
    q: "ウールを夏にも提案できる理由として正しいものを選んでください。",
    choices: [
      { text: "吸放湿性がある", correct: true },
      { text: "においにくさを伝えやすい", correct: true },
      { text: "冬だけの素材である", correct: false },
      { text: "水を完全にはじく", correct: false }
    ],
    exp: "上質なウールは冬だけでなく、吸放湿性や防臭性を切り口に夏にも提案できます。",
    image: "",
    expImage: ""
  },
  {
    category: "お手入れ",
    type: "multi",
    q: "天然素材商品の説明として適切なものをすべて選んでください。",
    choices: [
      { text: "素材の良さを伝える", correct: true },
      { text: "取り扱い注意も伝える", correct: true },
      { text: "絶対に縮まないと言い切る", correct: false },
      { text: "乾燥機は必ず推奨と言う", correct: false }
    ],
    exp: "天然素材は魅力と注意点をセットで伝えると、信頼感のある接客になります。",
    image: "",
    expImage: ""
  },
  {
    category: "お手入れ",
    type: "single",
    q: "洗濯後に靴下が少し縮んだ時の案内として自然なのは？",
    choices: [
      { text: "干す前に軽く形を整えるとよい", correct: true },
      { text: "強くねじるとよい", correct: false },
      { text: "高温乾燥機にかける", correct: false },
      { text: "水に浸けっぱなしにする", correct: false }
    ],
    exp: "洗濯後に形を整える案内は、天然素材や編み物系の商品で使いやすい説明です。",
    image: "",
    expImage: ""
  },
  {
    category: "接客知識",
    type: "single",
    q: "接客の最初の一言として自然なのは？",
    choices: [
      { text: "こちら日本製の天然素材で、肌あたりが良いシリーズです", correct: true },
      { text: "買わないなら触らないでください", correct: false },
      { text: "それ高いですよ", correct: false },
      { text: "全部同じです", correct: false }
    ],
    exp: "最初に短く価値を伝えると、価格の理由やお店の世界観が伝わりやすくなります。",
    image: "",
    expImage: ""
  },
  {
    category: "接客知識",
    type: "single",
    q: "帽子を強く握って触っているお客様への声かけとして自然なのは？",
    choices: [
      { text: "繊細な素材なので、よろしければ私がお出ししますね", correct: true },
      { text: "触らないでください", correct: false },
      { text: "壊したら買ってください", correct: false },
      { text: "それ高いですよ", correct: false }
    ],
    exp: "注意ではなく、理由＋手伝う姿勢で伝えると角が立ちにくいです。",
    image: "",
    expImage: ""
  },
  {
    category: "接客知識",
    type: "multi",
    q: "高価格帯の商品を説明するときに大切なことを選んでください。",
    choices: [
      { text: "素材の良さを伝える", correct: true },
      { text: "作りの丁寧さを伝える", correct: true },
      { text: "値段だけを強調する", correct: false },
      { text: "説明せずに置いておく", correct: false }
    ],
    exp: "高価格帯の商品は、素材・作り・背景を簡潔に伝えると納得感が出ます。",
    image: "",
    expImage: ""
  },
  {
    category: "海外対応",
    type: "single",
    q: "海外のお客様に伝えやすいキーワードは？",
    choices: [
      { text: "Made in Japan / Natural material / Quality", correct: true },
      { text: "Cheap only", correct: false },
      { text: "No touch only", correct: false },
      { text: "Same as all", correct: false }
    ],
    exp: "海外のお客様には、日本製・天然素材・品質を短く伝えると価値が伝わりやすいです。",
    image: "",
    expImage: ""
  },
  {
    category: "海外対応",
    type: "single",
    q: "海外のお客様が商品を見て迷っている時の接客として自然なのは？",
    choices: [
      { text: "This is made in Japan. Very soft and comfortable.", correct: true },
      { text: "No touch.", correct: false },
      { text: "Buy now.", correct: false },
      { text: "Expensive.", correct: false }
    ],
    exp: "短い英語で素材や着心地を伝えるだけでも、十分に接客のきっかけになります。",
    image: "",
    expImage: ""
  },
  {
    category: "画像問題",
    type: "single",
    q: "画像つき問題のサンプルです。画像を入れる場合、どこにファイル名を書く？",
    choices: [
      { text: "image または expImage に書く", correct: true },
      { text: "title に書く", correct: false },
      { text: "score に書く", correct: false },
      { text: "category に書く", correct: false }
    ],
    exp: "問題画像は image、解説画像は expImage に images/linen.jpg のように入れます。",
    image: "",
    expImage: ""
  }
];