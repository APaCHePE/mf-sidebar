import {
  Component,
  OnInit,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './component/app.menuitem';
import { SidebarService } from '../../shared/servicess/sidebar.services';
import { SidebarOption } from '../../shared/models/sidebar.models';

@Component({
  selector: 'app-menu, [app-menu]',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: ` <ul class="layout-menu" #menuContainer>
    <ng-container *ngFor="let item of options; let i = index">
      <li
        app-menuitem
        *ngIf="!item.separator"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul>`,
})
//       <li><pre>{{ item | json }}</pre></li>
export class AppMenu implements OnInit {
  options: MenuItem[] = [];
  el: ElementRef = inject(ElementRef);

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  constructor(private router: Router, private sidebarService: SidebarService) {}
  ngOnInit() {
    this.sidebarService.options$.subscribe((options) => {
      console.log('ITEM LOG', options);
      this.options = this.convertToMenuItems(options);
    });
    window.addEventListener('module-selected', this.moduleSelectedListener);
    this.sidebarService.refreshOptions();
  }

  moduleSelectedListener = (event: CustomEvent<{ idModulo: number }>) => {
    // console.log('Module selected event:', event.detail);
    const { idModulo } = event.detail;
    console.log(`ID del módulo seleccionado: ${idModulo}`);

    this.sidebarService.updateOptionsForModule(idModulo);
  };

  private convertToMenuItems(sidebarOptions: any[]): MenuItem[] {
    if (!sidebarOptions || sidebarOptions.length === 0) {
      return [];
    }

    // Función recursiva para convertir objetos anidados
    const convertItem = (item: any): MenuItem => {
      return {
        label: item.label,
        icon: item.icon || 'pi pi-microsoft', // Ícono por defecto si no existe
        routerLink: item.path && item.path !== '#' ? [item.path] : undefined,
        expanded: item.expanded === 'true',
        // Si tiene children y path es '#', significa que es un menú desplegable
        ...(item.children && item.children.length > 0
          ? { items: item.children.map(convertItem) }
          : {}),
      };
    };

    // Como sidebarOptions ya tiene la estructura esperada con idmodulo y label,
    // podemos tomarlo directamente sin agregar un contenedor adicional
    if (sidebarOptions[0]?.idmodulo && sidebarOptions[0]?.label) {
      // Convertir el objeto de módulo principal
      return [
        {
          label: sidebarOptions[0].label,
          icon: sidebarOptions[0].icon || 'pi pi-th-large',
          // Si children existe, convertir cada elemento
          items: sidebarOptions[0].children?.map(convertItem) || [],
        },
      ];
    } else {
      // Si no tiene la estructura esperada, mapear directamente cada elemento
      return sidebarOptions.map(convertItem);
    }
  }

/*   private convertToMenuItems(sidebarOptions: any[]): MenuItem[] {
    const convertItem = (item: any): MenuItem => {
      return {
        label: item.label,
        icon: item.icon || 'pi pi-circle',
        routerLink: item.path && item.path !== '#' ? [item.path] : undefined,
        expanded: item.expanded === 'true',
        // Solo incluir 'items' si hay 'children'
        ...(item.children && item.children.length > 0
          ? { items: item.children.map(convertItem) }
          : {}),
      };
    };
    const father = [
      {
        label: 'Catastro',
        icon: 'pi pi-fw pi-bars',
        items: sidebarOptions.map(convertItem),
      },
    ];
    return father;
  } */

  model: MenuItem[] = [
    {
      label: 'Apps',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'Blog',
          icon: 'pi pi-fw pi-comment',
          items: [
            {
              label: 'List',
              icon: 'pi pi-fw pi-image',
              routerLink: ['/apps/blog/list'],
            },
          ],
        },
        {
          label: 'Chat',
          icon: 'pi pi-fw pi-comments',
          routerLink: ['/apps/chat'],
        },
        {
          label: 'Figma',
          icon: 'pi pi-fw pi-pencil',
          url: 'https://www.figma.com/file/ijQrxq13lxacgkb6XHlLxA/Preview-%7C-Ultima-2022?node-id=354%3A7715&t=4HWBlQ8kHvfpLU08-1',
          target: '_blank',
        },
        {
          label: 'Menu',
          icon: 'pi pi-fw pi-bars',
          routerLink: ['/uikit/menu'],
          routerLinkActiveOptions: {
            paths: 'subset',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored',
          },
        },
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-align-left',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-align-left',
              items: [
                {
                  label: 'Submenu 1.1.1',
                  icon: 'pi pi-fw pi-align-left',
                },
                {
                  label: 'Submenu 1.1.2',
                  icon: 'pi pi-fw pi-align-left',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
