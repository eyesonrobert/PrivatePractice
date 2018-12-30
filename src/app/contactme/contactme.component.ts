import { Component, OnInit } from "@angular/core";
import { Contact } from "../shared/contact";

@Component({
  selector: "app-contactme",
  templateUrl: "./contactme.component.html",
  styleUrls: ["./contactme.component.css"]
})
export class ContactmeComponent implements OnInit {
  model = new Contact("", "", "");
  submitted = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
