import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { FacturasComponent } from './facturas/facturas.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VerFacturasComponent } from './ver-facturas/ver-facturas.component';
import { AuthGuardService } from './services/authguard.service';

export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'productos',  
        component: ProductosComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'facturas',  
        component: VerFacturasComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'vender/:id',  
        component: FacturasComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'vender',  
        component: FacturasComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'empleados',  
        component: UsuariosComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'reportes',  
        component: ReportesComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'contabilidad',  
        component: ContabilidadComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    {
        path: 'sucursales',
        component: SucursalesComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: 'clientes',  
        component: ClientesComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [
            AuthGuardService
        ]
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            { 
                preloadingStrategy: PreloadAllModules, 
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }