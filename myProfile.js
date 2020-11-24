window.addEventListener("DOMContentLoaded", event => {
    const header = document.createElement("h1");
    header.setAttribute("id", "firstHeader");
    header.className = "name";
    let myName = document.createTextNode("Cub Olson");
    header.appendChild(myName);
    document.body.appendChild(header);

    const pic = document.createElement("img");
    pic.setAttribute("src", "/profilePic.jpg");
    document.body.appendChild(pic);

    const header2 = document.createElement("h2");
    header2.setAttribute("id", "clock");
    header2.className = "theClock";
    document.body.appendChild(header2);

    const listBox = document.createElement("ul");
    listBox.className = "my-details";
    listBox.setAttribute("id", "personalInfo");
    document.body.appendChild(listBox);

    const details = [
        "<li>I like to cook spam.</li>",
        "<li>My favorite dessert is churros.</li>",
        "<li>Sometimes I lick frogs</li>",
        "<li>Frogs taste bad, but I gotta.</li>"
    ]
    const liString = details.join("");
    const listElement = document.getElementById("personalInfo");
    listElement.innerHTML = liString;

    let liAdder = document.querySelectorAll("li");
    liAdder.forEach(el =>{
        el.className = "list";
    });

    const time = () => {
        const clock = document.getElementById("clock");
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        clock.innerHTML = "The time is " + hours + ":" + minutes + ":" + seconds;
    }

    setInterval(time, 1000);


});
