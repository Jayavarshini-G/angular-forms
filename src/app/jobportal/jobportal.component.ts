import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css']
})
export class JobportalComponent implements OnInit {

  constructor(private fb: FormBuilder) {}
 
  jobForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    contacts: this.fb.group({
      contactType: ['-1'],
      email: [''],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
 
  get skillsForms() {
    return this.jobForm.get('skills') as FormArray;
  }
 
  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        programLanguage: [''],
        experience: [0],
      })
    );
  }
 
  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }
}