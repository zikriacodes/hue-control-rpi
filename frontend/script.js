const flickerButton = document.getElementById("flickerButton");
const lights = document.querySelectorAll(".grid-col");
const btnWindows = document.querySelectorAll(".btn-window");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("btn-close");
const okBtn = document.getElementById("ok-btn");

console.log(btnWindows);

lights.forEach((light) => {
    light.isOn = false;
    light.addEventListener("click", function() {
        if (light.isOn == false) {
            light.style.background = "#A9A9A9";
            light.isOn = true;
        } else {
            light.style.background = "#ededed";
            light.isOn = false;
        }
        
    });
});

btnWindows.forEach((btnWindow) => {
    btnWindow.addEventListener("click", async function() {
        if (btnWindow.innerHTML == "Flicker") {
            try {
                const response = await fetch('', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                await response.json();
            } catch (e){
                console.error(e);
                alert("smth went wrong");
            }
        }
            modal.style.display = "block";
            isWindowOpen = true;
    });
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
})

okBtn.addEventListener("click", function() {
    modal.style.display = "none";
})

flickerButton.addEventListener("click", flickerLights);

function flickerLights() {
    // TODO Call to api
}

function makeClickable() {
    //
}