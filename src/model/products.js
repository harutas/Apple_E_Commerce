const productList = [
    {
      category : 'Mac',
      image : 'images/macbook-air-m1.jpeg',
      productName : 'MacBook Air with M1 chip',
      price : 134800,
      description : 'M1チップを内蔵したMacBook Airは、驚くほどポータブルなノートブックです。軽快かつスピーディーな使い心地。静かなファンレス設計。美しいRetinaディスプレイ。飛ぶように軽々と持ち運べるのは、スリムなボディと一日中使えるバッテリーのおかげです。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-air-m2.jpeg',
      productName : 'MacBook Air with M2 chip',
      price : 164800,
      description : 'M2チップ、登場。M1のスピードと電力効率を一段と引き上げる次世代のAppleシリコンです。よりパワフルな8コアCPUで、より多くのことをより速く終わらせる。最大10コアのGPUで、心を奪う画像やアニメーションを生み出す。高性能メディアエンジンで、さらに多くの4Kまたは8KのProResビデオストリームを編集する。バッテリーは最大18時間使えるので、仕事も遊びも一日中楽しめます。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-pro-13.jpeg',
      productName : 'MacBook Pro 13 Inch',
      price : 178800,
      description : '新しいM2チップにより、13インチMacBook Proがこれまで以上に万能に。おなじみのコンパクトボディに、最大20時間使えるバッテリーと、進化したパフォーマンスを持続させるアクティブクーリングシステムを搭載。あざやかなRetinaディスプレイ、FaceTime HDカメラ、スタジオ品質のマイクも魅力です。Appleが作った中で、最もポータブルなプロ向けノートブックを紹介します。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-pro-14.jpeg',
      productName : 'MacBook Pro 14 Inch',
      price : 274800,
      description : '史上最強のMacBook Pro、誕生。恐るべき速さのM1 ProとM1 Maxは、プロユーザーのために初めて設計されたAppleシリコン。革命的なパフォーマンスをもたらし、驚異的なスタミナをバッテリーに与えるチップです。とてつもなく美しいLiquid Retina XDRディスプレイ。Macノートブックで最高のカメラとオーディオ。必要なポートもすべて搭載しました。誰も目撃したことがないプロ向けノートブック。その力はモンスター級です。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-pro-16.jpeg',
      productName : 'MacBook Pro 16 Inch',
      price : 338800,
      description : '史上最強のMacBook Pro、誕生。恐るべき速さのM1 ProとM1 Maxは、プロユーザーのために初めて設計されたAppleシリコン。革命的なパフォーマンスをもたらし、驚異的なスタミナをバッテリーに与えるチップです。とてつもなく美しいLiquid Retina XDRディスプレイ。Macノートブックで最高のカメラとオーディオ。必要なポートもすべて搭載しました。誰も目撃したことがないプロ向けノートブック。その力はモンスター級です。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/imac-24.jpeg',
      productName : 'iMac 24 Inch',
      price : 154800,
      description : 'はじめまして。新しいiMacです。Appleが生み出した最高のオールインワンが、M1チップで新しい次元へ。どんな場所も明るくするデザイン。みんなの毎日にあざやかにフィットするコンピュータです。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/mac-mini.jpeg',
      productName : 'Mac mini',
      price : 92800,
      description : 'Mac miniは、最も柔軟に使えるAppleのデスクトップコンピュータ。何でもできるこの一台を、Apple M1チップが次のレベルへ連れていきます。CPU性能は最大3倍高速。グラフィックスは最大6倍高速。先進的なNeural Engineにより、機械学習は最大15倍高速。想像をはるかに超えるスピードとパワーを、あなたの仕事に、遊びに、創造力に。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/mac-studio.jpeg',
      productName : 'Mac Studio',
      price : 278800,
      description : 'Mac Studioは、まったく新しいMacのデスクトップです。コンパクトなボディに、豊富なコネクション、型破りなパフォーマンス、そして様々な新機能がぎっしり。必要なものすべてに軽々とアクセスでき、あらゆる空間がスタジオに変わります。まずは欲しいパワーを選びましょう。恐るべきハイスピードのM1 Maxと、新登場のM1 Ultraを用意しました。M1 Ultraは、パーソナルコンピュータ史上、最もパワフルなチップです。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone13pro.jpeg',
      productName : 'iPhone 13 Pro',
      price : 122800,
      description : 'とてつもなくパワフルに進化したカメラシステム。触れるたびに、まったく新しい反応の良さを感じられるディスプレイ。世界最速のスマートフォンチップ。比類のない耐久性。 そして、飛躍的に向上したバッテリー駆動時間。さあ、Proの世界へ。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone13.jpeg',
      productName : 'iPhone 13',
      price : 98800,
      description : 'iPhone史上、最も先進的なデュアルカメラシステム。上から下まで。端から端まで。かつてないほど頑丈。すべてをスピードアップさせる、飛ぶように速いチップ。あなたの毎日を止めない大躍進のバッテリー。できること、超人的。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphonese.jpeg',
      productName : 'iPhone SE',
      price : 57800,
      description : '手にしたくなるパワーを、手にしやすく。サクサク動くチップ。進化したバッテリー5Gのスピード。ずっと使えるデザイン。スター級のカメラ。おなじみのホームボタン。そのすべてを、4.7インチのポケットサイズに。超高速ファミリーのメンバーです。iPhone SEの心臓部にあるのは圧倒的にパワフルなA15 Bionic。iPhone 13と同じチップです。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone12purple.jpeg',
      productName : 'iPhone 12',
      price : 86800,
      description : '早い話、速いです。圧倒的にパワフルなチップ。5Gの速さ。先進的なデュアルカメラシステム。どんなスマートフォンのガラスよりも頑丈なCeramic Shieldの前面。色あざやかで美しいOLEDディスプレイ。そのすべてを詰め込んだiPhone 12。2つの魅力的なサイズでどうぞ。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone11.jpeg',
      productName : 'iPhone 11',
      price : 61800,
      description : "",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-pro.jpeg',
      productName : 'iPad Pro',
      price : 94800,
      description : "それは究極のiPad体験。M1の革新的なパフォーマンス。美しさがあふれるXDRディスプレイ。とてつもなく速い5Gワイヤレス。常識を打ち破る進化です。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-air.jpeg',
      productName : 'iPad Air',
      price : 74800,
      description : "あざやかに躍るパワー。Apple M1チップの驚異的なパワー、内蔵。センターフレームに対応した12MP超広角フロントカメラ。超高速5G。一緒に使えるApple PencilとMagic Keyboard。美しい5つのカラー。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-ipad.jpeg',
      productName : 'iPad',
      price : 39800,
      description : "パワフル。万能。使いやすい。新しいiPadは、何でも好きなことができるように設計されています。働く、遊ぶ、作る、学ぶ、つながる、ほかにもたくさん。そのすべてを驚くほど手に入れやすいプライスでどうぞ。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-mini.jpeg',
      productName : 'iPad mini',
      price : 59800,
      description : "こんなにパワフル。なのにミニ。iPadのすべてを、手のひらサイズに。ビッグアイデアが生まれる場所。すごいパワーを、詰め込みました。新しいオールスクリーンのデザイン。強力なA15 Bionicチップ。超高速5G。Apple Pencilへの対応。美しい4つのカラー。こんなデバイス、ほかにある？",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-s7.jpeg',
      productName : 'Apple Watch Series 7',
      price : 48800,
      description : "ビッグなニューフェイス。Apple Watch史上、最大かつ最先端のディスプレイ。かつてないほど高い耐久性。健康のための画期的なイノベーション。最大33パーセント速い充電時間。5色のアルミニウム。ディスプレイをここまで広げました。より見やすく。より使いやすく。大きくなったディスプレイが、毎日のあらゆる体験を進化させます。Apple Watch史上、最大かつ最高のアイデア。それが、Apple Watch Series 7です。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-se.jpeg',
      productName : 'Apple Watch SE',
      price : 32800,
      description : "あふれる性能を、もれなく手軽に。いつも大切な人や情報とつながり、アクティブに活躍し、健康と安全を守るためのパワフルな機能。体のあらゆる動きを記録し、お気に入りのワークアウトを測定するための先進的なセンサー。iPhoneを置いて出かけられるCellularモデルもラインナップ。それがApple Watch SEです。たくさんの魅力を、たくさんの腕に届けます。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-s3.jpeg',
      productName : 'Apple Watch Series 3',
      price : 22800,
      description : "いいことたくさん。3の中に。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-nike.jpeg',
      productName : 'Apple Watch Nike',
      price : 48800,
      description : "あなたと動き続ける。Nike Run Clubアプリが内蔵されたApple Watch Nikeは、究極のランニングパートナーです。あなたと一緒に動くNikeの文字盤が新登場。Nike Run Clubアプリで、ペースグラフと連続記録を直接チェックできるようになりました。ともに走りたくなる理由は、ほかにもたくさん。Apple Watch Nikeが、あなたのランを次のレベルへ連れて行きます。",
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-hermes.jpeg',
      productName : 'Apple Watch Hermes',
      price : 141800,
      description : "洗練のコラボレーション。最新のインスピレーション。Apple Watch Hermèsのコラボレーションは、共通の伝統と価値観から生まれました。デザインと革新です。ストラップの素材から、ケースのエッチング、特別な文字盤まで。あらゆる細部に揺るぎないこだわりが込められています。最新のコレクションでは、季節にインスパイアされた爽やかな新色がそろいました。",
      isFavorite : false,
      isInCart : false
    }

  ]

export default productList;