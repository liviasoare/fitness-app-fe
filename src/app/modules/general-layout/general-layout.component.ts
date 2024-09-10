import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FileUploadModule } from 'primeng/fileupload';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-general-layout',
  standalone: true,
  imports: [HeaderComponent, FileUploadModule, MatButtonModule],
  templateUrl: './general-layout.component.html',
  styleUrl: './general-layout.component.scss',
})
export class GeneralLayoutComponent {
  onUpload(event: any) {
    console.log('it works');
  }
}
