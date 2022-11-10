
document.getElementById("tutee-submit").addEventListener("click", ()=> {
    const yearSelect = document.getElementById("year");
    const name = document.getElementById("tutee-name");
    const email = document.getElementById("tutee-email");
    const courses = document.getElementById("courses");
    const grade = yearSelect.options[yearSelect.selectedIndex].text;
    alert(grade);
})
