webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),e=u("aR8+"),i=u("UgDh"),o=u("u7f8"),s=u("qbdv"),r=u("fc+i"),a=u("CPp0"),c=u("bm2B"),_=u("XDS/");u.d(n,"a",function(){return d});var d=t.b(e.a,[i.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[o.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,s.a,s.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,r.b,r.c,[s.c]),t.d(6144,t.q,null,[r.b]),t.d(4608,r.d,r.e,[]),t.d(5120,r.f,function(l,n,u,t){return[new r.g(l),new r.h(n),new r.i(u,t)]},[s.c,s.c,s.c,r.d]),t.d(4608,r.j,r.j,[r.f,t.r]),t.d(135680,r.k,r.k,[s.c]),t.d(4608,r.l,r.l,[r.j,r.k]),t.d(6144,t.s,null,[r.l]),t.d(6144,r.m,null,[r.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,r.n,r.n,[s.c]),t.d(4608,r.o,r.o,[s.c]),t.d(4608,a.a,a.a,[]),t.d(4608,a.b,a.c,[]),t.d(5120,a.d,a.e,[]),t.d(4608,a.f,a.f,[a.a,a.b,a.d]),t.d(4608,a.g,a.h,[]),t.d(5120,a.i,a.j,[a.f,a.g]),t.d(4608,c.a,c.a,[]),t.d(4608,_.a,_.a,[a.i]),t.d(512,s.d,s.d,[]),t.d(1024,t.u,r.p,[]),t.d(1024,t.v,function(l,n){return[r.q(l,n)]},[[2,r.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,r.s,r.s,[[3,r.s]]),t.d(512,a.k,a.k,[]),t.d(512,c.b,c.b,[]),t.d(512,c.c,c.c,[]),t.d(512,e.a,e.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"1XDb":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.prototype.ngOnInit=function(){var l=this.harpnote.interval-this.usedUbication+1;l<=0&&(l=12+l),this.harpnote.adjustedInterval=l},l.ctorParameters=function(){return[]},l}()},UgDh:function(l,n,u){"use strict";var t=u("XDS/"),e=u("Wj8o");u.d(n,"a",function(){return o});var i=function(){function l(){this.selectedScale=null,this.selectedPosition=null}return l}(),o=function(){function l(l){this.scaleListService=l,this.exercise=[],this.progressionExercise=[],this.progressionExerciseDesc=[],this.easy=!0,this.model=new i,this.harpNotesContained=[],this.showFormulaNotation=!1}return l.prototype.ngOnInit=function(){this.getScales()},l.prototype.getScales=function(){var l=this;this.scaleListService.getScales().subscribe(function(n){return l.scales=n},function(n){return l.errorMessage=n},function(){return l.getPositions()})},l.prototype.getPositions=function(){var l=this;this.scaleListService.getPositions().subscribe(function(n){return l.positions=n},function(n){return l.errorMessage=n},function(){return l.getNotes()})},l.prototype.getNotes=function(){var l=this;this.scaleListService.getHarpNotes().subscribe(function(n){return l.harpNotes=n},function(n){return l.errorMessage=n},function(){return l.getExercises()})},l.prototype.getExercises=function(){var l=this;this.scaleListService.getExercises().subscribe(function(n){return l.exercises=n},function(n){return l.errorMessage=n})},l.prototype.isExerciseDisabled=function(){return!this.model.selectedPosition||!this.model.selectedScale},l.prototype.generateExercise=function(){var l=new e.a;l.name="",l.moves=[];for(var n=Math.floor(3*Math.random())+1,u={0:.1,1:.35,2:.1,3:.35,4:.1},t=0;t<n;t++){var i,o=0,s=0,r=Math.random();for(i in u)if(s+=u[i],r<=s){o=i-2;break}l.moves.push(o),o>0&&(l.name=l.name+o+"Up "),o<0&&(l.name=l.name+-1*o+"Down "),0==o&&(l.name=l.name+"Repeat ")}return l},l.prototype.getRandomExercise=function(){var l,n,u=[],t=[];if(this.usedUbication=this.model.selectedPosition.ubication,this.harpNotesContained=[],this.model.selectedScale&&this.model.selectedPosition){l=this.usedUbication;for(var e in this.model.selectedScale.sequence)l+=this.model.selectedScale.sequence[e],l>12&&(l-=12),n=this.model.selectedScale.formula[e],u.push(l),t.push(n);for(var i=0,o=this.harpNotes;i<o.length;i++){var s=o[i],r=u.indexOf(s.interval);r>=0&&(s.degree=t[r],this.harpNotesContained.push(s))}var a=this.generateExercise();this.mapExercise(this.harpNotesContained,a)}},l.prototype.mapExercise=function(l,n){this.exerciseName=n.name;var u=l;this.progressionExercise=[],this.progressionExerciseDesc=[];for(var t,i,o=0,s=0,r=!0,a=Array.from({length:100},function(l,n){return n}),c=0,_=a;c<_.length;c++){var d=_[c];if(d>=u.length)break;t=u[d],i=new e.b,i.notes=[],i.notes.push(t),r=!0;for(var p=0,h=n.moves;p<h.length;p++){var f=h[p];o=u.indexOf(t),s=o+f,s>u.length-1?r=!1:s<0&&(r=!1),t=u[s],i.notes.push(t)}r&&this.progressionExercise.push(i)}for(var g=0,m=a;g<m.length;g++){var d=m[g];if(d>=u.length)break;r=!0,t=u[u.length-1-d],i=new e.b,i.notes=[],i.notes.push(t),r=!0;for(var v=0,b=n.moves;v<b.length;v++){var f=b[v];o=u.indexOf(t),s=o-f,s>u.length-1?r=!1:s<0&&(r=!1),t=u[s],i.notes.push(t)}r&&this.progressionExerciseDesc.push(i)}},l.ctorParameters=function(){return[{type:t.a}]},l}()},VoZw:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["h2[_ngcontent-%COMP%]{font-weight:500}"]},Wj8o:function(l,n,u){"use strict";u.d(n,"b",function(){return t}),u.d(n,"a",function(){return e});var t=(function(){function l(){}}(),function(){function l(){}}(),function(){function l(){}}(),function(){function l(){}return l}()),e=function(){function l(){}return l}()},"XDS/":function(l,n,u){"use strict";var t=u("CPp0"),e=u("bKpL"),i=(u.n(e),u("Dqrr"));u.n(i);u.d(n,"a",function(){return o});var o=function(){function l(l){this.http=l}return l.prototype.getScales=function(){return this.http.get("assets/scales.json").map(function(l){return l.json()}).catch(this.handleError)},l.prototype.getPositions=function(){return this.http.get("assets/positions.json").map(function(l){return l.json()}).catch(this.handleError)},l.prototype.getExercises=function(){return this.http.get("assets/exercises.json").map(function(l){return l.json()}).catch(this.handleError)},l.prototype.getHarpNotes=function(){return this.http.get("assets/harpNotes.json").map(function(l){return l.json()}).catch(this.handleError)},l.prototype.handleError=function(l){var n=l.message?l.message:l.status?l.status+" - "+l.statusText:"Server error";return console.error(n),e.Observable.throw(n)},l.ctorParameters=function(){return[{type:t.i}]},l}()},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),i=u("+h1B"),o=u("fc+i");e.a.production&&u.i(t.a)(),u.i(o.a)().bootstrapModuleFactory(i.a)},jmZc:function(l,n,u){"use strict";function t(l){return o._17(0,[(l()(),o._18(0,null,null,9,"div",[["class","harpnote"]],null,null,null,null,null)),(l()(),o._20(null,["\n\t"])),(l()(),o._18(0,null,null,3,"div",[["class","interval"]],null,null,null,null,null)),o._19(278528,null,0,s.k,[o.m,o.o,o.J,o._9],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o._24({IColor:0,IVColor:1,VColor:2}),(l()(),o._20(null,["\n\t\t","\n\t"])),(l()(),o._20(null,["\n\t"])),(l()(),o._18(0,null,null,1,"div",[["class","note"]],null,null,null,null,null)),(l()(),o._20(null,["",""])),(l()(),o._20(null,["\n"])),(l()(),o._20(null,["\n"]))],function(l,n){var u=n.component;l(n,3,0,"interval",l(n,4,0,"I"==u.harpnote.degree,"IV"==u.harpnote.degree,"V"==u.harpnote.degree))},function(l,n){var u=n.component;l(n,5,0,u.harpnote.degree),l(n,8,0,u.harpnote.note)})}function e(l){return o._17(0,[(l()(),o._18(0,null,null,1,"harp-note",[],null,null,null,t,c)),o._19(114688,null,0,r.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("uvyC"),o=u("/oeL"),s=u("qbdv"),r=u("1XDb");u.d(n,"b",function(){return c}),n.a=t;var a=[i.a],c=o._16({encapsulation:0,styles:a,data:{}});o._25("harp-note",r.a,e,{harpnote:"value",usedUbication:"usedUbication"},{},[])},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},u7f8:function(l,n,u){"use strict";function t(l){return h._17(0,[(l()(),h._18(0,null,null,3,"option",[],null,null,null,null,null)),h._19(147456,null,0,f.d,[h.J,h.I,[2,f.e]],{ngValue:[0,"ngValue"]},null),h._19(147456,null,0,f.f,[h.J,h.I,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),h._20(null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function e(l){return h._17(0,[(l()(),h._18(0,null,null,12,"li",[],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,6,"input",[["name","scale"],["ng-control","options"],["style","height: 14px;"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==h._21(l,3)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==h._21(l,3).onTouched()&&t}if("compositionstart"===n){t=!1!==h._21(l,3)._compositionStart()&&t}if("compositionend"===n){t=!1!==h._21(l,3)._compositionEnd(u.target.value)&&t}if("change"===n){t=!1!==h._21(l,4).onChange()&&t}if("blur"===n){t=!1!==h._21(l,4).onTouched()&&t}if("ngModelChange"===n){t=!1!==(e.model.selectedScale=u)&&t}return t},null,null)),h._19(16384,null,0,f.g,[h.I,h.J,[2,f.h]],null,null),h._19(212992,null,0,f.i,[h.I,h.J,f.a,h.A],{name:[0,"name"],value:[1,"value"]},null),h._22(1024,null,f.j,function(l,n){return[l,n]},[f.g,f.i]),h._19(671744,null,0,f.k,[[2,f.l],[8,null],[8,null],[2,f.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),h._22(2048,null,f.m,null,[f.k]),h._19(16384,null,0,f.n,[f.m],null,null),(l()(),h._20(null,[" "])),(l()(),h._18(0,null,null,1,"b",[["style","min-width: 9rem; display: inline-block;"]],null,null,null,null,null)),(l()(),h._20(null,["",""])),(l()(),h._20(null,["     ","\n\t\t\t"]))],function(l,n){var u=n.component;l(n,4,0,"scale",n.context.$implicit);l(n,6,0,"scale",u.model.selectedScale)},function(l,n){l(n,2,0,h._21(n,8).ngClassUntouched,h._21(n,8).ngClassTouched,h._21(n,8).ngClassPristine,h._21(n,8).ngClassDirty,h._21(n,8).ngClassValid,h._21(n,8).ngClassInvalid,h._21(n,8).ngClassPending),l(n,11,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.steps)})}function i(l){return h._17(0,[(l()(),h._18(0,null,null,1,"harp-note",[["style","display: inline-block;"]],null,null,null,g.a,g.b)),h._19(114688,null,0,m.a,[],{harpnote:[0,"harpnote"],usedUbication:[1,"usedUbication"]},null)],function(l,n){var u=n.component;l(n,1,0,n.context.$implicit,u.usedUbication)},null)}function o(l){return h._17(0,[(l()(),h._18(0,null,null,2,"harp-note",[["style","display: inline-block;"]],null,null,null,g.a,g.b)),h._19(114688,null,0,m.a,[],{harpnote:[0,"harpnote"],usedUbication:[1,"usedUbication"]},null),(l()(),h._20(null,["\n\t\t\t\t"]))],function(l,n){var u=n.component;l(n,1,0,n.context.$implicit,u.usedUbication)},null)}function s(l){return h._17(0,[(l()(),h._18(0,null,null,4,"li",[["style","display: inline-block;"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,o)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t\t"]))],function(l,n){l(n,3,0,n.context.$implicit.notes)},null)}function r(l){return h._17(0,[(l()(),h._18(0,null,null,1,"harp-note",[["style","display: inline-block;"]],null,null,null,g.a,g.b)),h._19(114688,null,0,m.a,[],{harpnote:[0,"harpnote"],usedUbication:[1,"usedUbication"]},null)],function(l,n){var u=n.component;l(n,1,0,n.context.$implicit,u.usedUbication)},null)}function a(l){return h._17(0,[(l()(),h._18(0,null,null,4,"li",[["style","display: inline-block;"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,r)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t\t"]))],function(l,n){l(n,3,0,n.context.$implicit.notes)},null)}function c(l){return h._17(0,[(l()(),h._18(0,null,null,68,"div",[["style","padding-bottom: 50px;"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,34,"div",[["class","notation color-notation"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._18(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),h._20(null,["Color & Notes Notations"])),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._18(0,null,null,28,"div",[],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,10,"div",[["style","display: inline-block; vertical-align: middle;"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"div",[["class","IColor harpnote"],["style","display: inline-block; text-align: center; padding: 10px 0px;"]],null,null,null,null,null)),(l()(),h._20(null,["I"])),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"div",[["class","IVColor harpnote"],["style","display: inline-block; text-align: center; padding: 10px 0px;"]],null,null,null,null,null)),(l()(),h._20(null,["IV"])),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"div",[["class","VColor harpnote"],["style","display: inline-block; text-align: center; padding: 10px 0px;"]],null,null,null,null,null)),(l()(),h._20(null,["V"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,13,"ul",[["style","display: inline-block; vertical-align: middle;"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["N blow"])),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["-N draw"])),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["N´ bend"])),(l()(),h._20(null,["\n\t\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["N# overblow/draw"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),h._20(null,["Scale Sequence"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,i)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),h._20(null,["Exercise: ",""])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,6,"ul",[["style","column-count: auto;"]],null,null,null,null,null)),h._19(278528,null,0,v.i,[h.o,h.J,h._9],{ngStyle:[0,"ngStyle"]},null),h._24({"column-width":0}),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,s)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),h._20(null,["Reverse"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,6,"ul",[["style","column-count: auto;"]],null,null,null,null,null)),h._19(278528,null,0,v.i,[h.o,h.J,h._9],{ngStyle:[0,"ngStyle"]},null),h._24({"column-width":0}),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,a)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t"]))],function(l,n){var u=n.component;l(n,44,0,u.harpNotesContained),l(n,51,0,l(n,52,0,60*(null==u.progressionExercise[0]?null:u.progressionExercise[0].notes.length)+"px")),l(n,55,0,u.progressionExercise),l(n,62,0,l(n,63,0,60*(null==u.progressionExerciseDesc[0]?null:u.progressionExerciseDesc[0].notes.length)+"px")),l(n,66,0,u.progressionExerciseDesc)},function(l,n){l(n,48,0,n.component.exerciseName)})}function _(l){return h._17(0,[(l()(),h._18(0,null,null,93,"div",[],null,null,null,null,null)),(l()(),h._20(null,["\n\t"])),(l()(),h._18(0,null,null,87,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;if("submit"===n){t=!1!==h._21(l,4).onSubmit(u)&&t}if("reset"===n){t=!1!==h._21(l,4).onReset()&&t}return t},null,null)),h._19(16384,null,0,f.o,[],null,null),h._19(16384,null,0,f.p,[[8,null],[8,null]],null,null),h._22(2048,null,f.l,null,[f.p]),h._19(16384,null,0,f.q,[f.l],null,null),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._20(null,["Select position:"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,14,"select",[["name","position"],["style","height: 1.5rem; margin-left: 1.5rem;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,e=l.component;if("change"===n){t=!1!==h._21(l,12).onChange(u.target.value)&&t}if("blur"===n){t=!1!==h._21(l,12).onTouched()&&t}if("ngModelChange"===n){t=!1!==(e.model.selectedPosition=u)&&t}return t},null,null)),h._19(16384,null,0,f.e,[h.I,h.J],null,null),h._22(1024,null,f.j,function(l){return[l]},[f.e]),h._19(671744,null,0,f.k,[[2,f.l],[8,null],[8,null],[2,f.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),h._22(2048,null,f.m,null,[f.k]),h._19(16384,null,0,f.n,[f.m],null,null),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._18(0,null,null,3,"option",[["disabled",""],["selected",""],["value","0"]],null,null,null,null,null)),h._19(147456,null,0,f.d,[h.J,h.I,[2,f.e]],{value:[0,"value"]},null),h._19(147456,null,0,f.f,[h.J,h.I,[8,null]],{value:[0,"value"]},null),(l()(),h._20(null,["Position"])),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,t)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),h._20(null,["Select scale:"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,4,"ul",[["style","list-style-type: none; display: inline-block; vertical-align: top; margin-bottom: 1rem;"]],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._23(16777216,null,null,1,null,e)),h._19(802816,null,0,v.h,[h._10,h._11,h.m],{ngForOf:[0,"ngForOf"]},null),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,46,"div",[["class","notation formula-notation"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!=(e.showFormulaNotation=!e.showFormulaNotation)&&t}return t},null,null)),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._18(0,null,null,1,"h4",[["style",""]],null,null,null,null,null)),(l()(),h._20(null,["Show/Hide Formula Notation"])),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._18(0,null,null,40,"ul",[],[[8,"hidden",0]],null,null,null,null)),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["P1, d2 = 0 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["m2, A1 = 1 half-step"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["M2, d3 = 2 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["m3, A2 = 3 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["M3, d4 = 4 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["P4, A3 = 5 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["A4, d5 = 6 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["P5, d6 = 7 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["m6, A5 = 8 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["M6, d7 = 9 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["m7, A6 = 10 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["M7, d8 = 11 half-steps"])),(l()(),h._20(null,["\n\t\t\t\t"])),(l()(),h._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),h._20(null,["P8, A7 = 12 half-steps"])),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._18(0,null,null,4,"div",[],null,null,null,null,null)),(l()(),h._20(null,["\n\t\t\t"])),(l()(),h._18(0,null,null,1,"button",[["class","btn btn-success get-exercise-button"],["style","margin-top: 20px;"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.getRandomExercise()&&t}return t},null,null)),(l()(),h._20(null,["Get random exercise"])),(l()(),h._20(null,["\n\t\t"])),(l()(),h._20(null,["\n\t"])),(l()(),h._20(null,["\n\t"])),(l()(),h._23(16777216,null,null,1,null,c)),h._19(16384,null,0,v.j,[h._10,h._11],{ngIf:[0,"ngIf"]},null),(l()(),h._20(null,["\n"])),(l()(),h._20(null,["\n"]))],function(l,n){var u=n.component;l(n,14,0,"position",u.model.selectedPosition);l(n,19,0,"0");l(n,20,0,"0"),l(n,24,0,u.positions),l(n,33,0,u.scales),l(n,92,0,u.progressionExercise[0])},function(l,n){var u=n.component;l(n,2,0,h._21(n,6).ngClassUntouched,h._21(n,6).ngClassTouched,h._21(n,6).ngClassPristine,h._21(n,6).ngClassDirty,h._21(n,6).ngClassValid,h._21(n,6).ngClassInvalid,h._21(n,6).ngClassPending),l(n,11,0,h._21(n,16).ngClassUntouched,h._21(n,16).ngClassTouched,h._21(n,16).ngClassPristine,h._21(n,16).ngClassDirty,h._21(n,16).ngClassValid,h._21(n,16).ngClassInvalid,h._21(n,16).ngClassPending),l(n,41,0,!u.showFormulaNotation),l(n,86,0,!u.model.selectedPosition||!u.model.selectedScale)})}function d(l){return h._17(0,[(l()(),h._18(0,null,null,1,"sd-scale-exercises",[],null,null,null,_,C)),h._19(114688,null,0,b.a,[y.a],null,null)],function(l,n){l(n,1,0)},null)}var p=u("VoZw"),h=u("/oeL"),f=u("bm2B"),g=u("jmZc"),m=u("1XDb"),v=u("qbdv"),b=u("UgDh"),y=u("XDS/");u.d(n,"a",function(){return k});var x=[p.a],C=h._16({encapsulation:0,styles:x,data:{}}),k=h._25("sd-scale-exercises",b.a,d,{},{},[])},uvyC:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]}},[0]);