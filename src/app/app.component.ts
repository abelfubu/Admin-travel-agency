import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loading = false;
  loadSub: Subscription;
  constructor(private loadingService: LoaderService) {}

  ngOnInit(): void {
    this.loadSub = this.loadingService.isLoading.subscribe((isLoading) =>
      setTimeout(() => {
        this.loading = isLoading;
      }, 0)
    );
  }

  ngOnDestroy(): void {
    this.loadSub.unsubscribe();
  }
}
