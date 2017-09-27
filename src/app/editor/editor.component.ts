import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CommonService} from '../common/common.service';
import {DataItem} from '../common/data.item.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  public unit;
  public data: DataItem[];
  public selectedKey = '';
  public selectedItemIndex = -1;
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

  onSelectItem(index) {
    this.selectedItemIndex = index;
    event.stopPropagation();
  }

  // simply delegating operations to service
  onAddTextClick() {
    this.service.addText();
  }

  onAddImageClick() {
    this.service.addImage();
  }

  onAddSpaceClick() {
    this.service.addSpace();
  }

  onItemRemove(index) {
    this.service.remove(index);
  }

  getStyleAttr(item) {
    return item.style[this.selectedKey];
  }

  setStyleAttr(event, i) {
    if (i === this.selectedItemIndex) {
      this.service.setStyleAttr(event, i, this.selectedKey);
    }
  }

}
