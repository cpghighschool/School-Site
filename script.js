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
      
      // Only scroll if the link is a standard anchor (not just "#")
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          if (navLinks) navLinks.classList.remove("active");
        }
      }
    });
  });

});

// 3. Event Gallery & Database
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

  // Safeguard: Ensure modal exists on current page
  if (!modal || !gridElem) return;

  const eventData = eventPhotos[eventId];
  if (!eventData) return;

  titleElem.innerText = eventData.title;
  gridElem.innerHTML = ""; 

  // Make modal visible FIRST (crucial for YouTube iframe initialization)
  modal.style.display = "flex";

  // Inside openEventGallery function in script.js:
eventData.photos.forEach(src => {
    let wrapper, mediaElement;

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
        wrapper = document.createElement("div");
        wrapper.className = "uniform-media-box interactive-card"; // Forces square size
        
        wrapper.innerHTML = `
            <iframe 
                src="${src}?autoplay=0&modestbranding=1" 
                title="${eventData.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        `;
        gridElem.appendChild(wrapper);
    } 
    else if (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov")) {
        wrapper = document.createElement("div");
        wrapper.className = "uniform-media-box interactive-card"; // Forces square size
        
        mediaElement = document.createElement("video");
        mediaElement.src = src;
        mediaElement.controls = true;
        wrapper.appendChild(mediaElement);
        gridElem.appendChild(wrapper);
    } 
    else {
        wrapper = document.createElement("div");
        wrapper.className = "uniform-media-box interactive-card"; // Forces square size
        
        mediaElement = document.createElement("img");
        mediaElement.src = src;
        mediaElement.alt = eventData.title;
        mediaElement.onclick = function() {
            openLightbox(mediaElement); 
        };
        wrapper.appendChild(mediaElement);
        gridElem.appendChild(wrapper);
    }
});
}

function closeEventGallery() {
  const modal = document.getElementById("eventModal");
  if (modal) {
      modal.style.display = "none";
      // Clear content to stop videos from playing in the background
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

// Close modals when clicking outside content area
window.onclick = function(event) {
  const eventModal = document.getElementById("eventModal");
  const lightbox = document.getElementById("lightbox");
  
  if (event.target === eventModal) closeEventGallery();
  if (event.target === lightbox) closeLightbox();
}