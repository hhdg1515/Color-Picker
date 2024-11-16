const schemeTitle = document.getElementById("scheme-picker");
const colorPicker = document.getElementById("color-picker");
document.getElementById("get-scheme-btn").addEventListener("click", getColorScheme);

function getColorScheme(){
    let color = colorPicker.value;
    const colorScheme = schemeTitle.value;
    const colorCount = 5;
    color = color.replace(/^#/, "");
    
    //Fetch the color scheme from API
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}&count=${colorCount}`)
        .then(res => res.json())
        .then(data => {
            let colors = [];
            for (let i = 0; i < data.colors.length; i++) {
                const colorObject = data.colors[i];
                const hexCode = colorObject.hex.value;
                colors.push(hexCode);
            }
            //Build HTML to display the color    
            let html = "";
            colors.forEach(function(color) {
                html += `
                    <div class="color-card">
                    <div class="color-box" style="background-color:${color};"></div>
                    <p class="hex-code">${color}</p>
                    </div>
            `});     
            document.getElementById("color-palette").innerHTML = html;
            })
} 