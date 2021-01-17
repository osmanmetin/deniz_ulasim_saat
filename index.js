//Htmlden aldım

let saat1 = document.querySelector(".saat");
let tarih = document.querySelector(".tarih");
let vapur_saat = document.querySelector(".vapur_saat");
let yakin_saat = document.querySelector(".yakin_saat");
let sefer_goster = document.querySelector(".sefer_goster");
let enyakin_saat = document.querySelector(".enyakin_saat");
let iskele = document.querySelector("#iskele");
let tablo = document.querySelector(".tablo");
let thead_success =document.querySelector(".thead-success ");

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
  saat1.innerHTML = `${date[4]} <i class="far fa-clock text-danger"></i>`;
  saat1.style.fontSize = "20px";
  setTimeout(show, 1000);
}

show();

let arr = ["6,0", "6,15", "6,30"];

// Sefer Saatleri
function dondur() {
  for (var i = 0; i < 11; i++) {
    arr1 = arr.slice(arr.length - 3, arr.length);
    arr1 = kadikoy(arr1);
    arr2 = arr.slice(arr1.length - 3, arr1.length);
    arr2 = besiktas(arr2);
  }
  return arr;
}

function kadikoy(saat) {
  saat.forEach(function (item) {
    item = item.split(",");
    item = item.map(function (element) {
      return (element = Number(element));
    });
    item[1] = item[1] + 45;

    if (item[1] >= 60) {
      item[1] = item[1] - 60;
      item[0]++;
    }

    item = String(item);
    arr.push(item);
  });

  return arr;
}

function besiktas(saat) {
  saat.forEach(function (item) {
    item = item.split(",");
    item = item.map(function (element) {
      return (element = Number(element));
    });
    item[1] = item[1] + 45;

    if (item[1] >= 60) {
      item[1] = item[1] - 60;
      item[0]++;
    }

    item = String(item);
    arr.push(item);
  });

  return arr;
}

// Sefer saatleri gösteren buton event

function vapursaat() {
  thead_success.setAttribute("class","thead-success d-inlineblock")
  items = dondur();
  html = " ";
  iskele = ["Beşiktaş", "Kadıköy"];
  for (var i = 0; i < items.length; i = i + 3) {
    if (i % 2 == 0) {
      html += `
      <tbody >
        <tr class="bg-danger" >
          <td >${iskele[0]}</td>
          <td>${items[i]}</td>
          <td>${items[i + 1]}</td>
          <td>${items[i + 2]}</td>
        </tr>
      </tbody>`;
      tablo.innerHTML = html;
    } else {
      html += `<tbody >
        <tr>
          <td >${iskele[1]}</td>
          <td>${items[i]}</td>
          <td>${items[i + 1]}</td>
          <td>${items[i + 2]}</td>
        </tr>
      </tbody>`;
      tablo.innerHTML = html;
    }
  }
}

//En yakın seferin bulınması
function hesap(saat_dizi) {
  
  let array=[];
  let array1=[];
  let date = new Date();
  date = date.toString().split(" ");
  date = date[4].slice(0, 5);
  date = date.replace(":", ",");
  for (var i = 0; i < saat_dizi.length; i=i+3) {
    if (i % 2 == 0) {
      array.push(saat_dizi[i]);
      array.push(saat_dizi[i+1]);
      array.push(saat_dizi[i+2]);
    } else {
      array1.push(saat_dizi[i]);
      array1.push(saat_dizi[i+1]);
      array1.push(saat_dizi[i+2]);
    }
  }

  
  
  if(iskele.value==="1"){
   
    array.unshift(date);
    saat_dizi1 = array.sort();
    index = saat_dizi1.indexOf(date);
    if (index === 0) {
      return false;
    } else {
      return saat_dizi1[index + 1];
    }

  }else if(iskele.value=="2"){
  
    array1.unshift(date);

    saat_dizi2 = array1.sort();
    console.log(array1);
    index = saat_dizi2.indexOf(date);
    if (index === 0) {
      return false;
    } else {
      return saat_dizi2[index + 1];
    }

  }
 
}

//İşten çıkış yaptım butonu

function istencikis() {
  a = dondur();
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

    
  }
}
