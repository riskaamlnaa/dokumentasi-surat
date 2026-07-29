/* ===============================
   Smooth Scroll
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===============================
   Navbar Shadow Saat Scroll
================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        navbar.style.boxShadow="0 8px 0 #000";

    }else{

        navbar.style.boxShadow="none";

    }

});


/* ===============================
   Animasi Muncul Saat Scroll
================================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".title, .feature-card, .problem-card, .hero-card")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ===============================
   Tombol Kembali ke Atas
================================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};