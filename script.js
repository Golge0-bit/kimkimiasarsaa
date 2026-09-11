const kategoriler = [
  "Meyve", "Hayvan", "Şehir", "Eşya", "Doğa", 
  "Spor", "Film", "Müzik", "Ülke", "Meslek", 
  "Yemek", "Dizi", "Bitki", "Tarih", 
  "Bilim", "Oyun", "Marka", "Sanat",
  "Tarihi Kişi", "Mitoloji", "Teknoloji", "Edebiyat", "Coğrafya", "Gök Cisimleri", "Moda",
  "Diğer"
];

const RENKLER = [
  "#c0392b", "#e67e22", "#f1c40f", "#27ae60", "#1abc9c",
  "#2980b9", "#8e44ad", "#e84393", "#34495e", "#d35400"
];

const mesajKutu = {
  dogruHarf: [
    "Harika bir hamle! Doğru harfi buldun",
    "İşte bu! Adım adım zafere gidiyorsun",
    "Nokta atışı bir harf seçimi!",
    "Süpersin, kelime çözülmeye başladı!",
    "Gözlerinden kaçmıyor, tebrikler!",
    "Çok iyi gidiyorsun, aynen devam!",
    "Tahta aydınlanıyor, helal olsun!",
    "Tam isabet! Karşı taraf endişeli",
    "Harf cuk oturdu!",
    "Beynin cayır cayır çalışıyor!",
    "Kelime şu an sana teslim oldu!",
    "Rakipten derin bir iç çekiş geldi...",
    "Doğru iz üzerindesin!",
    "Tıkır tıkır işliyor zekan!"
  ],
  yanlisHarf: [
    "Eyvah! Bu harf kelimede yoktu",
    "Ufak bir kaza, odaklanmaya devam et!",
    "Aman dikkat, ipler geriliyor!",
    "Yanlış tercih ama pes etmek yok!",
    "Boşa kurşun sıktın ama sorun değil!",
    "Iska geçtin! Bir dahakine daha dikkatli seç",
    "Soğukkanlılığını koru, harfleri iyi süz!",
    "Yanlış harf, ama moral bozmak yok!",
    "Cevap bu değildi dostum!",
    "Harf boşa gitti, puan tehlikede!",
    "Hatalar tecrübedir, sonraki harfe odaklan!"
  ],
  kritikDurum: [
    "DİKKAT! Son şansların!",
    "Tehlike çanları çalıyor, çok dikkatli seç!",
    "Bıçak sırtındasın, hata yapma lüksün kalmadı!",
    "Son çırpınışlar! Odaklan ve kelimeyi bitir!",
    "Kritik seviye! Her harf artık altın değerinde!"
  ],
  kazanma: [
    "MÜKEMMEL! Kelimeyi tamamladın!",
    "İşte şampiyon hamlesi! Puanları kaptın!",
    "Akıl dolu bir oyunla zafere ulaştın!",
    "Zafer gecesinin mimarı sensin!"
  ],
  kaybetme: [
    "Nefesin yetmedi, hakkın bitti!",
    "Sağlık olsun, sonraki elde intikamını alırsın!",
    "Kelime seni biraz zorladı sanırım",
    "Bir sonraki tur senin devrin olacak, üzülme!"
  ],
  pasGecti: [
    "Pas hakkını kullandın, tur sırası rakibe devrediliyor!",
    "Stratejik bir pas hamlesi! Sıra diğer takıma geçti."
  ],
  sonucKazanma: [
    "ŞAMPİYON! Harika bir oyun çıkardın!",
    "Zafer Senindir! Zekanla fark yarattın!",
    "Tebrikler! Rakiplerini geride bıraktın!",
    "Kupa Senin! Muhteşem galibiyet!"
  ],
  sonucKaybetme: [
    "Sağlık olsun! Bir dahakine zafere ulaşırsın.",
    "İkinci oldun ama harika mücadele ettin!",
    "Pes etmek yok! Rövanşta intikamını al!",
    "Güzel mücadeleydi, tebrikler!"
  ],
  sonucBerabere: [
    "Dostluk Kazandı! İnanılmaz dostça bir mücadele!",
    "Eşitlik Bozulmadı! İki takım da harikaydı!",
    "Tam Bir Beraberlik! İki taraf da devleşti!"
  ]
};

