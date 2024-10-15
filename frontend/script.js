// script.js

const hotelsGrid = document.getElementById('hotels-grid');
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const bookingForm = document.getElementById('booking-form');
let selectedHotel = null;

// Fetch and display hotels
async function loadHotels() {
  try {
    const response = await fetch('http://localhost:5000/hotels');
    const hotels = await response.json();
    displayHotels(hotels);
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }
}

function displayHotels(hotels) {
  hotelsGrid.innerHTML = hotels
    .map(
      (hotel) => `
      <div class="popular__card" data-id="${hotel._id}">
        <img src="${hotel.image}" alt="${hotel.name}" />
        <div class="popular__content">
          <h4>${hotel.name}</h4>
          <p>${hotel.location}</p>
          <p>$${hotel.price}/night</p>
          <button class="book-btn" onclick="openBookingModal('${hotel._id}')">Book Now</button>
        </div>
      </div>`
    )
    .join('');
}

function openBookingModal(hotelId) {
  selectedHotel = hotelId;
  bookingModal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
  bookingModal.classList.add('hidden');
  selectedHotel = null;
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookingDetails = {
    guestName: document.getElementById('guest-name').value,
    guestEmail: document.getElementById('guest-email').value,
    checkIn: document.getElementById('check-in').value,
    checkOut: document.getElementById('check-out').value,
    hotelId: selectedHotel,
  };
  console.log('Booking Details:', bookingDetails);
  // You can send bookingDetails to your backend here.
  alert('Booking Successful!');
  bookingModal.classList.add('hidden');
  bookingForm.reset();
});

// Load hotels when the page loads
document.addEventListener('DOMContentLoaded', loadHotels);
