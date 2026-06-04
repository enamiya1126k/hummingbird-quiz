const QUIZ_QUESTIONS = [

{
category:"素材知識",
type:"single",
question:"この花から作られる天然素材は？",
image:"images/IMG_2392.jpeg",
choices:["リネン","シルク","ウール","カシミヤ"],
correct:[0],
explanation:"これは亜麻（フラックス）の花です。リネンは亜麻の茎から作られる天然素材です。",
explanationImage:"images/IMG_2392.jpeg"
},

{
category:"素材知識",
type:"single",
question:"リネンの特徴として正しいものは？",
choices:["吸湿・放湿性が高い","防水性が高い","化学繊維","革素材"],
correct:[0],
explanation:"リネンは吸湿・放湿性に優れ、蒸れにくく夏向きの天然素材。"
},

{
category:"素材知識",
type:"single",
question:"シルクの主成分は？",
choices:["タンパク質","セルロース","ナイロン","ポリエステル"],
correct:[0],
explanation:"シルクは蚕の繭から作られる天然タンパク質繊維。"
},

{
category:"素材知識",
type:"single",
question:"ウールの原料は？",
choices:["羊毛","綿","麻","木材パルプ"],
correct:[0],
explanation:"ウールは羊毛を原料とした天然繊維。"
},

{
category:"素材知識",
type:"single",
question:"コットンの特徴として正しいものは？",
choices:["肌触りが良い","完全防水","熱で溶ける","虫しか食べない"],
correct:[0],
explanation:"コットンは肌触りが良く吸湿性も高い天然素材。"
},

{
category:"素材知識",
type:"single",
question:"リネンの原料は？",
choices:["亜麻","羊毛","蚕","竹"],
correct:[0],
explanation:"リネンは亜麻（フラックス）から作られる。"
},

{
category:"素材知識",
type:"single",
question:"シルクの特徴として正しいものは？",
choices:["光沢がある","防水性が高い","重い","硬い"],
correct:[0],
explanation:"シルク特有の上品な光沢は大きな魅力。"
},

{
category:"素材知識",
type:"single",
question:"ウールが冬に暖かい理由は？",
choices:["空気を含む","電気を使う","防水だから","重いから"],
correct:[0],
explanation:"繊維内に空気を含み断熱層を作るため暖かい。"
},

{
category:"素材知識",
type:"single",
question:"リネンが夏に人気な理由は？",
choices:["蒸れにくい","防弾性能がある","伸びやすい","光る"],
correct:[0],
explanation:"通気性と放湿性に優れるため夏向き。"
},

{
category:"素材知識",
type:"single",
question:"シルクはどんな季節に向いている？",
choices:["オールシーズン","真冬だけ","真夏だけ","梅雨だけ"],
correct:[0],
explanation:"吸湿・放湿性と保温性を併せ持つ。"
},

{
category:"素材知識",
type:"single",
question:"コットンの原料は？",
choices:["綿花","羊毛","麻","石油"],
correct:[0],
explanation:"コットンは綿花から採取される天然繊維。"
},

{
category:"素材知識",
type:"multiple",
question:"天然繊維をすべて選んでください",
choices:["コットン","リネン","シルク","ポリエステル"],
correct:[0,1,2],
explanation:"コットン・リネン・シルクは天然繊維。"
},

{
category:"素材知識",
type:"multiple",
question:"夏向き素材を選んでください",
choices:["リネン","和紙","高混率コットン","厚手フリース"],
correct:[0,1,2],
explanation:"通気性や吸湿性に優れた素材が夏向き。"
},

{
category:"素材知識",
type:"single",
question:"ギザコットンの特徴は？",
choices:["超長綿","羊毛の一種","化学繊維","麻の一種"],
correct:[0],
explanation:"ギザコットンは高級超長綿として知られる。"
},

{
category:"素材知識",
type:"single",
question:"スーピマコットンの特徴は？",
choices:["繊維が長く柔らかい","防水","人工素材","革素材"],
correct:[0],
explanation:"高級綿の代表格で柔らかく耐久性も高い。"
},

{
category:"素材知識",
type:"single",
question:"和紙素材の特徴は？",
choices:["軽くて蒸れにくい","重い","防水","金属製"],
correct:[0],
explanation:"和紙繊維は軽量でさらっとした着心地。"
},

{
category:"素材知識",
type:"single",
question:"天然素材の魅力として正しいものは？",
choices:["風合いの変化を楽しめる","必ず防水","絶対縮まない","色落ちしない"],
correct:[0],
explanation:"経年変化を楽しめる点も魅力。"
},

{
category:"素材知識",
type:"multiple",
question:"吸湿性が高い素材を選んでください",
choices:["シルク","リネン","コットン","ビニール"],
correct:[0,1,2],
explanation:"天然繊維は基本的に吸湿性が高い。"
},

{
category:"素材知識",
type:"single",
question:"リネンの経年変化でよくある特徴は？",
choices:["柔らかくなる","硬くなるだけ","溶ける","縮み続ける"],
correct:[0],
explanation:"着用や洗濯で徐々に柔らかくなる。"
},

{
category:"素材知識",
type:"single",
question:"シルク製品で特に気を付けたいことは？",
choices:["摩擦","完全防水","高温乾燥推奨","漂白推奨"],
correct:[0],
explanation:"繊細な素材なので摩擦に注意。"
},

{
category:"素材知識",
type:"single",
question:"Hummingbirdが重視している素材の考え方として近いものは？",
choices:["天然素材中心","安さ最優先","化学繊維のみ","流行だけ重視"],
correct:[0],
explanation:"天然素材の魅力や着心地を大切にしている。"
},
{
category:"接客知識",
type:"single",
question:"お客様が商品を手に取った時、最初の声かけとして自然なのは？",
choices:["こちら日本製の天然素材で、肌あたりが良いシリーズです","それ高いですよ","買いますか？","触らないでください"],
correct:[0],
explanation:"最初は商品の価値を短く伝えると、自然に会話へつなげやすくなります。"
},

{
category:"接客知識",
type:"single",
question:"高価格帯の商品を説明するときに大切なのは？",
choices:["素材・作り・背景を伝える","値段だけを強調する","安くないと言う","説明しない"],
correct:[0],
explanation:"価格の理由を素材や作りで伝えることで、お客様が納得しやすくなります。"
},

{
category:"接客知識",
type:"multiple",
question:"良い接客として正しいものをすべて選んでください。",
choices:["お客様の用途を聞く","素材の特徴を分かりやすく伝える","強引にすすめる","悩みに合わせて提案する"],
correct:[0,1,3],
explanation:"接客では、聞く・伝える・合わせる、の3つが大切です。"
},

{
category:"接客知識",
type:"single",
question:"お客様が帽子を強く握って触っている時の声かけとして自然なのは？",
choices:["繊細な素材なので、よろしければ私がお出ししますね","触らないでください","壊したら買ってください","それ高いですよ"],
correct:[0],
explanation:"注意ではなく、理由とお手伝いの姿勢を添えると角が立ちにくくなります。"
},

{
category:"お手入れ",
type:"single",
question:"天然素材の商品で避けた方がよい説明は？",
choices:["絶対に縮みません","洗濯表示をご確認ください","乾燥機は避けた方が安心です","風合いの変化も楽しめます"],
correct:[0],
explanation:"天然素材は縮みや風合い変化の可能性があるため、断定しすぎる表現は避けます。"
},

{
category:"お手入れ",
type:"single",
question:"リネン製品のお手入れで避けたいものは？",
choices:["乾燥機","自然乾燥","洗濯表示確認","形を整えて干す"],
correct:[0],
explanation:"乾燥機は縮みや風合い変化の原因になりやすいため注意が必要です。"
},

{
category:"お手入れ",
type:"multiple",
question:"靴下を長持ちさせる方法として正しいものを選んでください。",
choices:["洗濯ネットを使う","乾燥機を高温で使う","形を整えて干す","強くねじって絞る"],
correct:[0,2],
explanation:"洗濯ネットや形を整えて干すことは、生地への負担を減らす方法です。"
},

{
category:"お手入れ",
type:"single",
question:"シルク商品の取り扱いで特に注意したいことは？",
choices:["摩擦や強い洗い方","防水性能","高温乾燥推奨","漂白推奨"],
correct:[0],
explanation:"シルクは繊細な素材のため、摩擦や強い洗い方には注意が必要です。"
},

{
category:"海外対応",
type:"single",
question:"海外のお客様に伝えやすい表現は？",
choices:["Made in Japan. Natural material. Very comfortable.","No touch.","Buy now.","Expensive."],
correct:[0],
explanation:"短くても、日本製・天然素材・着心地を伝えると価値が伝わりやすいです。"
},

{
category:"海外対応",
type:"single",
question:"『これは日本製です』を英語で伝えるなら？",
choices:["This is made in Japan.","This is cheap.","This is no touch.","This is heavy."],
correct:[0],
explanation:"Made in Japan は海外のお客様に伝わりやすい価値のひとつです。"
},

{
category:"海外対応",
type:"multiple",
question:"海外のお客様への接客で大切なことを選んでください。",
choices:["短く分かりやすく伝える","笑顔で対応する","専門用語をたくさん使う","素材名をシンプルに伝える"],
correct:[0,1,3],
explanation:"短い英語でも、笑顔とシンプルな説明で十分に伝わります。"
},

{
category:"海外対応",
type:"single",
question:"『とても柔らかいです』を英語で伝えるなら？",
choices:["It is very soft.","It is very hard.","It is very expensive only.","It is no wash."],
correct:[0],
explanation:"素材の肌あたりを伝える時は very soft が使いやすい表現です。"
},

{
category:"商品知識",
type:"single",
question:"ストレスフリーソックスの説明として近いものは？",
choices:["締めつけにくい履き心地を重視した靴下","完全防水の靴下","登山専用靴下","使い捨て靴下"],
correct:[0],
explanation:"ストレスフリーソックスは、締めつけにくさや快適な履き心地を伝えやすい商品です。"
},

{
category:"商品知識",
type:"single",
question:"リネン靴下を夏におすすめしやすい理由は？",
choices:["蒸れにくくさらっとしやすい","必ず暖かいから","防水だから","重いから"],
correct:[0],
explanation:"リネンは吸湿・放湿性があり、夏の蒸れ対策として提案しやすい素材です。"
},

{
category:"商品知識",
type:"multiple",
question:"ギフト提案に向いている要素を選んでください。",
choices:["日本製","天然素材","使いやすい色","説明できない素材"],
correct:[0,1,2],
explanation:"日本製・天然素材・使いやすさはギフト提案で伝えやすい価値です。"
},

{
category:"商品知識",
type:"single",
question:"帽子を提案するときに伝えやすいポイントは？",
choices:["素材感・軽さ・季節感","値段だけ","触れないことだけ","在庫数だけ"],
correct:[0],
explanation:"帽子は見た目だけでなく、素材感や軽さ、季節感を伝えると提案しやすくなります。"
}
];