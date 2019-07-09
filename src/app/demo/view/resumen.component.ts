import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProviderService} from '../service/providerservice';
import {Provider} from '../domain/provider';



@Component({
    selector: 'tablaresumen',
    templateUrl: './resumen.component.html'
})

export class ResumenComponent{
    
    provider1: Provider[];
    selectedProvider: Provider;
    cols: any[];
    selectedColumns: any[];

    constructor(private providerService: ProviderService) { }

    ngOnInit() {
        this.providerService.getProviderTable().then(providers => this.provider1 = providers);
        this.cols = [
            { field: 'status', header: 'Estado' },
            { field: 'businessname', header: 'Razón Social' },
            { field: 'codetributary', header: 'Código Tributario' },
            { field: 'information', header: 'Información' },
            { field: 'typeprovider', header: 'Tipo Proveedor' },
            { field: 'dateregister', header: 'Fecha Registro' }
        ];

        this.selectedColumns = this.cols;
    }

}