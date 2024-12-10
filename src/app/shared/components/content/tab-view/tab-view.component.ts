import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent implements AfterViewInit {
  @Input() tabs: {
    title: string;
    component: Type<any>;
  }[] = [];

  @ViewChild('tabContent', { read: ViewContainerRef }) tabContent!: ViewContainerRef;

  componentRefs: ComponentRef<any>[] = [];
  activeTabIndex = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.loadTabContent(0);
    this.cdRef.detectChanges();
  }

  loadTabContent(index: number): void {
    this.componentRefs.forEach((ref, i) => {
      if (ref) {
        ref.location.nativeElement.style.display = i === index ? 'block' : 'none';
      }
    });
  }
}
