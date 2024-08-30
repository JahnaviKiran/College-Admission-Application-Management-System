const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const XLSX = require("xlsx")

require("./db/conn");


const RegisterOne = require("./models/registers");
var util = require('util');
fs = require('fs');

var jsonexport = require('jsonexport');
var nestedjson2csv = require('nestedjson2csv');


const { json } = require("express");
const { handle } = require("express/lib/application");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));


app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

console.log(path.join(__dirname, "../views/script.js"));

app.get("/", (req, res) => {
    res.render("index")
})


app.get("/registration", (req, res) => {
    res.render("registration")
})

app.get("/complete", (req, res) => {
    res.render("complete")
})


app.get("/education", (req, res) => {
    res.render("education")
})


app.get("/education2", (req, res) => {
    res.render("education2")
})


app.get("/excel", (req, res) => {
    res.render("excel")
})

app.get("/parentDetails", (req, res) => {
    res.render("parentDetails")
})

// var csvData = [""]
// var registerStudent
// var ename, eusn;
var registerStudentOne;
// create a new user in our database
app.post("/registration", async(req, res) => {

    try {
        // eusn = String(req.body.usn);
        // ename = String(req.body.name);

        registerStudentOne = new RegisterOne({
            students: {
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                applicationNumber: req.body.applicationNumber,
                bloodGroup: req.body.bloodGroup,
                // email: req.body.email,
                gender: req.body.gender,
                // phoneNo: req.body.phoneNo,
                landline: req.body.landline,
                pancard: req.body.pancard,
                adharcard: req.body.adharcard,
                passport: req.body.passport,
                nationality: req.body.nationality,
                domicile: req.body.domicile,
                mothertongue: req.body.mothertongue,
                differentlyabled: req.body.differentlyabled,
                address: req.body.address,
                degree: req.body.degree,
                admissionmode: req.body.admissionmode,
                admissioncat: req.body.admissioncat,
                usn: req.body.usn,
                admissiondate: req.body.admissiondate,
                admissionNo: req.body.admissionNo,
            },
            parentDetails: {
                fname: req.body.fname,
                foccupation: req.body.foccupation,
                fphone: req.body.fphone,
                femail: req.body.femail,
                fincome: req.body.fincome,
                mname: req.body.mname,
                moccupation: req.body.moccupation,
                mphone: req.body.mphone,
                memail: req.body.memail,
                mincome: req.body.mincome,
                gname: req.body.gname,
                goccupation: req.body.goccupation,
                gphone: req.body.gphone,
                gemail: req.body.gemail,
                gincome: req.body.gincome,
            },

            bankDetails: {
                bankname: req.body.bankname,
                bankBranchname: req.body.bankBranchname,
                bankAccountnumber: req.body.bankAccountnumber,
                ifsc: req.body.ifsc,
            },

            Xdetails: {
                X_Institution: req.body.X_Institution,
                XCGPAorPercentage: req.body.XCGPAorPercentage,
                XRegistrationNumber: req.body.XRegistrationNumber,
                XMedium: req.body.XMedium,
                Xboard: req.body.Xboard,
                Xpassingyear: req.body.Xpassingyear,
                XAddress: req.body.XAddress,
            },

            XIdetails: {
                XI_Institution: req.body.XI_Institution,
                XICGPAorPercentage: req.body.XICGPAorPercentage,
                XIRegistrationNumber: req.body.XIRegistrationNumber,
                XIMedium: req.body.XIMedium,
                XIboard: req.body.XIboard,
                XIpassingyear: req.body.XIpassingyear,
                XIAddress: req.body.XIAddress,
                XISpecialization: req.body.XISpecialization,

                XIPhyObMarks: req.body.XIPhyObMarks,
                XIPhyMaxMarks: req.body.XIPhyMaxMarks,
                XIPhyObCgpa: req.body.XIPhyObCgpa,
                XIPhyMaxCgpa: req.body.XIPhyMaxCgpa,

                XIChemObMarks: req.body.XIChemObMarks,
                XIChemMaxMarks: req.body.XIChemMaxMarks,
                XIChemObCgpa: req.body.XIChemObCgpa,
                XIChemMaxCgpa: req.body.XIChemMaxCgpa,

                XIMathObMarks: req.body.XIMathObMarks,
                XIMathMaxMarks: req.body.XIMathMaxMarks,
                XIMathObCgpa: req.body.XIMathObCgpa,
                XIMathMaxCgpa: req.body.XIMathMaxCgpa,

                XISpecializationMarks: req.body.XISpecializationMarks,

                XIOpObMarks: req.body.XIOpObMarks,
                XIOpMaxMarks: req.body.XIOpMaxMarks,
                XIOpObCgpa: req.body.XIOpObCgpa,
                XIOpMaxCgpa: req.body.XIOpMaxCgpa,
            },

            XIIdetails: {
                XII_Institution: req.body.XI_Institution,
                XIICGPAorPercentage: req.body.XICGPAorPercentage,
                XIIRegistrationNumber: req.body.XIRegistrationNumber,
                XIIMedium: req.body.XIMedium,
                XIIboard: req.body.XIboard,
                XIIpassingyear: req.body.XIpassingyear,
                XIIAddress: req.body.XIAddress,
                XIISpecialization: req.body.XISpecialization,

                XIIPhyObMarks: req.body.XIIPhyObMarks,
                XIIPhyMaxMarks: req.body.XIIPhyMaxMarks,
                XIIPhyObCgpa: req.body.XIIPhyObCgpa,
                XIIPhyMaxCgpa: req.body.XIIPhyMaxCgpa,

                XIIChemObMarks: req.body.XIIChemObMarks,
                XIIChemMaxMarks: req.body.XIIChemMaxMarks,
                XIIChemObCgpa: req.body.XIIChemObCgpa,
                XIIChemMaxCgpa: req.body.XIIChemMaxCgpa,

                XIIMathObMarks: req.body.XIIMathObMarks,
                XIIMathMaxMarks: req.body.XIIMathMaxMarks,
                XIIMathObCgpa: req.body.XIIMathObCgpa,
                XIIMathMaxCgpa: req.body.XIIMathMaxCgpa,

                XIISpecializationMarks: req.body.XIISpecializationMarks,

                XIIOpObMarks: req.body.XIIOpObMarks,
                XIIOpMaxMarks: req.body.XIIOpMaxMarks,
                XIIOpObCgpa: req.body.XIIOpObCgpa,
                XIIOpMaxCgpa: req.body.XIIOpMaxCgpa,
            },
        })

        const registered = await registerStudentOne.save();
        console.log(req.body.name);
        console.log(registerStudentOne);
        res.status(201).render("excel");

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
})



app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})

