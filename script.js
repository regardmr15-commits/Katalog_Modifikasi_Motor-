// ===== KLIK KARTU -> DESKRIPSI MUNCUL / HILANG =====
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        const deskripsi = card.querySelector(".deskripsi");
        deskripsi.hidden = !deskripsi.hidden;
    });
});

// ===== SEARCH =====
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

searchInput.addEventListener("input", function () {
    const kata = searchInput.value.toLowerCase();
    let jumlahTampil = 0;

    cards.forEach(function (card) {
        const isiKartu = card.textContent.toLowerCase();

        if (isiKartu.includes(kata)) {
            card.style.display = "";
            jumlahTampil++;
        } else {
            card.style.display = "none";
        }
    });

    emptyMessage.hidden = jumlahTampil !== 0;
});

// ===== FORM KONTAK =====
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        formMessage.textContent = "Semua kolom wajib diisi.";
        return;
    }

    formMessage.textContent = "Terima kasih, " + nama + "! Pesanmu sudah terkirim.";
    form.reset();
});