document.getElementById("generate").addEventListener("click",function(){
    const Button = this;
    const statusMessage  = document.getElementById("statusMessage");
    const catfact = document.getElementById("catfact");

    Button.disabled = true;
    statusMessage.textContent = "generating......";

    const req = new XMLHttpRequest();

    req.open("GET", "https://catfact.ninja/facts?Limit=45");

    req.responseType = "json";

    req.send();

    req.onload = () => {
        if (req.status ===200) {
            const facts = req.response.data;
            const randomfact = facts[Math.floor(Math.random() * facts.length)].fact;
            catfact.textContent = randomfact;
            statusMessage.textContent = "";
        } else{
            statusMessage.textContent = "failed to fetch a fact, please try again";
        }

        Button.disabled = false;

        req.onerror = () => {
            statusMessage.textContent = "An error occured, please try again";
            Button.disabled = false
    
        };
    }

    
});