// extra

//   export to excel
const x = { counter: 1 }

app.post('/exportsdata', (req, res) => {

    if (x.counter == 1) {
        nestedjson2csv({
            data: registerStudentOne,
            fields: ['', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '',
            ],
            fieldNames: ['name', 'dateOfBirth', 'applicationNumber', 'bloodGroup', //4
                'gender', 'landline', 'passport', 'adharcard', 'pancard', //5
                'nationality', 'domicile', 'mothertongue', 'differentlyabled', //4
                'address', 'degree', 'admissionmode', 'admissioncat', //4
                'degyear', 'joinyear', 'usn', 'admissiondate', //4
                'fname', 'foccupation', 'fphone', 'femail', //4
                'fincome', 'mname', 'moccupation', 'mphone', //4
                'memail', 'mincome', 'gname', 'goccupation', //4
                'gphone', 'gemail', 'gincome', 'bankname', //4
                'bankBranchname', 'bankAccountnumber', 'ifsc', //3
                'Xpassingyear', 'XAddress', 'X_Institution', 'XCGPA/Percentage', //4
                'XRegistrationNumber', 'XMedium', 'Xboard', 'Xpassingyear', //4
                'XI_Institution', //1
                'XICGPAorPercentage', 'XIRegistrationNumber', 'XIMedium', 'XIboard', //4
                'XIpassingyear', 'XIAddress', 'XISpecialization', 'XIPhyObMarks', //4
                'XIPhyMaxMarks', 'XIPhyObCgpa', 'XIPhyMaxCgpa', //3
                'XIChemObMarks', 'XIChemMaxMarks', 'XIChemObCgpa', 'XIChemMaxCgpa', //4
                'XIMathsObMarks', 'XIMathsMaxMarks', //2
                'XIMathsObCgpa', 'XIMathsMaxCgpa', 'XISpecializationMarks', 'XIOpObMarks', //4
                'XIOpMaxMarks', 'XIOpObCgpa', 'XIOpMaxCgpa', //3
                'XII_Institution', 'XIICGPAorPercentage', 'XIIRegistrationNumber', //3
                'XIIMedium', 'XIIboard', 'XIIpassingyear', //3
                'XIIAddress', 'XIISpecialization', 'XIIPhyObMarks', //3
                'XIIPhyMaxMarks', 'XIIPhyObCgpa:', 'XIIPhyMaxCgpa', //3
                'XIIChemObMarks', 'XIIChemMaxMarks', 'XIIChemObCgpa', //3
                'XIIChemMaxCgpa', 'XIIMathsObMarks', 'XIIMathsMaxMarks', //3
                'XIIMathsObCgpa', 'XIIMathsMaxCgpa', 'XIISpecializationMarks', //3
                'XIIOpObMarks', 'XIIOpMaxMarks', //2
                'XIIOpObCgpa', 'XIIOpMaxCgpa' //2
            ]
        }, function(err, csv) {
            if (err) console.log(err);
            fs.writeFile('file4.csv', csv, function(err) {
                if (err) throw err;
                console.log('file created');
            });
        });
        x.counter = 0;
    }
    nestedjson2csv({
            data: registerStudentOne,
            fields: ['students.name', 'students.dateOfBirth', 'students.applicationNumber', 'students.bloodGroup', //4
                'students.gender', 'students.landline', 'students.passport', 'students.adharcard', 'students.pancard', //5
                'students.nationality', 'students.domicile', 'students.mothertongue', 'students.differentlyabled', //4
                'students.address', 'students.degree', 'students.admissionmode', 'students.admissioncat', //4
                'students.degyear', 'students.joinyear', 'students.usn', 'students.admissiondate', //4
                'parentDetails.fname', 'parentDetails.foccupation', 'parentDetails.fphone', 'parentDetails.femail', //4
                'parentDetails.fincome', 'parentDetails.mname', 'parentDetails.moccupation', 'parentDetails.mphone', //4
                'parentDetails.memail', 'parentDetails.mincome', 'parentDetails.gname', 'parentDetails.goccupation', //4
                'parentDetails.gphone', 'parentDetails.gemail', 'parentDetails.gincome', ' bankDetails.bankname', //4
                'bankDetails.bankBranchname', 'bankDetails.bankAccountnumber', 'bankDetails.ifsc', //3
                'Xdetails.Xpassingyear', 'Xdetails.XAddress', ' Xdetails.X_Institution', ' Xdetails.XCGPA/Percentage', //4
                'Xdetails.XRegistrationNumber', ' Xdetails.XMedium', 'Xdetails.Xboard', ' Xdetails.Xpassingyear', //4
                'XIdetails.XI_Institution', //1
                'XIdetails.XICGPAorPercentage', 'XIdetails.XIRegistrationNumber', 'XIdetails.XIMedium', 'XIdetails.XIboard', //4
                'XIdetails.XIpassingyear', 'XIdetails.XIAddress', 'XIdetails.XISpecialization', 'XIdetails.XIPhyObMarks', //4
                'XIdetails.XIPhyMaxMarks', 'XIdetails.XIPhyObCgpa', 'XIdetails.XIPhyMaxCgpa', //3
                'XIdetails.XIChemObMarks', 'XIdetails.XIChemMaxMarks', 'XIdetails.XIChemObCgpa:', 'XIdetails.XIChemMaxCgpa:', //4
                'XIdetails.XIMathsObMarks', 'XIdetails.XIMathsMaxMarks', //2
                'XIdetails.XIMathsObCgpa', 'XIdetails.XIMathsMaxCgpa', 'XIdetails.XISpecializationMarks', 'XIdetails.XIOpObMarks', //4
                'XIdetails.XIOpMaxMarks', 'XIdetails.XIOpObCgpa', 'XIdetails.XIOpMaxCgpa', //3
                'XIIdetails.XII_Institution', 'XIIdetails.XIICGPAorPercentage', 'XIIdetails.XIIRegistrationNumber', //3
                'XIIdetails.XIIMedium', 'XIIdetails.XIIboard', 'XIIdetails.XIIpassingyear', //3
                'XIIdetails.XIIAddress', 'XIIdetails.XIISpecialization', 'XIIdetails.XIIPhyObMarks', //3
                'XIIdetails.XIIPhyMaxMarks', 'XIIdetails.XIIPhyObCgpa', 'XIIdetails.XIIPhyMaxCgpa', //3
                'XIIdetails.XIIChemObMarks', 'XIIdetails.XIIChemMaxMarks', 'XIIdetails.XIIChemObCgpa', //3
                'XIIdetails.XIIChemMaxCgpa', 'XIIdetails.XIIMathsObMarks', 'XIIdetails.XIIMathsMaxMarks', //3
                'XIIdetails.XIIMathsObCgpa', 'XIIdetails.XIIMathsMaxCgpa', 'XIIdetails.XIISpecializationMarks', //3
                'XIIdetails.XIIOpObMarks', 'XIIdetails.XIIOpMaxMarks', //2
                'XIIdetails.XIIOpObCgpa', 'XIIdetails.XIIOpMaxCgpa' //2
            ],
            fieldNames: ['', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '',
            ]
        },
        function(err, csv) {
            if (err) console.log(err);
            fs.writeFile('file4.csv', '\n' + csv, { flag: 'a' }, function(err) {
                if (err) throw err;
                console.log('file appended');
            });
        });

    res.status(201).redirect("complete");
})

