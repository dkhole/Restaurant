function contactPage(){
    const centerWrapper = document.createElement("div");
    centerWrapper.id = "center-wrapper";
    centerWrapper.style.textAlign = "left";
    centerWrapper.style.paddingTop = "150px";

    const textWrapper = document.createElement("div");
    textWrapper.id = "text-wrapper";

    centerWrapper.appendChild(textWrapper);

    const contact = document.createElement("div");
    contact.id = "contact";
    const contactHeading = document.createElement("div");
    contactHeading.className = "titles";
    contactHeading.textContent = "CONTACT";
    contact.appendChild(contactHeading);

    const contactNum = document.createElement("div");
    contactNum.className = "paragraphs";
    contactNum.textContent = "02 8937 2530 (unattended Sunday - Wednesday afternoon)";
    contact.appendChild(contactNum);

    const contactadd = document.createElement("div");
    contactadd.className = "paragraphs";
    contactadd.textContent = "362 Oxford St, Paddington, NSW";0
    contact.appendChild(contactadd);

    const contactEmail = document.createElement("div");
    contactEmail.className = "paragraphs";
    contactEmail.textContent = "hello@saintpeter.com.au (unattended Sunday - Wednesday afternoon)";
    contact.appendChild(contactEmail);
    textWrapper.appendChild(contact);

    const hours = document.createElement("div");
    hours.id = "hours";

    const hoursHeading = document.createElement("div");
    hoursHeading.className = "titles";
    hoursHeading.textContent = "HOURS";
    hours.appendChild(hoursHeading);

    const wednesday = document.createElement("div");
    wednesday.className = "paragraphs";
    wednesday.textContent = "Wednesday - 6pm - late";
    hours.appendChild(wednesday);

    const thursday = document.createElement("div");
    thursday.className = "paragraphs";
    thursday.textContent = "Thursday - Lunch 12pm-2pm, Dinner 6pm - late";
    hours.appendChild(thursday);

    const friday = document.createElement("div");
    friday.className = "paragraphs";
    friday.textContent = "Lunch 12pm-2pm, Dinner 6pm - late";
    hours.appendChild(friday);

    const saturday = document.createElement("div");
    saturday.className = "paragraphs";
    saturday.textContent = "Lunch 12pm-2pm, Dinner 6pm - late";
    hours.appendChild(saturday);


    const closed = document.createElement("div");
    closed.className = "paragraphs";
    closed.textContent = "Sunday -> Monday - Closed";
    hours.appendChild(closed);

    textWrapper.appendChild(hours);

    const content = document.getElementById("content");
    content.appendChild(centerWrapper);
}

export default contactPage;