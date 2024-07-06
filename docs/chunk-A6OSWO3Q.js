import{A as I,B as P,C as F,D as w,E as D,F as W,G as M,H as x,I as L,J as X,K as Y,O as Z,Q as ee,R as te,S as k,V as N,W as ie,Y as ne,a as V,b as q,c as $,d as z,e as y,f as J,g as _,h as H,i as d,j as B,k as G,l as K,m as T,n as c,o as h,p as f,q as m,r,s as o,t as p,u as Q,v as S,w as v,x as R,y as a,z as u}from"./chunk-DOJ3A67D.js";var g=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i){return this.http.get(i).pipe($(()=>V([])))}searchCountryByAlphaCode(i){return this.http.get(`${this.apiUrl}/alpha/${i}`).pipe(q(n=>n.length>0?n[0]:null),$(()=>V(null)))}searchCapital(i){let n=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(n).pipe(y(l=>this.cacheStore.byCapital={term:i,countries:l}),y(()=>this.saveToLocalStorage()))}searchCountry(i){let n=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(n).pipe(y(l=>this.cacheStore.byCountries={term:i,countries:l}),y(()=>this.saveToLocalStorage()))}searchRegion(i){let n=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(n).pipe(y(l=>this.cacheStore.byRegion={region:i,countries:l}),y(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(n){return new(n||e)(H(Y))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var me=t=>["/countries/by",t];function pe(t,e){t&1&&(r(0,"div",2),a(1,` No hay paises que mostrar
`),o())}function ue(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),p(6,"img",5),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),o(),r(11,"td"),a(12),F(13,"number"),o(),r(14,"td")(15,"a",6),a(16,"Info"),o()()()),t&2){let s=e.$implicit,i=e.index;c(2),u(i+1),c(2),u(s.flag),c(2),m("src",s.flags.svg,T)("alt",s.name.common),c(2),u(s.name.common),c(2),u(s.capital),c(2),u(w(13,8,s.population)),c(3),m("routerLink",P(10,me,s.cca3))}}function de(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Icon"),o(),r(7,"th"),a(8,"Bandera"),o(),r(9,"th"),a(10,"Nombre"),o(),r(11,"th"),a(12,"Capital"),o(),r(13,"th"),a(14,"Poblaci\xF3n"),o(),p(15,"th"),o()(),r(16,"tbody"),f(17,ue,17,12,"tr",4),o()()),t&2){let s=v();c(17),m("ngForOf",s.countries)}}var b=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,l){if(n&1&&f(0,pe,2,0,"div",1)(1,de,18,1,"ng-template",null,0,D),n&2){let E=R(2);m("ngIf",l.countries.length===0)("ngIfElse",E)}},dependencies:[M,x,te,L],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function fe(t,e){t&1&&p(0,"shared-loading-spinners")}var oe=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(n,l){n&1&&(r(0,"h2"),a(1,"Por Capital"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("onDebounce",function(j){return l.searchByCapital(j)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),f(9,fe,1,0,"shared-loading-spinners",3),p(10,"countries-table",4),o()()),n&2&&(c(5),m("initialValue",l.initialValue),c(4),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[x,N,ie,b]});let t=e;return t})();var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(i){this.countriesService.searchCountry(i).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"onDebounce","initialValue"],[3,"countries"]],template:function(n,l){n&1&&(r(0,"h2"),a(1,"Por Pais"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),S("onDebounce",function(j){return l.searchByCountry(j)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),o()()),n&2&&(c(5),m("initialValue",l.initialValue),c(4),m("countries",l.countries))},dependencies:[N,b]});let t=e;return t})();var ge=t=>({"btn-outline-primary":t});function ye(t,e){if(t&1){let s=Q();r(0,"button",5),S("click",function(){let n=G(s).$implicit,l=v();return K(l.searchByRegion(n))}),a(1),o()}if(t&2){let s=e.$implicit,i=v();m("ngClass",P(2,ge,s===i.selectedRegion)),c(),I(" ",s," ")}}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(n,l){n&1&&(r(0,"h2"),a(1,"Por Region"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1),f(5,ye,2,4,"button",2),o()(),r(6,"div",0)(7,"div",3),p(8,"hr")(9,"countries-table",4),o()()),n&2&&(c(5),m("ngForOf",l.regions),c(4),m("countries",l.countries))},dependencies:[W,M,b]});let t=e;return t})();function ve(t,e){t&1&&(r(0,"div",2),a(1,"Espere por favor"),o())}function Ce(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pa\xEDs: "),r(5,"strong"),a(6),o()(),p(7,"hr"),o()(),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),o(),p(12,"img",6),o(),r(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),o(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblacion: "),o(),a(20),F(21,"number"),o(),r(22,"li",9)(23,"strong"),a(24,"Codigo: "),o(),a(25),o()()()(),r(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),o(),r(30,"div",11)(31,"span",12),a(32),o(),r(33,"span",12),a(34),o(),r(35,"span",12),a(36),o(),r(37,"span",12),a(38),o(),r(39,"span",12),a(40),o(),r(41,"span",12),a(42),o()()()()()),t&2){let s=v();c(6),u(s.country.name.common),c(6),m("src",s.country.flags.svg,T)("alt",s.country.name.common),c(8),I(" ",w(21,11,s.country.population)," "),c(5),I(" ",s.country.cca3," "),c(7),u(s.country.translations.ara.common),c(2),u(s.country.translations.bre.common),c(2),u(s.country.translations.ces.common),c(2),u(s.country.translations.fin.common),c(2),u(s.country.translations.rus.common),c(2),u(s.country.translations.kor.common)}}var ce=(()=>{let e=class e{constructor(i,n,l){this.activatedRoute=i,this.countriesService=n,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(z(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(h(Z),h(g),h(ee))},e.\u0275cmp=d({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,l){if(n&1&&f(0,ve,2,0,"ng-template",null,0,D)(2,Ce,43,13,"div",1),n&2){let E=R(1);c(2),m("ngIf",l.country)("ngIfElse",E)}},dependencies:[x,L]});let t=e;return t})();var Se=[{path:"by-capital",component:oe},{path:"by-country",component:re},{path:"by-region",component:ae},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=_({imports:[k.forChild(Se),k]});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=_({imports:[X,se,ne]});let t=e;return t})();export{Ke as CountriesModule};
