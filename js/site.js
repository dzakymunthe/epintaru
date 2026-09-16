(function () {
  "use strict";

  var questionForm = "https://docs.google.com/forms/d/e/1FAIpQLScq6WmdntybeKmJv4kOtuRh5PDPYjGEHo8VhEZZ60407W67Jg/viewform?embedded=true";

  var services = [
    {
      title: "PKKPR Berusaha",
      definition: "<strong>PKKPR Berusaha</strong> adalah dokumen persetujuan yang menyatakan kesesuaian antara rencana lokasi kegiatan usaha komersial dengan Rencana Tata Ruang (RTR) yang berlaku, yang berfungsi sebagai syarat dasar wajib bagi pelaku usaha untuk menerbitkan <strong>Nomor Induk Berusaha (NIB)</strong> melalui <strong>Sistem OSS</strong>.",
      requirements: '<p class="modal-note">Pendaftaran di laman <a href="https://oss.go.id" target="_blank" rel="noreferrer">oss.go.id</a> dengan menyertakan dokumen usulan kegiatan:</p><ol><li>Peta titik koordinat lokasi dan Shapefile (SHP); <a class="document-link" href="https://drive.google.com/file/d/1UlqqKeCqthWTCIT78oI0GgY7bEoIJSGS/view?usp=sharing" target="_blank" rel="noreferrer">Lihat Dokumen</a></li><li>Kebutuhan luas lahan kegiatan pemanfaatan ruang;</li><li>Informasi penguasaan tanah;</li><li>Informasi jenis usaha;</li><li>Rencana jumlah lantai bangunan;</li><li>Rencana luas lantai bangunan; dan</li><li>Rencana teknis bangunan dan/atau rencana induk kawasan.</li></ol>',
      flow: ["Daftar/Ajukan melalui OSS", "Lengkapi Data & Dokumen", "Pemeriksaan/Penilaian Kesesuaian Tata Ruang", "PKKPR Diterbitkan"],
      guide: "https://www.instagram.com/dinaspupr.bireuen/reel/DdQyDLdzuaX/"
    },
    {
      title: "PKKPR Non-Berusaha",
      definition: "<strong>PKKPR Non-Berusaha</strong> adalah dokumen persetujuan tata ruang untuk kegiatan yang bersifat non-komersial, sosial, atau pelayanan publik yang tidak mencari keuntungan, serta diajukan melalui <strong>Dinas PMPTSP</strong>. Dokumen ini digunakan untuk keperluan seperti rumah tinggal pribadi, tempat ibadah, yayasan sosial, sekolah, hingga proyek infrastruktur pemerintah.",
      requirements: "<ol><li>Surat permohonan bermeterai ditujukan kepada DPMPTSP Kabupaten Bireuen;</li><li>Fotokopi KTP pemohon;</li><li>Fotokopi NPWP;</li><li>Fotokopi informasi penguasaan tanah (Sertifikat Hak Guna Bangunan);</li><li>Peta titik koordinat dan peta citra satelit (SHP);</li><li>Informasi jenis kegiatan dan kebutuhan luas lahan pemanfaatan ruang;</li><li>Rencana jumlah lantai bangunan/tampak depan;</li><li>Rencana luas lantai bangunan/denah;</li><li>Dokumen pra studi kelayakan KKPR;</li><li>Rencana teknik bangunan/site plan.</li></ol>",
      flow: ["Lengkapi Data & Dokumen", "Penyerahan Dokumen ke Bidang Penataan Ruang DPUPR Kabupaten Bireuen", "Pemeriksaan/Penilaian Kesesuaian Tata Ruang", "PKKPR Diterbitkan"],
      guide: "https://www.instagram.com/dinaspupr.bireuen/reel/DdQyeCHTWNj/"
    },
    {
      title: "KKPR",
      definition: "<strong>KKPR</strong> untuk UMK adalah kesesuaian antara rencana lokasi kegiatan usaha mikro dan kecil dengan Rencana Tata Ruang (RTR) yang mekanismenya disederhanakan dalam bentuk Pernyataan Mandiri melalui <strong>sistem OSS</strong>.",
      requirements: '<ol><li>Surat permohonan ditujukan kepada Kepala Dinas PUPR Kabupaten Bireuen; <a class="document-link" href="https://docs.google.com/document/d/1YKBmBtIM4uGe5v_vNG_Q5Bx7PCXLN7pb/edit?usp=sharing&ouid=102871469075169667515&rtpof=true&sd=true" target="_blank" rel="noreferrer">Lihat Dokumen</a></li><li>Fotokopi KTP pemohon;</li><li>Fotokopi NPWP;</li><li>Fotokopi kepemilikan lahan tanah (Akta Tanah);</li><li>NIB dan lampiran yang memuat Surat Pernyataan Tata Ruang dari OSS;</li><li>Peta titik koordinat dan peta citra satelit (SHP); <a class="document-link" href="https://drive.google.com/file/d/1UlqqKeCqthWTCIT78oI0GgY7bEoIJSGS/view?usp=sharing" target="_blank" rel="noreferrer">Lihat Dokumen</a></li><li>Denah rencana/layout/site plan khusus izin tata ruang kawasan permukiman;</li><li>Pernyataan Menara Bersama khusus permohonan tower; <a class="document-link" href="https://docs.google.com/document/d/1FJsq4VihFbaRrLVkVOC_kZ_48gPK8VeS/edit?usp=sharing&ouid=102871469075169667515&rtpof=true&sd=true" target="_blank" rel="noreferrer">Lihat Dokumen</a></li></ol>',
      flow: ["Lengkapi Data & Dokumen", "Penyerahan Dokumen ke Bidang Penataan Ruang DPUPR Kabupaten Bireuen", "Pemeriksaan/Penilaian Kesesuaian Tata Ruang", "KKPR Diterbitkan"],
      guide: "https://www.instagram.com/dinaspupr.bireuen/reel/DdQy_CkzAow/"
    },
    {
      title: "KRK / Advice Planning",
      definition: "<strong>KRK</strong> adalah dokumen resmi yang diterbitkan oleh pemerintah daerah yang berisi informasi detail mengenai rencana zonasi, peruntukan lahan, dan ketentuan teknis tata bangunan di suatu lokasi.",
      requirements: '<ol><li>Surat permohonan ditujukan kepada Kepala Dinas PUPR Kabupaten Bireuen; <a class="document-link" href="https://docs.google.com/document/d/1A0Nx5xZnG1EBZ0jk30G-R1_1JFBEACDt/edit?usp=sharing&ouid=102871469075169667515&rtpof=true&sd=true" target="_blank" rel="noreferrer">Lihat Dokumen</a></li><li>Fotokopi KTP pemohon;</li><li>Peta titik koordinat lokasi;</li><li>Bukti informasi kepemilikan tanah.</li></ol>',
      flow: ["Lengkapi Data & Dokumen", "Penyerahan Dokumen ke Bidang Penataan Ruang DPUPR Kabupaten Bireuen", "Pemeriksaan/Penilaian Kesesuaian Tata Ruang", "KRK Diterbitkan"],
      guide: "https://www.instagram.com/dinaspupr.bireuen/reel/DdQzGH-zxqw/"
    }
  ];

  function closeModal() {
    var backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();
    document.body.style.overflow = "";
  }

  function closeIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"></path></svg>';
  }

  function playIcon() {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>';
  }

  function openService(service) {
    closeModal();
    var flow = service.flow.map(function (step, index) {
      return "<div><span>" + (index + 1) + "</span><p>" + step + "</p></div>";
    }).join("");
    var backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = '<section class="modal" role="dialog" aria-modal="true" aria-label="' + service.title + '"><header><div><h2>' + service.title + '</h2><p class="modal-definition">' + service.definition + '</p></div><button type="button" class="modal-x" aria-label="Tutup">' + closeIcon() + '</button></header><div class="modal-body"><div class="requirements"><h3>Persyaratan</h3>' + service.requirements + '</div><div class="flow"><h3>Alur Pelayanan</h3><div class="flow-list">' + flow + '</div></div></div><footer><a class="guide-button" href="' + service.guide + '" target="_blank" rel="noreferrer">' + playIcon() + 'Lihat Panduan</a><button type="button" class="modal-close">Tutup</button></footer></section>';
    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";
    backdrop.querySelector(".modal-x").addEventListener("click", closeModal);
    backdrop.querySelector(".modal-close").addEventListener("click", closeModal);
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) closeModal();
    });
    backdrop.querySelector(".modal-x").focus();
  }

  function openQuestionForm() {
    closeModal();
    var backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = '<section class="modal question-modal" role="dialog" aria-modal="true" aria-label="TANYA PINTARU"><header><div><h2>TANYA PINTARU</h2><p class="modal-definition">Sampaikan pertanyaan Anda mengenai pelayanan tata ruang.</p></div><button type="button" class="modal-x" aria-label="Tutup">' + closeIcon() + '</button></header><iframe title="Formulir TANYA PINTARU" src="' + questionForm + '" loading="eager">Memuat formulir…</iframe></section>';
    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";
    backdrop.querySelector(".modal-x").addEventListener("click", closeModal);
    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) closeModal();
    });
    backdrop.querySelector(".modal-x").focus();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var menuButton = document.querySelector(".menu-button");
    var nav = document.querySelector(".navbar nav");

    function updateNavbar() {
      if (navbar) navbar.classList.toggle("solid", window.scrollY > 40 || (nav && nav.classList.contains("open")));
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    if (menuButton && nav) {
      menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");
        updateNavbar();
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href").slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (history.replaceState) history.replaceState(null, "", "#" + id);
        if (nav) nav.classList.remove("open");
        updateNavbar();
      });
    });

    document.querySelectorAll(".request-grid > button").forEach(function (button, index) {
      button.addEventListener("click", function () {
        openService(services[index]);
      });
    });

    document.querySelectorAll(".accordion article").forEach(function (article) {
      var button = article.querySelector("button");
      if (!button) return;
      button.addEventListener("click", function () {
        var shouldOpen = !article.classList.contains("active");
        document.querySelectorAll(".accordion article").forEach(function (item) {
          item.classList.remove("active");
          var itemButton = item.querySelector("button");
          if (itemButton) itemButton.setAttribute("aria-expanded", "false");
        });
        if (shouldOpen) {
          article.classList.add("active");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.querySelectorAll(".question-button, .contact-question-button").forEach(function (button) {
      button.addEventListener("click", openQuestionForm);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeModal();
    });
  });
})();
