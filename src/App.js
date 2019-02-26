import React, { Component } from 'react';
import './App.css';
import Gallery from "./Gallery";


const books = [
        {
            "id": 1991,
            "title": "Du Loir Seyahatnamesi",
            "author": "Du Loir",
            "created": "2019-02-25T21:27:49.085707Z",
            "sites": [
                {
                    "id": 2010,
                    "publisher": "Yeditepe Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Du-Loir-Seyahatnamesi/Du-Loir/Edebiyat/Dunya-Gunluk-Ani/urunno=0001686118001",
                    "siteName": "ide",
                    "price": 15.5,
                    "isbn": "774442",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/d2823a2daf9947a6e393419691eb9d9e841da3be.jpg",
                    "created": "2019-02-25T21:27:49.087269Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 1993,
            "title": "Küçük Anılar",
            "author": "Jose Saramago",
            "created": "2019-02-25T21:27:49.400434Z",
            "sites": [
                {
                    "id": 2012,
                    "publisher": "Kırmızı Kedi",
                    "siteUrl": "www.idefix.com/Kitap/Kucuk-Anilar/Edebiyat/Dunya-Gunluk-Ani/urunno=0001776672001",
                    "siteName": "ide",
                    "price": 8.82,
                    "isbn": "984229",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/57daf9c09656b6d261de212eef3b70ffd27e0bcc.jpg",
                    "created": "2019-02-25T21:27:49.403322Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 8494,
                    "publisher": "Kırmızı Kedi",
                    "siteUrl": "www.dr.com.tr/Kitap/Kucuk-Anilar/Edebiyat/Dunya-Gunluk-Ani/urunno=0001776672001",
                    "siteName": "dr",
                    "price": 9.38,
                    "isbn": "0001776672001",
                    "category": "Kitap/Edebiyat/Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/01ccced753ca8a8e8d0f5b9787b59b1680dfd6ee.jpg",
                    "created": "2019-02-25T21:54:17.463025Z",
                    "updated": "2019-02-25T21:54:17.800540Z",
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 1995,
            "title": "Sade'ın Kayıp Günlüğü",
            "author": "Marquis De Sade",
            "created": "2019-02-25T21:27:50.017787Z",
            "sites": [
                {
                    "id": 2014,
                    "publisher": "Chiviyazıları Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Sadein-Kayip-Gunlugu/Marquis-De-Sade/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000635712",
                    "siteName": "ide",
                    "price": 15.83,
                    "isbn": "458058",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/2beb020dc97a3d2e2aa4315af656bfe915c4e54c.jpg",
                    "created": "2019-02-25T21:27:50.019440Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 1997,
            "title": "Dünyayla Benim Aramda",
            "author": "Ta-Nehisi Coates",
            "created": "2019-02-25T21:27:50.449317Z",
            "sites": [
                {
                    "id": 2016,
                    "publisher": "Monokl",
                    "siteUrl": "www.idefix.com/Kitap/Dunyayla-Benim-Aramda/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000723360",
                    "siteName": "ide",
                    "price": 10.34,
                    "isbn": "606657",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/14c843cabdb95b9913ef4f05b30aa86dee1a4736.jpg",
                    "created": "2019-02-25T21:27:50.450496Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 1999,
            "title": "Herkes Kazanır",
            "author": "Keith Hollihan",
            "created": "2019-02-25T21:27:50.703539Z",
            "sites": [
                {
                    "id": 2018,
                    "publisher": "Optimist",
                    "siteUrl": "www.idefix.com/Kitap/Herkes-Kazanir/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000692087",
                    "siteName": "ide",
                    "price": 17.59,
                    "isbn": "536358",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/1b6775fc048716f595a253361eca123df83a4182.jpg",
                    "created": "2019-02-25T21:27:50.704695Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2001,
            "title": "Ben Nojoud 10 Yaşındayım ve Dulum",
            "author": "Nojoud Ali",
            "created": "2019-02-25T21:27:50.976644Z",
            "sites": [
                {
                    "id": 6210,
                    "publisher": "MARTI YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/ben-nojoud-10-yasindayim-ve-dulum/404924.html&path=128_140",
                    "siteName": "ky",
                    "price": 12.04,
                    "isbn": "6051860688",
                    "category": "Anı (hatırat)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/fbada52c8c686bb2c9e444bb050a12c4f75c5383.jpg",
                    "created": "2019-02-25T21:44:39.679164Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2020,
                    "publisher": "Martı Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Ben-Nojoud-10-Yasindayim-ve-Dulum/Nojoud-Ali/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000714897",
                    "siteName": "ide",
                    "price": 13.52,
                    "isbn": "819533",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/bdb4d8a38a2a47d8f556f25796c528f98676acbd.jpg",
                    "created": "2019-02-25T21:27:50.980015Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2004,
            "title": "Yolculuk Günlükleri",
            "author": "Albert Camus",
            "created": "2019-02-25T21:27:51.265498Z",
            "sites": [
                {
                    "id": 2023,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Yolculuk-Gunlukleri/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000064373",
                    "siteName": "ide",
                    "price": 11.9,
                    "isbn": "389559",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/37bc0102707f311da3c0b3ca0bf47b87590f5801.jpg",
                    "created": "2019-02-25T21:27:51.266588Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2007,
            "title": "Ukraynalı Devrimci Lider Frunze'nin Türkiye Anıları Kasım 1921-Ocak 1922",
            "author": "Mihail Vasilyeviç Frunze",
            "created": "2019-02-25T21:27:51.574586Z",
            "sites": [
                {
                    "id": 2025,
                    "publisher": "Dorlion Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Ukraynali-Devrimci-Lider-Frunzenin-Turkiye-Anilari-Kasim-1921-Ocak-1922/Edebiyat/Dunya-Gunluk-Ani/urunno=0001796134001",
                    "siteName": "ide",
                    "price": 8.11,
                    "isbn": "1049360",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/b56264e03ed6b73634866a6ac5640c87be952a13.jpg",
                    "created": "2019-02-25T21:27:51.575675Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2010,
            "title": "Kış Günlüğü",
            "author": "Paul Auster",
            "created": "2019-02-25T21:27:51.839994Z",
            "sites": [
                {
                    "id": 9355,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.dr.com.tr/Kitap/Kis-Gunlugu/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000383177",
                    "siteName": "dr",
                    "price": 15,
                    "isbn": "0000000383177",
                    "category": "Kitap/Edebiyat/Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/72309f9d3e45000f436b05c61f9e255042666d2a.jpg",
                    "created": "2019-02-25T21:58:07.475737Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2028,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Kis-Gunlugu/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000383177",
                    "siteName": "ide",
                    "price": 14,
                    "isbn": "463238",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/2ea3dee155099167b262ab5bc1a04dfa556d3c52.jpg",
                    "created": "2019-02-25T21:27:51.841229Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2012,
            "title": "Yas Günlüğü",
            "author": "Roland Barthes",
            "created": "2019-02-25T21:27:52.183470Z",
            "sites": [
                {
                    "id": 2030,
                    "publisher": "Yapı Kredi Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Yas-Gunlugu/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000307159",
                    "siteName": "ide",
                    "price": 14.96,
                    "isbn": "388354",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/3e34ebc3f73ca2e547b49033cc90f5c4acdbc879.jpg",
                    "created": "2019-02-25T21:27:52.184644Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2014,
            "title": "Çaybaşı'ndan Manisa'ya",
            "author": "Kemal Yurdakul Aren",
            "created": "2019-02-25T21:27:52.798167Z",
            "sites": [
                {
                    "id": 2034,
                    "publisher": "Kubbealtı Neşriyatı",
                    "siteUrl": "www.idefix.com/Kitap/Caybasindan-Manisaya/Kemal-Yurdakul-Aren/Edebiyat/Soylesi/urunno=0000000329941",
                    "siteName": "ide",
                    "price": 10.89,
                    "isbn": "319637",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/b5897b62d7c35278becfa1f96a757ffffe18511b.jpg",
                    "created": "2019-02-25T21:27:52.799369Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2015,
            "title": "Kayıp Şark'ın Peşinde",
            "author": "Olivier Roy",
            "created": "2019-02-25T21:27:53.204953Z",
            "sites": [
                {
                    "id": 2036,
                    "publisher": "Metis Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Kayip-Sarkin-Pesinde/Olivier-Roy/Edebiyat/Soylesi/urunno=0000000643877",
                    "siteName": "ide",
                    "price": 22.52,
                    "isbn": "331078",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/c5946fd8f605b2f10127618eb1820d6ad91bbbc2.jpg",
                    "created": "2019-02-25T21:27:53.206234Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2016,
            "title": "İkiz Aynası - Sanattan Portreler",
            "author": "Büşra Sönmezışık",
            "created": "2019-02-25T21:27:53.712385Z",
            "sites": [
                {
                    "id": 2037,
                    "publisher": "Profil Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Ikiz-Aynasi-Sanattan-Portreler/Kubra-Sonmezisik/Edebiyat/Soylesi/urunno=0000000639856",
                    "siteName": "ide",
                    "price": 17.59,
                    "isbn": "305826",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/1a2d9eb8f847dc0cfa9cbcbeaa4c9dde47c84653.jpg",
                    "created": "2019-02-25T21:27:53.714837Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2017,
            "title": "Orta Sayfa Sohbetleri Edebiyat 2",
            "author": "M. İhsan Kara",
            "created": "2019-02-25T21:27:53.962823Z",
            "sites": [
                {
                    "id": 2038,
                    "publisher": "Dergah Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Orta-Sayfa-Sohbetleri-Edebiyat-2/M-Ihsan-Kara/Edebiyat/Soylesi/urunno=0000000441150",
                    "siteName": "ide",
                    "price": 18.29,
                    "isbn": "357738",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/351c6d7f6ffbac42ca469e38e34753dd9ad2beea.jpg",
                    "created": "2019-02-25T21:27:53.964Z",
                    "updated": "2019-02-25T21:29:31.651467Z",
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 3643,
                    "publisher": "KUBBEALTI NEŞRİYAT",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/edebiyat-sohbetleri/58658.html&path=128_157",
                    "siteName": "ky",
                    "price": 19.44,
                    "isbn": "9757663751",
                    "category": "Edebiyat Yazıları",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/f6e623fef1ea0ecbfc62ac7d50b576cba1b4d9ba.jpg",
                    "created": "2019-02-25T21:34:05.080676Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2019,
            "title": "Burada Mutlu Değilim",
            "author": "Jale Sancak",
            "created": "2019-02-25T21:27:54.180258Z",
            "sites": [
                {
                    "id": 2040,
                    "publisher": "Kırmızı Kedi",
                    "siteUrl": "www.idefix.com/Kitap/Burada-Mutlu-Degilim/Edebiyat/Soylesi/urunno=0000000370527",
                    "siteName": "ide",
                    "price": 7.15,
                    "isbn": "416654",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/ce73742b22672f4c725d9ab22e3dda5a63914651.jpg",
                    "created": "2019-02-25T21:27:54.183417Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2021,
            "title": "Olamayanlar",
            "author": "C. D. Rose",
            "created": "2019-02-25T21:27:54.528241Z",
            "sites": [
                {
                    "id": 2042,
                    "publisher": "Sırtlan Kitap",
                    "siteUrl": "www.idefix.com/Kitap/Olamayanlat/C-D-Rose/Edebiyat/Edebiyatcilar/urunno=0001686197001",
                    "siteName": "ide",
                    "price": 14.9,
                    "isbn": "825005",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/74f2d840785d69ed039d28b4bfc54990f5e44255.jpg",
                    "created": "2019-02-25T21:27:54.529328Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2022,
            "title": "Turgut Uyar ve Başka Şeyler",
            "author": "Yücel Göktürk",
            "created": "2019-02-25T21:27:55.188949Z",
            "sites": [
                {
                    "id": 2043,
                    "publisher": "Metis Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Turgut-Uyar-ve-Baska-Seyler/Orhan-Kocak/Edebiyat/Soylesi/urunno=0000000727366",
                    "siteName": "ide",
                    "price": 12.31,
                    "isbn": "463605",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/dd08bd963352326240678569d7109ef0fd0d06dd.jpg",
                    "created": "2019-02-25T21:27:55.189875Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2024,
            "title": "Hayalperestler",
            "author": "Patti Smith",
            "created": "2019-02-25T21:27:55.684177Z",
            "sites": [
                {
                    "id": 2045,
                    "publisher": "Domingo Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Hayalperestler/Edebiyat/Dunya-Gunluk-Ani/urunno=0000000397709",
                    "siteName": "ide",
                    "price": 14,
                    "isbn": "329651",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/f5dd2e15f108724720a5b2225afb15666cf7f8fd.jpg",
                    "created": "2019-02-25T21:27:55.685376Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 11342,
                    "publisher": "DOMİNGO YAYINEVİ",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/hayalperestler/273747.html&path=128_140",
                    "siteName": "ky",
                    "price": 13.24,
                    "isbn": "6056260452",
                    "category": "Anı (hatırat)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/bcbf964c54e984713d75ddff2549defa2dbfdff8.jpg",
                    "created": "2019-02-25T22:07:54.024476Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2026,
            "title": "Gözleri Görmeyen İki Adam",
            "author": "Sefa Kaplan",
            "created": "2019-02-25T21:27:56.088736Z",
            "sites": [
                {
                    "id": 2047,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Gozleri-Gormeyen-Iki-Adam/Edebiyat/Edebiyatcilar/urunno=0000000686419",
                    "siteName": "ide",
                    "price": 22.04,
                    "isbn": "531734",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/c0a369df2ee318cc23147f320ada5f736c42cdc8.jpg",
                    "created": "2019-02-25T21:27:56.090792Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2027,
            "title": "Hikaye Anlatan Adam: Ahmet Mithat",
            "author": "Nüket Esen",
            "created": "2019-02-25T21:27:56.450537Z",
            "sites": [
                {
                    "id": 2048,
                    "publisher": "İletişim Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Hikaye-Anlatan-Adam-Ahmet-Mithat/Edebiyat/Edebiyatcilar/urunno=0000000581044",
                    "siteName": "ide",
                    "price": 19.71,
                    "isbn": "443072",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/1fa4472a9e16170e144c28a667ddc2c5890b08e3.jpg",
                    "created": "2019-02-25T21:27:56.454031Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2029,
            "title": "Cemal Süreya - Şairin Hayatı Şiire Dahil",
            "author": "Nusret Duruel",
            "created": "2019-02-25T21:27:56.653952Z",
            "sites": [
                {
                    "id": 2050,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Cemal-Sureya-Sairin-Hayati-Siire-Dahil/Edebiyat/Edebiyatcilar/urunno=0000000272939",
                    "siteName": "ide",
                    "price": 29.4,
                    "isbn": "471770",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/4586a7111c6ea3f7231282722900c4f006aa4467.jpg",
                    "created": "2019-02-25T21:27:56.657834Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2030,
            "title": "Mahmure'nin Rüyası",
            "author": "Mahmure Özçelik",
            "created": "2019-02-25T21:27:56.878824Z",
            "sites": [
                {
                    "id": 2051,
                    "publisher": "Siyah Kuğu Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Mahmurenin-Ruyasi/Mahmure-Ozcelik/Edebiyat/Soylesi/urunno=0001687215001",
                    "siteName": "ide",
                    "price": 13.52,
                    "isbn": "826764",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/1ddf25f59dfe9e408010683306abbcc72b50e918.jpg",
                    "created": "2019-02-25T21:27:56.879799Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2032,
            "title": "Rimbaud",
            "author": "Graham Robb",
            "created": "2019-02-25T21:27:57.224318Z",
            "sites": [
                {
                    "id": 2053,
                    "publisher": "İş Bankası Kültür Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Rimbaud/Edebiyat/Edebiyatcilar/urunno=0000000405289",
                    "siteName": "ide",
                    "price": 34.56,
                    "isbn": "384795",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/8da130343336fa746898c4d686801b17d62f60cb.jpg",
                    "created": "2019-02-25T21:27:57.226073Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2034,
            "title": "Jean Genet : Yüce Yalancı",
            "author": "Tahar Ben Jelloun",
            "created": "2019-02-25T21:27:57.500050Z",
            "sites": [
                {
                    "id": 2055,
                    "publisher": "Sel Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Jean-Genet-Yuce-Yalanci/Edebiyat/Edebiyatcilar/urunno=0000000408932",
                    "siteName": "ide",
                    "price": 8.44,
                    "isbn": "408622",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/9201a792a3678edebee6a3162e84ca1b7c199719.jpg",
                    "created": "2019-02-25T21:27:57.501202Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2035,
            "title": "Sürgün İntihal ve İntihar",
            "author": "Selçuk Karakılıç",
            "created": "2019-02-25T21:27:58.037923Z",
            "sites": [
                {
                    "id": 2056,
                    "publisher": "Ötüken Neşriyat",
                    "siteUrl": "www.idefix.com/Kitap/Surgun-Intihal-Ve-Intihar/Edebiyat/Edebiyatcilar/urunno=0001759838001",
                    "siteName": "ide",
                    "price": 18.29,
                    "isbn": "961170",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/135b23dce47e20a87e526e722972825f221a7315.jpg",
                    "created": "2019-02-25T21:27:58.040553Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2036,
            "title": "Bavulumda Söyleşiler",
            "author": "Sayım Çınar",
            "created": "2019-02-25T21:27:58.269672Z",
            "sites": [
                {
                    "id": 2058,
                    "publisher": "Profil Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Bavulumda-Soylesiler/Sayim-Cinar/Edebiyat/Soylesi/urunno=0000000432602",
                    "siteName": "ide",
                    "price": 17.59,
                    "isbn": "433862",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/b7fe334ed3559ee35cfce763ea15d0e21d6efb4b.jpg",
                    "created": "2019-02-25T21:27:58.271037Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2037,
            "title": "Ayane Söyleşileri",
            "author": "Ömer Erdoğan",
            "created": "2019-02-25T21:27:58.612304Z",
            "sites": [
                {
                    "id": 2059,
                    "publisher": "Cümle",
                    "siteUrl": "www.idefix.com/Kitap/Ayane-Soylesileri/Omer-Erdogan/Edebiyat/Soylesi/urunno=0000000683816",
                    "siteName": "ide",
                    "price": 14.08,
                    "isbn": "529623",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/f57c62a527189efaa60d8a1a99864a6a0638c298.jpg",
                    "created": "2019-02-25T21:27:58.614710Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2038,
            "title": "Güldürme Beni!",
            "author": "Melike Eğilmezler Boylan",
            "created": "2019-02-25T21:27:58.850818Z",
            "sites": [
                {
                    "id": 2061,
                    "publisher": "Yapı Kredi Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Guldurme-Beni!/Edebiyat/Soylesi/urunno=0000000683972",
                    "siteName": "ide",
                    "price": 17.68,
                    "isbn": "529813",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/361e4cafc662f3d40af1369fbb9632ef35353188.jpg",
                    "created": "2019-02-25T21:27:58.855579Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2039,
            "title": "Özgürlüğün Fecri",
            "author": "Abdullah Galib Bergusi",
            "created": "2019-02-25T21:27:59.250101Z",
            "sites": [
                {
                    "id": 2062,
                    "publisher": "Ekin Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Ozgurlugun-Fecri/Edebiyat/Dunya-Gunluk-Ani/urunno=0001751674001",
                    "siteName": "ide",
                    "price": 11.96,
                    "isbn": "946366",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/cca2a91f577fef055a577088b12c2cbbffd3cdf1.jpg",
                    "created": "2019-02-25T21:27:59.251274Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2042,
            "title": "Margaret Atwood - Kırmızı Pabuçlar",
            "author": "Rosemary Sullivan",
            "created": "2019-02-25T21:28:00.002624Z",
            "sites": [
                {
                    "id": 2065,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Margaret-Atwood-Kirmizi-Pabuclar/Edebiyat/Edebiyatcilar/urunno=0000000567563",
                    "siteName": "ide",
                    "price": 18.26,
                    "isbn": "442113",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/8d6cc1988971a83d87fc9a2cf446c98922d99dd4.jpg",
                    "created": "2019-02-25T21:28:00.003865Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2044,
            "title": "D.H. Lawrence",
            "author": "Mina Urgan",
            "created": "2019-02-25T21:28:00.390817Z",
            "sites": [
                {
                    "id": 2067,
                    "publisher": "Yapı Kredi Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/D-H-Lawrence/Edebiyat/Edebiyatcilar/urunno=0000000058118",
                    "siteName": "ide",
                    "price": 17.68,
                    "isbn": "360706",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/fa8cbf24c72e418af4438415dbad6f16f27a1b56.jpg",
                    "created": "2019-02-25T21:28:00.391987Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2046,
            "title": "James Joyce - Samuel Beckett - Oscar Wilde - William Butler Yeats - Dört Dublinli",
            "author": "Richard Ellmann",
            "created": "2019-02-25T21:28:02.453342Z",
            "sites": [
                {
                    "id": 2071,
                    "publisher": "Alfa Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/James-Joyce-Samuel-Beckett-Oscar-Wilde-William-Butler-Yeats-Dort-Dublinli/Edebiyat/Edebiyatcilar/urunno=0000000703150",
                    "siteName": "ide",
                    "price": 10.2,
                    "isbn": "565058",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/606bdf0efa0fa7862a1885e44e039bf8861a4ee1.jpg",
                    "created": "2019-02-25T21:28:02.454544Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2047,
            "title": "Kafamdaki Fillerin Hepsi Mavi",
            "author": "Murat Gülen",
            "created": "2019-02-25T21:28:02.719628Z",
            "sites": [
                {
                    "id": 2072,
                    "publisher": "İndigo Kitap",
                    "siteUrl": "www.dr.com.tr/Kitap/Kafamdaki-Fillerin-Hepsi-Mavi/Murat-Gulen/Edebiyat/Roman/Turkiye-Roman/urunno=0001792709001",
                    "siteName": "dr",
                    "price": 14.8,
                    "isbn": "0001792709001",
                    "category": "Kitap/Edebiyat/Roman/Türkiye Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/a11446468b4240a4fa91b3875c1eabe1008e66d3.jpg",
                    "created": "2019-02-25T21:28:02.720757Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2048,
            "title": "Kobra",
            "author": "Ak Welsapar",
            "created": "2019-02-25T21:28:02.746318Z",
            "sites": [
                {
                    "id": 2073,
                    "publisher": "BİLGİ YAYINEVİ",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/kobra/490531.html&path=128_130",
                    "siteName": "ky",
                    "price": 33.75,
                    "isbn": "9752208094",
                    "category": "Roman (çeviri)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/4eebdf400385628ca54cc75c8a99850fab056786.jpg",
                    "created": "2019-02-25T21:28:02.747998Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2049,
            "title": "Kişisel Edebiyat Atlası",
            "author": "Ali Lidar",
            "created": "2019-02-25T21:28:02.771425Z",
            "sites": [
                {
                    "id": 2074,
                    "publisher": "İthaki Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Kisisel-Edebiyat-Atlasi/Edebiyat/Edebiyatcilar/urunno=0001702436001",
                    "siteName": "ide",
                    "price": 15.6,
                    "isbn": "855334",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/eeb29ebeb8ba3b778a413ce4a597f7338de92aa1.jpg",
                    "created": "2019-02-25T21:28:02.774864Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2050,
            "title": "Nefesini Tut",
            "author": "Holly Seddon",
            "created": "2019-02-25T21:28:03.291815Z",
            "sites": [
                {
                    "id": 2075,
                    "publisher": "Yabancı",
                    "siteUrl": "www.dr.com.tr/Kitap/Nefesini-Tut/Edebiyat/Roman/Korku-Gerilim/urunno=0000000697790",
                    "siteName": "dr",
                    "price": 24,
                    "isbn": "0000000697790",
                    "category": "Kitap/Edebiyat/Roman/Korku Gerilim",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/6f845a0beae009e5f2e40cc68eff1e4aac34fbcf.jpg",
                    "created": "2019-02-25T21:28:03.292987Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2051,
            "title": "Yaşam Öyküleri",
            "author": "Jean-Paul Sartre",
            "created": "2019-02-25T21:28:03.310051Z",
            "sites": [
                {
                    "id": 2076,
                    "publisher": "Payel",
                    "siteUrl": "www.idefix.com/Kitap/Yasam-Oykuleri/Edebiyat/Edebiyatcilar/urunno=0000000058861",
                    "siteName": "ide",
                    "price": 9.33,
                    "isbn": "365840",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/d879ffe5b2fe99d54dec71ddbf3fe87fe7a58e60.jpg",
                    "created": "2019-02-25T21:28:03.312483Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2052,
            "title": "Yaşama Dair",
            "author": "Kutsiye Bozoklar",
            "created": "2019-02-25T21:28:03.657518Z",
            "sites": [
                {
                    "id": 2077,
                    "publisher": "Ceylan Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Yasama-Dair/Edebiyat/Soylesi/urunno=0000000483101",
                    "siteName": "ide",
                    "price": 20.28,
                    "isbn": "592000",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/aed2d713425c8366762ef191a5cc0ad727126d59.jpg",
                    "created": "2019-02-25T21:28:03.658661Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2053,
            "title": "Mucize Kız",
            "author": "Andrew Roe",
            "created": "2019-02-25T21:28:03.664929Z",
            "sites": [
                {
                    "id": 2078,
                    "publisher": "MARTI YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/mucize-kiz/450218.html&path=128_130",
                    "siteName": "ky",
                    "price": 18.56,
                    "isbn": "6051865614",
                    "category": "Roman (çeviri)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/34ec0ec0f9250293b4c97cd4a48d4a384e66e750.jpg",
                    "created": "2019-02-25T21:28:03.666095Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2054,
            "title": "O",
            "author": "Stephen King",
            "created": "2019-02-25T21:28:03.767418Z",
            "sites": [
                {
                    "id": 12531,
                    "publisher": "Altın Kitaplar",
                    "siteUrl": "www.idefix.com/Kitap/O/Edebiyat/Roman/Korku-Gerilim/urunno=0000000059516",
                    "siteName": "ide",
                    "price": 52,
                    "isbn": "362115",
                    "category": "Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/c03a7bc37db6394970a51d630543803b452c1382.jpg",
                    "created": "2019-02-25T22:13:41.601875Z",
                    "updated": "2019-02-25T22:13:55.202550Z",
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2079,
                    "publisher": "Altın Kitaplar",
                    "siteUrl": "www.dr.com.tr/Kitap/O/Edebiyat/Roman/Korku-Gerilim/urunno=0000000706011",
                    "siteName": "dr",
                    "price": 44.89,
                    "isbn": "0000000706011",
                    "category": "Kitap/Edebiyat/Roman/Korku Gerilim",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/afc8f7ecb784af5214acd8ed035e1a2aaaec87c7.jpg",
                    "created": "2019-02-25T21:28:03.768680Z",
                    "updated": "2019-02-25T21:34:11.349301Z",
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2055,
            "title": "Sanki Bir Roman Kahramanı - \"Doğan Hızlan Kitabı\"",
            "author": "Kürşat Başar",
            "created": "2019-02-25T21:28:04.003516Z",
            "sites": [
                {
                    "id": 2080,
                    "publisher": "İş Bankası Kültür Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Sanki-Bir-Roman-Kahramani-Dogan-Hizlan-Kitabi/Edebiyat/Soylesi/urunno=0000000221201",
                    "siteName": "ide",
                    "price": 12.24,
                    "isbn": "370696",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/2d75ed374c801ee4f8d016beb8e30cad8549411d.jpg",
                    "created": "2019-02-25T21:28:04.007283Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2056,
            "title": "Empati",
            "author": "Adam Fawer",
            "created": "2019-02-25T21:28:04.269389Z",
            "sites": [
                {
                    "id": 2081,
                    "publisher": "April Yayıncılık",
                    "siteUrl": "www.dr.com.tr/Kitap/Empati/Edebiyat/Roman/Dunya-Roman/urunno=0000000266840",
                    "siteName": "dr",
                    "price": 23.1,
                    "isbn": "0000000266840",
                    "category": "Kitap/Edebiyat/Roman/Dünya Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/98d21358d966f261ac2c86a17b1598ccf84ce0b8.jpg",
                    "created": "2019-02-25T21:28:04.270606Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2057,
            "title": "Elif Dal Mim",
            "author": "Mehdi Hecvani",
            "created": "2019-02-25T21:28:04.347265Z",
            "sites": [
                {
                    "id": 2082,
                    "publisher": "DEMAVEND YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/elif-dal-mim/451591.html&path=128_130",
                    "siteName": "ky",
                    "price": 12,
                    "isbn": "6059986663",
                    "category": "Roman (çeviri)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/e8d72ea943b199b855fe6ddf110605a468697ae2.jpg",
                    "created": "2019-02-25T21:28:04.348715Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2058,
            "title": "Yazmak ve Yaşamak",
            "author": "Nurettin Durman",
            "created": "2019-02-25T21:28:04.399246Z",
            "sites": [
                {
                    "id": 2083,
                    "publisher": "Az Kitap",
                    "siteUrl": "www.idefix.com/Kitap/Yazmak-Ve-Yasamak/Edebiyat/Soylesi/urunno=0000000600416",
                    "siteName": "ide",
                    "price": 11.83,
                    "isbn": "317972",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/60948d5be8705413551e3495abb88dadcd113c7b.jpg",
                    "created": "2019-02-25T21:28:04.400289Z",
                    "updated": "2019-02-25T21:31:32.186969Z",
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2823,
                    "publisher": "AZ KİTAP",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/yazmak-ve-yasamak-2/392505.html&path=128_153",
                    "siteName": "ky",
                    "price": 10.53,
                    "isbn": "6059272162",
                    "category": "Hitabet-Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/e82014820468bc224ba6559b4bab79f1654f757d.jpg",
                    "created": "2019-02-25T21:30:52.842950Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2059,
            "title": "Kavim-Midi Boy",
            "author": "Ahmet Ümit",
            "created": "2019-02-25T21:28:04.546517Z",
            "sites": [
                {
                    "id": 2084,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.dr.com.tr/Kitap/Kavim-Midi-Boy/Edebiyat/Roman/Polisiye/urunno=0001743412001",
                    "siteName": "dr",
                    "price": 9.29,
                    "isbn": "0001743412001",
                    "category": "Kitap/Edebiyat/Roman/Polisiye",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/9b06b1a786bdfd4b774d93c666fe10600cc44182.jpg",
                    "created": "2019-02-25T21:28:04.547611Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2060,
            "title": "İmparatorluğun Zor Yılları 1858-1878",
            "author": "Hristo Stambolski",
            "created": "2019-02-25T21:28:04.827771Z",
            "sites": [
                {
                    "id": 2085,
                    "publisher": "Kitap Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Imparatorlugun-Zor-Yillari-1858-1878/Edebiyat/Dunya-Gunluk-Ani/urunno=0001794204001",
                    "siteName": "ide",
                    "price": 31.67,
                    "isbn": "1045663",
                    "category": "Dünya Günlük Anı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/67c7037e81d8732b1a639e6e87201faa247430b1.jpg",
                    "created": "2019-02-25T21:28:04.828873Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2061,
            "title": "İlmekler & Mülteci Krizinden Bir Kesit",
            "author": "Kate Evans",
            "created": "2019-02-25T21:28:04.924178Z",
            "sites": [
                {
                    "id": 2086,
                    "publisher": "DESEN YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/ilmekler-amp-multeci-krizinden-bir-kesit/460392.html&path=128_130",
                    "siteName": "ky",
                    "price": 51.98,
                    "isbn": "6055678593",
                    "category": "Roman (çeviri)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/dbe1e63452f851fba5aa814c8b253ad6f36a478b.jpg",
                    "created": "2019-02-25T21:28:04.925233Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2062,
            "title": "Başlarım Senin Aşkına",
            "author": "Mehmet Yıldız",
            "created": "2019-02-25T21:28:04.977189Z",
            "sites": [
                {
                    "id": 2087,
                    "publisher": "Hayykitap",
                    "siteUrl": "www.dr.com.tr/Kitap/Baslarim-Senin-Askina/Edebiyat/Denemeyazin/urunno=0001783670001",
                    "siteName": "dr",
                    "price": 15.4,
                    "isbn": "0001783670001",
                    "category": "Kitap/Edebiyat/Deneme/Yazın",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/4570e2df950ef424edf8fce70c79d30806081165.jpg",
                    "created": "2019-02-25T21:28:04.978317Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 3756,
                    "publisher": "Hayykitap",
                    "siteUrl": "www.idefix.com/Kitap/Baslarim-Senin-Askina/Edebiyat/Denemeyazin/urunno=0001783670001",
                    "siteName": "ide",
                    "price": 13.2,
                    "isbn": "994291",
                    "category": "Deneme/Yazın",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/71ad385d6bb223b7865c31da5673d8f525738f0c.jpg",
                    "created": "2019-02-25T21:34:24.404640Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2063,
            "title": "Şiir Yaşantısı",
            "author": "Melih Cevdet Anday",
            "created": "2019-02-25T21:28:05.167890Z",
            "sites": [
                {
                    "id": 2088,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Siir-Yasantisi/Edebiyat/Edebiyatcilar/urunno=0000000668313",
                    "siteName": "ide",
                    "price": 18.89,
                    "isbn": "512338",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/6d2ece927afadf8ddad1f465dc7391b81a71e445.jpg",
                    "created": "2019-02-25T21:28:05.169007Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2064,
            "title": "Bugünün Diliyle Tevfik Fikret",
            "author": "A. Kadir",
            "created": "2019-02-25T21:28:05.367021Z",
            "sites": [
                {
                    "id": 8120,
                    "publisher": "TÜRKİYE İŞ BANKASI KÜLTÜR YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/bugunun-diliyle-tevfik-fikret/354818.html&path=128_138",
                    "siteName": "ky",
                    "price": 7.22,
                    "isbn": "6053322764",
                    "category": "İnceleme",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/848e102658a373d8a8c707af372746783fc613a8.jpg",
                    "created": "2019-02-25T21:52:36.453079Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2090,
                    "publisher": "İş Bankası Kültür Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Bugunun-Diliyle-Tevfik-Fikret/Edebiyat/Edebiyatcilar/urunno=0000000622495",
                    "siteName": "ide",
                    "price": 8.64,
                    "isbn": "452982",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/7c214f35faa4f1bc9d4cbc1072953f6342528a27.jpg",
                    "created": "2019-02-25T21:28:05.369124Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2065,
            "title": "Zorba",
            "author": "Nikos Kazancakis",
            "created": "2019-02-25T21:28:05.567406Z",
            "sites": [
                {
                    "id": 2091,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.dr.com.tr/Kitap/Zorba/Edebiyat/Roman/Dunya-Roman/urunno=0000000025811",
                    "siteName": "dr",
                    "price": 24,
                    "isbn": "0000000025811",
                    "category": "Kitap/Edebiyat/Roman/Dünya Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/03ebc94abf73d25ee9a0ad7d0ad314904006d06f.jpg",
                    "created": "2019-02-25T21:28:05.568385Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2066,
            "title": "Kafka: Utanç ve Suçluluğun Şairi",
            "author": "Saul Friedlander",
            "created": "2019-02-25T21:28:05.659489Z",
            "sites": [
                {
                    "id": 2092,
                    "publisher": "İthaki Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Kafka-Utanc-Ve-Suclulugun-Sairi/Edebiyat/Edebiyatcilar/urunno=0000000654839",
                    "siteName": "ide",
                    "price": 12,
                    "isbn": "373760",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/cd27816d7d8ddc38238c7a70e250a3d20dd03d3b.jpg",
                    "created": "2019-02-25T21:28:05.660617Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2067,
            "title": "Vathek (Vathek)",
            "author": "William Beckford",
            "created": "2019-02-25T21:28:05.847049Z",
            "sites": [
                {
                    "id": 2093,
                    "publisher": "BORDO SİYAH",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/vathek-vathek/464713.html&path=128_130",
                    "siteName": "ky",
                    "price": 12.5,
                    "isbn": "6052223079",
                    "category": "Roman (çeviri)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/d64caca9a1b128e2686e5e8cc4cbb20f22b0a516.jpg",
                    "created": "2019-02-25T21:28:05.848540Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2068,
            "title": "Bir Delinin Anı Defteri - Hasan Ali Yücel Klasikleri",
            "author": "Nikolay...",
            "created": "2019-02-25T21:28:05.900681Z",
            "sites": [
                {
                    "id": 2094,
                    "publisher": "İş Bankası...",
                    "siteUrl": "www.dr.com.tr/Kitap/Bir-Delinin-Ani-Defteri-Hasan-Ali-Yucel-Klasikleri/Edebiyat/Roman/Dunya-Klasik/urunno=0000000326976",
                    "siteName": "dr",
                    "price": 10.5,
                    "isbn": "0000000326976",
                    "category": "Kitap/Edebiyat/Roman/Dünya Klasik",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/1b28968e717da2df0bf26b447917e88cd160002d.jpg",
                    "created": "2019-02-25T21:28:05.901874Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2069,
            "title": "Avrupa'da İslam'a Gönül Verenler",
            "author": "Ali Erkan Kavaklı",
            "created": "2019-02-25T21:28:05.958566Z",
            "sites": [
                {
                    "id": 2095,
                    "publisher": "Nesil Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Avrupada-Islama-Gonul-Verenler/Edebiyat/Soylesi/urunno=0000000488286",
                    "siteName": "ide",
                    "price": 7.04,
                    "isbn": "312686",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/e2cc0b9670cef1c2a22d87e0609794e8d6e1a8c6.jpg",
                    "created": "2019-02-25T21:28:05.959563Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2070,
            "title": "Çepo",
            "author": "Yılmaz Çakal",
            "created": "2019-02-25T21:28:06.148389Z",
            "sites": [
                {
                    "id": 2096,
                    "publisher": "PAYDA YAYINCILIK",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/cepo/481348.html&path=128_129",
                    "siteName": "ky",
                    "price": 21.38,
                    "isbn": "6055223441",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/95201d8c1001a6075c5e71b8119dcaf6e70e0542.jpg",
                    "created": "2019-02-25T21:28:06.149431Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2071,
            "title": "Aynı Yıldızın Altında",
            "author": "John Green",
            "created": "2019-02-25T21:28:06.160980Z",
            "sites": [
                {
                    "id": 2097,
                    "publisher": "Pegasus",
                    "siteUrl": "www.dr.com.tr/Kitap/Ayni-Yildizin-Altinda/Edebiyat/Roman/Romantik/urunno=0000000448031",
                    "siteName": "dr",
                    "price": 33.43,
                    "isbn": "0000000448031",
                    "category": "Kitap/Edebiyat/Roman/Romantik",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/aa4229c0abcebd2798eddc75324d4ab321350b72.jpg",
                    "created": "2019-02-25T21:28:06.161975Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2072,
            "title": "Saf ve Bakir Bir Anadolu Çocuğu \"Güngör Uras Kitabı\"",
            "author": "Haşim Akman",
            "created": "2019-02-25T21:28:06.249667Z",
            "sites": [
                {
                    "id": 2098,
                    "publisher": "İş Bankası Kültür Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Saf-Ve-Bakir-Bir-Anadolu-Cocugu-Gungor-Uras-Kitabi/Edebiyat/Soylesi/urunno=0000000389757",
                    "siteName": "ide",
                    "price": 17.28,
                    "isbn": "401573",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/bec4c7ba672e920978c26b2c9638c722c95c6749.jpg",
                    "created": "2019-02-25T21:28:06.250864Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2073,
            "title": "Dorian Gray'in Portresi",
            "author": "Oscar Wilde",
            "created": "2019-02-25T21:28:06.419665Z",
            "sites": [
                {
                    "id": 2099,
                    "publisher": "İş Bankası...",
                    "siteUrl": "www.dr.com.tr/Kitap/Dorian-Grayin-Portresi/Edebiyat/Roman/Dunya-Klasik/urunno=0001783290001",
                    "siteName": "dr",
                    "price": 7.22,
                    "isbn": "0001783290001",
                    "category": "Kitap/Edebiyat/Roman/Dünya Klasik",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/8c5061973b64ad9b757e570e97b164fff0432bbb.jpg",
                    "created": "2019-02-25T21:28:06.420879Z",
                    "updated": "2019-02-25T22:00:00.841915Z",
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2074,
            "title": "Ceza Kolonisinde",
            "author": "Franz Kafka",
            "created": "2019-02-25T21:28:06.531496Z",
            "sites": [
                {
                    "id": 2100,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Ceza-Kolonisinde/Edebiyat/Anlati/urunno=0000000253560",
                    "siteName": "ide",
                    "price": 12.95,
                    "isbn": "375806",
                    "category": "Anlatı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/7e9c2125892979e7b2ec62a0d04a24092e49764d.jpg",
                    "created": "2019-02-25T21:28:06.532603Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2075,
            "title": "Beyoğlu'nun En Güzel Abisi",
            "author": "Ahmet Ümit",
            "created": "2019-02-25T21:28:06.635837Z",
            "sites": [
                {
                    "id": 2101,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.dr.com.tr/Kitap/Beyoglunun-En-Guzel-Abisi-Clz/Edebiyat/Roman/Polisiye/urunno=0000000563477",
                    "siteName": "dr",
                    "price": 9.29,
                    "isbn": "0000000563477",
                    "category": "Kitap/Edebiyat/Roman/Polisiye",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/b244f8d44e4e3f5e61c2996881f37784b391e0a5.jpg",
                    "created": "2019-02-25T21:28:06.636878Z",
                    "updated": "2019-02-25T21:29:51.670249Z",
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2076,
            "title": "Üç Ölümsüzler",
            "author": "Andre Suarez",
            "created": "2019-02-25T21:28:06.737477Z",
            "sites": [
                {
                    "id": 8113,
                    "publisher": "HECE YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/uc-olumsuz/103601.html&path=128_138",
                    "siteName": "ky",
                    "price": 19.26,
                    "isbn": "9944195096",
                    "category": "İnceleme",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/a3498ba6fb768be8327329ac9803ef399ad2e4ca.jpg",
                    "created": "2019-02-25T21:52:35.225873Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2102,
                    "publisher": "Hece Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Uc-Olumsuzler/Andre-Suarez/Edebiyat/Edebiyatcilar/urunno=0000000258948",
                    "siteName": "ide",
                    "price": 10.56,
                    "isbn": "375191",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/81df53b4b05881d003c8ca1d3af52b672437c801.jpg",
                    "created": "2019-02-25T21:28:06.738922Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2077,
            "title": "35 Gün",
            "author": "B. Safa Azizoğlu",
            "created": "2019-02-25T21:28:06.841884Z",
            "sites": [
                {
                    "id": 2103,
                    "publisher": "SOBİL YAYINCILIK",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/35-gun/481784.html&path=128_129",
                    "siteName": "ky",
                    "price": 9.3,
                    "isbn": "9944271424",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/263311732615a90f49cb7f8abf1f187e9364dd12.jpg",
                    "created": "2019-02-25T21:28:06.843019Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2078,
            "title": "Sis ve Gece-Midi Boy",
            "author": "Ahmet Ümit",
            "created": "2019-02-25T21:28:07.007256Z",
            "sites": [
                {
                    "id": 2104,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.dr.com.tr/Kitap/Sis-ve-Gece-Midi-Boy/Edebiyat/Roman/Polisiye/urunno=0001740184001",
                    "siteName": "dr",
                    "price": 9.29,
                    "isbn": "0001740184001",
                    "category": "Kitap/Edebiyat/Roman/Polisiye",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/eee7068d137459275901c87c4bed511c6ba09cf3.jpg",
                    "created": "2019-02-25T21:28:07.008438Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2079,
            "title": "Goethe ve İslam",
            "author": "Karharina Mommsen",
            "created": "2019-02-25T21:28:07.052029Z",
            "sites": [
                {
                    "id": 2105,
                    "publisher": "Ötüken Neşriyat",
                    "siteUrl": "www.idefix.com/Kitap/Goethe-Ve-Islam/Edebiyat/Edebiyatcilar/urunno=0000000422282",
                    "siteName": "ide",
                    "price": 49.26,
                    "isbn": "398237",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/e0aa8a7c39bffa9b43d4d325c6394b3a7461c7ad.jpg",
                    "created": "2019-02-25T21:28:07.053153Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2080,
            "title": "Mahzun Mezopotamya",
            "author": "Abdulbaki Erdoğmuş",
            "created": "2019-02-25T21:28:07.328615Z",
            "sites": [
                {
                    "id": 2107,
                    "publisher": "Elips Kitapları",
                    "siteUrl": "www.idefix.com/Kitap/Mahzun-Mezopotamya/Edebiyat/Soylesi/urunno=0000000270003",
                    "siteName": "ide",
                    "price": 16.22,
                    "isbn": "308545",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/986ed8aab9562fbc9086f33feaa18cf744e44d17.jpg",
                    "created": "2019-02-25T21:28:07.329743Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2081,
            "title": "Yalnızız",
            "author": "Peyami Safa",
            "created": "2019-02-25T21:28:07.548751Z",
            "sites": [
                {
                    "id": 2108,
                    "publisher": "Ötüken Neşriyat",
                    "siteUrl": "www.dr.com.tr/Kitap/Yalniziz/Edebiyat/Roman/Turk-Klasik/urunno=0000000061061",
                    "siteName": "dr",
                    "price": 24,
                    "isbn": "0000000061061",
                    "category": "Kitap/Edebiyat/Roman/Türk Klasik",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/40bd24ee2be3d54fb46bdb950eb82dd60282e545.jpg",
                    "created": "2019-02-25T21:28:07.550887Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2082,
            "title": "Serpme",
            "author": "Ahmet Demir Atiker",
            "created": "2019-02-25T21:28:07.624339Z",
            "sites": [
                {
                    "id": 2109,
                    "publisher": "SERGİ YAYINEVİ",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/serpme/481848.html&path=128_129",
                    "siteName": "ky",
                    "price": 19.95,
                    "isbn": "9753720250",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/5e2beac8c271b6206678f52b0206007cd65f2d6a.jpg",
                    "created": "2019-02-25T21:28:07.625528Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2083,
            "title": "Kişer Pari Mama",
            "author": "Atlas Arslan",
            "created": "2019-02-25T21:28:07.650775Z",
            "sites": [
                {
                    "id": 2110,
                    "publisher": "Phoenix",
                    "siteUrl": "www.idefix.com/Kitap/Kiser-Pari-Mama/Atlas-Arslan/Edebiyat/Soylesi/urunno=0000000638750",
                    "siteName": "ide",
                    "price": 14.08,
                    "isbn": "316954",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/364c3114a0756321d086a6131bfbf6b24569b5d8.jpg",
                    "created": "2019-02-25T21:28:07.651792Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2084,
            "title": "Kızıl Nehirler",
            "author": "Jean-Christophe...",
            "created": "2019-02-25T21:28:07.879712Z",
            "sites": [
                {
                    "id": 2111,
                    "publisher": "Doğan Kitap",
                    "siteUrl": "www.dr.com.tr/Kitap/Kizil-Nehirler/Edebiyat/Roman/Polisiye/urunno=0000000104321",
                    "siteName": "dr",
                    "price": 26.6,
                    "isbn": "0000000104321",
                    "category": "Kitap/Edebiyat/Roman/Polisiye",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/3d5b2cd8d5aba9dcb8603a636902f218589850d5.jpg",
                    "created": "2019-02-25T21:28:07.883632Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2085,
            "title": "Yoldaşım 40 Yıl",
            "author": "Hulki Aktunç",
            "created": "2019-02-25T21:28:07.899965Z",
            "sites": [
                {
                    "id": 2112,
                    "publisher": "Say Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Yoldasim-40-Yil/Hulki-Aktunc/Edebiyat/Soylesi/urunno=0000000283646",
                    "siteName": "ide",
                    "price": 9.85,
                    "isbn": "394645",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/6bd3abeb669f441c32579f012cb180a6d0f9e3e4.jpg",
                    "created": "2019-02-25T21:28:07.901083Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2828,
                    "publisher": "YAPI KREDİ YAYINLARI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/yoldasim-40-yil/343594.html&path=128_153",
                    "siteName": "ky",
                    "price": 9.03,
                    "isbn": "9750829765",
                    "category": "Hitabet-Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/12b852513c1a8bfd37815ee3ab51cf15619ca349.jpg",
                    "created": "2019-02-25T21:30:53.739776Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2086,
            "title": "Körüklü Çizmeler & Teke'nin Son Beyleri",
            "author": "Mustafa Kahveci",
            "created": "2019-02-25T21:28:08.039918Z",
            "sites": [
                {
                    "id": 2113,
                    "publisher": "SERGİ YAYINEVİ",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/koruklu-cizmeler-amp-tekenin-son-beyleri/481842.html&path=128_129",
                    "siteName": "ky",
                    "price": 32.06,
                    "isbn": "9753720212",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/978f625e23ba920861c64d9b4827bb674c4a3ffd.jpg",
                    "created": "2019-02-25T21:28:08.041068Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2087,
            "title": "Ben İsmet Özel Şair..",
            "author": "Reşit Güngör Kalkan",
            "created": "2019-02-25T21:28:08.225268Z",
            "sites": [
                {
                    "id": 2114,
                    "publisher": "Okur Kitaplığı",
                    "siteUrl": "www.idefix.com/Kitap/Ben-Ismet-Ozel-Sair/Edebiyat/Edebiyatcilar/urunno=0000000343258",
                    "siteName": "ide",
                    "price": 29.56,
                    "isbn": "394406",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/169ab61aadf7f6eb758e91913388e24133a1db0d.jpg",
                    "created": "2019-02-25T21:28:08.226427Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2088,
            "title": "Ruhi Mücerret",
            "author": "Murat Menteş",
            "created": "2019-02-25T21:28:08.232163Z",
            "sites": [
                {
                    "id": 2115,
                    "publisher": "April Yayıncılık",
                    "siteUrl": "www.dr.com.tr/Kitap/Ruhi-Mucerret/Edebiyat/Roman/Turkiye-Roman/urunno=0000000435364",
                    "siteName": "dr",
                    "price": 17.82,
                    "isbn": "0000000435364",
                    "category": "Kitap/Edebiyat/Roman/Türkiye Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/363caf1907d84cc7ab1f6331c9b0f05c2b7d39df.jpg",
                    "created": "2019-02-25T21:28:08.233617Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2089,
            "title": "Ben Buradayım...",
            "author": "Yıldız Ecevit",
            "created": "2019-02-25T21:28:08.465633Z",
            "sites": [
                {
                    "id": 2116,
                    "publisher": "İletişim Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Ben-Buradayim/Edebiyat/Edebiyatcilar/urunno=0000000174077",
                    "siteName": "ide",
                    "price": 37.23,
                    "isbn": "487953",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/9d875efd0f7933a41c4a6698bb87bc3055285c35.jpg",
                    "created": "2019-02-25T21:28:08.466909Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2090,
            "title": "Azatlık",
            "author": "Afak Mesut",
            "created": "2019-02-25T21:28:08.523563Z",
            "sites": [
                {
                    "id": 2117,
                    "publisher": "ZENGİN YAYINCILIK",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/azatlik/481102.html&path=128_129",
                    "siteName": "ky",
                    "price": 15.13,
                    "isbn": "6052315446",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/4463a24ca4cd6b08f6e5c3593fdc582426484b03.jpg",
                    "created": "2019-02-25T21:28:08.524624Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2091,
            "title": "Nasıl Yaşanır ya da Bir Soruda Montaigne'in Hayatı",
            "author": "Sarah Bakewell",
            "created": "2019-02-25T21:28:08.782184Z",
            "sites": [
                {
                    "id": 2119,
                    "publisher": "Domingo Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Nasil-Yasanir-Ya-Da-Bir-Soruda-Montaignein-Hayati/Edebiyat/Edebiyatcilar/urunno=0000000566766",
                    "siteName": "ide",
                    "price": 22.4,
                    "isbn": "435440",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/ea1122bcadc29d22c7b165e9f66f58c81b6fa709.jpg",
                    "created": "2019-02-25T21:28:08.786251Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2092,
            "title": "Ve Dağlar Yankılandı-Midi Boy",
            "author": "Khaled Hosseini",
            "created": "2019-02-25T21:28:08.933838Z",
            "sites": [
                {
                    "id": 2120,
                    "publisher": "Everest Yayınları",
                    "siteUrl": "www.dr.com.tr/Kitap/Ve-Daglar-Yankilandi-Midi-Boy/Edebiyat/Roman/Dunya-Roman/urunno=0001687793001",
                    "siteName": "dr",
                    "price": 23.76,
                    "isbn": "0001687793001",
                    "category": "Kitap/Edebiyat/Roman/Dünya Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/9a81242cb7f85173eb2a06b86555430d1863bbb8.jpg",
                    "created": "2019-02-25T21:28:08.934961Z",
                    "updated": "2019-02-25T21:29:33.565710Z",
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2093,
            "title": "Ruhun Dizelerdeki Yükselişi",
            "author": "Esma Latifoğlu",
            "created": "2019-02-25T21:28:09.022041Z",
            "sites": [
                {
                    "id": 2121,
                    "publisher": "GECE KİTAPLIĞI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/ruhun-dizelerdeki-yukselisi/481207.html&path=128_129",
                    "siteName": "ky",
                    "price": 11.7,
                    "isbn": "6052885529",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/87374bed3434503342179ad3b008613aae1e0819.jpg",
                    "created": "2019-02-25T21:28:09.023180Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2094,
            "title": "Sedad Eldem ile Söyleşiler",
            "author": "Engin Yenal",
            "created": "2019-02-25T21:28:09.069751Z",
            "sites": [
                {
                    "id": 2122,
                    "publisher": "Literatür Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Sedad-Eldem-ile-Soylesiler/Suha-Ozkan/Edebiyat/Soylesi/urunno=0000000596061",
                    "siteName": "ide",
                    "price": 29.32,
                    "isbn": "443618",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/078b2d9c6a9c91516376e8ad3daaa005f40fb53f.jpg",
                    "created": "2019-02-25T21:28:09.071201Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2095,
            "title": "Yedi Yol",
            "author": "İyi Yürekli Bufalo Kartalı",
            "created": "2019-02-25T21:28:10.047650Z",
            "sites": [
                {
                    "id": 2126,
                    "publisher": "Dharma Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Yedi-Yol/Edebiyat/Anlati/urunno=0000000503880",
                    "siteName": "ide",
                    "price": 8.44,
                    "isbn": "343770",
                    "category": "Anlatı",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/98d938d5f29d5a0006582059f4141b1ee315d2b5.jpg",
                    "created": "2019-02-25T21:28:10.048678Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2096,
            "title": "Tanrı’yla Fısıldaşma",
            "author": "Özgür Doğan",
            "created": "2019-02-25T21:28:10.126374Z",
            "sites": [
                {
                    "id": 2127,
                    "publisher": "SOBİL YAYINCILIK",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/tanriyla-fisildasma/481816.html&path=128_129",
                    "siteName": "ky",
                    "price": 11.63,
                    "isbn": "9944271455",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/72d5f9d91151b8a1f9fd7ec5f9e4b8fcbea5939d.jpg",
                    "created": "2019-02-25T21:28:10.127493Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2097,
            "title": "Çanlar Kimin İçin Çalıyor",
            "author": "Ernest Hemingway",
            "created": "2019-02-25T21:28:10.290136Z",
            "sites": [
                {
                    "id": 2128,
                    "publisher": "Bilgi Yayınevi",
                    "siteUrl": "www.dr.com.tr/Kitap/Canlar-Kimin-Icin-Caliyor/Edebiyat/Roman/Dunya-Klasik/urunno=0000000206019",
                    "siteName": "dr",
                    "price": 28,
                    "isbn": "0000000206019",
                    "category": "Kitap/Edebiyat/Roman/Dünya Klasik",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/6148b6413cbb73eee34f5f63c4889d42996830ab.jpg",
                    "created": "2019-02-25T21:28:10.291260Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2098,
            "title": "Sabahattin Kudret Aksal",
            "author": "Muzaffer Uyguner",
            "created": "2019-02-25T21:28:10.380142Z",
            "sites": [
                {
                    "id": 2129,
                    "publisher": "Bilgi Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Sabahattin-Kudret-Aksal/Edebiyat/Edebiyatcilar/urunno=0000000103386",
                    "siteName": "ide",
                    "price": 8.4,
                    "isbn": "360589",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/fd5da3387af771329d77bebbec0f3de7f570a096.jpg",
                    "created": "2019-02-25T21:28:10.381350Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2099,
            "title": "Süleyman Çelebi'den Günümüze 40 Yazar",
            "author": "Recep Arslan",
            "created": "2019-02-25T21:28:10.643601Z",
            "sites": [
                {
                    "id": 2131,
                    "publisher": "Akıl Fikir Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Suleyman-Celebiden-Gunumuze-40-Yazar/Recep-Arslan/Edebiyat/Edebiyatcilar/urunno=0000000653695",
                    "siteName": "ide",
                    "price": 11.96,
                    "isbn": "316203",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/b7c6e9d006eb617483063feef4da36d376709444.jpg",
                    "created": "2019-02-25T21:28:10.645796Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2100,
            "title": "67",
            "author": "Oğuzhan Uğur",
            "created": "2019-02-25T21:28:10.737836Z",
            "sites": [
                {
                    "id": 2132,
                    "publisher": "Hayykitap",
                    "siteUrl": "www.dr.com.tr/Kitap/67/Edebiyat/Roman/Turkiye-Roman/urunno=0001766327001",
                    "siteName": "dr",
                    "price": 11.7,
                    "isbn": "0001766327001",
                    "category": "Kitap/Edebiyat/Roman/Türkiye Roman",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/98f3c20fe1e019af4b573080b846cb982ab9da3a.jpg",
                    "created": "2019-02-25T21:28:10.739089Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2101,
            "title": "Umudun Adı",
            "author": "Özkan Kaya",
            "created": "2019-02-25T21:28:10.825221Z",
            "sites": [
                {
                    "id": 2133,
                    "publisher": "GECE KİTAPLIĞI",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/umudun-adi/481477.html&path=128_129",
                    "siteName": "ky",
                    "price": 18.2,
                    "isbn": "6052886359",
                    "category": "Roman (yerli)",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/0d67d0a70363567f5ddd5d9189816c661e2230ea.jpg",
                    "created": "2019-02-25T21:28:10.826507Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2102,
            "title": "Yaratıcı Aşklar",
            "author": "Lesley McDowell",
            "created": "2019-02-25T21:28:10.861427Z",
            "sites": [
                {
                    "id": 5844,
                    "publisher": "SEL YAYINCILIK",
                    "siteUrl": "https://www.kitapyurdu.com/kitap/yaratici-asklar/263213.html&path=128_138",
                    "siteName": "ky",
                    "price": 12.96,
                    "isbn": "9755705408",
                    "category": "İnceleme",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/cc191a41db77c28ae053688ee34b79e901502083.jpg",
                    "created": "2019-02-25T21:43:01.740431Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2134,
                    "publisher": "Sel Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Yaratici-Asklar/Edebiyat/Edebiyatcilar/urunno=0000000377781",
                    "siteName": "ide",
                    "price": 14.08,
                    "isbn": "322053",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/07a5cabdeb90336e7f352058081a20efcc420bd8.jpg",
                    "created": "2019-02-25T21:28:10.865444Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2103,
            "title": "Birimiz Yalan Söylüyor",
            "author": "Karen M. McManus",
            "created": "2019-02-25T21:28:11.196255Z",
            "sites": [
                {
                    "id": 2135,
                    "publisher": "Yabancı",
                    "siteUrl": "www.dr.com.tr/Kitap/Birimiz-Yalan-Soyluyor/Edebiyat/Roman/Polisiye/urunno=0001736917001",
                    "siteName": "dr",
                    "price": 24.6,
                    "isbn": "0001736917001",
                    "category": "Kitap/Edebiyat/Roman/Polisiye",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/e19763252ebccce9b6c25bdd5e206ff46c008411.jpg",
                    "created": "2019-02-25T21:28:11.197336Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2104,
            "title": "Umut Burnundan Dolaşarak - Ömer Uluç ile Söyleşiler",
            "author": "Ayşegül Sönmez",
            "created": "2019-02-25T21:28:11.418007Z",
            "sites": [
                {
                    "id": 2136,
                    "publisher": "Alef",
                    "siteUrl": "www.idefix.com/Kitap/Umut-Burnundan-Dolasarak-Omer-Uluc-Ile-Soylesiler/Edebiyat/Soylesi/urunno=0000000445582",
                    "siteName": "ide",
                    "price": 14.9,
                    "isbn": "397942",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/cc362c54b0ffba8f4dbe55d5de12e1e647e367bc.jpg",
                    "created": "2019-02-25T21:28:11.419586Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2107,
            "title": "Türkiye'ye Sözüm Var - Kemal Kılıçdaroğlu",
            "author": "Oktay Ekşi",
            "created": "2019-02-25T21:28:11.937437Z",
            "sites": [
                {
                    "id": 2139,
                    "publisher": "Literatür Yayıncılık",
                    "siteUrl": "www.idefix.com/Kitap/Turkiyeye-Sozum-Var-Kemal-Kilicdaroglu/Kemal-Kilicdaroglu/Edebiyat/Soylesi/urunno=0000000365500",
                    "siteName": "ide",
                    "price": 9.85,
                    "isbn": "399551",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/f475ff0c5c995e122e6a46f3bb1bf5252d9f6594.jpg",
                    "created": "2019-02-25T21:28:11.939254Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2110,
            "title": "Yeni Yüzyılın Eşiğinde",
            "author": "Eric Hobsbawm",
            "created": "2019-02-25T21:28:12.524455Z",
            "sites": [
                {
                    "id": 2142,
                    "publisher": "Yordam Kitap",
                    "siteUrl": "www.idefix.com/Kitap/Yeni-Yuzyilin-Esiginde/Edebiyat/Soylesi/urunno=0000000261437",
                    "siteName": "ide",
                    "price": 11.26,
                    "isbn": "347372",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/88158c73be8f3feaa4f549629bbc540619d2ddeb.jpg",
                    "created": "2019-02-25T21:28:12.525931Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2111,
            "title": "Loti'yi Anlamak Pierre Loti'nin Doğusu",
            "author": "Ali Volkan Erdemir",
            "created": "2019-02-25T21:28:12.797474Z",
            "sites": [
                {
                    "id": 2143,
                    "publisher": "Kurgu Kültür",
                    "siteUrl": "www.idefix.com/Kitap/Lotiyi-Anlamak-Pierre-Lotinin-Dogusu/Ali-Volkan-Erdemir/Edebiyat/Edebiyatcilar/urunno=0000000408019",
                    "siteName": "ide",
                    "price": 17.59,
                    "isbn": "380481",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/154f0b33c8912b99c1708a9b2bd909de86b891b2.jpg",
                    "created": "2019-02-25T21:28:12.798601Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2112,
            "title": "Edebiyatın Ustaları",
            "author": "Yusuf Tosun",
            "created": "2019-02-25T21:28:13.231879Z",
            "sites": [
                {
                    "id": 2144,
                    "publisher": "Çıra Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Edebiyatin-Ustalari/Yusuf-Tosun/Edebiyat/Edebiyatcilar/urunno=0000000676469",
                    "siteName": "ide",
                    "price": 10.81,
                    "isbn": "522420",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/cc479723ce0e83d9327c4b2342c5a233844645ac.jpg",
                    "created": "2019-02-25T21:28:13.233079Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2115,
            "title": "Edebiyatçılar Geçiyor",
            "author": "Halit Fahri Ozansoy",
            "created": "2019-02-25T21:28:13.509054Z",
            "sites": [
                {
                    "id": 2147,
                    "publisher": "Dergah Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Edebiyatcilar-Geciyor/Halit-Fahri-Ozansoy/Edebiyat/Edebiyatcilar/urunno=0000000687919",
                    "siteName": "ide",
                    "price": 18.29,
                    "isbn": "534040",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/cc50fe0f795b8277747fa45569379a2b4c0c5ec4.jpg",
                    "created": "2019-02-25T21:28:13.510338Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2116,
            "title": "Picasso Konuşuyor",
            "author": "Mehmet Yılmaz",
            "created": "2019-02-25T21:28:14.148986Z",
            "sites": [
                {
                    "id": 2148,
                    "publisher": "Ütopya Yayınevi",
                    "siteUrl": "www.idefix.com/Kitap/Picasso-Konusuyor/Mehmet-Yilmaz/Edebiyat/Soylesi/urunno=0000000105596",
                    "siteName": "ide",
                    "price": 17.59,
                    "isbn": "365747",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/7279327167822601daff20a8d0907105ae33352e.jpg",
                    "created": "2019-02-25T21:28:14.150489Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2117,
            "title": "Türkiye'de Sanatçı Olmak",
            "author": "Ahmet Şafak",
            "created": "2019-02-25T21:28:14.528929Z",
            "sites": [
                {
                    "id": 2149,
                    "publisher": "Küsena Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Turkiyede-Sanatci-Olmak/Ahmet-Safak/Edebiyat/Soylesi/urunno=0000000612286",
                    "siteName": "ide",
                    "price": 11.84,
                    "isbn": "341362",
                    "category": "Söyleşi",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/64a7fcd203e0fa869dafeada2b0654acddf8dd3c.jpg",
                    "created": "2019-02-25T21:28:14.531523Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2119,
            "title": "Ezra Pound",
            "author": "Alec Marsh",
            "created": "2019-02-25T21:28:14.758545Z",
            "sites": [
                {
                    "id": 2151,
                    "publisher": "Yapı Kredi Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Ezra-Pound/Edebiyat/Edebiyatcilar/urunno=0000000665041",
                    "siteName": "ide",
                    "price": 13.6,
                    "isbn": "508829",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/353ca5d05f1ed0bba998ecdc8e4b9de159f13d77.jpg",
                    "created": "2019-02-25T21:28:14.760795Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2121,
            "title": "Oğuz Atay Kitabı",
            "author": "Sibel Atagün",
            "created": "2019-02-25T21:28:15.224870Z",
            "sites": [
                {
                    "id": 10865,
                    "publisher": "İzdiham",
                    "siteUrl": "www.dr.com.tr/Kitap/Oguz-Atay-Kitabi-Clz/Edebiyat/Edebiyatcilar/urunno=0001743516001",
                    "siteName": "dr",
                    "price": 16.61,
                    "isbn": "0001743516001",
                    "category": "Kitap/Edebiyat/Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/de4054d93e7988f0a9a3c5f9eb75c2a0ec747589.jpg",
                    "created": "2019-02-25T22:05:34.636297Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                },
                {
                    "id": 2153,
                    "publisher": "İzdiham",
                    "siteUrl": "www.idefix.com/Kitap/Oguz-Atay-Kitabi-Clz/Edebiyat/Edebiyatcilar/urunno=0001743516001",
                    "siteName": "ide",
                    "price": 16.19,
                    "isbn": "931739",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/fa6ee69efab3edf01c078f0cc36d70637b68eeef.jpg",
                    "created": "2019-02-25T21:28:15.226246Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        },
        {
            "id": 2123,
            "title": "Avuçlarıma Sığmıyor Yıldızlar",
            "author": "Cahit Sıtkı Tarancı",
            "created": "2019-02-25T21:28:15.940236Z",
            "sites": [
                {
                    "id": 2155,
                    "publisher": "Can Yayınları",
                    "siteUrl": "www.idefix.com/Kitap/Avuclarima-Sigmiyor-Yildizlar/Edebiyat/Edebiyatcilar/urunno=0000000698733",
                    "siteName": "ide",
                    "price": 13.3,
                    "isbn": "552511",
                    "category": "Edebiyatçılar",
                    "imageUrl": "https://s3.eu-central-1.amazonaws.com/haqm/c5811cf43af95436df60fe8a2d26dd80a37708b4.jpg",
                    "created": "2019-02-25T21:28:15.941911Z",
                    "updated": null,
                    "bookId": null,
                    "bookTitle": null
                }
            ]
        }
    ]
;




class App extends Component {
  render() {
      books.map((book) => {
         book.width = 0.7;
         book.height = 1.0;
      });

    return (
      <div className="App">
        <header className="App-header">
            <Gallery photos={books} />
        </header>
      </div>
    );
  }
}

export default App;
