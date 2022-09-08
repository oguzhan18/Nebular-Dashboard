
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ModuleLoadCompletelyGuard, FormViewRoute } from "@narik/app-core";
import { MainViewComponent } from "./main-view/main-view.component";
import { MembersListComponent } from "./pages/members/members-list/members-list.component";
import { MembersAddComponent } from "./pages/members/members-add/members-add.component";
import { ScreenListComponent } from "./pages/screen/screen-list/screen-list.component";
import { ScreenAddComponent } from "./pages/screen/screen-add/screen-add.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [ModuleLoadCompletelyGuard],
    data: { moduleKey: "main" },
    component: MainComponent,
    children: [
      {
        path: "",
        component: MainViewComponent,
        outlet: "dashboard",
        data: {
          showOnlyRouter: true
        }
      },
      { path: "members-list", component: MembersListComponent }, 
      { path:"members-add", component:MembersAddComponent},
      { path:"screen", component:ScreenAddComponent},
      { path:"screen-list", component:ScreenListComponent},
      ...FormViewRoute("main")
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
