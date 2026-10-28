import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { warpAnimation, warpInAnimation } from '../../../ui/animations/warp.ani';
import { FocusModeBreakComponent } from '../focus-mode-break/focus-mode-break.component';
import { FocusModeMainComponent } from '../focus-mode-main/focus-mode-main.component';
import { FocusModeSessionDoneComponent } from '../focus-mode-session-done/focus-mode-session-done.component';
import { FocusModeService } from '../focus-mode.service';
import { FocusScreen } from '../focus-mode.model';

@Component({
  selector: 'focus-mode-page',
  templateUrl: './focus-mode-page.component.html',
  styleUrl: './focus-mode-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [warpAnimation, warpInAnimation],
  imports: [
    FocusModeMainComponent,
    FocusModeSessionDoneComponent,
    FocusModeBreakComponent,
  ],
})
export class FocusModePageComponent {
  readonly activePage = inject(FocusModeService).currentScreen;
  readonly FocusScreen = FocusScreen;
}
