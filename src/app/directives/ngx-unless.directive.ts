import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  visible = false;

  constructor(private templateRef:TemplateRef<any>,
              private viewcontainer: ViewContainerRef) { }

  @Input()
  set ngxUnless(condition:boolean){
    if(!condition && !this.visible){
      this.viewcontainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if(condition && this.visible) {
      this.viewcontainer.clear();
      this.visible = false;
    }
  }

}


