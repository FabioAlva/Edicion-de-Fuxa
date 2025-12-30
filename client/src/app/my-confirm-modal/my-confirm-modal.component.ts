import { Component, Inject } from '@angular/core';
// 🔴 CAMBIO CLAVE: Usa 'legacy-dialog' en lugar de 'dialog'
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-my-confirm-modal',
  templateUrl: './my-confirm-modal.component.html'
})
export class MyConfirmModalComponent {

  constructor(
    // Asegúrate de que los tipos coincidan con los imports de arriba
    public dialogRef: MatDialogRef<MyConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  cancelar() {
    this.dialogRef.close(false);
  }

  aceptar() {
    this.dialogRef.close(true);
  }
}