const harfler = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");
const maxHak = 10;
const MAX_TAHMIN_HAKKI = 3;
const MAX_PAS_HAKKI = 3;
const MAX_TABAN_PUAN = 10;

// DOM Elementleri
const girisEl = document.getElementById("giris");
const kurulumEl = document.getElementById("kurulum");
const introEl = document.getElementById("intro");
const oyunEl = document.getElementById("oyun");
const sonucEl = document.getElementById("sonuc");

const btnOyunaBasla = document.getElementById("btn-oyuna-basla");
const btnKurallar = document.getElementById("btn-kurallar");
const btnCikis = document.getElementById("btn-cikis");
const kuralModal = document.getElementById("kural-modal");
const btnKuralKapat = document.getElementById("btn-kural-kapat");
const btnKurulumGeri = document.getElementById("btn-kurulum-geri");

const muzikSesSlider = document.getElementById("muzik-sesi");
const efektSesSlider = document.getElementById("efekt-sesi");

const kurulumForm = document.getElementById("kurulum-form");
const kurulumHata = document.getElementById("kurulum-hata");

const introForm = document.getElementById("intro-form");
const kategoriKutu = document.getElementById("kategori-secenekleri");
const ozelKategoriEl = document.getElementById("ozel-kategori");
const kelimeGiris = document.getElementById("kelime-giris");
const introHata = document.getElementById("intro-hata");
const introIsim = document.getElementById("intro-isim");
const introSoran = document.getElementById("intro-soran");
const introTur = document.getElementById("intro-tur");

const kelimeEl = document.getElementById("kelime");
const kategoriEl = document.getElementById("kategori");
const kelimeSayisiEl = document.getElementById("kelime-sayisi");
const harfSayisiEl = document.getElementById("harf-sayisi");
const potansiyelPuanEl = document.getElementById("potansiyel-puan");
const siraIsim = document.getElementById("sira-isim");
const oyunTur = document.getElementById("oyun-tur");
const klavyeEl = document.getElementById("klavye");
const sonrakiBtn = document.getElementById("sonraki-btn");

const btnBildi = document.getElementById("btn-bildi");
const btnTahmin = document.getElementById("btn-tahmin");
const btnPas = document.getElementById("btn-pas");
const tahminHakSayisiEl = document.getElementById("tahmin-hak-sayisi");
const pasHakSayisiEl = document.getElementById("pas-hak-sayisi");

const kazananBaslik = document.getElementById("kazanan-baslik");
const yenidenBasla = document.getElementById("yeniden-basla");

// Oyun Durum Değişkenleri
let secilenKategori = kategoriler[0];
let takimlar = [];
let renkSecimleri = [0, 1];
let toplamTur = 3;
let siraIndex = 0;
let oynananTur = 0;
let secilen = null;
let dogruHarfler = new Set();
let acilanHarfSayisi = 0;
let yanlisSayisi = 0;
let mevcutPuan = 0;
let bitti = false;

// SES AYARLARI & MÜZİK (voise klasörü)
const arkaPlanMuzigi = new Audio("voise/muzik.mp3");
arkaPlanMuzigi.loop = true;

const sesEfektleri = {
  buton: new Audio("voise/buton.mp3"),
  dogru: new Audio("voise/dogru.mp3"),
  pas: new Audio("voise/pas.mp3"),
  yanlis: new Audio("voise/yanlis.mp3"),
  dogrutus: new Audio("voise/dogrutus.mp3"),
  yanlistus: new Audio("voise/yanlistus.mp3")
};

// Başlangıç Ses Seviyeleri (%5 Müzik, %50 Efekt)
let muzikSeviyesi = 0.05;
let efektSeviyesi = 0.50;

if (muzikSesSlider) {
  muzikSesSlider.value = 5;
}
if (efektSesSlider) {
  efektSesSlider.value = 50;
}

