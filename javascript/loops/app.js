console.log("loops")


/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

//! TEMEL DÖNGÜLER

//? FOR

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