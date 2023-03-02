import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSheetsComponent } from './time-sheets/time-sheets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from "primeng/calendar";
import { TagModule } from "primeng/tag";
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { HubbleComponent } from './hubble/hubble.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { Add1Component } from './add1/add1.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { EmployeComponent } from './employe/employe.component';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { EmailComponent } from './email/email.component';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import { HiddenDirective } from './customDirective/hidden.directive';
import { SelectButtonModule } from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { ProceedComponent } from "./proceed/proceed.component";



@NgModule({
    declarations: [
        AppComponent,
        TimeSheetsComponent,
        AddComponent,
        MainComponent,
        HomeComponent,
        HubbleComponent,
        Add1Component,
        EmployeComponent,
        ResetpasswordComponent,
        EmailComponent,
        HiddenDirective,
        ProceedComponent
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        CalendarModule,
        TagModule,
        CardModule,
        InputTextModule,
        FileUploadModule,
        HttpClientModule,
        InputTextareaModule,
        InputNumberModule,
        ToolbarModule,
        MenubarModule,
        TabMenuModule,
        TabViewModule,
        DropdownModule,
        SplitButtonModule,
        ContextMenuModule,
        DataViewModule,
        SelectButtonModule,
        ToggleButtonModule,
        
    ]
})
export class AppModule { }
