const productList = [
    {
      category : 'Mac',
      image : 'images/macbook-air.jpeg',
      productName : 'MacBook Air',
      price : 115280,
      description : 'M1チップを内蔵したMacBook Airは、驚くほどポータブルなノートブックです。軽快かつスピーディーな使い心地。静かなファンレス設計。美しいRetinaディスプレイ。飛ぶように軽々と持ち運べるのは、スリムなボディと一日中使えるバッテリーのおかげです。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-pro-13.jpeg',
      productName : 'MacBook Pro 13 Inch',
      price : 148280,
      description : '新しいM2チップにより、13インチMacBook Proがこれまで以上に万能に。おなじみのコンパクトボディに、最大20時間使えるバッテリーと、進化したパフォーマンスを持続させるアクティブクーリングシステムを搭載。あざやかなRetinaディスプレイ、FaceTime HDカメラ、スタジオ品質のマイクも魅力です。Appleが作った中で、最もポータブルなプロ向けノートブックを紹介します。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-pro-14.jpeg',
      productName : 'MacBook Pro 14 Inch',
      price : 239800,
      description : '史上最強のMacBook Pro、誕生。恐るべき速さのM1 ProとM1 Maxは、プロユーザーのために初めて設計されたAppleシリコン。革命的なパフォーマンスをもたらし、驚異的なスタミナをバッテリーに与えるチップです。とてつもなく美しいLiquid Retina XDRディスプレイ。Macノートブックで最高のカメラとオーディオ。必要なポートもすべて搭載しました。誰も目撃したことがないプロ向けノートブック。その力はモンスター級です。',
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Mac',
      image : 'images/macbook-pro-16.jpeg',
      productName : 'MacBook Pro 16 Inch',
      price : 299800,
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
      category : 'iPhone',
      image : 'images/iphone13pro.jpeg',
      productName : 'iPhone 13 Pro',
      price : 122800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone13.jpeg',
      productName : 'iPhone 13',
      price : 98800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphonese.jpeg',
      productName : 'iPhone SE',
      price : 57800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone12purple.jpeg',
      productName : 'iPhone 12',
      price : 86800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPhone',
      image : 'images/iphone11.jpeg',
      productName : 'iPhone 11',
      price : 61800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-pro.jpeg',
      productName : 'iPad Pro',
      price : 94800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-air.jpeg',
      productName : 'iPad Air',
      price : 74800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-ipad.jpeg',
      productName : 'iPad',
      price : 39800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'iPad',
      image : 'images/ipad-mini.jpeg',
      productName : 'iPad mini',
      price : 59800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-s7.jpeg',
      productName : 'Apple Watch Series 7',
      price : 48800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-se.jpeg',
      productName : 'Apple Watch SE',
      price : 32800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-s3.jpeg',
      productName : 'Apple Watch Series 3',
      price : 22800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-nike.jpeg',
      productName : 'Apple Watch Nike',
      price : 48800,
      isFavorite : false,
      isInCart : false
    },
    {
      category : 'Watch',
      image : 'images/watch-hermes.jpeg',
      productName : 'Apple Watch Hermes',
      price : 141800,
      isFavorite : false,
      isInCart : false
    }

  ]

