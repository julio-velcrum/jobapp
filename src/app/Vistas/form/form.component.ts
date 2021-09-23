import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

import { ManagementService } from 'src/app/Services/management.service';

import { Person } from 'src/app/Models/person';
import { Datafamily } from 'src/app/Models/datafamily';
import { Education } from 'src/app/Models/education';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  /* DataFamily */
  displayDataFamilyDialog: boolean;
  dataFam: Datafamily;
  selectedDataFam: Datafamily;
  newDataFam: boolean;
  dataFamRows: Datafamily[];
  dataFamCols: any[];

  /* Education */
  displayDataEducationDialog: boolean;
  dataEduc: Education;
  selectedDataEduc: Education;
  newDataEduc: boolean;
  dataEducRows: Education[];
  dataEducCols: any[];

  constructor(private management: ManagementService, private fb: FormBuilder, private pngConfig: PrimeNGConfig) {

    /* DataFamily */
    this.displayDataFamilyDialog = false;
    this.dataFamRows = [];
    this.newDataFam = false;

    /* Education */
    this.displayDataEducationDialog = false;
    this.dataEducRows = [];
    this.newDataEduc = false;

    this.buildForm();
  }

  ngOnInit(): void {
    this.pngConfig.setTranslation({
      dayNames: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
      dayNamesShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
      dayNamesMin: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
      monthNames: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
      monthNamesShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
      today: 'Hoy',
      clear: 'Borrar'
    });

    this.dataFamCols = [
      { field: 'parentesco', header: 'Parentesco' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'vive', header: 'Vive' },
      { field: 'domicilio', header: 'Domicilio' },
      { field: 'ocupacion', header: 'Ocupación' },
    ];

    this.dataEducCols = [
      { field: 'escolaridad', header: 'Escolaridad' },
      { field: 'direccion', header: 'Dirección' },
      { field: 'inicio', header: 'Inicio' },
      { field: 'fin', header: 'Fin' },
      { field: 'certificado', header: 'Certificado' }
    ];
  }

  buildForm() {
    this.formulario = this.fb.group({
      nombreCompleto: [],
      edad: [],
      telefono: [],
      sexo: [],
      fechaNacimiento: [],
      nacionalidad: [],
      estatura: [],
      peso: [],
      estadoCivil: [],
      domicilio: this.fb.group({
        direccion: [],
        colonia: [],
        cp: [],
        municipio: [],
        estado: []
      }),
      lugarNacimiento: [],
      viveCon: [],
      personasDependientes: [],
      documentacion: this.fb.group({
        curp: [],
        afore: [],
        rfc: [],
        nss: [],
        cartilla: [],
        pasaporte: [],
        licencia: [],
        claseLicencia: [],
        numLicencia: [],
        docExtranjera: []
      }),
      saludYHabitos: this.fb.group({
        estadoSaludActual: [],
        enfermedadCronica: [],
        nombreEnfermedadCronica: [],
        deporte: [],
        nombreDeporte: [],
        club: [],
        pasatiempo: [],
        meta: []
      }),
      datosFamiliares: this.fb.group({
        parentesco: [],
        nombre: [],
        vive: [],
        domicilio: [],
        ocupacion: []
      }),
      educacion: this.fb.group({
        escolaridad: [],
        direccion: [],
        inicio: [],
        fin: [],
        certificado: []
      }),
      conocimientosGenerales: this.fb.group({
        idiomas: this.fb.array([
          //this.fb.control('')
        ]),
        porcentajeIdioma: this.fb.array([]),
        funcionesOficina: [],
        maquinaTaller: [],
        software: [],
        otros: [],
      }),
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      console.log("Formulario inválido");
    }
  }

  /* DataFamily métodos */
  showAddToDataFamily() {
    this.newDataFam = true;
    this.dataFam = {
      parentesco: "",
      nombre: "",
      vive: "",
      domicilio: "",
      ocupacion: ""
    };
    this.cleanDataFamilyFields();
    this.displayDataFamilyDialog = true;
  }

  saveToDataFamily() {
    let pos: number = 0;
    if (this.newDataFam) {
      this.dataFam = {
        parentesco: this.formulario.get('datosFamiliares.parentesco').value,
        nombre: this.formulario.get('datosFamiliares.nombre').value,
        vive: this.formulario.get('datosFamiliares.vive').value,
        domicilio: this.formulario.get('datosFamiliares.domicilio').value,
        ocupacion: this.formulario.get('datosFamiliares.ocupacion').value
      }
      this.dataFamRows.push(this.dataFam);
    } else {
      this.dataFam = {
        parentesco: this.formulario.get('datosFamiliares.parentesco').value,
        nombre: this.formulario.get('datosFamiliares.nombre').value,
        vive: this.formulario.get('datosFamiliares.vive').value,
        domicilio: this.formulario.get('datosFamiliares.domicilio').value,
        ocupacion: this.formulario.get('datosFamiliares.ocupacion').value
      }
      pos = this.dataFamRows.indexOf(this.selectedDataFam);
      this.dataFamRows[pos] = this.dataFam;
    }

    this.dataFam = null;
    this.displayDataFamilyDialog = false;
  }

  deleteFromDataFamily() {
    let index = this.dataFamRows.indexOf(this.selectedDataFam);
    this.dataFamRows = this.dataFamRows.filter((val, i) => i != index);
    this.dataFam = null;
    this.displayDataFamilyDialog = false;
  }

  onRowSelectDataFamily(event: any) {
    this.newDataFam = false;
    this.dataFam = event.data;
    this.setDataFamilyFields(this.dataFam);
    this.displayDataFamilyDialog = true;
  }

  setDataFamilyFields(fields: Datafamily) {
    this.formulario.get('datosFamiliares.parentesco').setValue(fields.parentesco);
    this.formulario.get('datosFamiliares.nombre').setValue(fields.nombre);
    this.formulario.get('datosFamiliares.vive').setValue(fields.vive);
    this.formulario.get('datosFamiliares.domicilio').setValue(fields.domicilio);
    this.formulario.get('datosFamiliares.ocupacion').setValue(fields.ocupacion);
  }

  cleanDataFamilyFields() {
    this.formulario.get('datosFamiliares.parentesco').reset();
    this.formulario.get('datosFamiliares.nombre').reset();
    this.formulario.get('datosFamiliares.vive').reset();
    this.formulario.get('datosFamiliares.domicilio').reset();
    this.formulario.get('datosFamiliares.ocupacion').reset();
  }

  /* Education métodos */
  showAddToEducation() {
    this.newDataEduc = true;
    this.dataEduc = {
      escolaridad: "",
      direccion: "",
      inicio: "",
      fin: "",
      certificado: "",
    };
    this.cleanEducationFields();
    this.displayDataEducationDialog = true;
  }

  saveToEducation() {
    let pos: number = 0;
    if (this.newDataEduc) {
      this.dataEduc = {
        escolaridad: this.formulario.get('educacion.escolaridad').value,
        direccion: this.formulario.get('educacion.direccion').value,
        inicio: this.formulario.get('educacion.inicio').value,
        fin: this.formulario.get('educacion.fin').value,
        certificado: this.formulario.get('educacion.certificado').value
      }
      this.dataEducRows.push(this.dataEduc);
    } else {
      this.dataEduc = {
        escolaridad: this.formulario.get('educacion.escolaridad').value,
        direccion: this.formulario.get('educacion.direccion').value,
        inicio: this.formulario.get('educacion.inicio').value,
        fin: this.formulario.get('educacion.fin').value,
        certificado: this.formulario.get('educacion.certificado').value
      }
      pos = this.dataEducRows.indexOf(this.selectedDataEduc);
      this.dataEducRows[pos] = this.dataEduc;
    }

    this.dataEduc = null;
    this.displayDataEducationDialog = false;
  }

  deleteFromEducation() {
    let index = this.dataEducRows.indexOf(this.selectedDataEduc);
    this.dataEducRows = this.dataEducRows.filter((val, i) => i != index);
    this.dataEduc = null;
    this.displayDataEducationDialog = false;
  }

  onRowSelectEducation(event: any) {
    this.newDataEduc = false;
    this.dataEduc = event.data;
    this.setEducationFields(this.dataEduc);
    this.displayDataEducationDialog = true;
  }

  setEducationFields(fields: Education) {
    this.formulario.get('educacion.escolaridad').setValue(fields.escolaridad);
    this.formulario.get('educacion.direccion').setValue(fields.direccion);
    this.formulario.get('educacion.inicio').setValue(fields.inicio);
    this.formulario.get('educacion.fin').setValue(fields.fin);
    this.formulario.get('educacion.certificado').setValue(fields.certificado);
  }

  cleanEducationFields() {
    this.formulario.get('educacion.escolaridad').reset();
    this.formulario.get('educacion.direccion').reset();
    this.formulario.get('educacion.inicio').reset();
    this.formulario.get('educacion.fin').reset();
    this.formulario.get('educacion.certificado').reset();
  }

  /* Conocimientos Generales métodos */

  get idiomas() {
    return this.formulario.get('conocimientosGenerales.idiomas') as FormArray;
  }

  get porcentajeIdioma() {
    return this.formulario.get('conocimientosGenerales.porcentajeIdioma') as FormArray;
  }

  addIdiomasYPorcentaje() {
    this.idiomas.push(this.fb.control(''));
    this.porcentajeIdioma.push(this.fb.control(''));
  }

  deleteCurrentIdiomaYPorcentaje(posicionActual: number) {
    this.idiomas.removeAt(posicionActual);
    this.porcentajeIdioma.removeAt(posicionActual);
  }

  

}
