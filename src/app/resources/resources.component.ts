import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.css"]
})
export class ResourcesComponent implements OnInit {
  showHotline: boolean;
  showEmergencyNumbers: boolean;
  showAbuse: boolean;
  showAlcoholDrugs: boolean;

  constructor() {}

  ngOnInit() {
    this.showHotline = false;
    this.showEmergencyNumbers = false;
    this.showAbuse = false;
    this.showAlcoholDrugs = false;
  }
}
