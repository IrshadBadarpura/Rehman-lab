import { NgModule} from '@angular/core';
import {MatToolbarModule, MatTabsModule, MatMenuModule, MatButtonModule} from '@angular/material';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@NgModule(
    {
        imports : [MatToolbarModule,
                  MatTabsModule,
                  MatMenuModule,
                  MatButtonModule,
                  NgbModule
        ],
        exports: [MatToolbarModule,
            MatTabsModule,
            MatMenuModule,
            MatButtonModule,
            NgbCollapse,
            NgbModule
        ]
    })

export class MaterialModule {}
