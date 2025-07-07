// src/typings/custom-events.d.ts
declare global {
  interface WindowEventMap {
    'module-selected': CustomEvent<{ idModulo: number }>;
  }
}
export {};
