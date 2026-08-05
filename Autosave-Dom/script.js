const form = document.getElementById("form");
const status = document.getElementById("status");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const bioInput = document.getElementById("bio");
const locationInput = document.getElementById("location");

let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

let editIndex = -1;

// Show all profiles
function displayProfiles() {

    const container = document.getElementById("profileContainer");

    container.innerHTML = "";

    profiles.forEach(function(profile, index) {

        container.innerHTML += `

        <div class="card">

            <h3>${profile.name}</h3>

            <p><strong>Email:</strong> ${profile.email}</p>

            <p><strong>Bio:</strong> ${profile.bio}</p>

            <p><strong>Location:</strong> ${profile.location}</p>

            <div class="buttons">

                <button onclick="editProfile(${index})">
                    Edit
                </button>

                <button onclick="deleteProfile(${index})">
                    Delete
                </button>

            </div>

        </div>

        `;

    });

}

// Save Profile
function saveData() {

    const user = {

        name: nameInput.value,
        email: emailInput.value,
        bio: bioInput.value,
        location: locationInput.value

    };

    if (
        user.name === "" ||
        user.email === "" ||
        user.bio === "" ||
        user.location === ""
    ) {

        status.innerHTML = "Please fill all fields.";
        return;

    }

    if (editIndex === -1) {

        profiles.push(user);

        status.innerHTML = "Profile Added Successfully";

    } else {

        profiles[editIndex] = user;

        status.innerHTML = "Profile Updated Successfully";

        editIndex = -1;

    }

    localStorage.setItem("profiles", JSON.stringify(profiles));

    displayProfiles();

    form.reset();

}

// Edit Profile
function editProfile(index) {

    const user = profiles[index];

    nameInput.value = user.name;
    emailInput.value = user.email;
    bioInput.value = user.bio;
    locationInput.value = user.location;

    editIndex = index;

    status.innerHTML = "Editing Profile...";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Delete Profile
function deleteProfile(index) {

    profiles.splice(index, 1);

    localStorage.setItem("profiles", JSON.stringify(profiles));

    displayProfiles();

    status.innerHTML = "Profile Deleted";

}

// Clear Form
function clearData() {

    form.reset();

    editIndex = -1;

    status.innerHTML = "Form Cleared";

}

// Load Profiles
displayProfiles();