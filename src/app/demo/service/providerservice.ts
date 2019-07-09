import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Provider} from '../domain/provider';

@Injectable()
export class ProviderService {

    constructor(private http: HttpClient) {}

    getProviderTable() {
        return this.http.get<any>('assets/demo/data/table-provider.json')
                    .toPromise()
                    .then(res => <Provider[]> res.data)
                    .then(data => data);
    }


}