arkaPlanMuzigi.volume = muzikSeviyesi;

// Müzik başlatma fonksiyonu
function muzigiBaslat() {
  if (arkaPlanMuzigi.paused) {
    arkaPlanMuzigi.play().catch(() => {});
  }
}

// Ses efekti çalma fonksiyonu
function sesEfectiCal(tip) {
  const ses = sesEfektleri[tip];
  if (ses) {
    ses.volume = efektSeviyesi;
    ses.currentTime = 0;
    ses.play().catch(() => {});
  }
}

// Tıklama sesini klavye harfleri HARİÇ tüm butonlara ekleme
document.addEventListener("click", (e) => {
  muzigiBaslat();
  const btn = e.target.closest("button");
  if (btn && !btn.dataset.harf) {
    sesEfectiCal("buton");
  }
});

function rastgeleMesaj(dizi) {
  return dizi[Math.floor(Math.random() * dizi.length)];
}

function normalHarf(harf) {
  return harf.toLocaleUpperCase("tr-TR");
}

function noktalamaMi(karakter) {
  return ".!?".includes(karakter);
}

function otomatikMi(karakter) {
  return karakter === " " || noktalamaMi(karakter);
}

function harfMi(karakter) {
  return harfler.includes(karakter);
}

function kelimeTemizle(metin) {
  return metin
    .trim()
    .replace(/\s+/g, " ")
    .split("")
    .map((karakter) => {
      if (karakter === " " || noktalamaMi(karakter)) return karakter;
      return normalHarf(karakter);
    })
    .join("");
}

function kelimeSayisi(metin) {
  return metin.trim().split(" ").filter(Boolean).length;
}

function harfSayisi(metin) {
  return metin.split("").filter(harfMi).length;
}

function zeminUygula(hex) {
  document.body.style.setProperty("--bg", hex);
}

function varsayilanZemin() {
  document.body.classList.add("kurulum");
  document.body.style.removeProperty("--bg");
}

function cozenTakim() {
  return takimlar[siraIndex];
}

function soranTakim() {
  return takimlar[1 - siraIndex];
}

function turMetni() {
  const turNo = Math.floor(oynananTur / 2) + 1;
  return `Tur ${turNo} / ${toplamTur}`;
}

function ekranGoster(ad) {
  girisEl.classList.toggle("gizli", ad !== "giris");
  kurulumEl.classList.toggle("gizli", ad !== "kurulum");
  introEl.classList.toggle("gizli", ad !== "intro");
  oyunEl.classList.toggle("gizli", ad !== "oyun");
  sonucEl.classList.toggle("gizli", ad !== "sonuc");
  document.body.classList.toggle("kurulum", ad === "giris" || ad === "kurulum" || ad === "sonuc");
}

function takimRenkleriniGuncelle() {
  const root = document.documentElement;
  const renk1 = RENKLER[renkSecimleri[0]];
  const renk2 = RENKLER[renkSecimleri[1]];

  root.style.setProperty("--takim1-renk", renk1);
  root.style.setProperty("--takim2-renk", renk2);
}

function renkKutulari() {
  [1, 2].forEach((no, takim) => {
    const kutu = document.getElementById(`renkler-${no}`);
    if (!kutu) return;

    kutu.innerHTML = "";
    RENKLER.forEach((renkHex, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.style.background = renkHex;
      if (renkSecimleri[takim] === index) btn.classList.add("secili");
      btn.addEventListener("click", () => {
        if (renkSecimleri[1 - takim] === index) {
          kurulumHata.textContent = "İki takım aynı rengi seçemez.";
          return;
        }
        kurulumHata.textContent = "";
        renkSecimleri[takim] = index;
        renkKutulari();
        takimRenkleriniGuncelle();
      });
      kutu.appendChild(btn);
    });
  });
  takimRenkleriniGuncelle();
}

