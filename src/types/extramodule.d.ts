declare module '@test/mf-utils-modules' {
  export const themeOptions: { name: string; value: boolean }[];
  export const menuModes: { label: string; value: string }[];
  export const surfaceOptions: { name: string; palette: any }[];
  export const menuThemes: { name: string; color: string }[];
  export const topbarThemes: { name: string; color: string }[];
  export const surfaces: {
    name: string;
    palette: Record<number | string, string>;
  }[];
  export const defaultLayoutConfig: any;
  export const layoutOptionFlags: {
    enablePrimaryColor: boolean;
    enableTopbarTheme: boolean;
    enableMenuTheme: boolean;
    enableColorScheme: boolean;
    enableMenuMode: boolean;
    enableSurface: boolean;
  };
  
  export function isSidebarMenuItemsVisible(roles: string[]): boolean;

  export function getLayoutConfig(): any;
  export function updateLayoutConfig(patch: Partial<any>): void;
  export function updateLayoutState(patch: Partial<any>): void;
  export function toggleDarkTheme(): void;
  export function toggleMobileMenu(show: boolean): void;
  export function getLayoutState(): any;
  export function applySurfacePalette(key: string): any;
  export function decodeJWT(token: string): any;
  export namespace AuthAPI {
    function login(data: { username: string; password: string }): Promise<any>;
  }  
  export namespace AuthUtils {
    function getModuleDefault(token: string): number;
  }
  export namespace OptionsAPI {
    function getUserOptions(userId: string, idSistema: string, token: string): Promise<any>;
  }
  // export namespace Local {
  //   function set(key: string, value: any): void;
  //   function get(key: string): any;
  //   function remove(key: string): void; 
  //   function clear(): void;
  // }
  export declare const local: {
    /**
     * Guarda un valor en el localStorage.
     * @param key - La clave bajo la cual se almacenará el valor.
     * @param value - El valor a almacenar, que puede ser de cualquier tipo.
     */
    set(key: string, value: any): void;

    /**
     * Obtiene un valor del localStorage.
     * @param key - La clave del valor a recuperar.
     * @returns El valor almacenado, parseado como JSON si es posible, o `null` si no existe.
     */
    get<T = any>(key: string): T | null;

    /**
     * Elimina un valor del localStorage.
     * @param key - La clave del valor a eliminar.
     */
    remove(key: string): void;

    /**
     * Limpia todo el localStorage.
     */
    clear(): void;
  };
  export namespace Session {
    function set(key: string, value: any): void;
    function get(key: string): any;
    function remove(key: string): void;
    function clear(): void;
  }
  export namespace StorageConstants {
    const ACCESS_TOKEN: any;
    const MODULE_KEYS: any;
    const MODULE_ACTIVE: any;
  }
}

declare module '@prisma/mf-shared-ui' {
  import { Type } from '@angular/core';
  export const SharedButtonComponent: Type<any>;
} 