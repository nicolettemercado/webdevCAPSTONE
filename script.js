const services = [
  {
    id: 81995424,
    name: "Daytime Playdate",
    description: "A fun-filled few hours of supervised play and cuddles with other pups."
  },
  {
    id: 81995819,
    name: "Dog Walk",
    description: "A 30-minute neighborhood stroll to stretch legs and sniff the world."
  },
  {
    id: 81995828,
    name: "Dog Walk (Extended)",
    description: "An extended 60-minute walk for high-energy pups who need extra time."
  },
  { 
    name: "Doggy Sleepovers",
    description: "For overnight inquiries please email us at nicolette@dogsitting.com!"
  }
];


function displayServices() {
  const serviceList = document.getElementById("service-list");
  serviceList.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="card-name">${service.name}</div>
      <div class="card-info">${service.description}</div>
    `;
    serviceList.appendChild(card);
  });
}



const dogProfiles = [
  {
    name: "King",
    breed: "Belgian Malinois",
    age: 11,
    bio: "Fiercely loyal and sweet. He loves his pack more than anything... well aside from chicken.",
    photo: "images/king.png"
  },
  {
    name: "Mizuki",
    breed: "Rotsky",
    age: 1,
    bio: "Independent but sweet and well-trained with a wild streak, she's the best girl Mizu!",
    photo: "images/mizuki.jpg"
  },
  {
    name: "Denali",
    breed: "Flat-Coated Retriever",
    age: 1,
    bio: "A very handsome boy. Loves sticks. Great with kids. Avid fan of morning walks",
    photo: "images/denali.jpg"
  },
  {
    name: "Maple",
    breed: "Golden Retriever",
    age:1,
    bio: "Tiny paws, big personality and tons of wiggles. She's sunshine in a puppy.",
    photo: "images/maple.jpg"
  }
];

function displayProfiles() {
  const container = document.getElementById('profiles-container');
  dogProfiles.forEach(dog => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${dog.photo}" alt="${dog.name}" class="dog-photo" />
        </div>
        <div class="card-back">
          <h3>${dog.name} (${dog.age} yrs)</h3>
          <p><strong>Breed:</strong> ${dog.breed}</p>
          <p>${dog.bio}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}









