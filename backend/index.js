const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/appointments', async (req, res) => {
  const { firstName, lastName, email, additionalEmails, serviceId, datetime } = req.body;

  if (!firstName || !lastName || !email || !serviceId || !datetime) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

 function toLocalISOString(date) {
  const tzoffset = date.getTimezoneOffset() * 60000; 
  const localISOTime = new Date(date - tzoffset).toISOString().slice(0, -1);
  const offsetHours = Math.floor(Math.abs(date.getTimezoneOffset() / 60));
  const offsetMinutes = Math.abs(date.getTimezoneOffset() % 60);
  const offsetSign = date.getTimezoneOffset() > 0 ? "-" : "+";
  return (
    localISOTime +
    offsetSign +
    String(offsetHours).padStart(2, "0") +
    ":" +
    String(offsetMinutes).padStart(2, "0")
  );
}

const appointmentDateTime = toLocalISOString(new Date(datetime));

  const payload = {
    appointmentTypeID: serviceId,     
    datetime: appointmentDateTime,    
    lastName,
    email,
    calendarID: 12565463,
    
  };

  
  if (additionalEmails && additionalEmails.length > 0) {
    payload.notes = 'Additional Emails: ' + additionalEmails.join(', ');
  }

  try {
    const auth = {
      username: process.env.ACUITY_USER_ID,
      password: process.env.ACUITY_API_KEY,
    };

    const response = await axios.post(
      'https://acuityscheduling.com/api/v1/appointments',
      payload,
      {
        auth,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ message: 'Booking successful!', data: response.data });
  } catch (error) {
    console.error('Acuity API error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to make booking',
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
