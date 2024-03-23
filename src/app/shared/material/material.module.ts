import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule} from "@angular/material/card";
import {MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule } from "@angular/material/snack-bar";
@NgModule({
    declarations : [
        
    ],
    imports : [
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatSnackBarModule
    ],
    exports : [
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatSnackBarModule,

    ]
})


export class MaterialModule{

}