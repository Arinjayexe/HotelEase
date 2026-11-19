
// HOTEL EASE - JAVASCRIPT

// Search and price filter together
function applyFilters() {

    const cityInput = document.getElementById("citySearch");
    const priceInput = document.getElementById("priceFilter");

    const city = cityInput.value.toLowerCase().trim();
    const price = priceInput.value;

    const hotels = document.querySelectorAll(".hotel-card");

    let visibleHotels = 0;

    hotels.forEach(function(hotel) {

        const hotelCity = hotel.getAttribute("data-city").toLowerCase();
        const hotelPrice = Number(hotel.getAttribute("data-price"));

        let cityMatch = city === "" || hotelCity.includes(city);

        let priceMatch = true;

        if (price === "below2000") {
            priceMatch = hotelPrice < 2000;
        }
        else if (price === "2000to3000") {
            priceMatch = hotelPrice >= 2000 && hotelPrice <= 3000;
        }
        else if (price === "above3000") {
            priceMatch = hotelPrice > 3000;
        }

        if (cityMatch && priceMatch) {
            hotel.style.display = "block";
            visibleHotels++;
        }
        else {
            hotel.style.display = "none";
        }

    });

    const noResults = document.getElementById("noResults");

    if (noResults) {
        noResults.style.display = visibleHotels === 0 ? "block" : "none";
    }
}


// Search button function
function searchHotels() {

    applyFilters();

    document.getElementById("hotels").scrollIntoView({
        behavior: "smooth"
    });

}


// Price filter function
function filterHotels() {

    applyFilters();

}


// Contact form function
function submitContact(event) {

    event.preventDefault();

    alert("Thank you for contacting HotelEase! Your demo message has been submitted.");

    event.target.reset();

}

// HOTEL BOOKING FUNCTION

function confirmBooking() {

    const form = document.getElementById("hotelBookingForm");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const checkin = document.getElementById("bookingCheckin").value;
    const checkout = document.getElementById("bookingCheckout").value;

    if (checkout <= checkin) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    const bookingID = "HE" + Math.floor(100000 + Math.random() * 900000);

    alert(
        "Booking Confirmed Successfully!\n\n" +
        "Booking ID: " + bookingID + "\n" +
        "Hotel: " + document.getElementById("selectedHotel").value + "\n" +
        "Thank you for choosing HotelEase!"
    );

    form.reset();
}

