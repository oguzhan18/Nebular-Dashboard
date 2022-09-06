
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ModuleLoadCompletelyGuard, FormViewRoute } from "@narik/app-core";
import { MainViewComponent } from "./main-view/main-view.component";
import { MembersListComponent } from "./pages/members/members-list/members-list.component";

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
      ...FormViewRoute("main")
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
