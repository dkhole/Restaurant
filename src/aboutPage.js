function aboutPage() {
    const centerWrapper = document.createElement("div");
    centerWrapper.id = "center-wrapper";
    centerWrapper.style.textAlign = "left";
    centerWrapper.style.paddingTop = "150px";

    const textWrapper = document.createElement("div");
    textWrapper.id = "text-wrapper";
    centerWrapper.appendChild(textWrapper);

    const title = document.createElement("div");
    title.className = "titles";
    title.textContent = "ABOUT";
    textWrapper.appendChild(title);

    const heading = document.createElement("div");
    heading.className = "headings";
    heading.textContent = "Saint Peter is an Australian Fish Eatery.";
    textWrapper.appendChild(heading);

    const paragraph = document.createElement("div");
    paragraph.className = "paragraphs";
    paragraph.textContent = "Our mission is to showcase Australian sustainably sourced seafood, prepare it expertly and serve it simply.";
    textWrapper.appendChild(paragraph);
    
    const paragraph2 = document.createElement("div");
    paragraph2.className = "paragraphs";
    paragraph2.textContent = "We work closely with fisherman around Australia to source only the best seafood. All our fish is purchased whole and processed in our custom designed Fish Butchery just down the road from the restaurant. Some species of fish are dry aged in our custom designed coolrooms, allowing us to intensify and clarify the flavour of certain species as well as achieve maximum skin crispness.";
    textWrapper.appendChild(paragraph2);

    const paragraph3 = document.createElement("div");
    paragraph3.className = "paragraphs";
    paragraph3.textContent = "Our sustainable approach and appreciation of Australian fish is displayed by our use of the whole fish, including offal where appropriate. Our attention to detail in all things fish, flows down into everything we do; from our vegetable preparations, to our exquisite tarts for dessert and our Australian wine list.";
    textWrapper.appendChild(paragraph3);

    const content = document.getElementById("content");
    content.appendChild(centerWrapper);
}

export default aboutPage;