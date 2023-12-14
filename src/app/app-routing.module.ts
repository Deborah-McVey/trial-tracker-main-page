import { DrawerComponent } from "./drawer/drawer.component";
import { CabinetComponent } from "./cabinet/cabinet.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DrawerHomeComponent } from "./drawer/drawer-home/drawer-home.component";
import { DataDetailsComponent } from "./drawer/data-details/data-details.component";
import { DrawerEditorComponent } from "./drawer/drawer-editor/drawer-editor.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/drawer", pathMatch: "full" },
  {
    path: "drawer",
    component: DrawerComponent,
    children: [{ path: "", component: DrawerHomeComponent },
    { path: 'new', component: DrawerEditorComponent },
    { path: ":id", component: DataDetailsComponent },
     { path: ':id/edit', component: DrawerEditorComponent },
     { path: "", component: DrawerEditorComponent }]
  },
  { path: "cabinet", component: CabinetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