app.post('/complete', (req, res) => {
    res.status(201).redirect("/");

})


// 'bankname'
// 'bankBranchname'
// 'bankAccountnumber'
// 'ifsc'


// 'fname'
// 'foccupation'
// 'fphone'
// 'femail'
// 'fincome'
// 'mname'
// 'moccupation'
// 'mphone'
// 'memail'
// 'mincome'
// 'gname'
// 'goccupation'
// 'gphone'
// 'gemail'
// 'gincome'


// 'name'
// 'dateOfBirth'
// 'applicationNumber'
// 'bloodGroup'
// 'gender'
// 'landline'
// 'passport'
// 'adharcard'
// 'pancard'
// 'nationality'
// 'domicile'
// 'mothertongue'
// 'differentlyabled'
// 'address'
// 'degree'
// 'admissionmode'
// 'admissioncat'
// 'degyear'
// 'joinyear'
// 'usn'
// 'admissiondate'


// 'Xpassingyear'
// 'XAddress'
// 'X_Institution'
// 'XCGPA/Percentage'
// 'XRegistrationNumber'
// 'XMedium'
// 'Xboard'
// 'Xpassingyear'
// 'XAddress'
// // -------------------------------------------------

// 'XI_Institution'
// 'XICGPAorPercentage'
// 'XIRegistrationNumber'
// 'XIMedium'
// 'XIboard'
// 'XIpassingyear'
// 'XIAddress'
// 'XISpecialization'

