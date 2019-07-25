let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];


// for (let i = 0; i < students.length; i++) {
//     console.log("Name:" + students[i].name);
//     console.log("Address:" +students[i].address.city);
//     if (students[i].gender === "f") {
//         console.log("gender:female");
//     } else {
//         console.log("gender:male");
//     }
//     console.log("score:" + students[i].admissionTestScore + "marks");
//     console.log("")
// }

// agar internet hai or karachi amin rehta hai 
// tou eligible warna not eligible

//                                 question no 05

// for (let i = 0; i < students.length; i++) {
//     if(students[i].hasInternet == true && students[i].address.city== "Karachi" ){
//         console.log(students[i].name);

//     }
// }

//                                 question no 06
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name + "'s Address: \n" + students[i].address.ilaqa + " in " + students[i].address.city + " , " + students[i].address.country);
// }
//                                 question no 07
// for (let i = 0; i < students.length; i++) {
//     if (students[i].phoneNo.charAt(2) == "3") {
//         console.log(students[i].name + "\n" + students[i].phoneNo + "\n" + "Ufone\n");
//     }

// }

//                                 question no 08

// let groupA=[];
// let groupB=[];
// for (let i = 0; i < students.length; i++) {
//     if (students[i].hasJob === true || students[i].hasSchoolBefore === true) {
//         groupB.push(students[i].name);

//     } else {
//         groupA.push(students[i].name);

//     }
// }
// console.log("groupA: "+ groupA.join(", "));

// console.log("groupB: " + groupB.join(", "));

//                                 question no 09


for (let i = 0; i < students.length; i++) {
    let dob = students[i].dob;
    let today = new Date();
    let
}

