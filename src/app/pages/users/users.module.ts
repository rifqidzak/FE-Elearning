import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersInsertComponent } from "./users-insert/users-insert.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersUpdateComponent } from "./users-update/users-update.component";
import { UsersRouting } from "./users.routing";


@NgModule({
  declarations: [UsersListComponent, UsersUpdateComponent, UsersInsertComponent
  ],
  imports: [UsersRouting, RouterModule
  ],
  exports: [UsersListComponent, UsersUpdateComponent, UsersInsertComponent
  ],
})
export class UsersModule {}
