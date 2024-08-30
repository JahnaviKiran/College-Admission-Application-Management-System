const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    students: {
        name: {
            type: String,
            required: true,

        },
        dateOfBirth: {
            type: String,
            // required: true
        },
        applicationNumber: {
            type: String,
            // required: true
        },
        bloodGroup: {
            type: String,
            // required: true
        },

        gender: {
            type: String,

        },

        // phoneNo: {
        //     type: Number,
        // 
        landline: {
            type: Number,

        },

        passport: {
            type: Number,
        },
        adharcard: {
            type: Number,
        },
        pancard: {
            type: Number,
        },
        nationality: {
            type: String,
        },
        domicile: {
            type: String,
        },
        mothertongue: {
            type: String,
        },

        differentlyabled: {
            type: String,
        },

        address: {
            type: String,
        },

        degree: {
            type: String,
        },
        admissionmode: {
            type: String,
        },
        admissioncat: {
            type: String,
        },

        degyear: {
            type: String,
        },
        joinyear: {
            type: String,
        },
        usn: {
            type: String,
        },
        admissiondate: {
            type: String,
        },

        admissionNo: {
            type: Number,
        }

    },

    parentDetails: {
        fname: { type: String, },
        foccupation: { type: String, },
        fphone: { type: String, },
        femail: { type: String, },
        fincome: { type: String, },
        mname: { type: String, },
        moccupation: { type: String, },
        mphone: { type: String, },
        memail: { type: String, },
        mincome: { type: String, },
        gname: { type: String, },
        goccupation: { type: String, },
        gphone: { type: String, },
        gemail: { type: String, },
        gincome: { type: String, },
    },

    bankDetails: {
        bankname: { type: String, },
        bankBranchname: { type: String, },
        bankAccountnumber: { type: String, },
        ifsc: { type: String, },
    },

    Xdetails: {
        X_Institution: { type: String, },
        XCGPAorPercentage: { type: String, },
        XRegistrationNumber: { type: String, },
        XMedium: { type: String },
        Xboard: { type: String },
        Xpassingyear: { type: String },
        XAddress: { type: String, },
    },

    XIdetails: {
        XI_Institution: { type: String, },
        XICGPAorPercentage: { type: String, },
        XIRegistrationNumber: { type: String, },
        XIMedium: { type: String, },
        XIboard: { type: String, },
        XIpassingyear: { type: String, },
        XIAddress: { type: String, },
        XISpecialization: { type: String, },

        XIPhyObMarks: { type: String, },
        XIPhyMaxMarks: { type: String, },
        XIPhyObCgpa: { type: String, },
        XIPhyMaxCgpa: { type: String, },

        XIChemObMarks: { type: Number, },
        XIChemMaxMarks: { type: Number, },
        XIChemObCgpa: { type: Number, },
        XIChemMaxCgpa: { type: Number, },

        XIMathObMarks: { type: Number, },
        XIMathMaxMarks: { type: Number, },
        XIMathObCgpa: { type: Number, },
        XIMathMaxCgpa: { type: Number, },

        XISpecializationMarks: { type: String, },

        XIOpObMarks: { type: Number, },
        XIOpMaxMarks: { type: Number, },
        XIOpObCgpa: { type: Number, },
        XIOpMaxCgpa: { type: Number, },
    },

    XIIdetails: {
        XII_Institution: { type: String, },
        XIICGPAorPercentage: { type: String, },
        XIIRegistrationNumber: { type: String, },
        XIIMedium: { type: String, },
        XIIboard: { type: String, },
        XIIpassingyear: { type: String, },
        XIIAddress: { type: String, },
        XIISpecialization: { type: String, },

        XIIPhyObMarks: { type: Number, },
        XIIPhyMaxMarks: { type: Number, },
        XIIPhyObCgpa: { type: Number, },
        XIIPhyMaxCgpa: { type: Number, },

        XIIChemObMarks: { type: Number, },
        XIIChemMaxMarks: { type: Number, },
        XIIChemObCgpa: { type: Number, },
        XIIChemMaxCgpa: { type: Number, },

        XIIMathObMarks: { type: Number, },
        XIIMathMaxMarks: { type: Number, },
        XIIMathObCgpa: { type: Number, },
        XIIMathMaxCgpa: { type: Number, },

        XIISpecializationMarks: { type: String, },

        XIIOpObMarks: { type: Number, },
        XIIOpMaxMarks: { type: Number, },
        XIIOpObCgpa: { type: Number, },
        XIIOpMaxCgpa: { type: Number, },
    }
})

//create collection

const RegisterOne = new mongoose.model("RegisterOne", studentSchema);
module.exports = RegisterOne;

// module.exports = mongoose.model("Register", studentSchema);

// module.exports = RegisterOne;