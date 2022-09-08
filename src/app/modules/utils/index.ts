import { Provider } from "@angular/core";
import { MembersAddComponent } from "src/app/pages/members/members-add/members-add.component";
import { MembersListComponent } from "src/app/pages/members/members-list/members-list.component";
import { ScreenAddComponent } from "src/app/pages/screen/screen-add/screen-add.component";
import { ScreenListComponent } from "src/app/pages/screen/screen-list/screen-list.component";
import { NgxHeaderComponent } from "./admin-header/admin-header.component";
import { NgxMainViewComponent } from "./admin-main-view/admin-main-view.component";

export const COMPONENTS: Provider[] = [
  NgxHeaderComponent,
  NgxMainViewComponent,
  MembersListComponent,
  MembersAddComponent,
  ScreenListComponent,
  ScreenAddComponent,
];
