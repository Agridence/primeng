"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1213],{46544:(T,Z,a)=>{a.d(Z,{N:()=>U});var l=a(79523);const p=["*"];let U=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["app-developmentsection"]],ngContentSelectors:p,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(c,u){1&c&&(l.F$t(),l.TgZ(0,"div",0),l._UZ(1,"i",1),l._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),l.qZA(),l.Hsn(3))},encapsulation:2}),d})()},21213:(T,Z,a)=>{a.r(Z),a.d(Z,{MenuDemoModule:()=>L});var l=a(44755),p=a(84676),U=a(58251),d=a(61928),g=a(7808),c=a(84369),u=a(79768),e=a(79523);let _=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,u.a,p.Bz,U.$9,g.EV,d.hJ,c.V,c.V]}),t})();var r=a(80183),s=a(54802);let h=(()=>{class t{constructor(){this.code={basic:'\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menu-basic-demo',\n    templateUrl: './menu-basic-demo.html'\n})\nexport class MenuBasicDemo implements OnInit {\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n                label: 'New',\n                icon: 'pi pi-fw pi-plus',\n            },\n            {\n                label: 'Delete',\n                icon: 'pi pi-fw pi-trash'\n            }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Delete",icon:"pi pi-fw pi-trash"}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-basic-demo",3,"code"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Menu requires a collection of menuitems as its "),e.TgZ(4,"i"),e._uU(5,"model"),e.qZA(),e._uU(6,"."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-menu",2),e.qZA(),e._UZ(9,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("model",n.items),e.xp6(1),e.Q6J("code",n.code))},dependencies:[u.h,r.v2,s.c],encapsulation:2}),t})(),q=(()=>{class t{constructor(){this.code={basic:'\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menu-custom-content-demo',\n    templateUrl: './menu-custom-content-demo.html'\n})\nexport class MenuCustomContentDemo implements OnInit {\n    items: MenuItem[];\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [\n                    {\n                        label: '<span class=\"text-xl font-bold\">Refresh</span>',\n                        escape: false,\n                        icon: 'pi pi-refresh',\n                        iconClass: 'text-xl'\n                    },\n                    {\n                        label: '<span class=\"text-xl font-bold\">Delete</span>',\n                        escape: false,\n                        icon: 'pi pi-times',\n                        iconClass: 'text-xl'\n                    }\n                ]\n            },\n            {\n                label: 'Navigate',\n                items: [\n                    {\n                        label: 'Angular',\n                        icon: 'pi pi-external-link',\n                        url: 'http://angular.io'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        routerLink: '/fileupload'\n                    }\n                ]\n            }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"Options",items:[{label:'<span class="text-xl font-bold">Refresh</span>',escape:!1,icon:"pi pi-refresh",iconClass:"text-xl"},{label:'<span class="text-xl font-bold">Delete</span>',escape:!1,icon:"pi pi-times",iconClass:"text-xl"}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["custom-content-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-custom-content-demo",3,"code"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Label of a menuitem both supports simple strings and html values as well. By default, html values are escaped, use "),e.TgZ(4,"i"),e._uU(5,"escape"),e.qZA(),e._uU(6," property to allow html."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-menu",2),e.qZA(),e._UZ(9,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("model",n.items),e.xp6(1),e.Q6J("code",n.code))},dependencies:[u.h,r.v2,s.c],encapsulation:2}),t})();var m=a(68476),A=a(39064);let f=(()=>{class t{constructor(i){this.messageService=i,this.code={basic:'\n<p-toast></p-toast>\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem, MessageService } from 'primeng/api';\n\n@Component({\n    selector: 'menu-command-demo',\n    templateUrl: './menu-command-demo.html',\n    providers: [MessageService]\n})\nexport class MenuCommandDemo implements OnInit {\n    items: MenuItem[];\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Update',\n                icon: 'pi pi-refresh',\n                command: () => {\n                    this.update();\n                }\n            },\n            {\n                label: 'Delete',\n                icon: 'pi pi-times',\n                command: () => {\n                    this.delete();\n                }\n            }\n        ];\n    }\n\n    update() {\n        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });\n    }\n\n    delete() {\n        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });\n    }\n}"}}ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["command-doc"]],inputs:{id:"id",title:"title"},features:[e._Bn([m.ez])],decls:11,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-command-demo",3,"code"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"The function to invoke when an item is clicked is defined using the "),e.TgZ(4,"i"),e._uU(5,"command"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-toast")(9,"p-menu",2),e.qZA(),e._UZ(10,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(8),e.Q6J("model",n.items),e.xp6(1),e.Q6J("code",n.code))},dependencies:[u.h,r.v2,A.FN,s.c],encapsulation:2}),t})(),v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:27,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"onShow"),e.qZA(),e.TgZ(16,"td"),e._uU(17,"event: Event object"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"Callback to invoke when overlay menu is shown."),e.qZA()(),e.TgZ(20,"tr")(21,"td"),e._uU(22,"onHide"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"event: Event object"),e.qZA(),e.TgZ(25,"td"),e._uU(26,"Callback to invoke when overlay menu is hidden."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[s.c],encapsulation:2}),t})(),b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["methods-doc"]],inputs:{id:"id",title:"title"},decls:34,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"toggle"),e.qZA(),e.TgZ(16,"td"),e._uU(17,"event: browser event"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"Toggles the visibility of the popup menu."),e.qZA()(),e.TgZ(20,"tr")(21,"td"),e._uU(22,"show"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"event: browser event"),e.qZA(),e.TgZ(25,"td"),e._uU(26,"Displays the popup menu."),e.qZA()(),e.TgZ(27,"tr")(28,"td"),e._uU(29,"hide"),e.qZA(),e.TgZ(30,"td"),e._uU(31,"-"),e.qZA(),e.TgZ(32,"td"),e._uU(33,"Hides the popup menu."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[s.c],encapsulation:2}),t})(),y=(()=>{class t{constructor(i){this.messageService=i,this.code={basic:'\n<p-toast></p-toast>\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-toast></p-toast>\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem, MessageService } from 'primeng/api';\n\n@Component({\n    selector: 'menu-group-demo',\n    templateUrl: './menu-group-demo.html',\n    providers: [MessageService]\n})\nexport class MenuGroupDemo implements OnInit {\n    items: MenuItem[];\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [\n                    {\n                        label: 'Update',\n                        icon: 'pi pi-refresh',\n                        command: () => {\n                            this.update();\n                        }\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-times',\n                        command: () => {\n                            this.delete();\n                        }\n                    }\n                ]\n            },\n            {\n                label: 'Navigate',\n                items: [\n                    {\n                        label: 'Angular',\n                        icon: 'pi pi-external-link',\n                        url: 'http://angular.io'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        routerLink: '/fileupload'\n                    }\n                ]\n            }\n        ];\n    }\n\n    update() {\n        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });\n    }\n\n    delete() {\n        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });\n    }\n}"}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["menu-group-demo"]],inputs:{id:"id",title:"title"},features:[e._Bn([m.ez])],decls:11,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-group-demo",3,"code"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Menu supports one level of nesting by defining children with "),e.TgZ(4,"i"),e._uU(5,"items"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-toast")(9,"p-menu",2),e.qZA(),e._UZ(10,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(8),e.Q6J("model",n.items),e.xp6(1),e.Q6J("code",n.code))},dependencies:[u.h,r.v2,A.FN,s.c],encapsulation:2}),t})(),D=(()=>{class t{constructor(){this.code={typescript:"import { MenuModule } from 'primeng/menu';"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,n){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(1),e.Q6J("code",n.code)("hideToggleCode",!0))},dependencies:[u.h,s.c],encapsulation:2}),t})(),M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["menuitem-doc"]],inputs:{id:"id",title:"title"},decls:292,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"MenuItem provides the following properties. Note that not all of them may be utilized by the menu component."),e.qZA()(),e.TgZ(4,"div",1)(5,"table",2)(6,"thead")(7,"tr")(8,"th"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Default"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Description"),e.qZA()()(),e.TgZ(16,"tbody")(17,"tr")(18,"td"),e._uU(19,"id"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"string"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"null"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Identifier of the element."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"label"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"string"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"null"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Text of the item."),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"icon"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"string"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"null"),e.qZA(),e.TgZ(42,"td"),e._uU(43,"Icon of the item."),e.qZA()(),e.TgZ(44,"tr")(45,"td"),e._uU(46,"iconStyle"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"object"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"null"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"Inline style of the item's icon."),e.qZA()(),e.TgZ(53,"tr")(54,"td"),e._uU(55,"command"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"function"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"null"),e.qZA(),e.TgZ(60,"td"),e._uU(61,"Callback to execute when item is clicked."),e.qZA()(),e.TgZ(62,"tr")(63,"td"),e._uU(64,"url"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"string"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"null"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"External link to navigate when item is clicked."),e.qZA()(),e.TgZ(71,"tr")(72,"td"),e._uU(73,"routerLink"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"array"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"null"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"RouterLink definition for internal navigation."),e.qZA()(),e.TgZ(80,"tr")(81,"td"),e._uU(82,"routerLinkActiveOptions"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"object"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"null"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"Configuration for active router link."),e.qZA()(),e.TgZ(89,"tr")(90,"td"),e._uU(91,"queryParams"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"object"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"null"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"Query parameters for internal navigation via routerLink."),e.qZA()(),e.TgZ(98,"tr")(99,"td"),e._uU(100,"fragment"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"string"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"null"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"Sets the hash fragment for the URL."),e.qZA()(),e.TgZ(107,"tr")(108,"td"),e._uU(109,"queryParamsHandling"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"QueryParamsHandling"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"null"),e.qZA(),e.TgZ(114,"td"),e._uU(115," How to handle query parameters in the router link for the next navigation. One of:"),e._UZ(116,"br")(117,"br"),e._uU(118," merge : Merge new with current parameters."),e._UZ(119,"br"),e._uU(120," preserve : Preserve current parameters.k. "),e.qZA()(),e.TgZ(121,"tr")(122,"td"),e._uU(123,"preserveFragment"),e.qZA(),e.TgZ(124,"td"),e._uU(125,"boolean"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"false"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"When true, preserves the URL fragment for the next navigation."),e.qZA()(),e.TgZ(130,"tr")(131,"td"),e._uU(132,"skipLocationChange"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"boolean"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"null"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"When true, navigates without pushing a new state into history."),e.qZA()(),e.TgZ(139,"tr")(140,"td"),e._uU(141,"replaceUrl"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"boolean"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"null"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"When true, navigates while replacing the current state in history."),e.qZA()(),e.TgZ(148,"tr")(149,"td"),e._uU(150,"state"),e.qZA(),e.TgZ(151,"td"),e._uU(152,"object"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"null"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"Developer-defined state that can be passed to any navigation."),e.qZA()(),e.TgZ(157,"tr")(158,"td"),e._uU(159,"items"),e.qZA(),e.TgZ(160,"td"),e._uU(161,"array"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"null"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"An array of children menuitems."),e.qZA()(),e.TgZ(166,"tr")(167,"td"),e._uU(168,"expanded"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"boolean"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"false"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"Visibility of submenu."),e.qZA()(),e.TgZ(175,"tr")(176,"td"),e._uU(177,"disabled"),e.qZA(),e.TgZ(178,"td"),e._uU(179,"boolean"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"false"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"When set as true, disables the menuitem."),e.qZA()(),e.TgZ(184,"tr")(185,"td"),e._uU(186,"visible"),e.qZA(),e.TgZ(187,"td"),e._uU(188,"boolean"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"true"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"Whether the dom element of menuitem is created or not."),e.qZA()(),e.TgZ(193,"tr")(194,"td"),e._uU(195,"target"),e.qZA(),e.TgZ(196,"td"),e._uU(197,"string"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"null"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"Specifies where to open the linked document."),e.qZA()(),e.TgZ(202,"tr")(203,"td"),e._uU(204,"escape"),e.qZA(),e.TgZ(205,"td"),e._uU(206,"boolean"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"true"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"Whether to escape the label or not. Set to false to display html content."),e.qZA()(),e.TgZ(211,"tr")(212,"td"),e._uU(213,"separator"),e.qZA(),e.TgZ(214,"td"),e._uU(215,"boolean"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"false"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"Defines the item as a separator."),e.qZA()(),e.TgZ(220,"tr")(221,"td"),e._uU(222,"style"),e.qZA(),e.TgZ(223,"td"),e._uU(224,"object"),e.qZA(),e.TgZ(225,"td"),e._uU(226,"null"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"Inline style of the menuitem."),e.qZA()(),e.TgZ(229,"tr")(230,"td"),e._uU(231,"styleClass"),e.qZA(),e.TgZ(232,"td"),e._uU(233,"string"),e.qZA(),e.TgZ(234,"td"),e._uU(235,"null"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"Style class of the menuitem."),e.qZA()(),e.TgZ(238,"tr")(239,"td"),e._uU(240,"badge"),e.qZA(),e.TgZ(241,"td"),e._uU(242,"string"),e.qZA(),e.TgZ(243,"td"),e._uU(244,"null"),e.qZA(),e.TgZ(245,"td"),e._uU(246,"Value of the badge."),e.qZA()(),e.TgZ(247,"tr")(248,"td"),e._uU(249,"badgeStyleClass"),e.qZA(),e.TgZ(250,"td"),e._uU(251,"string"),e.qZA(),e.TgZ(252,"td"),e._uU(253,"null"),e.qZA(),e.TgZ(254,"td"),e._uU(255,"Style class of the badge."),e.qZA()(),e.TgZ(256,"tr")(257,"td"),e._uU(258,"title"),e.qZA(),e.TgZ(259,"td"),e._uU(260,"string"),e.qZA(),e.TgZ(261,"td"),e._uU(262,"null"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"Tooltip text of the item."),e.qZA()(),e.TgZ(265,"tr")(266,"td"),e._uU(267,"automationId"),e.qZA(),e.TgZ(268,"td"),e._uU(269,"any"),e.qZA(),e.TgZ(270,"td"),e._uU(271,"null"),e.qZA(),e.TgZ(272,"td"),e._uU(273,"Value of HTML data-* attribute."),e.qZA()(),e.TgZ(274,"tr")(275,"td"),e._uU(276,"tabindex"),e.qZA(),e.TgZ(277,"td"),e._uU(278,"string"),e.qZA(),e.TgZ(279,"td"),e._uU(280,"0"),e.qZA(),e.TgZ(281,"td"),e._uU(282,"Specifies tab order of the item."),e.qZA()(),e.TgZ(283,"tr")(284,"td"),e._uU(285,"tooltipOptions"),e.qZA(),e.TgZ(286,"td"),e._uU(287,"TooltipOptions"),e.qZA(),e.TgZ(288,"td"),e._uU(289,"-"),e.qZA(),e.TgZ(290,"td"),e._uU(291,"Options of the item's tooltip."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[s.c],encapsulation:2}),t})(),x=(()=>{class t{constructor(){this.code={basic:'\n<p-menu [model]="items"></p-menu>',html:'\n<div class="card flex justify-content-center">\n    <p-menu [model]="items"></p-menu>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menu-navigation-demo',\n    templateUrl: './menu-navigation-demo.html'\n})\nexport class MenuNavigationDemo implements OnInit {\n    items: MenuItem[];\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},\n                {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},\n                {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}\n            ]\n        }];\n    }\n}"}}ngOnInit(){this.items=[{label:"File",items:[{label:"New",icon:"pi pi-plus",url:"https://primeng.org"},{label:"Open",icon:"pi pi-download",routerLink:["/menu"]},{label:"Recent Files",icon:"pi pi-download",routerLink:["/pagename"],queryParams:{recent:"true"}}]}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["navigation-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model"],["selector","menu-navigation-demo",3,"code"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3," Navigation is specified using url property for external links and with "),e.TgZ(4,"i"),e._uU(5,"routerLink"),e.qZA(),e._uU(6," for internal ones. If a menuitem has an active route, "),e.TgZ(7,"i"),e._uU(8,"p-menuitem-link-active"),e.qZA(),e._uU(9," style class is added as an indicator. Active route link can be configured with "),e.TgZ(10,"i"),e._uU(11,"routerLinkActiveOptions"),e.qZA(),e._uU(12," property of MenuItem API. "),e.qZA()(),e.TgZ(13,"div",1),e._UZ(14,"p-menu",2),e.qZA(),e._UZ(15,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(13),e.Q6J("model",n.items),e.xp6(1),e.Q6J("code",n.code))},dependencies:[u.h,r.v2,s.c],encapsulation:2}),t})();var w=a(62863);let I=(()=>{class t{constructor(i){this.messageService=i,this.code={basic:'\n<p-toast></p-toast>\n<p-menu #menu [model]="items" [popup]="true"></p-menu>\n<button pButton type="button" (click)="menu.toggle($event)" icon="pi pi-bars" label="Show"></button>',html:'\n<div class="card flex justify-content-center">\n    <p-toast></p-toast>\n    <p-menu #menu [model]="items" [popup]="true"></p-menu>\n    <button pButton type="button" (click)="menu.toggle($event)" icon="pi pi-bars" label="Show"></button>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem, MessageService } from 'primeng/api';\n\n@Component({\n    selector: 'menu-popup-demo',\n    templateUrl: './menu-popup-demo.html',\n    providers: [MessageService]\n})\nexport class MenuPopupDemo implements OnInit {\n    items: MenuItem[];\n\n    constructor(private messageService: MessageService) {}\n    \n    ngOnInit() {\n        this.items = [\n            {\n                label: 'Options',\n                items: [\n                    {\n                        label: 'Update',\n                        icon: 'pi pi-refresh',\n                        command: () => {\n                            this.update();\n                        }\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-times',\n                        command: () => {\n                            this.delete();\n                        }\n                    }\n                ]\n            },\n            {\n                label: 'Navigate',\n                items: [\n                    {\n                        label: 'Angular',\n                        icon: 'pi pi-external-link',\n                        url: 'http://angular.io'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        routerLink: '/fileupload'\n                    }\n                ]\n            }\n        ];\n    }\n\n    update() {\n        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });\n    }\n\n    delete() {\n        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });\n    }\n}"}}ngOnInit(){this.items=[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.update()}},{label:"Delete",icon:"pi pi-times",command:()=>{this.delete()}}]},{label:"Navigate",items:[{label:"Angular",icon:"pi pi-external-link",url:"http://angular.io"},{label:"Router",icon:"pi pi-upload",routerLink:"/fileupload"}]}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["popup-doc"]],inputs:{id:"id",title:"title"},features:[e._Bn([m.ez])],decls:19,vars:5,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"model","popup"],["menu",""],["pButton","","type","button","icon","pi pi-bars","label","Show",3,"click"],["selector","menu-popup-demo",3,"code"]],template:function(i,n){if(1&i){const P=e.EpF();e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Popup mode is enabled by setting "),e.TgZ(4,"i"),e._uU(5,"popup"),e.qZA(),e._uU(6," property to "),e.TgZ(7,"i"),e._uU(8,"true"),e.qZA(),e._uU(9," and calling "),e.TgZ(10,"i"),e._uU(11,"toggle"),e.qZA(),e._uU(12," method with an event of the target."),e.qZA()(),e.TgZ(13,"div",1),e._UZ(14,"p-toast")(15,"p-menu",2,3),e.TgZ(17,"button",4),e.NdJ("click",function(j){e.CHM(P);const B=e.MAs(16);return e.KtG(B.toggle(j))}),e.qZA()(),e._UZ(18,"app-code",5),e.qZA()}2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(14),e.Q6J("model",n.items)("popup",!0),e.xp6(3),e.Q6J("code",n.code))},dependencies:[u.h,r.v2,A.FN,w.Hq,s.c],encapsulation:2}),t})(),S=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:98,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Defines valid properties in Menu component."),e.qZA()(),e.TgZ(4,"div",1)(5,"table",2)(6,"thead")(7,"tr")(8,"th"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Default"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Description"),e.qZA()()(),e.TgZ(16,"tbody")(17,"tr")(18,"td"),e._uU(19,"model"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"array"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"null"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"An array of menuitems."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"popup"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"boolean"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"false"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Defines if menu would displayed as a popup."),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"style"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"string"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"null"),e.qZA(),e.TgZ(42,"td"),e._uU(43,"Inline style of the component."),e.qZA()(),e.TgZ(44,"tr")(45,"td"),e._uU(46,"styleClass"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"string"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"null"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"Style class of the component."),e.qZA()(),e.TgZ(53,"tr")(54,"td"),e._uU(55,"appendTo"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"any"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"null"),e.qZA(),e.TgZ(60,"td"),e._uU(61,' Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name). '),e.qZA()(),e.TgZ(62,"tr")(63,"td"),e._uU(64,"baseZIndex"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"number"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"0"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(71,"tr")(72,"td"),e._uU(73,"autoZIndex"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"boolean"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"true"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(80,"tr")(81,"td"),e._uU(82,"showTransitionOptions"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"string"),e.qZA(),e.TgZ(85,"td"),e._uU(86,".12s cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"Transition options of the show animation."),e.qZA()(),e.TgZ(89,"tr")(90,"td"),e._uU(91,"hideTransitionOptions"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"string"),e.qZA(),e.TgZ(94,"td"),e._uU(95,".1s linear"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"Transition options of the hide animation."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[s.c],encapsulation:2}),t})();const C=function(){return["/theming"]};let O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:41,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-menu"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-menu-list"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"List element."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-menuitem"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Menuitem element."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-menuitem-text"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Label of a menuitem."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-menuitem-icon"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Icon of a menuitem."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,C)))},dependencies:[p.rH,s.c],encapsulation:2}),t})();var k=a(46544);let J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:113,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){1&i&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," Menu component uses the "),e.TgZ(7,"i"),e._uU(8,"menu"),e.qZA(),e._uU(9," role and the value to describe the menu can either be provided with "),e.TgZ(10,"i"),e._uU(11,"aria-labelledby"),e.qZA(),e._uU(12," or "),e.TgZ(13,"i"),e._uU(14,"aria-label"),e.qZA(),e._uU(15," props. Each list item has a "),e.TgZ(16,"i"),e._uU(17,"presentation"),e.qZA(),e._uU(18," role whereas anchor elements have a "),e.TgZ(19,"i"),e._uU(20,"menuitem"),e.qZA(),e._uU(21," role with "),e.TgZ(22,"i"),e._uU(23,"aria-label"),e.qZA(),e._uU(24," referring to the label of the item and "),e.TgZ(25,"i"),e._uU(26,"aria-disabled"),e.qZA(),e._uU(27," defined if the item is disabled. A submenu within a Menu uses the "),e.TgZ(28,"i"),e._uU(29,"group"),e.qZA(),e._uU(30," role with an "),e.TgZ(31,"i"),e._uU(32,"aria-labelledby"),e.qZA(),e._uU(33," defined as the id of the submenu root menuitem label. "),e.qZA(),e.TgZ(34,"p"),e._uU(35,"In popup mode, the component implicitly manages the "),e.TgZ(36,"i"),e._uU(37,"aria-expanded"),e.qZA(),e._uU(38,", "),e.TgZ(39,"i"),e._uU(40,"aria-haspopup"),e.qZA(),e._uU(41," and "),e.TgZ(42,"i"),e._uU(43,"aria-controls"),e.qZA(),e._uU(44," attributes of the target element to define the relation between the target and the popup."),e.qZA(),e.TgZ(45,"h3"),e._uU(46,"Keyboard Support"),e.qZA(),e.TgZ(47,"div",1)(48,"table",2)(49,"thead")(50,"tr")(51,"th"),e._uU(52,"Key"),e.qZA(),e.TgZ(53,"th"),e._uU(54,"Function"),e.qZA()()(),e.TgZ(55,"tbody")(56,"tr")(57,"td")(58,"i"),e._uU(59,"tab"),e.qZA()(),e.TgZ(60,"td"),e._uU(61,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),e.qZA()(),e.TgZ(62,"tr")(63,"td")(64,"i"),e._uU(65,"shift"),e.qZA(),e._uU(66," + "),e.TgZ(67,"i"),e._uU(68,"tab"),e.qZA()(),e.TgZ(69,"td"),e._uU(70,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),e.qZA()(),e.TgZ(71,"tr")(72,"td")(73,"i"),e._uU(74,"enter"),e.qZA()(),e.TgZ(75,"td"),e._uU(76,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),e.qZA()(),e.TgZ(77,"tr")(78,"td")(79,"i"),e._uU(80,"space"),e.qZA()(),e.TgZ(81,"td"),e._uU(82,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),e.qZA()(),e.TgZ(83,"tr")(84,"td")(85,"i"),e._uU(86,"escape"),e.qZA()(),e.TgZ(87,"td"),e._uU(88,"If menu is in overlay mode, popup gets closes and focus moves to target."),e.qZA()(),e.TgZ(89,"tr")(90,"td")(91,"i"),e._uU(92,"down arrow"),e.qZA()(),e.TgZ(93,"td"),e._uU(94,"Moves focus to the next menuitem."),e.qZA()(),e.TgZ(95,"tr")(96,"td")(97,"i"),e._uU(98,"up arrow"),e.qZA()(),e.TgZ(99,"td"),e._uU(100,"Moves focus to the previous menuitem."),e.qZA()(),e.TgZ(101,"tr")(102,"td")(103,"i"),e._uU(104,"home"),e.qZA()(),e.TgZ(105,"td"),e._uU(106,"Moves focus to the first menuitem."),e.qZA()(),e.TgZ(107,"tr")(108,"td")(109,"i"),e._uU(110,"end"),e.qZA()(),e.TgZ(111,"td"),e._uU(112,"Moves focus to the last menuitem."),e.qZA()()()()()()()()),2&i&&(e.xp6(2),e.Q6J("title",n.title)("id",n.id))},dependencies:[s.c,k.N],encapsulation:2}),t})();var F=a(63408);let Q=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:D},{id:"basic",label:"Basic",component:h},{id:"group",label:"Group",component:y},{id:"popup",label:"Popup",component:I},{id:"custom",label:"Custom Content",component:q},{id:"navigation",label:"Navigation",component:x},{id:"command",label:"Command",component:f},{id:"style",label:"Style",component:O},{id:"accessibility",label:"Accessibility",component:J}],this.apiDocs=[{id:"props",label:"Properties",component:S},{id:"methods",label:"Methods",component:b},{id:"events",label:"Events",component:v},{id:"menuitem",label:"MenuItem API",component:M}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular Menu Component","header","Menu","description","Menu is a navigation / command component that supports dynamic and static positioning.",3,"docs","apiDocs"]],template:function(i,n){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",n.docs)("apiDocs",n.apiDocs)},dependencies:[F.x],encapsulation:2}),t})(),N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:Q}]),p.Bz]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,N,_]}),t})()}}]);