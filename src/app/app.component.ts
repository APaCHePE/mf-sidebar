import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
interface MenuItem {
  path?: string;
  icon: string;
  label: string;
  children?: MenuItem[];
  expanded?: boolean;
}
@Component({
  selector: 'app-sidebars',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      icon: 'pi pi-box',
      label: 'Reclamos',
      expanded: false,
      children: [
        {
          icon: 'pi pi-chart-line',
          label: 'Solicitud de inspección',
          path: '/comercial/consultas/dashboard',
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

  constructor(private router: Router) {}

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
