let saat = document.querySelector(".saat");
let tarih = document.querySelector(".tarih");
let vapur_saat = document.querySelector(".vapur_saat");
let yakin_saat = document.querySelector(".yakin_saat");
let sefer_goster = document.querySelector(".sefer_goster");
let enyakin_saat = document.querySelector(".enyakin_saat");

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

// Sefer Saatleri

function dondur() {
  let arr = [];
  for (var i = 6; i < 24; i++) {
    for (var j = 0; j < 60; j++) {
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
  let date = new Date('8/24/2010 22:02:10');

  date = date.toString().split(" ");
  date = date[4].slice(0, 5);
  saat_dizi.unshift(date);
  saat_dizi = saat_dizi.sort();
  index = saat_dizi.indexOf(date);
  if (index === 0) {
    return false;
  } else {
    return saat_dizi[index + 1];
  }
}
function istencikis() {
  a = dondur().reverse();
  hesap = hesap(a);
  if (hesap === false) {
    div = document.createElement("div");
    div.setAttribute("class", "text-center border rounded bg-danger mt-3 p-2");
    hesap = `Bugünlük sefer bitti `;
    div.appendChild(document.createTextNode(hesap));
    yakin_saat.appendChild(div);
  } else {
    div = document.createElement("div");
    div.setAttribute("class", "text-center border rounded bg-warning mt-3 p-2");
    sonuc = `En Yakın Sefer Saat =  ${hesap}`;
    div.appendChild(document.createTextNode(sonuc));
    yakin_saat.appendChild(div);
  
  let varissaat = Number(hesap.split(":")[0]);
  console.log(varissaat);
  let varisdakika = Number(hesap.split(":")[1]);
  console.log(varisdakika);
  varisdakika = varisdakika + 20;
              if (varisdakika > 60) {
                varissaat = varissaat + 1;
                varisdakika = varisdakika - 60;
                varis=String(varissaat)+":"+String(varisdakika);
                div = document.createElement("div");
                div.setAttribute("class", "text-center border rounded bg-info mt-3 p-2 text-light");
                div.appendChild(document.createTextNode(`Tahmini varış = ${varis}`));
                yakin_saat.appendChild(div);
              }
              
              else{
                varis=String(varissaat)+":"+String(varisdakika);
                div = document.createElement("div");
                div.setAttribute("class", "text-center border rounded bg-info mt-3 p-2 text-light");
                div.appendChild(document.createTextNode(`Tahmini varış =  ${varis}`));
                yakin_saat.appendChild(div);
              }
            }
}
