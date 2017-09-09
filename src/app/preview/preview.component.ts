import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CommonService} from '../common/common.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  public unit;
  public data: any[];
  private subscriber: Subscription;

  constructor(private service: CommonService) {
    this.unit = this.service.unit;
  }

  ngOnInit() {
    this.data = this.service.data;
    this.subscriber = this.service.dataChanged
      .subscribe(
        (data) => {
          this.data = data;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

}
