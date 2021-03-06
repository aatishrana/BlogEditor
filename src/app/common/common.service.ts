import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DataItem} from './data.item.model';

@Injectable()
export class CommonService {

  public unit = 'px';
  public data: DataItem[];
  public dataChanged = new Subject<DataItem[]>();

  constructor() {
    this.data = [];
  }

  addText(link: boolean) {
    this.data.push({
      type: 'text',
      seq_num: this.data.length,
      data: 'Sample text ' + (this.data.length + 1),
      style: this.getDefaultTextStyle(),
      isLink: link,
      link: ''
    });
    this.emit();
  }

  addImage(link: boolean) {
    this.data.push({
      type: 'image',
      seq_num: this.data.length,
      data: '',
      style: this.getDefaultImageStyle(),
      isLink: link,
      link: ''
    });
    this.emit();
  }

  addSpace() {
    this.data.push({
      type: 'space',
      seq_num: this.data.length,
      data: '',
      style: this.getDefaultSpaceStyle(),
      isLink: false,
      link: ''
    });
    this.emit();
  }

  remove(index) {
    if (index < this.data.length) {
      this.data.splice(index, 1);
      this.emit();
    }
  }

  setStyleAttr(event, i, selectedKey) {
    this.data[i].style[selectedKey] = event;
    this.emit();
  }

  emit() {
    this.dataChanged.next(this.data.slice());
  }

  getDefaultTextStyle() {
    const style = {};
    style['height'] = 100;
    style['tag'] = 'p';
    style['color'] = 'black';
    style['text-align'] = 'justify';
    return style;
  }

  getDefaultImageStyle() {
    const style = {};
    style['height'] = 100;
    style['width'] = 100;
    style['src'] = 'https://cdn.pixabay.com/photo/2017/03/07/13/02/thought-2123970_960_720.jpg';
    return style;
  }

  getDefaultSpaceStyle() {
    const style = {};
    style['height'] = 20;
    return style;
  }
}
