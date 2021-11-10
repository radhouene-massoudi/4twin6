import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
formulaire=new FormGroup({
  name: new FormControl('',[Validators.required, Validators.email]),
  surname: new FormControl('',Validators.required)
});
f=this.fb.group({
name2:['',[Validators.required,Validators.email]],
surname2:['',[Validators.required]],
cours: this.fb.array([
new FormControl('angular'),
new FormControl('react'),

])
});

for=this.formtest.group({
age:['',],
adresse:['',],



});
  //name=new FormControl('dfdsfdsf',[Validators.required, Validators.minLength(2)]);
  constructor(private fb: FormBuilder,private formtest: FormBuilder) { }

  ngOnInit(): void {

    this.for.patchValue({
    age: 'Todd Motto',
    adresse:'my name'
});
  }
get name(){
  return this.formulaire.get('name');
}
get surname(){
  return this.formulaire.get('surname');
}
get cours(){
  return this.f.get('cours') as FormArray
}
addcours(){
  this.cours.push(this.fb.control(''));
}

delete(i:any){
  this.cours.removeAt(i);
}
}
