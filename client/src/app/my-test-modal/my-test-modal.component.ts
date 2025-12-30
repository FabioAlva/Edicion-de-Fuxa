import { Component, Inject, OnInit } from '@angular/core';
// IMPORTANTE: Usamos la versión 'Legacy' que usa tu proyecto FUXA
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-my-test-modal',
  templateUrl: './my-test-modal.component.html',
  styleUrls: ['./my-test-modal.component.scss']
})
export class MyTestModalComponent implements OnInit {

  titulo: string = 'Ventana de Prueba';

  constructor(
    public dialogRef: MatDialogRef<MyTestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Si recibimos un título al abrir, lo usamos
    if (data && data.titulo) {
      this.titulo = data.titulo;
    }
  }

  ngOnInit(): void {
  console.log('iniciando');
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
