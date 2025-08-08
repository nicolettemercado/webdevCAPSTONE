const services = [
  { id: 81995424, name: "Daytime Playdate" },
  { id: 81995819, name: "Dog Walk" },
  { id: 81995828, name: "Dog Walk (Extended)" },
];


const serviceSelect = document.getElementById("serviceSelect");
services.forEach(service => {
  const option = document.createElement("option");
  option.value = service.id;
  option.textContent = service.name;
  serviceSelect.appendChild(option);
});


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.getElementById("bookingForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const additionalEmailsRaw = document.getElementById("additionalEmails").value.trim();
  const serviceId = document.getElementById("serviceSelect").value;
  const datetime = document.getElementById("datetime").value;

  
  if (!validateEmail(email)) {
    return showMessage("Please enter a valid primary email.", true);
  }

  
  let additionalEmails = [];
  if (additionalEmailsRaw) {
    additionalEmails = additionalEmailsRaw
      .split(",")
      .map(e => e.trim())
      .filter(e => e.length > 0);

    for (const em of additionalEmails) {
      if (!validateEmail(em)) {
        return showMessage(`Invalid additional email detected: ${em}`, true);
      }
    }
  }

  if (!serviceId) {
    return showMessage("Please select a service.", true);
  }

  if (!datetime) {
    return showMessage("Please select a date and time.", true);
  }

  const bookingData = {
    firstName,
    lastName,
    email,
    additionalEmails,
    serviceId,
    datetime,
  };

  try {
    const response = await fetch("http://localhost:3001/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (response.ok) {
      showMessage("✅ Booking confirmed! We'll be in touch soon.");
      document.getElementById("bookingForm").reset();
    } else {
      showMessage(`❌ Error: ${result.details?.message || result.error || "Something went wrong."}`, true);
    }
  } catch (error) {
    showMessage(`❌ Network error: ${error.message}`, true);
  }
});

function showMessage(msg, isError = false) {
  const msgDiv = document.getElementById("bookingMessage");
  msgDiv.textContent = msg;
  msgDiv.style.color = isError ? "red" : "green";
}
