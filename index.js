let saat = document.querySelector(".saat");
let tarih = document.querySelector(".tarih");
let vapur_saat = document.querySelector(".vapur_saat");
let yakin_saat = document.querySelector(".yakin_saat");
let sefer_goster = document.querySelector(".sefer_goster");
let enyakin_saat = document.querySelector(".enyakin_saat");

function deniz_ulasimi(turu, kisi_kapasite, sefer_suresi) {
  this.turu = turu;
  this.kisi_kapasite = kisi_kapasite;
  this.sefer_suresi = sefer_suresi;
  this.kisi_kapasite_kontrol = function () {
    if (this.turu === "vapur") {
      if (this.kisi_kapasite > 200) {
        return ("çok kalabalık binemezsin");
      }
      else{
        return ("uygun");
      }
    }
    else if(this.turu==="motor"){
      if (this.kisi_kapasite > 100) {
        return ("çok kalabalık binemezsin");
      }
      else{
        return ("uygun");
      }
    }
  };
}


let vapur=new deniz_ulasimi("vapur",100,20);
console.log(vapur.kisi_kapasite_kontrol( ));


addListener();

//Listener Ekleme

function addListener() {
  vapur_saat.addEventListener("click", vapursaat);
  enyakin_saat.addEventListener("click", istencikis);
}

// Tarih Bilgisi Yazdırma İşlemi

function show() {
  let date = new Date();
  let Month = date.getMonth() + 1;
  let Day = date.getDate();
  let Year = date.getFullYear();
  tarih.innerHTML = `${Day}/${Month}/${Year} <i class="far fa-calendar-alt text-danger"></i>`;
  tarih.style.fontSize = "20px";
  date = date.toString();
  date = date.split(" ");
  saat.innerHTML = `${date[4]} <i class="far fa-clock text-danger"></i>`;
  saat.style.fontSize = "20px";

  setTimeout(show, 1000);
}

show();

// Vapur-Motor saatleri

function dondur() {
  let arr = [];
  for (var i = 6; i < 24; i++) {
    for (var j = 00; j < 60; j++) {
      if (j == 0 || j == 15 || j == 45) {
        var gelensaat = String(i);
        var gelendakika = String(j);
        sefersaat = gelensaat + ":" + gelendakika;
        arr.unshift(sefersaat);
      }
    }
  }

  return arr;
}

function vapursaat() {
  a = dondur().reverse();
  div = document.createElement("div");
  div.setAttribute("class", "w-100  mt-2 text-center");
  a.forEach(function (item) {
    span = document.createElement("span");
    span.setAttribute("class", "badge badge-success w-25 p-2 m-2");
    span.appendChild(document.createTextNode(item));
    div.appendChild(span);
    sefer_goster.appendChild(div);
  });
}

function hesap(saat_dizi) {
  let date = new Date(" 8/24/2010 15:16:10");

  date = date.toString().split(" ");
  date = date[4].slice(0, 5);
  saat_dizi.unshift(date);
  saat_dizi = saat_dizi.sort();
  console.log(saat_dizi);
  index = saat_dizi.indexOf(date);
  return saat_dizi[index + 1];
}
function istencikis() {
  a = dondur().reverse();
  hesap = hesap(a);
  console.log(hesap);
  div = document.createElement("div");
  div.setAttribute("class", "text-center border rounded bg-warning mt-3");
  hesap = `En Yakın Sefer Saat : ${hesap}`;
  div.appendChild(document.createTextNode(hesap));
  yakin_saat.appendChild(div);
}
