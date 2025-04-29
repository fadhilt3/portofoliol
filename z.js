function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "STUDENT"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

function confirmDownload() { 
    const confirmation = confirm("lanjut dowload ga nih?"); 
    if (confirmation) {
      window.location.href = "fadhiltzy.png"; 
      return true; 
    }else{ 
        window.location.href = "index.html";  
        return false;
    }
  }
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Ambil nilai input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validasi input kosong
        if (!name || !email || !message) {
            alert("Harap isi semua kolom!");
            return;
        }

        // Tampilkan modal konfirmasi
        const modal = document.createElement("div");
        modal.classList.add("modal-overlay");
        modal.innerHTML = `
            <div class="modal-box">
                <div class="check-icon">✔️</div>
                <h3 class="modal-title" style="color: #ffffff;">Pesan Terkirim! TERIMAKASIH TELAH MEMBERI SARAN!!</h3>
                <p class="modal-text" style="color: #cccccc;">Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.</p>
                <button class="modal-button" style="background-color: #077b32; color: white;">OK</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Event listener untuk menutup modal
        modal.querySelector(".modal-button").addEventListener("click", function () {
            document.body.removeChild(modal);
            form.reset();
        });
    });
});