function kategoriButonlari() {
  if (!kategoriKutu) return;

  if (ozelKategoriEl) {
    ozelKategoriEl.placeholder = "Kategorin";
  }

  kategoriKutu.innerHTML = "";
  kategoriler.forEach((ad) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = ad;
    if (ad === secilenKategori) btn.classList.add("secili");
    btn.addEventListener("click", () => {
      secilenKategori = ad;
      
      if (ad === "Diğer") {
        kategoriKutu.appendChild(ozelKategoriEl);
        ozelKategoriEl.classList.remove("gizli");
        ozelKategoriEl.focus();
      } else {
        ozelKategoriEl.classList.add("gizli");
      }

      kategoriKutu.querySelectorAll("button").forEach((el) => {
        el.classList.toggle("secili", el === btn);
      });
    });
    kategoriKutu.appendChild(btn);
  });
}

function mesajGuncelle(metin) {
  const aktifMesajEl = document.getElementById(`kart-mesaj-${siraIndex}`);
  const pasifMesajEl = document.getElementById(`kart-mesaj-${1 - siraIndex}`);

  if (aktifMesajEl) aktifMesajEl.textContent = metin;
  if (pasifMesajEl) pasifMesajEl.textContent = "";
}

function oyuncuKartlariniGuncelle() {
  const tahtaAdam = document.getElementById("tahta-adam");
  if (tahtaAdam) {
    if (siraIndex === 0) {
      tahtaAdam.classList.remove("konm-sag");
      tahtaAdam.classList.add("konm-sol");
    } else {
      tahtaAdam.classList.remove("konm-sol");
      tahtaAdam.classList.add("konm-sag");
    }
  }

  takimlar.forEach((takim, index) => {
    const isimEl = document.getElementById(`kart-isim-${index}`);
    const puanEl = document.getElementById(`puan-${index}`);
    const bilinenEl = document.getElementById(`bilinen-${index}`);
    const kart = document.getElementById(`kart-${index}`);
    const rolEl = document.getElementById(`rol-${index}`);

    if (isimEl) isimEl.textContent = takim.isim;
    if (puanEl) puanEl.textContent = takim.puan.toFixed(2);
    if (bilinenEl) bilinenEl.textContent = takim.bilinen;

    if (kart) {
      kart.style.backgroundColor = takim.renk;
      if (index === siraIndex) {
        kart.classList.add("aktif-sira");
      } else {
        kart.classList.remove("aktif-sira");
      }
    }

    if (rolEl) {
      rolEl.textContent = index === siraIndex ? "Tahmin Eden" : "Soran";
    }
  });

  const tac0 = document.getElementById("tac-0");
  const tac1 = document.getElementById("tac-1");

  if (tac0 && tac1) {
    tac0.classList.remove("aktif");
    tac1.classList.remove("aktif");

    if (takimlar[0].puan > takimlar[1].puan) {
      tac0.classList.add("aktif");
    } else if (takimlar[1].puan > takimlar[1].puan) {
      tac1.classList.add("aktif");
    }
  }
}

function kelimeGoster() {
  kelimeEl.replaceChildren();
  secilen.kelime.split(" ").forEach((parca) => {
    if (!parca) return;
    const grup = document.createElement("span");
    grup.className = "kelime-grup";
    grup.textContent = parca
      .split("")
      .map((harf) => {
        if (noktalamaMi(harf)) return harf;
        return dogruHarfler.has(harf) ? harf : "_";
      })
      .join(" ");
    kelimeEl.appendChild(grup);
  });
}

function potansiyelPuanGuncelle(kirmiziYap = false) {
  const guncelPuan = Math.max(0, mevcutPuan);
  if (potansiyelPuanEl) {
    potansiyelPuanEl.textContent = guncelPuan.toFixed(2);
    
    if (kirmiziYap) {
      potansiyelPuanEl.style.color = "#ef4444";
    } else {
      potansiyelPuanEl.style.color = "";
    }
  }

  const eklenenPuanEl = document.getElementById(`eklenen-puan-${siraIndex}`);
  if (eklenenPuanEl) {
    eklenenPuanEl.textContent = `+${guncelPuan.toFixed(2)}`;
  }
}

function kazandinMi() {
  return secilen.kelime
    .split("")
    .every((harf) => otomatikMi(harf) || dogruHarfler.has(harf));
}

