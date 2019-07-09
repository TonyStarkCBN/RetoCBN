import {Component, OnInit} from '@angular/core';
import {CountryService} from '../service/countryservice';
import {CarService} from '../service/carservice';
import {SelectItem, SelectItemGroup} from 'primeng/primeng';


@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent implements OnInit {

    checked1: boolean;
    checked2: boolean;
    checked3: boolean;
    

    country: any;

    filteredCountries: any[];

    countries: SelectItem[];
    
    city: SelectItem[];
    
    typeprovider: SelectItem[];

    selectedMultiSelectTypeprovider: string[] = [];

    homologation: SelectItem[];

    typetransport: SelectItem[];

    gender: SelectItem[];

    pieData: any;

    constructor(private countryService: CountryService) { }



    ngOnInit() {

        this.countries = [];
        this.countries.push({label: '', value: 0});
        this.countries.push({label: 'Perú', value: {id: 1, name: 'Perú', code: 'PE'}});
        this.countries.push({label: 'Chile', value: {id: 1, name: 'Chile', code: 'CL'}});


        this.city = [];
        this.city.push({label: '', value: 0});
        this.city.push({label: 'Lima', value: {id: 1, name: 'Lima', code: 'PE'}});
        this.city.push({label: 'Callao', value: {id: 2, name: 'Callao', code: 'CL'}});

        this.homologation = [];
        this.homologation.push({label: 'Si tengo ', value: 'Si'});
        this.homologation.push({label: 'En proceso', value: 'Proceso'});
        this.homologation.push({label: 'No tengo', value: 'NO'});
        
        this.pieData = {
            
            datasets: [
                {
                    data: [20, 80],
                    backgroundColor: [
                        '#fff',
                        '#F1B009'
                    ]
                }]
            };
 
        this.typetransport = [];
        this.typetransport.push({label: 'Vehículo propio ', value: 'Propia'});
        this.typetransport.push({label: 'Vehículo de tercero', value: 'Tercero'});
 
        this.gender = [];
        this.gender.push({label: 'Masculino', value: 'M'});
        this.gender.push({label: 'Femenino', value: 'F'});

        this.typeprovider = [];
        this.typeprovider.push({label: 'Representante Marca', value: '1'});
        this.typeprovider.push({label: 'Fabricante', value: '2'});
        this.typeprovider.push({label: 'Distribuidor', value: '3'});
        this.typeprovider.push({label: 'Importador', value: '4'});
        this.typeprovider.push({label: 'Comercializador', value: '5'});
        this.typeprovider.push({label: 'Servicio Diseño/ingeniería', value: '6'});
        this.typeprovider.push({label: 'Servicio Mantenimiento/Reparaciones', value: '7'});
        this.typeprovider.push({label: 'Servicio Transporte', value: '8'});
        this.typeprovider.push({label: 'Otros Servicios', value: '9'});
        this.typeprovider.push({label: 'Subcontratista', value: '10'});

    }

    filterCountry(event) {
        const query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountries = this.searchCountry(query, countries);
        });
    }

    searchCountry(query, countries: any[]): any[] {
        const filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }



}


/* 
<div class="ui-g-12 ui-md-4 ui-lg-4">
<p-autoComplete [(ngModel)]="country" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" [size]="47"
    placeholder="País" [minLength]="1"></p-autoComplete>
</div>
*/