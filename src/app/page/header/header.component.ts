import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { KirbyModule } from '@kirbydesign/designsystem';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, KirbyModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
}
