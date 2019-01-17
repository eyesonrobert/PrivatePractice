import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "../../node_modules/@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { ContactmeComponent } from "./contactme/contactme.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HomeCarouselComponent } from "./home/home-carousel/home-carousel.component";
import { SpecialtiesComponent } from "./specialties/specialties.component";
import { ResourcesComponent } from "./resources/resources.component";
import { FAQComponent } from "./faq/faq.component";
import { BlogComponent } from "./blog/blog.component";
import { BusinessInformationComponent } from "./header/business-information/business-information.component";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { CbtComponent } from "./specialties/cbt/cbt.component";
import { IptComponent } from "./specialties/ipt/ipt.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutMe", component: AboutmeComponent },
  { path: "contactMe", component: ContactmeComponent },
  { path: "home", component: HomeComponent },
  { path: "specialties", component: SpecialtiesComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "faq", component: FAQComponent },
  { path: "blog", component: BlogComponent },
  { path: "cbt", component: CbtComponent },
  { path: "ipt", component: IptComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ContactmeComponent,
    HomeComponent,
    HomeCarouselComponent,
    SpecialtiesComponent,
    ResourcesComponent,
    FAQComponent,
    BlogComponent,
    BusinessInformationComponent,
    NavbarComponent,
    CbtComponent,
    IptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