function figurGuncelle() {
  const parcalar = document.querySelectorAll(".part");
  const kalanEl = document.getElementById("kalan");

  if (kalanEl) kalanEl.textContent = String(maxHak - yanlisSayisi);

  parcalar.forEach((parca) => {
    const sira = Number(parca.dataset.part);
    parca.classList.toggle("visible", sira < yanlisSayisi);
  });
}

function klavyeKur() {
  if (!klavyeEl) return;
  klavyeEl.innerHTML = "";
  harfler.forEach((harf) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = harf;
    btn.dataset.harf = harf;
    btn.addEventListener("click", () => tahminHarf(harf));
    klavyeEl.appendChild(btn);
  });
}

function introGoster() {
  const cozen = cozenTakim();
  const soran = soranTakim();

  zeminUygula(soran.renk);
  
  if (introIsim) introIsim.textContent = soran.isim;
  if (introSoran) introSoran.textContent = `Soran: ${soran.isim} (Tahmin Eden: ${cozen.isim})`;
  if (introTur) introTur.textContent = turMetni();
  if (introHata) introHata.textContent = "";
  if (kelimeGiris) kelimeGiris.value = "";
  if (ozelKategoriEl) {
    ozelKategoriEl.value = "";
    ozelKategoriEl.placeholder = "Kategorin";
    ozelKategoriEl.classList.toggle("gizli", secilenKategori !== "Diğer");
  }
  if (sonrakiBtn) sonrakiBtn.classList.add("gizli");
  ekranGoster("intro");
  if (kelimeGiris) kelimeGiris.focus();
}

function oyunuBaslat(kategori, kelime) {
  const cozen = cozenTakim();
  secilen = { kategori, kelime };
  dogruHarfler = new Set();
  acilanHarfSayisi = 0;
  yanlisSayisi = 0;
  mevcutPuan = 0;
  bitti = false;

  document.querySelectorAll(".oyuncu-kart").forEach(k => k.classList.remove("dondu"));

  zeminUygula(cozen.renk);
  if (siraIsim) siraIsim.textContent = cozen.isim;
  if (oyunTur) oyunTur.textContent = turMetni();
  if (kategoriEl) kategoriEl.textContent = kategori;
  if (kelimeSayisiEl) kelimeSayisiEl.textContent = String(kelimeSayisi(kelime));
  if (harfSayisiEl) harfSayisiEl.textContent = String(harfSayisi(kelime));
  
  if (sonrakiBtn) sonrakiBtn.classList.add("gizli");

  if (btnBildi) btnBildi.disabled = false;
  if (btnTahmin) btnTahmin.disabled = cozen.tahminHakki <= 0;
  if (btnPas) btnPas.disabled = cozen.pasHakki <= 0;

  if (tahminHakSayisiEl) tahminHakSayisiEl.textContent = cozen.tahminHakki;
  if (pasHakSayisiEl) pasHakSayisiEl.textContent = cozen.pasHakki;

  if (potansiyelPuanEl) potansiyelPuanEl.style.color = "";
  potansiyelPuanGuncelle(false);
  oyuncuKartlariniGuncelle();
  mesajGuncelle("Hamleni yap ve kelimeyi çözmeye başla!");
  ekranGoster("oyun");
  klavyeKur();
  kelimeGoster();
  figurGuncelle();
}

function oyuncuKartiDondur(targetIndex, eklenenPuan, ekstraPuan = 0) {
  const kartEl = document.getElementById(`kart-${targetIndex}`);
  const eklenenPuanEl = document.getElementById(`eklenen-puan-${targetIndex}`);
  const ekstraPuanEl = document.getElementById(`ekstra-puan-${targetIndex}`);
  
  if (eklenenPuanEl) eklenenPuanEl.textContent = `+${Math.max(0, eklenenPuan).toFixed(2)}`;
  
  if (ekstraPuanEl) {
    if (ekstraPuan > 0) {
      ekstraPuanEl.textContent = `+${ekstraPuan.toFixed(2)} ekstra puan`;
      ekstraPuanEl.classList.remove("gizli");
    } else {
      ekstraPuanEl.classList.add("gizli");
    }
  }
  
  if (kartEl) {
    kartEl.classList.add("dondu");
    setTimeout(() => {
      kartEl.classList.remove("dondu");
    }, 3500);
  }
}

