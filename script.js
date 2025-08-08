const services = [
  { name: "Daytime Playdate", price: 20 },
  { name: "Puppy Sleepover", price: 30 },
  { name: "Dog Walk (30 min)", price: 10 },
  { name: "Dog Walk Extended (1 hour)", price: 15 }
];

function displayServices() {
  const list = document.getElementById('service-list');
  services.forEach(service => {
    const li = document.createElement('li');
    li.textContent = `${service.name} – $${service.price}`;
    list.appendChild(li);
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









