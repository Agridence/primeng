"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[2109],{32109:(E,f,r)=>{r.r(f),r.d(f,{DeferDemoModule:()=>q});var n=r(44755),d=r(84676),D=r(95030),h=r(84369),l=r(79768),e=r(79523);let g=(()=>{class t{constructor(o,i,c,m,F,Q){this.document=o,this.platformId=i,this.el=c,this.renderer=m,this.viewContainer=F,this.cd=Q,this.onLoad=new e.vpe,this.window=this.document.defaultView}ngAfterViewInit(){(0,n.NF)(this.platformId)&&(this.shouldLoad()&&this.load(),this.isLoaded()||(this.documentScrollListener=this.renderer.listen(this.window,"scroll",()=>{this.shouldLoad()&&(this.load(),this.documentScrollListener&&this.documentScrollListener(),this.documentScrollListener=null)})))}shouldLoad(){if(this.isLoaded())return!1;{let o=this.el.nativeElement.getBoundingClientRect();return this.document.documentElement.clientHeight>=o.top}}load(){this.view=this.viewContainer.createEmbeddedView(this.template),this.onLoad.emit(),this.cd.detectChanges()}isLoaded(){return null!=this.view&&(0,n.NF)(this.platformId)}ngOnDestroy(){this.view=null,this.documentScrollListener&&this.documentScrollListener()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(n.K0),e.Y36(e.Lbi),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.s_b),e.Y36(e.sBO))},t.\u0275dir=e.lG2({type:t,selectors:[["","pDefer",""]],contentQueries:function(o,i,c){if(1&o&&e.Suo(c,e.Rgc,5),2&o){let m;e.iGM(m=e.CRH())&&(i.template=m.first)}},hostAttrs:[1,"p-element"],outputs:{onLoad:"onLoad"}}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.ez]}),t})();var T=r(94434),y=r(7808);let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.ez,d.Bz,l.a,h.V,D.u5,Z,T.U$,y.EV,h.V]}),t})();var s=r(68476),p=r(54802);const L=function(){return["/theming"]};let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:25,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,i){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Parameters"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Description"),e.qZA()()(),e.TgZ(17,"tbody")(18,"tr")(19,"td"),e._uU(20,"onLoad"),e.qZA(),e.TgZ(21,"td"),e._uU(22,"-"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"Callback to invoke when deferred content is loaded."),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,L)))},dependencies:[d.rH,p.c],encapsulation:2}),t})();var v=r(39064);function C(t,a){1&t&&e._UZ(0,"img",5)}let A=(()=>{class t{constructor(o){this.messageService=o,this.code={basic:'\n<div pDefer (onLoad)="onLoad()">\n    <ng-template>\n        <img class="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg" alt="Prime" />\n    </ng-template>\n</div>',html:'\n<div class="card">\n    <p style="margin-bottom: 70rem;">\n        Content is not loaded yet, scroll down to initialize it.\n    </p>\n    <p-toast></p-toast>\n    <div pDefer (onLoad)="onLoad()">\n        <ng-template>\n            <img class="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg" alt="Prime" />\n        </ng-template>\n    </div>\n</div>',typescript:"\nimport { Component, Input } from '@angular/core';\nimport { MessageService } from 'src/app/components/api/messageservice';\n\n@Component({\n    selector: 'defer-basic-demo',\n    templateUrl: './defer-basic-demo.html',\n    providers: [MessageService]\n})\nexport class DeferBasicDemo {\n    constructor(private messageService: MessageService) {}\n\n    onLoad() {\n        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });\n    }\n}"}}onLoad(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},features:[e._Bn([s.ez])],decls:11,vars:3,consts:[[3,"title","id"],[1,"card"],[2,"margin-bottom","70rem"],["pDefer","",3,"onLoad"],["selector","defer-basic-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg","alt","Prime",1,"w-full","md:w-30rem","md:block","md:mx-auto"]],template:function(o,i){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),e.qZA()(),e.TgZ(4,"div",1)(5,"p",2),e._uU(6,"Content is not loaded yet, scroll down to initialize it."),e.qZA(),e._UZ(7,"p-toast"),e.TgZ(8,"div",3),e.NdJ("onLoad",function(){return i.onLoad()}),e.YNc(9,C,1,0,"ng-template"),e.qZA()(),e._UZ(10,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(9),e.Q6J("code",i.code))},dependencies:[l.h,p.c,g,v.FN],encapsulation:2}),t})(),U=(()=>{class t{constructor(){this.code={typescript:"import { DeferModule } from 'primeng/defer';"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(o,i){1&o&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(1),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[l.h,p.c],encapsulation:2}),t})();var u=r(18657),w=r(84334),B=r(20485);function M(t,a){1&t&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Vin"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Year"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Brand"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Color"),e.qZA()())}function z(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&t){const o=a.$implicit;e.xp6(2),e.Oqu(o.vin),e.xp6(2),e.Oqu(o.year),e.xp6(2),e.Oqu(o.brand),e.xp6(2),e.Oqu(o.color)}}function x(t,a){if(1&t&&(e.TgZ(0,"p-table",5),e.YNc(1,M,9,0,"ng-template",6),e.YNc(2,z,9,4,"ng-template",7),e.qZA()),2&t){const o=e.oxw();e.Q6J("value",o.cars)}}let Y=(()=>{class t{constructor(o,i){this.carService=o,this.messageService=i,this.code={basic:'\n<div pDefer (onLoad)="initData()">\n    <ng-template>\n        <p-table [value]="cars" responsiveLayout="scroll">\n            <ng-template pTemplate="header">\n                <tr>\n                    <th>Vin</th>\n                    <th>Year</th>\n                    <th>Brand</th>\n                    <th>Color</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate="body" let-car>\n                <tr>\n                    <td>{{car.vin}}</td>\n                    <td>{{car.year}}</td>\n                    <td>{{car.brand}}</td>\n                    <td>{{car.color}}</td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </ng-template>\n</div>',html:'\n<div class="card">\n    <p style="margin-bottom: 70rem;">\n        Table is not loaded yet, scroll down to initialize it.\n    </p>\n\n    <p-toast></p-toast>\n    <div pDefer (onLoad)="initData()">\n        <ng-template>\n            <p-table [value]="cars" responsiveLayout="scroll">\n                <ng-template pTemplate="header">\n                    <tr>\n                        <th>Vin</th>\n                        <th>Year</th>\n                        <th>Brand</th>\n                        <th>Color</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate="body" let-car>\n                    <tr>\n                        <td>{{car.vin}}</td>\n                        <td>{{car.year}}</td>\n                        <td>{{car.brand}}</td>\n                        <td>{{car.color}}</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </ng-template>\n    </div>\n</div>',typescript:"\nimport { Component, Input } from '@angular/core';\nimport { MessageService } from 'primeng/api';\nimport { Car } from '../../domain/car';\nimport { Code } from '../../domain/code';\nimport { CarService } from '../../service/carservice';\n\n@Component({\n    selector: 'defer-data-table-demo',\n    templateUrl: './defer-data-table-demo.html',\n    providers: [MessageService, CarService]\n})\nexport class DeferDataTableDemo {\n    cars: Car[];\n\n    constructor(private carService: CarService, private messageService: MessageService) {}\n\n    initData() {\n        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });\n        this.carService.getCarsSmall().then((cars) => (this.cars = cars));\n    }\n}"}}initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(o=>this.cars=o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.Z),e.Y36(s.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["datatable-doc"]],inputs:{id:"id",title:"title"},features:[e._Bn([s.ez,u.Z])],decls:11,vars:3,consts:[[3,"title","id"],[1,"card"],[2,"margin-bottom","70rem"],["pDefer","",3,"onLoad"],["selector","defer-data-table-demo",3,"code"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"]],template:function(o,i){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),e.qZA()(),e.TgZ(4,"div",1)(5,"p",2),e._uU(6,"Table is not loaded yet, scroll down to initialize it."),e.qZA(),e._UZ(7,"p-toast"),e.TgZ(8,"div",3),e.NdJ("onLoad",function(){return i.initData()}),e.YNc(9,x,3,1,"ng-template"),e.qZA()(),e._UZ(10,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(9),e.Q6J("code",i.code))},dependencies:[l.h,p.c,g,w.iA,B.jx,v.FN],encapsulation:2}),t})();var _=r(63408);let I=(()=>{class t{constructor(o,i){this.carService=o,this.messageService=i,this.docs=[{id:"import",label:"Import",component:U},{id:"basic",label:"Basic",component:A},{id:"datatable",label:"DataTable",component:Y}],this.apiDocs=[{id:"events",label:"Events",component:S}]}initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(o=>this.cars=o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.Z),e.Y36(s.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([s.ez])],decls:1,vars:2,consts:[["title","Angular Defer Component","header","Defer","description","Defer postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.",3,"docs","apiDocs"]],template:function(o,i){1&o&&e._UZ(0,"app-doc",0),2&o&&e.Q6J("docs",i.docs)("apiDocs",i.apiDocs)},dependencies:[_.x],encapsulation:2}),t})(),J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:I}]),d.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.ez,J,b]}),t})()}}]);