import {
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutService } from '../shared/servicess/layout.service';
import { AppMenu } from './app-menu/app.menu';

@Component({
  selector: 'app-sidebars',
  imports: [CommonModule, RouterModule, SidebarComponent, AppMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  el = inject(ElementRef);

  layoutService = inject(LayoutService);
  @ViewChild('menuContainer') menuContainer!: ElementRef;
}