function oyunBitir(kazandi, hedefKazanani, kazanilanPuan = 0, ekstraPuan = 0, pasDurumu = false) {
  bitti = true;

  secilen.kelime.split("").forEach((h) => {
    if (harfMi(h)) dogruHarfler.add(h);
  });
  kelimeGoster();

  if (pasDurumu) {
    sesEfectiCal("pas");
    const mesaj = rastgeleMesaj(mesajKutu.pasGecti);
    mesajGuncelle(`${mesaj} Kelime: ${secilen.kelime}`);
  } else if (kazandi) {
    sesEfectiCal("dogru");
    hedefKazanani.puan += kazanilanPuan;
    hedefKazanani.bilinen += 1;
    
    oyuncuKartiDondur(siraIndex, kazanilanPuan, ekstraPuan);

    const mesaj = rastgeleMesaj(mesajKutu.kazanma);
    mesajGuncelle(`${mesaj} (+${kazanilanPuan.toFixed(2)} Puan)`);
  } else {
    sesEfectiCal("yanlis");
    if (kazanilanPuan > 0) {
      hedefKazanani.puan += kazanilanPuan;
      oyuncuKartiDondur(1 - siraIndex, kazanilanPuan, 0);
    }
    const mesaj = rastgeleMesaj(mesajKutu.kaybetme);
    mesajGuncelle(`${mesaj} Kelime: ${secilen.kelime}`);
  }

  oyuncuKartlariniGuncelle();

  if (klavyeEl) {
    klavyeEl.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
  }
  if (btnBildi) btnBildi.disabled = true;
  if (btnTahmin) btnTahmin.disabled = true;
  if (btnPas) btnPas.disabled = true;

  if (sonrakiBtn) {
    sonrakiBtn.textContent =
      oynananTur + 1 >= toplamTur * 2 ? "Sonuçları Göster" : "Sıradaki Oyuncu";
    sonrakiBtn.classList.remove("gizli");
  }
}

function tahminHarf(harf) {
  if (bitti || !klavyeEl) return;

  const buyuk = normalHarf(harf);
  const dugme = klavyeEl.querySelector(`[data-harf="${buyuk}"]`);
  if (!dugme || dugme.disabled) return;

  dugme.disabled = true;
  const toplamHarf = harfSayisi(secilen.kelime);

  if (secilen.kelime.includes(buyuk)) {
    sesEfectiCal("dogrutus");
    dogruHarfler.add(buyuk);
    const eslesen = secilen.kelime.split("").filter((h) => h === buyuk).length;
    acilanHarfSayisi += eslesen;

    const harfBasiPuan = MAX_TABAN_PUAN / Math.max(1, toplamHarf);
    mevcutPuan += harfBasiPuan * eslesen;

    dugme.classList.add("correct");
    kelimeGoster();
    potansiyelPuanGuncelle(false);

    if (kazandinMi()) {
      oyunBitir(true, cozenTakim(), mevcutPuan, 0);
    } else {
      mesajGuncelle(rastgeleMesaj(mesajKutu.dogruHarf));
    }
    return;
  }

  sesEfectiCal("yanlistus");
  yanlisSayisi += 1;
  dugme.classList.add("wrong");
  
  const kalanYanlisHarfSayisi = 29 - toplamHarf;
  const dusus = MAX_TABAN_PUAN / Math.max(1, kalanYanlisHarfSayisi);
  
  mevcutPuan -= dusus;

  figurGuncelle();

  if (yanlisSayisi >= maxHak) {
    mevcutPuan = 0;
    potansiyelPuanGuncelle(true);
    oyunBitir(false, soranTakim(), 0);
  } else {
    potansiyelPuanGuncelle(false);
    if (yanlisSayisi >= maxHak - 2) {
      mesajGuncelle(rastgeleMesaj(mesajKutu.kritikDurum));
    } else {
      mesajGuncelle(rastgeleMesaj(mesajKutu.yanlisHarf));
    }
  }
}

