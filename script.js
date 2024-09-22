let colorIs = document.getElementById("colorInput");
let change = document.getElementById("change");

colorIs.addEventListener("input",function(){
    const color = colorIs.value;
    change.textContent = color.toUpperCase();
    document.body.style.backgroundColor=`${color}`;
});