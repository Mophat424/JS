// JSON data (events array)
const events = [
  {
    "id": 1,
    "imageUrl": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "title": "Summer Music Festival",
    "price": 50,
    "date": "August 20, 2021",
    "location": "Central Park, New York City",
    "company": "Music Festivals Inc."
  },
  {
    "id": 2,
    "imageUrl": "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "title": "Food and Wine Expo",
    "price": 75,
    "date": "September 25, 2021",
    "location": "Moscone Center, San Francisco",
    "company": "Food and Wine Events LLC"
  },

  {
    "id": 3,
    "imageUrl": "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "title": "Comic Con",
    "price": 35,
    "date": "October 15, 2021",
    "location": "Los Angeles Convention Center",
    "company": "Comic Con International"
},
{
    "id": 4,
    "imageUrl": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "title": "Art and Design Fair",
    "price": 20,
    "date": "November 12, 2021",
    "location": "Navy Pier, Chicago",
    "company": "Art and Design Expo LLC"
},
{
    "id": 5,
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "title": "Holiday Market",
    "price": 5,
    "date": "December 3, 2021",
    "location": "Union Square, New York City",
    "company": "Holiday Markets Inc."
},
{
    "id": 6,
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "title": "Concert in the Park",
    "price": 20,
    "date": "August 20, 2022",
    "location": "Central Park, New York City",
    "company": "Live Nation"
},
{
    "id": 7,
    "imageUrl": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "title": "Food and Wine Festival",
    "price": 50,
    "date": "September 15-18, 2022",
    "location": "Union Square, San Francisco",
    "company": "Taste of San Francisco"
},
{
    "id": 8,
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "title": "Summer Beach Party",
    "price": 15,
    "date": "July 3, 2022",
    "location": "Venice Beach, Los Angeles",
    "company": "LA Beach Parties"
},
{
    "id": 9,
    "imageUrl": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "title": "Angular Nation Expo",
    "price": 35,
    "date": "October 1-3, 2022",
    "location": "Google Hall, San Fransico",
    "company": "ArtExpo NY"
},
{
    "id": 10,
    "imageUrl": "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "title": "Sports and Adventure Expo",
    "price": 20,
    "date": "May 20-22, 2022",
    "location": "McCormick Place, Chicago",
    "company": "Google"
}
  // ... More events
];

// Mock fetch function to simulate asynchronous data fetching
function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events); // Return the events array after a delay
    }, 1000); // Simulating a delay of 1 second
  });
}

// DOM Elements
const eventContainer = document.getElementById('event-container');
const favoritesContainer = document.getElementById('favorites-container');
const sortBySelect = document.getElementById('sort-by');
const filterLocationInput = document.getElementById('filter-location');

let favorites = [];
let event = [];

// Function to display events
function displayEvents(eventList) {
  eventContainer.innerHTML = ''; // Clear previous events

  eventList.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');

    eventCard.innerHTML = `
      <img data-src="${event.imageUrl}" alt="${event.title}" class="lazy-img">
      <h3>${event.title}</h3>
      <p>Price: $${event.price}</p>
      <p>Date: ${event.date}</p>
      <p>Location: ${event.location}</p>
      <button class="favorite-btn" data-id="${event.id}">
        ${favorites.includes(event.id) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    `;

    eventContainer.appendChild(eventCard);
  });

  lazyLoadImages();
}

// Function to filter by location
function filterByLocation(location) {
  return events.filter(event => event.location.toLowerCase().includes(location.toLowerCase()));
}

// Function to parse date (handles date ranges)
function parseDate(dateString) {
  const firstDate = dateString.split('-')[0];
  return new Date(firstDate.trim());
}

// Function to sort events
function sortEvents(events, criteria) {
  switch (criteria) {
    case 'price-asc':
      return events.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return events.sort((a, b) => b.price - a.price);
    case 'date-asc':
      return events.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    case 'date-desc':
      return events.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    default:
      return events;
  }
}

// Event listener for sorting
sortBySelect.addEventListener('change', async (e) => {
  const sortedEvents = sortEvents([...events], e.target.value);
  displayEvents(sortedEvents);
});

// Event listener for filtering
filterLocationInput.addEventListener('input', async (e) => {
  const filteredEvents = filterByLocation(e.target.value);
  displayEvents(filteredEvents);
});

// Add to favorites
function toggleFavorite(eventId) {
  if (favorites.includes(eventId)) {
    favorites = favorites.filter(id => id !== eventId);
  } else {
    favorites.push(eventId);
  }

  updateFavorites();
}

// Update favorites UI
function updateFavorites() {
  const favoriteEvents = events.filter(event => favorites.includes(event.id));
  favoritesContainer.innerHTML = ''; // Clear previous favorites

  favoriteEvents.forEach(event => {
    const favCard = document.createElement('div');
    favCard.classList.add('event-card');

    favCard.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.location}</p>
      <button class="favorite-btn" data-id="${event.id}">
        Remove from Favorites
      </button>
    `;

    favoritesContainer.appendChild(favCard);
  });

  displayEvents(events);
}

// Lazy loading of images
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('.lazy-img');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-img');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });
}

// Event delegation for adding/removing favorites
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('favorite-btn')) {
    const eventId = parseInt(e.target.dataset.id);
    toggleFavorite(eventId);
  }
});

// Fetch and display events asynchronously
async function init() {
  const eventList = await fetchEvents(); // Simulate fetching event data asynchronously
  displayEvents(eventList); // Display the events
}

init(); // Call the init function to load the events

