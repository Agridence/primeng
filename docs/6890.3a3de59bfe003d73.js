"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6890],{6890:(J,g,i)=>{i.r(g),i.d(g,{InputGroupDemoModule:()=>w});var m=i(44755),l=i(95030),d=i(84676),x=i(61928),b=i(73568),a=i(46440),y=i(49671),h=i(84369),c=i(79768),t=i(79523);let v=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,d.Bz,c.a,h.V,l.u5,a.j,x.hJ,b.nD,y.cc,h.V]}),e})();var s=i(54802);let f=(()=>{class e{constructor(){this.code={basic:'\n<div class="p-inputgroup w-full md:w-30rem">\n    <span class="p-inputgroup-addon">\n        <i class="pi pi-clock"></i>\n    </span>\n    <span class="p-inputgroup-addon">\n        <i class="pi pi-star-fill"></i>\n    </span>\n    <input type="text" pInputText placeholder="Price" />\n    <span class="p-inputgroup-addon">$</span>\n    <span class="p-inputgroup-addon">.00</span>\n</div>',html:'\n<div class="card flex justify-content-center">\n    <div class="p-inputgroup w-full md:w-30rem">\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-clock"></i>\n        </span>\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-star-fill"></i>\n        </span>\n        <input type="text" pInputText placeholder="Price" />\n        <span class="p-inputgroup-addon">$</span>\n        <span class="p-inputgroup-addon">.00</span>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'inputgroup-multiple-demo',\n    templateUrl: './inputgroup-multiple-demo.html'\n})\nexport class InputgroupMultipleDemo {\n}"}}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["multiple-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:3,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[1,"p-inputgroup","w-full","md:w-30rem"],[1,"p-inputgroup-addon"],[1,"pi","pi-clock"],[1,"pi","pi-star-fill"],["type","text","pInputText","","placeholder","Price"],["selector","inputgroup-multiple-demo",3,"code"]],template:function(p,o){1&p&&(t.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),t._uU(3,"Multiple add-ons can be placed inside the same group."),t.qZA()(),t.TgZ(4,"div",1)(5,"div",2)(6,"span",3),t._UZ(7,"i",4),t.qZA(),t.TgZ(8,"span",3),t._UZ(9,"i",5),t.qZA(),t._UZ(10,"input",6),t.TgZ(11,"span",3),t._uU(12,"$"),t.qZA(),t.TgZ(13,"span",3),t._uU(14,".00"),t.qZA()()(),t._UZ(15,"app-code",7),t.qZA()),2&p&&(t.xp6(1),t.Q6J("title",o.title)("id",o.id),t.xp6(14),t.Q6J("code",o.code))},dependencies:[c.h,s.c,a.o],encapsulation:2}),e})(),Z=(()=>{class e{constructor(){this.code={basic:'\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon">\n        <i class="pi pi-user"></i>\n    </span>\n    <input pInputText placeholder="Username" />\n</div>\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon">$</span>\n    <input type="text" pInputText placeholder="Price" />\n    <span class="p-inputgroup-addon">.00</span>\n</div>\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon">www</span>\n    <input type="text" pInputText placeholder="Website" />\n</div>',html:'\n<div class="card flex flex-column md:flex-row gap-3">\n    <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">\n            <i class="pi pi-user"></i>\n        </span>\n        <input pInputText placeholder="Username" />\n    </div>\n\n    <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">$</span>\n        <input type="text" pInputText placeholder="Price" />\n        <span class="p-inputgroup-addon">.00</span>\n    </div>\n\n    <div class="p-inputgroup">\n        <span class="p-inputgroup-addon">www</span>\n        <input type="text" pInputText placeholder="Website" />\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'inputgroup-basic-demo',\n    templateUrl: './inputgroup-basic-demo.html'\n})\nexport class InputgroupBasicDemo {\n}"}}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:26,vars:3,consts:[[3,"title","id"],[1,"card","flex","flex-column","md:flex-row","gap-3"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Price"],["type","text","pInputText","","placeholder","Website"],["selector","inputgroup-basic-demo",3,"code"]],template:function(p,o){1&p&&(t.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),t._uU(3,"An InputGroup is created by wrapping the input and add-ons inside an element with a "),t.TgZ(4,"i"),t._uU(5,"p-inputgroup"),t.qZA(),t._uU(6," class where add-ons also should be inside an element with "),t.TgZ(7,"i"),t._uU(8,".p-inputgroup-addon"),t.qZA(),t._uU(9," class"),t.qZA()(),t.TgZ(10,"div",1)(11,"div",2)(12,"span",3),t._UZ(13,"i",4),t.qZA(),t._UZ(14,"input",5),t.qZA(),t.TgZ(15,"div",2)(16,"span",3),t._uU(17,"$"),t.qZA(),t._UZ(18,"input",6),t.TgZ(19,"span",3),t._uU(20,".00"),t.qZA()(),t.TgZ(21,"div",2)(22,"span",3),t._uU(23,"www"),t.qZA(),t._UZ(24,"input",7),t.qZA()(),t._UZ(25,"app-code",8),t.qZA()),2&p&&(t.xp6(1),t.Q6J("title",o.title)("id",o.id),t.xp6(24),t.Q6J("code",o.code))},dependencies:[c.h,s.c,a.o],encapsulation:2}),e})(),T=(()=>{class e{constructor(){this.code={typescript:"import { InputTextModule } from 'primeng/inputtext';\nimport { CheckboxModule } from 'primeng/checkbox';\nimport { RadioButtonModule } from 'primeng/radiobutton';"}}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(p,o){1&p&&(t.TgZ(0,"section"),t._UZ(1,"app-docsectiontext",0)(2,"app-code",1),t.qZA()),2&p&&(t.xp6(1),t.Q6J("title",o.title)("id",o.id),t.xp6(1),t.Q6J("code",o.code)("hideToggleCode",!0))},dependencies:[c.h,s.c],encapsulation:2}),e})();var I=i(62863);let B=(()=>{class e{constructor(){this.code={basic:'\n<div class="p-inputgroup">\n    <button type="button" pButton label="Search"></button>\n    <input type="text" pInputText placeholder="Keyword" />\n</div>\n\n<div class="p-inputgroup">\n    <input type="text" pInputText placeholder="Keyword" />\n    <button type="button" pButton icon="pi pi-refresh" styleClass="p-button-warn"></button>\n</div>\n\n<div class="p-inputgroup">\n    <button type="button" pButton icon="pi pi-check" styleClass="p-button-success"></button>\n    <input type="text" pInputText placeholder="Vote" />\n    <button type="button" pButton icon="pi pi-times" styleClass="p-button-danger"></button>\n</div>',html:'\n<div class="card flex flex-column md:flex-row gap-3">\n    <div class="p-inputgroup">\n        <button type="button" pButton label="Search"></button>\n        <input type="text" pInputText placeholder="Keyword" />\n    </div>\n    \n    <div class="p-inputgroup">\n        <input type="text" pInputText placeholder="Keyword" />\n        <button type="button" pButton icon="pi pi-refresh" styleClass="p-button-warn"></button>\n    </div>\n\n    <div class="p-inputgroup">\n        <button type="button" pButton icon="pi pi-check" styleClass="p-button-success"></button>\n        <input type="text" pInputText placeholder="Vote" />\n        <button type="button" pButton icon="pi pi-times" styleClass="p-button-danger"></button>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'inputgroup-button-demo',\n    templateUrl: './inputgroup-button-demo.html'\n})\nexport class InputgroupButtonDemo {\n}"}}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["button-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:3,consts:[[3,"title","id"],[1,"card","flex","flex-column","md:flex-row","gap-3"],[1,"p-inputgroup"],["type","button","pButton","","label","Search"],["type","text","pInputText","","placeholder","Keyword"],["type","button","pButton","","icon","pi pi-refresh","styleClass","p-button-warn"],["type","button","pButton","","icon","pi pi-check","styleClass","p-button-success"],["type","text","pInputText","","placeholder","Vote"],["type","button","pButton","","icon","pi pi-times","styleClass","p-button-danger"],["selector","inputgroup-button-demo",3,"code"]],template:function(p,o){1&p&&(t.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),t._uU(3,"Buttons can be placed at either side of an input element."),t.qZA()(),t.TgZ(4,"div",1)(5,"div",2),t._UZ(6,"button",3)(7,"input",4),t.qZA(),t.TgZ(8,"div",2),t._UZ(9,"input",4)(10,"button",5),t.qZA(),t.TgZ(11,"div",2),t._UZ(12,"button",6)(13,"input",7)(14,"button",8),t.qZA()(),t._UZ(15,"app-code",9),t.qZA()),2&p&&(t.xp6(1),t.Q6J("title",o.title)("id",o.id),t.xp6(14),t.Q6J("code",o.code))},dependencies:[c.h,s.c,a.o,I.Hq],encapsulation:2}),e})();var C=i(36861),M=i(91445);let D=(()=>{class e{constructor(){this.code={basic:'\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon"><p-checkbox [(ngModel)]="checkbox1" [binary]="true"></p-checkbox></span>\n    <input type="text" pInputText placeholder="Username" />\n</div>\n\n<div class="p-inputgroup">\n    <input type="text" pInputText placeholder="Price" />\n    <span class="p-inputgroup-addon"><p-radioButton name="category" value="price" [(ngModel)]="category"></p-radioButton></span>\n</div>\n\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon"><p-checkbox [(ngModel)]="checkbox2" [binary]="true"></p-checkbox></span>\n    <input type="text" pInputText placeholder="Website" />\n    <span class="p-inputgroup-addon"><p-radioButton name="category" value="site" [(ngModel)]="category"></p-radioButton></span>\n</div>',html:'\n<div class="card flex flex-column md:flex-row gap-3">\n    <div class="p-inputgroup">\n        <span class="p-inputgroup-addon"><p-checkbox [(ngModel)]="checkbox1" [binary]="true"></p-checkbox></span>\n        <input type="text" pInputText placeholder="Username" />\n    </div>\n\n    <div class="p-inputgroup">\n        <input type="text" pInputText placeholder="Price" />\n        <span class="p-inputgroup-addon"><p-radioButton name="category" value="price" [(ngModel)]="category"></p-radioButton></span>\n    </div>\n\n    <div class="p-inputgroup">\n        <span class="p-inputgroup-addon"><p-checkbox [(ngModel)]="checkbox2" [binary]="true"></p-checkbox></span>\n        <input type="text" pInputText placeholder="Website" />\n        <span class="p-inputgroup-addon"><p-radioButton name="category" value="site" [(ngModel)]="category"></p-radioButton></span>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'inputgroup-checkbox-demo',\n    templateUrl: './inputgroup-checkbox-demo.html'\n})\nexport class InputgroupCheckboxDemo {\n    checkbox1: boolean;\n\n    checkbox2: boolean;\n\n    category: string;\n}"}}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["checkbox-doc"]],inputs:{id:"id",title:"title"},decls:20,vars:9,consts:[[3,"title","id"],[1,"card","flex","flex-column","md:flex-row","gap-3"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[3,"ngModel","binary","ngModelChange"],["type","text","pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Price"],["name","category","value","price",3,"ngModel","ngModelChange"],["type","text","pInputText","","placeholder","Website"],["name","category","value","site",3,"ngModel","ngModelChange"],["selector","inputgroup-checkbox-demo",3,"code"]],template:function(p,o){1&p&&(t.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),t._uU(3,"Checkbox and RadioButton components can be combined with an input element under the same group."),t.qZA()(),t.TgZ(4,"div",1)(5,"div",2)(6,"span",3)(7,"p-checkbox",4),t.NdJ("ngModelChange",function(u){return o.checkbox1=u}),t.qZA()(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",2),t._UZ(10,"input",6),t.TgZ(11,"span",3)(12,"p-radioButton",7),t.NdJ("ngModelChange",function(u){return o.category=u}),t.qZA()()(),t.TgZ(13,"div",2)(14,"span",3)(15,"p-checkbox",4),t.NdJ("ngModelChange",function(u){return o.checkbox2=u}),t.qZA()(),t._UZ(16,"input",8),t.TgZ(17,"span",3)(18,"p-radioButton",9),t.NdJ("ngModelChange",function(u){return o.category=u}),t.qZA()()()(),t._UZ(19,"app-code",10),t.qZA()),2&p&&(t.xp6(1),t.Q6J("title",o.title)("id",o.id),t.xp6(6),t.Q6J("ngModel",o.checkbox1)("binary",!0),t.xp6(5),t.Q6J("ngModel",o.category),t.xp6(3),t.Q6J("ngModel",o.checkbox2)("binary",!0),t.xp6(3),t.Q6J("ngModel",o.category),t.xp6(1),t.Q6J("code",o.code))},dependencies:[c.h,s.c,l.JJ,l.On,a.o,C.XZ,M.EU],encapsulation:2}),e})();var U=i(63408);let k=(()=>{class e{constructor(){this.docs=[{id:"import",label:"Import",component:T},{id:"basic",label:"Basic",component:Z},{id:"multiple",label:"Multiple",component:f},{id:"button",label:"Button",component:B},{id:"checkbox",label:"Checkbox & RadioButton",component:D}]}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["title","Angular InputGroup Component","header","InputGroup","description","Text, icon, buttons and other content can be grouped next to an input.",3,"docs"]],template:function(p,o){1&p&&t._UZ(0,"app-doc",0),2&p&&t.Q6J("docs",o.docs)},dependencies:[U.x],encapsulation:2}),e})(),A=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild([{path:"",component:k}]),d.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,A,v]}),e})()}}]);