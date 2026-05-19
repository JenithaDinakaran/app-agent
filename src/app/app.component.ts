import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 4 CRUD Example Using Bootstrap Datatable';

  userForm: FormGroup;

  @ViewChild('modalClose') modalClose: ElementRef;


  // Static data, you can change as per your need
  persons: any[] = [
    { "id": "1", "name": "Aaron 2Moore", "jobTitle": "Regional Configuration Producer" },
    { "id": "2", "name": "Yvonne Conroy Mrs.", "jobTitle": "Global Mobility Orchestrator" },
    { "id": "3", "name": "Laron Padberg", "jobTitle": "Senior Directives Supervisor" },
    { "id": "4", "name": "Dr. Maryam Spinka", "jobTitle": "Dynamic Mobility Associate" },
    { "id": "5", "name": "Kiley Baumbach", "jobTitle": "Principal Metrics Orchestrator" },
    { "id": "6", "name": "Hollis MacGyver", "jobTitle": "Direct Markets Assistant" },
    { "id": "7", "name": "Axel McLaughlin", "jobTitle": "Forward Mobility Architect" },
    { "id": "8", "name": "Ricardo Botsford", "jobTitle": "Direct Quality Consultant" },
    { "id": "10", "name": "Corbin Funk Mrs.", "jobTitle": "Human Configuration Manager" },
    { "id": "11", "name": "Rosalind Paucek", "jobTitle": "Future Creative Supervisor" },
    { "id": "12", "name": "Henderson Moore", "jobTitle": "Internal Accountability Director" },
    { "id": "13", "name": "Kelli Schoen", "jobTitle": "National Accountability Architect" },
    { "id": "14", "name": "Kenna Fritsch", "jobTitle": "Legacy Response Administrator" },
    { "id": "15", "name": "Judge Marquardt", "jobTitle": "Human Program Specialist" },
    { "id": "16", "name": "Kurtis Hane", "jobTitle": "International Optimization Director" },
    { "id": "17", "name": "Nicolette Lind", "jobTitle": "Legacy Marketing Facilitator" },
    { "id": "18", "name": "Idella Green", "jobTitle": "Dynamic Division Orchestrator" },
    { "id": "19", "name": "Mackenzie Bartell", "jobTitle": "National Directives Associate" },
    { "id": "20", "name": "Mose Kohler", "jobTitle": "Lead Implementation Executive" },
    { "id": "21", "name": "Cielo Kuphal", "jobTitle": "Dynamic Division Analyst" },
    { "id": "22", "name": "Haleigh Stokes", "jobTitle": "Global Intranet Executive" },
    { "id": "23", "name": "Tyrese Walter", "jobTitle": "Senior Web Liason" },
    { "id": "24", "name": "Barney Shields", "jobTitle": "District Web Administrator" },
    { "id": "25", "name": "Favian Abbott Miss", "jobTitle": "Lead Implementation Facilitator" },
    { "id": "26", "name": "Carissa Kunze", "jobTitle": "Regional Division Technician" }
  ];

  items: any[] = [];
  itemCount = 0;
  formFlag: 'add' | 'edit' = 'add';



  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      jobTitle: new FormControl(null, Validators.required)
    });
  }

  reloadItems() {
    this.items = [...this.persons];
    this.itemCount = this.persons.length;
  }

  // special properties:
  rowClick(rowEvent: any) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent: any) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item: any) {
    return item.jobTitle;
  }

  ngOnInit() {
    this.reloadItems();
  }

  initUser() {
    this.userForm.reset();
    this.formFlag = 'add';
  }

  saveUser(formFlag?: string) {
    if (formFlag) {
      this.formFlag = formFlag as any;
    }

    if (this.formFlag === 'add') {
      this.userForm.value.id = this.persons.length + 1;
      this.persons.unshift(this.userForm.value);
    } else {
      const index = this.persons.findIndex(x => x.id == this.userForm.value.id);
      if (index !== -1) {
        this.persons[index] = this.userForm.value;
      }
    }

    this.reloadTableManually();

    try {
      if (this.modalClose && (this.modalClose as any).nativeElement) {
        (this.modalClose as any).nativeElement.click();
      }
    } catch (e) {
      // ignore
    }


    this.userForm.reset();
  }

  getData(item: any) {
    this.userForm.patchValue(item);
    this.formFlag = 'edit';
  }

  delData(item: any) {
    this.persons.splice(this.persons.indexOf(item), 1);
    this.reloadTableManually();
  }

  reloadTableManually() {
    this.reloadItems();
  }
}

