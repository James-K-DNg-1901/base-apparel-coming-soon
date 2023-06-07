function getValue() {
    var inputValue = document.getElementById("myInput").value;
    console.log(inputValue);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(inputValue)) 
    {
        alert("Thank You for your support!");
        document.querySelector(".error-icon").classList.add("hidden");
        document.querySelector(".error-text").classList.add("hidden");
        document.querySelector(".email-insert").classList.remove("error-border");
    }
    else
    {
        document.querySelector(".error-icon").classList.remove("hidden");
        document.querySelector(".error-text").classList.remove("hidden");
        document.querySelector(".email-insert").classList.add("error-border");
    } 
}