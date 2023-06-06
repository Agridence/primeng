"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[9281],{79281:(w,f,o)=>{o.r(f),o.d(f,{FilterServiceDemoModule:()=>N});var d=o(44755),c=o(84676),g=o(94434),m=o(84369),n=o(79768),e=o(79523);let h=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,n.a,m.V,c.Bz,g.U$,m.V]}),t})();var a=o(54802);const Z=function(){return["/theming"]};let v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["api-doc"]],inputs:{id:"id",title:"title"},decls:49,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,r){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Parameters"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Description"),e.qZA()()(),e.TgZ(17,"tbody")(18,"tr")(19,"td"),e._uU(20,"filter"),e.qZA(),e.TgZ(21,"td"),e._uU(22," value[]: An array of values to filter"),e._UZ(23,"br"),e._uU(24," fields[]: An array of properties in the value object"),e._UZ(25,"br"),e._uU(26," filterValue: Filter value"),e._UZ(27,"br"),e._uU(28," filterMatchMode: Constraint"),e._UZ(29,"br"),e._uU(30," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Whether the property values of the given value collection matches the filter."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"filters"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"-"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"Property to access constraints collection."),e.qZA()(),e.TgZ(40,"tr")(41,"td"),e._uU(42,"register"),e.qZA(),e.TgZ(43,"td"),e._uU(44," name: string "),e._UZ(45,"br"),e._uU(46," fn: Filter callback "),e.qZA(),e.TgZ(47,"td"),e._uU(48,"Registers a new constraint in filters."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",r.title)("id",r.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,Z)))},dependencies:[a.c,c.rH],encapsulation:2}),t})(),U=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["built-in-constraints-doc"]],inputs:{id:"id",title:"title"},decls:167,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,r){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"startsWith"),e.qZA(),e.TgZ(16,"td"),e._uU(17," value: Value to filter"),e._UZ(18,"br"),e._uU(19," filter: Filter value"),e._UZ(20,"br"),e._uU(21," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(22,"td"),e._uU(23,"Whether the value starts with the filter value"),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"contains"),e.qZA(),e.TgZ(27,"td"),e._uU(28," value: Value to filter"),e._UZ(29,"br"),e._uU(30," filter: Filter value"),e._UZ(31,"br"),e._uU(32," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Whether the value contains the filter value"),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"endsWith"),e.qZA(),e.TgZ(38,"td"),e._uU(39," value: Value to filter"),e._UZ(40,"br"),e._uU(41," filter: Filter value"),e._UZ(42,"br"),e._uU(43," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(44,"td"),e._uU(45,"Whether the value ends with the filter value"),e.qZA()(),e.TgZ(46,"tr")(47,"td"),e._uU(48,"equals"),e.qZA(),e.TgZ(49,"td"),e._uU(50," value: Value to filter"),e._UZ(51,"br"),e._uU(52," filter: Filter value"),e._UZ(53,"br"),e._uU(54," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(55,"td"),e._uU(56,"Whether the value equals the filter value"),e.qZA()(),e.TgZ(57,"tr")(58,"td"),e._uU(59,"notEquals"),e.qZA(),e.TgZ(60,"td"),e._uU(61," value: Value to filter"),e._UZ(62,"br"),e._uU(63," filter: Filter value"),e._UZ(64,"br"),e._uU(65," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(66,"td"),e._uU(67,"Whether the value does not equal the filter value"),e.qZA()(),e.TgZ(68,"tr")(69,"td"),e._uU(70,"in"),e.qZA(),e.TgZ(71,"td"),e._uU(72," value: Value to filter"),e._UZ(73,"br"),e._uU(74," filter[]: An array of filter values"),e._UZ(75,"br"),e._uU(76," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(77,"td"),e._uU(78,"Whether the value contains the filter value"),e.qZA()(),e.TgZ(79,"tr")(80,"td"),e._uU(81,"lt"),e.qZA(),e.TgZ(82,"td"),e._uU(83," value: Value to filter"),e._UZ(84,"br"),e._uU(85," filter: Filter value"),e._UZ(86,"br"),e._uU(87," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(88,"td"),e._uU(89,"Whether the value is less than the filter value"),e.qZA()(),e.TgZ(90,"tr")(91,"td"),e._uU(92,"lte"),e.qZA(),e.TgZ(93,"td"),e._uU(94," value: Value to filter"),e._UZ(95,"br"),e._uU(96," filter: Filter value"),e._UZ(97,"br"),e._uU(98," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(99,"td"),e._uU(100,"Whether the value is less than or equals to the filter value"),e.qZA()(),e.TgZ(101,"tr")(102,"td"),e._uU(103,"gt"),e.qZA(),e.TgZ(104,"td"),e._uU(105," value: Value to filter"),e._UZ(106,"br"),e._uU(107," filter: Filter value"),e._UZ(108,"br"),e._uU(109," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(110,"td"),e._uU(111,"Whether the value is greater than the filter value"),e.qZA()(),e.TgZ(112,"tr")(113,"td"),e._uU(114,"gte"),e.qZA(),e.TgZ(115,"td"),e._uU(116," value: Value to filter"),e._UZ(117,"br"),e._uU(118," filter: Filter value"),e._UZ(119,"br"),e._uU(120," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(121,"td"),e._uU(122,"Whether the value is greater than or equals to the filter value"),e.qZA()(),e.TgZ(123,"tr")(124,"td"),e._uU(125,"is"),e.qZA(),e.TgZ(126,"td"),e._uU(127," value: Value to filter"),e._UZ(128,"br"),e._uU(129," filter: Filter value"),e._UZ(130,"br"),e._uU(131," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(132,"td"),e._uU(133,"Whether the value equals the filter value, alias to equals"),e.qZA()(),e.TgZ(134,"tr")(135,"td"),e._uU(136,"isNot"),e.qZA(),e.TgZ(137,"td"),e._uU(138," value: Value to filter"),e._UZ(139,"br"),e._uU(140," filter: Filter value"),e._UZ(141,"br"),e._uU(142," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(143,"td"),e._uU(144,"Whether the value does not equal the filter value, alias to notEquals."),e.qZA()(),e.TgZ(145,"tr")(146,"td"),e._uU(147,"before"),e.qZA(),e.TgZ(148,"td"),e._uU(149," value: Value to filter"),e._UZ(150,"br"),e._uU(151," filter: Filter value"),e._UZ(152,"br"),e._uU(153," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(154,"td"),e._uU(155,"Whether the date value is before the filter date."),e.qZA()(),e.TgZ(156,"tr")(157,"td"),e._uU(158,"after"),e.qZA(),e.TgZ(159,"td"),e._uU(160," value: Value to filter"),e._UZ(161,"br"),e._uU(162," filter: Filter value"),e._UZ(163,"br"),e._uU(164," filterLocale: Locale to use in filtering "),e.qZA(),e.TgZ(165,"td"),e._uU(166,"Whether the date value is after the filter date."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",r.title)("id",r.id))},dependencies:[a.c],encapsulation:2}),t})(),_=(()=>{class t{constructor(){this.code={typescript:"this.filterService.register('isPrimeNumber', (value, filter): boolean => {\n    if (filter === undefined || filter === null || filter.trim() === '') {\n        return true;\n    }\n\n    if (value === undefined || value === null) {\n        return false;\n    }\n\n    return value.toString() === filter.toString();\n});\n\nthis.filterService.filters['isPrimeNumber'](3);                      //true\nthis.filterService.filters['isPrimeNumber'](5);                      //true\nthis.filterService.filters['isPrimeNumber'](568985673);              //false"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["custom-constraints-doc"]],inputs:{id:"id",title:"title"},decls:8,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,r){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"FilterService can be extended by adding new constraints using the "),e.TgZ(4,"span"),e._uU(5,"register"),e.qZA(),e._uU(6," function."),e.qZA()(),e._UZ(7,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",r.title)("id",r.id),e.xp6(6),e.Q6J("code",r.code)("hideToggleCode",!0))},dependencies:[n.h,a.c],encapsulation:2}),t})(),T=(()=>{class t{constructor(){this.code={typescript:"import { FilterService } from 'primeng/api';"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,r){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",r.title)("id",r.id),e.xp6(1),e.Q6J("code",r.code)("hideToggleCode",!0))},dependencies:[n.h,a.c],encapsulation:2}),t})(),b=(()=>{class t{constructor(){this.code={typescript:"export class FilterServiceDemo implements OnInit {\n\n    constructor(private filterService: FilterService) {}\n\n    ngOnInit() {\n        const value = 'PrimeNG';\n\n        this.filterService.filters.equals(value, 'NG');                            //false\n        this.filterService.filters.equals(value, 8);                               //false\n        this.filterService.filters.equals(value, new Date());                      //false\n        this.filterService.filters.contains(value, 'NG');                          //true\n        this.filterService.filters.startsWith(value, 'NG');                        //false\n        this.filterService.filters.endsWith(value, 'NG');                          //true\n        this.filterService.filters.lt(10, 20);                                     //true\n        this.filterService.filters.gt(50, 20);                                     //true\n        this.filterService.filters.in(value, ['PrimeFaces', 'PrimeNG']);           //true\n    }\n}"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["usage-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,r){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p")(3,"i"),e._uU(4,"FilterService"),e.qZA(),e._uU(5," needs to be injected into your component. Filters are accessed with "),e.TgZ(6,"i"),e._uU(7,"FilterService.filters"),e.qZA(),e._uU(8,"."),e.qZA()(),e._UZ(9,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",r.title)("id",r.id),e.xp6(8),e.Q6J("code",r.code)("hideToggleCode",!0))},dependencies:[n.h,a.c],encapsulation:2}),t})();var s=o(68476),A=o(18657),p=o(84334),q=o(20485);function F(t,l){if(1&t&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&t){const i=l.$implicit;e.xp6(1),e.Oqu(i.header)}}function S(t,l){if(1&t&&(e.TgZ(0,"th"),e._UZ(1,"p-columnFilter",8),e.qZA()),2&t){const i=l.$implicit,r=e.oxw(2);e.xp6(1),e.Q6J("field",i.field)("matchModeOptions",r.matchModeOptions)("matchMode","custom-equals")}}function D(t,l){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,F,2,1,"th",7),e.qZA(),e.TgZ(2,"tr"),e.YNc(3,S,2,3,"th",7),e.qZA()),2&t){const i=l.$implicit;e.xp6(1),e.Q6J("ngForOf",i),e.xp6(2),e.Q6J("ngForOf",i)}}function y(t,l){if(1&t&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&t){const i=l.$implicit,r=e.oxw().$implicit;e.xp6(1),e.Oqu(r[i.field])}}function C(t,l){if(1&t&&(e.TgZ(0,"tr",9),e.YNc(1,y,2,1,"td",7),e.qZA()),2&t){const r=l.columns;e.Q6J("pSelectableRow",l.$implicit),e.xp6(1),e.Q6J("ngForOf",r)}}let L=(()=>{class t{constructor(i,r){this.carService=i,this.filterService=r,this.code={basic:'\n<p-table #dt [columns]="cols" [value]="cars" [paginator]="true" [rows]="10" responsiveLayout="scroll">\n    <ng-template pTemplate="header" let-columns>\n        <tr>\n            <th *ngFor="let col of columns">\n                &#123;&#123;col.header&#125;&#125;\n            </th>\n        </tr>\n        <tr>\n            <th *ngFor="let col of columns">\n                <p-columnFilter type="text" [field]="col.field" [matchModeOptions]="matchModeOptions" [matchMode]="\'custom-equals\'"></p-columnFilter>\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate="body" let-rowData let-columns="columns">\n        <tr [pSelectableRow]="rowData">\n            <td *ngFor="let col of columns">\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            </td>\n        </tr>\n    </ng-template>\n</p-table>',html:'\n<div class="card">\n    <p-table #dt [columns]="cols" [value]="cars" [paginator]="true" [rows]="10" responsiveLayout="scroll">\n        <ng-template pTemplate="header" let-columns>\n            <tr>\n                <th *ngFor="let col of columns">&#123;&#123;col.header&#125;&#125;</th>\n            </tr>\n            <tr>\n                <th *ngFor="let col of columns">\n                    <p-columnFilter type="text" [field]="col.field" [matchModeOptions]="matchModeOptions" [matchMode]="\'custom-equals\'"></p-columnFilter>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate="body" let-rowData let-columns="columns">\n            <tr [pSelectableRow]="rowData">\n                <td *ngFor="let col of columns">&#123;&#123;rowData[col.field]&#125;&#125;</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';\nimport { Car } from '../../domain/car';\nimport { CarService } from '../../service/carservice';\n\n@Component({\n    selector: 'filter-service-table-integration-demo',\n    templateUrl: './filter-service-table-integration-demo.html',\n    providers: [FilterService]\n})\nexport class FilterServiceTableIntegrationDemo implements OnInit {\n    cars: Car[];\n\n    cols: any[];\n\n    matchModeOptions: SelectItem[];\n\n    constructor(private carService: CarService, private filterService: FilterService) {}\n\n    ngOnInit() {\n        const customFilterName = 'custom-equals';\n\n        this.filterService.register(customFilterName, (value, filter): boolean => {\n            if (filter === undefined || filter === null || filter.trim() === '') {\n                return true;\n            }\n\n            if (value === undefined || value === null) {\n                return false;\n            }\n\n            return value.toString() === filter.toString();\n        });\n\n        this.cols = [\n            { field: 'year', header: 'Year' },\n            { field: 'brand', header: 'Brand' },\n            { field: 'color', header: 'Color' },\n            { field: 'vin', header: 'Vin' }\n        ];\n\n        this.matchModeOptions = [\n            { label: 'Custom Equals', value: customFilterName },\n            { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },\n            { label: 'Contains', value: FilterMatchMode.CONTAINS }\n        ];\n\n        this.carService.getCarsMedium().then((cars) => (this.cars = cars));\n    }\n}",service:["CarService"]},this.extFiles=[{path:"src/domain/product.ts",content:"\nexport interface Product {\n    id?: string;\n    code?: string;\n    name?: string;\n    description?: string;\n    price?: number;\n    quantity?: number;\n    inventoryStatus?: string;\n    category?: string;\n    image?: string;\n    rating?: number;\n}"},{path:"src/domain/car.ts",content:"\nexport interface Car {\n    id?;\n    vin?;\n    year?;\n    brand?;\n    color?;\n    price?;\n    saleDate?;\n}"}]}ngOnInit(){const i="custom-equals";this.filterService.register(i,(r,u)=>null==u||""===u.trim()||null!=r&&r.toString()===u.toString()),this.cols=[{field:"year",header:"Year"},{field:"brand",header:"Brand"},{field:"color",header:"Color"},{field:"vin",header:"Vin"}],this.matchModeOptions=[{label:"Custom Equals",value:i},{label:"Starts With",value:s.a6.STARTS_WITH},{label:"Contains",value:s.a6.CONTAINS}],this.carService.getCarsMedium().then(r=>this.cars=r)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(A.Z),e.Y36(s.iZ))},t.\u0275cmp=e.Xpm({type:t,selectors:[["filter-service-table-integration-demo"]],inputs:{id:"id",title:"title"},features:[e._Bn([s.iZ])],decls:10,vars:8,consts:[[3,"title","id"],[1,"card"],["responsiveLayout","scroll",3,"columns","value","paginator","rows"],["dt",""],["pTemplate","header"],["pTemplate","body"],["selector","filter-service-table-integration-demo",3,"code","extFiles"],[4,"ngFor","ngForOf"],["type","text",3,"field","matchModeOptions","matchMode"],[3,"pSelectableRow"]],template:function(i,r){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter."),e.qZA()(),e.TgZ(4,"div",1)(5,"p-table",2,3),e.YNc(7,D,4,2,"ng-template",4),e.YNc(8,C,2,2,"ng-template",5),e.qZA()(),e._UZ(9,"app-code",6),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",r.title)("id",r.id),e.xp6(4),e.Q6J("columns",r.cols)("value",r.cars)("paginator",!0)("rows",10),e.xp6(4),e.Q6J("code",r.code)("extFiles",r.extFiles))},dependencies:[d.sg,n.h,a.c,p.iA,q.jx,p.Ei,p.xl],encapsulation:2}),t})();var M=o(63408);let I=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:T},{id:"usage",label:"Usage",component:b},{id:"builtinconstraints",label:"Built-in Constraints",component:U},{id:"customconstraints",label:"Custom Constraints",component:_},{id:"table-integration",label:"Table Integration",component:L},{id:"api",label:"FilterService API",component:v}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[["title","FilterService - PrimeNG","header","FilterService","description","FilterService is a helper utility to filter collections against constraints.",3,"docs"]],template:function(i,r){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",r.docs)},dependencies:[M.x],encapsulation:2}),t})(),x=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:I}]),c.Bz]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,x,h]}),t})()}}]);