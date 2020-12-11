import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class crudService<T, ID> {
    constructor(private http: HttpClient, private url: string) { }

    save(t: T): Observable<T> {
        return this.http.post<T>(this.url, t);
    }

    update(id: ID, t: T): Observable<T> {
        return this.http.put<T>(this.url + "/" + id, t, {

        });
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    findByID(id: ID): Observable<T> {
        return this.http.get<T>(this.url + "/" + id);
    }

    delete(id: ID): Observable<T> {
        return this.http.delete<T>(this.url + "/" + id);
    }
}