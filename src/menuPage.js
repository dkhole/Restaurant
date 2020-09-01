function menuPage() {
    const centerWrapper = document.createElement("div");
    centerWrapper.id = "center-wrapper";
    centerWrapper.style.textAlign = "left";
    centerWrapper.style.paddingTop = "150px";

    const title = document.createElement("div");
    title.id = "menu";
    title.className = "titles";
    title.textContent = "MENU";
    centerWrapper.appendChild(title);

    const textWrapper = document.createElement("div");
    textWrapper.id = "text-wrapper";
    centerWrapper.appendChild(textWrapper);

    const lunchWrapper = document.createElement("div");
    lunchWrapper.id = "lunch-wrapper";
    textWrapper.appendChild(lunchWrapper);

    const heading = document.createElement("div");
    heading.className = "headings";
    heading.textContent = "lunch";
    lunchWrapper.appendChild(heading);

    //Lunch items
    const lunchItem = document.createElement("div");
    lunchItem.className = "food-item";
    lunchItem.textContent = "Moonlight Kiss Rock Oyster 5";
    lunchWrapper.appendChild(lunchItem);
    const lunchInfo = document.createElement("div");
    lunchInfo.className = "food-info";
    lunchInfo.textContent = "Steven Feletti/ Bateman's Bay NSW";
    lunchWrapper.appendChild(lunchInfo);

    const lunchItem2 = document.createElement("div");
    lunchItem2.className = "food-item";
    lunchItem2.textContent = "Tathra Rock Oyster 5.5";
    lunchWrapper.appendChild(lunchItem2);
    const lunchInfo2 = document.createElement("div");
    lunchInfo2.className = "food-info";
    lunchInfo2.textContent = "Gary Rodley/ Nelson's Lagoon Tathra NSW";
    lunchWrapper.appendChild(lunchInfo2);

    const lunchItem3 = document.createElement("div");
    lunchItem3.className = "food-item";
    lunchItem3.textContent = "Organic Wapengo Rock Oyster 6";
    lunchWrapper.appendChild(lunchItem3);
    const lunchInfo3 = document.createElement("div");
    lunchInfo3.className = "food-info";
    lunchInfo3.textContent = "Shane Buckley/ Wapengo Lake NSW";
    lunchWrapper.appendChild(lunchInfo3);

    const lunchItem4 = document.createElement("div");
    lunchItem4.className = "food-item";
    lunchItem4.textContent = "Live Purple Sea Urchin 24";
    lunchWrapper.appendChild(lunchItem4);
    const lunchInfo4 = document.createElement("div");
    lunchInfo4.className = "food-info";
    lunchInfo4.textContent = "Craig Shepherd/ Royal National Park NSW";
    lunchWrapper.appendChild(lunchInfo4);

    const lunchItem5 = document.createElement("div");
    lunchItem5.className = "food-item";
    lunchItem5.textContent = "A Selection of Raw Australian Fish 26";
    lunchWrapper.appendChild(lunchItem5);
    const lunchInfo5 = document.createElement("div");
    lunchInfo5.className = "food-info";
    lunchInfo5.textContent = "Bunya Red Farm Capers & Vividus Extra Virgin Olive Oil";
    lunchWrapper.appendChild(lunchInfo5);

    const dinnerWrapper = document.createElement("div");
    dinnerWrapper.id = "dinner-wrapper";
    textWrapper.appendChild(dinnerWrapper);

    const dinHeading = document.createElement("div");
    dinHeading.className = "headings";
    dinHeading.textContent = "Dinner";
    dinnerWrapper.appendChild(dinHeading);

    //Dinner items
    const dinnerItem = document.createElement("div");
    dinnerItem.className = "food-item";
    dinnerItem.textContent = "The Fish Charcuterie";
    dinnerWrapper.appendChild(dinnerItem);

    const dinnerInfo = document.createElement("div");
    dinnerInfo.className = "food-info";
    dinnerInfo.textContent = "by Fish Butchery";
    dinnerWrapper.appendChild(dinnerInfo);

    const dinnerItem2 = document.createElement("div");
    dinnerItem2.className = "food-item";
    dinnerItem2.textContent = "Cold Smoked Bass Grouper Roe 24";
    dinnerWrapper.appendChild(dinnerItem2);
    const dinnerInfo2 = document.createElement("div");
    dinnerInfo2.className = "food-info";
    dinnerInfo2.textContent = "Dried Tomatoes & Fragrant Herbs";
    dinnerWrapper.appendChild(dinnerInfo2);

    const dinnerItem3 = document.createElement("div");
    dinnerItem3.className = "food-item";
    dinnerItem3.textContent = "Pressed Coral Trout Head 24";
    dinnerWrapper.appendChild(dinnerItem3);
    const dinnerInfo3 = document.createElement("div");
    dinnerInfo3.className = "food-info";
    dinnerInfo3.textContent = "Quince & Saffron Jelly";
    dinnerWrapper.appendChild(dinnerInfo3);

    const dinnerItem4 = document.createElement("div");
    dinnerItem4.className = "food-item";
    dinnerItem4.textContent = "Striped Marlin Nduja 22";
    dinnerWrapper.appendChild(dinnerItem4);
    const dinnerInfo4 = document.createElement("div");
    dinnerInfo4.className = "food-info";
    dinnerInfo4.textContent = "Ulladulla Blue Mackerel on Toast";
    dinnerWrapper.appendChild(dinnerInfo4);

    const dinnerItem5 = document.createElement("div");
    dinnerItem5.className = "food-item";
    dinnerItem5.textContent = "14 Day Dry Aged Murray Cod $52";
    dinnerWrapper.appendChild(dinnerItem5);
    const dinnerInfo5 = document.createElement("div");
    dinnerInfo5.className = "food-info";
    dinnerInfo5.textContent = "Salt & Vinegar Head, Diane Sauce";
    dinnerWrapper.appendChild(dinnerInfo5);

    const content = document.getElementById("content");
    content.appendChild(centerWrapper);
}

export default menuPage;