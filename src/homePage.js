import Fish from './fish.png'

function homePage() {
    const fishImg = new Image();
    fishImg.src = Fish;

    const content = document.getElementById("content");

    const centerWrapper = document.createElement("div");
    centerWrapper.id = "center-wrapper";

    const fish = document.createElement("div");
    fish.id = "fish";
    fish.appendChild(fishImg);

    content.appendChild(centerWrapper);
    centerWrapper.appendChild(fish);
}


export default homePage;