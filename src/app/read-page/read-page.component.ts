import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.scss']
})
export class ReadPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef) { }

  private id: string = null;
  public mode = 'dark';
  public comic_name;
  public page_name = 'gogo power ranger';
  public comicList = [];

  public init() {
    (new Array(12)).fill(undefined).map((v, idx) => {
      this.comicList.push({ filename: `/assets/comic1/storyboard-${idx + 1}.png` });
      return;
    });
  }

  private _now_page: number = 1;
  get now_page(): number {
    return this._now_page;
  }
  set now_page(now_page: number) {
    if (this._now_page === now_page) return;
    this._now_page = now_page;
    this.page_name = this.output_change_file_name();
    this.el.nativeElement.querySelector('.comic-slider').scrollLeft = 100 * (now_page - 1);

  }

  ngOnInit() {
    this.init();
    this.id = this.route.snapshot.paramMap.get('id');
    this.page_name = this.output_change_file_name();
  }

  public output_change_file_name(): string {
    return `/assets/comic1/storyboard-${this.now_page}.png`;
  }

  public turnPage(index) {
    if (!index) return;
    this.now_page = (index);
  }

  onChange(r: string) {
    let page = Number(r.replace('page ', ''));
    this.now_page = page;
  }

  public turn(method: string) {
    //method = next / previous
    if (method == 'next') {

      if (this.now_page >= this.comicList.length) return;


      this.now_page++;
    } else if (method == 'previous') {

      if (this.now_page <= 1) return;
      this.now_page--;
    }
  }
}