// const products = {
//   'Mac' : [
//     {
//       image : 'images/macbook-air.jpeg',
//       productName : 'MacBook Air',
//       price : 115280,
//       description : 'M1チップを内蔵したMacBook Airは、驚くほどポータブルなノートブックです。軽快かつスピーディーな使い心地。静かなファンレス設計。美しいRetinaディスプレイ。飛ぶように軽々と持ち運べるのは、スリムなボディと一日中使えるバッテリーのおかげです。'
//     },
//     {
//       image : 'images/macbook-pro-13.jpeg',
//       productName : 'MacBook Pro 13 Inch',
//       price : 148280,
//       description : '新しいM2チップにより、13インチMacBook Proがこれまで以上に万能に。おなじみのコンパクトボディに、最大20時間使えるバッテリーと、進化したパフォーマンスを持続させるアクティブクーリングシステムを搭載。あざやかなRetinaディスプレイ、FaceTime HDカメラ、スタジオ品質のマイクも魅力です。Appleが作った中で、最もポータブルなプロ向けノートブックを紹介します。'
//     },
//     {
//       image : 'images/macbook-pro-14.jpeg',
//       productName : 'MacBook Pro 14 Inch',
//       price : 239800,
//       description : '史上最強のMacBook Pro、誕生。恐るべき速さのM1 ProとM1 Maxは、プロユーザーのために初めて設計されたAppleシリコン。革命的なパフォーマンスをもたらし、驚異的なスタミナをバッテリーに与えるチップです。とてつもなく美しいLiquid Retina XDRディスプレイ。Macノートブックで最高のカメラとオーディオ。必要なポートもすべて搭載しました。誰も目撃したことがないプロ向けノートブック。その力はモンスター級です。'
//     },
//     {
//       image : 'images/macbook-pro-16.jpeg',
//       productName : 'MacBook Pro 16 Inch',
//       price : 299800,
//       description : '史上最強のMacBook Pro、誕生。恐るべき速さのM1 ProとM1 Maxは、プロユーザーのために初めて設計されたAppleシリコン。革命的なパフォーマンスをもたらし、驚異的なスタミナをバッテリーに与えるチップです。とてつもなく美しいLiquid Retina XDRディスプレイ。Macノートブックで最高のカメラとオーディオ。必要なポートもすべて搭載しました。誰も目撃したことがないプロ向けノートブック。その力はモンスター級です。'
//     },
//     {
//       image : 'images/imac-24.jpeg',
//       productName : 'iMac 24 Inch',
//       price : 154800,
//       description : 'はじめまして。新しいiMacです。Appleが生み出した最高のオールインワンが、M1チップで新しい次元へ。どんな場所も明るくするデザイン。みんなの毎日にあざやかにフィットするコンピュータです。'
//     }
//   ],

//   'iPhone' : [
//     {
//       image : 'images/iphone13pro.jpeg',
//       productName : 'iPhone 13 Pro',
//       price : 122800
//     },
//     {
//       image : 'images/iphone13.jpeg',
//       productName : 'iPhone 13',
//       price : 98800
//     },
//     {
//       image : 'images/iphonese.jpeg',
//       productName : 'iPhone SE',
//       price : 57800
//     },
//     {
//       image : 'images/iphone12purple.jpeg',
//       productName : 'iPhone 12',
//       price : 86800
//     },
//     {
//       image : 'images/iphone11.jpeg',
//       productName : 'iPhone 11',
//       price : 61800
//     }
//   ],

//   'iPad' : [
//     {
//       image : 'images/ipad-pro.jpeg',
//       productName : 'iPad Pro',
//       price : 94800
//     },
//     {
//       image : 'images/ipad-air.jpeg',
//       productName : 'iPad Air',
//       price : 74800
//     },
//     {
//       image : 'images/ipad-ipad.jpeg',
//       productName : 'iPad',
//       price : 39800
//     },
//     {
//       image : 'images/ipad-mini.jpeg',
//       productName : 'iPad mini',
//       price : 59800
//     }
//   ],

//   'Watch' : [
//     {
//       image : 'images/watch-s7.jpeg',
//       productName : 'Apple Watch Series 7',
//       price : 48800
//     },
//     {
//       image : 'images/watch-se.jpeg',
//       productName : 'Apple Watch SE',
//       price : 32800
//     },
//     {
//       image : 'images/watch-s3.jpeg',
//       productName : 'Apple Watch Series 3',
//       price : 22800
//     },
//     {
//       image : 'images/watch-nike.jpeg',
//       productName : 'Apple Watch Nike',
//       price : 48800
//     },
//     {
//       image : 'images/watch-hermes.jpeg',
//       productName : 'Apple Watch Hermes',
//       price : 141800
//     }
//   ]
// }

export default productList