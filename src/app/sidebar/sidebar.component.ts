import { Component, OnInit } from '@angular/core';
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
export class SidebarComponent implements OnInit {
  options: SidebarOption[] = [];
  menuItems: MenuItem[] = [
    {
      icon: 'pi pi-box',
      label: 'Reclamos',
      expanded: false,
      children: [
        {
          icon: 'pi pi-chart-line',
          label: 'Solicitud de inspección',
          path: '/consultas/dashboard',
        },
        {
          icon: 'pi pi-plus',
          label: 'Operaciones',
          expanded: false,
          children: [
            {
              icon: 'pi pi-plus-circle',
              label: 'Nuevo Producto',
              path: '/productos/nuevo',
            },
            {
              icon: 'pi pi-pencil',
              label: 'Modificar',
              path: '/productos/modificar',
            },
          ],
        },
        {
          icon: 'pi pi-cog',
          label: 'Configuración',
          path: '/productos/configurar',
        },
        {
          icon: 'pi pi-plus',
          label: 'Operaciones',
          expanded: false,
          children: [
            {
              icon: 'pi pi-plus-circle',
              label: 'Nuevo Producto',
              path: '/productos/nuevo',
            },
            {
              icon: 'pi pi-pencil',
              label: 'Modificar',
              path: '/productos/modificar',
            },
          ],
        },
        {
          icon: 'pi pi-cog',
          label: 'Configuración',
          path: '/productos/configurar',
        },
      ],
    },
    {
      icon: 'pi pi-users',
      label: 'Clientes',
      children: [
        {
          icon: 'pi pi-list',
          label: 'Listado',
          path: '/clientes/listado',
        },
        {
          icon: 'pi pi-id-card',
          label: 'Segmentos',
          path: '/clientes/segmentos',
        },
      ],
    },
  ];

  constructor(private router: Router, private sidebarService: SidebarService) {}
  ngOnInit() {
    this.sidebarService.options$.subscribe((options) => {
      this.options = options;
    });

    // Carga inicial por si hay datos en cache
    this.options = this.sidebarService.getCachedOptions();
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
