import { 
  Component, 
  OnInit, 
  ComponentFactoryResolver, 
  ViewContainerRef, 
  Input, 
  Output, 
  EventEmitter 
  } from '@angular/core';

export class Feeds{
  title: string;
  desc: string;
}

@Component({
  selector: 'allowads',
  template: `<div>
              <h3>Custom Banner</h3>
              <ng-template></ng-template>
            </div>`
})

export class BannerAdComponent implements OnInit {
  @Input() adFeeds:Feeds[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ){}

  ngOnInit() {
    this.loadTemplates()
  }

  loadTemplates() {
    let factoryResolver = this.componentFactoryResolver.resolveComponentFactory(InnerFeedsComponent);
    let componentRef;    

    this.adFeeds.forEach((item, i) => {
      componentRef = this.viewContainerRef.createComponent(factoryResolver);
      (componentRef.instance).data = this.adFeeds[i];
      (componentRef.instance).send.subscribe((res) => {
        console.log(res.title)
      })
    })  
  }

  

} 



@Component({
  selector: 'innerfeeds',
  template: `<div (click)="toggleSend()">
                <h4>{{data.title}}</h4>
                <p>{{data.desc}}</p>
            </div>`
})

export class InnerFeedsComponent {
  @Input() data:any;
  @Output() send:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  toggleSend() {
    this.send.emit(this.data);
  }
}