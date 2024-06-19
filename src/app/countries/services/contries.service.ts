import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region, SmallCountry, Maps, Country } from '../interfaces/country.interfaces';
import { Observable, catchError, combineLatest, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContriesService {

  private baseUrl : string = "https://restcountries.com/v3.1";

  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  constructor(private http: HttpClient) { }

  get regions (): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion( region: Region ): Observable<SmallCountry[]> {
    if( !region ) return of([]);

    const url : string = `${ this.baseUrl }/region/${ region }?fields=name,cca3,borders`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.map( country => ({
          name: country.name.common ,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))),
        catchError( () => of([]) )
      );
  }

  getCountryByAlphaCode( alphaCode: string): Observable<SmallCountry> {

    if( !alphaCode ) return of({} as SmallCountry);

    const url : string = `${ this.baseUrl }/alpha/${ alphaCode }?fields=name,cca3,borders`;
    return this.http.get<Country>( url )
      .pipe(
        map( country => ({
          name: country.name.common ,
          cca3: country.cca3,
          borders: country.borders ?? [],
        })),
        catchError( () => of({} as SmallCountry) )
      );
  }

  getCountryBordersByCodes( borders: string[] ): Observable<SmallCountry[]> {
    if( !borders || borders.length === 0 ) return of([]);

    const countriesRequest: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode( code );
      countriesRequest.push( request );
    });

    return combineLatest( countriesRequest );
  }

}
