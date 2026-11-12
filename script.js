document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 2. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          if (navLinks) navLinks.classList.remove("active");
        }
      }
    });
  });
});

// 3. Event Gallery Database & Logic
const eventPhotos = {
  independenceDay: {
    title: "Independence Day Celebration 2026",
    photos: [
      "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.15 PM.jpeg",
      "Images/Independence Day Celebration/WhatsApp Image 2026-08-15 at 4.20.15 PM (1).jpeg",
      "Images/Independence Day Celebration/Video.mp4",
      "https://www.youtube.com/embed/hA8MFZ76Jbc"
    ]
  }
};

function openEventGallery(eventId) {
  const modal = document.getElementById("eventModal");
  const titleElem = document.getElementById("modalEventTitle");
  const gridElem = document.getElementById("modalPhotoGrid");

  if (!modal || !gridElem) return;

  const eventData = eventPhotos[eventId];
  if (!eventData) return;

  titleElem.innerText = eventData.title;
  gridElem.innerHTML = ""; 
  modal.style.display = "flex";

  eventData.photos.forEach(src => {
    let wrapper = document.createElement("div");
    wrapper.className = "uniform-media-box interactive-card";

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      wrapper.innerHTML = `
        <iframe src="${src}?autoplay=0&modestbranding=1" title="${eventData.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `;
    } else if (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov")) {
      let videoElem = document.createElement("video");
      videoElem.src = src;
      videoElem.controls = true;
      wrapper.appendChild(videoElem);
    } else {
      let imgElem = document.createElement("img");
      imgElem.src = src;
      imgElem.alt = eventData.title;
      imgElem.onclick = () => openLightbox(imgElem);
      wrapper.appendChild(imgElem);
    }
    gridElem.appendChild(wrapper);
  });
}

function closeEventGallery() {
  const modal = document.getElementById("eventModal");
  if (modal) {
    modal.style.display = "none";
    document.getElementById("modalPhotoGrid").innerHTML = "";
  }
}

// 4. Lightbox Logic
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  if (!lightbox) return;

  lightboxImg.src = imgElement.src;
  caption.textContent = imgElement.alt || "";
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
    document.getElementById("lightbox-img").src = "";
  }
}

// 5. Trustee Modal Logic
function openTrusteeModal() {
  const modal = document.getElementById("trusteeModal");
  if (modal) modal.style.display = "flex";
}

function closeTrusteeModal() {
  const modal = document.getElementById("trusteeModal");
  if (modal) modal.style.display = "none";
}

// 6. Faculty Card Flip Logic
function flipCard(container) {
  container.classList.toggle("flipped");
}

// 7. Global Unified Modal Backdrop Closer
window.onclick = function(event) {
  const eventModal = document.getElementById("eventModal");
  const lightbox = document.getElementById("lightbox");
  const trusteeModal = document.getElementById("trusteeModal");
  
  if (event.target === eventModal) closeEventGallery();
  if (event.target === lightbox) closeLightbox();
  if (event.target === trusteeModal) closeTrusteeModal();
}