// Buton & Menü Etkileşimleri
if (btnOyunaBasla) {
  btnOyunaBasla.addEventListener("click", () => {
    ekranGoster("kurulum");
  });
}

if (btnKuralKapat) {
  btnKuralKapat.addEventListener("click", () => {
    kuralModal.classList.add("gizli");
  });
}

if (btnKurallar) {
  btnKurallar.addEventListener("click", () => {
    kuralModal.classList.remove("gizli");
  });
}

if (btnCikis) {
  btnCikis.addEventListener("click", () => {
    if (confirm("Oyundan çıkmak istediğinize emin misiniz?")) {
      window.close();
      document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:20%;'>Oyun Kapatıldı. Sekmeyi kapatabilirsiniz.</h1>";
    }
  });
}

if (btnKurulumGeri) {
  btnKurulumGeri.addEventListener("click", () => {
    varsayilanZemin();
    ekranGoster("giris");
  });
}

if (muzikSesSlider) {
  muzikSesSlider.addEventListener("input", (e) => {
    muzikSeviyesi = e.target.value / 100;
    arkaPlanMuzigi.volume = muzikSeviyesi;
  });
}

if (efektSesSlider) {
  efektSesSlider.addEventListener("input", (e) => {
    efektSeviyesi = e.target.value / 100;
  });
}

if (btnBildi) {
  btnBildi.addEventListener("click", () => {
    if (bitti) return;  
    const toplamHarf = harfSayisi(secilen.kelime);
    const kapaliHarfSayisi = toplamHarf - acilanHarfSayisi;

    const harfBasiPuan = MAX_TABAN_PUAN / Math.max(1, toplamHarf);
    const ekstraPuan = kapaliHarfSayisi * harfBasiPuan;
    const toplamKazanilanPuan = mevcutPuan + ekstraPuan;

    oyunBitir(true, cozenTakim(), toplamKazanilanPuan, ekstraPuan);
  });
}

if (btnTahmin) {
  btnTahmin.addEventListener("click", () => {
    if (bitti) return;

    const cozen = cozenTakim();
    const soran = soranTakim();

    if (cozen.tahminHakki <= 0) return;

    cozen.tahminHakki -= 1;
    if (tahminHakSayisiEl) tahminHakSayisiEl.textContent = cozen.tahminHakki;

    const aktarilacakPuan = mevcutPuan > 0 ? mevcutPuan / 2 : 0;
    mevcutPuan = 0;

    potansiyelPuanGuncelle(false);

    if (cozen.tahminHakki <= 0) {
      btnTahmin.disabled = true;
    }

    oyunBitir(false, soran, aktarilacakPuan, 0);
  });
}

if (btnPas) {
  btnPas.addEventListener("click", () => {
    if (bitti) return;

    const cozen = cozenTakim();
    if (cozen.pasHakki <= 0) return;

    cozen.pasHakki -= 1;
    if (pasHakSayisiEl) pasHakSayisiEl.textContent = cozen.pasHakki;

    if (cozen.pasHakki <= 0) {
      btnPas.disabled = true;
    }

    oyunBitir(false, null, 0, 0, true);
  });
}

