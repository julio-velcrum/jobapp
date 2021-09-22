export interface Person {
    datosPersonales: {
        nombreCompleto: string;
        edad: number;
        telefono: string;
        sexo: string;
        fechaNacimiento: Date;
        nacionalidad: string;
        estatura: string;
        peso: string;
        estadoCivil: string;
        domicilio: {
            direccion: string;
            colonia: string;
            cp: number;
            municipio: string;
            estado: string;
        },
        lugarNacimiento: string;
        viveCon: string;
        personasDependientes: string;
    },
    documentacion: {
        curp: string;
        afore: string;
        rfc: string;
        nss: string;
        cartilla: string;
        pasaporte: string;
        licencia: boolean;
        claseLicencia: string;
        numLicencia: string;
        docExtranjera: string;
    },
    saludYHabitos: {
        estadoSaludActual: string;
        enfermedadCronica: boolean;
        nombreEnfermedadCronica: string;
        deporte: boolean;
        nombreDeporte: string;
        club: boolean;
        pasatiempo: string;
        meta: string;
    },
    
    escolaridad: {
        nivelEscolaridad: [{
            escolaridad: string;
            dirección: string;
            incio: string;
            fin: string;
            certificado: string;
        }];
    },
    conocimientosGenerales: {
        idiomas: [{
            idioma: string;
            nivel: string;
        }];
        funcionesOficina: string;
        maquinaTaller: string;
        software: string;
        otros: string;
    },
    empleos: {
        trabajos: [{
            fechaInicial: Date;
            fechaFinal: Date;
            empresa: string;
            dirección: string;
            telefono: string;
            puesto: string;
            salario: string;
            motivoSeparacion: string;
            nombreJefe: string;
            solicitarInformes: boolean;
        }];
    },
    refPersonales: {
        referencias: [{
            nombre: string;
            domicilio: string;
            telefono: string;
            ocupacion: string;
            tiempoDeConocerlo: string;
        }];
    },
    datosGenerales: {
        conocimientoEmpleo: string;
        medio: string;
        parientes: boolean;
        nombre: string;
        afianzado: boolean;
        ciaAfianza: string;
        sindicato: boolean;
        nombreSindicato: string;
        seguroVida: boolean;
        ciaSeguro: string;
        disponibilidadViajar: boolean;
        razonesViajar: string;
        cambioResidencia: boolean;
        razonesResidencia: string;
        fechaPresentacion: Date;
    },
    datosEconomicos: {
        otrosIngresos: boolean;
        nombreIngresos: string;
        montoIngresos: string;
        conyugeTrabaja: boolean;
        lugarTrabajoConyuge: string;
        montoConyuge: string;
        casaPropia: boolean;
        valorCasa: string;
        renta: boolean;
        valorRenta: string;
        automovil: boolean;
        marca: string;
        modelo: string;
        deudas: boolean;
        deudor: string;
        montoDeuda: string;
        abonoMensual: string;
        gastosMensuales: string;
    },
}
