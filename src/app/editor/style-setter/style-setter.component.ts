import {Component, Input, OnInit} from '@angular/core';
import {CommonService} from '../../common/common.service';
import {DataItem} from '../../common/data.item.model';

@Component({
  selector: 'app-style-setter',
  templateUrl: './style-setter.component.html',
  styleUrls: ['./style-setter.component.css']
})
export class StyleSetterComponent implements OnInit {

  @Input() selectedItemIndex: number;
  @Input() i: number;
  @Input() item: DataItem;
  @Input() selectedKey: string;

  constructor(private service: CommonService) {
  }

  ngOnInit() {
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
