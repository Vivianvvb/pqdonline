
export const userRole = Object.freeze({ //fix the user Role
    CATEGORY_Ai: categoriaAi,
    CATEGORY_A: categoriaA,
    CATEGORY_B: categoriaB,
    CATEGORY_C: categoriaC,
    CATEGORY_D: categoriaD,
    CAMERAMAN: camera,
    COACH: coach,
    JUMPMASTER_AFF: jmAff,
    IAFF: iAff,
    IASL: iAsl,
    TANDEM: tandem,
    RIGGER: rigger,
    EXAMINER_AFF: examiadorAff,
    EXAMINER_TANDEM: examinadorTandem,
    EXAMINER_RIGGER: examinadorRigger,
})

export const categoryLevel = Object.freeze({ //rules for category levels
     CATEGORY_Ai: 1,
     CATEGORY_A: 2,
     CATEGORY_B: 3,
     CATEGORY_C: 4,
     CATEGORY_D: 5,
 })

 export const instructionLevel = Object.freeze({ //rules for intruction jumps
    COACH: 1,
    IASL: 2,
    JUMPMASTER_AFF: 2,
    IAFF: 3,
    EXAMINER_AFF: 4,
})

export const tandemLevel = Object.freeze({ //rules for tandem jumps
    COACH: 1,
    CAMERAMAN: 1,
    TANDEM: 2,
    EXAMINER_TANDEM: 3,
    })

export const riggerLevel = Object.freeze({ //rules for maintanance
    RIGGER: 1,
    EXAMINER_RIGGER: 2,
})
