// sidebar.service.ts (en MF-SIDEBAR)
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, throwError, tap, map } from 'rxjs';
import { SidebarOption, OptionsResponse } from '../models/sidebar.models';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private optionsSubject = new BehaviorSubject<SidebarOption[]>(this.getCachedOptions());
  options$ = this.optionsSubject.asObservable();
  
  private readonly STORAGE_KEY = 'cached_options';

  constructor() {
    // Escuchar cambios desde otros MF vía sessionStorage
    this.initializeOptions();
  }
  private initializeOptions(): void {
    // Carga inicial desde sessionStorage
    const initialOptions = this.getCachedOptions();
    this.optionsSubject.next(initialOptions);

    // Escuchar cambios en el storage (desde otros MF)
    window.addEventListener('storage', (event) => {
      if (event.key === this.STORAGE_KEY) {
        this.optionsSubject.next(this.getCachedOptions());
      }
    });
  }
  
  public refreshOptions(): void {
    this.optionsSubject.next(this.getCachedOptions());
  }
  getCachedOptions(): SidebarOption[] {
    const cachedData = sessionStorage.getItem(`${this.STORAGE_KEY}`);
    if (!cachedData) return [];
    try {
      const { options } = JSON.parse(cachedData);
      console.log("mostrando cache_options", options);
      // const { options, timestamp } = JSON.parse(cachedData);
      // const isCacheValid = new Date().getTime() - timestamp < 3600000; // 1 hora
      // return isCacheValid ? options : []; // Retorna solo el array de opciones
      return options;
    } catch (e) {
      console.error('Error parsing cached options', e);
      return [];
    }
    // return options ? JSON.parse(options) : [];
  }
}