import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;

  photo: any = null;
  adharcard: any = null;
  pancard: any = null;
  gumasta: any = null;

  constructor(private formBuilder: FormBuilder, private apiservice: ApiService) { }

  onphotoChanged(event: any) {
    this.photo = event.target.files[0]
  }

  onadharcardChanged(event: any) {
    this.adharcard = event.target.files[0]
  }

  onpancardChanged(event: any) {
    this.pancard = event.target.files[0]
  }

  ongumastaChanged(event: any) {
    this.gumasta = event.target.files[0]
  }

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
      gst_Number: ['', Validators.required],
      shop_Name: ['', Validators.required],
      whatsapp_no: ['', Validators.required]
    });
    this.addressDetails = this.formBuilder.group({
      shop_Address: ['', Validators.required],
      pincode: ['', Validators.required],
      landmark: ['', Validators.required],
      locality: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
    this.educationalDetails = this.formBuilder.group({
      photo: ['', Validators.required],
      adharcard: ['', Validators.required],
      pancard: ['', Validators.required],
      gumasta: ['', Validators.required]
    });
  }
  
  get personal() { return this.personalDetails.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) { return }
      this.step++
    }
    if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
      this.step++;
    }
  }
  previous() {
    this.step--
    if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
  }


  // onChange(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.form.get('profile').setValue(file);
  //   }
  // }


  submit() {
    if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
      console.log(this.personalDetails.controls)
      console.log(this.educationalDetails.controls)
      console.log(this.educationalDetails.controls.photo.value)
      const formData = new FormData();
      
      formData.append('photo', this.photo)
      formData.append('adharcard', this.adharcard)
      formData.append('pancard', this.pancard)
      formData.append('gumasta', this.gumasta)
      
      formData.append('gst_Number', this.personalDetails.controls.gst_Number.value)
      formData.append('shop_Name', this.personalDetails.controls.shop_Name.value)
      formData.append('whatsapp_no', this.personalDetails.controls.whatsapp_no.value)
      
      formData.append('shop_Address', this.addressDetails.controls.shop_Address.value)
      formData.append('pincode', this.addressDetails.controls.pincode.value)
      formData.append('landmark', this.addressDetails.controls.landmark.value)
      formData.append('locality', this.addressDetails.controls.locality.value)
      formData.append('city', this.addressDetails.controls.city.value)
      formData.append('state', this.addressDetails.controls.state.value)
      this.apiservice.sellerDetail(
        formData
        // this.educationalDetails.controls.photo.value,
        // this.educationalDetails.controls.adharcard.value,
        // this.educationalDetails.controls.pancard.value,
        // this.educationalDetails.controls.gumasta.value,
        // this.personalDetails.controls.gst_Number.value,
        // this.personalDetails.controls.shop_Name.value,
        // this.personalDetails.controls.whatsapp_no.value,
        // this.addressDetails.controls.shop_Address.value,
        // this.addressDetails.controls.pincode.value,
        // this.addressDetails.controls.landmark.value,
        // this.addressDetails.controls.locality.value,
        // this.addressDetails.controls.city.value,
        // this.addressDetails.controls.state.value

      ).subscribe(data =>{
        console.log(data)
      },
      error => {
        console.log(error)
      })
      
    }
  }
}
