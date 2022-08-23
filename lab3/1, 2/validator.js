function validateForm() {
    let fname = document.forms.myForm.FirstName.value;
    let lname = document.forms.myForm.LastName.value;
    let address = document.forms.myForm.Address.value;
    if (fname.length <= 1 || fname.length >= 21 || !checkString(fname)) {
        alert("ต้องเป็นตัวอักษร ความยาวระหว่าง 2-20 ตัวอักษร");
    }
    else if (lname.length <= 1 || lname.length >= 31 || !checkString(lname)) {
        alert("ต้องเป็นตัวอักษร ความยาวระหว่าง 2-30 ตัวอักษร");
    }
    else if (address.length <= 5) {
        alert("ความยาวไม่ต่ำกว่า 5 ตัวอักษร")
    }
}

function checkString(string) { //ถ้ากันอักขระพิเศษด้วยมาเพิ่มตรงนี้
    for (let i = 0; i < string.length; i++) {
        if (string[i] in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
            return false
        }
        return true
    }
}

//let fname = document.forms["myForm"]["FirstName"].value;
//let country = document.forms["myForm"]["Country"].value;

/**
     - การตรวจสอบความยาวของตัวอักษร
     let str = new String( "This is string" );
     document.write("str.length is:" + str.length);
     // str.length is: 14
     - การหาตำแหน่งข้อความในชุดตัวอักษร
     let str = "Hello world, welcome to the universe.";
     let n = str.indexOf("welcome"); 
     // n = 13
*/