// 'XIPhyObMarks:'
// 'XIPhyMaxMarks:'
// 'XIPhyObCgpa:'
// 'XIPhyMaxCgpa:'

// 'XIChemObMarks:'
// 'XIChemMaxMarks:'
// 'XIChemObCgpa:'
// 'XIChemMaxCgpa:'

// 'XIMathsObMarks:'
// 'XIMathsMaxMarks:'
// 'XIMathsObCgpa:'
// 'XIMathsMaxCgpa:'

// 'XIOpObMarks:'
// 'XIOpMaxMarks:'
// 'XIOpObCgpa:'
// 'XIOpMaxCgpa:'

'XII_Institution'
'XIICGPAorPercentage'
'XIIRegistrationNumber'
'XIIMedium'
'XIIboard'
'XIIpassingyear'
'XIIAddress'
'XIISpecialization'

'XIIPhyObMarks:'
'XIIPhyMaxMarks:'
'XIIPhyObCgpa:'
'XIIPhyMaxCgpa:'

'XIIChemObMarks:'
'XIIChemMaxMarks:'
'XIIChemObCgpa:'
'XIIChemMaxCgpa:'

'XIIMathsObMarks:'
'XIIMathsMaxMarks:'
'XIIMathsObCgpa:'
'XIIMathsMaxCgpa:'

'XIISpecializationMarks'

'XIIOpObMarks:'
'XIIOpMaxMarks:'
'XIIOpObCgpa:'
'XIIOpMaxCgpa:'