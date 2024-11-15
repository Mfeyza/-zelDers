console.log("loops")


/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

//! TEMEL DÖNGÜLER

//? FOR DÖNGÜSÜ

//*for(başlangıç,koşul,sayaç güncelleme){
//*Tekrarlı güncellenecek kod bloğu}

//'başlangıç: döngünün başlangıç değerni ayarlar
//'koşul : döngü her çalıştığında bu koşula göre çalışır
//'sayaç güncelleme: döngü her bittiğinde sayaç değişkeni güncellenir

for(let i = 0 ; i<5 ; i++){
    console.log("tuba kelimesini konsola 5 kez yazdır")
}

//? let i = 0 : Sayaç değişkenini 0 dan başlatır
//? i<5 koşulum 5 den küçükk olduğu sürece doğrudur.
//? i++ : her döngüde i birer arttırılır


//! 1-10 arasındaki tek sayıları yazdır

for(let i =1 ; i<=10; i += 2){
    console.log(i)
}

//! 20 de 1 e kadar çift sayıları geriye doğru yazdır
for(let i =20 ; i >1; i-=2 ){
    console.log(i)
}
for(let i =20 ; i >1 ; i--){
    if(i %2 === 0){
        console.log(i)
    }
}

//!Dizi elemanlarını sırasıyla yazdır
const dizi=["ayakkabı", "elbise", "pantolon", "şapka"]
for(let i = 0; i < dizi.length; i++){
    console.log(dizi[i])
}

//! Ekrana ters bir üçgen çizdir
let n=6;
for(let i =n; i>=1; i--){ //*i başlangıçta 6 her adımda 1 azalcak
 let satır=""; //* her satır için boş bir string
 for(let j =1; j<=i ; j++){ //*her satırda i kadar yıldız ekle
    satır +="*"
 }
 console.log(satır)
}

//! 1 ile 20 arasındaki asal sayıları bulalım
 let f= 20 //* 20 ye kadar sayılar

 for(let i = 2 ; i <=f ; i++) {   //* 2 den başla çünkü 1 asal sayı değil
  let asal= true //* asallık kontrolü için ilk verilen değer true
  for(let j=2 ; j<i; j++){ //? 2 den i-1 e kadar bölünebilkirlik kontrolü
    if(i %j ===0){
        asal=false
        break; //!daha fazla kontrol etmeye gerek yok döngüyü kır
    }
  }
  if(asal){
    console.log(i)
  }
 }
 //! bir sayı verelim bu sayının basamaklarının toplamını bulalım

 let sayi=565685//* toplamını bulmak istediğimiz sayı
 let toplam=0 //* Basamak toplamını saklamak için başlangıç değeri

 for(let i = sayi ; i>0 ; i=Math.floor(i/10)){
    toplam += i % 10
 }
 console.log(toplam)


 //?WHİLE DÖNGÜSÜ

 //* While döngüsü , koşul doğru olduğu sürece devam eder
 //!while(koşul){}

//  let i = 0;
//  while(i<10){
//     console.log("tuba")
//     i++;
//  }

 //!For Döngüsü ile While Döngüsü Arasındaki Farklar

//? for döngüsü ve while döngüsü, her ikisi de tekrar eden işlemleri gerçekleştirmek için kullanılır, ancak aralarında bazı farklar vardır:

//?for döngüsü, genellikle belirli bir sayı kadar tekrar edilmesi gereken işlemler için kullanılır. Başlangıç değeri, koşul ve sayaç güncellemesi bir arada tanımlanır.
//? while döngüsü, belirli bir koşul doğru olduğu sürece çalışmaya devam eder ve başlangıç değeri ile sayaç güncellemesi döngü dışında tanımlanır.
//? for döngüsü, sayaç güncellemesi ve koşul kontrolü bir arada olduğundan okunması ve anlaşılması genellikle daha kolaydır.
//! while döngüsü, koşul kontrolünü daha esnek yapar ve döngü içinde herhangi bir noktada koşul kontrolü yapılabilir. ÖNEMLİ

//! 10 dan 1 e kadar geriye doğru sayan while döngüsü
let j=10;
while(j >1){
    console.log(j)
    j--;
}

//?Do.. While döngüsü

//! while döngüsünde döngü bloklarının en az 1 kez çalıştırılması için while koşulunun true getirmesi gerekir ancak do while döngüsünde koşul false da olsa 1 kez çalışır.

// do{
//        }while{koşul}

let t = 6 ;
do {
 console.log("object")
 t++;
}while(t<5)

//? Do…While Döngüsü ile While Döngüsü Arasındaki Farklar
//? Çalıştırma Sırası:
//*while döngüsünde, koşul kontrol edilmeden kod bloğu çalıştırılmaz.
//*do...while döngüsünde, koşul kontrol edilmeden kod bloğu en az bir kez çalıştırılır.
//?Kullanım Senaryoları:
//*while döngüsü, belirli bir koşulun sağlandığı sürece tekrarlanan işlemler için kullanılır.
//*do...while döngüsü, kod bloğunun en az bir kez çalışması gerektiğinde kullanılır.

//? BREAK VE CONTİNUE İFADELERİ
//!Break ifadesi döngüyü hemen sonlandırmak için kullanılır. Belirli bir koşul sağlatıp döngüyü bitirmek istediğin zaman kullanırsın.

// let ogrenciler= ["Rabia", "Mustafa","Hüseyin","Furkan","Tuba"];
// let i = 0;

// do {
//     if(ogrenciler[i]==="Hüseyin"){
//         console.log("Hüseyin bulundu");
//         break;
//     }
//     console.log(ogrenciler[i]);
//     i++;
// }while(i<ogrenciler.length)

// //! Continue ifadesi döngünün mevcut adımını atlar ve sonraki adıma geçer

let ögrenciler= ["Rabia", "Mustafa","Hüseyin","Furkan","Tuba"];
let p = 0;

do {
    if(ögrenciler[p]==="Hüseyin"){
       p++;
       continue;
    
    }
    console.log(ögrenciler[p]);
    p++;
}while(p < ögrenciler.length)

    //? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not = +prompt("lütfen notunuzu giriniz")
while(not<0 || not > 100){
    console.log("Not 0 ile 100 arasında olmalıdır")
    not=+prompt("yeniden giriniz")
}
console.log(not)