// sidebar.service.ts (en MF-SIDEBAR)
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, throwError, tap, map, of } from 'rxjs';
import { SidebarOption, OptionsResponse } from '../models/sidebar.models';
import { AuthUtils } from '@test/mf-utils-modules';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private optionsSubject = new BehaviorSubject<SidebarOption[]>(
    this.getCachedOptions()
  );
  options$ = this.optionsSubject.asObservable();

  private readonly STORAGE_KEY = 'options';

  constructor() {
    // Escuchar cambios desde otros MF vía sessionStorage
    this.initializeOptions();
  }
  private initializeOptions(): void {
    // Carga inicial desde sessionStorage
    const cachedData = sessionStorage.getItem(this.STORAGE_KEY);
    if (cachedData) {
      this.filterOptionsByModuloDefault(cachedData);
    } else {
      this.optionsSubject.next([]);
    }

    // Escuchar cambios en el storage (desde otros MF)
    window.addEventListener('storage', (event) => {
      if (event.key === this.STORAGE_KEY) {
        const newToken = event.newValue;
        if (newToken) {
          this.filterOptionsByModuloDefault(newToken);
        } else {
          this.optionsSubject.next([]);
        }
      }
    });
  }

  public refreshOptions(): void {
    // this.optionsSubject.next(this.getCachedOptions());
    const cachedData = sessionStorage.getItem(this.STORAGE_KEY);
    if (cachedData) {
      this.filterOptionsByModuloDefault(cachedData);
    } else {
      this.optionsSubject.next([]);
    }
  }
  getCachedOptions(): SidebarOption[] {
    const cachedData = sessionStorage.getItem(`${this.STORAGE_KEY}`);
    console.log(`mostrando cachedData 1 ${this.STORAGE_KEY}`, cachedData);
    if (!cachedData) return [];
    // const cachedDataParse = JSON.parse(cachedData || '[]');

    try {
      const cachedDataParse = JSON.parse(cachedData || '[]');
      const filteredOptions = cachedDataParse.filter(
        (option: SidebarOption) => option.idmodulo === 10
      );
      console.log(
        `mostrando getCachedOptions 12 ${this.STORAGE_KEY}`,
        filteredOptions
      );
      
      return filteredOptions[0].children;
    } catch (e) {
      console.error('Error parsing cached options', e);
      return [];
    }
    // return options ? JSON.parse(options) : [];
  }

  public filterOptionsByModuloDefault(token: string): void {
    const cachedData = this.getCachedOptions();
    if (!token || !cachedData.length) return;

    try {
      // const idModuloDefault = AuthUtils.getModuleDefault(token);
      const filteredOptions = cachedData.filter(
        (option: SidebarOption) => option.idmodulo === 10
      );
      console.log(`mostrando filteredOptions 2 ${this.STORAGE_KEY}`, filteredOptions);
      
      this.optionsSubject.next(filteredOptions);
    } catch (e) {
      console.error('Error filtering options by modulo default', e);
    }
  }
}
