import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../shared/servicess/sidebar.services';
import { SidebarOption } from '../../shared/models/sidebar.models';
interface MenuItem {
  path?: string;
  icon: string;
  label: string;
  children?: MenuItem[];
  expanded?: boolean;
}
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  options: SidebarOption[] = [];

  moduleSelectedListener = (event: CustomEvent<{ idModulo: number }>) => {
    // console.log('Module selected event:', event.detail);
    const { idModulo } = event.detail;
    console.log(`ID del módulo seleccionado: ${idModulo}`);
    
    this.sidebarService.updateOptionsForModule(idModulo);
  };
  
  constructor(private router: Router, private sidebarService: SidebarService) {}
  ngOnInit() {
    this.sidebarService.options$.subscribe((options) => {
      console.log("Items print ->", options)
      this.options = options;
    });
    window.addEventListener('module-selected', this.moduleSelectedListener);
    this.sidebarService.refreshOptions();
  }
  ngOnDestroy() {
    // Eliminar el listener al destruir el componente
    window.removeEventListener('module-selected', this.moduleSelectedListener);
  }
  toggleExpand(item: MenuItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
  isActive(path: string | undefined): boolean {
    return path
      ? this.router.isActive(path, {
          paths: 'subset',
          queryParams: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
        })
      : false;
  }
}
