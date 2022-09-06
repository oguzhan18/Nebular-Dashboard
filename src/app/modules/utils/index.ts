import { Provider } from "@angular/core";
import { NgxHeaderComponent } from "./admin-header/admin-header.component";
import { NgxMainViewComponent } from "./admin-main-view/admin-main-view.component";

export const COMPONENTS: Provider[] = [
  NgxHeaderComponent,
  NgxMainViewComponent
];
