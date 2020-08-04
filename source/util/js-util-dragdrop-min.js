/*!
 * @project JSDK JavaScript Development Kit
 * @copyright Copyright(c) 2004-2012, Dragonfly.org. All rights reserved.
 * @license LGPLv3
 * 
 * @version 0.1
 * @author feng.chun
 * @date 2011-09-26
 * 
 * @requires /core/js-core.js
 */
/*!
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.1
*/
if(!YAHOO.util.DragDropMgr){YAHOO.util.DragDropMgr=function(){var a=YAHOO.util.Event,b=YAHOO.util.Dom;return{useShim:false,_shimActive:false,_shimState:false,_debugShim:false,_createShim:function(){var c=document.createElement("div");c.id="yui-ddm-shim";if(document.body.firstChild){document.body.insertBefore(c,document.body.firstChild);}else{document.body.appendChild(c);}c.style.display="none";c.style.backgroundColor="red";c.style.position="absolute";c.style.zIndex="99999";b.setStyle(c,"opacity","0");this._shim=c;a.on(c,"mouseup",this.handleMouseUp,this,true);a.on(c,"mousemove",this.handleMouseMove,this,true);a.on(window,"scroll",this._sizeShim,this,true);},_sizeShim:function(){if(this._shimActive){var c=this._shim;c.style.height=b.getDocumentHeight()+"px";c.style.width=b.getDocumentWidth()+"px";c.style.top="0";c.style.left="0";}},_activateShim:function(){if(this.useShim){if(!this._shim){this._createShim();}this._shimActive=true;var d=this._shim,c="0";if(this._debugShim){c=".5";}b.setStyle(d,"opacity",c);this._sizeShim();d.style.display="block";}},_deactivateShim:function(){this._shim.style.display="none";this._shimActive=false;},_shim:null,ids:{},handleIds:{},dragCurrent:null,dragOvers:{},deltaX:0,deltaY:0,preventDefault:true,stopPropagation:true,initialized:false,locked:false,interactionInfo:null,init:function(){this.initialized=true;},POINT:0,INTERSECT:1,STRICT_INTERSECT:2,mode:0,_execOnAll:function(e,f){for(var d in this.ids){for(var g in this.ids[d]){var c=this.ids[d][g];if(!this.isTypeOfDD(c)){continue;}c[e].apply(c,f);}}},_onLoad:function(){this.init();a.on(document,"mouseup",this.handleMouseUp,this,true);a.on(document,"mousemove",this.handleMouseMove,this,true);a.on(window,"unload",this._onUnload,this,true);a.on(window,"resize",this._onResize,this,true);},_onResize:function(c){this._execOnAll("resetConstraints",[]);},lock:function(){this.locked=true;},unlock:function(){this.locked=false;},isLocked:function(){return this.locked;},locationCache:{},useCache:true,clickPixelThresh:3,clickTimeThresh:1000,dragThreshMet:false,clickTimeout:null,startX:0,startY:0,fromTimeout:false,regDragDrop:function(c,d){if(!this.initialized){this.init();}if(!this.ids[d]){this.ids[d]={};}this.ids[d][c.id]=c;},removeDDFromGroup:function(c,e){if(!this.ids[e]){this.ids[e]={};}var d=this.ids[e];if(d&&d[c.id]){delete d[c.id];}},_remove:function(c){for(var d in c.groups){if(d){var e=this.ids[d];if(e&&e[c.id]){delete e[c.id];}}}delete this.handleIds[c.id];},regHandle:function(c,d){if(!this.handleIds[c]){this.handleIds[c]={};}this.handleIds[c][d]=d;},isDragDrop:function(c){return(this.getDDById(c))?true:false;},getRelated:function(c,g){var d=[];for(var e in c.groups){for(var f in this.ids[e]){var h=this.ids[e][f];if(!this.isTypeOfDD(h)){continue;}if(!g||h.isTarget){d[d.length]=h;}}}return d;},isLegalTarget:function(c,d){var f=this.getRelated(c,true);for(var e=0,g=f.length;e<g;++e){if(f[e].id==d.id){return true;}}return false;},isTypeOfDD:function(c){return(c&&c.__ygDragDrop);},isHandle:function(c,d){return(this.handleIds[c]&&this.handleIds[c][d]);},getDDById:function(c){for(var d in this.ids){if(this.ids[d][c]){return this.ids[d][c];}}return null;},handleMouseDown:function(c,d){this.currentTarget=YAHOO.util.Event.getTarget(c);this.dragCurrent=d;var e=d.getEl();this.startX=YAHOO.util.Event.getPageX(c);this.startY=YAHOO.util.Event.getPageY(c);this.deltaX=this.startX-e.offsetLeft;this.deltaY=this.startY-e.offsetTop;this.dragThreshMet=false;this.clickTimeout=setTimeout(function(){var f=YAHOO.util.DDM;f.startDrag(f.startX,f.startY);f.fromTimeout=true;},this.clickTimeThresh);},startDrag:function(e,c){if(this.dragCurrent&&this.dragCurrent.useShim){this._shimState=this.useShim;this.useShim=true;}this._activateShim();clearTimeout(this.clickTimeout);var d=this.dragCurrent;if(d&&d.events.b4StartDrag){d.b4StartDrag(e,c);d.fireEvent("b4StartDragEvent",{x:e,y:c});}if(d&&d.events.startDrag){d.startDrag(e,c);d.fireEvent("startDragEvent",{x:e,y:c});}this.dragThreshMet=true;},handleMouseUp:function(c){if(this.dragCurrent){clearTimeout(this.clickTimeout);if(this.dragThreshMet){if(this.fromTimeout){this.fromTimeout=false;this.handleMouseMove(c);}this.fromTimeout=false;this.fireEvents(c,true);}else{}this.stopDrag(c);this.stopEvent(c);}},stopEvent:function(c){if(this.stopPropagation){YAHOO.util.Event.stopPropagation(c);}if(this.preventDefault){YAHOO.util.Event.preventDefault(c);}},stopDrag:function(c,d){var e=this.dragCurrent;if(e&&!d){if(this.dragThreshMet){if(e.events.b4EndDrag){e.b4EndDrag(c);e.fireEvent("b4EndDragEvent",{e:c});}if(e.events.endDrag){e.endDrag(c);e.fireEvent("endDragEvent",{e:c});}}if(e.events.mouseUp){e.onMouseUp(c);e.fireEvent("mouseUpEvent",{e:c});}}if(this._shimActive){this._deactivateShim();if(this.dragCurrent&&this.dragCurrent.useShim){this.useShim=this._shimState;this._shimState=false;}}this.dragCurrent=null;this.dragOvers={};},handleMouseMove:function(c){var f=this.dragCurrent;if(f){if(YAHOO.util.Event.isIE&&!c.button){this.stopEvent(c);return this.handleMouseUp(c);}else{if(c.clientX<0||c.clientY<0){}}if(!this.dragThreshMet){var d=Math.abs(this.startX-YAHOO.util.Event.getPageX(c));var e=Math.abs(this.startY-YAHOO.util.Event.getPageY(c));if(d>this.clickPixelThresh||e>this.clickPixelThresh){this.startDrag(this.startX,this.startY);}}if(this.dragThreshMet){if(f&&f.events.b4Drag){f.b4Drag(c);f.fireEvent("b4DragEvent",{e:c});}if(f&&f.events.drag){f.onDrag(c);f.fireEvent("dragEvent",{e:c});}if(f){this.fireEvents(c,false);}}this.stopEvent(c);}},fireEvents:function(i,s){var ac=this.dragCurrent;if(!ac||ac.isLocked()||ac.dragOnly){return;}var q=YAHOO.util.Event.getPageX(i),r=YAHOO.util.Event.getPageY(i),o=new YAHOO.util.Point(q,r),t=ac.getTargetCoord(o.x,o.y),y=ac.getDragEl(),z=["out","over","drop","enter"],j=new YAHOO.util.Region(t.y,t.x+y.offsetWidth,t.y+y.offsetHeight,t.x),v=[],A={},n=[],ab={outEvts:[],overEvts:[],dropEvts:[],enterEvts:[]};for(var l in this.dragOvers){var aa=this.dragOvers[l];if(!this.isTypeOfDD(aa)){continue;}if(!this.isOverTarget(o,aa,this.mode,j)){ab.outEvts.push(aa);}v[l]=true;delete this.dragOvers[l];}for(var m in ac.groups){if("string"!=typeof m){continue;}for(l in this.ids[m]){var x=this.ids[m][l];if(!this.isTypeOfDD(x)){continue;}if(x.isTarget&&!x.isLocked()&&x!=ac){if(this.isOverTarget(o,x,this.mode,j)){A[m]=true;if(s){ab.dropEvts.push(x);}else{if(!v[x.id]){ab.enterEvts.push(x);}else{ab.overEvts.push(x);}this.dragOvers[x.id]=x;}}}}}this.interactionInfo={out:ab.outEvts,enter:ab.enterEvts,over:ab.overEvts,drop:ab.dropEvts,point:o,draggedRegion:j,sourceRegion:this.locationCache[ac.id],validDrop:s};for(var B in A){n.push(B);}if(s&&!ab.dropEvts.length){this.interactionInfo.validDrop=false;if(ac.events.invalidDrop){ac.onInvalidDrop(i);ac.fireEvent("invalidDropEvent",{e:i});}}for(l=0;l<z.length;l++){var f=null;if(ab[z[l]+"Evts"]){f=ab[z[l]+"Evts"];}if(f&&f.length){var w=z[l].charAt(0).toUpperCase()+z[l].substr(1),g="onDrag"+w,u="b4Drag"+w,p="drag"+w+"Event",h="drag"+w;if(this.mode){if(ac.events[u]){ac[u](i,f,n);ac.fireEvent(u+"Event",{event:i,info:f,group:n});}if(ac.events[h]){ac[g](i,f,n);ac.fireEvent(p,{event:i,info:f,group:n});}}else{for(var e=0,k=f.length;e<k;++e){if(ac.events[u]){ac[u](i,f[e].id,n[0]);ac.fireEvent(u+"Event",{event:i,info:f[e].id,group:n[0]});}if(ac.events[h]){ac[g](i,f[e].id,n[0]);ac.fireEvent(p,{event:i,info:f[e].id,group:n[0]});}}}}}},getBestMatch:function(e){var c=null;var f=e.length;if(f==1){c=e[0];}else{for(var d=0;d<f;++d){var g=e[d];if(this.mode==this.INTERSECT&&g.cursorIsOver){c=g;break;}else{if(!c||!c.overlap||(g.overlap&&c.overlap.getArea()<g.overlap.getArea())){c=g;}}}}return c;},refreshCache:function(g){var e=g||this.ids;for(var h in e){if("string"!=typeof h){continue;}for(var f in this.ids[h]){var d=this.ids[h][f];if(this.isTypeOfDD(d)){var c=this.getLocation(d);if(c){this.locationCache[d.id]=c;}else{delete this.locationCache[d.id];}}}}},verifyEl:function(d){try{if(d){var e=d.offsetParent;if(e){return true;}}}catch(c){}return false;},getLocation:function(k){if(!this.isTypeOfDD(k)){return null;}var m=k.getEl(),h,n,c,f,g,e,d,i,l;try{h=YAHOO.util.Dom.getXY(m);}catch(j){}if(!h){return null;}n=h[0];c=n+m.offsetWidth;f=h[1];g=f+m.offsetHeight;e=f-k.padding[0];d=c+k.padding[1];i=g+k.padding[2];l=n-k.padding[3];return new YAHOO.util.Region(e,d,i,l);},isOverTarget:function(e,d,k,j){var i=this.locationCache[d.id];if(!i||!this.useCache){i=this.getLocation(d);this.locationCache[d.id]=i;}if(!i){return false;}d.cursorIsOver=i.contains(e);var f=this.dragCurrent;if(!f||(!k&&!f.constrainX&&!f.constrainY)){return d.cursorIsOver;}d.overlap=null;if(!j){var h=f.getTargetCoord(e.x,e.y);var c=f.getDragEl();j=new YAHOO.util.Region(h.y,h.x+c.offsetWidth,h.y+c.offsetHeight,h.x);}var g=j.intersect(i);if(g){d.overlap=g;return(k)?true:d.cursorIsOver;}else{return false;}},_onUnload:function(c,d){this.unregAll();},unregAll:function(){if(this.dragCurrent){this.stopDrag();this.dragCurrent=null;}this._execOnAll("unreg",[]);this.ids={};},elementCache:{},getElWrapper:function(c){var d=this.elementCache[c];if(!d||!d.el){d=this.elementCache[c]=new this.ElementWrapper(YAHOO.util.Dom.get(c));}return d;},getElement:function(c){return YAHOO.util.Dom.get(c);},getCss:function(c){var d=YAHOO.util.Dom.get(c);return(d)?d.style:null;},ElementWrapper:function(c){this.el=c||null;this.id=this.el&&c.id;this.css=this.el&&c.style;},getPosX:function(c){return YAHOO.util.Dom.getX(c);},getPosY:function(c){return YAHOO.util.Dom.getY(c);},swapNode:function(d,f){if(d.swapNode){d.swapNode(f);}else{var c=f.parentNode;var e=f.nextSibling;if(e==d){c.insertBefore(d,f);}else{if(f==d.nextSibling){c.insertBefore(f,d);}else{d.parentNode.replaceChild(f,d);c.insertBefore(d,e);}}}},getScroll:function(){var d,f,c=document.documentElement,e=document.body;if(c&&(c.scrollTop||c.scrollLeft)){d=c.scrollTop;f=c.scrollLeft;}else{if(e){d=e.scrollTop;f=e.scrollLeft;}else{}}return{top:d,left:f};},getStyle:function(c,d){return YAHOO.util.Dom.getStyle(c,d);},getScrollTop:function(){return this.getScroll().top;},getScrollLeft:function(){return this.getScroll().left;},moveToEl:function(e,c){var d=YAHOO.util.Dom.getXY(c);YAHOO.util.Dom.setXY(e,d);},getClientHeight:function(){return YAHOO.util.Dom.getViewportHeight();},getClientWidth:function(){return YAHOO.util.Dom.getViewportWidth();},numericSort:function(c,d){return(c-d);},_timeoutCount:0,_addListeners:function(){var c=YAHOO.util.DDM;if(YAHOO.util.Event&&document){c._onLoad();}else{if(c._timeoutCount>2000){}else{setTimeout(c._addListeners,10);if(document&&document.body){c._timeoutCount+=1;}}}},handleWasClicked:function(e,c){if(this.isHandle(c,e.id)){return true;}else{var d=e.parentNode;while(d){if(this.isHandle(c,d.id)){return true;}else{d=d.parentNode;}}}return false;}};}();YAHOO.util.DDM=YAHOO.util.DragDropMgr;YAHOO.util.DDM._addListeners();}(function(){var a=YAHOO.util.Event;var b=YAHOO.util.Dom;YAHOO.util.DragDrop=function(c,e,d){if(c){this.init(c,e,d);}};YAHOO.util.DragDrop.prototype={events:null,on:function(){this.subscribe.apply(this,arguments);},id:null,config:null,dragElId:null,handleElId:null,invalidHandleTypes:null,invalidHandleIds:null,invalidHandleClasses:null,startPageX:0,startPageY:0,groups:null,locked:false,lock:function(){this.locked=true;},unlock:function(){this.locked=false;},isTarget:true,padding:null,dragOnly:false,useShim:false,_domRef:null,__ygDragDrop:true,constrainX:false,constrainY:false,minX:0,maxX:0,minY:0,maxY:0,deltaX:0,deltaY:0,maintainOffset:false,xTicks:null,yTicks:null,primaryButtonOnly:true,available:false,hasOuterHandles:false,cursorIsOver:false,overlap:null,b4StartDrag:function(d,c){},startDrag:function(d,c){},b4Drag:function(c){},onDrag:function(c){},onDragEnter:function(d,c){},b4DragOver:function(c){},onDragOver:function(d,c){},b4DragOut:function(c){},onDragOut:function(d,c){},b4DragDrop:function(c){},onDragDrop:function(d,c){},onInvalidDrop:function(c){},b4EndDrag:function(c){},endDrag:function(c){},b4MouseDown:function(c){},onMouseDown:function(c){},onMouseUp:function(c){},onAvailable:function(){},getEl:function(){if(!this._domRef){this._domRef=b.get(this.id);}return this._domRef;},getDragEl:function(){return b.get(this.dragElId);},init:function(c,f,e){this.initTarget(c,f,e);a.on(this._domRef||this.id,"mousedown",this.handleMouseDown,this,true);for(var d in this.events){this.createEvent(d+"Event");}},initTarget:function(c,e,d){this.config=d||{};this.events={};this.DDM=YAHOO.util.DDM;this.groups={};if(typeof c!=="string"){this._domRef=c;c=b.generateId(c);}this.id=c;this.addToGroup((e)?e:"default");this.handleElId=c;a.onAvailable(c,this.handleOnAvailable,this,true);this.setDragElId(c);this.invalidHandleTypes={A:"A"};this.invalidHandleIds={};this.invalidHandleClasses=[];this.applyConfig();},applyConfig:function(){this.events={mouseDown:true,b4MouseDown:true,mouseUp:true,b4StartDrag:true,startDrag:true,b4EndDrag:true,endDrag:true,drag:true,b4Drag:true,invalidDrop:true,b4DragOut:true,dragOut:true,dragEnter:true,b4DragOver:true,dragOver:true,b4DragDrop:true,dragDrop:true};if(this.config.events){for(var c in this.config.events){if(this.config.events[c]===false){this.events[c]=false;}}}this.padding=this.config.padding||[0,0,0,0];this.isTarget=(this.config.isTarget!==false);this.maintainOffset=(this.config.maintainOffset);this.primaryButtonOnly=(this.config.primaryButtonOnly!==false);this.dragOnly=((this.config.dragOnly===true)?true:false);this.useShim=((this.config.useShim===true)?true:false);},handleOnAvailable:function(){this.available=true;this.resetConstraints();this.onAvailable();},setPadding:function(d,f,c,e){if(!f&&0!==f){this.padding=[d,d,d,d];}else{if(!c&&0!==c){this.padding=[d,f,d,f];}else{this.padding=[d,f,c,e];}}},setInitPosition:function(e,f){var d=this.getEl();if(!this.DDM.verifyEl(d)){if(d&&d.style&&(d.style.display=="none")){}else{}return;}var g=e||0;var h=f||0;var c=b.getXY(d);this.initPageX=c[0]-g;this.initPageY=c[1]-h;this.lastPageX=c[0];this.lastPageY=c[1];this.setStartPosition(c);},setStartPosition:function(c){var d=c||b.getXY(this.getEl());this.deltaSetXY=null;this.startPageX=d[0];this.startPageY=d[1];},addToGroup:function(c){this.groups[c]=true;this.DDM.regDragDrop(this,c);},removeFromGroup:function(c){if(this.groups[c]){delete this.groups[c];}this.DDM.removeDDFromGroup(this,c);},setDragElId:function(c){this.dragElId=c;},setHandleElId:function(c){if(typeof c!=="string"){c=b.generateId(c);}this.handleElId=c;this.DDM.regHandle(this.id,c);},setOuterHandleElId:function(c){if(typeof c!=="string"){c=b.generateId(c);}a.on(c,"mousedown",this.handleMouseDown,this,true);this.setHandleElId(c);this.hasOuterHandles=true;},unreg:function(){a.removeListener(this.id,"mousedown",this.handleMouseDown);this._domRef=null;this.DDM._remove(this);},isLocked:function(){return(this.DDM.isLocked()||this.locked);},handleMouseDown:function(c,d){var i=c.which||c.button;if(this.primaryButtonOnly&&i>1){return;}if(this.isLocked()){return;}var j=this.b4MouseDown(c),g=true;if(this.events.b4MouseDown){g=this.fireEvent("b4MouseDownEvent",c);}var h=this.onMouseDown(c),e=true;if(this.events.mouseDown){e=this.fireEvent("mouseDownEvent",c);}if((j===false)||(h===false)||(g===false)||(e===false)){return;}this.DDM.refreshCache(this.groups);var f=new YAHOO.util.Point(a.getPageX(c),a.getPageY(c));if(!this.hasOuterHandles&&!this.DDM.isOverTarget(f,this)){}else{if(this.clickValidator(c)){this.setStartPosition();this.DDM.handleMouseDown(c,this);this.DDM.stopEvent(c);}else{}}},clickValidator:function(c){var d=YAHOO.util.Event.getTarget(c);return(this.isValidHandleChild(d)&&(this.id==this.handleElId||this.DDM.handleWasClicked(d,this.id)));},getTargetCoord:function(d,e){var f=d-this.deltaX;var c=e-this.deltaY;if(this.constrainX){if(f<this.minX){f=this.minX;}if(f>this.maxX){f=this.maxX;}}if(this.constrainY){if(c<this.minY){c=this.minY;}if(c>this.maxY){c=this.maxY;}}f=this.getTick(f,this.xTicks);c=this.getTick(c,this.yTicks);return{x:f,y:c};},addInvalidHandleType:function(d){var c=d.toUpperCase();this.invalidHandleTypes[c]=c;},addInvalidHandleId:function(c){if(typeof c!=="string"){c=b.generateId(c);}this.invalidHandleIds[c]=c;},addInvalidHandleClass:function(c){this.invalidHandleClasses.push(c);},removeInvalidHandleType:function(d){var c=d.toUpperCase();delete this.invalidHandleTypes[c];},removeInvalidHandleId:function(c){if(typeof c!=="string"){c=b.generateId(c);}delete this.invalidHandleIds[c];},removeInvalidHandleClass:function(d){for(var c=0,e=this.invalidHandleClasses.length;c<e;++c){if(this.invalidHandleClasses[c]==d){delete this.invalidHandleClasses[c];}}},isValidHandleChild:function(e){var f=true;var c;try{c=e.nodeName.toUpperCase();}catch(d){c=e.nodeName;}f=f&&!this.invalidHandleTypes[c];f=f&&!this.invalidHandleIds[e.id];for(var g=0,h=this.invalidHandleClasses.length;f&&g<h;++g){f=!b.hasClass(e,this.invalidHandleClasses[g]);}return f;},setXTicks:function(c,f){this.xTicks=[];this.xTickSize=f;var d={};for(var e=this.initPageX;e>=this.minX;e=e-f){if(!d[e]){this.xTicks[this.xTicks.length]=e;d[e]=true;}}for(e=this.initPageX;e<=this.maxX;e=e+f){if(!d[e]){this.xTicks[this.xTicks.length]=e;d[e]=true;}}this.xTicks.sort(this.DDM.numericSort);},setYTicks:function(c,f){this.yTicks=[];this.yTickSize=f;var d={};for(var e=this.initPageY;e>=this.minY;e=e-f){if(!d[e]){this.yTicks[this.yTicks.length]=e;d[e]=true;}}for(e=this.initPageY;e<=this.maxY;e=e+f){if(!d[e]){this.yTicks[this.yTicks.length]=e;d[e]=true;}}this.yTicks.sort(this.DDM.numericSort);},setXConstraint:function(c,d,e){this.leftConstraint=parseInt(c,10);this.rightConstraint=parseInt(d,10);this.minX=this.initPageX-this.leftConstraint;this.maxX=this.initPageX+this.rightConstraint;if(e){this.setXTicks(this.initPageX,e);}this.constrainX=true;},clearConstraints:function(){this.constrainX=false;this.constrainY=false;this.clearTicks();},clearTicks:function(){this.xTicks=null;this.yTicks=null;this.xTickSize=0;this.yTickSize=0;},setYConstraint:function(e,c,d){this.topConstraint=parseInt(e,10);this.bottomConstraint=parseInt(c,10);this.minY=this.initPageY-this.topConstraint;this.maxY=this.initPageY+this.bottomConstraint;if(d){this.setYTicks(this.initPageY,d);}this.constrainY=true;},resetConstraints:function(){if(this.initPageX||this.initPageX===0){var c=(this.maintainOffset)?this.lastPageX-this.initPageX:0;var d=(this.maintainOffset)?this.lastPageY-this.initPageY:0;this.setInitPosition(c,d);}else{this.setInitPosition();}if(this.constrainX){this.setXConstraint(this.leftConstraint,this.rightConstraint,this.xTickSize);}if(this.constrainY){this.setYConstraint(this.topConstraint,this.bottomConstraint,this.yTickSize);}},getTick:function(c,f){if(!f){return c;}else{if(f[0]>=c){return f[0];}else{for(var h=0,i=f.length;h<i;++h){var g=h+1;if(f[g]&&f[g]>=c){var d=c-f[h];var e=f[g]-c;return(e>d)?f[h]:f[g];}}return f[f.length-1];}}},toString:function(){return("DragDrop "+this.id);}};YAHOO.augment(YAHOO.util.DragDrop,YAHOO.util.EventProvider);})();YAHOO.util.DD=function(b,a,c){if(b){this.init(b,a,c);}};YAHOO.extend(YAHOO.util.DD,YAHOO.util.DragDrop,{scroll:true,autoOffset:function(c,d){var a=c-this.startPageX;var b=d-this.startPageY;this.setDelta(a,b);},setDelta:function(b,a){this.deltaX=b;this.deltaY=a;},setDragElPos:function(b,c){var a=this.getDragEl();this.alignElWithMouse(a,b,c);},alignElWithMouse:function(g,c,d){var e=this.getTargetCoord(c,d);if(!this.deltaSetXY){var b=[e.x,e.y];YAHOO.util.Dom.setXY(g,b);var f=parseInt(YAHOO.util.Dom.getStyle(g,"left"),10);var h=parseInt(YAHOO.util.Dom.getStyle(g,"top"),10);this.deltaSetXY=[f-e.x,h-e.y];}else{YAHOO.util.Dom.setStyle(g,"left",(e.x+this.deltaSetXY[0])+"px");YAHOO.util.Dom.setStyle(g,"top",(e.y+this.deltaSetXY[1])+"px");}this.cachePosition(e.x,e.y);var a=this;setTimeout(function(){a.autoScroll.call(a,e.x,e.y,g.offsetHeight,g.offsetWidth);},0);},cachePosition:function(c,a){if(c){this.lastPageX=c;this.lastPageY=a;}else{var b=YAHOO.util.Dom.getXY(this.getEl());this.lastPageX=b[0];this.lastPageY=b[1];}},autoScroll:function(i,j,n,h){if(this.scroll){var g=this.DDM.getClientHeight();var c=this.DDM.getClientWidth();var e=this.DDM.getScrollTop();var a=this.DDM.getScrollLeft();var k=n+j;var f=h+i;var l=(g+e-j-this.deltaY);var m=(c+a-i-this.deltaX);var b=40;var d=(document.all)?80:30;if(k>g&&l<b){window.scrollTo(a,e+d);}if(j<e&&e>0&&j-e<b){window.scrollTo(a,e-d);}if(f>c&&m<b){window.scrollTo(a+d,e);}if(i<a&&a>0&&i-a<b){window.scrollTo(a-d,e);}}},applyConfig:function(){YAHOO.util.DD.superclass.applyConfig.call(this);this.scroll=(this.config.scroll!==false);},b4MouseDown:function(a){this.setStartPosition();this.autoOffset(YAHOO.util.Event.getPageX(a),YAHOO.util.Event.getPageY(a));},b4Drag:function(a){this.setDragElPos(YAHOO.util.Event.getPageX(a),YAHOO.util.Event.getPageY(a));},toString:function(){return("DD "+this.id);}});YAHOO.util.DDProxy=function(b,a,c){if(b){this.init(b,a,c);this.initFrame();}};YAHOO.util.DDProxy.dragElId="ygddfdiv";YAHOO.extend(YAHOO.util.DDProxy,YAHOO.util.DD,{resizeFrame:true,centerFrame:false,createFrame:function(){var f=this,a=document.body;if(!a||!a.firstChild){setTimeout(function(){f.createFrame();},50);return;}var b=this.getDragEl(),c=YAHOO.util.Dom;if(!b){b=document.createElement("div");b.id=this.dragElId;var d=b.style;d.position="absolute";d.visibility="hidden";d.cursor="move";d.border="2px solid #aaa";d.zIndex=999;d.height="25px";d.width="25px";var e=document.createElement("div");c.setStyle(e,"height","100%");c.setStyle(e,"width","100%");c.setStyle(e,"background-color","#ccc");c.setStyle(e,"opacity","0");b.appendChild(e);a.insertBefore(b,a.firstChild);}},initFrame:function(){this.createFrame();},applyConfig:function(){YAHOO.util.DDProxy.superclass.applyConfig.call(this);this.resizeFrame=(this.config.resizeFrame!==false);this.centerFrame=(this.config.centerFrame);this.setDragElId(this.config.dragElId||YAHOO.util.DDProxy.dragElId);},showFrame:function(b,c){var d=this.getEl();var a=this.getDragEl();var e=a.style;this._resizeProxy();if(this.centerFrame){this.setDelta(Math.round(parseInt(e.width,10)/2),Math.round(parseInt(e.height,10)/2));}this.setDragElPos(b,c);YAHOO.util.Dom.setStyle(a,"visibility","visible");},_resizeProxy:function(){if(this.resizeFrame){var f=YAHOO.util.Dom;var c=this.getEl();var b=this.getDragEl();var g=parseInt(f.getStyle(b,"borderTopWidth"),10);var e=parseInt(f.getStyle(b,"borderRightWidth"),10);var h=parseInt(f.getStyle(b,"borderBottomWidth"),10);var a=parseInt(f.getStyle(b,"borderLeftWidth"),10);if(isNaN(g)){g=0;}if(isNaN(e)){e=0;}if(isNaN(h)){h=0;}if(isNaN(a)){a=0;}var i=Math.max(0,c.offsetWidth-e-a);var d=Math.max(0,c.offsetHeight-g-h);f.setStyle(b,"width",i+"px");f.setStyle(b,"height",d+"px");}},b4MouseDown:function(c){this.setStartPosition();var a=YAHOO.util.Event.getPageX(c);var b=YAHOO.util.Event.getPageY(c);this.autoOffset(a,b);},b4StartDrag:function(a,b){this.showFrame(a,b);},b4EndDrag:function(a){YAHOO.util.Dom.setStyle(this.getDragEl(),"visibility","hidden");},endDrag:function(b){var c=YAHOO.util.Dom;var d=this.getEl();var a=this.getDragEl();c.setStyle(a,"visibility","");c.setStyle(d,"visibility","hidden");YAHOO.util.DDM.moveToEl(d,a);c.setStyle(a,"visibility","hidden");c.setStyle(d,"visibility","");},toString:function(){return("DDProxy "+this.id);}});YAHOO.util.DDTarget=function(b,a,c){if(b){this.initTarget(b,a,c);}};YAHOO.extend(YAHOO.util.DDTarget,YAHOO.util.DragDrop,{toString:function(){return("DDTarget "+this.id);}});YAHOO.register("dragdrop",YAHOO.util.DragDropMgr,{version:"2.8.1",build:"19"});js.util.DragDropMgr=YAHOO.util.DragDropMgr;js.util.DragDropMgr.getLocation=function(b){var a=YAHOO.util.DragDropMgr.getLocation(b);if(a!=null){return{x:a.x,y:a.y,w:a.width,h:a.height};}else{return null;}};js.util.DragDrop=YAHOO.util.DragDrop;js.util.DD=YAHOO.util.DD;js.util.DDProxy=YAHOO.util.DDProxy;js.util.DDTarget=YAHOO.util.DDTarget;