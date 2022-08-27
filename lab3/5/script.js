const create = () => {
    let fullname = document.getElementById("fullnamebox").value;
    let phone = document.getElementById("phonebox").value;
    let email = document.getElementById("emailbox").value;
    let company = document.getElementById("companybox").value;
    document.getElementById("fullname").innerText = fullname;
    document.getElementById("phone").innerText = phone;
    document.getElementById("email").innerText = email;
    document.getElementById("company").innerText = company;
}