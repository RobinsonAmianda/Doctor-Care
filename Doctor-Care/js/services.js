// services.js

const services = [
    {
        id: 1,
        title: "Orthopedics",
        description:"Comprehensive orthopedic care for all ages, including diagnosis, treatment, and rehabilitation.",
    },    
    {
        id: 2,
        title: "Dentistry",
        description: "Our dental professionals provide preventive and restorative care for a healthy smile.",
    },
    {
        id: 3,
        title: "Cardiology",
        description: "Specialized care for heart-related conditions, including consultations and treatment plans.",
    },
    {
        id: 4,
        title: "Pediatricss",
        description: "Comprehensive healthcare for children, including routine check-ups and vaccinations..",
    },
    {
        id: 5,
        title: "Gynecology",
        description: "Expert care for women's health, including regular screenings and reproductive health services.",
    },
    {
        id: 6,
        title: "Dermatology",
        description: "Comprehensive care for skin conditions, including diagnosis and treatment options.",
    }
];

// Function to generate service HTML
function generateServiceHTML(service) {
    return `
        <div class="bg-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg overflow-hidden">
            <div class="p-6 text-left">
                <img src="./images/service-icon.png" alt="${service.title}" class="">
                <h3 class="text-2xl font-semibold my-4">${service.title}</h3>
                <p class="text-gray-700 mb-4">${service.description}</p>
            </div>
        </div>
    `;
}

//inject it into the html container
const serviceContainer = document.getElementById('service-container');
serviceContainer.innerHTML = services.map(generateServiceHTML).join('');