function sonuclariGoster() {
  varsayilanZemin();

  takimlar.forEach((takim, index) => {
    const isimEl = document.getElementById(`sonuc-kart-isim-${index}`);
    const puanEl = document.getElementById(`sonuc-puan-${index}`);
    const bilinenEl = document.getElementById(`sonuc-bilinen-${index}`);
    const kart = document.getElementById(`sonuc-kart-${index}`);

    if (isimEl) isimEl.textContent = takim.isim;
    if (puanEl) puanEl.textContent = takim.puan.toFixed(2);
    if (bilinenEl) bilinenEl.textContent = takim.bilinen;
    if (kart) kart.style.backgroundColor = takim.renk;
  });

  const tac0 = document.getElementById("sonuc-tac-0");
  const tac1 = document.getElementById("sonuc-tac-1");
  const mesaj0 = document.getElementById("sonuc-kart-mesaj-0");
  const mesaj1 = document.getElementById("sonuc-kart-mesaj-1");

  if (tac0) tac0.classList.remove("aktif");
  if (tac1) tac1.classList.remove("aktif");

  if (takimlar[0].puan > takimlar[1].puan) {
    if (kazananBaslik) kazananBaslik.textContent = `${takimlar[0].isim} Kazandı!`;
    if (tac0) tac0.classList.add("aktif");
    if (mesaj0) mesaj0.textContent = rastgeleMesaj(mesajKutu.sonucKazanma);
    if (mesaj1) mesaj1.textContent = rastgeleMesaj(mesajKutu.sonucKaybetme);
  } else if (takimlar[1].puan > takimlar[0].puan) {
    if (kazananBaslik) kazananBaslik.textContent = `${takimlar[1].isim} Kazandı!`;
    if (tac1) tac1.classList.add("aktif");
    if (mesaj0) mesaj0.textContent = rastgeleMesaj(mesajKutu.sonucKaybetme);
    if (mesaj1) mesaj1.textContent = rastgeleMesaj(mesajKutu.sonucKazanma);
  } else {
    if (kazananBaslik) kazananBaslik.textContent = "Berabere!";
    if (mesaj0) mesaj0.textContent = rastgeleMesaj(mesajKutu.sonucBerabere);
    if (mesaj1) mesaj1.textContent = rastgeleMesaj(mesajKutu.sonucBerabere);
  }

  ekranGoster("sonuc");
}

function sonrakiOyuncu() {
  oynananTur += 1;
  if (oynananTur >= toplamTur * 2) {
    sonuclariGoster();
    return;
  }
  siraIndex = 1 - siraIndex;
  introGoster();
}

if (kurulumForm) {
  kurulumForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const isim1 = document.getElementById("isim-1").value.trim();
    const isim2 = document.getElementById("isim-2").value.trim();

    if (!isim1 || !isim2) {
      if (kurulumHata) kurulumHata.textContent = "İki takımın da ismini yaz.";
      return;
    }
    if (renkSecimleri[0] === renkSecimleri[1]) {
      if (kurulumHata) kurulumHata.textContent = "İki takım aynı rengi seçemez.";
      return;
    }

    const rauntEl = document.getElementById("raunt");
    toplamTur = rauntEl ? Number(rauntEl.value) : 3;
    
    takimlar = [
      { isim: isim1, renk: RENKLER[renkSecimleri[0]], puan: 0, bilinen: 0, tahminHakki: MAX_TAHMIN_HAKKI, pasHakki: MAX_PAS_HAKKI },
      { isim: isim2, renk: RENKLER[renkSecimleri[1]], puan: 0, bilinen: 0, tahminHakki: MAX_TAHMIN_HAKKI, pasHakki: MAX_PAS_HAKKI },
    ];
    siraIndex = 0;
    oynananTur = 0;
    if (kurulumHata) kurulumHata.textContent = "";
    document.body.classList.remove("kurulum");
    introGoster();
  });
}

if (introForm) {
  introForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const kategori =
      secilenKategori === "Diğer"
        ? ozelKategoriEl.value.trim()
        : secilenKategori;
    const kelime = kelimeTemizle(kelimeGiris.value);

    if (!kategori) {
      if (introHata) introHata.textContent = "Kategori yaz.";
      return;
    }

    if (!kelime || !kelime.split("").some(harfMi)) {
      if (introHata) introHata.textContent = "En az bir harf içeren bir kelime yaz.";
      return;
    }

    if (introHata) introHata.textContent = "";
    oyunuBaslat(kategori, kelime);
  });
}

if (sonrakiBtn) sonrakiBtn.addEventListener("click", sonrakiOyuncu);

if (yenidenBasla) {
  yenidenBasla.addEventListener("click", () => {
    varsayilanZemin();
    ekranGoster("kurulum");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key && event.key.length === 1) tahminHarf(event.key);
});

// Başlangıç çağrıları
renkKutulari();
kategoriButonlari();
varsayilanZemin();
ekranGoster("giris");
