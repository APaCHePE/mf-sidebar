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
    function getModuleDefault(token: string): Promise<any>;
  }
  export namespace OptionsAPI {
    function getUserOptions(userId: string, token: string): Promise<any>;
  }
}

declare module '@prisma/mf-shared-ui' {
  import { Type } from '@angular/core';
  export const SharedButtonComponent: Type<any>;
}