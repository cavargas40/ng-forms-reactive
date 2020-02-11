import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';

@Component({
  selector: 'app-assignment-forms',
  templateUrl: './assignment-forms.component.html',
  styleUrls: ['./assignment-forms.component.css']
})
export class AssignmentFormsComponent implements OnInit {

  public projectForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical'),
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

}
