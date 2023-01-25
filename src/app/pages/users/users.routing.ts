import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentAdminComponent } from "../../components/content/content-admin/content-admin.component";
import { UsersInsertComponent } from "./users-insert/users-insert.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersUpdateComponent } from "./users-update/users-update.component";

const routes: Routes = [
    {
        path: "",
        component: ContentAdminComponent,
        children: [
            {
                path: "",
                component: UsersListComponent
            }
        ]
    },
    {
      path: "insert",
      component: ContentAdminComponent,
      children: [
          {
              path: "",
              component: UsersInsertComponent
          }
      ]
  },
    {
      path: "update/:id",
      component: ContentAdminComponent,
      children: [
          {
              path: "",
              component: UsersUpdateComponent
          }
      ]
  },

];
@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule
    ]
})
export class UsersRouting{}
