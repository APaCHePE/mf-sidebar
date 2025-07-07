// sidebar.service.ts (en MF-SIDEBAR)
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, throwError, tap, map, of } from 'rxjs';
import { SidebarOption, OptionsResponse } from '../models/sidebar.models';
import {
  AuthUtils,
  local,
  Session,
  StorageConstants,
} from '@test/mf-utils-modules';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private optionsSubject = new BehaviorSubject<SidebarOption[]>([]);
  options$ = this.optionsSubject.asObservable();

  private readonly OPTIONS_KEY = 'options';
  private readonly TOKEN_KEY = 'accessToken';

  constructor() {
    this.initializeOptions();
  }
  private initializeOptions(): void {
    const activeModuleId = Session.get(StorageConstants.MODULE_ACTIVE);
    const moduleDefault = AuthUtils.getModuleDefault(
      localStorage.getItem(this.TOKEN_KEY) || ''
    );

    // Usar el módulo activo si está disponible, de lo contrario usar el módulo por defecto
    const moduleId = activeModuleId
      ? parseInt(activeModuleId, 10)
      : moduleDefault;

    if (moduleId) {
      this.updateOptionsForModule(moduleId);
    } else {
      this.optionsSubject.next([]);
    }

    // Escuchar cambios en el storage (desde otros MF)
    window.addEventListener('storage', (event) => {
      if (event.key === this.OPTIONS_KEY) {
        const moduleDefault = AuthUtils.getModuleDefault(
          localStorage.getItem(this.TOKEN_KEY) || ''
        );
        if (event.newValue) {
          this.updateOptionsForModule(moduleDefault);
        } else {
          this.optionsSubject.next([]);
        }
      }
    });
  }

  public refreshOptions(): void {
    const activeModuleId = Session.get(StorageConstants.MODULE_ACTIVE);
    const moduleDefault = AuthUtils.getModuleDefault(
      localStorage.getItem(this.TOKEN_KEY) || ''
    );
    const moduleId = activeModuleId
      ? parseInt(activeModuleId, 10)
      : moduleDefault;

    if (moduleId) {
      this.updateOptionsForModule(moduleId);
    } else {
      this.optionsSubject.next([]);
    }
  }
  getOptionsForCache() {
    const cachedData = Session.get(`${this.OPTIONS_KEY}`);
    console.log('Cached options:', cachedData);
    
    if (!cachedData) return [];
    try {
      // const cachedDataParse = JSON.parse(cachedData || '[]');
      return cachedData;
    } catch (e) {
      console.error('Error parsing cached options', e);
      return [];
    }
  }

  public updateOptionsForModule(moduleId: number): void {
    const cachedData = this.getOptionsForCache();
    if (!cachedData || cachedData.length === 0) {
      this.optionsSubject.next([]);
      return;
    }
    
    const filteredOptions = cachedData.filter(
      (option: SidebarOption) => option.idmodulo == moduleId
    );
    if (filteredOptions.length > 0) {
      this.optionsSubject.next(filteredOptions[0].children || []);
      sessionStorage.setItem(StorageConstants.MODULE_ACTIVE, moduleId.toString());
    } else {
      this.optionsSubject.next([]);
    }
  }
}
