/*Define teamMembers array*/
const teamMembers = [
{ firstName: "GERALD",	surnname: "MPINDDIWA", 	position: "WING" },  
{ firstName: "KUTLO",	surnname: "BATSILE", 	position: "LOCK" }, 
{ firstName: "JOHN",	surnname: "DINTWE", 	position: "WING" }, 
{ firstName: "PONATSHEGO",	surnname: "DZIRO", 	position: "PROP" }, 
{ firstName: "UTLWANG",	surnname: "GAONYADIWE", 	position: "WING" }, 
{ firstName: "BONGANI ",	surnname: "GOMBA", 	position: "PROP" }, 
{ firstName: "MOMPOLOKI",	surnname: "GWATIWA", 	position: "FULLBACK" }, 
{ firstName: "MICHAEL",	surnname: "GWEDEZA ", 	position: "PROP" }, 
{ firstName: "PHAZHA",	surnname: "ITANI", 	position: "WING" }, 
{ firstName: "BANJO",	surnname: "KESIANYE", 	position: " FLYHALF" }, 
{ firstName: "THABANG",	surnname: "KGAFELA", 	position: " HALFBACK" }, 
{ firstName: "TLOTLO",	surnname: "KGOPOLELO", 	position: "WING" }, 
{ firstName: "SHAKA",	surnname: "KHANI", 	position: "FLANKER" }, 
{ firstName: "LARONA ",	surnname: "KOPANO", 	position: "LOCK" }, 
{ firstName: "OLAOTSE",	surnname: "LEBALENG", 	position: "PROP" }, 
{ firstName: "PATSO ",	surnname: "LEKHOLOANE", 	position: "WING" }, 
{ firstName: "SALVATION",	surnname: "LLOYD", 	position: "LOCK" }, 
{ firstName: "AOBAKWE",	surnname: "MACHOLA", 	position: "LOCK" }, 
{ firstName: "KITSO",	surnname: "MADUO", 	position: "PROP" }, 
{ firstName: "KENT",	surnname: "MAGWAI", 	position: " HOOKER" }, 
{ firstName: "THATO",	surnname: "MAIFALA", 	position: " HOOKER" }, 
{ firstName: "NCHIDZI",	surnname: "MASOLE", 	position: "LOCK" }, 
{ firstName: "NTEBOGANG",	surnname: "MATHAKA", 	position: "PROP" }, 
{ firstName: "ADRIAN",	surnname: "MBIRIYAKURA", 	position: "PROP" }, 
{ firstName: "ATANG",	surnname: "MODUBULE", 	position: "WING" }, 
{ firstName: "MOFFAT",	surnname: "MOGATOSI", 	position: "FULLBAC`K" }, 
{ firstName: "KAELO",	surnname: "MOGOTSI", 	position: "EIGHTMAN" }, 
{ firstName: "KATLEGO",	surnname: "MOHUTSIWA", 	position: "PROP" }, 
{ firstName: "GAPE",	surnname: "MONEI", 	position: "CENTER" }, 
{ firstName: "TAFADZWA",	surnname: "MONTSHIWA", 	position: "CENTER" }, 
{ firstName: "TLOTLANG",	surnname: "MOREENG", 	position: "FLANKER" }, 
{ firstName: "OMPHILE ",	surnname: "SIMON", 	position: "FLANKER" }, 
{ firstName: "PAUL",	surnname: "MOTINGWA", 	position: "FLYHALF" }, 
{ firstName: "WABONA",	surnname: "MOTINGWA", 	position: "FLANKER" }, 
{ firstName: "DAMIEN",	surnname: "MOYO", 	position: "FLYHALF" }, 
{ firstName: "TONIC",	surnname: "NDODA", 	position: "FULLBAC`K" }, 
{ firstName: "GOFAONE",	surnname: "NGANDE", 	position: "CENTER" }, 
{ firstName: "EMMANUEL ",	surnname: "NYSHIWA", 	position: "WING" }, 
{ firstName: "BLESSING",	surnname: "NYAMHINDU", 	position: "WING" }, 
{ firstName: "SFISO",	surnname: "PETER", 	position: "LOCK" }, 
{ firstName: "OBAKENG",	surnname: "PHALE", 	position: "WING" }, 
{ firstName: "BATHO",	surnname: "POFELO", 	position: "FLANKER" }, 
{ firstName: "ZEKUATUA",	surnname: "TJIPUMBA", 	position: "WING" }   
];

const container = document.getElementById("team-members-container");

(container) {  
    teamMembers.forEach(member => {
    const memberDiv = document.createElement("div"); // Removed extra space
    memberDiv.classList.add("col-sm-6", "col-md-4", "col-lg-3", "mb-4");

    memberDiv.innerHTML = `<div class="card h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">(${member.firstName}) (${member.surnname})</h5>
                <p class="card-text">Position: (${member.position})</p>
            </div>
        </div> `; // Corrected closing div and backtick

    container.appendChild(memberDiv);
             });
}else {
    console.error("Error: Element with ID 'team-members-container'not found in team.html");
}


// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Get the modal elements
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('img01');
const lightboxCaption = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

// Loop through each gallery item and add a click event listener
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const clickedImg = this.querySelector('img'); // Get the image inside the clicked gallery item
        const fullSrc = clickedImg.getAttribute('data-full-src') || clickedImg.src; // Use data-full-src or fallback to src
        const altText = clickedImg.alt; // Get the alt text
        const captionText = this.querySelector('p').innerText; // Get the text from the paragraph

        // Set the image source and alt text for the lightbox
        lightboxImg.src = fullSrc;
        lightboxImg.alt = altText;
        lightboxCaption.innerText = captionText;

        // Display the modal
        lightboxModal.style.display = 'flex'; // Use flex to center content
    });
});

// Add event listener to the close button
closeBtn.addEventListener('click', function() {
    lightboxModal.style.display = 'none'; // Hide the modal
});

// Optional: Close modal when clicking outside the image (on the overlay)
lightboxModal.addEventListener('click', function(event) {
    // Check if the click was directly on the modal background, not the image itself
    if (event.target === lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});




