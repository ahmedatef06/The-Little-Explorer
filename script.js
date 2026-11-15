const timelineItems = document.querySelectorAll(".timeline-item");

const eventDate = document.getElementById("event-date");
const eventTitle = document.getElementById("event-title");
const eventDescription = document.getElementById("event-description");

timelineItems.forEach((item) => {

    item.addEventListener("click", () => {

        // Remove active class from all timeline items
        timelineItems.forEach((button) => {
            button.classList.remove("active");
        });

        // Activate the selected item
        item.classList.add("active");

        // Update the event information
        eventDate.textContent = item.dataset.date.toUpperCase();
        eventTitle.textContent = item.dataset.title;
        eventDescription.textContent = item.dataset.description;

    });

});
const roverToggle = document.getElementById("rover-toggle");
const roverVideo = document.getElementById("rover-video");

roverToggle.addEventListener("click", () => {
    const opening = roverVideo.hidden;

    if (opening) {
        const frame = document.createElement("iframe");
        frame.src = "rover-3d.html";
        frame.title = "3D simulation of the Sojourner rover design";
        roverVideo.appendChild(frame);
        roverVideo.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        roverVideo.replaceChildren();
    }

    roverVideo.hidden = !opening;
    roverToggle.setAttribute("aria-expanded", opening);
    roverToggle.textContent = opening
        ? "✕ Close the Simulation"
        : "▶ Watch the 3D Design Simulation";
});