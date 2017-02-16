import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  setTheme = 1;
  isRtlEnabled = false;
  rtlText = 'Enable RTL';

  onThemeSwitch(val) {
    this.setTheme = val;
  }

  toggleRtl() {
    this.isRtlEnabled = !this.isRtlEnabled;
    if (this.isRtlEnabled) {
      this.rtlText = 'Disable RTL';
    } else {
      this.rtlText = 'Enable RTL';
    }
  }
}
