import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerComponent } from './drawer/drawer.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { DataTableComponent } from './drawer/data-table/data-table.component';
import { DataDetailsComponent } from './drawer/data-details/data-details.component';
import { DataResultsComponent } from './cabinet/data-results/data-results.component';
import { DataSearchComponent } from './cabinet/data-search/data-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { DataComponent } from './shared/data/data.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DataFormDialogComponent } from './data-form-dialog/data-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    CabinetComponent,
    DataTableComponent,
    DataDetailsComponent,
    DataResultsComponent,
    DataSearchComponent,
    NavigationComponent,
    DataComponent,
    ConfirmationDialogComponent,
    DataFormDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
