/*
 Leaflet 1.0.3, a JS library for interactive maps. http://leafletjs.com
 (c) 2010-2016 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
!function(t,e,i){function n(){var e=t.L;o.noConflict=function(){return t.L=e,this},t.L=o}var o={version:"1.0.3"};"object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),"undefined"!=typeof t&&n(),o.Util={extend:function(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t},create:Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}(),bind:function(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}},stamp:function(t){return t._leaflet_id=t._leaflet_id||++o.Util.lastId,t._leaflet_id},lastId:0,throttle:function(t,e,i){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(i,o),o=!1)},s=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(r,e),n=!0)}},wrapNum:function(t,e,i){var n=e[1],o=e[0],s=n-o;return t===n&&i?t:((t-o)%s+s)%s+o},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){t.hasOwnProperty("options")||(t.options=t.options?o.Util.create(t.options):{});for(var i in e)t.options[i]=e[i];return t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&e.indexOf("?")!==-1?"&":"?")+n.join("&")},template:function(t,e){return t.replace(o.Util.templateRe,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},templateRe:/\{ *([\w_\-]+) *\}/g,isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},indexOf:function(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){return t["webkit"+e]||t["moz"+e]||t["ms"+e]}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,r=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,r){return r&&s===i?void e.call(n):s.call(t,o.bind(e,n))},o.Util.cancelAnimFrame=function(e){e&&r.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=o.Util.create(i);n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);return t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=o.Util.extend(o.Util.create(n.options),t.options)),o.extend(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;t<e;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){return o.extend(this.prototype,t),this},o.Class.mergeOptions=function(t){return o.extend(this.prototype.options,t),this},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this},o.Evented=o.Class.extend({on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e);else{t=o.Util.splitWords(t);for(var s=0,r=t.length;s<r;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],e);else{t=o.Util.splitWords(t);for(var s=0,r=t.length;s<r;s++)this._off(t[s],e,i)}else delete this._events;return this},_on:function(t,e,n){this._events=this._events||{};var o=this._events[t];o||(o=[],this._events[t]=o),n===this&&(n=i);for(var s={fn:e,ctx:n},r=o,a=0,h=r.length;a<h;a++)if(r[a].fn===e&&r[a].ctx===n)return;r.push(s)},_off:function(t,e,n){var s,r,a;if(this._events&&(s=this._events[t])){if(!e){for(r=0,a=s.length;r<a;r++)s[r].fn=o.Util.falseFn;return void delete this._events[t]}if(n===this&&(n=i),s)for(r=0,a=s.length;r<a;r++){var h=s[r];if(h.ctx===n&&h.fn===e)return h.fn=o.Util.falseFn,this._firingCount&&(this._events[t]=s=s.slice()),void s.splice(r,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=o.Util.extend({},e,{type:t,target:this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e){var i=this._events&&this._events[t];if(i&&i.length)return!0;if(e)for(var n in this._eventParents)if(this._eventParents[n].listens(t,e))return!0;return!1},once:function(t,e,i){if("object"==typeof t){for(var n in t)this.once(n,t[n],e);return this}var s=o.bind(function(){this.off(t,e,i).off(t,s,i)},this);return this.on(t,e,i).on(t,s,i)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[o.stamp(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[o.stamp(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,o.extend({layer:t.target},t),!0)}});var s=o.Evented.prototype;s.addEventListener=s.on,s.removeEventListener=s.clearAllEventListeners=s.off,s.addOneTimeEventListener=s.once,s.fireEvent=s.fire,s.hasEventListeners=s.listens,o.Mixin={Events:s},function(){var i=navigator.userAgent.toLowerCase(),n=e.documentElement,s="ActiveXObject"in t,r=i.indexOf("webkit")!==-1,a=i.indexOf("phantom")!==-1,h=i.search("android [23]")!==-1,l=i.indexOf("chrome")!==-1,u=i.indexOf("gecko")!==-1&&!r&&!t.opera&&!s,c=0===navigator.platform.indexOf("Win"),d="undefined"!=typeof orientation||i.indexOf("mobile")!==-1,_=!t.PointerEvent&&t.MSPointerEvent,m=t.PointerEvent||_,p=s&&"transition"in n.style,f="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!h,g="MozPerspective"in n.style,v="OTransition"in n.style,y=!t.L_NO_TOUCH&&(m||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch);o.Browser={ie:s,ielt9:s&&!e.addEventListener,edge:"msLaunchUri"in navigator&&!("documentMode"in e),webkit:r,gecko:u,android:i.indexOf("android")!==-1,android23:h,chrome:l,safari:!l&&i.indexOf("safari")!==-1,win:c,ie3d:p,webkit3d:f,gecko3d:g,opera12:v,any3d:!t.L_DISABLE_3D&&(p||f||g)&&!v&&!a,mobile:d,mobileWebkit:d&&r,mobileWebkit3d:d&&f,mobileOpera:d&&t.opera,mobileGecko:d&&u,touch:!!y,msPointer:!!_,pointer:!!m,retina:(t.devicePixelRatio||t.screen.deviceXDPI/t.screen.logicalXDPI)>1}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new o.Point(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new o.Point(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new o.Point(t.x,t.y):new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,r=s.x>=e.x&&n.x<=i.x,a=s.y>=e.y&&n.y<=i.y;return r&&a},overlaps:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,r=s.x>e.x&&n.x<i.x,a=s.y>e.y&&n.y<i.y;return r&&a},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},create:function(t,i,n){var o=e.createElement(t);return o.className=i||"",n&&n.appendChild(o),o},remove:function(t){var e=t.parentNode;e&&e.removeChild(t)},empty:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},toFront:function(t){t.parentNode.appendChild(t)},toBack:function(t){var e=t.parentNode;e.insertBefore(t,e.firstChild)},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil.getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,r=n.length;s<r;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var a=o.DomUtil.getClass(t);o.DomUtil.setClass(t,(a?a+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil.setClass(t,o.Util.trim((" "+o.DomUtil.getClass(t)+" ").replace(" "+e+" "," ")))},setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&o.DomUtil._setOpacityIE(t,e)},_setOpacityIE:function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},setTransform:function(t,e,i){var n=e||new o.Point(0,0);t.style[o.DomUtil.TRANSFORM]=(o.Browser.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")},setPosition:function(t,e){t._leaflet_pos=e,o.Browser.any3d?o.DomUtil.setTransform(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos||new o.Point(0,0)}},function(){o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]);var i=o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]);if(o.DomUtil.TRANSITION_END="webkitTransition"===i||"OTransition"===i?i+"End":"transitionend","onselectstart"in e)o.DomUtil.disableTextSelection=function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},o.DomUtil.enableTextSelection=function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)};else{var n=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.DomUtil.disableTextSelection=function(){if(n){var t=e.documentElement.style;this._userSelect=t[n],t[n]="none"}},o.DomUtil.enableTextSelection=function(){n&&(e.documentElement.style[n]=this._userSelect,delete this._userSelect)}}o.DomUtil.disableImageDrag=function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},o.DomUtil.enableImageDrag=function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)},o.DomUtil.preventOutline=function(e){for(;e.tabIndex===-1;)e=e.parentNode;e&&e.style&&(o.DomUtil.restoreOutline(),this._outlineElement=e,this._outlineStyle=e.style.outline,e.style.outline="none",o.DomEvent.on(t,"keydown",o.DomUtil.restoreOutline,this))},o.DomUtil.restoreOutline=function(){this._outlineElement&&(this._outlineElement.style.outline=this._outlineStyle,delete this._outlineElement,delete this._outlineStyle,o.DomEvent.off(t,"keydown",o.DomUtil.restoreOutline,this))}}(),o.LatLng=function(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,n!==i&&(this.alt=+n)},o.LatLng.prototype={equals:function(t,e){if(!t)return!1;t=o.latLng(t);var n=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return n<=(e===i?1e-9:e)},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){return o.CRS.Earth.distance(this,o.latLng(t))},wrap:function(){return o.CRS.Earth.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return o.latLngBounds([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new o.LatLng(this.lat,this.lng,this.alt)}},o.latLng=function(t,e,n){return t instanceof o.LatLng?t:o.Util.isArray(t)&&"object"!=typeof t[0]?3===t.length?new o.LatLng(t[0],t[1],t[2]):2===t.length?new o.LatLng(t[0],t[1]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===i?null:new o.LatLng(t,e,n)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){var e,i,n=this._southWest,s=this._northEast;if(t instanceof o.LatLng)e=t,i=t;else{if(!(t instanceof o.LatLngBounds))return t?this.extend(o.latLng(t)||o.latLngBounds(t)):this;if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||s?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),s.lat=Math.max(i.lat,s.lat),s.lng=Math.max(i.lng,s.lng)):(this._southWest=new o.LatLng(e.lat,e.lng),this._northEast=new o.LatLng(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng||"lat"in t?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),r=s.lat>=e.lat&&n.lat<=i.lat,a=s.lng>=e.lng&&n.lng<=i.lng;return r&&a},overlaps:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),r=s.lat>e.lat&&n.lat<i.lat,a=s.lng>e.lng&&n.lng<i.lng;return r&&a},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return!!t&&(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast()))},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)},bounds:o.bounds([-180,-90],[180,90])},o.Projection.SphericalMercator={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new o.Point(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new o.LatLng((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=6378137*Math.PI;return o.bounds([-t,-t],[t,t])}()},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return o.bounds(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?o.Util.wrapNum(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?o.Util.wrapNum(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return o.latLng(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(0===n&&0===s)return t;var r=t.getSouthWest(),a=t.getNorthEast(),h=o.latLng({lat:r.lat-n,lng:r.lng-s}),l=o.latLng({lat:a.lat-n,lng:a.lng-s});return new o.LatLngBounds(h,l)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0}),o.CRS.Earth=o.extend({},o.CRS,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin(n)*Math.sin(o)+Math.cos(n)*Math.cos(o)*Math.cos((e.lng-t.lng)*i);return this.R*Math.acos(Math.min(s,1))}}),o.CRS.EPSG3857=o.extend({},o.CRS.Earth,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:function(){var t=.5/(Math.PI*o.Projection.SphericalMercator.R);return new o.Transformation(t,.5,-t,.5)}()}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS.Earth,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/180,1,-1/180,.5)}),o.Map=o.Evented.extend({options:{crs:o.CRS.EPSG3857,center:i,zoom:i,minZoom:i,maxZoom:i,layers:[],maxBounds:i,renderer:i,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==i&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),o.DomEvent.on(this._proxy,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate,duration:n.duration},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(o.Browser.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(o.Browser.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),r=t instanceof o.Point?t:this.latLngToContainerPoint(t),a=r.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(a));return this.setView(h,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));s="number"==typeof e.maxZoom?Math.min(e.maxZoom,s):s;var r=n.subtract(i).divideBy(2),a=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(a.add(h).divideBy(2).add(r),s);return{center:l,zoom:s}},fitBounds:function(t,e){if(t=o.latLngBounds(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,n){function s(t){var e=t?-1:1,i=t?v:g,n=v*v-g*g+e*L*L*y*y,o=2*i*L*y,s=n/o,r=Math.sqrt(s*s+1)-s,a=r<1e-9?-18:Math.log(r);return a}function r(t){return(Math.exp(t)-Math.exp(-t))/2}function a(t){return(Math.exp(t)+Math.exp(-t))/2}function h(t){return r(t)/a(t)}function l(t){return g*(a(x)/a(x+P*t))}function u(t){return g*(a(x)*h(x+P*t)-r(x))/L}function c(t){return 1-Math.pow(1-t,1.5)}function d(){var i=(Date.now()-w)/T,n=c(i)*b;i<=1?(this._flyToFrame=o.Util.requestAnimFrame(d,this),this._move(this.unproject(_.add(m.subtract(_).multiplyBy(u(n)/y)),f),this.getScaleZoom(g/l(n),f),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}if(n=n||{},n.animate===!1||!o.Browser.any3d)return this.setView(t,e,n);this._stop();var _=this.project(this.getCenter()),m=this.project(t),p=this.getSize(),f=this._zoom;t=o.latLng(t),e=e===i?f:e;var g=Math.max(p.x,p.y),v=g*this.getZoomScale(f,e),y=m.distanceTo(_)||1,P=1.42,L=P*P,x=s(0),w=Date.now(),b=(s(1)-x)/P,T=n.duration?1e3*n.duration:1e3*b*.8;return this._moveStart(!0),d.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=o.latLngBounds(t),t.isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){return this.options.minZoom=t,this._loaded&&this.getZoom()<this.options.minZoom?this.setZoom(t):this},setMaxZoom:function(t){return this.options.maxZoom=t,this._loaded&&this.getZoom()>this.options.maxZoom?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,o.latLngBounds(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),r=n.subtract(s);return r.x||r.y?(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=o.extend({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=n.toBounds(t.coords.accuracy),r=this._locateOptions;if(r.setView){var a=this.getBoundsZoom(s);this.setView(n,r.maxZoom?Math.min(a,r.maxZoom):a)}var h={latlng:n,bounds:s,timestamp:t.timestamp};for(var l in t.coords)"number"==typeof t.coords[l]&&(h[l]=t.coords[l]);this.fire("locationfound",h)},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=i,this._containerId=i}o.DomUtil.remove(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this._loaded&&this.fire("unload");for(var t in this._layers)this._layers[t].remove();return this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=o.DomUtil.create("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t),i=o.point(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),r=this.getMaxZoom(),a=t.getNorthWest(),h=t.getSouthEast(),l=this.getSize().subtract(i),u=o.bounds(this.project(h,n),this.project(a,n)).getSize(),c=o.Browser.any3d?this.options.zoomSnap:1,d=Math.min(l.x/u.x,l.y/u.y);return n=this.getScaleZoom(d,n),c&&(n=Math.round(n/(c/100))*(c/100),n=e?Math.ceil(n/c)*c:Math.floor(n/c)*c),Math.max(s,Math.min(r,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new o.Point(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new o.Bounds(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===i?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var n=this.options.crs;return e=e===i?this._zoom:e,n.scale(t)/n.scale(e)},getScaleZoom:function(t,e){var n=this.options.crs;e=e===i?this._zoom:e;var o=n.zoom(t*n.scale(e));return isNaN(o)?1/0:o},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(o.latLng(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(o.latLngBounds(t))},distance:function(t,e){return this.options.crs.distance(o.latLng(t),o.latLng(e))},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet_id)throw new Error("Map container is already initialized.");o.DomEvent.addListener(e,"scroll",this._onScroll,this),this._containerId=o.Util.stamp(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&o.Browser.any3d,o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(o.Browser.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));
var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,"leaflet-zoom-hide"),o.DomUtil.addClass(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e){o.DomUtil.setPosition(this._mapPane,new o.Point(0,0));var i=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var n=this._zoom!==e;this._moveStart(n)._move(t,e)._moveEnd(n),this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t){return t&&this.fire("zoomstart"),this.fire("movestart")},_move:function(t,e,n){e===i&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(o||n&&n.pinch)&&this.fire("zoom",n),this.fire("move",n)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return o.Util.cancelAnimFrame(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){this._targets={},this._targets[o.stamp(this._container)]=this;var i=e?"off":"on";o.DomEvent[i](this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&o.DomEvent[i](t,"resize",this._onResize,this),o.Browser.any3d&&this.options.transform3DLimit&&this[i]("moveend",this._onMoveEnd)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],s="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,a=!1;r;){if(i=this._targets[o.stamp(r)],i&&("click"===e||"preclick"===e)&&!t._simulated&&this._draggableMoved(i)){a=!0;break}if(i&&i.listens(e,!0)){if(s&&!o.DomEvent._isExternalTarget(r,t))break;if(n.push(i),s)break}if(r===this._container)break;r=r.parentNode}return n.length||a||s||!o.DomEvent._isExternalTarget(r,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e="keypress"===t.type&&13===t.keyCode?"click":t.type;"mousedown"===e&&o.DomUtil.preventOutline(t.target||t.srcElement),this._fireDOMEvent(t,e)}},_fireDOMEvent:function(t,e,i){if("click"===t.type){var n=o.Util.extend({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}if(!t._stopped&&(i=(i||[]).concat(this._findEventTargets(t,e)),i.length)){var s=i[0];"contextmenu"===e&&s.listens(e,!0)&&o.DomEvent.preventDefault(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s instanceof o.Marker;r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<i.length;h++)if(i[h].fire(e,r,!0),r.originalEvent._stopped||i[h].options.nonBubblingEvents&&o.Util.indexOf(i[h].options.nonBubblingEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)||new o.Point(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var n=t&&e!==i?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return n.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return o.bounds([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),r=new o.Bounds(n.subtract(s),n.add(s)),a=this._getBoundsOffset(r,i,e);return a.round().equals([0,0])?t:this.unproject(n.add(a),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=o.bounds(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),r=n.max.subtract(t.max),a=this._rebound(s.x,-r.x),h=this._rebound(s.y,-r.y);return new o.Point(a,h)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=o.Browser.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return!((e&&e.animate)!==!0&&!this.getSize().contains(i))&&(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=o.DomUtil.create("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=o.DomUtil.TRANSFORM,n=t.style[i];o.DomUtil.setTransform(t,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===t.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var e=this.getCenter(),i=this.getZoom();o.DomUtil.setTransform(t,this.project(e,i),this.getZoomScale(i,1))},this)},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return!(i.animate!==!0&&!this.getSize().contains(s))&&(o.Util.requestAnimFrame(function(){this._moveStart(!0)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),setTimeout(o.bind(this._onZoomTransitionEnd,this),250)},_onZoomTransitionEnd:function(){this._animatingZoom&&(o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),o.Util.requestAnimFrame(function(){this._moveEnd(!0)},this))}}),o.map=function(t,e){return new o.Map(t,e)},o.Layer=o.Evented.extend({options:{pane:"overlayPane",nonBubblingEvents:[],attribution:null},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[o.stamp(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[o.stamp(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.getAttribution&&e.attributionControl&&e.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),e.fire("layeradd",{layer:this})}}}),o.Map.include({addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&o.stamp(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[o.stamp(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=o.stamp(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-(1/0),n=this._getZoomSpan();for(var o in this._zoomBoundLayers){var s=this._zoomBoundLayers[o].options;t=s.minZoom===i?t:Math.min(t,s.minZoom),e=s.maxZoom===i?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-(1/0)?i:e,this._layersMinZoom=t===1/0?i:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===i&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===i&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var r="_leaflet_events";o.DomEvent={on:function(t,e,i,n){if("object"==typeof e)for(var s in e)this._on(t,s,e[s],i);else{e=o.Util.splitWords(e);for(var r=0,a=e.length;r<a;r++)this._on(t,e[r],i,n)}return this},off:function(t,e,i,n){if("object"==typeof e)for(var s in e)this._off(t,s,e[s],i);else{e=o.Util.splitWords(e);for(var r=0,a=e.length;r<a;r++)this._off(t,e[r],i,n)}return this},_on:function(e,i,n,s){var a=i+o.stamp(n)+(s?"_"+o.stamp(s):"");if(e[r]&&e[r][a])return this;var h=function(i){return n.call(s||e,i||t.event)},l=h;return o.Browser.pointer&&0===i.indexOf("touch")?this.addPointerListener(e,i,h,a):!o.Browser.touch||"dblclick"!==i||!this.addDoubleTapListener||o.Browser.pointer&&o.Browser.chrome?"addEventListener"in e?"mousewheel"===i?e.addEventListener("onwheel"in e?"wheel":"mousewheel",h,!1):"mouseenter"===i||"mouseleave"===i?(h=function(i){i=i||t.event,o.DomEvent._isExternalTarget(e,i)&&l(i)},e.addEventListener("mouseenter"===i?"mouseover":"mouseout",h,!1)):("click"===i&&o.Browser.android&&(h=function(t){return o.DomEvent._filterClick(t,l)}),e.addEventListener(i,h,!1)):"attachEvent"in e&&e.attachEvent("on"+i,h):this.addDoubleTapListener(e,h,a),e[r]=e[r]||{},e[r][a]=h,this},_off:function(t,e,i,n){var s=e+o.stamp(i)+(n?"_"+o.stamp(n):""),a=t[r]&&t[r][s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,s):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,s):"removeEventListener"in t?"mousewheel"===e?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",a,!1):t.removeEventListener("mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[r][s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){return o.DomEvent.on(t,"mousewheel",o.DomEvent.stopPropagation)},disableClickPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,o.Draggable.START.join(" "),e),o.DomEvent.on(t,{click:o.DomEvent._fakeStop,dblclick:e})},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},_wheelPxFactor:o.Browser.win&&o.Browser.chrome?2:o.Browser.gecko?t.devicePixelRatio:1,getWheelDelta:function(t){return o.Browser.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/o.DomEvent._wheelPxFactor:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_isExternalTarget:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(t){return!1}return i!==t},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,void e(t))}},o.DomEvent.addListener=o.DomEvent.on,o.DomEvent.removeListener=o.DomEvent.off,o.PosAnimation=o.Evented.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),o.DomUtil.setPosition(this._el,i),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Projection.Mercator={R:6378137,R_MINOR:6356752.314245179,bounds:o.bounds([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,r=Math.sqrt(1-s*s),a=r*Math.sin(n),h=Math.tan(Math.PI/4-n/2)/Math.pow((1-a)/(1+a),r/2);return n=-i*Math.log(Math.max(h,1e-10)),new o.Point(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,s=this.R_MINOR/n,r=Math.sqrt(1-s*s),a=Math.exp(-t.y/n),h=Math.PI/2-2*Math.atan(a),l=0,u=.1;l<15&&Math.abs(u)>1e-7;l++)e=r*Math.sin(h),e=Math.pow((1-e)/(1+e),r/2),u=Math.PI/2-2*Math.atan(a*e)-h,h+=u;return new o.LatLng(h*i,t.x*i/n)}},o.CRS.EPSG3395=o.extend({},o.CRS.Earth,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=.5/(Math.PI*o.Projection.Mercator.R);return new o.Transformation(t,.5,-t,.5)}()}),o.GridLayer=o.Layer.extend({options:{tileSize:256,opacity:1,updateWhenIdle:o.Browser.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:i,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){o.setOptions(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),o.DomUtil.remove(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=null},bringToFront:function(){return this._map&&(o.DomUtil.toFront(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(o.DomUtil.toBack(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o.Util.throttle(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return e.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof o.Point?t:new o.Point(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-(1/0),1/0),o=0,s=i.length;o<s;o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!o.Browser.ielt9){o.DomUtil.setOpacity(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(s.current&&s.loaded){var r=Math.min(1,(t-s.loaded)/200);o.DomUtil.setOpacity(s.el,r),r<1?e=!0:(s.active&&(i=!0),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(o.Util.cancelAnimFrame(this._fadeFrame),this._fadeFrame=o.Util.requestAnimFrame(this._updateOpacity,this))}},_initContainer:function(){this._container||(this._container=o.DomUtil.create("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t===i)return i;for(var n in this._levels)this._levels[n].el.children.length||n===t?this._levels[n].el.style.zIndex=e-Math.abs(t-n):(o.DomUtil.remove(this._levels[n].el),this._removeTilesAtZoom(n),delete this._levels[n]);var s=this._levels[t],r=this._map;return s||(s=this._levels[t]={},s.el=o.DomUtil.create("div","leaflet-tile-container leaflet-zoom-animated",this._container),s.el.style.zIndex=e,s.origin=r.project(r.unproject(r.getPixelOrigin()),t).round(),s.zoom=t,this._setZoomTransform(s,r.getCenter(),r.getZoom()),o.Util.falseFn(s.el.offsetWidth)),this._level=s,s},_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom)return void this._removeAllTiles();for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)o.DomUtil.remove(this._levels[t].el),delete this._levels[t];this._removeAllTiles(),this._tileZoom=null},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),r=Math.floor(e/2),a=i-1,h=new o.Point(+s,+r);h.z=+a;var l=this._tileCoordsToKey(h),u=this._tiles[l];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),a>n&&this._retainParent(s,r,a,n))},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var r=2*e;r<2*e+2;r++){var a=new o.Point(s,r);a.z=i+1;var h=this._tileCoordsToKey(a),l=this._tiles[h];l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),i+1<n&&this._retainChildren(s,r,i+1,n))}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_setView:function(t,e,n,o){var s=Math.round(e);(this.options.maxZoom!==i&&s>this.options.maxZoom||this.options.minZoom!==i&&s<this.options.minZoom)&&(s=i);var r=this.options.updateWhenZooming&&s!==this._tileZoom;o&&!r||(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==i&&this._update(t),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();o.Browser.any3d?o.DomUtil.setTransform(t.el,s,n):o.DomUtil.setPosition(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*n);return new o.Bounds(s.subtract(r),s.add(r))},_update:function(t){var n=this._map;if(n){var s=n.getZoom();if(t===i&&(t=n.getCenter()),this._tileZoom!==i){var r=this._getTiledPixelBounds(t),a=this._pxBoundsToTileRange(r),h=a.getCenter(),l=[],u=this.options.keepBuffer,c=new o.Bounds(a.getBottomLeft().subtract([u,-u]),a.getTopRight().add([u,-u]));for(var d in this._tiles){var _=this._tiles[d].coords;_.z===this._tileZoom&&c.contains(o.point(_.x,_.y))||(this._tiles[d].current=!1)}if(Math.abs(s-this._tileZoom)>1)return void this._setView(t,s);for(var m=a.min.y;m<=a.max.y;m++)for(var p=a.min.x;p<=a.max.x;p++){var f=new o.Point(p,m);if(f.z=this._tileZoom,this._isValidTile(f)){var g=this._tiles[this._tileCoordsToKey(f)];g?g.current=!0:l.push(f)}}if(l.sort(function(t,e){return t.distanceTo(h)-e.distanceTo(h)}),0!==l.length){this._loading||(this._loading=!0,this.fire("loading"));var v=e.createDocumentFragment();for(p=0;p<l.length;p++)this._addTile(l[p],v);this._level.el.appendChild(v)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return o.latLngBounds(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToBounds:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),r=e.unproject(n,t.z),a=e.unproject(s,t.z),h=new o.LatLngBounds(r,a);return this.options.noWrap||e.wrapLatLngBounds(h),h},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new o.Point(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(o.DomUtil.remove(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){o.DomUtil.addClass(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=o.Util.falseFn,t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity<1&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.android&&!o.Browser.android23&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),o.bind(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&o.Util.requestAnimFrame(o.bind(this._tileReady,this,t,null,s)),o.DomUtil.setPosition(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){if(this._map){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(o.DomUtil.setOpacity(i.el,0),o.Util.cancelAnimFrame(this._fadeFrame),this._fadeFrame=o.Util.requestAnimFrame(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(o.DomUtil.addClass(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),o.Browser.ielt9||!this._map._fadeAnimated?o.Util.requestAnimFrame(this._pruneTiles,this):setTimeout(o.bind(this._pruneTiles,this),250)))}},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new o.Point(this._wrapX?o.Util.wrapNum(t.x,this._wrapX):t.x,this._wrapY?o.Util.wrapNum(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new o.Bounds(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),o.gridLayer=function(t){return new o.GridLayer(t)},o.TileLayer=o.GridLayer.extend({options:{minZoom:0,maxZoom:18,maxNativeZoom:null,minNativeZoom:null,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,e){this._url=t,e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom++):(e.zoomOffset++,e.maxZoom--),e.minZoom=Math.max(0,e.minZoom)),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),o.Browser.android||this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},createTile:function(t,i){var n=e.createElement("img");return o.DomEvent.on(n,"load",o.bind(this._tileOnLoad,this,i,n)),o.DomEvent.on(n,"error",o.bind(this._tileOnError,this,i,n)),this.options.crossOrigin&&(n.crossOrigin=""),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:o.Browser.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return o.Util.template(this._url,o.extend(e,this.options))},_tileOnLoad:function(t,e){o.Browser.ielt9?setTimeout(o.bind(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.src!==n&&(e.src=n),t(i,e)},getTileSize:function(){var t=this._map,e=o.GridLayer.prototype.getTileSize.call(this),i=this._tileZoom+this.options.zoomOffset,n=this.options.minNativeZoom,s=this.options.maxNativeZoom;return null!==n&&i<n?e.divideBy(t.getZoomScale(n,i)).round():null!==s&&i>s?e.divideBy(t.getZoomScale(s,i)).round():e},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset,o=this.options.minNativeZoom,s=this.options.maxNativeZoom;return i&&(t=e-t),t+=n,null!==o&&t<o?o:null!==s&&t>s?s:t},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=o.Util.falseFn,e.onerror=o.Util.falseFn,e.complete||(e.src=o.Util.emptyImageUrl,o.DomUtil.remove(e)))}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=o.setOptions(this,e),i.width=i.height=e.tileSize*(e.detectRetina&&o.Browser.retina?2:1),this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToBounds(t),i=this._crs.project(e.getNorthWest()),n=this._crs.project(e.getSouthEast()),s=(this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[n.y,i.x,i.y,n.x]:[i.x,n.y,n.x,i.y]).join(","),r=o.TileLayer.prototype.getTileUrl.call(this,t);return r+o.Util.getParamString(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.ImageOverlay=o.Layer.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(o.DomUtil.addClass(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){o.DomUtil.remove(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&o.DomUtil.toFront(this._image),this},bringToBack:function(){return this._map&&o.DomUtil.toBack(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=t,this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._image=o.DomUtil.create("img","leaflet-image-layer "+(this._zoomAnimated?"leaflet-zoom-animated":""));t.onselectstart=o.Util.falseFn,t.onmousemove=o.Util.falseFn,t.onload=o.bind(this.fire,this,"load"),this.options.crossOrigin&&(t.crossOrigin=""),t.src=this._url,t.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;o.DomUtil.setTransform(this._image,i,e)},_reset:function(){var t=this._image,e=new o.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();
o.DomUtil.setPosition(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];"number"==typeof n&&(n=[n,n]);var s=o.point(n),r=o.point("shadow"===e&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return o.Icon.Default.imagePath||(o.Icon.Default.imagePath=this._detectIconPath()),(this.options.imagePath||o.Icon.Default.imagePath)+o.Icon.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=o.DomUtil.create("div","leaflet-default-icon-path",e.body),i=o.DomUtil.getStyle(t,"background-image")||o.DomUtil.getStyle(t,"backgroundImage");return e.body.removeChild(t),0===i.indexOf("url")?i.replace(/^url\([\"\']?/,"").replace(/marker-icon\.png[\"\']?\)$/,""):""}}),o.Marker=o.Layer.extend({options:{icon:new o.Icon.Default,interactive:!0,draggable:!1,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",nonBubblingEvents:["click","dblclick","mouseover","mouseout","contextmenu"]},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=o.latLng(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),t.alt&&(i.alt=t.alt)),o.DomUtil.addClass(i,e),t.keyboard&&(i.tabIndex="0"),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var s=t.icon.createShadow(this._shadow),r=!1;s!==this._shadow&&(this._removeShadow(),r=!0),s&&(o.DomUtil.addClass(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&r&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),o.DomUtil.remove(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&o.DomUtil.remove(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(o.DomUtil.addClass(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),o.Handler.MarkerDrag)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new o.Handler.MarkerDrag(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;o.DomUtil.setOpacity(this._icon,t),this._shadow&&o.DomUtil.setOpacity(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor||[0,0]},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor||[0,0]}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;if(i.innerHTML=n.html!==!1?n.html:"",n.bgPos){var s=o.point(n.bgPos);i.style.backgroundPosition=-s.x+"px "+-s.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.DivOverlay=o.Layer.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,e){o.setOptions(this,t),this._source=e},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&o.DomUtil.setOpacity(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&o.DomUtil.setOpacity(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(o.DomUtil.setOpacity(this._container,0),this._removeTimeout=setTimeout(o.bind(o.DomUtil.remove,o.DomUtil,this._container),200)):o.DomUtil.remove(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&o.DomUtil.toFront(this._container),this},bringToBack:function(){return this._map&&o.DomUtil.toBack(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof e)t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=o.point(this.options.offset),i=this._getAnchor();this._zoomAnimated?o.DomUtil.setPosition(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}}),o.Popup=o.DivOverlay.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){o.DivOverlay.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof o.Path||this._source.on("preclick",o.DomEvent.stopPropagation))},onRemove:function(t){o.DivOverlay.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof o.Path||this._source.off("preclick",o.DomEvent.stopPropagation))},getEvents:function(){var t=o.DivOverlay.prototype.getEvents.call(this);return("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",e=this._container=o.DomUtil.create("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated");if(this.options.closeButton){var i=this._closeButton=o.DomUtil.create("a",t+"-close-button",e);i.href="#close",i.innerHTML="&#215;",o.DomEvent.on(i,"click",this._onCloseButtonClick,this)}var n=this._wrapper=o.DomUtil.create("div",t+"-content-wrapper",e);this._contentNode=o.DomUtil.create("div",t+"-content",n),o.DomEvent.disableClickPropagation(n).disableScrollPropagation(this._contentNode).on(n,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",t+"-tip-container",e),this._tip=o.DomUtil.create("div",t+"-tip",this._tipContainer)},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,r="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,r)):o.DomUtil.removeClass(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();o.DomUtil.setPosition(this._container,e.add(i))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,e=parseInt(o.DomUtil.getStyle(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new o.Point(this._containerLeft,-i-this._containerBottom);s._add(o.DomUtil.getPosition(this._container));var r=t.layerPointToContainerPoint(s),a=o.point(this.options.autoPanPadding),h=o.point(this.options.autoPanPaddingTopLeft||a),l=o.point(this.options.autoPanPaddingBottomRight||a),u=t.getSize(),c=0,d=0;r.x+n+l.x>u.x&&(c=r.x+n-u.x+l.x),r.x-c-h.x<0&&(c=r.x-h.x),r.y+i+l.y>u.y&&(d=r.y+i-u.y+l.y),r.y-d-h.y<0&&(d=r.y-h.y),(c||d)&&t.fire("autopanstart").panBy([c,d])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)},_getAnchor:function(){return o.point(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Map.include({openPopup:function(t,e,i){return t instanceof o.Popup||(t=new o.Popup(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),o.Layer.include({bindPopup:function(t,e){return t instanceof o.Popup?(o.setOptions(t,e),this._popup=t,t._source=this):(this._popup&&!e||(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,e){if(t instanceof o.Layer||(e=t,t=this),t instanceof o.FeatureGroup)for(var i in this._layers){t=this._layers[i];break}return e||(e=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,e)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e=t.layer||t.target;if(this._popup&&this._map)return o.DomEvent.stop(t),e instanceof o.Path?void this.openPopup(t.layer||t.target,t.latlng):void(this._map.hasLayer(this._popup)&&this._popup._source===e?this.closePopup():this.openPopup(e,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.Tooltip=o.DivOverlay.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){o.DivOverlay.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){o.DivOverlay.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=o.DivOverlay.prototype.getEvents.call(this);return o.Browser.touch&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=o.DomUtil.create("div",e)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e=this._map,i=this._container,n=e.latLngToContainerPoint(e.getCenter()),s=e.layerPointToContainerPoint(t),r=this.options.direction,a=i.offsetWidth,h=i.offsetHeight,l=o.point(this.options.offset),u=this._getAnchor();"top"===r?t=t.add(o.point(-a/2+l.x,-h+l.y+u.y,!0)):"bottom"===r?t=t.subtract(o.point(a/2-l.x,-l.y,!0)):"center"===r?t=t.subtract(o.point(a/2+l.x,h/2-u.y+l.y,!0)):"right"===r||"auto"===r&&s.x<n.x?(r="right",t=t.add(o.point(l.x+u.x,u.y-h/2+l.y,!0))):(r="left",t=t.subtract(o.point(a+u.x-l.x,h/2-u.y-l.y,!0))),o.DomUtil.removeClass(i,"leaflet-tooltip-right"),o.DomUtil.removeClass(i,"leaflet-tooltip-left"),o.DomUtil.removeClass(i,"leaflet-tooltip-top"),o.DomUtil.removeClass(i,"leaflet-tooltip-bottom"),o.DomUtil.addClass(i,"leaflet-tooltip-"+r),o.DomUtil.setPosition(i,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&o.DomUtil.setOpacity(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return o.point(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),o.tooltip=function(t,e){return new o.Tooltip(t,e)},o.Map.include({openTooltip:function(t,e,i){return t instanceof o.Tooltip||(t=new o.Tooltip(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),o.Layer.include({bindTooltip:function(t,e){return t instanceof o.Tooltip?(o.setOptions(t,e),this._tooltip=t,t._source=this):(this._tooltip&&!e||(this._tooltip=o.tooltip(e,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),o.Browser.touch&&(i.click=this._openTooltip)),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t,e){if(t instanceof o.Layer||(e=t,t=this),t instanceof o.FeatureGroup)for(var i in this._layers){t=this._layers[i];break}return e||(e=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,e),this._tooltip.options.interactive&&this._tooltip._container&&(o.DomUtil.addClass(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(o.DomUtil.removeClass(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var e=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(e,this._tooltip.options.sticky?t.latlng:i)},_moveTooltip:function(t){var e,i,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}}),o.LayerGroup=o.Layer.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;e<i;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){for(var t in this._layers)this.removeLayer(this._layers[t]);return this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){for(var e in this._layers)t.addLayer(this._layers[e])},onRemove:function(t){for(var e in this._layers)t.removeLayer(this._layers[e])},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),o.LayerGroup.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),o.LayerGroup.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Renderer=o.Layer.extend({options:{padding:.1},initialize:function(t){o.setOptions(this,t),o.stamp(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&o.DomUtil.addClass(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){o.DomUtil.remove(this._container),this.off("update",this._updatePaths,this)},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=o.DomUtil.getPosition(this._container),s=this._map.getSize().multiplyBy(.5+this.options.padding),r=this._map.project(this._center,e),a=this._map.project(t,e),h=a.subtract(r),l=s.multiplyBy(-i).add(n).add(s).subtract(h);o.Browser.any3d?o.DomUtil.setTransform(this._container,l,i):o.DomUtil.setPosition(this._container,l)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new o.Bounds(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),o.Map.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this.options.preferCanvas&&o.canvas()||o.svg()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||t===i)return!1;var e=this._paneRenderers[t];return e===i&&(e=o.SVG&&o.svg({pane:t})||o.Canvas&&o.canvas({pane:t}),this._paneRenderers[t]=e),e}}),o.Path=o.Layer.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return o.setOptions(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(o.Browser.touch?10:0)}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var r,a=[];for(r=0;r<n;r++)s[r]&&a.push(t[r]);return a},_simplifyDPStep:function(t,e,i,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)a=this._sqClosestPointOnSegment(t[r],t[n],t[o],!0),a>h&&(s=r,h=a);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;n<s;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<s-1&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n,o){var s,r,a,h=n?this._lastCode:this._getBitCode(t,i),l=this._getBitCode(e,i);for(this._lastCode=l;;){if(!(h|l))return[t,e];if(h&l)return!1;s=h||l,r=this._getEdgeIntersection(t,e,s,i,o),a=this._getBitCode(r,i),s===h?(t=r,h=a):(e=r,l=a)}},_getEdgeIntersection:function(t,e,i,n,s){var r,a,h=e.x-t.x,l=e.y-t.y,u=n.min,c=n.max;return 8&i?(r=t.x+h*(c.y-t.y)/l,a=c.y):4&i?(r=t.x+h*(u.y-t.y)/l,a=u.y):2&i?(r=c.x,a=t.y+l*(c.x-t.x)/h):1&i&&(r=u.x,a=t.y+l*(u.x-t.x)/h),new o.Point(r,a,s)},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,r=e.x,a=e.y,h=i.x-r,l=i.y-a,u=h*h+l*l;return u>0&&(s=((t.x-r)*h+(t.y-a)*l)/u,s>1?(r=i.x,a=i.y):s>0&&(r+=h*s,a+=l*s)),h=t.x-r,l=t.y-a,n?h*h+l*l:new o.Point(r,a)}},o.Polyline=o.Path.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){o.setOptions(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e,i,n=1/0,s=null,r=o.LineUtil._sqClosestPointOnSegment,a=0,h=this._parts.length;a<h;a++)for(var l=this._parts[a],u=1,c=l.length;u<c;u++){e=l[u-1],i=l[u];var d=r(t,e,i,!0);d<n&&(n=d,s=r(t,e,i))}return s&&(s.distance=Math.sqrt(n)),s},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,e,i,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,e=0;t<h-1;t++)e+=a[t].distanceTo(a[t+1])/2;if(0===e)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],i=o.distanceTo(s),n+=i,n>e)return r=(n-e)/i,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=o.latLng(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new o.LatLngBounds,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return o.Polyline._flat(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=o.Polyline._flat(t),n=0,s=t.length;n<s;n++)i?(e[n]=o.latLng(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new o.Bounds;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var e=this._clickTolerance(),i=new o.Point(e,e);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(i),t.max._add(i),this._pxBounds=t)},_projectLatlngs:function(t,e,i){var n,s,r=t[0]instanceof o.LatLng,a=t.length;if(r){for(s=[],n=0;n<a;n++)s[n]=this._map.latLngToLayerPoint(t[n]),i.extend(s[n]);e.push(s)}else for(n=0;n<a;n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip)return void(this._parts=this._rings);var e,i,n,s,r,a,h,l=this._parts;for(e=0,n=0,s=this._rings.length;e<s;e++)for(h=this._rings[e],i=0,r=h.length;i<r-1;i++)a=o.LineUtil.clipSegment(h[i],h[i+1],t,i,!0),a&&(l[n]=l[n]||[],l[n].push(a[0]),a[1]===h[i+1]&&i!==r-2||(l[n].push(a[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=o.LineUtil.simplify(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.Polyline._flat=function(t){return!o.Util.isArray(t[0])||"object"!=typeof t[0][0]&&"undefined"!=typeof t[0][0]},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e,i){var n,s,r,a,h,l,u,c,d,_=[1,4,2,8],m=o.LineUtil;for(s=0,u=t.length;s<u;s++)t[s]._code=m._getBitCode(t[s],e);for(a=0;a<4;a++){for(c=_[a],n=[],s=0,u=t.length,r=u-1;s<u;r=s++)h=t[s],l=t[r],h._code&c?l._code&c||(d=m._getEdgeIntersection(l,h,c,e,i),d._code=m._getBitCode(d,e),n.push(d)):(l._code&c&&(d=m._getEdgeIntersection(l,h,c,e,i),d._code=m._getBitCode(d,e),n.push(d)),n.push(h));t=n}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,e,i,n,o,s,r,a,h,l=this._rings[0],u=l.length;if(!u)return null;for(s=r=a=0,t=0,e=u-1;t<u;e=t++)i=l[t],n=l[e],o=i.y*n.x-n.y*i.x,r+=(i.x+n.x)*o,a+=(i.y+n.y)*o,s+=3*o;return h=0===s?l[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var e=o.Polyline.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof o.LatLng&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){o.Polyline.prototype._setLatLngs.call(this,t),o.Polyline._flat(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return o.Polyline._flat(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new o.Point(e,e);if(t=new o.Bounds(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip)return void(this._parts=this._rings);for(var n,s=0,r=this._rings.length;s<r;s++)n=o.PolyUtil.clipPolygon(this._rings[s],t,!0),n.length&&this._parts.push(n)}},_updatePath:function(){this._renderer._updatePoly(this,!0)}}),o.polygon=function(t,e){return new o.Polygon(t,e)},o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.CircleMarker=o.Path.extend({options:{fill:!0,radius:10},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return o.Path.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new o.Bounds(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Circle=o.CircleMarker.extend({initialize:function(t,e,i){if("number"==typeof e&&(e=o.extend({},i,{radius:e})),o.setOptions(this,e),this._latlng=o.latLng(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new o.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)));
},setStyle:o.Path.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===o.CRS.Earth.distance){var s=Math.PI/180,r=this._mRadius/o.CRS.Earth.R/s,a=i.project([e+r,t]),h=i.project([e-r,t]),l=a.add(h).divideBy(2),u=i.unproject(l).lat,c=Math.acos((Math.cos(r*s)-Math.sin(e*s)*Math.sin(u*s))/(Math.cos(e*s)*Math.cos(u*s)))/s;(isNaN(c)||0===c)&&(c=r/Math.cos(Math.PI/180*e)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(c)?0:Math.max(Math.round(l.x-i.project([u,t-c]).x),1),this._radiusY=Math.max(Math.round(l.y-a.y),1)}else{var d=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(d).x}this._updateBounds()}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.SVG=o.Renderer.extend({getEvents:function(){var t=o.Renderer.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=o.SVG.create("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=o.SVG.create("g"),this._container.appendChild(this._rootGroup)},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){o.Renderer.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),o.DomUtil.setPosition(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=o.SVG.create("path");t.options.className&&o.DomUtil.addClass(e,t.options.className),t.options.interactive&&o.DomUtil.addClass(e,"leaflet-interactive"),this._updateStyle(t),this._layers[o.stamp(t)]=t},_addPath:function(t){this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){o.DomUtil.remove(t._path),t.removeInteractiveTarget(t._path),delete this._layers[o.stamp(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,o.SVG.pointsToPath(t._parts,e))},_updateCircle:function(t){var e=t._point,i=t._radius,n=t._radiusY||i,o="a"+i+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+2*-i+",0 ";this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){o.DomUtil.toFront(t._path)},_bringToBack:function(t){o.DomUtil.toBack(t._path)}}),o.extend(o.SVG,{create:function(t){return e.createElementNS("http://www.w3.org/2000/svg",t)},pointsToPath:function(t,e){var i,n,s,r,a,h,l="";for(i=0,s=t.length;i<s;i++){for(a=t[i],n=0,r=a.length;n<r;n++)h=a[n],l+=(n?"L":"M")+h.x+" "+h.y;l+=e?o.Browser.svg?"z":"x":""}return l||"M0 0"}}),o.Browser.svg=!(!e.createElementNS||!o.SVG.create("svg").createSVGRect),o.svg=function(t){return o.Browser.svg||o.Browser.vml?new o.SVG(t):null},o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),o.SVG.include(o.Browser.vml?{_initContainer:function(){this._container=o.DomUtil.create("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(o.Renderer.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=o.SVG.create("shape");o.DomUtil.addClass(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=o.SVG.create("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[o.stamp(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;o.DomUtil.remove(e),t.removeInteractiveTarget(e),delete this._layers[o.stamp(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=o.SVG.create("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=o.Util.isArray(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=o.SVG.create("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){o.DomUtil.toFront(t._container)},_bringToBack:function(t){o.DomUtil.toBack(t._container)}}:{}),o.Browser.vml&&(o.SVG.create=function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}()),o.Canvas=o.Renderer.extend({getEvents:function(){var t=o.Renderer.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){o.Renderer.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=e.createElement("canvas");o.DomEvent.on(t,"mousemove",o.Util.throttle(this._onMouseMove,32,this),this).on(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this).on(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},o.Renderer.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=o.Browser.retina?2:1;o.DomUtil.setPosition(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",o.Browser.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){o.Renderer.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[o.stamp(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[o.stamp(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(t.options.dashArray){var e,i=t.options.dashArray.split(","),n=[];for(e=0;e<i.length;e++)n.push(Number(i[e]));t.options._dashArray=n}},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||o.Util.requestAnimFrame(this._redraw,this))},_extendRedrawBounds:function(t){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new o.Bounds,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),h.setLineDash&&h.setLineDash(t.options&&t.options._dashArray||[]),i=0;i<a;i++){for(n=0,o=r[i].length;n<o;n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y);e&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var e=t._point,i=this._ctx,n=t._radius,o=(t._radiusY||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&0!==i.weight&&(t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e,i,n=this._map.mouseEventToLayerPoint(t),s=this._drawFirst;s;s=s.next)e=s.layer,e.options.interactive&&e._containsPoint(n)&&!this._map._draggableMoved(e)&&(i=e);i&&(o.DomEvent._fakeStop(t),this._fireEvent([i],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(o.DomUtil.removeClass(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,e){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(o.DomUtil.addClass(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order,i=e.next,n=e.prev;i&&(i.prev=n,n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t))},_bringToBack:function(t){var e=t._order,i=e.next,n=e.prev;n&&(n.next=i,i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t))}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.canvas=function(t){return o.Browser.canvas?new o.Canvas(t):null},o.Polyline.prototype._containsPoint=function(t,e){var i,n,s,r,a,h,l=this._clickTolerance();if(!this._pxBounds.contains(t))return!1;for(i=0,r=this._parts.length;i<r;i++)for(h=this._parts[i],n=0,a=h.length,s=a-1;n<a;s=n++)if((e||0!==n)&&o.LineUtil.pointToSegmentDistance(t,h[s],h[n])<=l)return!0;return!1},o.Polygon.prototype._containsPoint=function(t){var e,i,n,s,r,a,h,l,u=!1;if(!this._pxBounds.contains(t))return!1;for(s=0,h=this._parts.length;s<h;s++)for(e=this._parts[s],r=0,l=e.length,a=l-1;r<l;a=r++)i=e[r],n=e[a],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u||o.Polyline.prototype._containsPoint.call(this,t,!0)},o.CircleMarker.prototype._containsPoint=function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()},o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;e<i;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var a=o.GeoJSON.geometryToLayer(t,r);return a?(a.feature=o.GeoJSON.asFeature(t),a.defaultOptions=a.options,this.resetStyle(a),r.onEachFeature&&r.onEachFeature(t,a),this.addLayer(a)):this},resetStyle:function(t){return t.options=o.Util.extend({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e){var i,n,s,r,a="Feature"===t.type?t.geometry:t,h=a?a.coordinates:null,l=[],u=e&&e.pointToLayer,c=e&&e.coordsToLatLng||this.coordsToLatLng;if(!h&&!a)return null;switch(a.type){case"Point":return i=c(h),u?u(t,i):new o.Marker(i);case"MultiPoint":for(s=0,r=h.length;s<r;s++)i=c(h[s]),l.push(u?u(t,i):new o.Marker(i));return new o.FeatureGroup(l);case"LineString":case"MultiLineString":return n=this.coordsToLatLngs(h,"LineString"===a.type?0:1,c),new o.Polyline(n,e);case"Polygon":case"MultiPolygon":return n=this.coordsToLatLngs(h,"Polygon"===a.type?1:2,c),new o.Polygon(n,e);case"GeometryCollection":for(s=0,r=a.geometries.length;s<r;s++){var d=this.geometryToLayer({geometry:a.geometries[s],type:"Feature",properties:t.properties},e);d&&l.push(d)}return new o.FeatureGroup(l);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){for(var n,o=[],s=0,r=t.length;s<r;s++)n=e?this.coordsToLatLngs(t[s],e-1,i):(i||this.coordsToLatLng)(t[s]),o.push(n);return o},latLngToCoords:function(t){return t.alt!==i?[t.lng,t.lat,t.alt]:[t.lng,t.lat]},latLngsToCoords:function(t,e,i){for(var n=[],s=0,r=t.length;s<r;s++)n.push(e?o.GeoJSON.latLngsToCoords(t[s],e-1,i):o.GeoJSON.latLngToCoords(t[s]));return!e&&i&&n.push(n[0]),n},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.prototype.toGeoJSON=function(){var t=!o.Polyline._flat(this._latlngs),e=o.GeoJSON.latLngsToCoords(this._latlngs,t?1:0);return o.GeoJSON.getFeature(this,{type:(t?"Multi":"")+"LineString",coordinates:e})},o.Polygon.prototype.toGeoJSON=function(){var t=!o.Polyline._flat(this._latlngs),e=t&&!o.Polyline._flat(this._latlngs[0]),i=o.GeoJSON.latLngsToCoords(this._latlngs,e?2:t?1:0,!0);return t||(i=[i]),o.GeoJSON.getFeature(this,{type:(e?"Multi":"")+"Polygon",coordinates:i})},o.LayerGroup.include({toMultiPoint:function(){var t=[];return this.eachLayer(function(e){t.push(e.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:"MultiPoint",coordinates:t})},toGeoJSON:function(){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint();var e="GeometryCollection"===t,i=[];return this.eachLayer(function(t){if(t.toGeoJSON){var n=t.toGeoJSON();i.push(e?n.geometry:o.GeoJSON.asFeature(n))}}),e?o.GeoJSON.getFeature(this,{geometries:i,type:"GeometryCollection"}):{type:"FeatureCollection",features:i}}}),o.geoJSON=function(t,e){return new o.GeoJSON(t,e)},o.geoJson=o.geoJSON,o.Draggable=o.Evented.extend({options:{clickTolerance:3},statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e,i){this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(o.DomEvent.on(this._dragStartTarget,o.Draggable.START.join(" "),this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(o.Draggable._dragging===this&&this.finishDrag(),o.DomEvent.off(this._dragStartTarget,o.Draggable.START.join(" "),this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!o.DomUtil.hasClass(this._element,"leaflet-zoom-anim")&&!(o.Draggable._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.Draggable._dragging=this,this._preventOutline&&o.DomUtil.preventOutline(this._element),o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(i){if(!i._simulated&&this._enabled){if(i.touches&&i.touches.length>1)return void(this._moved=!0);var n=i.touches&&1===i.touches.length?i.touches[0]:i,s=new o.Point(n.clientX,n.clientY),r=s.subtract(this._startPoint);(r.x||r.y)&&(Math.abs(r.x)+Math.abs(r.y)<this.options.clickTolerance||(o.DomEvent.preventDefault(i),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(r),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,t.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(r),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._lastEvent=i,this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove,this).off(e,o.Draggable.END[t],this._onUp,this);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,o.Draggable._dragging=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({down:this._onDown,dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}o.DomUtil.addClass(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){o.DomUtil.removeClass(this._map._container,"leaflet-grab"),o.DomUtil.removeClass(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDown:function(){this._map._stop()},_onDragStart:function(){var t=this._map;if(this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=o.latLngBounds(this._map.options.maxBounds);this._offsetLimit=o.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),e-this._times[0]>50&&(this._positions.shift(),this._times.shift())}this._map.fire("move",t).fire("drag",t)},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,r=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{var s=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,a=i.easeLinearity,h=s.multiplyBy(a/r),l=h.distanceTo([0,0]),u=Math.min(i.inertiaMaxSpeed,l),c=h.multiplyBy(u/l),d=u/(i.inertiaDeceleration*a),_=c.multiplyBy(-d/2).round();_.x||_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:d,easeLinearity:a,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;"center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),n),o.DomEvent.stop(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=i?Math.ceil(o/i)*i:o,r=t._limitZoom(e+(this._delta>0?s:-s))-e;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,e,i){function n(t){var e;if(o.Browser.pointer){if(!o.Browser.edge||"mouse"===t.pointerType)return;e=o.DomEvent._pointersCount}else e=t.touches.length;if(!(e>1)){var i=Date.now(),n=i-(r||i);a=t.touches?t.touches[0]:t,h=n>0&&n<=l,r=i}}function s(t){if(h&&!a.cancelBubble){if(o.Browser.pointer){if(!o.Browser.edge||"mouse"===t.pointerType)return;var i,n,s={};for(n in a)i=a[n],s[n]=i&&i.bind?i.bind(a):i;a=s}a.type="dblclick",e(a),r=null}}var r,a,h=!1,l=250,u="_leaflet_",c=this._touchstart,d=this._touchend;return t[u+c+i]=n,t[u+d+i]=s,t[u+"dblclick"+i]=e,t.addEventListener(c,n,!1),t.addEventListener(d,s,!1),t.addEventListener("dblclick",e,!1),this},removeDoubleTapListener:function(t,e){var i="_leaflet_",n=t[i+this._touchstart+e],s=t[i+this._touchend+e],r=t[i+"dblclick"+e];return t.removeEventListener(this._touchstart,n,!1),t.removeEventListener(this._touchend,s,!1),o.Browser.edge||t.removeEventListener("dblclick",r,!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",TAG_WHITE_LIST:["INPUT","SELECT","OPTION"],_pointers:{},_pointersCount:0,addPointerListener:function(t,e,i,n){return"touchstart"===e?this._addPointerStart(t,i,n):"touchmove"===e?this._addPointerMove(t,i,n):"touchend"===e&&this._addPointerEnd(t,i,n),this},removePointerListener:function(t,e,i){var n=t["_leaflet_"+e+i];return"touchstart"===e?t.removeEventListener(this.POINTER_DOWN,n,!1):"touchmove"===e?t.removeEventListener(this.POINTER_MOVE,n,!1):"touchend"===e&&(t.removeEventListener(this.POINTER_UP,n,!1),t.removeEventListener(this.POINTER_CANCEL,n,!1)),this},_addPointerStart:function(t,i,n){var s=o.bind(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(this.TAG_WHITE_LIST.indexOf(t.target.tagName)<0))return;o.DomEvent.preventDefault(t)}this._handlePointer(t,i)},this);if(t["_leaflet_touchstart"+n]=s,t.addEventListener(this.POINTER_DOWN,s,!1),!this._pointerDocListener){var r=o.bind(this._globalPointerUp,this);e.documentElement.addEventListener(this.POINTER_DOWN,o.bind(this._globalPointerDown,this),!0),e.documentElement.addEventListener(this.POINTER_MOVE,o.bind(this._globalPointerMove,this),!0),e.documentElement.addEventListener(this.POINTER_UP,r,!0),e.documentElement.addEventListener(this.POINTER_CANCEL,r,!0),this._pointerDocListener=!0}},_globalPointerDown:function(t){this._pointers[t.pointerId]=t,this._pointersCount++},_globalPointerMove:function(t){this._pointers[t.pointerId]&&(this._pointers[t.pointerId]=t)},_globalPointerUp:function(t){delete this._pointers[t.pointerId],this._pointersCount--},_handlePointer:function(t,e){t.touches=[];for(var i in this._pointers)t.touches.push(this._pointers[i]);t.changedTouches=[t],e(t)},_addPointerMove:function(t,e,i){var n=o.bind(function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&this._handlePointer(t,e)},this);t["_leaflet_touchmove"+i]=n,t.addEventListener(this.POINTER_MOVE,n,!1)},_addPointerEnd:function(t,e,i){var n=o.bind(function(t){this._handlePointer(t,e)},this);t["_leaflet_touchend"+i]=n,t.addEventListener(this.POINTER_UP,n,!1),t.addEventListener(this.POINTER_CANCEL,n,!1)}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomUtil.addClass(this._map._container,"leaflet-touch-zoom"),o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomUtil.removeClass(this._map._container,"leaflet-touch-zoom"),o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToContainerPoint(t.touches[0]),s=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(n.add(s)._divideBy(2))),this._startDist=n.distanceTo(s),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest);var a=o.bind(e._move,e,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=o.Util.requestAnimFrame(a,this,!0),o.DomEvent.preventDefault(t)}},_onTouchEnd:function(){return this._moved&&this._zooming?(this._zooming=!1,o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd),void(this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom)))):void(this._zooming=!1)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),o.DomEvent.on(e,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY),
this._simulateEvent("mousemove",e)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_resetState:function(){this._moved=!1},_onMouseDown:function(t){return!(!t.shiftKey||1!==t.which&&1!==t.button)&&(this._resetState(),o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startPoint=this._map.mouseEventToContainerPoint(t),void o.DomEvent.on(e,{contextmenu:o.DomEvent.stop,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this))},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=o.DomUtil.create("div","leaflet-zoom-box",this._container),o.DomUtil.addClass(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new o.Bounds(this._point,this._startPoint),i=e.getSize();o.DomUtil.setPosition(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(o.DomUtil.remove(this._box),o.DomUtil.removeClass(this._container,"leaflet-crosshair")),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,{contextmenu:o.DomEvent.stop,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){setTimeout(o.bind(this._resetState,this),0);var e=new o.LatLngBounds(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanDelta:80}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),o.DomEvent.on(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),o.DomEvent.off(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;e<i;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;e<i;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;e<i;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;e<i;e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;e<i;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;e<i;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i=t.keyCode,n=this._map;if(i in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return;e=this._panKeys[i],t.shiftKey&&(e=o.point(e).multiplyBy(3)),n.panBy(e),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i]);else{if(27!==i)return;n.closePopup()}o.DomEvent.stop(t)}}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),o.DomUtil.addClass(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(t){var e=this._marker,i=e._shadow,n=o.DomUtil.getPosition(e._icon),s=e._map.layerPointToLatLng(n);i&&o.DomUtil.setPosition(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this},remove:function(){return this._map?(o.DomUtil.remove(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,s){var r=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",r,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){o.DomUtil.remove(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var r=o.DomUtil.create("a",i,n);return r.innerHTML=t,r.href="#",r.title=e,r.setAttribute("role","button"),r.setAttribute("aria-label",e),o.DomEvent.on(r,"mousedown dblclick",o.DomEvent.stopPropagation).on(r,"click",o.DomEvent.stop).on(r,"click",s,this).on(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMinZoom())&&o.DomUtil.addClass(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMaxZoom())&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent&&o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(new o.Control.Attribution).addTo(this)}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e,i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t;o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){o.setOptions(this,i),this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this),this._container},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(o.stamp(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(o.DomUtil.addClass(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):o.DomUtil.removeClass(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return o.DomUtil.removeClass(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),o.DomEvent.disableClickPropagation(e),o.Browser.touch||o.DomEvent.disableScrollPropagation(e);var n=this._form=o.DomUtil.create("form",t+"-list");i&&(this._map.on("click",this.collapse,this),o.Browser.android||o.DomEvent.on(e,{mouseenter:this.expand,mouseleave:this.collapse},this));var s=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);s.href="#",s.title="Layers",o.Browser.touch?o.DomEvent.on(s,"click",o.DomEvent.stop).on(s,"click",this.expand,this):o.DomEvent.on(s,"focus",this.expand,this),o.DomEvent.on(n,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),i||this.expand(),this._baseLayersList=o.DomUtil.create("div",t+"-base",n),this._separator=o.DomUtil.create("div",t+"-separator",n),this._overlaysList=o.DomUtil.create("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&o.stamp(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(o.bind(function(t,e){return this.options.sortFunction(t.layer,e.layer,t.name,e.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(!this._container)return this;o.DomUtil.empty(this._baseLayersList),o.DomUtil.empty(this._overlaysList);var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(o.stamp(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var r=e.createElement("span");r.innerHTML=" "+t.name;var a=e.createElement("div");n.appendChild(a),a.appendChild(i),a.appendChild(r);var h=t.overlay?this._overlaysList:this._baseLayersList;return h.appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=[],s=[];this._handlingClick=!0;for(var r=n.length-1;r>=0;r--)t=n[r],e=this._getLayer(t.layerId).layer,i=this._map.hasLayer(e),t.checked&&!i?o.push(e):!t.checked&&i&&s.push(e);for(r=0;r<s.length;r++)this._map.removeLayer(s[r]);for(r=0;r<o.length;r++)this._map.addLayer(o[r]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,e,n=this._form.getElementsByTagName("input"),o=this._map.getZoom(),s=n.length-1;s>=0;s--)t=n[s],e=this._getLayer(t.layerId).layer,t.disabled=e.options.minZoom!==i&&o<e.options.minZoom||e.options.maxZoom!==i&&o>e.options.maxZoom},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)}}(window,document);
//Original Options
/*L.Map.mergeOptions({
  sleep: true,
  sleepTime: 750,
  wakeTime: 750,
  sleepNote: true,
  hoverToWake: true,
  sleepOpacity:.7
});*/
/*   // false if you want an unruly map
    sleep: true,

    // time(ms) until map sleeps on mouseout
    sleepTime: 750,

    // time(ms) until map wakes on mouseover
    wakeTime: 750,

    // defines whether the user is prompted on how to wake map
    sleepNote: true,

    // should hovering wake the map?
    hoverToWake: true,

    // specify a custom message to notify users how to wake
    wakeMessage: ('Click ' + (hoverToWake?' or Hover ' : '') + 'to Wake'),

    // opacity (between 0 and 1) of inactive map
    sleepOpacity: .7
*/
L.Map.mergeOptions({
  sleep: false,
  sleepTime: 750,
  wakeTime: 750,
  sleepNote: false,
  hoverToWake: true,
  sleepOpacity:1,
});
L.Map.Sleep = L.Handler.extend({
  addHooks: function () {
    if (this._map.options.sleepNote == true) {
      this.sleepNote = L.DomUtil.create('p', 'sleep-note', this._map._container);
    };

    this._sleepMap();
    this._enterTimeout = null;
    this._exitTimeout = null;


    var mapStyle = this._map.getContainer().style;
    mapStyle.WebkitTransition += 'opacity .2s';
    mapStyle.MozTransition += 'opacity .2s';

    var noteString = this._map.options.wakeMessage ||
      ('Click ' + (this._map.options.hoverToWake?'or Hover ':'') + 'to Enable Map');
    //var style = this.sleepNote.style;
    var style;
    if( this._map.options.sleepNote == true){
      style = this.sleepNote.style;
      this.sleepNote.appendChild(document.createTextNode( noteString ));
      style.maxWidth = '150px';
      style.transitionDuration = '.2s';
      style.zIndex = 5000;
      style.opacity = '0.9';
      style.margin = 'auto';
      style.textAlign = 'center';
      style.borderRadius = '4px';
      style.top = '50%';
      style.position = 'relative';
      style.padding = '5px';
      style.border = 'solid 2px black';
      style.background = 'white';
      style.boxShadow = 0;
    }
  },

  removeHooks: function () {
    if (!this._map.scrollWheelZoom.enabled()){
      this._map.scrollWheelZoom.enable();
    }
    L.DomUtil.setOpacity( this._map._container, 1);
    L.DomUtil.setOpacity( this.sleepNote, 0);
    this._removeSleepingListeners();
    this._removeAwakeListeners();
  },

  _wakeMap: function () {
    this._stopWaiting();
    this._map.scrollWheelZoom.enable();
    this._map.dragging.enable();
    L.DomUtil.setOpacity( this._map._container, 1);
    if( this._map.options.sleepNote == true){
      this.sleepNote.style.opacity = 0;
    };
    this._addAwakeListeners();
  },

  _sleepMap: function () {
    this._stopWaiting();
    this._map.scrollWheelZoom.disable();
    this._map.dragging.disable();
    L.DomUtil.setOpacity( this._map._container, this._map.options.sleepOpacity);
    if (this._map.options.sleepNote == true) {
      this.sleepNote.style.opacity = 0.9;
    };
    this._addSleepingListeners();
  },

  _wakePending: function () {
    this._map.once('mousedown', this._wakeMap, this);
    if (this._map.options.hoverToWake){
      var self = this;
      this._map.once('mouseout', this._sleepMap, this);
      self._enterTimeout = setTimeout(function(){
          self._map.off('mouseout', self._sleepMap, self);
          self._wakeMap();
      } , self._map.options.wakeTime);
    }
  },

  _sleepPending: function () {
    var self = this;
    self._map.once('mouseover', self._wakeMap, self);
    self._exitTimeout = setTimeout(function(){
        self._map.off('mouseover', self._wakeMap, self);
        self._sleepMap();
    } , self._map.options.sleepTime);
  },

  _addSleepingListeners: function(){
    this._map.once('mouseover', this._wakePending, this);
    if (L.Browser.touch) {
      this._map.once('click', this._wakePending, this);
    }
  },

  _addAwakeListeners: function(){
    this._map.once('mouseout', this._sleepPending, this);
    if (L.Browser.touch) {
      this._map.once('blur', this._sleepPending, this);
    }
  },

  _removeSleepingListeners: function(){
    this._map.options.hoverToWake &&
      this._map.off('mouseover', this._wakePending, this);
    this._map.off('mousedown', this._wakeMap, this);
  },

  _removeAwakeListeners: function(){
    this._map.off('mouseout', this._sleepPending, this);
  },

  _stopWaiting: function () {
    this._removeSleepingListeners();
    this._removeAwakeListeners();
    var self = this;
    if(this._enterTimeout) clearTimeout(self._enterTimeout);
    if(this._exitTimeout) clearTimeout(self._exitTimeout);
    this._enterTimeout = null;
    this._exitTimeout = null;
  }
});

L.Map.addInitHook('addHandler', 'sleep', L.Map.Sleep);


(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["leaflet"], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('leaflet'));
  } else {
    root.L.Control.DefaultExtent = factory(root.L);
  }
}(this, function(L) {

return (function () {
  /* global L */
  'use strict';
  L.Control.DefaultExtent = L.Control.extend({
    options: {
      position: 'topleft',
      text: 'Default Extent',
      title: 'Zoom to default extent',
      className: 'leaflet-control-defaultextent'
    },
    onAdd: function (map) {
      this._map = map;
      return this._initLayout();
    },
    setCenter: function (center) {
      this._center = center;
      return this;
    },
    setZoom: function (zoom) {
      this._zoom = zoom;
      return this;
    },
    _initLayout: function () {
      var container = L.DomUtil.create('div', 'leaflet-bar ' +
        this.options.className);
      this._container = container;
      this._fullExtentButton = this._createExtentButton(container);

      L.DomEvent.disableClickPropagation(container);

      this._map.whenReady(this._whenReady, this);

      return this._container;
    },
    _createExtentButton: function () {
      var link = L.DomUtil.create('a', this.options.className + '-toggle',
        this._container);
      link.href = '#';
      link.innerHTML = this.options.text;
      link.title = this.options.title;

      L.DomEvent
        .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
        .on(link, 'click', L.DomEvent.stop)
        .on(link, 'click', this._zoomToDefault, this);
      return link;
    },
    _whenReady: function () {
      if (!this._center) {
        this._center = this._map.getCenter();
      }
      if (!this._zoom) {
        this._zoom = this._map.getZoom();
      }
      return this;
    },
    _zoomToDefault: function () {
      this._map.setView(this._center, this._zoom);
    }
  });

  L.Map.addInitHook(function () {
    if (this.options.defaultExtentControl) {
      this.addControl(new L.Control.DefaultExtent());
    }
  });

  L.control.defaultExtent = function (options) {
    return new L.Control.DefaultExtent(options);
  };

  return L.Control.DefaultExtent;

}());
;

}));

L.Control.EasyPrint = L.Control.extend({
	options: {
		title: 'Print Map Image',
		position: 'topleft'
	},

	onAdd: function () {
		var container = L.DomUtil.create('div', 'leaflet-control-easyPrint leaflet-bar leaflet-control');

		this.link = L.DomUtil.create('a', 'leaflet-control-easyPrint-button leaflet-bar-part', container);
		this.link.id = "leafletEasyPrint";
		this.link.title = this.options.title;

		L.DomEvent.addListener(this.link, 'click', printPage, this.options);

		return container;
	}

});

L.easyPrint = function(options) {
	return new L.Control.EasyPrint(options);
};

function printPage(){
  alert('Only the map will be exported. Print is in beta. Results may vary.');
	if (this.elementsToHide){
		var htmlElementsToHide = document.querySelectorAll(this.elementsToHide);

		for (var i = 0; i < htmlElementsToHide.length; i++) {
			htmlElementsToHide[i].className = htmlElementsToHide[i].className + ' _epHidden';
		}
	}
	window.print();

	if (this.elementsToHide){
		var htmlElementsToHide = document.querySelectorAll(this.elementsToHide);

		for (var i = 0; i < htmlElementsToHide.length; i++) {
			htmlElementsToHide[i].className = htmlElementsToHide[i].className.replace(' _epHidden','');
		}
	}


}

/*  jQuery.print, version 1.0.3
 *  (c) Sathvik Ponangi, Doers' Guild
 * Licence: CC-By (http://creativecommons.org/licenses/by/3.0/)
 *--------------------------------------------------------------------------*/

(function($) {"use strict";
    // A nice closure for our definitions

    function getjQueryObject(string) {
        // Make string a vaild jQuery thing
        var jqObj = $("");
        try {
            jqObj = $(string).clone();
        } catch(e) {
            jqObj = $("<span />").html(string);
        }
        return jqObj;
    }

    function isNode(o) {
        /* http://stackoverflow.com/a/384380/937891 */
        return !!( typeof Node === "object" ? o instanceof Node : o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string");
    }


    $.print = $.fn.print = function() {
        // Print a given set of elements

        var options, $this, self = this;

        // console.log("Printing", this, arguments);

        if ( self instanceof $) {
            // Get the node if it is a jQuery object
            self = self.get(0);
        }

        if (isNode(self)) {
            // If `this` is a HTML element, i.e. for
            // $(selector).print()
            $this = $(self);
            if (arguments.length > 0) {
                options = arguments[0];
            }
        } else {
            if (arguments.length > 0) {
                // $.print(selector,options)
                $this = $(arguments[0]);
                if (isNode($this[0])) {
                    if (arguments.length > 1) {
                        options = arguments[1];
                    }
                } else {
                    // $.print(options)
                    options = arguments[0];
                    $this = $("html");
                }
            } else {
                // $.print()
                $this = $("html");
            }
        }

        // Default options
        var defaults = {
            globalStyles : true,
            mediaPrint : false,
            stylesheet : null,
            noPrintSelector : ".no-print",
            iframe : true,
            append : null,
            prepend : null
        };
        // Merge with user-options
        options = $.extend({}, defaults, (options || {}));

        var $styles = $("");
        if (options.globalStyles) {
            // Apply the stlyes from the current sheet to the printed page
            $styles = $("style, link, meta, title");
        } else if (options.mediaPrint) {
            // Apply the media-print stylesheet
            $styles = $("link[media=print]");
        }
        if (options.stylesheet) {
            // Add a custom stylesheet if given
            $styles = $.merge($styles, $('<link rel="stylesheet" href="' + options.stylesheet + '">'));
        }

        // Create a copy of the element to print
        var copy = $this.clone();
        // Wrap it in a span to get the HTML markup string
        copy = $("<span/>").append(copy);
        // Remove unwanted elements
        copy.find(options.noPrintSelector).remove();
        // Add in the styles
        copy.append($styles.clone());
        // Appedned content
        copy.append(getjQueryObject(options.append));
        // Prepended content
        copy.prepend(getjQueryObject(options.prepend));
        // Get the HTML markup string
        var content = copy.html();
        // Destroy the copy
        copy.remove();

        var w, wdoc;
        if (options.iframe) {
            // Use an iframe for printing
            try {
                var $iframe = $(options.iframe + "");
                var iframeCount = $iframe.length;
                if (iframeCount === 0) {
                    // Create a new iFrame if none is given
                    $iframe = $('<iframe height="0" width="0" border="0" wmode="Opaque"/>').prependTo('body').css({
                        "position" : "absolute",
                        "top" : -999,
                        "left" : -999
                    });
                }
                w = $iframe.get(0);
                w = w.contentWindow || w.contentDocument || w;
                wdoc = w.document || w.contentDocument || w;
                wdoc.open();
                wdoc.write(content);
                wdoc.close();
                setTimeout(function() {
                    // Fix for IE : Allow it to render the iframe
                    w.focus();
                    w.print();
                    setTimeout(function() {
                        // Fix for IE
                        if (iframeCount === 0) {
                            // Destroy the iframe if created here
                            $iframe.remove();
                        }
                    }, 100);
                }, 250);
            } catch (e) {
                // Use the pop-up method if iframe fails for some reason
                console.error("Failed to print from iframe", e.stack, e.message);
                w = window.open();
                w.document.write(content);
                w.document.close();
                w.focus();
                w.print();
                w.close();
            }
        } else {
            // Use a new window for printing
            w = window.open();
            w.document.write(content);
            w.document.close();
            w.focus();
            w.print();
            w.close();
        }
        return this;
    };

})(jQuery);

/*! Version: 0.49.0
Copyright (c) 2016 Dominik Moritz */

!function(a,b){"function"==typeof define&&define.amd?define(["leaflet"],a):"object"==typeof exports&&("undefined"!=typeof b&&b.L?module.exports=a(L):module.exports=a(require("leaflet"))),"undefined"!=typeof b&&b.L&&(b.L.Locate=a(L))}(function(a){return a.Control.Locate=a.Control.extend({options:{position:"topleft",layer:void 0,drawCircle:!0,follow:!1,stopFollowingOnDrag:!1,remainActive:!1,markerClass:a.circleMarker,circleStyle:{color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:2,opacity:.5},markerStyle:{color:"#136AEC",fillColor:"#2A93EE",fillOpacity:.7,weight:2,opacity:.9,radius:5},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",iconElementTag:"span",circlePadding:[0,0],metric:!0,onLocationError:function(a){alert(a.message)},onLocationOutsideMapBounds:function(a){a.stop(),alert(a.options.strings.outsideMapBoundsMsg)},setView:!0,keepCurrentZoomLevel:!1,showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0}},initialize:function(b){a.Map.addInitHook(function(){this.options.locateControl&&this.addControl(this)});for(var c in b)"object"==typeof this.options[c]?a.extend(this.options[c],b[c]):this.options[c]=b[c];a.extend(this.options.locateOptions,{setView:!1})},_activate:function(){this.options.setView&&(this._locateOnNextLocationFound=!0),this._active||this._map.locate(this.options.locateOptions),this._active=!0,this.options.follow&&this._startFollowing(this._map)},_deactivate:function(){this._map.stopLocate(),this._map.off("dragstart",this._stopFollowing,this),this.options.follow&&this._following&&this._stopFollowing(this._map)},drawMarker:function(b){void 0===this._event.accuracy&&(this._event.accuracy=0);var c=this._event.accuracy;this._locateOnNextLocationFound&&(this._isOutsideMapBounds()?this.options.onLocationOutsideMapBounds(this):this.options.keepCurrentZoomLevel?b.panTo([this._event.latitude,this._event.longitude]):b.fitBounds(this._event.bounds,{padding:this.options.circlePadding,maxZoom:this.options.keepCurrentZoomLevel?b.getZoom():this.options.locateOptions.maxZoom}),this._locateOnNextLocationFound=!1);var d,e;if(this.options.drawCircle)if(d=this._following?this.options.followCircleStyle:this.options.circleStyle,this._circle){this._circle.setLatLng(this._event.latlng).setRadius(c);for(e in d)this._circle.options[e]=d[e]}else this._circle=a.circle(this._event.latlng,c,d).addTo(this._layer);var f,g;this.options.metric?(f=c.toFixed(0),g=this.options.strings.metersUnit):(f=(3.2808399*c).toFixed(0),g=this.options.strings.feetUnit);var h;h=this._following?this.options.followMarkerStyle:this.options.markerStyle,this._marker?this.updateMarker(this._event.latlng,h):this._marker=this.createMarker(this._event.latlng,h).addTo(this._layer);var i=this.options.strings.popup;this.options.showPopup&&i&&this._marker.bindPopup(a.Util.template(i,{distance:f,unit:g}))._popup.setLatLng(this._event.latlng),this._toggleContainerStyle()},createMarker:function(a,b){return this.options.markerClass(a,b)},updateMarker:function(a,b){this._marker.setLatLng(a);for(var c in b)this._marker.options[c]=b[c]},removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},onAdd:function(b){var c=a.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._layer=this.options.layer||new a.LayerGroup,this._layer.addTo(b),this._event=void 0;var d={};return a.extend(d,this.options.markerStyle,this.options.followMarkerStyle),this.options.followMarkerStyle=d,d={},a.extend(d,this.options.circleStyle,this.options.followCircleStyle),this.options.followCircleStyle=d,this._link=a.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",c),this._link.href="#",this._link.title=this.options.strings.title,this._icon=a.DomUtil.create(this.options.iconElementTag,this.options.icon,this._link),a.DomEvent.on(this._link,"click",a.DomEvent.stopPropagation).on(this._link,"click",a.DomEvent.preventDefault).on(this._link,"click",function(){var a=void 0===this._event||this._map.getBounds().contains(this._event.latlng)||!this.options.setView||this._isOutsideMapBounds();!this.options.remainActive&&this._active&&a?this.stop():this.start()},this).on(this._link,"dblclick",a.DomEvent.stopPropagation),this._resetVariables(),this.bindEvents(b),c},bindEvents:function(a){a.on("locationfound",this._onLocationFound,this),a.on("locationerror",this._onLocationError,this),a.on("unload",this.stop,this)},start:function(){this._activate(),this._event?this.drawMarker(this._map):this._setClasses("requesting")},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this.removeMarker()},_onLocationError:function(a){3==a.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(a))},_onLocationFound:function(a){this._event&&this._event.latlng.lat===a.latlng.lat&&this._event.latlng.lng===a.latlng.lng&&this._event.accuracy===a.accuracy||this._active&&(this._event=a,this.options.follow&&this._following&&(this._locateOnNextLocationFound=!0),this.drawMarker(this._map))},_startFollowing:function(){this._map.fire("startfollowing",this),this._following=!0,this.options.stopFollowingOnDrag&&this._map.on("dragstart",this._stopFollowing,this)},_stopFollowing:function(){this._map.fire("stopfollowing",this),this._following=!1,this.options.stopFollowingOnDrag&&this._map.off("dragstart",this._stopFollowing,this),this._toggleContainerStyle()},_isOutsideMapBounds:function(){return void 0===this._event?!1:this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_toggleContainerStyle:function(){this._container&&(this._following?this._setClasses("following"):this._setClasses("active"))},_setClasses:function(b){"requesting"==b?(a.DomUtil.removeClasses(this._container,"active following"),a.DomUtil.addClasses(this._container,"requesting"),a.DomUtil.removeClasses(this._icon,this.options.icon),a.DomUtil.addClasses(this._icon,this.options.iconLoading)):"active"==b?(a.DomUtil.removeClasses(this._container,"requesting following"),a.DomUtil.addClasses(this._container,"active"),a.DomUtil.removeClasses(this._icon,this.options.iconLoading),a.DomUtil.addClasses(this._icon,this.options.icon)):"following"==b&&(a.DomUtil.removeClasses(this._container,"requesting"),a.DomUtil.addClasses(this._container,"active following"),a.DomUtil.removeClasses(this._icon,this.options.iconLoading),a.DomUtil.addClasses(this._icon,this.options.icon))},_cleanClasses:function(){a.DomUtil.removeClass(this._container,"requesting"),a.DomUtil.removeClass(this._container,"active"),a.DomUtil.removeClass(this._container,"following"),a.DomUtil.removeClasses(this._icon,this.options.iconLoading),a.DomUtil.addClasses(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._locateOnNextLocationFound=this.options.setView,this._following=!1}}),a.control.locate=function(b){return new a.Control.Locate(b)},function(){var b=function(b,c,d){d=d.split(" "),d.forEach(function(d){a.DomUtil[b].call(this,c,d)})};a.DomUtil.addClasses=function(a,c){b("addClass",a,c)},a.DomUtil.removeClasses=function(a,c){b("removeClass",a,c)}}(),a.Control.Locate},window);
//# sourceMappingURL=L.Control.Locate.min.js.map
/*
  Leaflet.AwesomeMarkers, a plugin that adds colorful iconic markers for Leaflet, based on the Font Awesome icons
  (c) 2012-2013, Lennard Voogdt

  http://leafletjs.com
  https://github.com/lvoogdt
*//*global L*/(function(e,t,n){"use strict";L.AwesomeMarkers={};L.AwesomeMarkers.version="2.0.1";L.AwesomeMarkers.Icon=L.Icon.extend({options:{iconSize:[35,45],iconAnchor:[17,42],popupAnchor:[1,-32],shadowAnchor:[10,12],shadowSize:[36,16],className:"awesome-marker",prefix:"glyphicon",spinClass:"fa-spin",icon:"home",markerColor:"blue",iconColor:"white"},initialize:function(e){e=L.Util.setOptions(this,e)},createIcon:function(){var e=t.createElement("div"),n=this.options;n.icon&&(e.innerHTML=this._createInner());n.bgPos&&(e.style.backgroundPosition=-n.bgPos.x+"px "+ -n.bgPos.y+"px");this._setIconStyles(e,"icon-"+n.markerColor);return e},_createInner:function(){var e,t="",n="",r="",i=this.options;i.icon.slice(0,i.prefix.length+1)===i.prefix+"-"?e=i.icon:e=i.prefix+"-"+i.icon;i.spin&&typeof i.spinClass=="string"&&(t=i.spinClass);i.iconColor&&(i.iconColor==="white"||i.iconColor==="black"?n="icon-"+i.iconColor:r="style='color: "+i.iconColor+"' ");return"<i "+r+"class='"+i.prefix+" "+e+" "+t+" "+n+"'></i>"},_setIconStyles:function(e,t){var n=this.options,r=L.point(n[t==="shadow"?"shadowSize":"iconSize"]),i;t==="shadow"?i=L.point(n.shadowAnchor||n.iconAnchor):i=L.point(n.iconAnchor);!i&&r&&(i=r.divideBy(2,!0));e.className="awesome-marker-"+t+" "+n.className;if(i){e.style.marginLeft=-i.x+"px";e.style.marginTop=-i.y+"px"}if(r){e.style.width=r.x+"px";e.style.height=r.y+"px"}},createShadow:function(){var e=t.createElement("div");this._setIconStyles(e,"shadow");return e}});L.AwesomeMarkers.icon=function(e){return new L.AwesomeMarkers.Icon(e)}})(this,document);

!function(a){var b=function(){var b=a.documentMode;return"onhashchange"in a&&(void 0===b||b>7)}();L.Hash=function(a){this.onHashChange=L.Util.bind(this.onHashChange,this),a&&this.init(a)},L.Hash.parseHash=function(a){0===a.indexOf("#")&&(a=a.substr(1));var b=a.split("/");if(3==b.length){var c=parseInt(b[0],10),d=parseFloat(b[1]),e=parseFloat(b[2]);return!(isNaN(c)||isNaN(d)||isNaN(e))&&{center:new L.LatLng(d,e),zoom:c}}return!1},L.Hash.formatHash=function(a){var b=a.getCenter(),c=a.getZoom(),d=Math.max(0,Math.ceil(Math.log(c)/Math.LN2));return"#"+[c,b.lat.toFixed(d),b.lng.toFixed(d)].join("/")},L.Hash.prototype={map:null,lastHash:null,parseHash:L.Hash.parseHash,formatHash:L.Hash.formatHash,init:function(a){this.map=a,this.lastHash=null,this.onHashChange(),this.isListening||this.startListening()},removeFrom:function(a){this.changeTimeout&&clearTimeout(this.changeTimeout),this.isListening&&this.stopListening(),this.map=null},onMapMove:function(){if(this.movingMap||!this.map._loaded)return!1;var a=this.formatHash(this.map);this.lastHash!=a&&(location.replace(a),this.lastHash=a)},movingMap:!1,update:function(){var a=location.hash;if(a!==this.lastHash){var b=this.parseHash(a);b?(this.movingMap=!0,this.map.setView(b.center,b.zoom),this.movingMap=!1):this.onMapMove(this.map)}},changeDefer:100,changeTimeout:null,onHashChange:function(){if(!this.changeTimeout){var a=this;this.changeTimeout=setTimeout(function(){a.update(),a.changeTimeout=null},this.changeDefer)}},isListening:!1,hashChangeInterval:null,startListening:function(){this.map.on("moveend",this.onMapMove,this),b?L.DomEvent.addListener(a,"hashchange",this.onHashChange):(clearInterval(this.hashChangeInterval),this.hashChangeInterval=setInterval(this.onHashChange,50)),this.isListening=!0},stopListening:function(){this.map.off("moveend",this.onMapMove,this),b?L.DomEvent.removeListener(a,"hashchange",this.onHashChange):clearInterval(this.hashChangeInterval),this.isListening=!1}},L.hash=function(a){return new L.Hash(a)},L.Map.prototype.addHash=function(){this._hash=L.hash(this)},L.Map.prototype.removeHash=function(){this._hash.removeFrom()}}(window);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.omnivore=e()}}(function(){var e;return function r(e,n,t){function o(u,a){if(!n[u]){if(!e[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(n){var r=e[u][1][n];return o(r?r:n)},c,c.exports,r,e,n,t)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(e,n){function r(e,n){"addData"in e&&e.addData(n),"setGeoJSON"in e&&e.setGeoJSON(n)}function t(e,n,t){var o=t||L.geoJson();return m(e,function(e,n){return e?o.fire("error",{error:e}):(r(o,JSON.parse(n.responseText)),void o.fire("ready"))}),o}function o(e,n,r){function t(e,r){return e?o.fire("error",{error:e}):(c(r.responseText,n,o),void o.fire("ready"))}var o=r||L.geoJson();return m(e,t),o}function i(e,n,r){function t(e,r){function t(){i=!0}var i;return e?o.fire("error",{error:e}):(o.on("error",t),l(r.responseText,n,o),o.off("error",t),void(i||o.fire("ready")))}var o=r||L.geoJson();return m(e,t),o}function u(e,n,r){function t(e,r){function t(){i=!0}var i;return e?o.fire("error",{error:e}):(o.on("error",t),p(r.responseXML||r.responseText,n,o),o.off("error",t),void(i||o.fire("ready")))}var o=r||L.geoJson();return m(e,t),o}function a(e,n,r){function t(e,r){function t(){i=!0}var i;return e?o.fire("error",{error:e}):(o.on("error",t),d(r.responseXML||r.responseText,n,o),o.off("error",t),void(i||o.fire("ready")))}var o=r||L.geoJson();return m(e,t),o}function s(e,n,r){function t(e,r){return e?o.fire("error",{error:e}):(h(r.responseText,n,o),void o.fire("ready"))}var o=r||L.geoJson();return m(e,t),o}function f(e,n,r){function t(e,r){return e?o.fire("error",{error:e}):(g(r.responseText,n,o),void o.fire("ready"))}var o=r||L.geoJson();return m(e,t),o}function c(e,n,t){var o="string"==typeof e?JSON.parse(e):e;t=t||L.geoJson();for(var i in o.objects){var u=E.feature(o,o.objects[i]);u.features?r(t,u.features):r(t,u)}return t}function l(e,n,t){function o(e,n){return e?t.fire("error",{error:e}):void r(t,n)}return t=t||L.geoJson(),n=n||{},y.csv2geojson(e,n,o),t}function p(e,n,t){var o=v(e);if(!o)return t.fire("error",{error:"Could not parse GPX"});t=t||L.geoJson();var i=S.gpx(o);return r(t,i),t}function d(e,n,t){var o=v(e);if(!o)return t.fire("error",{error:"Could not parse KML"});t=t||L.geoJson();var i=S.kml(o);return r(t,i),t}function g(e,n,t){t=t||L.geoJson(),n=n||{};for(var o=x.decode(e,n.precision),i={type:"LineString",coordinates:[]},u=0;u<o.length;u++)i.coordinates[u]=[o[u][1],o[u][0]];return r(t,i),t}function h(e,n,t){t=t||L.geoJson();var o=w(e);return r(t,o),t}function v(e){return"string"==typeof e?(new DOMParser).parseFromString(e,"text/xml"):e}var m=e("corslite"),y=e("csv2geojson"),w=e("wellknown"),x=e("polyline"),E=e("topojson/topojson.js"),S=e("togeojson");n.exports.polyline=f,n.exports.polyline.parse=g,n.exports.geojson=t,n.exports.topojson=o,n.exports.topojson.parse=c,n.exports.csv=i,n.exports.csv.parse=l,n.exports.gpx=u,n.exports.gpx.parse=p,n.exports.kml=a,n.exports.kml.parse=d,n.exports.wkt=s,n.exports.wkt.parse=h},{corslite:5,csv2geojson:6,polyline:9,togeojson:10,"topojson/topojson.js":11,wellknown:12}],2:[function(){},{}],3:[function(e,n){n.exports=e(2)},{"/Users/tmcw/src/leaflet-omnivore/node_modules/browserify/lib/_empty.js":2}],4:[function(e,n){function r(){}var t=n.exports={};t.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,n="undefined"!=typeof window&&window.MutationObserver,r="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var t=[];if(n){var o=document.createElement("div"),i=new MutationObserver(function(){var e=t.slice();t.length=0,e.forEach(function(e){e()})});return i.observe(o,{attributes:!0}),function(e){t.length||o.setAttribute("yes","no"),t.push(e)}}return r?(window.addEventListener("message",function(e){var n=e.source;if((n===window||null===n)&&"process-tick"===e.data&&(e.stopPropagation(),t.length>0)){var r=t.shift();r()}},!0),function(e){t.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),t.title="browser",t.browser=!0,t.env={},t.argv=[],t.on=r,t.addListener=r,t.once=r,t.off=r,t.removeListener=r,t.removeAllListeners=r,t.emit=r,t.binding=function(){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(){throw new Error("process.chdir is not supported")}},{}],5:[function(e,n){function r(e,n,r){function t(e){return e>=200&&300>e||304===e}function o(){void 0===a.status||t(a.status)?n.call(a,null,a):n.call(a,a,null)}var i=!1;if("undefined"==typeof window.XMLHttpRequest)return n(Error("Browser not supported"));if("undefined"==typeof r){var u=e.match(/^\s*https?:\/\/[^\/]*/);r=u&&u[0]!==location.protocol+"//"+location.domain+(location.port?":"+location.port:"")}var a=new window.XMLHttpRequest;if(r&&!("withCredentials"in a)){a=new window.XDomainRequest;var s=n;n=function(){if(i)s.apply(this,arguments);else{var e=this,n=arguments;setTimeout(function(){s.apply(e,n)},0)}}}return"onload"in a?a.onload=o:a.onreadystatechange=function(){4===a.readyState&&o()},a.onerror=function(e){n.call(this,e||!0,null),n=function(){}},a.onprogress=function(){},a.ontimeout=function(e){n.call(this,e,null),n=function(){}},a.onabort=function(e){n.call(this,e,null),n=function(){}},a.open("GET",e,!0),a.send(null),i=!0,a}"undefined"!=typeof n&&(n.exports=r)},{}],6:[function(e,n){function r(e){return!!e.match(/(Lat)(itude)?/gi)}function t(e){return!!e.match(/(L)(on|ng)(gitude)?/i)}function o(e){return"object"==typeof e?Object.keys(e).length:0}function i(e){var n=[",",";","	","|"],r=[];return n.forEach(function(n){var t=c(n).parse(e);if(t.length>=1){for(var i=o(t[0]),u=0;u<t.length;u++)if(o(t[u])!==i)return;r.push({delimiter:n,arity:Object.keys(t[0]).length})}}),r.length?r.sort(function(e,n){return n.arity-e.arity})[0].delimiter:null}function u(e){var n=i(e);return n?c(n).parse(e):null}function a(e,n,o){o||(o=n,n={}),n.delimiter=n.delimiter||",";var u=n.latfield||"",a=n.lonfield||"",s=[],f={type:"FeatureCollection",features:s};if("auto"===n.delimiter&&"string"==typeof e&&(n.delimiter=i(e),!n.delimiter))return o({type:"Error",message:"Could not autodetect delimiter"});var p="string"==typeof e?c(n.delimiter).parse(e):e;if(!p.length)return o(null,f);if(!u||!a){for(var d in p[0])!u&&r(d)&&(u=d),!a&&t(d)&&(a=d);if(!u||!a){var g=[];for(var h in p[0])g.push(h);return o({type:"Error",message:"Latitude and longitude fields not present",data:p,fields:g})}}for(var v=[],m=0;m<p.length;m++)if(void 0!==p[m][a]&&void 0!==p[m][a]){var y,w,x,L=p[m][a],E=p[m][u];x=l(L,"EW"),x&&(L=x),x=l(E,"NS"),x&&(E=x),y=parseFloat(L),w=parseFloat(E),isNaN(y)||isNaN(w)?v.push({message:"A row contained an invalid value for latitude or longitude",row:p[m]}):(n.includeLatLon||(delete p[m][a],delete p[m][u]),s.push({type:"Feature",properties:p[m],geometry:{type:"Point",coordinates:[parseFloat(y),parseFloat(w)]}}))}o(v.length?v:null,f)}function s(e){for(var n=e.features,r={type:"Feature",geometry:{type:"LineString",coordinates:[]}},t=0;t<n.length;t++)r.geometry.coordinates.push(n[t].geometry.coordinates);return r.properties=n[0].properties,{type:"FeatureCollection",features:[r]}}function f(e){for(var n=e.features,r={type:"Feature",geometry:{type:"Polygon",coordinates:[[]]}},t=0;t<n.length;t++)r.geometry.coordinates[0].push(n[t].geometry.coordinates);return r.properties=n[0].properties,{type:"FeatureCollection",features:[r]}}var c=e("dsv"),l=e("sexagesimal");n.exports={isLon:t,isLat:r,csv:c.csv.parse,tsv:c.tsv.parse,dsv:c,auto:u,csv2geojson:a,toLine:s,toPolygon:f}},{dsv:7,sexagesimal:8}],7:[function(e,n){e("fs");n.exports=new Function('dsv.version = "0.0.3";\n\ndsv.tsv = dsv("\\t");\ndsv.csv = dsv(",");\n\nfunction dsv(delimiter) {\n  var dsv = {},\n      reFormat = new RegExp("[\\"" + delimiter + "\\n]"),\n      delimiterCode = delimiter.charCodeAt(0);\n\n  dsv.parse = function(text, f) {\n    var o;\n    return dsv.parseRows(text, function(row, i) {\n      if (o) return o(row, i - 1);\n      var a = new Function("d", "return {" + row.map(function(name, i) {\n        return JSON.stringify(name) + ": d[" + i + "]";\n      }).join(",") + "}");\n      o = f ? function(row, i) { return f(a(row), i); } : a;\n    });\n  };\n\n  dsv.parseRows = function(text, f) {\n    var EOL = {}, // sentinel value for end-of-line\n        EOF = {}, // sentinel value for end-of-file\n        rows = [], // output rows\n        N = text.length,\n        I = 0, // current character index\n        n = 0, // the current line number\n        t, // the current token\n        eol; // is the current token followed by EOL?\n\n    function token() {\n      if (I >= N) return EOF; // special case: end of file\n      if (eol) return eol = false, EOL; // special case: end of line\n\n      // special case: quotes\n      var j = I;\n      if (text.charCodeAt(j) === 34) {\n        var i = j;\n        while (i++ < N) {\n          if (text.charCodeAt(i) === 34) {\n            if (text.charCodeAt(i + 1) !== 34) break;\n            ++i;\n          }\n        }\n        I = i + 2;\n        var c = text.charCodeAt(i + 1);\n        if (c === 13) {\n          eol = true;\n          if (text.charCodeAt(i + 2) === 10) ++I;\n        } else if (c === 10) {\n          eol = true;\n        }\n        return text.substring(j + 1, i).replace(/""/g, "\\"");\n      }\n\n      // common case: find next delimiter or newline\n      while (I < N) {\n        var c = text.charCodeAt(I++), k = 1;\n        if (c === 10) eol = true; // \\n\n        else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \\r|\\r\\n\n        else if (c !== delimiterCode) continue;\n        return text.substring(j, I - k);\n      }\n\n      // special case: last token before EOF\n      return text.substring(j);\n    }\n\n    while ((t = token()) !== EOF) {\n      var a = [];\n      while (t !== EOL && t !== EOF) {\n        a.push(t);\n        t = token();\n      }\n      if (f && !(a = f(a, n++))) continue;\n      rows.push(a);\n    }\n\n    return rows;\n  };\n\n  dsv.format = function(rows) {\n    if (Array.isArray(rows[0])) return dsv.formatRows(rows); // deprecated; use formatRows\n    var fieldSet = {}, fields = [];\n\n    // Compute unique fields in order of discovery.\n    rows.forEach(function(row) {\n      for (var field in row) {\n        if (!(field in fieldSet)) {\n          fields.push(fieldSet[field] = field);\n        }\n      }\n    });\n\n    return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {\n      return fields.map(function(field) {\n        return formatValue(row[field]);\n      }).join(delimiter);\n    })).join("\\n");\n  };\n\n  dsv.formatRows = function(rows) {\n    return rows.map(formatRow).join("\\n");\n  };\n\n  function formatRow(row) {\n    return row.map(formatValue).join(delimiter);\n  }\n\n  function formatValue(text) {\n    return reFormat.test(text) ? "\\"" + text.replace(/\\"/g, "\\"\\"") + "\\"" : text;\n  }\n\n  return dsv;\n}\n;return dsv')()},{fs:2}],8:[function(e,n){n.exports=function(e,n){if(n||(n="NSEW"),"string"!=typeof e)return null;var r=/^([0-9.]+)°? *(?:([0-9.]+)['’′‘] *)?(?:([0-9.]+)(?:''|"|”|″) *)?([NSEW])?/,t=e.match(r);return t?t[4]&&-1===n.indexOf(t[4])?null:((t[1]?parseFloat(t[1]):0)+(t[2]?parseFloat(t[2])/60:0)+(t[3]?parseFloat(t[3])/3600:0))*(t[4]&&"S"===t[4]||"W"===t[4]?-1:1):null}},{}],9:[function(e,n){function r(e,n){e=Math.round(e*n),e<<=1,0>e&&(e=~e);for(var r="";e>=32;)r+=String.fromCharCode((32|31&e)+63),e>>=5;return r+=String.fromCharCode(e+63)}var t={};t.decode=function(e,n){for(var r,t,o=0,i=0,u=0,a=[],s=0,f=0,c=null,l=Math.pow(10,n||5);o<e.length;){c=null,s=0,f=0;do c=e.charCodeAt(o++)-63,f|=(31&c)<<s,s+=5;while(c>=32);r=1&f?~(f>>1):f>>1,s=f=0;do c=e.charCodeAt(o++)-63,f|=(31&c)<<s,s+=5;while(c>=32);t=1&f?~(f>>1):f>>1,i+=r,u+=t,a.push([i/l,u/l])}return a},t.encode=function(e,n){if(!e.length)return"";for(var t=Math.pow(10,n||5),o=r(e[0][0],t)+r(e[0][1],t),i=1;i<e.length;i++){var u=e[i],a=e[i-1];o+=r(u[0]-a[0],t),o+=r(u[1]-a[1],t)}return o},void 0!==typeof n&&(n.exports=t)},{}],10:[function(e,n,r){(function(t){toGeoJSON=function(){"use strict";function n(e){if(!e||!e.length)return 0;for(var n=0,r=0;n<e.length;n++)r=(r<<5)-r+e.charCodeAt(n)|0;return r}function o(e,n){return e.getElementsByTagName(n)}function i(e,n){return e.getAttribute(n)}function u(e,n){return parseFloat(i(e,n))}function a(e,n){var r=o(e,n);return r.length?r[0]:null}function s(e){return e.normalize&&e.normalize(),e}function f(e){for(var n=0,r=[];n<e.length;n++)r[n]=parseFloat(e[n]);return r}function c(e){var n={};for(var r in e)e[r]&&(n[r]=e[r]);return n}function l(e){return e&&s(e),e&&e.firstChild&&e.firstChild.nodeValue||""}function p(e){return f(e.replace(y,"").split(","))}function d(e){for(var n=e.replace(w,"").split(x),r=[],t=0;t<n.length;t++)r.push(p(n[t]));return r}function g(e){var n=[u(e,"lon"),u(e,"lat")],r=a(e,"ele"),t=a(e,"time");return r&&n.push(parseFloat(l(r))),{coordinates:n,time:t?l(t):null}}function h(){return{type:"FeatureCollection",features:[]}}function v(e){return void 0!==e.xml?e.xml:m.serializeToString(e)}var m,y=/\s*/g,w=/^\s*|\s*$/g,x=/\s+/;"undefined"!=typeof XMLSerializer?m=new XMLSerializer:"object"!=typeof r||"object"!=typeof t||t.browser||(m=new(e("xmldom").XMLSerializer));var L={kml:function(e){function r(e){var n,r;return e=e||"","#"===e.substr(0,1)&&(e=e.substr(1)),(6===e.length||3===e.length)&&(n=e),8===e.length&&(r=parseInt(e.substr(0,2),16)/255,n=e.substr(2)),[n,isNaN(r)?void 0:r]}function t(e){return f(e.split(" "))}function u(e){var n=o(e,"coord","gx"),r=[],i=[];0===n.length&&(n=o(e,"gx:coord"));for(var u=0;u<n.length;u++)r.push(t(l(n[u])));for(var a=o(e,"when"),u=0;u<a.length;u++)i.push(l(a[u]));return{coords:r,times:i}}function s(e){var n,r,t,i,f,c=[],g=[];if(a(e,"MultiGeometry"))return s(a(e,"MultiGeometry"));if(a(e,"MultiTrack"))return s(a(e,"MultiTrack"));if(a(e,"gx:MultiTrack"))return s(a(e,"gx:MultiTrack"));for(t=0;t<y.length;t++)if(r=o(e,y[t]))for(i=0;i<r.length;i++)if(n=r[i],"Point"==y[t])c.push({type:"Point",coordinates:p(l(a(n,"coordinates")))});else if("LineString"==y[t])c.push({type:"LineString",coordinates:d(l(a(n,"coordinates")))});else if("Polygon"==y[t]){var h=o(n,"LinearRing"),v=[];for(f=0;f<h.length;f++)v.push(d(l(a(h[f],"coordinates"))));c.push({type:"Polygon",coordinates:v})}else if("Track"==y[t]||"gx:Track"==y[t]){var m=u(n);c.push({type:"LineString",coordinates:m.coords}),m.times.length&&g.push(m.times)}return{geoms:c,coordTimes:g}}function c(e){var n,t=s(e),u={},f=l(a(e,"name")),c=l(a(e,"styleUrl")),p=l(a(e,"description")),d=a(e,"TimeSpan"),g=a(e,"ExtendedData"),h=a(e,"LineStyle"),v=a(e,"PolyStyle");if(!t.geoms.length)return[];if(f&&(u.name=f),c&&m[c]&&(u.styleUrl=c,u.styleHash=m[c]),p&&(u.description=p),d){var y=l(a(d,"begin")),w=l(a(d,"end"));u.timespan={begin:y,end:w}}if(h){var x=r(l(a(h,"color"))),L=x[0],E=x[1],S=parseFloat(l(a(h,"width")));L&&(u.stroke=L),isNaN(E)||(u["stroke-opacity"]=E),isNaN(S)||(u["stroke-width"]=S)}if(v){var b=r(l(a(v,"color"))),k=b[0],M=b[1],j=l(a(v,"fill")),N=l(a(v,"outline"));k&&(u.fill=k),isNaN(M)||(u["fill-opacity"]=M),j&&(u["fill-opacity"]="1"===j?1:0),N&&(u["stroke-opacity"]="1"===N?1:0)}if(g){var F=o(g,"Data"),P=o(g,"SimpleData");for(n=0;n<F.length;n++)u[F[n].getAttribute("name")]=l(a(F[n],"value"));for(n=0;n<P.length;n++)u[P[n].getAttribute("name")]=l(P[n])}t.coordTimes.length&&(u.coordTimes=1===t.coordTimes.length?t.coordTimes[0]:t.coordTimes);var C={type:"Feature",geometry:1===t.geoms.length?t.geoms[0]:{type:"GeometryCollection",geometries:t.geoms},properties:u};return i(e,"id")&&(C.id=i(e,"id")),[C]}for(var g=h(),m={},y=["Polygon","LineString","Point","Track","gx:Track"],w=o(e,"Placemark"),x=o(e,"Style"),L=0;L<x.length;L++)m["#"+i(x[L],"id")]=n(v(x[L])).toString(16);for(var E=0;E<w.length;E++)g.features=g.features.concat(c(w[E]));return g},gpx:function(e){function n(e,n){var r=o(e,n),t=[],i=[],u=r.length;if(!(2>u)){for(var a=0;u>a;a++){var s=g(r[a]);t.push(s.coordinates),s.time&&i.push(s.time)}return{line:t,times:i}}}function r(e){for(var r,t=o(e,"trkseg"),i=[],a=[],s=0;s<t.length;s++)r=n(t[s],"trkpt"),r.line&&i.push(r.line),r.times.length&&a.push(r.times);if(0!==i.length){var f=u(e);return a.length&&(f.coordTimes=1===i.length?a[0]:a),{type:"Feature",properties:f,geometry:{type:1===i.length?"LineString":"MultiLineString",coordinates:1===i.length?i[0]:i}}}}function t(e){var r=n(e,"rtept");if(r){var t={type:"Feature",properties:u(e),geometry:{type:"LineString",coordinates:r}};return r.times.length&&(t.geometry.times=r.times),t}}function i(e){var n=u(e);return n.sym=l(a(e,"sym")),{type:"Feature",properties:n,geometry:{type:"Point",coordinates:g(e).coordinates}}}function u(e){var n,r=["name","desc","author","copyright","link","time","keywords"],t={};for(n=0;n<r.length;n++)t[r[n]]=l(a(e,r[n]));return c(t)}var s,f,p=o(e,"trk"),d=o(e,"rte"),v=o(e,"wpt"),m=h();for(s=0;s<p.length;s++)f=r(p[s]),f&&m.features.push(f);for(s=0;s<d.length;s++)f=t(d[s]),f&&m.features.push(f);for(s=0;s<v.length;s++)m.features.push(i(v[s]));return m}};return L}(),"undefined"!=typeof n&&(n.exports=toGeoJSON)}).call(this,e("_process"))},{_process:4,xmldom:3}],11:[function(r,t){!function(){function r(e,n){function r(n){var r,t=e.arcs[0>n?~n:n],o=t[0];return e.transform?(r=[0,0],t.forEach(function(e){r[0]+=e[0],r[1]+=e[1]})):r=t[t.length-1],0>n?[r,o]:[o,r]}function t(e,n){for(var r in e){var t=e[r];delete n[t.start],delete t.start,delete t.end,t.forEach(function(e){o[0>e?~e:e]=1}),a.push(t)}}var o={},i={},u={},a=[],s=-1;return n.forEach(function(r,t){var o,i=e.arcs[0>r?~r:r];i.length<3&&!i[1][0]&&!i[1][1]&&(o=n[++s],n[s]=r,n[t]=o)}),n.forEach(function(e){var n,t,o=r(e),a=o[0],s=o[1];if(n=u[a])if(delete u[n.end],n.push(e),n.end=s,t=i[s]){delete i[t.start];var f=t===n?n:n.concat(t);i[f.start=n.start]=u[f.end=t.end]=f}else i[n.start]=u[n.end]=n;else if(n=i[s])if(delete i[n.start],n.unshift(e),n.start=a,t=u[a]){delete u[t.end];var c=t===n?n:t.concat(n);i[c.start=t.start]=u[c.end=n.end]=c}else i[n.start]=u[n.end]=n;else n=[e],i[n.start=a]=u[n.end=s]=n}),t(u,i),t(i,u),n.forEach(function(e){o[0>e?~e:e]||a.push([e])}),a}function o(e,n,t){function o(e){var n=0>e?~e:e;(c[n]||(c[n]=[])).push({i:e,g:f})}function i(e){e.forEach(o)}function u(e){e.forEach(i)}function a(e){"GeometryCollection"===e.type?e.geometries.forEach(a):e.type in l&&(f=e,l[e.type](e.arcs))}var s=[];if(arguments.length>1){var f,c=[],l={LineString:i,MultiLineString:u,Polygon:u,MultiPolygon:function(e){e.forEach(u)}};a(n),c.forEach(arguments.length<3?function(e){s.push(e[0].i)}:function(e){t(e[0].g,e[e.length-1].g)&&s.push(e[0].i)})}else for(var p=0,d=e.arcs.length;d>p;++p)s.push(p);return{type:"MultiLineString",arcs:r(e,s)}}function i(e,t){function o(e){e.forEach(function(n){n.forEach(function(n){(u[n=0>n?~n:n]||(u[n]=[])).push(e)})}),a.push(e)}function i(n){return d(s(e,{type:"Polygon",arcs:[n]}).coordinates[0])>0}var u={},a=[],f=[];return t.forEach(function(e){"Polygon"===e.type?o(e.arcs):"MultiPolygon"===e.type&&e.arcs.forEach(o)}),a.forEach(function(e){if(!e._){var n=[],r=[e];for(e._=1,f.push(n);e=r.pop();)n.push(e),e.forEach(function(e){e.forEach(function(e){u[0>e?~e:e].forEach(function(e){e._||(e._=1,r.push(e))})})})}}),a.forEach(function(e){delete e._}),{type:"MultiPolygon",arcs:f.map(function(t){var o=[];if(t.forEach(function(e){e.forEach(function(e){e.forEach(function(e){u[0>e?~e:e].length<2&&o.push(e)})})}),o=r(e,o),(n=o.length)>1)for(var a,s=i(t[0][0]),f=0;f<n;++f)if(s===i(o[f])){a=o[0],o[0]=o[f],o[f]=a;break}return o})}}function u(e,n){return"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map(function(n){return a(e,n)})}:a(e,n)}function a(e,n){var r={type:"Feature",id:n.id,properties:n.properties||{},geometry:s(e,n)};return null==n.id&&delete r.id,r}function s(e,n){function r(e,n){n.length&&n.pop();for(var r,t=c[0>e?~e:e],o=0,i=t.length;i>o;++o)n.push(r=t[o].slice()),s(r,o);0>e&&f(n,i)}function t(e){return e=e.slice(),s(e,0),e}function o(e){for(var n=[],t=0,o=e.length;o>t;++t)r(e[t],n);return n.length<2&&n.push(n[0].slice()),n}function i(e){for(var n=o(e);n.length<4;)n.push(n[0].slice());return n}function u(e){return e.map(i)}function a(e){var n=e.type;return"GeometryCollection"===n?{type:n,geometries:e.geometries.map(a)}:n in l?{type:n,coordinates:l[n](e)}:null}var s=m(e.transform),c=e.arcs,l={Point:function(e){return t(e.coordinates)},MultiPoint:function(e){return e.coordinates.map(t)},LineString:function(e){return o(e.arcs)},MultiLineString:function(e){return e.arcs.map(o)},Polygon:function(e){return u(e.arcs)},MultiPolygon:function(e){return e.arcs.map(u)}};return a(n)}function f(e,n){for(var r,t=e.length,o=t-n;o<--t;)r=e[o],e[o++]=e[t],e[t]=r}function c(e,n){for(var r=0,t=e.length;t>r;){var o=r+t>>>1;e[o]<n?r=o+1:t=o}return r}function l(e){function n(e,n){e.forEach(function(e){0>e&&(e=~e);var r=o[e];r?r.push(n):o[e]=[n]})}function r(e,r){e.forEach(function(e){n(e,r)})}function t(e,n){"GeometryCollection"===e.type?e.geometries.forEach(function(e){t(e,n)}):e.type in u&&u[e.type](e.arcs,n)}var o={},i=e.map(function(){return[]}),u={LineString:n,MultiLineString:r,Polygon:r,MultiPolygon:function(e,n){e.forEach(function(e){r(e,n)})}};e.forEach(t);for(var a in o)for(var s=o[a],f=s.length,l=0;f>l;++l)for(var p=l+1;f>p;++p){var d,g=s[l],h=s[p];(d=i[g])[a=c(d,h)]!==h&&d.splice(a,0,h),(d=i[h])[a=c(d,g)]!==g&&d.splice(a,0,g)}return i}function p(e,n){function r(e){u.remove(e),e[1][2]=n(e),u.push(e)}var t,o=m(e.transform),i=y(e.transform),u=v(),a=0;for(n||(n=g),e.arcs.forEach(function(e){var r=[];e.forEach(o);for(var i=1,a=e.length-1;a>i;++i)t=e.slice(i-1,i+2),t[1][2]=n(t),r.push(t),u.push(t);e[0][2]=e[a][2]=1/0;for(var i=0,a=r.length;a>i;++i)t=r[i],t.previous=r[i-1],t.next=r[i+1]});t=u.pop();){var s=t.previous,f=t.next;t[1][2]<a?t[1][2]=a:a=t[1][2],s&&(s.next=f,s[2]=t[2],r(s)),f&&(f.previous=s,f[0]=t[0],r(f))}return e.arcs.forEach(function(e){e.forEach(i)}),e}function d(e){for(var n,r=-1,t=e.length,o=e[t-1],i=0;++r<t;)n=o,o=e[r],i+=n[0]*o[1]-n[1]*o[0];return.5*i}function g(e){var n=e[0],r=e[1],t=e[2];return Math.abs((n[0]-t[0])*(r[1]-n[1])-(n[0]-r[0])*(t[1]-n[1]))}function h(e,n){return e[1][2]-n[1][2]}function v(){function e(e,n){for(;n>0;){var r=(n+1>>1)-1,o=t[r];if(h(e,o)>=0)break;t[o._=n]=o,t[e._=n=r]=e}}function n(e,n){for(;;){var r=n+1<<1,i=r-1,u=n,a=t[u];if(o>i&&h(t[i],a)<0&&(a=t[u=i]),o>r&&h(t[r],a)<0&&(a=t[u=r]),u===n)break;t[a._=n]=a,t[e._=n=u]=e}}var r={},t=[],o=0;return r.push=function(n){return e(t[n._=o]=n,o++),o},r.pop=function(){if(!(0>=o)){var e,r=t[0];return--o>0&&(e=t[o],n(t[e._=0]=e,0)),r}},r.remove=function(r){var i,u=r._;if(t[u]===r)return u!==--o&&(i=t[o],(h(i,r)<0?e:n)(t[i._=u]=i,u)),u},r}function m(e){if(!e)return w;var n,r,t=e.scale[0],o=e.scale[1],i=e.translate[0],u=e.translate[1];return function(e,a){a||(n=r=0),e[0]=(n+=e[0])*t+i,e[1]=(r+=e[1])*o+u}}function y(e){if(!e)return w;var n,r,t=e.scale[0],o=e.scale[1],i=e.translate[0],u=e.translate[1];return function(e,a){a||(n=r=0);var s=(e[0]-i)/t|0,f=(e[1]-u)/o|0;e[0]=s-n,e[1]=f-r,n=s,r=f}}function w(){}var x={version:"1.6.8",mesh:function(e){return s(e,o.apply(this,arguments))},meshArcs:o,merge:function(e){return s(e,i.apply(this,arguments))},mergeArcs:i,feature:u,neighbors:l,presimplify:p};"function"==typeof e&&e.amd?e(x):"object"==typeof t&&t.exports?t.exports=x:this.topojson=x}()},{}],12:[function(e,n){function r(e){function n(n){var r=e.substring(m).match(n);return r?(m+=r[0].length,r[0]):null}function r(e){return e&&v.match(/\d+/)&&(e.crs={type:"name",properties:{name:"urn:ogc:def:crs:EPSG::"+v}}),e}function t(){n(/^\s*/)}function i(){t();for(var e,r=0,i=[],u=[i],a=i;e=n(/^(\()/)||n(/^(\))/)||n(/^(\,)/)||n(o);){if("("==e)u.push(a),a=[],u[u.length-1].push(a),r++;else if(")"==e){if(a=u.pop(),!a)return;if(r--,0===r)break}else if(","===e)a=[],u[u.length-1].push(a);else{if(isNaN(parseFloat(e)))return null;a.push(parseFloat(e))}t()}return 0!==r?null:i}function u(){for(var e,r,i=[];r=n(o)||n(/^(\,)/);)","==r?(i.push(e),e=[]):(e||(e=[]),e.push(parseFloat(r))),t();return e&&i.push(e),i.length?i:null}function a(){if(!n(/^(point)/i))return null;if(t(),!n(/^(\()/))return null;var e=u();return e?(t(),n(/^(\))/)?{type:"Point",coordinates:e[0]}:null):null}function s(){if(!n(/^(multipoint)/i))return null;t();var e=i();return e?(t(),{type:"MultiPoint",coordinates:e}):null}function f(){if(!n(/^(multilinestring)/i))return null;t();var e=i();return e?(t(),{type:"MultiLineString",coordinates:e}):null}function c(){if(!n(/^(linestring)/i))return null;if(t(),!n(/^(\()/))return null;var e=u();return e&&n(/^(\))/)?{type:"LineString",coordinates:e}:null}function l(){return n(/^(polygon)/i)?(t(),{type:"Polygon",coordinates:i()}):null}function p(){return n(/^(multipolygon)/i)?(t(),{type:"MultiPolygon",coordinates:i()}):null}function d(){var e,r=[];if(!n(/^(geometrycollection)/i))return null;if(t(),!n(/^(\()/))return null;for(;e=g();)r.push(e),t(),n(/^(\,)/),t();return n(/^(\))/)?{type:"GeometryCollection",geometries:r}:null}function g(){return a()||c()||l()||s()||f()||p()||d()}var h=e.split(";"),e=h.pop(),v=(h.shift()||"").split("=").pop(),m=0;return r(g())}function t(e){function n(e){return 2===e.length?e[0]+" "+e[1]:3===e.length?e[0]+" "+e[1]+" "+e[2]:void 0}function r(e){return e.map(n).join(", ")}function o(e){return e.map(r).map(u).join(", ")}function i(e){return e.map(o).map(u).join(", ")}function u(e){return"("+e+")"}switch("Feature"===e.type&&(e=e.geometry),e.type){case"Point":return"POINT ("+n(e.coordinates)+")";case"LineString":return"LINESTRING ("+r(e.coordinates)+")";case"Polygon":return"POLYGON ("+o(e.coordinates)+")";case"MultiPoint":return"MULTIPOINT ("+r(e.coordinates)+")";case"MultiPolygon":return"MULTIPOLYGON ("+i(e.coordinates)+")";case"MultiLineString":return"MULTILINESTRING ("+o(e.coordinates)+")";case"GeometryCollection":return"GEOMETRYCOLLECTION ("+e.geometries.map(t).join(", ")+")";default:throw new Error("stringify requires a valid GeoJSON Feature or geometry object as input")}}n.exports=r,n.exports.parse=r,n.exports.stringify=t;var o=/^[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/},{}]},{},[1])(1)});
L.Control.Measure = L.Control.extend({
	options: {
		position: 'topleft'
	},

	onAdd: function (map) {
		var className = 'leaflet-control-zoom leaflet-bar leaflet-control',
		    container = L.DomUtil.create('div', className);

		this._createButton('&#8674;', 'Measure', 'leaflet-control-measure leaflet-bar-part leaflet-bar-part-top-and-bottom', container, this._toggleMeasure, this);

		return container;
	},

	_createButton: function (html, title, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		L.DomEvent
			.on(link, 'click', L.DomEvent.stopPropagation)
			.on(link, 'click', L.DomEvent.preventDefault)
			.on(link, 'click', fn, context)
			.on(link, 'dblclick', L.DomEvent.stopPropagation);

		return link;
	},

	_toggleMeasure: function () {
		this._measuring = !this._measuring;

		if(this._measuring) {
			L.DomUtil.addClass(this._container, 'leaflet-control-measure-on');
			this._startMeasuring();
		} else {
			L.DomUtil.removeClass(this._container, 'leaflet-control-measure-on');
			this._stopMeasuring();
		}
	},

	_startMeasuring: function() {
		this._oldCursor = this._map._container.style.cursor;
		this._map._container.style.cursor = 'crosshair';

		this._doubleClickZoom = this._map.doubleClickZoom.enabled();
		this._map.doubleClickZoom.disable();

		L.DomEvent
			.on(this._map, 'mousemove', this._mouseMove, this)
			.on(this._map, 'click', this._mouseClick, this)
			.on(this._map, 'dblclick', this._finishPath, this)
			.on(document, 'keydown', this._onKeyDown, this);

		if(!this._layerPaint) {
			this._layerPaint = L.layerGroup().addTo(this._map);
		}

		if(!this._points) {
			this._points = [];
		}
	},

	_stopMeasuring: function() {
		this._map._container.style.cursor = this._oldCursor;

		L.DomEvent
			.off(document, 'keydown', this._onKeyDown, this)
			.off(this._map, 'mousemove', this._mouseMove, this)
			.off(this._map, 'click', this._mouseClick, this)
			.off(this._map, 'dblclick', this._mouseClick, this);

		if(this._doubleClickZoom) {
			this._map.doubleClickZoom.enable();
		}

		if(this._layerPaint) {
			this._layerPaint.clearLayers();
		}

		this._restartPath();
	},

	_mouseMove: function(e) {
		if(!e.latlng || !this._lastPoint) {
			return;
		}

		if(!this._layerPaintPathTemp) {
			this._layerPaintPathTemp = L.polyline([this._lastPoint, e.latlng], {
				color: 'black',
				weight: 1.5,
				clickable: false,
				dashArray: '6,3'
			}).addTo(this._layerPaint);
		} else {
			this._layerPaintPathTemp.spliceLatLngs(0, 2, this._lastPoint, e.latlng);
		}

		if(this._tooltip) {
			if(!this._distance) {
				this._distance = 0;
			}

			this._updateTooltipPosition(e.latlng);

			var distance = e.latlng.distanceTo(this._lastPoint);
			this._updateTooltipDistance(this._distance + distance, distance);
		}
	},

	_mouseClick: function(e) {
		// Skip if no coordinates
		if(!e.latlng) {
			return;
		}

		// If we have a tooltip, update the distance and create a new tooltip, leaving the old one exactly where it is (i.e. where the user has clicked)
		if(this._lastPoint && this._tooltip) {
			if(!this._distance) {
				this._distance = 0;
			}

			this._updateTooltipPosition(e.latlng);

			var distance = e.latlng.distanceTo(this._lastPoint);
			this._updateTooltipDistance(this._distance + distance, distance);

			this._distance += distance;
		}
		this._createTooltip(e.latlng);


		// If this is already the second click, add the location to the fix path (create one first if we don't have one)
		if(this._lastPoint && !this._layerPaintPath) {
			this._layerPaintPath = L.polyline([this._lastPoint], {
				color: 'black',
				weight: 2,
				clickable: false
			}).addTo(this._layerPaint);
		}

		if(this._layerPaintPath) {
			this._layerPaintPath.addLatLng(e.latlng);
		}

		// Upate the end marker to the current location
		if(this._lastCircle) {
			this._layerPaint.removeLayer(this._lastCircle);
		}

		this._lastCircle = new L.CircleMarker(e.latlng, {
			color: 'black',
			opacity: 1,
			weight: 1,
			fill: true,
			fillOpacity: 1,
			radius:2,
			clickable: this._lastCircle ? true : false
		}).addTo(this._layerPaint);

		this._lastCircle.on('click', function() { this._finishPath(); }, this);

		// Save current location as last location
		this._lastPoint = e.latlng;
	},

	_finishPath: function() {
		// Remove the last end marker as well as the last (moving tooltip)
		if(this._lastCircle) {
			this._layerPaint.removeLayer(this._lastCircle);
		}
		if(this._tooltip) {
			this._layerPaint.removeLayer(this._tooltip);
		}
		if(this._layerPaint && this._layerPaintPathTemp) {
			this._layerPaint.removeLayer(this._layerPaintPathTemp);
		}

		// Reset everything
		this._restartPath();
	},

	_restartPath: function() {
		this._distance = 0;
		this._tooltip = undefined;
		this._lastCircle = undefined;
		this._lastPoint = undefined;
		this._layerPaintPath = undefined;
		this._layerPaintPathTemp = undefined;
	},

	_createTooltip: function(position) {
		var icon = L.divIcon({
			className: 'leaflet-measure-tooltip',
			iconAnchor: [-5, -5]
		});
		this._tooltip = L.marker(position, {
			icon: icon,
			clickable: false
		}).addTo(this._layerPaint);
	},

	_updateTooltipPosition: function(position) {
		this._tooltip.setLatLng(position);
	},

	_updateTooltipDistance: function(total, difference) {
		var totalRound = this._round(total),
			differenceRound = this._round(difference);

		var text = '<div class="leaflet-measure-tooltip-total">' + totalRound + ' mi</div>';
		if(differenceRound > 0 && totalRound != differenceRound) {
			text += '<div class="leaflet-measure-tooltip-difference">(+' + differenceRound + ' mi)</div>';
		}

		this._tooltip._icon.innerHTML = text;
	},

	_round: function(val) {
		return Math.round((val / 1609.34));
	},

	_onKeyDown: function (e) {
		if(e.keyCode == 27) {
			// If not in path exit measuring mode, else just finish path
			if(!this._lastPoint) {
				this._toggleMeasure();
			} else {
				this._finishPath();
			}
		}
	}
});

L.Map.mergeOptions({
	measureControl: false
});

L.Map.addInitHook(function () {
	if (this.options.measureControl) {
		this.measureControl = new L.Control.Measure();
		this.addControl(this.measureControl);
	}
});

L.control.measure = function (options) {
	return new L.Control.Measure(options);
};

!function(){function a(b,c,d){var e=a.resolve(b);if(null==e){d=d||b,c=c||"root";var f=new Error('Failed to require "'+d+'" from "'+c+'"');throw f.path=d,f.parent=c,f.require=!0,f}var g=a.modules[e];return g.exports||(g.exports={},g.client=g.component=!0,g.call(this,g.exports,a.relative(e),g)),g.exports}a.modules={},a.aliases={},a.resolve=function(b){"/"===b.charAt(0)&&(b=b.slice(1));for(var c=[b,b+".js",b+".json",b+"/index.js",b+"/index.json"],d=0;d<c.length;d++){var b=c[d];if(a.modules.hasOwnProperty(b))return b;if(a.aliases.hasOwnProperty(b))return a.aliases[b]}},a.normalize=function(a,b){var c=[];if("."!=b.charAt(0))return b;a=a.split("/"),b=b.split("/");for(var d=0;d<b.length;++d)".."==b[d]?a.pop():"."!=b[d]&&""!=b[d]&&c.push(b[d]);return a.concat(c).join("/")},a.register=function(b,c){a.modules[b]=c},a.alias=function(b,c){if(!a.modules.hasOwnProperty(b))throw new Error('Failed to alias "'+b+'", it does not exist');a.aliases[c]=b},a.relative=function(b){function c(a,b){for(var c=a.length;c--;)if(a[c]===b)return c;return-1}function d(c){var e=d.resolve(c);return a(e,b,c)}var e=a.normalize(b,"..");return d.resolve=function(d){var f=d.charAt(0);if("/"==f)return d.slice(1);if("."==f)return a.normalize(e,d);var g=b.split("/"),h=c(g,"deps")+1;return h||(h=0),d=g.slice(0,h+1).join("/")+"/deps/"+d},d.exists=function(b){return a.modules.hasOwnProperty(d.resolve(b))},d},a.register("calvinmetcalf-setImmediate/lib/index.js",function(a,b,c){"use strict";function d(){var a,b=0,c=g;for(g=[];a=c[b++];)a()}var e,f=[b("./nextTick"),b("./mutation"),b("./postMessage"),b("./messageChannel"),b("./stateChange"),b("./timeout")],g=[];f.some(function(a){var b=a.test();return b&&(e=a.install(d)),b});var h=function(a){var b,c;return arguments.length>1&&"function"==typeof a&&(c=Array.prototype.slice.call(arguments,1),c.unshift(void 0),a=a.bind.apply(a,c)),1===(b=g.push(a))&&e(d),b};h.clear=function(a){return a<=g.length&&(g[a-1]=function(){}),this},c.exports=h}),a.register("calvinmetcalf-setImmediate/lib/nextTick.js",function(a){"use strict";a.test=function(){return"object"==typeof process&&"[object process]"===Object.prototype.toString.call(process)},a.install=function(){return process.nextTick}}),a.register("calvinmetcalf-setImmediate/lib/postMessage.js",function(a,b){"use strict";var c=b("./global");a.test=function(){if(!c.postMessage||c.importScripts)return!1;var a=!0,b=c.onmessage;return c.onmessage=function(){a=!1},c.postMessage("","*"),c.onmessage=b,a},a.install=function(a){function b(b){b.source===c&&b.data===d&&a()}var d="com.calvinmetcalf.setImmediate"+Math.random();return c.addEventListener?c.addEventListener("message",b,!1):c.attachEvent("onmessage",b),function(){c.postMessage(d,"*")}}}),a.register("calvinmetcalf-setImmediate/lib/messageChannel.js",function(a,b){"use strict";var c=b("./global");a.test=function(){return!!c.MessageChannel},a.install=function(a){var b=new c.MessageChannel;return b.port1.onmessage=a,function(){b.port2.postMessage(0)}}}),a.register("calvinmetcalf-setImmediate/lib/stateChange.js",function(a,b){"use strict";var c=b("./global");a.test=function(){return"document"in c&&"onreadystatechange"in c.document.createElement("script")},a.install=function(a){return function(){var b=c.document.createElement("script");return b.onreadystatechange=function(){a(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},c.document.documentElement.appendChild(b),a}}}),a.register("calvinmetcalf-setImmediate/lib/timeout.js",function(a){"use strict";a.test=function(){return!0},a.install=function(a){return function(){setTimeout(a,0)}}}),a.register("calvinmetcalf-setImmediate/lib/global.js",function(a,b,c){c.exports="object"==typeof global&&global?global:this}),a.register("calvinmetcalf-setImmediate/lib/mutation.js",function(a,b){"use strict";var c=b("./global"),d=c.MutationObserver||c.WebKitMutationObserver;a.test=function(){return d},a.install=function(a){var b=new d(a),e=c.document.createElement("div");return b.observe(e,{attributes:!0}),c.addEventListener("unload",function(){b.disconnect(),b=null},!1),function(){e.setAttribute("drainQueue","drainQueue")}}}),a.register("lie/lie.js",function(a,b,c){function d(a){function b(a,b){return d(function(c,d){k.push({resolve:a,reject:b,resolver:c,rejecter:d})})}function c(a,c){return l?l(a,c):b(a,c)}function h(a,b){for(var d,h,i=a?"resolve":"reject",j=0,m=k.length;m>j;j++)d=k[j],h=d[i],"function"==typeof h?g(f,h,b,d.resolver,d.rejecter):a?d.resolver(b):d.rejecter(b);l=e(c,b,a)}function i(a){l||h(!0,a)}function j(a){l||h(!1,a)}if(!(this instanceof d))return new d(a);var k=[],l=!1;this.then=c;try{a(function(a){a&&"function"==typeof a.then?a.then(i,j):i(a)},j)}catch(m){j(m)}}function e(a,b,c){return function(e,h){var i=c?e:h;return"function"!=typeof i?d(function(b,c){a(b,c)}):d(function(a,c){g(f,i,b,a,c)})}}function f(a,b,c,d){try{var e=a(b);e&&"function"==typeof e.then?e.then(c,d):c(e)}catch(f){d(f)}}var g=b("immediate");c.exports=d}),a.alias("calvinmetcalf-setImmediate/lib/index.js","lie/deps/immediate/lib/index.js"),a.alias("calvinmetcalf-setImmediate/lib/nextTick.js","lie/deps/immediate/lib/nextTick.js"),a.alias("calvinmetcalf-setImmediate/lib/postMessage.js","lie/deps/immediate/lib/postMessage.js"),a.alias("calvinmetcalf-setImmediate/lib/messageChannel.js","lie/deps/immediate/lib/messageChannel.js"),a.alias("calvinmetcalf-setImmediate/lib/stateChange.js","lie/deps/immediate/lib/stateChange.js"),a.alias("calvinmetcalf-setImmediate/lib/timeout.js","lie/deps/immediate/lib/timeout.js"),a.alias("calvinmetcalf-setImmediate/lib/global.js","lie/deps/immediate/lib/global.js"),a.alias("calvinmetcalf-setImmediate/lib/mutation.js","lie/deps/immediate/lib/mutation.js"),a.alias("calvinmetcalf-setImmediate/lib/index.js","lie/deps/immediate/index.js"),a.alias("calvinmetcalf-setImmediate/lib/index.js","immediate/index.js"),a.alias("calvinmetcalf-setImmediate/lib/index.js","calvinmetcalf-setImmediate/index.js"),a.alias("lie/lie.js","lie/index.js"),L.Util.Promise=a("lie")}(),L.Util.ajax=function(url,options){"use strict";if(options=options||{},options.jsonp)return L.Util.ajax.jsonp(url,options);var request,cancel,out=L.Util.Promise(function(resolve,reject){var Ajax;cancel=reject,Ajax=void 0===window.XMLHttpRequest?function(){try{return new ActiveXObject("Microsoft.XMLHTTP.6.0")}catch(a){try{return new ActiveXObject("Microsoft.XMLHTTP.3.0")}catch(b){reject("XMLHttpRequest is not supported")}}}:window.XMLHttpRequest;var response;request=new Ajax,request.open("GET",url),request.onreadystatechange=function(){4===request.readyState&&(request.status<400&&options.local||200===request.status?(window.JSON?response=JSON.parse(request.responseText):options.evil&&(response=eval("("+request.responseText+")")),resolve(response)):request.status?reject(request.statusText):reject("Attempted cross origin request without CORS enabled"))},request.send()});return out.then(null,function(a){return request.abort(),a}),out.abort=cancel,out},L.Util.jsonp=function(a,b){b=b||{};var c,d,e,f,g=document.getElementsByTagName("head")[0],h=L.DomUtil.create("script","",g),i=L.Util.Promise(function(i,j){f=j;var k=b.cbParam||"callback";b.callbackName?c=b.callbackName:(e="_"+(""+Math.random()).slice(2),c="L.Util.jsonp.cb."+e),h.type="text/javascript",e&&(L.Util.jsonp.cb[e]=function(a){g.removeChild(h),delete L.Util.jsonp.cb[e],i(a)}),d=-1===a.indexOf("?")?a+"?"+k+"="+c:a+"&"+k+"="+c,h.src=d}).then(null,function(a){return g.removeChild(h),delete L.Util.ajax.cb[e],a});return i.abort=f,i},L.Util.jsonp.cb={},L.GeoJSON.AJAX=L.GeoJSON.extend({defaultAJAXparams:{dataType:"json",callbackParam:"callback",local:!1,middleware:function(a){return a}},initialize:function(a,b){this.urls=[],a&&("string"==typeof a?this.urls.push(a):"function"==typeof a.pop?this.urls=this.urls.concat(a):(b=a,a=void 0));var c=L.Util.extend({},this.defaultAJAXparams);for(var d in b)this.defaultAJAXparams.hasOwnProperty(d)&&(c[d]=b[d]);this.ajaxParams=c,this._layers={},L.Util.setOptions(this,b),this.on("data:loaded",function(){this.filter&&this.refilter(this.filter)},this);var e=this;this.urls.length>0&&L.Util.Promise(function(a){a()}).then(function(){e.addUrl()})},clearLayers:function(){return this.urls=[],L.GeoJSON.prototype.clearLayers.call(this),this},addUrl:function(a){var b=this;a&&("string"==typeof a?b.urls.push(a):"function"==typeof a.pop&&(b.urls=b.urls.concat(a)));var c=b.urls.length,d=0;b.fire("data:loading"),b.urls.forEach(function(a){"json"===b.ajaxParams.dataType.toLowerCase()?L.Util.ajax(a,b.ajaxParams).then(function(a){var c=b.ajaxParams.middleware(a);b.addData(c),b.fire("data:progress",c)},function(a){b.fire("data:progress",{error:a})}):"jsonp"===b.ajaxParams.dataType.toLowerCase()&&L.Util.jsonp(a,b.ajaxParams).then(function(a){var c=b.ajaxParams.middleware(a);b.addData(c),b.fire("data:progress",c)},function(a){b.fire("data:progress",{error:a})})}),b.on("data:progress",function(){++d===c&&b.fire("data:loaded")})},refresh:function(a){a=a||this.urls,this.clearLayers(),this.addUrl(a)},refilter:function(a){"function"!=typeof a?(this.filter=!1,this.eachLayer(function(a){a.setStyle({stroke:!0,clickable:!0})})):(this.filter=a,this.eachLayer(function(b){a(b.feature)?b.setStyle({stroke:!0,clickable:!0}):b.setStyle({stroke:!1,clickable:!1})}))}}),L.geoJson.ajax=function(a,b){return new L.GeoJSON.AJAX(a,b)};
(function (factory) {
    if(typeof define === 'function' && define.amd) {
    //AMD
        define(['leaflet'], factory);
    } else if(typeof module !== 'undefined') {
    // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
    // Browser globals
        if(typeof window.L === 'undefined')
            throw 'Leaflet must be loaded first';
        factory(window.L);
    }
})(function (L) {

	function _getPath(obj, prop) {
		var parts = prop.split('.'),
			last = parts.pop(),
			len = parts.length,
			cur = parts[0],
			i = 1;

		if(len > 0)
			while((obj = obj[cur]) && i < len)
				cur = parts[i++];

		if(obj)
			return obj[last];
	}

	function _isObject(obj) {
		return Object.prototype.toString.call(obj) === "[object Object]";
	}

//TODO implement can do research on multiple sources layers and remote
//TODO history: false,		//show latest searches in tooltip
//FIXME option condition problem {autoCollapse: true, markerLocation: true} not show location
//FIXME option condition problem {autoCollapse: false }
//
//TODO here insert function that search inputText FIRST in _recordsCache keys and if not find results..
//  run one of callbacks search(sourceData,jsonpUrl or options.layer) and run this.showTooltip
//
//TODO change structure of _recordsCache
//	like this: _recordsCache = {"text-key1": {loc:[lat,lng], ..other attributes.. }, {"text-key2": {loc:[lat,lng]}...}, ...}
//	in this mode every record can have a free structure of attributes, only 'loc' is required
//TODO important optimization!!! always append data in this._recordsCache
//  now _recordsCache content is emptied and replaced with new data founded
//  always appending data on _recordsCache give the possibility of caching ajax, jsonp and layersearch!
//
//TODO here insert function that search inputText FIRST in _recordsCache keys and if not find results..
//  run one of callbacks search(sourceData,jsonpUrl or options.layer) and run this.showTooltip
//
//TODO change structure of _recordsCache
//	like this: _recordsCache = {"text-key1": {loc:[lat,lng], ..other attributes.. }, {"text-key2": {loc:[lat,lng]}...}, ...}
//	in this way every record can have a free structure of attributes, only 'loc' is required

L.Control.Search = L.Control.extend({
	includes: L.Mixin.Events,
	//
	//	Name					Data passed			   Description
	//
	//Managed Events:
	//	search_locationfound	{latlng, title, layer} fired after moved and show markerLocation
	//	search_expanded			{}					   fired after control was expanded
	//  search_collapsed		{}					   fired after control was collapsed
	//
	//Public methods:
	//  setLayer()				L.LayerGroup()         set layer search at runtime
	//  showAlert()             'Text message'         show alert message
	//  searchText()			'Text searched'        search text by external code
	//
	options: {
		url: '',						//url for search by ajax request, ex: "search.php?q={s}". Can be function that returns string for dynamic parameter setting
		layer: null,					//layer where search markers(is a L.LayerGroup)
		sourceData: null,				//function that fill _recordsCache, passed searching text by first param and callback in second
		//TODO implements uniq option 'sourceData' that recognizes source type: url,array,callback or layer
		jsonpParam: null,				//jsonp param name for search by jsonp service, ex: "callback"
		propertyLoc: 'loc',				//field for remapping location, using array: ['latname','lonname'] for select double fields(ex. ['lat','lon'] ) support dotted format: 'prop.subprop.title'
		propertyName: 'title',			//property in marker.options(or feature.properties for vector layer) trough filter elements in layer,
		formatData: null,				//callback for reformat all data from source to indexed data object
		filterData: null,				//callback for filtering data from text searched, params: textSearch, allRecords
		moveToLocation: null,			//callback run on location found, params: latlng, title, map
		buildTip: null,					//function that return row tip html node(or html string), receive text tooltip in first param
		container: '',					//container id to insert Search Control
		zoom: null,						//default zoom level for move to location
		minLength: 1,					//minimal text length for autocomplete
		initial: true,					//search elements only by initial text
		casesensitive: false,			//search elements in case sensitive text
		autoType: true,					//complete input with first suggested result and select this filled-in text.
		delayType: 400,					//delay while typing for show tooltip
		tooltipLimit: -1,				//limit max results to show in tooltip. -1 for no limit.
		tipAutoSubmit: true,			//auto map panTo when click on tooltip
		firstTipSubmit: false,			//auto select first result con enter click
		autoResize: true,				//autoresize on input change
		collapsed: true,				//collapse search control at startup
		autoCollapse: false,			//collapse search control after submit(on button or on tips if enabled tipAutoSubmit)
		autoCollapseTime: 1200,			//delay for autoclosing alert and collapse after blur
		textErr: 'Location not found',	//error message
		textCancel: 'Cancel',		    //title in cancel button
		textPlaceholder: 'Search...',   //placeholder value
		position: 'topleft',
		hideMarkerOnCollapse: false,    //remove circle and marker on search control collapsed
		/*marker: {						//custom L.Marker or false for hide
			icon: false,				//custom L.Icon for maker location or false for hide
			animate: true,				//animate a circle over location found
			circle: {					//draw a circle in location found
				radius: 10,
				weight: 3,
				color: '#e03',
				stroke: true,
				fill: false
			}
		}*/
    marker: false,
	},

	initialize: function(options) {
		L.Util.setOptions(this, options || {});
		this._inputMinSize = this.options.textPlaceholder ? this.options.textPlaceholder.length : 10;
		this._layer = this.options.layer || new L.LayerGroup();
		this._filterData = this.options.filterData || this._defaultFilterData;
		this._formatData = this.options.formatData || this._defaultFormatData;
		this._moveToLocation = this.options.moveToLocation || this._defaultMoveToLocation;
		this._autoTypeTmp = this.options.autoType;	//useful for disable autoType temporarily in delete/backspace keydown
		this._countertips = 0;		//number of tips items
		this._recordsCache = {};	//key,value table! that store locations! format: key,latlng
		this._curReq = null;
	},

	onAdd: function (map) {
		this._map = map;
		this._container = L.DomUtil.create('div', 'leaflet-control-search');
		this._input = this._createInput(this.options.textPlaceholder, 'search-input');
		this._tooltip = this._createTooltip('search-tooltip');
		this._cancel = this._createCancel(this.options.textCancel, 'search-cancel');
		this._button = this._createButton(this.options.textPlaceholder, 'search-button');
		this._alert = this._createAlert('search-alert');

		if(this.options.collapsed===false)
			this.expand(this.options.collapsed);

		if(this.options.marker) {

			if(this.options.marker instanceof L.Marker || this.options.marker instanceof L.CircleMarker)
				this._markerSearch = this.options.marker;

			else if(_isObject(this.options.marker))
				this._markerSearch = new L.Control.Search.Marker([0,0], this.options.marker);

			this._markerSearch._isMarkerSearch = true;
		}

		this.setLayer( this._layer );

		map.on({
			// 		'layeradd': this._onLayerAddRemove,
			// 		'layerremove': this._onLayerAddRemove
			'resize': this._handleAutoresize
			}, this);
		return this._container;
	},
	addTo: function (map) {

		if(this.options.container) {
			this._container = this.onAdd(map);
			this._wrapper = L.DomUtil.get(this.options.container);
			this._wrapper.style.position = 'relative';
			this._wrapper.appendChild(this._container);
		}
		else
			L.Control.prototype.addTo.call(this, map);

		return this;
	},

	onRemove: function(map) {
		this._recordsCache = {};
		// map.off({
		// 		'layeradd': this._onLayerAddRemove,
		// 		'layerremove': this._onLayerAddRemove
		// 	}, this);
	},

	// _onLayerAddRemove: function(e) {
	// 	//without this, run setLayer also for each Markers!! to optimize!
	// 	if(e.layer instanceof L.LayerGroup)
	// 		if( L.stamp(e.layer) != L.stamp(this._layer) )
	// 			this.setLayer(e.layer);
	// },

	setLayer: function(layer) {	//set search layer at runtime
		//this.options.layer = layer; //setting this, run only this._recordsFromLayer()
		this._layer = layer;
		//this._layer.addTo(this._map);
		return this;
	},

	showAlert: function(text) {
		text = text || this.options.textErr;
		this._alert.style.display = 'block';
		this._alert.innerHTML = text;
		clearTimeout(this.timerAlert);
		var that = this;
		this.timerAlert = setTimeout(function() {
			that.hideAlert();
		},this.options.autoCollapseTime);
		return this;
	},

	hideAlert: function() {
		this._alert.style.display = 'none';
		return this;
	},

	cancel: function() {
		this._input.value = '';
		this._handleKeypress({ keyCode: 8 });//simulate backspace keypress
		this._input.size = this._inputMinSize;
		this._input.focus();
		this._cancel.style.display = 'none';
		this._hideTooltip();
		return this;
	},

	expand: function(toggle) {
		toggle = typeof toggle === 'boolean' ? toggle : true;
		this._input.style.display = 'block';
		L.DomUtil.addClass(this._container, 'search-exp');
		if ( toggle !== false ) {
			this._input.focus();
			this._map.on('dragstart click', this.collapse, this);
		}
		this.fire('search_expanded');
		return this;
	},

	collapse: function() {
		this._hideTooltip();
		this.cancel();
		this._alert.style.display = 'none';
		this._input.blur();
		if(this.options.collapsed)
		{
			this._input.style.display = 'none';
			this._cancel.style.display = 'none';
			L.DomUtil.removeClass(this._container, 'search-exp');
			if (this.options.hideMarkerOnCollapse) {
				this._map.removeLayer(this._markerSearch);
			}
			this._map.off('dragstart click', this.collapse, this);
		}
		this.fire('search_collapsed');
		return this;
	},

	collapseDelayed: function() {	//collapse after delay, used on_input blur
		if (!this.options.autoCollapse) return this;
		var that = this;
		clearTimeout(this.timerCollapse);
		this.timerCollapse = setTimeout(function() {
			that.collapse();
		}, this.options.autoCollapseTime);
		return this;
	},

	collapseDelayedStop: function() {
		clearTimeout(this.timerCollapse);
		return this;
	},

	////start DOM creations
	_createAlert: function(className) {
		var alert = L.DomUtil.create('div', className, this._container);
		alert.style.display = 'none';

		L.DomEvent
			.on(alert, 'click', L.DomEvent.stop, this)
			.on(alert, 'click', this.hideAlert, this);

		return alert;
	},

	_createInput: function (text, className) {
		var label = L.DomUtil.create('label', className, this._container);
		var input = L.DomUtil.create('input', className, this._container);
		input.type = 'text';
		input.size = this._inputMinSize;
		input.value = '';
		input.autocomplete = 'off';
		input.autocorrect = 'off';
		input.autocapitalize = 'off';
		input.placeholder = text;
		input.style.display = 'none';
		input.role = 'search';
		input.id = input.role + input.type + input.size;

		label.htmlFor = input.id;
		label.style.display = 'none';
		label.value = text;

		L.DomEvent
			.disableClickPropagation(input)
			.on(input, 'keydown', this._handleKeypress, this)
			.on(input, 'blur', this.collapseDelayed, this)
			.on(input, 'focus', this.collapseDelayedStop, this);

		return input;
	},

	_createCancel: function (title, className) {
		var cancel = L.DomUtil.create('a', className, this._container);
		cancel.href = '#';
		cancel.title = title;
		cancel.style.display = 'none';
		cancel.innerHTML = "<span>&otimes;</span>";//imageless(see css)

		L.DomEvent
			.on(cancel, 'click', L.DomEvent.stop, this)
			.on(cancel, 'click', this.cancel, this);

		return cancel;
	},

	_createButton: function (title, className) {
		var button = L.DomUtil.create('a', className, this._container);
		button.href = '#';
		button.title = title;

		L.DomEvent
			.on(button, 'click', L.DomEvent.stop, this)
			.on(button, 'click', this._handleSubmit, this)
			.on(button, 'focus', this.collapseDelayedStop, this)
			.on(button, 'blur', this.collapseDelayed, this);

		return button;
	},

	_createTooltip: function(className) {
		var tool = L.DomUtil.create('ul', className, this._container);
		tool.style.display = 'none';

		var that = this;
		L.DomEvent
			.disableClickPropagation(tool)
			.on(tool, 'blur', this.collapseDelayed, this)
			.on(tool, 'mousewheel', function(e) {
				that.collapseDelayedStop();
				L.DomEvent.stopPropagation(e);//disable zoom map
			}, this)
			.on(tool, 'mouseover', function(e) {
				that.collapseDelayedStop();
			}, this);
		return tool;
	},

	_createTip: function(text, val) {//val is object in recordCache, usually is Latlng
		var tip;

		if(this.options.buildTip)
		{
			tip = this.options.buildTip.call(this, text, val); //custom tip node or html string
			if(typeof tip === 'string')
			{
				var tmpNode = L.DomUtil.create('div');
				tmpNode.innerHTML = tip;
				tip = tmpNode.firstChild;
			}
		}
		else
		{
			tip = L.DomUtil.create('li', '');
			tip.innerHTML = text;
		}

		L.DomUtil.addClass(tip, 'search-tip');
		tip._text = text; //value replaced in this._input and used by _autoType

		if(this.options.tipAutoSubmit)
			L.DomEvent
				.disableClickPropagation(tip)
				.on(tip, 'click', L.DomEvent.stop, this)
				.on(tip, 'click', function(e) {
					this._input.value = text;
					this._handleAutoresize();
					this._input.focus();
					this._hideTooltip();
					this._handleSubmit();
				}, this);

		return tip;
	},

	//////end DOM creations

	_getUrl: function(text) {
		return (typeof this.options.url === 'function') ? this.options.url(text) : this.options.url;
	},

	_defaultFilterData: function(text, records) {

		var I, icase, regSearch, frecords = {};

		text = text.replace(/[.*+?^${}()|[\]\\]/g, '');  //sanitize remove all special characters
		if(text==='')
			return [];

		I = this.options.initial ? '^' : '';  //search only initial text
		icase = !this.options.casesensitive ? 'i' : undefined;

		regSearch = new RegExp(I + text, icase);

		//TODO use .filter or .map
		for(var key in records) {
			if( regSearch.test(key) )
				frecords[key]= records[key];
		}

		return frecords;
	},

	showTooltip: function(records) {
		var tip;

		this._countertips = 0;

		this._tooltip.innerHTML = '';
		this._tooltip.currentSelection = -1;  //inizialized for _handleArrowSelect()

		for(var key in records)//fill tooltip
		{
			if(++this._countertips == this.options.tooltipLimit) break;

			tip = this._createTip(key, records[key] );

			this._tooltip.appendChild(tip);
		}

		if(this._countertips > 0)
		{
			this._tooltip.style.display = 'block';
			if(this._autoTypeTmp)
				this._autoType();
			this._autoTypeTmp = this.options.autoType;//reset default value
		}
		else
			this._hideTooltip();

		this._tooltip.scrollTop = 0;
		return this._countertips;
	},

	_hideTooltip: function() {
		this._tooltip.style.display = 'none';
		this._tooltip.innerHTML = '';
		return 0;
	},

	_defaultFormatData: function(json) {	//default callback for format data to indexed data
		var propName = this.options.propertyName,
			propLoc = this.options.propertyLoc,
			i, jsonret = {};

		if( L.Util.isArray(propLoc) )
			for(i in json)
				jsonret[ _getPath(json[i],propName) ]= L.latLng( json[i][ propLoc[0] ], json[i][ propLoc[1] ] );
		else
			for(i in json)
				jsonret[ _getPath(json[i],propName) ]= L.latLng( _getPath(json[i],propLoc) );
		//TODO throw new Error("propertyName '"+propName+"' not found in JSON data");
		return jsonret;
	},

	_recordsFromJsonp: function(text, callAfter) {  //extract searched records from remote jsonp service
		L.Control.Search.callJsonp = callAfter;
		var script = L.DomUtil.create('script','leaflet-search-jsonp', document.getElementsByTagName('body')[0] ),
			url = L.Util.template(this._getUrl(text)+'&'+this.options.jsonpParam+'=L.Control.Search.callJsonp', {s: text}); //parsing url
			//rnd = '&_='+Math.floor(Math.random()*10000);
			//TODO add rnd param or randomize callback name! in recordsFromJsonp
		script.type = 'text/javascript';
		script.src = url;
		return { abort: function() { script.parentNode.removeChild(script); } };
	},

	_recordsFromAjax: function(text, callAfter) {	//Ajax request
		if (window.XMLHttpRequest === undefined) {
			window.XMLHttpRequest = function() {
				try { return new ActiveXObject("Microsoft.XMLHTTP.6.0"); }
				catch  (e1) {
					try { return new ActiveXObject("Microsoft.XMLHTTP.3.0"); }
					catch (e2) { throw new Error("XMLHttpRequest is not supported"); }
				}
			};
		}
		var IE8or9 = ( L.Browser.ie && !window.atob && document.querySelector ),
			request = IE8or9 ? new XDomainRequest() : new XMLHttpRequest(),
			url = L.Util.template(this._getUrl(text), {s: text});

		//rnd = '&_='+Math.floor(Math.random()*10000);
		//TODO add rnd param or randomize callback name! in recordsFromAjax

		request.open("GET", url);
		var that = this;

		request.onload = function() {
			callAfter( JSON.parse(request.responseText) );
		};
		request.onreadystatechange = function() {
		    if(request.readyState === 4 && request.status === 200) {
		    	this.onload();
		    }
		};

		request.send();
		return request;
	},

	_recordsFromLayer: function() {	//return table: key,value from layer
		var that = this,
			retRecords = {},
			propName = this.options.propertyName,
			loc;

		this._layer.eachLayer(function(layer) {

			if(layer.hasOwnProperty('_isMarkerSearch')) return;

			if(layer instanceof L.Marker || layer instanceof L.CircleMarker)
			{
				try {
					if(_getPath(layer.options,propName))
					{
						loc = layer.getLatLng();
						loc.layer = layer;
						retRecords[ _getPath(layer.options,propName) ] = loc;

					}
					else if(_getPath(layer.feature.properties,propName)){

						loc = layer.getLatLng();
						loc.layer = layer;
						retRecords[ _getPath(layer.feature.properties,propName) ] = loc;

					}
					else
						throw new Error("propertyName '"+propName+"' not found in marker");

				}
				catch(err){
					if (console) { console.warn(err); }
				}
			}
            else if(layer.hasOwnProperty('feature'))//GeoJSON
			{
				try {
					if(layer.feature.properties.hasOwnProperty(propName))
					{
						loc = layer.getBounds().getCenter();
						loc.layer = layer;
						retRecords[ layer.feature.properties[propName] ] = loc;
					}
					else
						throw new Error("propertyName '"+propName+"' not found in feature");
				}
				catch(err){
					if (console) { console.warn(err); }
				}
			}
			else if(layer instanceof L.LayerGroup)
            {
                //TODO: Optimize
                /*layer.eachLayer(function(m) {
                    loc = m.getLatLng();
                    loc.layer = m;
                    retRecords[ m.feature.properties[propName] ] = loc;
                });*/
                layer.eachLayer(function(m) {
                    //console.log(m)
                    if (m._latlng) {
                      //console.log('point found');
                      loc = m._latlng;
                    }
                    if (m._latlngs) {
                      //console.log('non-point found');
                      loc = m.getBounds().getCenter();
                    }
                    //console.log(loc);
                    loc.layer = m;
                    retRecords[ m.feature.properties[propName] ] = loc;
                });
            }

		},this);

		return retRecords;
	},

	_autoType: function() {

		//TODO implements autype without selection(useful for mobile device)

		var start = this._input.value.length,
			firstRecord = this._tooltip.firstChild._text,
			end = firstRecord.length;

		if (firstRecord.indexOf(this._input.value) === 0) { // If prefix match
			this._input.value = firstRecord;
			this._handleAutoresize();

			if (this._input.createTextRange) {
				var selRange = this._input.createTextRange();
				selRange.collapse(true);
				selRange.moveStart('character', start);
				selRange.moveEnd('character', end);
				selRange.select();
			}
			else if(this._input.setSelectionRange) {
				this._input.setSelectionRange(start, end);
			}
			else if(this._input.selectionStart) {
				this._input.selectionStart = start;
				this._input.selectionEnd = end;
			}
		}
	},

	_hideAutoType: function() {	// deselect text:

		var sel;
		if ((sel = this._input.selection) && sel.empty) {
			sel.empty();
		}
		else if (this._input.createTextRange) {
			sel = this._input.createTextRange();
			sel.collapse(true);
			var end = this._input.value.length;
			sel.moveStart('character', end);
			sel.moveEnd('character', end);
			sel.select();
		}
		else {
			if (this._input.getSelection) {
				this._input.getSelection().removeAllRanges();
			}
			this._input.selectionStart = this._input.selectionEnd;
		}
	},

	_handleKeypress: function (e) {	//run _input keyup event

		switch(e.keyCode)
		{
			case 27://Esc
				this.collapse();
			break;
			case 13://Enter
				if(this._countertips == 1 || (this.options.firstTipSubmit && this._countertips > 0))
					this._handleArrowSelect(1);
				this._handleSubmit();	//do search
			break;
			case 38://Up
				this._handleArrowSelect(-1);
			break;
			case 40://Down
				this._handleArrowSelect(1);
			break;
			case  8://Backspace
			case 45://Insert
			case 46://Delete
				this._autoTypeTmp = false;//disable temporarily autoType
			break;
			case 37://Left
			case 39://Right
			case 16://Shift
			case 17://Ctrl
			case 35://End
			case 36://Home
			break;
			default://All keys

				if(this._input.value.length)
					this._cancel.style.display = 'block';
				else
					this._cancel.style.display = 'none';

				if(this._input.value.length >= this.options.minLength)
				{
					var that = this;

					clearTimeout(this.timerKeypress);	//cancel last search request while type in
					this.timerKeypress = setTimeout(function() {	//delay before request, for limit jsonp/ajax request

						that._fillRecordsCache();

					}, this.options.delayType);
				}
				else
					this._hideTooltip();
		}

		this._handleAutoresize();
	},

	searchText: function(text) {
		var code = text.charCodeAt(text.length);

		this._input.value = text;

		this._input.style.display = 'block';
		L.DomUtil.addClass(this._container, 'search-exp');

		this._autoTypeTmp = false;

		this._handleKeypress({keyCode: code});
	},

	_fillRecordsCache: function() {

		var inputText = this._input.value,
			that = this, records;

		if(this._curReq && this._curReq.abort)
			this._curReq.abort();
		//abort previous requests

		L.DomUtil.addClass(this._container, 'search-load');

		if(this.options.layer)
		{
			//TODO _recordsFromLayer must return array of objects, formatted from _formatData
			this._recordsCache = this._recordsFromLayer();

			records = this._filterData( this._input.value, this._recordsCache );

			this.showTooltip( records );

			L.DomUtil.removeClass(this._container, 'search-load');
		}
		else
		{
			if(this.options.sourceData)
				this._retrieveData = this.options.sourceData;

			else if(this.options.url)	//jsonp or ajax
				this._retrieveData = this.options.jsonpParam ? this._recordsFromJsonp : this._recordsFromAjax;

			this._curReq = this._retrieveData.call(this, inputText, function(data) {

				that._recordsCache = that._formatData(data);

				//TODO refact!
				if(that.options.sourceData)
					records = that._filterData( that._input.value, that._recordsCache );
				else
					records = that._recordsCache;

				that.showTooltip( records );

				L.DomUtil.removeClass(that._container, 'search-load');
			});
		}
	},

	_handleAutoresize: function() {	//autoresize this._input
	    //TODO refact _handleAutoresize now is not accurate
	    if (this._input.style.maxWidth != this._map._container.offsetWidth) //If maxWidth isn't the same as when first set, reset to current Map width
	        this._input.style.maxWidth = L.DomUtil.getStyle(this._map._container, 'width');

		if(this.options.autoResize && (this._container.offsetWidth + 45 < this._map._container.offsetWidth))
			this._input.size = this._input.value.length<this._inputMinSize ? this._inputMinSize : this._input.value.length;
	},

	_handleArrowSelect: function(velocity) {

		var searchTips = this._tooltip.hasChildNodes() ? this._tooltip.childNodes : [];

		for (i=0; i<searchTips.length; i++)
			L.DomUtil.removeClass(searchTips[i], 'search-tip-select');

		if ((velocity == 1 ) && (this._tooltip.currentSelection >= (searchTips.length - 1))) {// If at end of list.
			L.DomUtil.addClass(searchTips[this._tooltip.currentSelection], 'search-tip-select');
		}
		else if ((velocity == -1 ) && (this._tooltip.currentSelection <= 0)) { // Going back up to the search box.
			this._tooltip.currentSelection = -1;
		}
		else if (this._tooltip.style.display != 'none') {
			this._tooltip.currentSelection += velocity;

			L.DomUtil.addClass(searchTips[this._tooltip.currentSelection], 'search-tip-select');

			this._input.value = searchTips[this._tooltip.currentSelection]._text;

			// scroll:
			var tipOffsetTop = searchTips[this._tooltip.currentSelection].offsetTop;

			if (tipOffsetTop + searchTips[this._tooltip.currentSelection].clientHeight >= this._tooltip.scrollTop + this._tooltip.clientHeight) {
				this._tooltip.scrollTop = tipOffsetTop - this._tooltip.clientHeight + searchTips[this._tooltip.currentSelection].clientHeight;
			}
			else if (tipOffsetTop <= this._tooltip.scrollTop) {
				this._tooltip.scrollTop = tipOffsetTop;
			}
		}
	},

	_handleSubmit: function() {	//button and tooltip click and enter submit

		this._hideAutoType();

		this.hideAlert();
		this._hideTooltip();

		if(this._input.style.display == 'none')	//on first click show _input only
			this.expand();
		else
		{
			if(this._input.value === '')	//hide _input only
				this.collapse();
			else
			{
				var loc = this._getLocation(this._input.value);

				if(loc===false)
					this.showAlert();
				else
				{
					this.showLocation(loc, this._input.value);
					this.fire('search_locationfound', {
							latlng: loc,
							text: this._input.value,
							layer: loc.layer ? loc.layer : null
						});
				}
			}
		}
	},

	_getLocation: function(key) {	//extract latlng from _recordsCache

		if( this._recordsCache.hasOwnProperty(key) )
			return this._recordsCache[key];//then after use .loc attribute
		else
			return false;
	},

	_defaultMoveToLocation: function(latlng, title, map) {
		if(this.options.zoom)
 			this._map.setView(latlng, this.options.zoom);
 		else
			this._map.panTo(latlng);
	},

	showLocation: function(latlng, title) {	//set location on map from _recordsCache
		var self = this;

		self._map.once('moveend zoomend', function(e) {

			if(self._markerSearch) {
				self._markerSearch.addTo(self._map).setLatLng(latlng);
			}

		});

		self._moveToLocation(latlng, title, self._map);
		//FIXME autoCollapse option hide self._markerSearch before that visualized!!
		if(self.options.autoCollapse)
			self.collapse();

		return self;
	}
});

L.Control.Search.Marker = L.Marker.extend({

	includes: L.Mixin.Events,

	options: {
		icon: new L.Icon.Default(),
		animate: true,
		circle: {
			radius: 10,
			weight: 3,
			color: '#e03',
			stroke: true,
			fill: false
		}
	},

	initialize: function (latlng, options) {
		L.setOptions(this, options);

		if(options.icon === true)
			options.icon = new L.Icon.Default();

		L.Marker.prototype.initialize.call(this, latlng, options);

		if( _isObject(this.options.circle) )
			this._circleLoc = new L.CircleMarker(latlng, this.options.circle);
	},

	onAdd: function (map) {
		L.Marker.prototype.onAdd.call(this, map);
		if(this._circleLoc) {
			map.addLayer(this._circleLoc);
			if(this.options.animate)
				this.animate();
		}
	},

	onRemove: function (map) {
		L.Marker.prototype.onRemove.call(this, map);
		if(this._circleLoc)
			map.removeLayer(this._circleLoc);
	},

	setLatLng: function (latlng) {
		L.Marker.prototype.setLatLng.call(this, latlng);
		if(this._circleLoc)
			this._circleLoc.setLatLng(latlng);
		return this;
	},

	_initIcon: function () {
		if(this.options.icon)
			L.Marker.prototype._initIcon.call(this);
	},

	_removeIcon: function () {
		if(this.options.icon)
			L.Marker.prototype._removeIcon.call(this);
	},

	animate: function() {
	//TODO refact animate() more smooth! like this: http://goo.gl/DDlRs
		if(this._circleLoc)
		{
			var circle = this._circleLoc,
				tInt = 200,	//time interval
				ss = 5,	//frames
				mr = parseInt(circle._radius/ss),
				oldrad = this.options.circle.radius,
				newrad = circle._radius * 2,
				acc = 0;

			circle._timerAnimLoc = setInterval(function() {
				acc += 0.5;
				mr += acc;	//adding acceleration
				newrad -= mr;

				circle.setRadius(newrad);

				if(newrad<oldrad)
				{
					clearInterval(circle._timerAnimLoc);
					circle.setRadius(oldrad);//reset radius
					//if(typeof afterAnimCall == 'function')
						//afterAnimCall();
						//TODO use create event 'animateEnd' in L.Control.Search.Marker
				}
			}, tInt);
		}

		return this;
	}
});

L.Map.addInitHook(function () {
    if (this.options.searchControl) {
        this.searchControl = L.control.search(this.options.searchControl);
        this.addControl(this.searchControl);
    }
});

L.control.search = function (options) {
    return new L.Control.Search(options);
};

return L.Control.Search;

});

/*
	Leaflet.label, a plugin that adds labels to markers and vectors for Leaflet powered maps.
	(c) 2012-2013, Jacob Toye, Smartrak

	https://github.com/Leaflet/Leaflet.label
	http://leafletjs.com
	https://github.com/jacobtoye
*/
(function(){L.labelVersion="0.2.1-dev",L.Label=L.Class.extend({includes:L.Mixin.Events,options:{className:"",clickable:!1,direction:"right",noHide:!1,offset:[12,-15],opacity:1,zoomAnimation:!0},initialize:function(t,e){L.setOptions(this,t),this._source=e,this._animated=L.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._pane=this._source instanceof L.Marker?t._panes.markerPane:t._panes.popupPane,this._container||this._initLayout(),this._pane.appendChild(this._container),this._initInteraction(),this._update(),this.setOpacity(this.options.opacity),t.on("moveend",this._onMoveEnd,this).on("viewreset",this._onViewReset,this),this._animated&&t.on("zoomanim",this._zoomAnimation,this),L.Browser.touch&&!this.options.noHide&&L.DomEvent.on(this._container,"click",this.close,this)},onRemove:function(t){this._pane.removeChild(this._container),t.off({zoomanim:this._zoomAnimation,moveend:this._onMoveEnd,viewreset:this._onViewReset},this),this._removeInteraction(),this._map=null},setLatLng:function(t){return this._latlng=L.latLng(t),this._map&&this._updatePosition(),this},setContent:function(t){return this._previousContent=this._content,this._content=t,this._updateContent(),this},close:function(){var t=this._map;t&&(L.Browser.touch&&!this.options.noHide&&L.DomEvent.off(this._container,"click",this.close),t.removeLayer(this))},updateZIndex:function(t){this._zIndex=t,this._container&&this._zIndex&&(this._container.style.zIndex=t)},setOpacity:function(t){this.options.opacity=t,this._container&&L.DomUtil.setOpacity(this._container,t)},_initLayout:function(){this._container=L.DomUtil.create("div","leaflet-label "+this.options.className+" leaflet-zoom-animated"),this.updateZIndex(this._zIndex)},_update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updatePosition(),this._container.style.visibility="")},_updateContent:function(){this._content&&this._map&&this._prevContent!==this._content&&"string"==typeof this._content&&(this._container.innerHTML=this._content,this._prevContent=this._content,this._labelWidth=this._container.offsetWidth)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},_setPosition:function(t){var e=this._map,i=this._container,n=e.latLngToContainerPoint(e.getCenter()),o=e.layerPointToContainerPoint(t),s=this.options.direction,a=this._labelWidth,l=L.point(this.options.offset);"right"===s||"auto"===s&&o.x<n.x?(L.DomUtil.addClass(i,"leaflet-label-right"),L.DomUtil.removeClass(i,"leaflet-label-left"),t=t.add(l)):(L.DomUtil.addClass(i,"leaflet-label-left"),L.DomUtil.removeClass(i,"leaflet-label-right"),t=t.add(L.point(-l.x-a,l.y))),L.DomUtil.setPosition(i,t)},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPosition(e)},_onMoveEnd:function(){this._animated&&"auto"!==this.options.direction||this._updatePosition()},_onViewReset:function(t){t&&t.hard&&this._update()},_initInteraction:function(){if(this.options.clickable){var t=this._container,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];L.DomUtil.addClass(t,"leaflet-clickable"),L.DomEvent.on(t,"click",this._onMouseClick,this);for(var i=0;e.length>i;i++)L.DomEvent.on(t,e[i],this._fireMouseEvent,this)}},_removeInteraction:function(){if(this.options.clickable){var t=this._container,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];L.DomUtil.removeClass(t,"leaflet-clickable"),L.DomEvent.off(t,"click",this._onMouseClick,this);for(var i=0;e.length>i;i++)L.DomEvent.off(t,e[i],this._fireMouseEvent,this)}},_onMouseClick:function(t){this.hasEventListeners(t.type)&&L.DomEvent.stopPropagation(t),this.fire(t.type,{originalEvent:t})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&L.DomEvent.preventDefault(t),"mousedown"!==t.type?L.DomEvent.stopPropagation(t):L.DomEvent.preventDefault(t)}}),L.BaseMarkerMethods={showLabel:function(){return this.label&&this._map&&(this.label.setLatLng(this._latlng),this._map.showLabel(this.label)),this},hideLabel:function(){return this.label&&this.label.close(),this},setLabelNoHide:function(t){this._labelNoHide!==t&&(this._labelNoHide=t,t?(this._removeLabelRevealHandlers(),this.showLabel()):(this._addLabelRevealHandlers(),this.hideLabel()))},bindLabel:function(t,e){var i=this.options.icon?this.options.icon.options.labelAnchor:this.options.labelAnchor,n=L.point(i)||L.point(0,0);return n=n.add(L.Label.prototype.options.offset),e&&e.offset&&(n=n.add(e.offset)),e=L.Util.extend({offset:n},e),this._labelNoHide=e.noHide,this.label||(this._labelNoHide||this._addLabelRevealHandlers(),this.on("remove",this.hideLabel,this).on("move",this._moveLabel,this).on("add",this._onMarkerAdd,this),this._hasLabelHandlers=!0),this.label=new L.Label(e,this).setContent(t),this},unbindLabel:function(){return this.label&&(this.hideLabel(),this.label=null,this._hasLabelHandlers&&(this._labelNoHide||this._removeLabelRevealHandlers(),this.off("remove",this.hideLabel,this).off("move",this._moveLabel,this).off("add",this._onMarkerAdd,this)),this._hasLabelHandlers=!1),this},updateLabelContent:function(t){this.label&&this.label.setContent(t)},getLabel:function(){return this.label},_onMarkerAdd:function(){this._labelNoHide&&this.showLabel()},_addLabelRevealHandlers:function(){this.on("mouseover",this.showLabel,this).on("mouseout",this.hideLabel,this),L.Browser.touch&&this.on("click",this.showLabel,this)},_removeLabelRevealHandlers:function(){this.off("mouseover",this.showLabel,this).off("mouseout",this.hideLabel,this),L.Browser.touch&&this.off("click",this.showLabel,this)},_moveLabel:function(t){this.label.setLatLng(t.latlng)}},L.Icon.Default.mergeOptions({labelAnchor:new L.Point(9,-20)}),L.Marker.mergeOptions({icon:new L.Icon.Default}),L.Marker.include(L.BaseMarkerMethods),L.Marker.include({_originalUpdateZIndex:L.Marker.prototype._updateZIndex,_updateZIndex:function(t){var e=this._zIndex+t;this._originalUpdateZIndex(t),this.label&&this.label.updateZIndex(e)},_originalSetOpacity:L.Marker.prototype.setOpacity,setOpacity:function(t,e){this.options.labelHasSemiTransparency=e,this._originalSetOpacity(t)},_originalUpdateOpacity:L.Marker.prototype._updateOpacity,_updateOpacity:function(){var t=0===this.options.opacity?0:1;this._originalUpdateOpacity(),this.label&&this.label.setOpacity(this.options.labelHasSemiTransparency?this.options.opacity:t)},_originalSetLatLng:L.Marker.prototype.setLatLng,setLatLng:function(t){return this.label&&!this._labelNoHide&&this.hideLabel(),this._originalSetLatLng(t)}}),L.CircleMarker.mergeOptions({labelAnchor:new L.Point(0,0)}),L.CircleMarker.include(L.BaseMarkerMethods),L.Path.include({bindLabel:function(t,e){return this.label&&this.label.options===e||(this.label=new L.Label(e,this)),this.label.setContent(t),this._showLabelAdded||(this.on("mouseover",this._showLabel,this).on("mousemove",this._moveLabel,this).on("mouseout remove",this._hideLabel,this),L.Browser.touch&&this.on("click",this._showLabel,this),this._showLabelAdded=!0),this},unbindLabel:function(){return this.label&&(this._hideLabel(),this.label=null,this._showLabelAdded=!1,this.off("mouseover",this._showLabel,this).off("mousemove",this._moveLabel,this).off("mouseout remove",this._hideLabel,this)),this},updateLabelContent:function(t){this.label&&this.label.setContent(t)},_showLabel:function(t){this.label.setLatLng(t.latlng),this._map.showLabel(this.label)},_moveLabel:function(t){this.label.setLatLng(t.latlng)},_hideLabel:function(){this.label.close()}}),L.Map.include({showLabel:function(t){return this.addLayer(t)}}),L.FeatureGroup.include({clearLayers:function(){return this.unbindLabel(),this.eachLayer(this.removeLayer,this),this},bindLabel:function(t,e){return this.invoke("bindLabel",t,e)},unbindLabel:function(){return this.invoke("unbindLabel")},updateLabelContent:function(t){this.invoke("updateLabelContent",t)}})})(this,document);
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['leaflet'], factory);
    } else {
        // Assume leaflet is loaded into global object L already
        factory(L);
    }
}(this, function (L) {
	'use strict';

	L.TileLayer.Provider = L.TileLayer.extend({
		initialize: function (arg, options) {
			var providers = L.TileLayer.Provider.providers;

			var parts = arg.split('.');

			var providerName = parts[0];
			var variantName = parts[1];

			if (!providers[providerName]) {
				throw 'No such provider (' + providerName + ')';
			}

			var provider = {
				url: providers[providerName].url,
				options: providers[providerName].options
			};

			// overwrite values in provider from variant.
			if (variantName && 'variants' in providers[providerName]) {
				if (!(variantName in providers[providerName].variants)) {
					throw 'No such variant of ' + providerName + ' (' + variantName + ')';
				}
				var variant = providers[providerName].variants[variantName];
				var variantOptions;
				if (typeof variant === 'string') {
					variantOptions = {
						variant: variant
					};
				} else {
					variantOptions = variant.options;
				}
				provider = {
					url: variant.url || provider.url,
					options: L.Util.extend({}, provider.options, variantOptions)
				};
			} else if (typeof provider.url === 'function') {
				provider.url = provider.url(parts.splice(1, parts.length - 1).join('.'));
			}

			var forceHTTP = window.location.protocol === 'file:' || provider.options.forceHTTP;
			if (provider.url.indexOf('//') === 0 && forceHTTP) {
				provider.url = 'http:' + provider.url;
			}

			// replace attribution placeholders with their values from toplevel provider attribution,
			// recursively
			var attributionReplacer = function (attr) {
				if (attr.indexOf('{attribution.') === -1) {
					return attr;
				}
				return attr.replace(/\{attribution.(\w*)\}/,
					function (match, attributionName) {
						return attributionReplacer(providers[attributionName].options.attribution);
					}
				);
			};
			provider.options.attribution = attributionReplacer(provider.options.attribution);

			// Compute final options combining provider options with any user overrides
			var layerOpts = L.Util.extend({}, provider.options, options);
			L.TileLayer.prototype.initialize.call(this, provider.url, layerOpts);
		}
	});

	/**
	 * Definition of providers.
	 * see http://leafletjs.com/reference.html#tilelayer for options in the options map.
	 */

	L.TileLayer.Provider.providers = {
		OpenStreetMap: {
			url: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			options: {
				maxZoom: 19,
				attribution:
					'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			},
			variants: {
				Mapnik: {},
				BlackAndWhite: {
					url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
					options: {
						maxZoom: 18
					}
				},
				DE: {
					url: 'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
					options: {
						maxZoom: 18
					}
				},
				France: {
					url: 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
					options: {
						attribution: '&copy; Openstreetmap France | {attribution.OpenStreetMap}'
					}
				},
				HOT: {
					url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
					options: {
						attribution: '{attribution.OpenStreetMap}, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
					}
				}
			}
		},
		OpenSeaMap: {
			url: 'http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
			options: {
				attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
			}
		},
		OpenTopoMap: {
			url: '//{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
			options: {
				maxZoom: 16,
				attribution: 'Map data: {attribution.OpenStreetMap}, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
			}
		},
		Thunderforest: {
			url: '//{s}.tile.thunderforest.com/{variant}/{z}/{x}/{y}.png',
			options: {
				attribution:
					'&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, {attribution.OpenStreetMap}',
				variant: 'cycle'
			},
			variants: {
				OpenCycleMap: 'cycle',
				Transport: {
					options: {
						variant: 'transport',
						maxZoom: 19
					}
				},
				TransportDark: {
					options: {
						variant: 'transport-dark',
						maxZoom: 19
					}
				},
				Landscape: 'landscape',
				Outdoors: 'outdoors'
			}
		},
		OpenMapSurfer: {
			url: 'http://openmapsurfer.uni-hd.de/tiles/{variant}/x={x}&y={y}&z={z}',
			options: {
				maxZoom: 20,
				variant: 'roads',
				attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data {attribution.OpenStreetMap}'
			},
			variants: {
				Roads: 'roads',
				AdminBounds: {
					options: {
						variant: 'adminb',
						maxZoom: 19
					}
				},
				Grayscale: {
					options: {
						variant: 'roadsg',
						maxZoom: 19
					}
				}
			}
		},
		Hydda: {
			url: 'http://{s}.tile.openstreetmap.se/hydda/{variant}/{z}/{x}/{y}.png',
			options: {
				variant: 'full',
				attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data {attribution.OpenStreetMap}'
			},
			variants: {
				Full: 'full',
				Base: 'base',
				RoadsAndLabels: 'roads_and_labels'
			}
		},
		MapQuestOpen: {
			/* Mapquest does support https, but with a different subdomain:
			 * https://otile{s}-s.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}
			 * which makes implementing protocol relativity impossible.
			 */
			url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}',
			options: {
				type: 'map',
				ext: 'jpg',
				attribution:
					'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; ' +
					'Map data {attribution.OpenStreetMap}',
				subdomains: '1234'
			},
			variants: {
				OSM: {},
				Aerial: {
					options: {
						type: 'sat',
						attribution:
							'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; ' +
							'Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
					}
				},
				HybridOverlay: {
					options: {
						type: 'hyb',
						ext: 'png',
						opacity: 0.9
					}
				}
			}
		},
		MapBox: {
			url: '//api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
			options: {
				attribution:
					'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; ' +
					'Map data {attribution.OpenStreetMap}',
				subdomains: 'abcd'
			}
		},
		Stamen: {
			url: '//stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}.png',
			options: {
				attribution:
					'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
					'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
					'Map data {attribution.OpenStreetMap}',
				subdomains: 'abcd',
				minZoom: 0,
				maxZoom: 20,
				variant: 'toner',
				ext: 'png'
			},
			variants: {
				Toner: 'toner',
				TonerBackground: 'toner-background',
				TonerHybrid: 'toner-hybrid',
				TonerLines: 'toner-lines',
				TonerLabels: 'toner-labels',
				TonerLite: 'toner-lite',
				Watercolor: {
					options: {
						variant: 'watercolor',
						minZoom: 1,
						maxZoom: 16
					}
				},
				Terrain: {
					options: {
						variant: 'terrain',
						minZoom: 4,
						maxZoom: 18,
						bounds: [[22, -132], [70, -56]]
					}
				},
				TerrainBackground: {
					options: {
						variant: 'terrain-background',
						minZoom: 4,
						maxZoom: 18,
						bounds: [[22, -132], [70, -56]]
					}
				},
				TopOSMRelief: {
					options: {
						variant: 'toposm-color-relief',
						ext: 'jpg',
						bounds: [[22, -132], [51, -56]]
					}
				},
				TopOSMFeatures: {
					options: {
						variant: 'toposm-features',
						bounds: [[22, -132], [51, -56]],
						opacity: 0.9
					}
				}
			}
		},
		Esri: {
			url: '//server.arcgisonline.com/ArcGIS/rest/services/{variant}/MapServer/tile/{z}/{y}/{x}',
			options: {
				variant: 'World_Street_Map',
				attribution: 'Tiles &copy; Esri'
			},
			variants: {
				WorldStreetMap: {
					options: {
						attribution:
							'{attribution.Esri} &mdash; ' +
							'Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
					}
				},
				DeLorme: {
					options: {
						variant: 'Specialty/DeLorme_World_Base_Map',
						minZoom: 1,
						maxZoom: 11,
						attribution: '{attribution.Esri} &mdash; Copyright: &copy;2012 DeLorme'
					}
				},
				WorldTopoMap: {
					options: {
						variant: 'World_Topo_Map',
						attribution:
							'{attribution.Esri} &mdash; ' +
							'Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
					}
				},
				WorldImagery: {
					options: {
						variant: 'World_Imagery',
						attribution:
							'{attribution.Esri} &mdash; ' +
							'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
					}
				},
				WorldTerrain: {
					options: {
						variant: 'World_Terrain_Base',
						maxZoom: 13,
						attribution:
							'{attribution.Esri} &mdash; ' +
							'Source: USGS, Esri, TANA, DeLorme, and NPS'
					}
				},
				WorldShadedRelief: {
					options: {
						variant: 'World_Shaded_Relief',
						maxZoom: 13,
						attribution: '{attribution.Esri} &mdash; Source: Esri'
					}
				},
				WorldPhysical: {
					options: {
						variant: 'World_Physical_Map',
						maxZoom: 8,
						attribution: '{attribution.Esri} &mdash; Source: US National Park Service'
					}
				},
				OceanBasemap: {
					options: {
						variant: 'Ocean_Basemap',
						maxZoom: 13,
						attribution: '{attribution.Esri} &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
					}
				},
				NatGeoWorldMap: {
					options: {
						variant: 'NatGeo_World_Map',
						maxZoom: 16,
						attribution: '{attribution.Esri} &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
					}
				},
				WorldGrayCanvas: {
					options: {
						variant: 'Canvas/World_Light_Gray_Base',
						maxZoom: 16,
						attribution: '{attribution.Esri} &mdash; Esri, DeLorme, NAVTEQ'
					}
				}
			}
		},
		OpenWeatherMap: {
			url: 'http://{s}.tile.openweathermap.org/map/{variant}/{z}/{x}/{y}.png',
			options: {
				maxZoom: 19,
				attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
				opacity: 0.5
			},
			variants: {
				Clouds: 'clouds',
				CloudsClassic: 'clouds_cls',
				Precipitation: 'precipitation',
				PrecipitationClassic: 'precipitation_cls',
				Rain: 'rain',
				RainClassic: 'rain_cls',
				Pressure: 'pressure',
				PressureContour: 'pressure_cntr',
				Wind: 'wind',
				Temperature: 'temp',
				Snow: 'snow'
			}
		},
		HERE: {
			/*
			 * HERE maps, formerly Nokia maps.
			 * These basemaps are free, but you need an API key. Please sign up at
			 * http://developer.here.com/getting-started
			 *
			 * Note that the base urls contain '.cit' whichs is HERE's
			 * 'Customer Integration Testing' environment. Please remove for production
			 * envirionments.
			 */
			url:
				'//{s}.{base}.maps.cit.api.here.com/maptile/2.1/' +
				'maptile/{mapID}/{variant}/{z}/{x}/{y}/256/png8?' +
				'app_id={app_id}&app_code={app_code}',
			options: {
				attribution:
					'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
				subdomains: '1234',
				mapID: 'newest',
				'app_id': '<insert your app_id here>',
				'app_code': '<insert your app_code here>',
				base: 'base',
				variant: 'normal.day',
				maxZoom: 20
			},
			variants: {
				normalDay: 'normal.day',
				normalDayCustom: 'normal.day.custom',
				normalDayGrey: 'normal.day.grey',
				normalDayMobile: 'normal.day.mobile',
				normalDayGreyMobile: 'normal.day.grey.mobile',
				normalDayTransit: 'normal.day.transit',
				normalDayTransitMobile: 'normal.day.transit.mobile',
				normalNight: 'normal.night',
				normalNightMobile: 'normal.night.mobile',
				normalNightGrey: 'normal.night.grey',
				normalNightGreyMobile: 'normal.night.grey.mobile',

				carnavDayGrey: 'carnav.day.grey',
				hybridDay: {
					options: {
						base: 'aerial',
						variant: 'hybrid.day'
					}
				},
				hybridDayMobile: {
					options: {
						base: 'aerial',
						variant: 'hybrid.day.mobile'
					}
				},
				pedestrianDay: 'pedestrian.day',
				pedestrianNight: 'pedestrian.night',
				satelliteDay: {
					options: {
						base: 'aerial',
						variant: 'satellite.day'
					}
				},
				terrainDay: {
					options: {
						base: 'aerial',
						variant: 'terrain.day'
					}
				},
				terrainDayMobile: {
					options: {
						base: 'aerial',
						variant: 'terrain.day.mobile'
					}
				}
			}
		},
		Acetate: {
			url: 'http://a{s}.acetate.geoiq.com/tiles/{variant}/{z}/{x}/{y}.png',
			options: {
				attribution:
					'&copy;2012 Esri & Stamen, Data from OSM and Natural Earth',
				subdomains: '0123',
				minZoom: 2,
				maxZoom: 18,
				variant: 'acetate-base'
			},
			variants: {
				basemap: 'acetate-base',
				terrain: 'terrain',
				all: 'acetate-hillshading',
				foreground: 'acetate-fg',
				roads: 'acetate-roads',
				labels: 'acetate-labels',
				hillshading: 'hillshading'
			}
		},
		FreeMapSK: {
			url: 'http://{s}.freemap.sk/T/{z}/{x}/{y}.jpeg',
			options: {
				minZoom: 8,
				maxZoom: 16,
				subdomains: ['t1', 't2', 't3', 't4'],
				attribution:
					'{attribution.OpenStreetMap}, vizualization CC-By-SA 2.0 <a href="http://freemap.sk">Freemap.sk</a>'
			}
		},
		MtbMap: {
			url: 'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png',
			options: {
				attribution:
					'{attribution.OpenStreetMap} &amp; USGS'
			}
		},
		CartoDB: {
			url: 'http://{s}.basemaps.cartocdn.com/{variant}/{z}/{x}/{y}.png',
			options: {
				attribution: '{attribution.OpenStreetMap} &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
				subdomains: 'abcd',
				maxZoom: 19,
				variant: 'light_all'
			},
			variants: {
				Positron: 'light_all',
				PositronNoLabels: 'light_nolabels',
				DarkMatter: 'dark_all',
				DarkMatterNoLabels: 'dark_nolabels'
			}
		},
		HikeBike: {
			url: 'http://{s}.tiles.wmflabs.org/{variant}/{z}/{x}/{y}.png',
			options: {
				maxZoom: 19,
				attribution: '{attribution.OpenStreetMap}',
				variant: 'hikebike'
			},
			variants: {
				HikeBike: {},
				HillShading: {
					options: {
						maxZoom: 15,
						variant: 'hillshading'
					}
				}
			}
		},
		BasemapAT: {
			url: '//maps{s}.wien.gv.at/basemap/{variant}/normal/google3857/{z}/{y}/{x}.{format}',
			options: {
				maxZoom: 19,
				attribution: 'Datenquelle: <a href="www.basemap.at">basemap.at</a>',
				subdomains: ['', '1', '2', '3', '4'],
				format: 'png',
				bounds: [[46.358770, 8.782379], [49.037872, 17.189532]],
				variant: 'geolandbasemap'
			},
			variants: {
				basemap: 'geolandbasemap',
				grau: 'bmapgrau',
				overlay: 'bmapoverlay',
				highdpi: {
					options: {
						variant: 'bmaphidpi',
						format: 'jpeg'
					}
				},
				orthofoto: {
					options: {
						variant: 'bmaporthofoto30cm',
						format: 'jpeg'
					}
				}
			}
		},
		NASAGIBS: {
			url: '//map1.vis.earthdata.nasa.gov/wmts-webmerc/{variant}/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}',
			options: {
				attribution:
					'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System ' +
					'(<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
				bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
				minZoom: 1,
				maxZoom: 9,
				format: 'jpg',
				time: '',
				tilematrixset: 'GoogleMapsCompatible_Level'
			},
			variants: {
				ModisTerraTrueColorCR: 'MODIS_Terra_CorrectedReflectance_TrueColor',
				ModisTerraBands367CR: 'MODIS_Terra_CorrectedReflectance_Bands367',
				ViirsEarthAtNight2012: {
					options: {
						variant: 'VIIRS_CityLights_2012',
						maxZoom: 8
					}
				},
				ModisTerraLSTDay: {
					options: {
						variant: 'MODIS_Terra_Land_Surface_Temp_Day',
						format: 'png',
						maxZoom: 7,
						opacity: 0.75
					}
				},
				ModisTerraSnowCover: {
					options: {
						variant: 'MODIS_Terra_Snow_Cover',
						format: 'png',
						maxZoom: 8,
						opacity: 0.75
					}
				},
				ModisTerraAOD: {
					options: {
						variant: 'MODIS_Terra_Aerosol',
						format: 'png',
						maxZoom: 6,
						opacity: 0.75
					}
				},
				ModisTerraChlorophyll: {
					options: {
						variant: 'MODIS_Terra_Chlorophyll_A',
						format: 'png',
						maxZoom: 7,
						opacity: 0.75
					}
				}
			}
		}
	};

	L.tileLayer.provider = function (provider, options) {
		return new L.TileLayer.Provider(provider, options);
	};

	return L;
}));

(function(){

// This is for grouping buttons into a bar
// takes an array of `L.easyButton`s and
// then the usual `.addTo(map)`
L.Control.EasyBar = L.Control.extend({

  options: {
    position:       'topleft',  // part of leaflet's defaults
    id:             null,       // an id to tag the Bar with
    leafletClasses: true        // use leaflet classes?
  },


  initialize: function(buttons, options){

    if(options){
      L.Util.setOptions( this, options );
    }

    this._buildContainer();
    this._buttons = [];

    for(var i = 0; i < buttons.length; i++){
      buttons[i]._bar = this;
      buttons[i]._container = buttons[i].button;
      this._buttons.push(buttons[i]);
      this.container.appendChild(buttons[i].button);
    }

  },


  _buildContainer: function(){
    this._container = this.container = L.DomUtil.create('div', '');
    this.options.leafletClasses && L.DomUtil.addClass(this.container, 'leaflet-bar easy-button-container leaflet-control');
    this.options.id && (this.container.id = this.options.id);
  },


  enable: function(){
    L.DomUtil.addClass(this.container, 'enabled');
    L.DomUtil.removeClass(this.container, 'disabled');
    this.container.setAttribute('aria-hidden', 'false');
    return this;
  },


  disable: function(){
    L.DomUtil.addClass(this.container, 'disabled');
    L.DomUtil.removeClass(this.container, 'enabled');
    this.container.setAttribute('aria-hidden', 'true');
    return this;
  },


  onAdd: function () {
    return this.container;
  },

  addTo: function (map) {
    this._map = map;

    for(var i = 0; i < this._buttons.length; i++){
      this._buttons[i]._map = map;
    }

    var container = this._container = this.onAdd(map),
        pos = this.getPosition(),
        corner = map._controlCorners[pos];

    L.DomUtil.addClass(container, 'leaflet-control');

    if (pos.indexOf('bottom') !== -1) {
      corner.insertBefore(container, corner.firstChild);
    } else {
      corner.appendChild(container);
    }

    return this;
  }

});

L.easyBar = function(){
  var args = [L.Control.EasyBar];
  for(var i = 0; i < arguments.length; i++){
    args.push( arguments[i] );
  }
  return new (Function.prototype.bind.apply(L.Control.EasyBar, args));
};

// L.EasyButton is the actual buttons
// can be called without being grouped into a bar
L.Control.EasyButton = L.Control.extend({

  options: {
    position:  'topleft',       // part of leaflet's defaults

    id:        null,            // an id to tag the button with

    type:      'replace',       // [(replace|animate)]
                                // replace swaps out elements
                                // animate changes classes with all elements inserted

    states:    [],              // state names look like this
                                // {
                                //   stateName: 'untracked',
                                //   onClick: function(){ handle_nav_manually(); };
                                //   title: 'click to make inactive',
                                //   icon: 'fa-circle',    // wrapped with <a>
                                // }

    leafletClasses:   true      // use leaflet styles for the button
  },



  initialize: function(icon, onClick, title, id){

    // clear the states manually
    this.options.states = [];

    // add id to options
    if(id != null){
      this.options.id = id;
    }

    // storage between state functions
    this.storage = {};

    // is the last item an object?
    if( typeof arguments[arguments.length-1] === 'object' ){

      // if so, it should be the options
      L.Util.setOptions( this, arguments[arguments.length-1] );
    }

    // if there aren't any states in options
    // use the early params
    if( this.options.states.length === 0 &&
        typeof icon  === 'string' &&
        typeof onClick === 'function'){

      // turn the options object into a state
      this.options.states.push({
        icon: icon,
        onClick: onClick,
        title: typeof title === 'string' ? title : ''
      });
    }

    // curate and move user's states into
    // the _states for internal use
    this._states = [];

    for(var i = 0; i < this.options.states.length; i++){
      this._states.push( new State(this.options.states[i], this) );
    }

    this._buildButton();

    this._activateState(this._states[0]);

  },

  _buildButton: function(){

    this.button = L.DomUtil.create('button', '');

    if (this.options.id ){
      this.button.id = this.options.id;
    }

    if (this.options.leafletClasses){
      L.DomUtil.addClass(this.button, 'easy-button-button leaflet-bar-part');
    }

    // don't let double clicks get to the map
    L.DomEvent.addListener(this.button, 'dblclick', L.DomEvent.stop);

    // take care of normal clicks
    L.DomEvent.addListener(this.button,'click', function(e){
      L.DomEvent.stop(e);
      this._currentState.onClick(this, this._map ? this._map : null );
      this._map.getContainer().focus();
    }, this);

    // prep the contents of the control
    if(this.options.type == 'replace'){
      this.button.appendChild(this._currentState.icon);
    } else {
      for(var i=0;i<this._states.length;i++){
        this.button.appendChild(this._states[i].icon);
      }
    }
  },


  _currentState: {
    // placeholder content
    stateName: 'unnamed',
    icon: (function(){ return document.createElement('span'); })()
  },



  _states: null, // populated on init



  state: function(newState){

    // activate by name
    if(typeof newState == 'string'){

      this._activateStateNamed(newState);

    // activate by index
    } else if (typeof newState == 'number'){

      this._activateState(this._states[newState]);
    }

    return this;
  },


  _activateStateNamed: function(stateName){
    for(var i = 0; i < this._states.length; i++){
      if( this._states[i].stateName == stateName ){
        this._activateState( this._states[i] );
      }
    }
  },

  _activateState: function(newState){

    if( newState === this._currentState ){

      // don't touch the dom if it'll just be the same after
      return;

    } else {

      // swap out elements... if you're into that kind of thing
      if( this.options.type == 'replace' ){
        this.button.appendChild(newState.icon);
        this.button.removeChild(this._currentState.icon);
      }

      if( newState.title ){
        this.button.title = newState.title;
      } else {
        this.button.removeAttribute('title');
      }

      // update classes for animations
      for(var i=0;i<this._states.length;i++){
        L.DomUtil.removeClass(this._states[i].icon, this._currentState.stateName + '-active');
        L.DomUtil.addClass(this._states[i].icon, newState.stateName + '-active');
      }

      // update classes for animations
      L.DomUtil.removeClass(this.button, this._currentState.stateName + '-active');
      L.DomUtil.addClass(this.button, newState.stateName + '-active');

      // update the record
      this._currentState = newState;

    }
  },



  enable: function(){
    L.DomUtil.addClass(this.button, 'enabled');
    L.DomUtil.removeClass(this.button, 'disabled');
    this.button.setAttribute('aria-hidden', 'false');
    return this;
  },



  disable: function(){
    L.DomUtil.addClass(this.button, 'disabled');
    L.DomUtil.removeClass(this.button, 'enabled');
    this.button.setAttribute('aria-hidden', 'true');
    return this;
  },


  removeFrom: function (map) {

    this._container.parentNode.removeChild(this._container);
    this._map = null;

    return this;
  },

  onAdd: function(){
    var containerObj = L.easyBar([this], {
      position: this.options.position,
      leafletClasses: this.options.leafletClasses
    });
    this._container = containerObj.container;
    return this._container;
  }


});

L.easyButton = function(/* args will pass automatically */){
  var args = Array.prototype.concat.apply([L.Control.EasyButton],arguments);
  return new (Function.prototype.bind.apply(L.Control.EasyButton, args));
};

/*************************
 *
 * util functions
 *
 *************************/

// constructor for states so only curated
// states end up getting called
function State(template, easyButton){

  this.title = template.title;
  this.stateName = template.stateName ? template.stateName : 'unnamed-state';

  // build the wrapper
  this.icon = L.DomUtil.create('span', '');

  L.DomUtil.addClass(this.icon, 'button-state state-' + this.stateName.replace(/(^\s*|\s*$)/g,''));
  this.icon.innerHTML = buildIcon(template.icon);
  this.onClick = L.Util.bind(template.onClick?template.onClick:function(){}, easyButton);
}

function buildIcon(ambiguousIconString) {

  var tmpIcon;

  // does this look like html? (i.e. not a class)
  if( ambiguousIconString.match(/[&;=<>"']/) ){

    // if so, the user should have put in html
    // so move forward as such
    tmpIcon = ambiguousIconString;

  // then it wasn't html, so
  // it's a class list, figure out what kind
  } else {
      ambiguousIconString = ambiguousIconString.replace(/(^\s*|\s*$)/g,'');
      tmpIcon = L.DomUtil.create('span', '');

      if( ambiguousIconString.indexOf('fa-') === 0 ){
        L.DomUtil.addClass(tmpIcon, 'fa '  + ambiguousIconString)
      } else if ( ambiguousIconString.indexOf('glyphicon-') === 0 ) {
        L.DomUtil.addClass(tmpIcon, 'glyphicon ' + ambiguousIconString)
      } else {
        L.DomUtil.addClass(tmpIcon, /*rollwithit*/ ambiguousIconString)
      }

      // make this a string so that it's easy to set innerHTML below
      tmpIcon = tmpIcon.outerHTML;
  }

  return tmpIcon;
}

})();

L.Control.Sidebar = L.Control.extend({

    includes: L.Mixin.Events,

    options: {
        closeButton: true,
        position: 'left',
        autoPan: true,
    },

    initialize: function (placeholder, options) {
        L.setOptions(this, options);

        // Find content container
        var content = this._contentContainer = L.DomUtil.get(placeholder);

        // Remove the content container from its original parent
        content.parentNode.removeChild(content);

        var l = 'leaflet-';

        // Create sidebar container
        var container = this._container =
            L.DomUtil.create('div', l + 'sidebar ' + this.options.position);

        // Style and attach content container
        L.DomUtil.addClass(content, l + 'control');
        container.appendChild(content);

        // Create close button and attach it if configured
        if (this.options.closeButton) {
            var close = this._closeButton =
                L.DomUtil.create('a', 'close', container);
            close.innerHTML = '&times;';
        }
    },

    addTo: function (map) {
        var container = this._container;
        var content = this._contentContainer;

        // Attach event to close button
        if (this.options.closeButton) {
            var close = this._closeButton;

            L.DomEvent.on(close, 'click', this.hide, this);
        }

        L.DomEvent
            .on(container, 'transitionend',
                this._handleTransitionEvent, this)
            .on(container, 'webkitTransitionEnd',
                this._handleTransitionEvent, this);

        // Attach sidebar container to controls container
        var controlContainer = map._controlContainer;
        controlContainer.insertBefore(container, controlContainer.firstChild);

        this._map = map;

        // Make sure we don't drag the map when we interact with the content
        var stop = L.DomEvent.stopPropagation;
        var fakeStop = L.DomEvent._fakeStop || stop;
        L.DomEvent
            .on(content, 'contextmenu', stop)
            .on(content, 'click', fakeStop)
            .on(content, 'mousedown', stop)
            .on(content, 'touchstart', stop)
            .on(content, 'dblclick', fakeStop)
            .on(content, 'mousewheel', stop)
            .on(content, 'MozMousePixelScroll', stop);

        return this;
    },

    removeFrom: function (map) {
        //if the control is visible, hide it before removing it.
        this.hide();

        var container = this._container;
        var content = this._contentContainer;

        // Remove sidebar container from controls container
        var controlContainer = map._controlContainer;
        controlContainer.removeChild(container);

        //disassociate the map object
        this._map = null;

        // Unregister events to prevent memory leak
        var stop = L.DomEvent.stopPropagation;
        var fakeStop = L.DomEvent._fakeStop || stop;
        L.DomEvent
            .off(content, 'contextmenu', stop)
            .off(content, 'click', fakeStop)
            .off(content, 'mousedown', stop)
            .off(content, 'touchstart', stop)
            .off(content, 'dblclick', fakeStop)
            .off(content, 'mousewheel', stop)
            .off(content, 'MozMousePixelScroll', stop);

        L.DomEvent
            .off(container, 'transitionend',
                this._handleTransitionEvent, this)
            .off(container, 'webkitTransitionEnd',
                this._handleTransitionEvent, this);

        if (this._closeButton && this._close) {
            var close = this._closeButton;

            L.DomEvent.off(close, 'click', this.hide, this);
        }

        return this;
    },

    isVisible: function () {
        return L.DomUtil.hasClass(this._container, 'visible');
    },

    show: function () {
        if (!this.isVisible()) {
            L.DomUtil.addClass(this._container, 'visible');
            if (this.options.autoPan) {
                this._map.panBy([-this.getOffset() / 2, 0], {
                    duration: 0.5
                });
            }
            this.fire('show');
        }
    },

    hide: function (e) {
        if (this.isVisible()) {
            L.DomUtil.removeClass(this._container, 'visible');
            if (this.options.autoPan) {
                this._map.panBy([this.getOffset() / 2, 0], {
                    duration: 0.5
                });
            }
            this.fire('hide');
        }
        if(e) {
            L.DomEvent.stopPropagation(e);
        }
    },

    toggle: function () {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
    },

    getContainer: function () {
        return this._contentContainer;
    },

    getCloseButton: function () {
        return this._closeButton;
    },

    setContent: function (content) {
        var container = this.getContainer();

        if (typeof content === 'string') {
            container.innerHTML = content;
        } else {
            // clean current content
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            container.appendChild(content);
        }

        return this;
    },

    getOffset: function () {
        if (this.options.position === 'right') {
            return -this._container.offsetWidth;
        } else {
            return this._container.offsetWidth;
        }
    },

    _handleTransitionEvent: function (e) {
        if (e.propertyName == 'left' || e.propertyName == 'right')
            this.fire(this.isVisible() ? 'shown' : 'hidden');
    }
});

L.control.sidebar = function (placeholder, options) {
    return new L.Control.Sidebar(placeholder, options);
};

/*
 * L.Control.Loading is a control that shows a loading indicator when tiles are
 * loading or when map-related AJAX requests are taking place.
 */

(function () {

    var console = window.console || {
        error: function () {},
        warn: function () {}
    };

    function defineLeafletLoading(L) {
        L.Control.Loading = L.Control.extend({
            options: {
                position: 'topleft',
                separate: false,
                zoomControl: null,
                spinjs: false,
                spin: { 
                  lines: 7, 
                  length: 3, 
                  width: 3, 
                  radius: 5, 
                  rotate: 13, 
                  top: "83%"
                }
            },

            initialize: function(options) {
                L.setOptions(this, options);
                this._dataLoaders = {};

                // Try to set the zoom control this control is attached to from the 
                // options
                if (this.options.zoomControl !== null) {
                    this.zoomControl = this.options.zoomControl;
                }
            },

            onAdd: function(map) {
                if (this.options.spinjs && (typeof Spinner !== 'function')) {
                    return console.error("Leaflet.loading cannot load because you didn't load spin.js (http://fgnass.github.io/spin.js/), even though you set it in options.");
                }
                this._addLayerListeners(map);
                this._addMapListeners(map);

                // Try to set the zoom control this control is attached to from the map
                // the control is being added to
                if (!this.options.separate && !this.zoomControl) {
                    if (map.zoomControl) {
                        this.zoomControl = map.zoomControl;
                    } else if (map.zoomsliderControl) {
                        this.zoomControl = map.zoomsliderControl;
                    }
                }

                // Create the loading indicator
                var classes = 'leaflet-control-loading';
                var container;
                if (this.zoomControl && !this.options.separate) {
                    // If there is a zoom control, hook into the bottom of it
                    container = this.zoomControl._container;
                    // These classes are no longer used as of Leaflet 0.6
                    classes += ' leaflet-bar-part-bottom leaflet-bar-part last';

                    // Loading control will be added to the zoom control. So the visible last element is not the
                    // last dom element anymore. So add the part-bottom class.
                    L.DomUtil.addClass(this._getLastControlButton(), 'leaflet-bar-part-bottom');
                }
                else {
                    // Otherwise, create a container for the indicator
                    container = L.DomUtil.create('div', 'leaflet-control-zoom leaflet-bar');
                }
                this._indicator = L.DomUtil.create('a', classes, container);
                if (this.options.spinjs) {
                  this._spinner = new Spinner(this.options.spin).spin();
                  this._indicator.appendChild(this._spinner.el);
                }
                return container;
            },

            onRemove: function(map) {
                this._removeLayerListeners(map);
                this._removeMapListeners(map);
            },

            removeFrom: function (map) {
                if (this.zoomControl && !this.options.separate) {
                    // Override Control.removeFrom() to avoid clobbering the entire
                    // _container, which is the same as zoomControl's
                    this._container.removeChild(this._indicator);
                    this._map = null;
                    this.onRemove(map);
                    return this;
                }
                else {
                    // If this control is separate from the zoomControl, call the
                    // parent method so we don't leave behind an empty container
                    return L.Control.prototype.removeFrom.call(this, map);
                }
            },

            addLoader: function(id) {
                this._dataLoaders[id] = true;
                this.updateIndicator();
            },

            removeLoader: function(id) {
                delete this._dataLoaders[id];
                this.updateIndicator();
            },

            updateIndicator: function() {
                if (this.isLoading()) {
                    this._showIndicator();
                }
                else {
                    this._hideIndicator();
                }
            },

            isLoading: function() {
                return this._countLoaders() > 0;
            },

            _countLoaders: function() {
                var size = 0, key;
                for (key in this._dataLoaders) {
                    if (this._dataLoaders.hasOwnProperty(key)) size++;
                }
                return size;
            },

            _showIndicator: function() {
                // Show loading indicator
                L.DomUtil.addClass(this._indicator, 'is-loading');

                // If zoomControl exists, make the zoom-out button not last
                if (!this.options.separate) {
                    if (this.zoomControl instanceof L.Control.Zoom) {
                        L.DomUtil.removeClass(this._getLastControlButton(), 'leaflet-bar-part-bottom');
                    }
                    else if (typeof L.Control.Zoomslider === 'function' && this.zoomControl instanceof L.Control.Zoomslider) {
                        L.DomUtil.removeClass(this.zoomControl._ui.zoomOut, 'leaflet-bar-part-bottom');
                    }
                }
            },

            _hideIndicator: function() {
                // Hide loading indicator
                L.DomUtil.removeClass(this._indicator, 'is-loading');

                // If zoomControl exists, make the zoom-out button last
                if (!this.options.separate) {
                    if (this.zoomControl instanceof L.Control.Zoom) {
                        L.DomUtil.addClass(this._getLastControlButton(), 'leaflet-bar-part-bottom');
                    }
                    else if (typeof L.Control.Zoomslider === 'function' && this.zoomControl instanceof L.Control.Zoomslider) {
                        L.DomUtil.addClass(this.zoomControl._ui.zoomOut, 'leaflet-bar-part-bottom');
                    }
                }
            },

            _getLastControlButton: function() {
                var container = this.zoomControl._container,
                    index = container.children.length - 1;

                // Find the last visible control button that is not our loading
                // indicator
                while (index > 0) {
                    var button = container.children[index];
                    if (!(this._indicator === button || button.offsetWidth === 0 || button.offsetHeight === 0)) {
                        break;
                    }
                    index--;
                }

                return container.children[index];
            },

            _handleLoading: function(e) {
                this.addLoader(this.getEventId(e));
            },

            _handleLoad: function(e) {
                this.removeLoader(this.getEventId(e));
            },

            getEventId: function(e) {
                if (e.id) {
                    return e.id;
                }
                else if (e.layer) {
                    return e.layer._leaflet_id;
                }
                return e.target._leaflet_id;
            },

            _layerAdd: function(e) {
                if (!e.layer || !e.layer.on) return
                try {
                    e.layer.on({
                        loading: this._handleLoading,
                        load: this._handleLoad
                    }, this);
                }
                catch (exception) {
                    console.warn('L.Control.Loading: Tried and failed to add ' +
                                 ' event handlers to layer', e.layer);
                    console.warn('L.Control.Loading: Full details', exception);
                }
            },

            _addLayerListeners: function(map) {
                // Add listeners for begin and end of load to any layers already on the 
                // map
                map.eachLayer(function(layer) {
                    if (!layer.on) return;
                    layer.on({
                        loading: this._handleLoading,
                        load: this._handleLoad
                    }, this);
                }, this);

                // When a layer is added to the map, add listeners for begin and end
                // of load
                map.on('layeradd', this._layerAdd, this);
            },

            _removeLayerListeners: function(map) {
                // Remove listeners for begin and end of load from all layers
                map.eachLayer(function(layer) {
                    if (!layer.off) return;
                    layer.off({
                        loading: this._handleLoading,
                        load: this._handleLoad
                    }, this);
                }, this);

                // Remove layeradd listener from map
                map.off('layeradd', this._layerAdd, this);
            },

            _addMapListeners: function(map) {
                // Add listeners to the map for (custom) dataloading and dataload
                // events, eg, for AJAX calls that affect the map but will not be
                // reflected in the above layer events.
                map.on({
                    dataloading: this._handleLoading,
                    dataload: this._handleLoad,
                    layerremove: this._handleLoad
                }, this);
            },

            _removeMapListeners: function(map) {
                map.off({
                    dataloading: this._handleLoading,
                    dataload: this._handleLoad,
                    layerremove: this._handleLoad
                }, this);
            }
        });

        L.Map.addInitHook(function () {
            if (this.options.loadingControl) {
                this.loadingControl = new L.Control.Loading();
                this.addControl(this.loadingControl);
            }
        });

        L.Control.loading = function(options) {
            return new L.Control.Loading(options);
        };
    }

    if (typeof define === 'function' && define.amd) {
        // Try to add leaflet.loading to Leaflet using AMD
        define(['leaflet'], function (L) {
            defineLeafletLoading(L);
        });
    }
    else {
        // Else use the global L
        defineLeafletLoading(L);
    }

})();

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 13             // The number of lines to draw
  , length: 30             // The length of each line
  , width: 2              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 0.5            // Roundness (0..1)
  , color: '#436243'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 0.9              // Rounds per second
  , trail: 60            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));

L.SpinMapMixin = {
    spin: function (state, options) {
        if (!!state) {
            // start spinning !
            if (!this._spinner) {
                this._spinner = new Spinner(options).spin(this._container);
                this._spinning = 0;
            }
            this._spinning++;
        }
        else {
            this._spinning--;
            if (this._spinning <= 0) {
                // end spinning !
                if (this._spinner) {
                    this._spinner.stop();
                    this._spinner = null;
                }
            }
        }
    }
};

L.Map.include(L.SpinMapMixin);

L.Map.addInitHook(function () {
    this.on('layeradd', function (e) {
        // If added layer is currently loading, spin !
        if (e.layer.loading) this.spin(true);
        if (typeof e.layer.on != 'function') return;
        e.layer.on('data:loading', function () { this.spin(true); }, this);
        e.layer.on('data:loaded',  function () { this.spin(false); }, this);
    }, this);
    this.on('layerremove', function (e) {
        // Clean-up
        if (e.layer.loading) this.spin(false);
        if (typeof e.layer.on != 'function') return;
        e.layer.off('data:loaded');
        e.layer.off('data:loading');
    }, this);
});

/*
 * Leaflet plugin to create map icons using Maki Icons from MapBox.
 *
 * References:
 *   Maki Icons: https://www.mapbox.com/maki/
 *   MapBox Marker API: https://www.mapbox.com/developers/api/static/#markers
 *
 * Usage:
 *   var icon = L.MakiMarkers.icon({icon: "rocket", color: "#b0b", size: "m"});
 *
 * License:
 *   MIT: http://jseppi.mit-license.org/
 */
 /*global L:false */
(function () {
  "use strict";
  L.MakiMarkers = {
    // Available Maki Icons
    icons: ["airfield","airport","alcohol-shop","america-football","art-gallery","bakery","bank","bar",
      "baseball","basketball","beer","bicycle","building","bus","cafe","camera","campsite","car",
      "cemetery","chemist","cinema","circle-stroked","circle","city","clothing-store","college",
      "commercial","cricket","cross","dam","danger","disability","dog-park","embassy",
      "emergency-telephone","entrance","farm","fast-food","ferry","fire-station","fuel","garden",
      "golf","grocery","hairdresser","harbor","heart","heliport","hospital","industrial",
      "land-use","laundry","library","lighthouse","lodging","logging","london-underground",
      "marker-stroked","marker","minefield","mobilephone","monument","museum","music","oil-well",
      "park2","park","parking-garage","parking","pharmacy","pitch","place-of-worship",
      "playground","police","polling-place","post","prison","rail-above","rail-light",
      "rail-metro","rail-underground","rail","religious-christian","religious-jewish",
      "religious-muslim","restaurant","roadblock","rocket","school","scooter","shop","skiing",
      "slaughterhouse","soccer","square-stroked","square","star-stroked","star","suitcase",
      "swimming","telephone","tennis","theatre","toilets","town-hall","town","triangle-stroked",
      "triangle","village","warehouse","waste-basket","water","wetland","zoo"
    ],
    defaultColor: "#0a0",
    defaultIcon: "circle-stroked",
    defaultSize: "m",
    apiUrl: "https://api.tiles.mapbox.com/v3/marker/",
    smallOptions: {
      iconSize: [20, 50],
      popupAnchor: [0,-20]
    },
    mediumOptions: {
      iconSize: [30,70],
      popupAnchor: [0,-30]
    },
    largeOptions: {
      iconSize: [36,90],
      popupAnchor: [0,-40]
    }
  };

  L.MakiMarkers.Icon = L.Icon.extend({
    options: {
      //Maki icon: any from https://www.mapbox.com/maki/ (ref: L.MakiMarkers.icons)
      icon: L.MakiMarkers.defaultIcon,
      //Marker color: short or long form hex color code
      color: L.MakiMarkers.defaultColor,
      //Marker size: "s" (small), "m" (medium), or "l" (large)
      size: L.MakiMarkers.defaultSize,
      shadowAnchor: null,
      shadowSize: null,
      shadowUrl: null,
      className: "maki-marker"
    },

    initialize: function(options) {
      var pin;

      options = L.setOptions(this, options);

      switch (options.size) {
        case "s":
          L.extend(options, L.MakiMarkers.smallOptions);
          break;
        case "l":
          L.extend(options, L.MakiMarkers.largeOptions);
          break;
        default:
          options.size = "m";
          L.extend(options, L.MakiMarkers.mediumOptions);
          break;
      }


      pin = "pin-" + options.size;

      if (options.icon !== null) {
        pin += "-" + options.icon;
      }

      if (options.color !== null) {
        if (options.color.charAt(0) === "#") {
          options.color = options.color.substr(1);
        }

        pin += "+" + options.color;
      }

      options.iconUrl = "" + L.MakiMarkers.apiUrl + pin +  ".png";
      options.iconRetinaUrl = L.MakiMarkers.apiUrl + pin + "@2x.png";
    }
  });

  L.MakiMarkers.icon = function(options) {
    return new L.MakiMarkers.Icon(options);
  };
})();

/* esri-leaflet - v2.0.0-beta.7 - Fri Jan 01 2016 10:31:42 GMT-0800 (PST)
 * Copyright (c) 2016 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?factory(exports,require("leaflet")):typeof define==="function"&&define.amd?define(["exports","leaflet"],factory):factory(global.L.esri={},L)})(this,function(exports,L){"use strict";var GeojsonUtil={get arcgisToGeoJSON(){return arcgisToGeoJSON},get geojsonToArcGIS(){return _geojsonToArcGIS}};var cors=window.XMLHttpRequest&&"withCredentials"in new window.XMLHttpRequest;var pointerEvents=document.documentElement.style.pointerEvents==="";exports.Support={cors:cors,pointerEvents:pointerEvents};function pointsEqual(a,b){for(var i=0;i<a.length;i++){if(a[i]!==b[i]){return false}}return true}function closeRing(coordinates){if(!pointsEqual(coordinates[0],coordinates[coordinates.length-1])){coordinates.push(coordinates[0])}return coordinates}function ringIsClockwise(ringToTest){var total=0;var i=0;var rLength=ringToTest.length;var pt1=ringToTest[i];var pt2;for(i;i<rLength-1;i++){pt2=ringToTest[i+1];total+=(pt2[0]-pt1[0])*(pt2[1]+pt1[1]);pt1=pt2}return total>=0}function vertexIntersectsVertex(a1,a2,b1,b2){var uaT=(b2[0]-b1[0])*(a1[1]-b1[1])-(b2[1]-b1[1])*(a1[0]-b1[0]);var ubT=(a2[0]-a1[0])*(a1[1]-b1[1])-(a2[1]-a1[1])*(a1[0]-b1[0]);var uB=(b2[1]-b1[1])*(a2[0]-a1[0])-(b2[0]-b1[0])*(a2[1]-a1[1]);if(uB!==0){var ua=uaT/uB;var ub=ubT/uB;if(ua>=0&&ua<=1&&ub>=0&&ub<=1){return true}}return false}function arrayIntersectsArray(a,b){for(var i=0;i<a.length-1;i++){for(var j=0;j<b.length-1;j++){if(vertexIntersectsVertex(a[i],a[i+1],b[j],b[j+1])){return true}}}return false}function coordinatesContainPoint(coordinates,point){var contains=false;for(var i=-1,l=coordinates.length,j=l-1;++i<l;j=i){if((coordinates[i][1]<=point[1]&&point[1]<coordinates[j][1]||coordinates[j][1]<=point[1]&&point[1]<coordinates[i][1])&&point[0]<(coordinates[j][0]-coordinates[i][0])*(point[1]-coordinates[i][1])/(coordinates[j][1]-coordinates[i][1])+coordinates[i][0]){contains=!contains}}return contains}function coordinatesContainCoordinates(outer,inner){var intersects=arrayIntersectsArray(outer,inner);var contains=coordinatesContainPoint(outer,inner[0]);if(!intersects&&contains){return true}return false}function convertRingsToGeoJSON(rings){var outerRings=[];var holes=[];var x;var outerRing;var hole;for(var r=0;r<rings.length;r++){var ring=closeRing(rings[r].slice(0));if(ring.length<4){continue}if(ringIsClockwise(ring)){var polygon=[ring];outerRings.push(polygon)}else{holes.push(ring)}}var uncontainedHoles=[];while(holes.length){hole=holes.pop();var contained=false;for(x=outerRings.length-1;x>=0;x--){outerRing=outerRings[x][0];if(coordinatesContainCoordinates(outerRing,hole)){outerRings[x].push(hole);contained=true;break}}if(!contained){uncontainedHoles.push(hole)}}while(uncontainedHoles.length){hole=uncontainedHoles.pop();var intersects=false;for(x=outerRings.length-1;x>=0;x--){outerRing=outerRings[x][0];if(arrayIntersectsArray(outerRing,hole)){outerRings[x].push(hole);intersects=true;break}}if(!intersects){outerRings.push([hole.reverse()])}}if(outerRings.length===1){return{type:"Polygon",coordinates:outerRings[0]}}else{return{type:"MultiPolygon",coordinates:outerRings}}}function orientRings(poly){var output=[];var polygon=poly.slice(0);var outerRing=closeRing(polygon.shift().slice(0));if(outerRing.length>=4){if(!ringIsClockwise(outerRing)){outerRing.reverse()}output.push(outerRing);for(var i=0;i<polygon.length;i++){var hole=closeRing(polygon[i].slice(0));if(hole.length>=4){if(ringIsClockwise(hole)){hole.reverse()}output.push(hole)}}}return output}function flattenMultiPolygonRings(rings){var output=[];for(var i=0;i<rings.length;i++){var polygon=orientRings(rings[i]);for(var x=polygon.length-1;x>=0;x--){var ring=polygon[x].slice(0);output.push(ring)}}return output}function _shallowClone(obj){var target={};for(var i in obj){if(obj.hasOwnProperty(i)){target[i]=obj[i]}}return target}function arcgisToGeoJSON(arcgis,idAttribute){var geojson={};if(typeof arcgis.x==="number"&&typeof arcgis.y==="number"){geojson.type="Point";geojson.coordinates=[arcgis.x,arcgis.y]}if(arcgis.points){geojson.type="MultiPoint";geojson.coordinates=arcgis.points.slice(0)}if(arcgis.paths){if(arcgis.paths.length===1){geojson.type="LineString";geojson.coordinates=arcgis.paths[0].slice(0)}else{geojson.type="MultiLineString";geojson.coordinates=arcgis.paths.slice(0)}}if(arcgis.rings){geojson=convertRingsToGeoJSON(arcgis.rings.slice(0))}if(arcgis.geometry||arcgis.attributes){geojson.type="Feature";geojson.geometry=arcgis.geometry?arcgisToGeoJSON(arcgis.geometry):null;geojson.properties=arcgis.attributes?_shallowClone(arcgis.attributes):null;if(arcgis.attributes){geojson.id=arcgis.attributes[idAttribute]||arcgis.attributes.OBJECTID||arcgis.attributes.FID}}return geojson}function _geojsonToArcGIS(geojson,idAttribute){idAttribute=idAttribute||"OBJECTID";var spatialReference={wkid:4326};var result={};var i;switch(geojson.type){case"Point":result.x=geojson.coordinates[0];result.y=geojson.coordinates[1];result.spatialReference=spatialReference;break;case"MultiPoint":result.points=geojson.coordinates.slice(0);result.spatialReference=spatialReference;break;case"LineString":result.paths=[geojson.coordinates.slice(0)];result.spatialReference=spatialReference;break;case"MultiLineString":result.paths=geojson.coordinates.slice(0);result.spatialReference=spatialReference;break;case"Polygon":result.rings=orientRings(geojson.coordinates.slice(0));result.spatialReference=spatialReference;break;case"MultiPolygon":result.rings=flattenMultiPolygonRings(geojson.coordinates.slice(0));result.spatialReference=spatialReference;break;case"Feature":if(geojson.geometry){result.geometry=_geojsonToArcGIS(geojson.geometry,idAttribute)}result.attributes=geojson.properties?_shallowClone(geojson.properties):{};if(geojson.id){result.attributes[idAttribute]=geojson.id}break;case"FeatureCollection":result=[];for(i=0;i<geojson.features.length;i++){result.push(_geojsonToArcGIS(geojson.features[i],idAttribute))}break;case"GeometryCollection":result=[];for(i=0;i<geojson.geometries.length;i++){result.push(_geojsonToArcGIS(geojson.geometries[i],idAttribute))}break}return result}function shallowClone(obj){var target={};for(var i in obj){if(obj.hasOwnProperty(i)){target[i]=obj[i]}}return target}function extentToBounds(extent){var sw=L.latLng(extent.ymin,extent.xmin);var ne=L.latLng(extent.ymax,extent.xmax);return L.latLngBounds(sw,ne)}function boundsToExtent(bounds){bounds=L.latLngBounds(bounds);return{xmin:bounds.getSouthWest().lng,ymin:bounds.getSouthWest().lat,xmax:bounds.getNorthEast().lng,ymax:bounds.getNorthEast().lat,spatialReference:{wkid:4326}}}var g2a=GeojsonUtil.geojsonToArcGIS;var a2g=GeojsonUtil.arcgisToGeoJSON;function responseToFeatureCollection(response,idAttribute){var objectIdField;if(idAttribute){objectIdField=idAttribute}else if(response.objectIdFieldName){objectIdField=response.objectIdFieldName}else if(response.fields){for(var j=0;j<=response.fields.length-1;j++){if(response.fields[j].type==="esriFieldTypeOID"){objectIdField=response.fields[j].name;break}}}else{objectIdField="OBJECTID"}var featureCollection={type:"FeatureCollection",features:[]};var features=response.features||response.results;if(features.length){for(var i=features.length-1;i>=0;i--){featureCollection.features.push(GeojsonUtil.arcgisToGeoJSON(features[i],objectIdField))}}return featureCollection}function cleanUrl(url){url=L.Util.trim(url);if(url[url.length-1]!=="/"){url+="/"}return url}function isArcgisOnline(url){return/\.arcgis\.com.*?FeatureServer/g.test(url)}function geojsonTypeToArcGIS(geoJsonType){var arcgisGeometryType;switch(geoJsonType){case"Point":arcgisGeometryType="esriGeometryPoint";break;case"MultiPoint":arcgisGeometryType="esriGeometryMultipoint";break;case"LineString":arcgisGeometryType="esriGeometryPolyline";break;case"MultiLineString":arcgisGeometryType="esriGeometryPolyline";break;case"Polygon":arcgisGeometryType="esriGeometryPolygon";break;case"MultiPolygon":arcgisGeometryType="esriGeometryPolygon";break}return arcgisGeometryType}function warn(){if(console&&console.warn){console.warn.apply(console,arguments)}}exports.Util={shallowClone:shallowClone,warn:warn,cleanUrl:cleanUrl,isArcgisOnline:isArcgisOnline,geojsonTypeToArcGIS:geojsonTypeToArcGIS,responseToFeatureCollection:responseToFeatureCollection,geojsonToArcGIS:g2a,arcgisToGeojson:a2g,boundsToExtent:boundsToExtent,extentToBounds:extentToBounds};var callbacks=0;function serialize(params){var data="";params.f=params.f||"json";for(var key in params){if(params.hasOwnProperty(key)){var param=params[key];var type=Object.prototype.toString.call(param);var value;if(data.length){data+="&"}if(type==="[object Array]"){value=Object.prototype.toString.call(param[0])==="[object Object]"?JSON.stringify(param):param.join(",")}else if(type==="[object Object]"){value=JSON.stringify(param)}else if(type==="[object Date]"){value=param.valueOf()}else{value=param}data+=encodeURIComponent(key)+"="+encodeURIComponent(value)}}return data}function createRequest(callback,context){var httpRequest=new window.XMLHttpRequest;httpRequest.onerror=function(e){httpRequest.onreadystatechange=L.Util.falseFn;callback.call(context,{error:{code:500,message:"XMLHttpRequest error"}},null)};httpRequest.onreadystatechange=function(){var response;var error;if(httpRequest.readyState===4){try{response=JSON.parse(httpRequest.responseText)}catch(e){response=null;error={code:500,message:"Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error."}}if(!error&&response.error){error=response.error;response=null}httpRequest.onerror=L.Util.falseFn;callback.call(context,error,response)}};return httpRequest}function xmlHttpPost(url,params,callback,context){var httpRequest=createRequest(callback,context);httpRequest.open("POST",url);httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");httpRequest.send(serialize(params));return httpRequest}function xmlHttpGet(url,params,callback,context){var httpRequest=createRequest(callback,context);httpRequest.open("GET",url+"?"+serialize(params),true);httpRequest.send(null);return httpRequest}function request(url,params,callback,context){var paramString=serialize(params);var httpRequest=createRequest(callback,context);var requestLength=(url+"?"+paramString).length;if(requestLength<=2e3&&exports.Support.cors){httpRequest.open("GET",url+"?"+paramString);httpRequest.send(null)}else if(requestLength>2e3&&exports.Support.cors){httpRequest.open("POST",url);httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");httpRequest.send(paramString)}else if(requestLength<=2e3&&!exports.Support.cors){return jsonp(url,params,callback,context)}else{warn("a request to "+url+" was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html");return}return httpRequest}function jsonp(url,params,callback,context){window._EsriLeafletCallbacks=window._EsriLeafletCallbacks||{};var callbackId="c"+callbacks;params.callback="window._EsriLeafletCallbacks."+callbackId;var script=L.DomUtil.create("script",null,document.body);script.type="text/javascript";script.src=url+"?"+serialize(params);script.id=callbackId;window._EsriLeafletCallbacks[callbackId]=function(response){if(window._EsriLeafletCallbacks[callbackId]!==true){var error;var responseType=Object.prototype.toString.call(response);if(!(responseType==="[object Object]"||responseType==="[object Array]")){error={error:{code:500,message:"Expected array or object as JSONP response"}};response=null}if(!error&&response.error){error=response;response=null}callback.call(context,error,response);window._EsriLeafletCallbacks[callbackId]=true}};callbacks++;return{id:callbackId,url:script.src,abort:function(){window._EsriLeafletCallbacks._callback[callbackId]({code:0,message:"Request aborted."})}}}exports.get=exports.Support.cors?xmlHttpGet:jsonp;exports.get.CORS=xmlHttpGet;exports.get.JSONP=jsonp;var Request={request:request,get:exports.get,post:xmlHttpPost};exports.Task=L.Class.extend({options:{proxy:false,useCors:cors},generateSetter:function(param,context){return L.Util.bind(function(value){this.params[param]=value;return this},context)},initialize:function(endpoint){if(endpoint.request&&endpoint.options){this._service=endpoint;L.Util.setOptions(this,endpoint.options)}else{L.Util.setOptions(this,endpoint);this.options.url=cleanUrl(endpoint.url)}this.params=L.Util.extend({},this.params||{});if(this.setters){for(var setter in this.setters){var param=this.setters[setter];this[setter]=this.generateSetter(param,this)}}},token:function(token){if(this._service){this._service.authenticate(token)}else{this.params.token=token}return this},request:function(callback,context){if(this._service){return this._service.request(this.path,this.params,callback,context)}return this._request("request",this.path,this.params,callback,context)},_request:function(method,path,params,callback,context){var url=this.options.proxy?this.options.proxy+"?"+this.options.url+path:this.options.url+path;if((method==="get"||method==="request")&&!this.options.useCors){return Request.get.JSONP(url,params,callback,context)}return Request[method](url,params,callback,context)}});function task(options){return new exports.Task(options)}exports.Query=exports.Task.extend({setters:{offset:"offset",limit:"limit",fields:"outFields",precision:"geometryPrecision",featureIds:"objectIds",returnGeometry:"returnGeometry",token:"token"},path:"query",params:{returnGeometry:true,where:"1=1",outSr:4326,outFields:"*"},within:function(geometry){this._setGeometry(geometry);this.params.spatialRel="esriSpatialRelContains";return this},intersects:function(geometry){this._setGeometry(geometry);this.params.spatialRel="esriSpatialRelIntersects";return this},contains:function(geometry){this._setGeometry(geometry);this.params.spatialRel="esriSpatialRelWithin";return this},crosses:function(geometry){this._setGeometry(geometry);this.params.spatialRel="esriSpatialRelCrosses";return this},touches:function(geometry){this._setGeometry(geometry);this.params.spatialRel="esriSpatialRelTouches";return this},overlaps:function(geometry){this._setGeometry(geometry);this.params.spatialRel="esriSpatialRelOverlaps";return this},nearby:function(latlng,radius){latlng=L.latLng(latlng);this.params.geometry=[latlng.lng,latlng.lat];this.params.geometryType="esriGeometryPoint";this.params.spatialRel="esriSpatialRelIntersects";this.params.units="esriSRUnit_Meter";this.params.distance=radius;this.params.inSr=4326;return this},where:function(string){this.params.where=string;return this},between:function(start,end){this.params.time=[start.valueOf(),end.valueOf()];return this},simplify:function(map,factor){var mapWidth=Math.abs(map.getBounds().getWest()-map.getBounds().getEast());this.params.maxAllowableOffset=mapWidth/map.getSize().y*factor;return this},orderBy:function(fieldName,order){order=order||"ASC";this.params.orderByFields=this.params.orderByFields?this.params.orderByFields+",":"";this.params.orderByFields+=[fieldName,order].join(" ");return this},run:function(callback,context){this._cleanParams();if(exports.Util.isArcgisOnline(this.options.url)){this.params.f="geojson";return this.request(function(error,response){this._trapSQLerrors(error);callback.call(context,error,response,response)},this)}else{return this.request(function(error,response){this._trapSQLerrors(error);callback.call(context,error,response&&exports.Util.responseToFeatureCollection(response),response)},this)}},count:function(callback,context){this._cleanParams();this.params.returnCountOnly=true;return this.request(function(error,response){callback.call(this,error,response&&response.count,response)},context)},ids:function(callback,context){this._cleanParams();this.params.returnIdsOnly=true;return this.request(function(error,response){callback.call(this,error,response&&response.objectIds,response)},context)},bounds:function(callback,context){this._cleanParams();this.params.returnExtentOnly=true;return this.request(function(error,response){callback.call(context,error,response&&response.extent&&exports.Util.extentToBounds(response.extent),response)},context)},pixelSize:function(point){point=L.point(point);this.params.pixelSize=[point.x,point.y];return this},layer:function(layer){this.path=layer+"/query";return this},_trapSQLerrors:function(error){if(error){if(error.code==="400"){exports.Util.warn("one common syntax error in query requests is encasing string values in double quotes instead of single quotes")}}},_cleanParams:function(){delete this.params.returnIdsOnly;delete this.params.returnExtentOnly;delete this.params.returnCountOnly},_setGeometry:function(geometry){this.params.inSr=4326;if(geometry instanceof L.LatLngBounds){this.params.geometry=exports.Util.boundsToExtent(geometry);this.params.geometryType="esriGeometryEnvelope";return}if(geometry.getLatLng){geometry=geometry.getLatLng()}if(geometry instanceof L.LatLng){geometry={type:"Point",coordinates:[geometry.lng,geometry.lat]}}if(geometry instanceof L.GeoJSON){geometry=geometry.getLayers()[0].feature.geometry;this.params.geometry=exports.Util.geojsonToArcGIS(geometry);this.params.geometryType=exports.Util.geojsonTypeToArcGIS(geometry.type)}if(geometry.toGeoJSON){geometry=geometry.toGeoJSON()}if(geometry.type==="Feature"){geometry=geometry.geometry}if(geometry.type==="Point"||geometry.type==="LineString"||geometry.type==="Polygon"){this.params.geometry=exports.Util.geojsonToArcGIS(geometry);this.params.geometryType=exports.Util.geojsonTypeToArcGIS(geometry.type);return}exports.Util.warn("invalid geometry passed to spatial query. Should be an L.LatLng, L.LatLngBounds or L.Marker or a GeoJSON Point Line or Polygon object");return}});function query(options){return new exports.Query(options)}exports.Find=exports.Task.extend({setters:{contains:"contains",text:"searchText",fields:"searchFields",spatialReference:"sr",sr:"sr",layers:"layers",returnGeometry:"returnGeometry",maxAllowableOffset:"maxAllowableOffset",precision:"geometryPrecision",dynamicLayers:"dynamicLayers",returnZ:"returnZ",returnM:"returnM",gdbVersion:"gdbVersion",token:"token"},path:"find",params:{sr:4326,contains:true,returnGeometry:true,returnZ:true,returnM:false},layerDefs:function(id,where){this.params.layerDefs=this.params.layerDefs?this.params.layerDefs+";":"";this.params.layerDefs+=[id,where].join(":");return this},simplify:function(map,factor){var mapWidth=Math.abs(map.getBounds().getWest()-map.getBounds().getEast());this.params.maxAllowableOffset=mapWidth/map.getSize().y*factor;return this},run:function(callback,context){return this.request(function(error,response){callback.call(context,error,response&&exports.Util.responseToFeatureCollection(response),response)},context)}});function find(options){return new exports.Find(options)}exports.Identify=exports.Task.extend({path:"identify",between:function(start,end){this.params.time=[start.valueOf(),end.valueOf()];return this}});function identify(options){return new exports.Identify(options)}exports.IdentifyFeatures=exports.Identify.extend({setters:{layers:"layers",precision:"geometryPrecision",tolerance:"tolerance",returnGeometry:"returnGeometry"},params:{sr:4326,layers:"all",tolerance:3,returnGeometry:true},on:function(map){var extent=exports.Util.boundsToExtent(map.getBounds());var size=map.getSize();this.params.imageDisplay=[size.x,size.y,96];this.params.mapExtent=[extent.xmin,extent.ymin,extent.xmax,extent.ymax];return this},at:function(latlng){latlng=L.latLng(latlng);this.params.geometry=[latlng.lng,latlng.lat];this.params.geometryType="esriGeometryPoint";return this},layerDef:function(id,where){this.params.layerDefs=this.params.layerDefs?this.params.layerDefs+";":"";this.params.layerDefs+=[id,where].join(":");return this},simplify:function(map,factor){var mapWidth=Math.abs(map.getBounds().getWest()-map.getBounds().getEast());this.params.maxAllowableOffset=mapWidth/map.getSize().y*(1-factor);return this},run:function(callback,context){return this.request(function(error,response){if(error){callback.call(context,error,undefined,response);return}else{var featureCollection=exports.Util.responseToFeatureCollection(response);response.results=response.results.reverse();for(var i=0;i<featureCollection.features.length;i++){var feature=featureCollection.features[i];feature.layerId=response.results[i].layerId}callback.call(context,undefined,featureCollection,response)}})}});function identifyFeatures(options){return new exports.IdentifyFeatures(options)}exports.IdentifyImage=exports.Identify.extend({setters:{setMosaicRule:"mosaicRule",setRenderingRule:"renderingRule",setPixelSize:"pixelSize",returnCatalogItems:"returnCatalogItems",returnGeometry:"returnGeometry"},params:{returnGeometry:false},at:function(latlng){latlng=L.latLng(latlng);this.params.geometry=JSON.stringify({x:latlng.lng,y:latlng.lat,spatialReference:{wkid:4326}});this.params.geometryType="esriGeometryPoint";return this},getMosaicRule:function(){return this.params.mosaicRule},getRenderingRule:function(){return this.params.renderingRule},getPixelSize:function(){return this.params.pixelSize},run:function(callback,context){return this.request(function(error,response){callback.call(context,error,response&&this._responseToGeoJSON(response),response)},this)},_responseToGeoJSON:function(response){var location=response.location;var catalogItems=response.catalogItems;var catalogItemVisibilities=response.catalogItemVisibilities;var geoJSON={pixel:{type:"Feature",geometry:{type:"Point",coordinates:[location.x,location.y]},crs:{type:"EPSG",properties:{code:location.spatialReference.wkid}},properties:{OBJECTID:response.objectId,name:response.name,value:response.value},id:response.objectId}};if(response.properties&&response.properties.Values){geoJSON.pixel.properties.values=response.properties.Values}if(catalogItems&&catalogItems.features){geoJSON.catalogItems=exports.Util.responseToFeatureCollection(catalogItems);if(catalogItemVisibilities&&catalogItemVisibilities.length===geoJSON.catalogItems.features.length){for(var i=catalogItemVisibilities.length-1;i>=0;i--){geoJSON.catalogItems.features[i].properties.catalogItemVisibility=catalogItemVisibilities[i]}}}return geoJSON}});function identifyImage(params){return new exports.IdentifyImage(params)}exports.Service=L.Evented.extend({options:{proxy:false,useCors:cors},initialize:function(options){options=options||{};this._requestQueue=[];this._authenticating=false;L.Util.setOptions(this,options);this.options.url=cleanUrl(this.options.url)},get:function(path,params,callback,context){return this._request("get",path,params,callback,context)},post:function(path,params,callback,context){return this._request("post",path,params,callback,context)},request:function(path,params,callback,context){return this._request("request",path,params,callback,context)},metadata:function(callback,context){return this._request("get","",{},callback,context)},authenticate:function(token){this._authenticating=false;this.options.token=token;this._runQueue();return this},_request:function(method,path,params,callback,context){this.fire("requeststart",{url:this.options.url+path,params:params,method:method},true);var wrappedCallback=this._createServiceCallback(method,path,params,callback,context);if(this.options.token){params.token=this.options.token}if(this._authenticating){this._requestQueue.push([method,path,params,callback,context]);return}else{var url=this.options.proxy?this.options.proxy+"?"+this.options.url+path:this.options.url+path;if((method==="get"||method==="request")&&!this.options.useCors){return Request.get.JSONP(url,params,wrappedCallback)}else{return Request[method](url,params,wrappedCallback)}}},_createServiceCallback:function(method,path,params,callback,context){return L.Util.bind(function(error,response){if(error&&(error.code===499||error.code===498)){this._authenticating=true;this._requestQueue.push([method,path,params,callback,context]);this.fire("authenticationrequired",{authenticate:L.Util.bind(this.authenticate,this)},true);error.authenticate=L.Util.bind(this.authenticate,this)}callback.call(context,error,response);if(error){this.fire("requesterror",{url:this.options.url+path,params:params,message:error.message,code:error.code,method:method},true)}else{this.fire("requestsuccess",{url:this.options.url+path,params:params,response:response,method:method},true)}this.fire("requestend",{url:this.options.url+path,params:params,method:method},true)},this)},_runQueue:function(){for(var i=this._requestQueue.length-1;i>=0;i--){var request=this._requestQueue[i];var method=request.shift();this[method].apply(this,request)}this._requestQueue=[]}});function service(options){return new exports.Service(options)}exports.MapService=exports.Service.extend({identify:function(){return identifyFeatures(this)},find:function(){return find(this)},query:function(){return query(this)}});function mapService(options){return new exports.MapService(options)}exports.ImageService=exports.Service.extend({query:function(){return query(this)},identify:function(){return identifyImage(this)}});function imageService(options){return new exports.ImageService(options)}exports.FeatureLayerService=exports.Service.extend({options:{idAttribute:"OBJECTID"},query:function(){return query(this)},addFeature:function(feature,callback,context){delete feature.id;feature=g2a(feature);return this.post("addFeatures",{features:[feature]},function(error,response){var result=response&&response.addResults?response.addResults[0]:undefined;if(callback){callback.call(context,error||response.addResults[0].error,result)}},context)},updateFeature:function(feature,callback,context){feature=g2a(feature,this.options.idAttribute);return this.post("updateFeatures",{features:[feature]},function(error,response){var result=response&&response.updateResults?response.updateResults[0]:undefined;if(callback){callback.call(context,error||response.updateResults[0].error,result)}},context)},deleteFeature:function(id,callback,context){return this.post("deleteFeatures",{objectIds:id},function(error,response){var result=response&&response.deleteResults?response.deleteResults[0]:undefined;if(callback){callback.call(context,error||response.deleteResults[0].error,result)}},context)},deleteFeatures:function(ids,callback,context){return this.post("deleteFeatures",{objectIds:ids},function(error,response){var result=response&&response.deleteResults?response.deleteResults:undefined;if(callback){callback.call(context,error||response.deleteResults[0].error,result)}},context)}});function featureLayerService(options){return new exports.FeatureLayerService(options)}var Logo=L.Control.extend({options:{position:"bottomright",marginTop:0,marginLeft:0,marginBottom:0,marginRight:0},onAdd:function(){var div=L.DomUtil.create("div","esri-leaflet-logo");div.style.marginTop=this.options.marginTop;div.style.marginLeft=this.options.marginLeft;div.style.marginBottom=this.options.marginBottom;div.style.marginRight=this.options.marginRight;div.innerHTML='<a href="http://www.esri.com" target="_blank" style="border: none;"><img src="https://js.arcgis.com/3.13/esri/images/map/logo-sm.png" alt="Powered by Esri" style="border: none;"></a>';return div}});function logo(options){return new Logo(options)}var tileProtocol=window.location.protocol!=="https:"?"http:":"https:";exports.BasemapLayer=L.TileLayer.extend({statics:{TILES:{Streets:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",attributionUrl:"https://static.arcgis.com/attribution/World_Street_Map",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"Esri"}},Topographic:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",attributionUrl:"https://static.arcgis.com/attribution/World_Topo_Map",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"Esri"}},Oceans:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",attributionUrl:"https://static.arcgis.com/attribution/Ocean_Basemap",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"Esri"}},OceansLabels:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}},NationalGeographic:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"National Geographic, Esri, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp."}},DarkGray:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"Esri, HERE, DeLorme, MapmyIndia, © OpenStreetMap contributors"}},DarkGrayLabels:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}},Gray:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],attribution:"Esri, HERE, DeLorme, MapmyIndia, © OpenStreetMap contributors"}},GrayLabels:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:16,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}},Imagery:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:19,subdomains:["server","services"],attribution:"Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community"}},ImageryLabels:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:19,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}},ImageryTransportation:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:19,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}},ShadedRelief:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:false,logoPosition:"bottomright",minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"Esri, USGS"}},ShadedReliefLabels:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:12,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}},Terrain:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:false,
logoPosition:"bottomright",minZoom:1,maxZoom:13,subdomains:["server","services"],attribution:"Esri, USGS, NOAA"}},TerrainLabels:{urlTemplate:tileProtocol+"//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",options:{hideLogo:true,logoPosition:"bottomright",minZoom:1,maxZoom:13,subdomains:["server","services"],pane:pointerEvents?"esri-labels":"tilePane"}}}},initialize:function(key,options){var config;if(typeof key==="object"&&key.urlTemplate&&key.options){config=key}else if(typeof key==="string"&&exports.BasemapLayer.TILES[key]){config=exports.BasemapLayer.TILES[key]}else{throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ShadedRelief", "ShadedReliefLabels", "Terrain" or "TerrainLabels"')}var tileOptions=L.Util.extend(config.options,options);L.Util.setOptions(this,tileOptions);L.TileLayer.prototype.initialize.call(this,config.urlTemplate,tileOptions);if(config.attributionUrl){this._getAttributionData(config.attributionUrl)}this._logo=logo({position:this.options.logoPosition})},onAdd:function(map){if(!this.options.hideLogo&&!map._hasEsriLogo){this._logo.addTo(map);map._hasEsriLogo=true}if(this.options.pane==="esri-labels"){this._initPane()}map.on("moveend",this._updateMapAttribution,this);L.TileLayer.prototype.onAdd.call(this,map)},onRemove:function(map){if(this._logo&&this._logo._container){map.removeControl(this._logo);map._hasEsriLogo=false}map.off("moveend",this._updateMapAttribution,this);L.TileLayer.prototype.onRemove.call(this,map)},getAttribution:function(){if(this.options.attribution){var attribution='<span class="esri-attributions" style="line-height:14px; vertical-align: -3px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden; display:inline-block;">'+this.options.attribution+"</span>"}return attribution},_initPane:function(){if(!this._map.getPane(this.options.pane)){var pane=this._map.createPane(this.options.pane);pane.style.pointerEvents="none";pane.style.zIndex=500}},_getAttributionData:function(url){jsonp(url,{},L.Util.bind(function(error,attributions){if(error){return}this._attributions=[];for(var c=0;c<attributions.contributors.length;c++){var contributor=attributions.contributors[c];for(var i=0;i<contributor.coverageAreas.length;i++){var coverageArea=contributor.coverageAreas[i];var southWest=L.latLng(coverageArea.bbox[0],coverageArea.bbox[1]);var northEast=L.latLng(coverageArea.bbox[2],coverageArea.bbox[3]);this._attributions.push({attribution:contributor.attribution,score:coverageArea.score,bounds:L.latLngBounds(southWest,northEast),minZoom:coverageArea.zoomMin,maxZoom:coverageArea.zoomMax})}}this._attributions.sort(function(a,b){return b.score-a.score});this._updateMapAttribution()},this))},_updateMapAttribution:function(){if(this._map&&this._map.attributionControl&&this._attributions){var newAttributions="";var bounds=this._map.getBounds();var zoom=this._map.getZoom();for(var i=0;i<this._attributions.length;i++){var attribution=this._attributions[i];var text=attribution.attribution;if(!newAttributions.match(text)&&bounds.intersects(attribution.bounds)&&zoom>=attribution.minZoom&&zoom<=attribution.maxZoom){newAttributions+=", "+text}}newAttributions=newAttributions.substr(2);var attributionElement=this._map.attributionControl._container.querySelector(".esri-attributions");attributionElement.innerHTML=newAttributions;attributionElement.style.maxWidth=this._map.getSize().x*.65+"px";this.fire("attributionupdated",{attribution:newAttributions})}}});function basemapLayer(key,options){return new exports.BasemapLayer(key,options)}exports.TiledMapLayer=L.TileLayer.extend({options:{zoomOffsetAllowance:.1},statics:{MercatorZoomLevels:{0:156543.033928,1:78271.5169639999,2:39135.7584820001,3:19567.8792409999,4:9783.93962049996,5:4891.96981024998,6:2445.98490512499,7:1222.99245256249,8:611.49622628138,9:305.748113140558,10:152.874056570411,11:76.4370282850732,12:38.2185141425366,13:19.1092570712683,14:9.55462853563415,15:4.77731426794937,16:2.38865713397468,17:1.19432856685505,18:.597164283559817,19:.298582141647617,20:.14929107082381,21:.07464553541191,22:.0373227677059525,23:.0186613838529763}},initialize:function(options){options.url=cleanUrl(options.url);options=L.Util.setOptions(this,options);this.tileUrl=options.url+"tile/{z}/{y}/{x}";this.service=mapService(options);this.service.addEventParent(this);var arcgisonline=new RegExp(/tiles.arcgis(online)?\.com/g);if(arcgisonline.test(options.url)){this.tileUrl=this.tileUrl.replace("://tiles","://tiles{s}");options.subdomains=["1","2","3","4"]}if(this.options.token){this.tileUrl+="?token="+this.options.token}L.TileLayer.prototype.initialize.call(this,this.tileUrl,options)},getTileUrl:function(tilePoint){return L.Util.template(this.tileUrl,L.extend({s:this._getSubdomain(tilePoint),z:this._lodMap&&this._lodMap[tilePoint.z]?this._lodMap[tilePoint.z]:tilePoint.z,x:tilePoint.x,y:tilePoint.y},this.options))},createTile:function(coords,done){var tile=document.createElement("img");L.DomEvent.on(tile,"load",L.bind(this._tileOnLoad,this,done,tile));L.DomEvent.on(tile,"error",L.bind(this._tileOnError,this,done,tile));if(this.options.crossOrigin){tile.crossOrigin=""}tile.alt="";if(!this._lodMap||this._lodMap&&this._lodMap[coords.z]){tile.src=this.getTileUrl(coords)}else{this.once("lodmap",function(){tile.src=this.getTileUrl(coords)},this)}return tile},onAdd:function(map){if(map.options.crs===L.CRS.EPSG3857&&!this._lodMap){this._lodMap={};this.metadata(function(error,metadata){if(!error){var sr=metadata.spatialReference.latestWkid||metadata.spatialReference.wkid;if(sr===102100||sr===3857){var arcgisLODs=metadata.tileInfo.lods;var correctResolutions=exports.TiledMapLayer.MercatorZoomLevels;for(var i=0;i<arcgisLODs.length;i++){var arcgisLOD=arcgisLODs[i];for(var ci in correctResolutions){var correctRes=correctResolutions[ci];if(this._withinPercentage(arcgisLOD.resolution,correctRes,this.options.zoomOffsetAllowance)){this._lodMap[ci]=arcgisLOD.level;break}}}this.fire("lodmap")}else{warn("L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html")}}},this)}L.TileLayer.prototype.onAdd.call(this,map)},metadata:function(callback,context){this.service.metadata(callback,context);return this},identify:function(){return this.service.identify()},find:function(){return this.service.find()},query:function(){return this.service.query()},authenticate:function(token){var tokenQs="?token="+token;this.tileUrl=this.options.token?this.tileUrl.replace(/\?token=(.+)/g,tokenQs):this.tileUrl+tokenQs;this.options.token=token;this.service.authenticate(token);return this},_withinPercentage:function(a,b,percentage){var diff=Math.abs(a/b-1);return diff<percentage}});function tiledMapLayer(url,options){return new exports.TiledMapLayer(url,options)}var Overlay=L.ImageOverlay.extend({onAdd:function(map){this._topLeft=map.getPixelBounds().min;L.ImageOverlay.prototype.onAdd.call(this,map)},_reset:function(){if(this._map.options.crs===L.CRS.EPSG3857){L.ImageOverlay.prototype._reset.call(this)}else{L.DomUtil.setPosition(this._image,this._topLeft.subtract(this._map.getPixelOrigin()))}}});exports.RasterLayer=L.Layer.extend({options:{opacity:1,position:"front",f:"image",useCors:cors,attribution:null,interactive:false,alt:""},onAdd:function(map){this._update=L.Util.throttle(this._update,this.options.updateInterval,this);map.on("moveend",this._update,this);if(this._currentImage&&this._currentImage._bounds.equals(this._map.getBounds())){map.addLayer(this._currentImage)}else if(this._currentImage){this._map.removeLayer(this._currentImage);this._currentImage=null}this._update();if(this._popup){this._map.on("click",this._getPopupData,this);this._map.on("dblclick",this._resetPopupState,this)}},onRemove:function(map){if(this._currentImage){this._map.removeLayer(this._currentImage)}if(this._popup){this._map.off("click",this._getPopupData,this);this._map.off("dblclick",this._resetPopupState,this)}this._map.off("moveend",this._update,this)},getEvents:function(){return{moveend:this._update}},bindPopup:function(fn,popupOptions){this._shouldRenderPopup=false;this._lastClick=false;this._popup=L.popup(popupOptions);this._popupFunction=fn;if(this._map){this._map.on("click",this._getPopupData,this);this._map.on("dblclick",this._resetPopupState,this)}return this},unbindPopup:function(){if(this._map){this._map.closePopup(this._popup);this._map.off("click",this._getPopupData,this);this._map.off("dblclick",this._resetPopupState,this)}this._popup=false;return this},bringToFront:function(){this.options.position="front";if(this._currentImage){this._currentImage.bringToFront()}return this},bringToBack:function(){this.options.position="back";if(this._currentImage){this._currentImage.bringToBack()}return this},getAttribution:function(){return this.options.attribution},getOpacity:function(){return this.options.opacity},setOpacity:function(opacity){this.options.opacity=opacity;this._currentImage.setOpacity(opacity);return this},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(from,to){this.options.from=from;this.options.to=to;this._update();return this},metadata:function(callback,context){this.service.metadata(callback,context);return this},authenticate:function(token){this.service.authenticate(token);return this},_renderImage:function(url,bounds){if(this._map){var image=new Overlay(url,bounds,{opacity:0,crossOrigin:this.options.useCors,alt:this.options.alt,pane:this.options.pane||this.getPane(),interactive:this.options.interactive}).addTo(this._map);image.once("load",function(e){if(this._map){var newImage=e.target;var oldImage=this._currentImage;if(newImage._bounds.equals(bounds)&&newImage._bounds.equals(this._map.getBounds())){this._currentImage=newImage;if(this.options.position==="front"){this.bringToFront()}else{this.bringToBack()}if(this._map&&this._currentImage._map){this._currentImage.setOpacity(this.options.opacity)}else{this._currentImage._map.removeLayer(this._currentImage)}if(oldImage&&this._map){this._map.removeLayer(oldImage)}if(oldImage&&oldImage._map){oldImage._map.removeLayer(oldImage)}}else{this._map.removeLayer(newImage)}}this.fire("load",{bounds:bounds})},this);this.fire("loading",{bounds:bounds})}},_update:function(){if(!this._map){return}var zoom=this._map.getZoom();var bounds=this._map.getBounds();if(this._animatingZoom){return}if(this._map._panTransition&&this._map._panTransition._inProgress){return}if(zoom>this.options.maxZoom||zoom<this.options.minZoom){return}var params=this._buildExportParams();this._requestExport(params,bounds)},_renderPopup:function(latlng,error,results,response){latlng=L.latLng(latlng);if(this._shouldRenderPopup&&this._lastClick.equals(latlng)){var content=this._popupFunction(error,results,response);if(content){this._popup.setLatLng(latlng).setContent(content).openOn(this._map)}}},_resetPopupState:function(e){this._shouldRenderPopup=false;this._lastClick=e.latlng}});exports.ImageMapLayer=exports.RasterLayer.extend({options:{updateInterval:150,format:"jpgpng",transparent:true,f:"json"},query:function(){return this.service.query()},identify:function(){return this.service.identify()},initialize:function(options){options.url=cleanUrl(options.url);this.service=imageService(options);this.service.addEventParent(this);L.Util.setOptions(this,options)},setPixelType:function(pixelType){this.options.pixelType=pixelType;this._update();return this},getPixelType:function(){return this.options.pixelType},setBandIds:function(bandIds){if(L.Util.isArray(bandIds)){this.options.bandIds=bandIds.join(",")}else{this.options.bandIds=bandIds.toString()}this._update();return this},getBandIds:function(){return this.options.bandIds},setNoData:function(noData,noDataInterpretation){if(L.Util.isArray(noData)){this.options.noData=noData.join(",")}else{this.options.noData=noData.toString()}if(noDataInterpretation){this.options.noDataInterpretation=noDataInterpretation}this._update();return this},getNoData:function(){return this.options.noData},getNoDataInterpretation:function(){return this.options.noDataInterpretation},setRenderingRule:function(renderingRule){this.options.renderingRule=renderingRule;this._update()},getRenderingRule:function(){return this.options.renderingRule},setMosaicRule:function(mosaicRule){this.options.mosaicRule=mosaicRule;this._update()},getMosaicRule:function(){return this.options.mosaicRule},_getPopupData:function(e){var callback=L.Util.bind(function(error,results,response){if(error){return}setTimeout(L.Util.bind(function(){this._renderPopup(e.latlng,error,results,response)},this),300)},this);var identifyRequest=this.identify().at(e.latlng);if(this.options.mosaicRule){identifyRequest.setMosaicRule(this.options.mosaicRule)}identifyRequest.run(callback);this._shouldRenderPopup=true;this._lastClick=e.latlng},_buildExportParams:function(){var bounds=this._map.getBounds();var size=this._map.getSize();var ne=this._map.options.crs.project(bounds._northEast);var sw=this._map.options.crs.project(bounds._southWest);var sr=parseInt(this._map.options.crs.code.split(":")[1],10);var params={bbox:[sw.x,sw.y,ne.x,ne.y].join(","),size:size.x+","+size.y,format:this.options.format,transparent:this.options.transparent,bboxSR:sr,imageSR:sr};if(this.options.from&&this.options.to){params.time=this.options.from.valueOf()+","+this.options.to.valueOf()}if(this.options.pixelType){params.pixelType=this.options.pixelType}if(this.options.interpolation){params.interpolation=this.options.interpolation}if(this.options.compressionQuality){params.compressionQuality=this.options.compressionQuality}if(this.options.bandIds){params.bandIds=this.options.bandIds}if(this.options.noData){params.noData=this.options.noData}if(this.options.noDataInterpretation){params.noDataInterpretation=this.options.noDataInterpretation}if(this.service.options.token){params.token=this.service.options.token}if(this.options.renderingRule){params.renderingRule=JSON.stringify(this.options.renderingRule)}if(this.options.mosaicRule){params.mosaicRule=JSON.stringify(this.options.mosaicRule)}return params},_requestExport:function(params,bounds){if(this.options.f==="json"){this.service.request("exportImage",params,function(error,response){if(error){return}this._renderImage(response.href,bounds)},this)}else{params.f="image";this._renderImage(this.options.url+"exportImage"+L.Util.getParamString(params),bounds)}}});function imageMapLayer(url,options){return new exports.ImageMapLayer(url,options)}exports.DynamicMapLayer=exports.RasterLayer.extend({options:{updateInterval:150,layers:false,layerDefs:false,timeOptions:false,format:"png24",transparent:true,f:"json"},initialize:function(options){options.url=cleanUrl(options.url);this.service=mapService(options);this.service.addEventParent(this);if((options.proxy||options.token)&&options.f!=="json"){options.f="json"}L.Util.setOptions(this,options)},getDynamicLayers:function(){return this.options.dynamicLayers},setDynamicLayers:function(dynamicLayers){this.options.dynamicLayers=dynamicLayers;this._update();return this},getLayers:function(){return this.options.layers},setLayers:function(layers){this.options.layers=layers;this._update();return this},getLayerDefs:function(){return this.options.layerDefs},setLayerDefs:function(layerDefs){this.options.layerDefs=layerDefs;this._update();return this},getTimeOptions:function(){return this.options.timeOptions},setTimeOptions:function(timeOptions){this.options.timeOptions=timeOptions;this._update();return this},query:function(){return this.service.query()},identify:function(){return this.service.identify()},find:function(){return this.service.find()},_getPopupData:function(e){var callback=L.Util.bind(function(error,featureCollection,response){if(error){return}setTimeout(L.Util.bind(function(){this._renderPopup(e.latlng,error,featureCollection,response)},this),300)},this);var identifyRequest=this.identify().on(this._map).at(e.latlng);if(this.options.layers){identifyRequest.layers("visible:"+this.options.layers.join(","))}else{identifyRequest.layers("visible")}identifyRequest.run(callback);this._shouldRenderPopup=true;this._lastClick=e.latlng},_buildExportParams:function(){var bounds=this._map.getBounds();var size=this._map.getSize();var ne=this._map.options.crs.project(bounds.getNorthEast());var sw=this._map.options.crs.project(bounds.getSouthWest());var sr=parseInt(this._map.options.crs.code.split(":")[1],10);var top=this._map.latLngToLayerPoint(bounds._northEast);var bottom=this._map.latLngToLayerPoint(bounds._southWest);if(top.y>0||bottom.y<size.y){size.y=bottom.y-top.y}var params={bbox:[sw.x,sw.y,ne.x,ne.y].join(","),size:size.x+","+size.y,dpi:96,format:this.options.format,transparent:this.options.transparent,bboxSR:sr,imageSR:sr};if(this.options.dynamicLayers){params.dynamicLayers=this.options.dynamicLayers}if(this.options.layers){params.layers="show:"+this.options.layers.join(",")}if(this.options.layerDefs){params.layerDefs=JSON.stringify(this.options.layerDefs)}if(this.options.timeOptions){params.timeOptions=JSON.stringify(this.options.timeOptions)}if(this.options.from&&this.options.to){params.time=this.options.from.valueOf()+","+this.options.to.valueOf()}if(this.service.options.token){params.token=this.service.options.token}return params},_requestExport:function(params,bounds){if(this.options.f==="json"){this.service.request("export",params,function(error,response){if(error){return}this._renderImage(response.href,bounds)},this)}else{params.f="image";this._renderImage(this.options.url+"export"+L.Util.getParamString(params),bounds)}}});function dynamicMapLayer(url,options){return new exports.DynamicMapLayer(url,options)}var VirtualGrid=L.Layer.extend({options:{cellSize:512,updateInterval:150},initialize:function(options){options=L.setOptions(this,options);this._zooming=false},onAdd:function(map){this._map=map;this._update=L.Util.throttle(this._update,this.options.updateInterval,this);this._reset();this._update()},onRemove:function(){this._map.removeEventListener(this.getEvents(),this);this._removeCells()},getEvents:function(){var events={moveend:this._update,zoomstart:this._zoomstart,zoomend:this._reset};return events},addTo:function(map){map.addLayer(this);return this},removeFrom:function(map){map.removeLayer(this);return this},_zoomstart:function(){this._zooming=true},_reset:function(){this._removeCells();this._cells={};this._activeCells={};this._cellsToLoad=0;this._cellsTotal=0;this._cellNumBounds=this._getCellNumBounds();this._resetWrap();this._zooming=false},_resetWrap:function(){var map=this._map;var crs=map.options.crs;if(crs.infinite){return}var cellSize=this._getCellSize();if(crs.wrapLng){this._wrapLng=[Math.floor(map.project([0,crs.wrapLng[0]]).x/cellSize),Math.ceil(map.project([0,crs.wrapLng[1]]).x/cellSize)]}if(crs.wrapLat){this._wrapLat=[Math.floor(map.project([crs.wrapLat[0],0]).y/cellSize),Math.ceil(map.project([crs.wrapLat[1],0]).y/cellSize)]}},_getCellSize:function(){return this.options.cellSize},_update:function(){if(!this._map){return}var bounds=this._map.getPixelBounds();var cellSize=this._getCellSize();var cellBounds=L.bounds(bounds.min.divideBy(cellSize).floor(),bounds.max.divideBy(cellSize).floor());this._removeOtherCells(cellBounds);this._addCells(cellBounds);this.fire("cellsupdated")},_addCells:function(bounds){var queue=[];var center=bounds.getCenter();var zoom=this._map.getZoom();var j,i,coords;for(j=bounds.min.y;j<=bounds.max.y;j++){for(i=bounds.min.x;i<=bounds.max.x;i++){coords=L.point(i,j);coords.z=zoom;if(this._isValidCell(coords)){queue.push(coords)}}}var cellsToLoad=queue.length;if(cellsToLoad===0){return}this._cellsToLoad+=cellsToLoad;this._cellsTotal+=cellsToLoad;queue.sort(function(a,b){return a.distanceTo(center)-b.distanceTo(center)});for(i=0;i<cellsToLoad;i++){this._addCell(queue[i])}},_isValidCell:function(coords){var crs=this._map.options.crs;if(!crs.infinite){var bounds=this._cellNumBounds;if(!crs.wrapLng&&(coords.x<bounds.min.x||coords.x>bounds.max.x)||!crs.wrapLat&&(coords.y<bounds.min.y||coords.y>bounds.max.y)){return false}}if(!this.options.bounds){return true}var cellBounds=this._cellCoordsToBounds(coords);return L.latLngBounds(this.options.bounds).intersects(cellBounds)},_cellCoordsToBounds:function(coords){var map=this._map;var cellSize=this.options.cellSize;var nwPoint=coords.multiplyBy(cellSize);var sePoint=nwPoint.add([cellSize,cellSize]);var nw=map.wrapLatLng(map.unproject(nwPoint,coords.z));var se=map.wrapLatLng(map.unproject(sePoint,coords.z));return L.latLngBounds(nw,se)},_cellCoordsToKey:function(coords){return coords.x+":"+coords.y},_keyToCellCoords:function(key){var kArr=key.split(":");var x=parseInt(kArr[0],10);var y=parseInt(kArr[1],10);return L.point(x,y)},_removeOtherCells:function(bounds){for(var key in this._cells){if(!bounds.contains(this._keyToCellCoords(key))){this._removeCell(key)}}},_removeCell:function(key){var cell=this._activeCells[key];if(cell){delete this._activeCells[key];if(this.cellLeave){this.cellLeave(cell.bounds,cell.coords)}this.fire("cellleave",{bounds:cell.bounds,coords:cell.coords})}},_removeCells:function(){for(var key in this._cells){var bounds=this._cells[key].bounds;var coords=this._cells[key].coords;if(this.cellLeave){this.cellLeave(bounds,coords)}this.fire("cellleave",{bounds:bounds,coords:coords})}},_addCell:function(coords){this._wrapCoords(coords);var key=this._cellCoordsToKey(coords);var cell=this._cells[key];if(cell&&!this._activeCells[key]){if(this.cellEnter){this.cellEnter(cell.bounds,coords)}this.fire("cellenter",{bounds:cell.bounds,coords:coords});this._activeCells[key]=cell}if(!cell){cell={coords:coords,bounds:this._cellCoordsToBounds(coords)};this._cells[key]=cell;this._activeCells[key]=cell;if(this.createCell){this.createCell(cell.bounds,coords)}this.fire("cellcreate",{bounds:cell.bounds,coords:coords})}},_wrapCoords:function(coords){coords.x=this._wrapLng?L.Util.wrapNum(coords.x,this._wrapLng):coords.x;coords.y=this._wrapLat?L.Util.wrapNum(coords.y,this._wrapLat):coords.y},_getCellNumBounds:function(){var bounds=this._map.getPixelWorldBounds();var size=this._getCellSize();return bounds?L.bounds(bounds.min.divideBy(size).floor(),bounds.max.divideBy(size).ceil().subtract([1,1])):null}});function BinarySearchIndex(values){this.values=[].concat(values||[])}BinarySearchIndex.prototype.query=function(value){var index=this.getIndex(value);return this.values[index]};BinarySearchIndex.prototype.getIndex=function getIndex(value){if(this.dirty){this.sort()}var minIndex=0;var maxIndex=this.values.length-1;var currentIndex;var currentElement;while(minIndex<=maxIndex){currentIndex=(minIndex+maxIndex)/2|0;currentElement=this.values[Math.round(currentIndex)];if(+currentElement.value<+value){minIndex=currentIndex+1}else if(+currentElement.value>+value){maxIndex=currentIndex-1}else{return currentIndex}}return Math.abs(~maxIndex)};BinarySearchIndex.prototype.between=function between(start,end){var startIndex=this.getIndex(start);var endIndex=this.getIndex(end);if(startIndex===0&&endIndex===0){return[]}while(this.values[startIndex-1]&&this.values[startIndex-1].value===start){startIndex--}while(this.values[endIndex+1]&&this.values[endIndex+1].value===end){endIndex++}if(this.values[endIndex]&&this.values[endIndex].value===end&&this.values[endIndex+1]){endIndex++}return this.values.slice(startIndex,endIndex)};BinarySearchIndex.prototype.insert=function insert(item){this.values.splice(this.getIndex(item.value),0,item);return this};BinarySearchIndex.prototype.bulkAdd=function bulkAdd(items,sort){this.values=this.values.concat([].concat(items||[]));if(sort){this.sort()}else{this.dirty=true}return this};BinarySearchIndex.prototype.sort=function sort(){this.values.sort(function(a,b){return+b.value-+a.value}).reverse();this.dirty=false;return this};exports.FeatureManager=VirtualGrid.extend({options:{attribution:null,where:"1=1",fields:["*"],from:false,to:false,timeField:false,timeFilterMode:"server",simplifyFactor:0,precision:6},initialize:function(options){VirtualGrid.prototype.initialize.call(this,options);options.url=cleanUrl(options.url);options=L.setOptions(this,options);this.service=featureLayerService(options);this.service.addEventParent(this);if(this.options.fields[0]!=="*"){var oidCheck=false;for(var i=0;i<this.options.fields.length;i++){if(this.options.fields[i].match(/^(OBJECTID|FID|OID|ID)$/i)){oidCheck=true}}if(oidCheck===false){warn("no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.")}}if(this.options.timeField.start&&this.options.timeField.end){this._startTimeIndex=new BinarySearchIndex;this._endTimeIndex=new BinarySearchIndex}else if(this.options.timeField){this._timeIndex=new BinarySearchIndex}this._cache={};this._currentSnapshot=[];this._activeRequests=0},onAdd:function(map){map.on("zoomend",this._handleZoomChange,this);return VirtualGrid.prototype.onAdd.call(this,map)},onRemove:function(map){map.off("zoomend",this._handleZoomChange,this);return VirtualGrid.prototype.onRemove.call(this,map)},getAttribution:function(){return this.options.attribution},createCell:function(bounds,coords){this._requestFeatures(bounds,coords)},_requestFeatures:function(bounds,coords,callback){this._activeRequests++;if(this._activeRequests===1){this.fire("loading",{bounds:bounds},true)}return this._buildQuery(bounds).run(function(error,featureCollection,response){if(response&&response.exceededTransferLimit){this.fire("drawlimitexceeded")}if(!error&&featureCollection&&featureCollection.features.length){L.Util.requestAnimFrame(L.Util.bind(function(){this._addFeatures(featureCollection.features,coords);this._postProcessFeatures(bounds)},this))}if(!error&&featureCollection&&!featureCollection.features.length){this._postProcessFeatures(bounds)}if(callback){callback.call(this,error,featureCollection)}},this)},_postProcessFeatures:function(bounds){this._activeRequests--;if(this._activeRequests<=0){this.fire("load",{bounds:bounds})}},_cacheKey:function(coords){return coords.z+":"+coords.x+":"+coords.y},_addFeatures:function(features,coords){var key=this._cacheKey(coords);this._cache[key]=this._cache[key]||[];for(var i=features.length-1;i>=0;i--){var id=features[i].id;this._currentSnapshot.push(id);this._cache[key].push(id)}if(this.options.timeField){this._buildTimeIndexes(features)}this.createLayers(features)},_buildQuery:function(bounds){var query=this.service.query().intersects(bounds).where(this.options.where).fields(this.options.fields).precision(this.options.precision);if(this.options.simplifyFactor){query.simplify(this._map,this.options.simplifyFactor)}if(this.options.timeFilterMode==="server"&&this.options.from&&this.options.to){query.between(this.options.from,this.options.to)}return query},setWhere:function(where,callback,context){this.options.where=where&&where.length?where:"1=1";var oldSnapshot=[];var newSnapshot=[];var pendingRequests=0;var requestError=null;var requestCallback=L.Util.bind(function(error,featureCollection){if(error){requestError=error}if(featureCollection){for(var i=featureCollection.features.length-1;i>=0;i--){newSnapshot.push(featureCollection.features[i].id)}}pendingRequests--;if(pendingRequests<=0){this._currentSnapshot=newSnapshot;L.Util.requestAnimFrame(L.Util.bind(function(){this.removeLayers(oldSnapshot);this.addLayers(newSnapshot);if(callback){callback.call(context,requestError)}},this))}},this);for(var i=this._currentSnapshot.length-1;i>=0;i--){oldSnapshot.push(this._currentSnapshot[i])}for(var key in this._activeCells){pendingRequests++;var coords=this._keyToCellCoords(key);var bounds=this._cellCoordsToBounds(coords);this._requestFeatures(bounds,key,requestCallback)}return this},getWhere:function(){return this.options.where},getTimeRange:function(){return[this.options.from,this.options.to]},setTimeRange:function(from,to,callback,context){var oldFrom=this.options.from;var oldTo=this.options.to;var pendingRequests=0;var requestError=null;var requestCallback=L.Util.bind(function(error){if(error){requestError=error}this._filterExistingFeatures(oldFrom,oldTo,from,to);pendingRequests--;if(callback&&pendingRequests<=0){callback.call(context,requestError)}},this);this.options.from=from;this.options.to=to;this._filterExistingFeatures(oldFrom,oldTo,from,to);if(this.options.timeFilterMode==="server"){for(var key in this._activeCells){pendingRequests++;var coords=this._keyToCellCoords(key);var bounds=this._cellCoordsToBounds(coords);this._requestFeatures(bounds,key,requestCallback)}}return this},refresh:function(){for(var key in this._activeCells){var coords=this._keyToCellCoords(key);var bounds=this._cellCoordsToBounds(coords);this._requestFeatures(bounds,key)}if(this.redraw){this.once("load",function(){this.eachFeature(function(layer){this._redraw(layer.feature.id)},this)},this)}},_filterExistingFeatures:function(oldFrom,oldTo,newFrom,newTo){var layersToRemove=oldFrom&&oldTo?this._getFeaturesInTimeRange(oldFrom,oldTo):this._currentSnapshot;var layersToAdd=this._getFeaturesInTimeRange(newFrom,newTo);if(layersToAdd.indexOf){for(var i=0;i<layersToAdd.length;i++){var shouldRemoveLayer=layersToRemove.indexOf(layersToAdd[i]);if(shouldRemoveLayer>=0){layersToRemove.splice(shouldRemoveLayer,1)}}}L.Util.requestAnimFrame(L.Util.bind(function(){this.removeLayers(layersToRemove);this.addLayers(layersToAdd)},this))},_getFeaturesInTimeRange:function(start,end){var ids=[];var search;if(this.options.timeField.start&&this.options.timeField.end){var startTimes=this._startTimeIndex.between(start,end);var endTimes=this._endTimeIndex.between(start,end);search=startTimes.concat(endTimes)}else{search=this._timeIndex.between(start,end)}for(var i=search.length-1;i>=0;i--){ids.push(search[i].id)}return ids},_buildTimeIndexes:function(geojson){var i;var feature;if(this.options.timeField.start&&this.options.timeField.end){var startTimeEntries=[];var endTimeEntries=[];for(i=geojson.length-1;i>=0;i--){feature=geojson[i];startTimeEntries.push({id:feature.id,value:new Date(feature.properties[this.options.timeField.start])});endTimeEntries.push({id:feature.id,value:new Date(feature.properties[this.options.timeField.end])})}this._startTimeIndex.bulkAdd(startTimeEntries);this._endTimeIndex.bulkAdd(endTimeEntries)}else{var timeEntries=[];for(i=geojson.length-1;i>=0;i--){feature=geojson[i];timeEntries.push({id:feature.id,value:new Date(feature.properties[this.options.timeField])})}this._timeIndex.bulkAdd(timeEntries)}},_featureWithinTimeRange:function(feature){if(!this.options.from||!this.options.to){return true}var from=+this.options.from.valueOf();var to=+this.options.to.valueOf();if(typeof this.options.timeField==="string"){var date=+feature.properties[this.options.timeField];return date>=from&&date<=to}if(this.options.timeField.start&&this.options.timeField.end){var startDate=+feature.properties[this.options.timeField.start];var endDate=+feature.properties[this.options.timeField.end];return startDate>=from&&startDate<=to||endDate>=from&&endDate<=to}},_visibleZoom:function(){if(!this._map){return false}var zoom=this._map.getZoom();if(zoom>this.options.maxZoom||zoom<this.options.minZoom){return false}else{return true}},_handleZoomChange:function(){if(!this._visibleZoom()){this.removeLayers(this._currentSnapshot);this._currentSnapshot=[]}else{for(var i in this._activeCells){var coords=this._activeCells[i].coords;var key=this._cacheKey(coords);if(this._cache[key]){this.addLayers(self._cache[key])}}}},authenticate:function(token){this.service.authenticate(token);return this},metadata:function(callback,context){this.service.metadata(callback,context);return this},query:function(){return this.service.query()},_getMetadata:function(callback){if(this._metadata){var error;callback(error,this._metadata);
}else{this.metadata(L.Util.bind(function(error,response){this._metadata=response;callback(error,this._metadata)},this))}},addFeature:function(feature,callback,context){this._getMetadata(L.Util.bind(function(error,metadata){if(error){if(callback){callback.call(this,error,null)}return}this.service.addFeature(feature,L.Util.bind(function(error,response){if(!error){feature.properties[metadata.objectIdField]=response.objectId;feature.id=response.objectId;this.createLayers([feature])}if(callback){callback.call(context,error,response)}},this))},this))},updateFeature:function(feature,callback,context){this.service.updateFeature(feature,function(error,response){if(!error){this.removeLayers([feature.id],true);this.createLayers([feature])}if(callback){callback.call(context,error,response)}},this)},deleteFeature:function(id,callback,context){this.service.deleteFeature(id,function(error,response){if(!error&&response.objectId){this.removeLayers([response.objectId],true)}if(callback){callback.call(context,error,response)}},this)},deleteFeatures:function(ids,callback,context){return this.service.deleteFeatures(ids,function(error,response){if(!error&&response.length>0){for(var i=0;i<response.length;i++){this.removeLayers([response[i].objectId],true)}}if(callback){callback.call(context,error,response)}},this)}});exports.FeatureLayer=exports.FeatureManager.extend({options:{cacheLayers:true},initialize:function(options){exports.FeatureManager.prototype.initialize.call(this,options);this._originalStyle=this.options.style;this._layers={}},onRemove:function(map){for(var i in this._layers){map.removeLayer(this._layers[i])}return exports.FeatureManager.prototype.onRemove.call(this,map)},createNewLayer:function(geojson){var layer=L.GeoJSON.geometryToLayer(geojson,this.options);layer.defaultOptions=layer.options;return layer},_updateLayer:function(layer,geojson){var latlngs=[];var coordsToLatLng=this.options.coordsToLatLng||L.GeoJSON.coordsToLatLng;if(geojson.properties){layer.feature.properties=geojson.properties}switch(geojson.geometry.type){case"Point":latlngs=L.GeoJSON.coordsToLatLng(geojson.geometry.coordinates);layer.setLatLng(latlngs);break;case"LineString":latlngs=L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates,0,coordsToLatLng);layer.setLatLngs(latlngs);break;case"MultiLineString":latlngs=L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates,1,coordsToLatLng);layer.setLatLngs(latlngs);break;case"Polygon":latlngs=L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates,1,coordsToLatLng);layer.setLatLngs(latlngs);break;case"MultiPolygon":latlngs=L.GeoJSON.coordsToLatLngs(geojson.geometry.coordinates,2,coordsToLatLng);layer.setLatLngs(latlngs);break}},createLayers:function(features){for(var i=features.length-1;i>=0;i--){var geojson=features[i];var layer=this._layers[geojson.id];var newLayer;if(this._visibleZoom()&&layer&&!this._map.hasLayer(layer)){this._map.addLayer(layer)}if(layer&&this.options.simplifyFactor>0&&(layer.setLatLngs||layer.setLatLng)){this._updateLayer(layer,geojson)}if(!layer){newLayer=this.createNewLayer(geojson);newLayer.feature=geojson;newLayer.addEventParent(this);if(this.options.onEachFeature){this.options.onEachFeature(newLayer.feature,newLayer)}this._layers[newLayer.feature.id]=newLayer;this.setFeatureStyle(newLayer.feature.id,this.options.style);this.fire("createfeature",{feature:newLayer.feature},true);if(this._visibleZoom()&&(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(geojson))){this._map.addLayer(newLayer)}}}},addLayers:function(ids){for(var i=ids.length-1;i>=0;i--){var layer=this._layers[ids[i]];if(layer){this.fire("addfeature",{feature:layer.feature},true);this._map.addLayer(layer)}}},removeLayers:function(ids,permanent){for(var i=ids.length-1;i>=0;i--){var id=ids[i];var layer=this._layers[id];if(layer){this.fire("removefeature",{feature:layer.feature,permanent:permanent},true);this._map.removeLayer(layer)}if(layer&&permanent){delete this._layers[id]}}},cellEnter:function(bounds,coords){if(!this._zooming&&this._map){L.Util.requestAnimFrame(L.Util.bind(function(){var cacheKey=this._cacheKey(coords);var cellKey=this._cellCoordsToKey(coords);var layers=this._cache[cacheKey];if(this._activeCells[cellKey]&&layers){this.addLayers(layers)}},this))}},cellLeave:function(bounds,coords){if(!this._zooming){L.Util.requestAnimFrame(L.Util.bind(function(){if(this._map){var cacheKey=this._cacheKey(coords);var cellKey=this._cellCoordsToKey(coords);var layers=this._cache[cacheKey];var mapBounds=this._map.getBounds();if(!this._activeCells[cellKey]&&layers){var removable=true;for(var i=0;i<layers.length;i++){var layer=this._layers[layers[i]];if(layer&&layer.getBounds&&mapBounds.intersects(layer.getBounds())){removable=false}}if(removable){this.removeLayers(layers,!this.options.cacheLayers)}if(!this.options.cacheLayers&&removable){delete this._cache[cacheKey];delete this._cells[cellKey];delete this._activeCells[cellKey]}}}},this))}},resetStyle:function(){this.options.style=this._originalStyle;this.eachFeature(function(layer){this.resetFeatureStyle(layer.feature.id)},this);return this},setStyle:function(style){this.options.style=style;this.eachFeature(function(layer){this.setFeatureStyle(layer.feature.id,style)},this);return this},resetFeatureStyle:function(id){var layer=this._layers[id];var style=this._originalStyle||L.Path.prototype.options;if(layer){L.Util.extend(layer.options,layer.defaultOptions);this.setFeatureStyle(id,style)}return this},setFeatureStyle:function(id,style){var layer=this._layers[id];if(typeof style==="function"){style=style(layer.feature)}if(layer.setStyle){layer.setStyle(style)}return this},eachFeature:function(fn,context){for(var i in this._layers){fn.call(context,this._layers[i])}return this},getFeature:function(id){return this._layers[id]},bringToBack:function(){this.eachFeature(function(layer){if(layer.bringToBack){layer.bringToBack()}})},bringToFront:function(){this.eachFeature(function(layer){if(layer.bringToFront){layer.bringToFront()}})},redraw:function(id){if(id){this._redraw(id)}return this},_redraw:function(id){var layer=this._layers[id];var geojson=layer.feature;if(layer&&layer.setIcon&&this.options.pointToLayer){if(this.options.pointToLayer){var getIcon=this.options.pointToLayer(geojson,L.latLng(geojson.geometry.coordinates[1],geojson.geometry.coordinates[0]));var updatedIcon=getIcon.options.icon;layer.setIcon(updatedIcon)}}if(layer&&layer.setStyle&&this.options.pointToLayer){var getStyle=this.options.pointToLayer(geojson,L.latLng(geojson.geometry.coordinates[1],geojson.geometry.coordinates[0]));var updatedStyle=getStyle.options;this.setFeatureStyle(geojson.id,updatedStyle)}if(layer&&layer.setStyle&&this.options.style){this.resetStyle(geojson.id)}}});function featureLayer(options){return new exports.FeatureLayer(options)}exports.VERSION="2.0.0-beta.7";exports.post=xmlHttpPost;exports.request=request;exports.task=task;exports.query=query;exports.find=find;exports.identify=identify;exports.identifyFeatures=identifyFeatures;exports.identifyImage=identifyImage;exports.service=service;exports.mapService=mapService;exports.imageService=imageService;exports.featureLayerService=featureLayerService;exports.basemapLayer=basemapLayer;exports.tiledMapLayer=tiledMapLayer;exports.imageMapLayer=imageMapLayer;exports.dynamicMapLayer=dynamicMapLayer;exports.featureLayer=featureLayer});
//# sourceMappingURL=./esri-leaflet.js.map
/* esri-leaflet-geocoder - v2.0.0 - Tue Sep 08 2015 16:07:48 GMT-0700 (PDT)
 * Copyright (c) 2015 Environmental Systems Research Institute, Inc.
 * Apache 2.0 */
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?factory(exports,require("leaflet"),require("esri-leaflet")):typeof define==="function"&&define.amd?define(["exports","leaflet","esri-leaflet"],factory):factory(global.L.esri.Geocoding={},L,L.esri)})(this,function(exports,L,esri_leaflet){"use strict";exports.Geocode=esri_leaflet.Task.extend({path:"find",params:{outSr:4326,forStorage:false,outFields:"*",maxLocations:20},setters:{address:"address",neighborhood:"neighborhood",city:"city",subregion:"subregion",region:"region",postal:"postal",country:"country",text:"text",category:"category",token:"token",key:"magicKey",fields:"outFields",forStorage:"forStorage",maxLocations:"maxLocations"},initialize:function(options){options=options||{};options.url=options.url||exports.WorldGeocodingServiceUrl;esri_leaflet.Task.prototype.initialize.call(this,options)},within:function(bounds){bounds=L.latLngBounds(bounds);this.params.bbox=esri_leaflet.Util.boundsToExtent(bounds);return this},nearby:function(latlng,radius){latlng=L.latLng(latlng);this.params.location=latlng.lng+","+latlng.lat;this.params.distance=Math.min(Math.max(radius,2e3),5e4);return this},run:function(callback,context){this.path=this.params.text?"find":"findAddressCandidates";if(this.path==="findAddressCandidates"&&this.params.bbox){this.params.searchExtent=this.params.bbox;delete this.params.bbox}return this.request(function(error,response){var processor=this.path==="find"?this._processFindResponse:this._processFindAddressCandidatesResponse;var results=!error?processor(response):undefined;callback.call(context,error,{results:results},response)},this)},_processFindResponse:function(response){var results=[];for(var i=0;i<response.locations.length;i++){var location=response.locations[i];var bounds;if(location.extent){bounds=esri_leaflet.Util.extentToBounds(location.extent)}results.push({text:location.name,bounds:bounds,score:location.feature.attributes.Score,latlng:L.latLng(location.feature.geometry.y,location.feature.geometry.x),properties:location.feature.attributes})}return results},_processFindAddressCandidatesResponse:function(response){var results=[];for(var i=0;i<response.candidates.length;i++){var candidate=response.candidates[i];var bounds=esri_leaflet.Util.extentToBounds(candidate.extent);results.push({text:candidate.address,bounds:bounds,score:candidate.score,latlng:L.latLng(candidate.location.y,candidate.location.x),properties:candidate.attributes})}return results}});function geocode(options){return new exports.Geocode(options)}exports.ReverseGeocode=esri_leaflet.Task.extend({path:"reverseGeocode",params:{outSR:4326},setters:{distance:"distance",language:"language"},initialize:function(options){options=options||{};options.url=options.url||exports.WorldGeocodingServiceUrl;esri_leaflet.Task.prototype.initialize.call(this,options)},latlng:function(latlng){latlng=L.latLng(latlng);this.params.location=latlng.lng+","+latlng.lat;return this},run:function(callback,context){return this.request(function(error,response){var result;if(!error){result={latlng:L.latLng(response.location.y,response.location.x),address:response.address}}else{result=undefined}callback.call(context,error,result,response)},this)}});function reverseGeocode(options){return new exports.ReverseGeocode(options)}exports.Suggest=esri_leaflet.Task.extend({path:"suggest",params:{},setters:{text:"text",category:"category",countries:"countryCode"},initialize:function(options){options=options||{};options.url=options.url||exports.WorldGeocodingServiceUrl;esri_leaflet.Task.prototype.initialize.call(this,options)},within:function(bounds){bounds=L.latLngBounds(bounds);bounds=bounds.pad(.5);var center=bounds.getCenter();var ne=bounds.getNorthWest();this.params.location=center.lng+","+center.lat;this.params.distance=Math.min(Math.max(center.distanceTo(ne),2e3),5e4);this.params.searchExtent=esri_leaflet.Util.boundsToExtent(bounds);return this},nearby:function(latlng,radius){latlng=L.latLng(latlng);this.params.location=latlng.lng+","+latlng.lat;this.params.distance=Math.min(Math.max(radius,2e3),5e4);return this},run:function(callback,context){return this.request(function(error,response){callback.call(context,error,response,response)},this)}});function suggest(options){return new exports.Suggest(options)}exports.GeocodeService=esri_leaflet.Service.extend({initialize:function(options){options=options||{};options.url=options.url||exports.WorldGeocodingServiceUrl;esri_leaflet.Service.prototype.initialize.call(this,options);this._confirmSuggestSupport()},geocode:function(){return geocode(this)},reverse:function(){return reverseGeocode(this)},suggest:function(){return suggest(this)},_confirmSuggestSupport:function(){this.metadata(function(error,response){if(error){return}if(response.capabilities.includes("Suggest")){this.options.supportsSuggest=true}else{this.options.supportsSuggest=false}},this)}});function geocodeService(options){return new exports.GeocodeService(options)}exports.Geosearch=L.Control.extend({includes:L.Mixin.Events,options:{position:"topleft",zoomToResult:true,useMapBounds:12,collapseAfterResult:true,expanded:false,forStorage:false,allowMultipleResults:true,placeholder:"Search for places or addresses",title:"Location Search"},initialize:function(options){if(!options||!options.providers||!options.providers.length){throw new Error("You must specificy at least one provider")}this._providers=options.providers;for(var i=0;i<this._providers.length;i++){this._providers[i].addEventParent(this)}this._pendingSuggestions=[];L.Control.prototype.initialize.call(options)},_geocode:function(text,key,provider){var activeRequests=0;var allResults=[];var bounds;var callback=L.Util.bind(function(error,results){activeRequests--;if(error){return}if(results){allResults=allResults.concat(results)}if(activeRequests<=0){bounds=this._boundsFromResults(allResults);this.fire("results",{results:allResults,bounds:bounds,latlng:bounds?bounds.getCenter():undefined,text:text});if(this.options.zoomToResult&&bounds){this._map.fitBounds(bounds)}L.DomUtil.removeClass(this._input,"geocoder-control-loading");this.fire("load");this.clear();this._input.blur()}},this);if(key){activeRequests++;provider.results(text,key,this._searchBounds(),callback)}else{for(var i=0;i<this._providers.length;i++){activeRequests++;this._providers[i].results(text,key,this._searchBounds(),callback)}}},_suggest:function(text){L.DomUtil.addClass(this._input,"geocoder-control-loading");var activeRequests=this._providers.length;var createCallback=L.Util.bind(function(text,provider){return L.Util.bind(function(error,suggestions){if(error){return}var i;activeRequests=activeRequests-1;if(this._input.value<2){this._suggestions.innerHTML="";this._suggestions.style.display="none";return}if(suggestions){for(i=0;i<suggestions.length;i++){suggestions[i].provider=provider}}if(provider._lastRender!==text&&provider.nodes){for(i=0;i<provider.nodes.length;i++){if(provider.nodes[i].parentElement){this._suggestions.removeChild(provider.nodes[i])}}provider.nodes=[]}if(suggestions.length&&this._input.value===text){if(provider.nodes){for(var k=0;k<provider.nodes.length;k++){if(provider.nodes[k].parentElement){this._suggestions.removeChild(provider.nodes[k])}}}provider._lastRender=text;provider.nodes=this._renderSuggestions(suggestions)}if(activeRequests===0){L.DomUtil.removeClass(this._input,"geocoder-control-loading")}},this)},this);this._pendingSuggestions=[];for(var i=0;i<this._providers.length;i++){var provider=this._providers[i];var request=provider.suggestions(text,this._searchBounds(),createCallback(text,provider));this._pendingSuggestions.push(request)}},_searchBounds:function(){if(this.options.useMapBounds===false){return null}if(this.options.useMapBounds===true){return this._map.getBounds()}if(this.options.useMapBounds<=this._map.getZoom()){return this._map.getBounds()}return null},_renderSuggestions:function(suggestions){var currentGroup;this._suggestions.style.display="block";this._suggestions.style.maxHeight=this._map.getSize().y-this._suggestions.offsetTop-this._wrapper.offsetTop-10+"px";var nodes=[];var list;var header;for(var i=0;i<suggestions.length;i++){var suggestion=suggestions[i];if(!header&&this._providers.length>1&&currentGroup!==suggestion.provider.options.label){header=L.DomUtil.create("span","geocoder-control-header",this._suggestions);header.textContent=suggestion.provider.options.label;header.innerText=suggestion.provider.options.label;currentGroup=suggestion.provider.options.label;nodes.push(header)}if(!list){list=L.DomUtil.create("ul","geocoder-control-list",this._suggestions)}var suggestionItem=L.DomUtil.create("li","geocoder-control-suggestion",list);suggestionItem.innerHTML=suggestion.text;suggestionItem.provider=suggestion.provider;suggestionItem["data-magic-key"]=suggestion.magicKey}nodes.push(list);return nodes},_boundsFromResults:function(results){if(!results.length){return}var nullIsland=L.latLngBounds([0,0],[0,0]);var resultBounds=[];var resultLatlngs=[];for(var i=results.length-1;i>=0;i--){var result=results[i];resultLatlngs.push(result.latlng);if(result.bounds&&result.bounds.isValid()&&!result.bounds.equals(nullIsland)){resultBounds.push(result.bounds)}}var bounds=L.latLngBounds(resultLatlngs);for(var j=0;j<resultBounds.length;j++){bounds.extend(resultBounds[i])}return bounds},clear:function(){this._suggestions.innerHTML="";this._suggestions.style.display="none";this._input.value="";if(this.options.collapseAfterResult){this._input.placeholder="";L.DomUtil.removeClass(this._wrapper,"geocoder-control-expanded")}if(!this._map.scrollWheelZoom.enabled()&&this._map.options.scrollWheelZoom){this._map.scrollWheelZoom.enable()}},getAttribution:function(){var attribution=this.options.attribution;for(var i=0;i<this._providers.length;i++){attribution+=" "+this._providers[i].options.attribution}return attribution},onAdd:function(map){this._map=map;this._wrapper=L.DomUtil.create("div","geocoder-control "+(this.options.expanded?" "+"geocoder-control-expanded":""));this._input=L.DomUtil.create("input","geocoder-control-input leaflet-bar",this._wrapper);this._input.title=this.options.title;this._suggestions=L.DomUtil.create("div","geocoder-control-suggestions leaflet-bar",this._wrapper);L.DomEvent.addListener(this._input,"focus",function(e){this._input.placeholder=this.options.placeholder;L.DomUtil.addClass(this._wrapper,"geocoder-control-expanded")},this);L.DomEvent.addListener(this._wrapper,"click",function(e){L.DomUtil.addClass(this._wrapper,"geocoder-control-expanded");this._input.focus()},this);L.DomEvent.addListener(this._suggestions,"mousedown",function(e){var suggestionItem=e.target||e.srcElement;this._geocode(suggestionItem.innerHTML,suggestionItem["data-magic-key"],suggestionItem.provider);this.clear()},this);L.DomEvent.addListener(this._input,"blur",function(e){this.clear()},this);L.DomEvent.addListener(this._input,"keydown",function(e){L.DomUtil.addClass(this._wrapper,"geocoder-control-expanded");var list=this._suggestions.querySelectorAll("."+"geocoder-control-suggestion");var selected=this._suggestions.querySelectorAll("."+"geocoder-control-selected")[0];var selectedPosition;for(var i=0;i<list.length;i++){if(list[i]===selected){selectedPosition=i;break}}switch(e.keyCode){case 13:if(selected){this._geocode(selected.innerHTML,selected["data-magic-key"],selected.provider);this.clear()}else if(this.options.allowMultipleResults){this._geocode(this._input.value,undefined);this.clear()}else{L.DomUtil.addClass(list[0],"geocoder-control-selected")}L.DomEvent.preventDefault(e);break;case 38:if(selected){L.DomUtil.removeClass(selected,"geocoder-control-selected")}var previousItem=list[selectedPosition-1];if(selected&&previousItem){L.DomUtil.addClass(previousItem,"geocoder-control-selected")}else{L.DomUtil.addClass(list[list.length-1],"geocoder-control-selected")}L.DomEvent.preventDefault(e);break;case 40:if(selected){L.DomUtil.removeClass(selected,"geocoder-control-selected")}var nextItem=list[selectedPosition+1];if(selected&&nextItem){L.DomUtil.addClass(nextItem,"geocoder-control-selected")}else{L.DomUtil.addClass(list[0],"geocoder-control-selected")}L.DomEvent.preventDefault(e);break;default:for(var x=0;x<this._pendingSuggestions.length;x++){var request=this._pendingSuggestions[x];if(request&&request.abort&&!request.id){request.abort()}}break}},this);L.DomEvent.addListener(this._input,"keyup",L.Util.throttle(function(e){var key=e.which||e.keyCode;var text=(e.target||e.srcElement).value;if(text.length<2){this._suggestions.innerHTML="";this._suggestions.style.display="none";L.DomUtil.removeClass(this._input,"geocoder-control-loading");return}if(key===27){this._suggestions.innerHTML="";this._suggestions.style.display="none";return}if(key!==13&&key!==38&&key!==40){if(this._input.value!==this._lastValue){this._lastValue=this._input.value;this._suggest(text)}}},50,this),this);L.DomEvent.disableClickPropagation(this._wrapper);L.DomEvent.addListener(this._suggestions,"mouseover",function(e){if(map.scrollWheelZoom.enabled()&&map.options.scrollWheelZoom){map.scrollWheelZoom.disable()}});L.DomEvent.addListener(this._suggestions,"mouseout",function(e){if(!map.scrollWheelZoom.enabled()&&map.options.scrollWheelZoom){map.scrollWheelZoom.enable()}});return this._wrapper},onRemove:function(map){map.attributionControl.removeAttribution("Geocoding by Esri")}});function geosearch(options){return new exports.Geosearch(options)}exports.ArcgisOnlineProvider=exports.GeocodeService.extend({options:{label:"Places and Addresses",maxResults:5,attribution:'<a href="https://developers.arcgis.com/en/features/geocoding/">Geocoding by Esri</a>'},suggestions:function(text,bounds,callback){var request=this.suggest().text(text);if(bounds){request.within(bounds)}if(this.options.countries){request.countries(this.options.countries)}if(this.options.categories){request.category(this.options.categories)}return request.run(function(error,results,response){var suggestions=[];if(!error){while(response.suggestions.length&&suggestions.length<=this.options.maxResults-1){var suggestion=response.suggestions.shift();if(!suggestion.isCollection){suggestions.push({text:suggestion.text,magicKey:suggestion.magicKey})}}}callback(error,suggestions)},this)},results:function(text,key,bounds,callback){var request=this.geocode().text(text);if(key){request.key(key)}else{request.maxLocations(this.options.maxResults)}if(bounds){request.within(bounds)}if(this.options.forStorage){request.forStorage(true)}return request.run(function(error,response){callback(error,response.results)},this)}});function arcgisOnlineProvider(options){return new exports.ArcgisOnlineProvider(options)}exports.FeatureLayerProvider=esri_leaflet.FeatureLayerService.extend({options:{label:"Feature Layer",maxResults:5,bufferRadius:1e3,formatSuggestion:function(feature){return feature.properties[this.options.searchFields[0]]}},initialize:function(options){esri_leaflet.FeatureLayerService.prototype.initialize.call(this,options);if(typeof this.options.searchFields==="string"){this.options.searchFields=[this.options.searchFields]}},suggestions:function(text,bounds,callback){var query=this.query().where(this._buildQuery(text)).returnGeometry(false);if(bounds){query.intersects(bounds)}if(this.options.idField){query.fields([this.options.idField].concat(this.options.searchFields))}var request=query.run(function(error,results,raw){if(error){callback(error,[])}else{this.options.idField=raw.objectIdFieldName;var suggestions=[];var count=Math.min(results.features.length,this.options.maxResults);for(var i=0;i<count;i++){var feature=results.features[i];suggestions.push({text:this.options.formatSuggestion.call(this,feature),magicKey:feature.id})}callback(error,suggestions.slice(0,this.options.maxResults).reverse())}},this);return request},results:function(text,key,bounds,callback){var query=this.query();if(key){query.featureIds([key])}else{query.where(this._buildQuery(text))}if(bounds){query.within(bounds)}return query.run(L.Util.bind(function(error,features){var results=[];for(var i=0;i<features.features.length;i++){var feature=features.features[i];if(feature){var bounds=this._featureBounds(feature);var result={latlng:bounds.getCenter(),bounds:bounds,text:this.options.formatSuggestion.call(this,feature),properties:feature.properties,geojson:feature};results.push(result)}}callback(error,results)},this))},_buildQuery:function(text){var queryString=[];for(var i=this.options.searchFields.length-1;i>=0;i--){var field='upper("'+this.options.searchFields[i]+'")';queryString.push(field+" LIKE upper('%"+text+"%')")}return queryString.join(" OR ")},_featureBounds:function(feature){var geojson=L.geoJson(feature);if(feature.geometry.type==="Point"){var center=geojson.getBounds().getCenter();var lngRadius=this.options.bufferRadius/40075017*360/Math.cos(180/Math.PI*center.lat);var latRadius=this.options.bufferRadius/40075017*360;return L.latLngBounds([center.lat-latRadius,center.lng-lngRadius],[center.lat+latRadius,center.lng+lngRadius])}else{return geojson.getBounds()}}});function featureLayerProvider(options){return new exports.FeatureLayerProvider(options)}exports.MapServiceProvider=esri_leaflet.MapService.extend({options:{layers:[0],label:"Map Service",bufferRadius:1e3,maxResults:5,formatSuggestion:function(feature){return feature.properties[feature.displayFieldName]+" <small>"+feature.layerName+"</small>"}},initialize:function(options){esri_leaflet.MapService.prototype.initialize.call(this,options);this._getIdFields()},suggestions:function(text,bounds,callback){var request=this.find().text(text).fields(this.options.searchFields).returnGeometry(false).layers(this.options.layers);return request.run(function(error,results,raw){var suggestions=[];if(!error){var count=Math.min(this.options.maxResults,results.features.length);raw.results=raw.results.reverse();for(var i=0;i<count;i++){var feature=results.features[i];var result=raw.results[i];var layer=result.layerId;var idField=this._idFields[layer];feature.layerId=layer;feature.layerName=this._layerNames[layer];feature.displayFieldName=this._displayFields[layer];if(idField){suggestions.push({text:this.options.formatSuggestion.call(this,feature),magicKey:result.attributes[idField]+":"+layer})}}}callback(error,suggestions.reverse())},this)},results:function(text,key,bounds,callback){var results=[];var request;if(key){var featureId=key.split(":")[0];var layer=key.split(":")[1];request=this.query().layer(layer).featureIds(featureId)}else{request=this.find().text(text).fields(this.options.searchFields).contains(false).layers(this.options.layers)}return request.run(function(error,features,response){if(!error){if(response.results){response.results=response.results.reverse()}for(var i=0;i<features.features.length;i++){var feature=features.features[i];layer=layer?layer:response.results[i].layerId;if(feature&&layer!==undefined){var bounds=this._featureBounds(feature);feature.layerId=layer;feature.layerName=this._layerNames[layer];feature.displayFieldName=this._displayFields[layer];var result={latlng:bounds.getCenter(),bounds:bounds,text:this.options.formatSuggestion.call(this,feature),properties:feature.properties,geojson:feature};results.push(result)}}}callback(error,results.reverse())},this)},_featureBounds:function(feature){var geojson=L.geoJson(feature);if(feature.geometry.type==="Point"){var center=geojson.getBounds().getCenter();var lngRadius=this.options.bufferRadius/40075017*360/Math.cos(180/Math.PI*center.lat);var latRadius=this.options.bufferRadius/40075017*360;return L.latLngBounds([center.lat-latRadius,center.lng-lngRadius],[center.lat+latRadius,center.lng+lngRadius])}else{return geojson.getBounds()}},_layerMetadataCallback:function(layerid){return L.Util.bind(function(error,metadata){if(error){return}this._displayFields[layerid]=metadata.displayField;this._layerNames[layerid]=metadata.name;for(var i=0;i<metadata.fields.length;i++){var field=metadata.fields[i];if(field.type==="esriFieldTypeOID"){this._idFields[layerid]=field.name;break}}},this)},_getIdFields:function(){this._idFields={};this._displayFields={};this._layerNames={};for(var i=0;i<this.options.layers.length;i++){var layer=this.options.layers[i];this.get(layer,{},this._layerMetadataCallback(layer))}}});function mapServiceProvider(options){return new exports.MapServiceProvider(options)}exports.GeocodeServiceProvider=exports.GeocodeService.extend({options:{label:"Geocode Server",maxResults:5},suggestions:function(text,bounds,callback){if(this.options.supportsSuggest){var request=this.suggest().text(text);if(bounds){request.within(bounds)}return request.run(function(error,results,response){var suggestions=[];if(!error){while(response.suggestions.length&&suggestions.length<=this.options.maxResults-1){var suggestion=response.suggestions.shift();if(!suggestion.isCollection){suggestions.push({text:suggestion.text,magicKey:suggestion.magicKey})}}}callback(error,suggestions)},this)}else{callback(undefined,[]);return false}},results:function(text,key,bounds,callback){var request=this.geocode().text(text);request.maxLocations(this.options.maxResults);if(bounds){request.within(bounds)}return request.run(function(error,response){callback(error,response.results)},this)}});function geocodeServiceProvider(options){return new exports.GeocodeServiceProvider(options)}exports.VERSION="2.0.0-beta.3";exports.WorldGeocodingServiceUrl=(window.location.protocol==="https:"?"https:":"http:")+"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/";exports.geocode=geocode;exports.reverseGeocode=reverseGeocode;exports.suggest=suggest;exports.geocodeService=geocodeService;exports.geosearch=geosearch;exports.arcgisOnlineProvider=arcgisOnlineProvider;exports.featureLayerProvider=featureLayerProvider;exports.mapServiceProvider=mapServiceProvider;exports.geocodeServiceProvider=geocodeServiceProvider});
//# sourceMappingURL=./esri-leaflet-geocoder.js.map
/*
 * Google layer using Google Maps API
 */
 //Only working with leaflet beta
//(function (google, L) {

L.Google = L.Layer.extend({
	includes: L.Mixin.Events,

	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		subdomains: 'abc',
		errorTileUrl: '',
		attribution: '',
		opacity: 1,
		continuousWorld: false,
		noWrap: false,
		mapOptions: {
			backgroundColor: '#dddddd'
		}
	},

	// Possible types: SATELLITE, ROADMAP, HYBRID, TERRAIN
	initialize: function(type, options) {
		L.Util.setOptions(this, options);

		this._ready = google.maps.Map != undefined;
		if (!this._ready) L.Google.asyncWait.push(this);

		this._type = type || 'SATELLITE';
	},

	onAdd: function(map, insertAtTheBottom) {
		this._map = map;
		this._insertAtTheBottom = insertAtTheBottom;

		// create a container div for tiles
		this._initContainer();
		this._initMapObject();

		// set up events
		map.on('viewreset', this._resetCallback, this);

		this._limitedUpdate = L.Util.throttle(this._update, 150, this);
		map.on('move', this._update, this);

		map.on('zoomanim', this._handleZoomAnim, this);

		//20px instead of 1em to avoid a slight overlap with google's attribution
		map._controlCorners['bottomright'].style.marginBottom = "20px";

		this._reset();
		this._update();
	},

	onRemove: function(map) {
		this._map._container.removeChild(this._container);
		//this._container = null;

		this._map.off('viewreset', this._resetCallback, this);

		this._map.off('move', this._update, this);

		this._map.off('zoomanim', this._handleZoomAnim, this);

		map._controlCorners['bottomright'].style.marginBottom = "0em";
		//this._map.off('moveend', this._update, this);
	},

	getAttribution: function() {
		return this.options.attribution;
	},

	setOpacity: function(opacity) {
		this.options.opacity = opacity;
		if (opacity < 1) {
			L.DomUtil.setOpacity(this._container, opacity);
		}
	},

	setElementSize: function(e, size) {
		e.style.width = size.x + "px";
		e.style.height = size.y + "px";
	},

	_initContainer: function() {
		var tilePane = this._map._container,
			first = tilePane.firstChild;

		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-google-layer leaflet-top leaflet-left');
			this._container.id = "_GMapContainer_" + L.Util.stamp(this);
			this._container.style.zIndex = "auto";
		}

		tilePane.insertBefore(this._container, first);

		this.setOpacity(this.options.opacity);
		this.setElementSize(this._container, this._map.getSize());
	},

	_initMapObject: function() {
		if (!this._ready) return;
		this._google_center = new google.maps.LatLng(0, 0);
		var map = new google.maps.Map(this._container, {
		    center: this._google_center,
		    zoom: 0,
		    tilt: 0,
		    mapTypeId: google.maps.MapTypeId[this._type],
		    disableDefaultUI: true,
		    keyboardShortcuts: false,
		    draggable: false,
		    disableDoubleClickZoom: true,
		    scrollwheel: false,
		    streetViewControl: false,
		    styles: this.options.mapOptions.styles,
		    backgroundColor: this.options.mapOptions.backgroundColor
		});

		var _this = this;
		this._reposition = google.maps.event.addListenerOnce(map, "center_changed",
			function() { _this.onReposition(); });
		this._google = map;

		google.maps.event.addListenerOnce(map, "idle",
			function() { _this._checkZoomLevels(); });
	},

	_checkZoomLevels: function() {
		//setting the zoom level on the Google map may result in a different zoom level than the one requested
		//(it won't go beyond the level for which they have data).
		// verify and make sure the zoom levels on both Leaflet and Google maps are consistent
		if (this._google.getZoom() !== this._map.getZoom()) {
			//zoom levels are out of sync. Set the leaflet zoom level to match the google one
			this._map.setZoom( this._google.getZoom() );
		}
	},

	_resetCallback: function(e) {
		this._reset(e.hard);
	},

	_reset: function(clearOldContainer) {
		this._initContainer();
	},

	_update: function(e) {
		if (!this._google) return;
		this._resize();

		var center = e && e.latlng ? e.latlng : this._map.getCenter();
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._google.setCenter(_center);
		this._google.setZoom(this._map.getZoom());

		this._checkZoomLevels();
		//this._google.fitBounds(google_bounds);
	},

	_resize: function() {
		var size = this._map.getSize();
		if (this._container.style.width == size.x &&
		    this._container.style.height == size.y)
			return;
		this.setElementSize(this._container, size);
		this.onReposition();
	},


	_handleZoomAnim: function (e) {
		var center = e.center;
		var _center = new google.maps.LatLng(center.lat, center.lng);

		this._google.setCenter(_center);
		this._google.setZoom(e.zoom);
	},


	onReposition: function() {
		if (!this._google) return;
		google.maps.event.trigger(this._google, "resize");
	}
});

L.Google.asyncWait = [];
L.Google.asyncInitialize = function() {
	var i;
	for (i = 0; i < L.Google.asyncWait.length; i++) {
		var o = L.Google.asyncWait[i];
		o._ready = true;
		if (o._container) {
			o._initMapObject();
			o._update();
		}
	}
	L.Google.asyncWait = [];
};
//})(window.google, L)

var style = [
	    {
	        "featureType": "all",
	        "elementType": "all",
	        "stylers": [
	            {
	                "lightness": "5"
	            }
	        ]
	    },
	    {
	        "featureType": "all",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#727272"
	            }
	        ]
	    },
	    {
	        "featureType": "all",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "weight": "-5"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#9f9f9f"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.land_parcel",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "weight": "1.5"
	            },
	            {
	                "lightness": "15"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#f2f2f2"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "lightness": "50"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            },
	            {
	                "saturation": "-30"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "saturation": "-20"
	            },
	            {
	                "lightness": "40"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "lightness": "10"
	            },
	            {
	                "saturation": "-100"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 45
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "lightness": "-24"
	            },
	            {
	                "gamma": "2.5"
	            },
	            {
	                "saturation": "0"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": "100"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "lightness": "-22"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "weight": "1.5"
	            },
	            {
	                "lightness": "100"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "weight": "3"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "off"
	            },
	            {
	                "weight": "1.5"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.line",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": "30"
	            },
	            {
	                "saturation": "0"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.line",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "weight": "1.5"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#b1d9e9"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "saturation": "-50"
	            },
	            {
	                "lightness": "10"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "lightness": "-20"
	            },
	            {
	                "visibility": "on"
	            },
	            {
	                "saturation": "0"
	            }
	        ]
	    },
	       {
	        "featureType": "poi.park",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	            	"lightness": 25
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "color": "#f0f0f0"
	            },
	            {
	                "weight": "2"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    }
	];

/*
 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
 https://github.com/Leaflet/Leaflet.markercluster
 (c) 2012-2013, Dave Leaver, smartrak
*/
!function(e,t,i){L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[];var t=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,t?this._withAnimation:this._noAnimation),this._markerCluster=t?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(e){if(e instanceof L.LayerGroup){var t=[];for(var i in e._layers)t.push(e._layers[i]);return this.addLayers(t)}if(!e.getLatLng)return this._nonPointGroup.addLayer(e),this;if(!this._map)return this._needsClustering.push(e),this;if(this.hasLayer(e))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(e,this._maxZoom),this._topClusterLevel._recalculateBounds();var n=e,s=this._map.getZoom();if(e.__parent)for(;n.__parent._zoom>=s;)n=n.__parent;return this._currentShownBounds.contains(n.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(e,n):this._animationAddLayerNonAnimated(e,n)),this},removeLayer:function(e){if(e instanceof L.LayerGroup){var t=[];for(var i in e._layers)t.push(e._layers[i]);return this.removeLayers(t)}return e.getLatLng?this._map?e.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(e)),this._removeLayer(e,!0),this._topClusterLevel._recalculateBounds(),e.off("move",this._childMarkerMoved,this),this._featureGroup.hasLayer(e)&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,e)&&this.hasLayer(e)&&this._needsRemoving.push(e),this):(this._nonPointGroup.removeLayer(e),this)},addLayers:function(e){var t,i,n,s,r=this._featureGroup,o=this._nonPointGroup,a=this.options.chunkedLoading,h=this.options.chunkInterval,u=this.options.chunkProgress;if(this._map){var l=0,_=(new Date).getTime(),d=L.bind(function(){for(var t=(new Date).getTime();l<e.length;l++){if(a&&0===l%200){var i=(new Date).getTime()-t;if(i>h)break}if(s=e[l],s.getLatLng){if(!this.hasLayer(s)&&(this._addLayer(s,this._maxZoom),s.__parent&&2===s.__parent.getChildCount())){var n=s.__parent.getAllChildMarkers(),c=n[0]===s?n[1]:n[0];r.removeLayer(c)}}else o.addLayer(s)}u&&u(l,e.length,(new Date).getTime()-_),l===e.length?(this._topClusterLevel._recalculateBounds(),this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()}),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(d,this.options.chunkDelay)},this);d()}else{for(t=[],i=0,n=e.length;n>i;i++)s=e[i],s.getLatLng?this.hasLayer(s)||t.push(s):o.addLayer(s);this._needsClustering=this._needsClustering.concat(t)}return this},removeLayers:function(e){var t,i,n,s=this._featureGroup,r=this._nonPointGroup;if(!this._map){for(t=0,i=e.length;i>t;t++)n=e[t],this._arraySplice(this._needsClustering,n),r.removeLayer(n),this.hasLayer(n)&&this._needsRemoving.push(n);return this}if(this._unspiderfy)for(this._unspiderfy(),t=0,i=e.length;i>t;t++)n=e[t],this._unspiderfyLayer(n);for(t=0,i=e.length;i>t;t++)n=e[t],n.__parent?(this._removeLayer(n,!0,!0),s.hasLayer(n)&&(s.removeLayer(n),n.clusterShow&&n.clusterShow())):r.removeLayer(n);return this._topClusterLevel._recalculateBounds(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),s.eachLayer(function(e){e instanceof L.MarkerCluster&&e._updateIcon()}),this},clearLayers:function(){return this._map||(this._needsClustering=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(e){e.off("move",this._childMarkerMoved,this),delete e.__parent}),this._map&&this._generateInitialClusters(),this},getBounds:function(){var e=new L.LatLngBounds;this._topClusterLevel&&e.extend(this._topClusterLevel._bounds);for(var t=this._needsClustering.length-1;t>=0;t--)e.extend(this._needsClustering[t].getLatLng());return e.extend(this._nonPointGroup.getBounds()),e},eachLayer:function(e,t){var i,n=this._needsClustering.slice(),s=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(n),i=n.length-1;i>=0;i--)-1===s.indexOf(n[i])&&e.call(t,n[i]);this._nonPointGroup.eachLayer(e,t)},getLayers:function(){var e=[];return this.eachLayer(function(t){e.push(t)}),e},getLayer:function(e){var t=null;return e=parseInt(e,10),this.eachLayer(function(i){L.stamp(i)===e&&(t=i)}),t},hasLayer:function(e){if(!e)return!1;var t,i=this._needsClustering;for(t=i.length-1;t>=0;t--)if(i[t]===e)return!0;for(i=this._needsRemoving,t=i.length-1;t>=0;t--)if(i[t]===e)return!1;return!(!e.__parent||e.__parent._group!==this)||this._nonPointGroup.hasLayer(e)},zoomToShowLayer:function(e,t){"function"!=typeof t&&(t=function(){});var i=function(){!e._icon&&!e.__parent._icon||this._inZoomAnimation||(this._map.off("moveend",i,this),this.off("animationend",i,this),e._icon?t():e.__parent._icon&&(this.once("spiderfied",t,this),e.__parent.spiderfy()))};if(e._icon&&this._map.getBounds().contains(e.getLatLng()))t();else if(e.__parent._zoom<this._map.getZoom())this._map.on("moveend",i,this),this._map.panTo(e.getLatLng());else{var n=function(){this._map.off("movestart",n,this),n=null};this._map.on("movestart",n,this),this._map.on("moveend",i,this),this.on("animationend",i,this),e.__parent.zoomToBounds(),n&&i.call(this)}},onAdd:function(e){this._map=e;var t,i,n;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(e),this._nonPointGroup.addTo(e),this._gridClusters||this._generateInitialClusters(),this._maxLat=e.options.crs.projection.MAX_LATITUDE,t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],this._removeLayer(n,!0);this._needsRemoving=[],this._zoom=this._map.getZoom(),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i)},onRemove:function(e){e.off("zoomend",this._zoomEnd,this),e.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(e){for(var t=e;t&&!t._icon;)t=t.__parent;return t||null},_arraySplice:function(e,t){for(var i=e.length-1;i>=0;i--)if(e[i]===t)return e.splice(i,1),!0},_removeFromGridUnclustered:function(e,t){for(var i=this._map,n=this._gridUnclustered;t>=0&&n[t].removeObject(e,i.project(e.getLatLng(),t));t--);},_childMarkerMoved:function(e){this._ignoreMove||(e.target._latlng=e.oldLatLng,this.removeLayer(e.target),e.target._latlng=e.latlng,this.addLayer(e.target))},_removeLayer:function(e,t,i){var n=this._gridClusters,s=this._gridUnclustered,r=this._featureGroup,o=this._map;t&&this._removeFromGridUnclustered(e,this._maxZoom);var a,h=e.__parent,u=h._markers;for(this._arraySplice(u,e);h&&(h._childCount--,h._boundsNeedUpdate=!0,!(h._zoom<0));)t&&h._childCount<=1?(a=h._markers[0]===e?h._markers[1]:h._markers[0],n[h._zoom].removeObject(h,o.project(h._cLatLng,h._zoom)),s[h._zoom].addObject(a,o.project(a.getLatLng(),h._zoom)),this._arraySplice(h.__parent._childClusters,h),h.__parent._markers.push(a),a.__parent=h.__parent,h._icon&&(r.removeLayer(h),i||r.addLayer(a))):i&&h._icon||h._updateIcon(),h=h.__parent;delete e.__parent},_isOrIsParent:function(e,t){for(;t;){if(e===t)return!0;t=t.parentNode}return!1},fire:function(e,t,i){if(t&&t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;e="cluster"+e}L.FeatureGroup.prototype.fire.call(this,e,t,i)},listens:function(e,t){return L.FeatureGroup.prototype.listens.call(this,e,t)||L.FeatureGroup.prototype.listens.call(this,"cluster"+e,t)},_defaultIconCreateFunction:function(e){var t=e.getChildCount(),i=" marker-cluster-";return i+=10>t?"small":100>t?"medium":"large",new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=this._map,t=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(t||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),e.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(e){for(var t=e.layer,i=t;1===i._childClusters.length;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===t._childCount?this.options.spiderfyOnMaxZoom&&t.spiderfy():this.options.zoomToBoundsOnClick&&t.zoomToBounds(),e.originalEvent&&13===e.originalEvent.keyCode&&this._map._container.focus()},_showCoverage:function(e){var t=this._map;this._inZoomAnimation||(this._shownPolygon&&t.removeLayer(this._shownPolygon),e.layer.getChildCount()>2&&e.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions),t.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(e||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),t&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),e),this._currentShownBounds=e}},_generateInitialClusters:function(){var e=this._map.getMaxZoom(),t=this.options.maxClusterRadius,i=t;"function"!=typeof t&&(i=function(){return t}),this.options.disableClusteringAtZoom&&(e=this.options.disableClusteringAtZoom-1),this._maxZoom=e,this._gridClusters={},this._gridUnclustered={};for(var n=e;n>=0;n--)this._gridClusters[n]=new L.DistanceGrid(i(n)),this._gridUnclustered[n]=new L.DistanceGrid(i(n));this._topClusterLevel=new this._markerCluster(this,-1)},_addLayer:function(e,t){var i,n,s=this._gridClusters,r=this._gridUnclustered;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(e),e.on("move",this._childMarkerMoved,this);t>=0;t--){i=this._map.project(e.getLatLng(),t);var o=s[t].getNearObject(i);if(o)return o._addChild(e),e.__parent=o,void 0;if(o=r[t].getNearObject(i)){var a=o.__parent;a&&this._removeLayer(o,!1);var h=new this._markerCluster(this,t,o,e);s[t].addObject(h,this._map.project(h._cLatLng,t)),o.__parent=h,e.__parent=h;var u=h;for(n=t-1;n>a._zoom;n--)u=new this._markerCluster(this,n,u),s[n].addObject(u,this._map.project(o.getLatLng(),n));return a._addChild(u),this._removeFromGridUnclustered(o,t),void 0}r[t].addObject(e,i)}this._topClusterLevel._addChild(e),e.__parent=this._topClusterLevel},_enqueue:function(e){this._queue.push(e),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var e=0;e<this._queue.length;e++)this._queue[e].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var e=Math.round(this._map._zoom);this._processQueue(),this._zoom<e&&this._currentShownBounds.contains(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,e)):this._zoom>e?(this._animationStart(),this._animationZoomOut(this._zoom,e)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(e){var t=this._maxLat;return t!==i&&(e.getNorth()>=t&&(e._northEast.lat=1/0),e.getSouth()<=-t&&(e._southWest.lat=-1/0)),e},_animationAddLayerNonAnimated:function(e,t){if(t===e)this._featureGroup.addLayer(e);else if(2===t._childCount){t._addToMap();var i=t.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else t._updateIcon()},_overrideMarkerIcon:function(e){var t=e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}});return t}}),L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(e,t){var i,n=this._getExpandedVisibleBounds(),s=this._featureGroup;this._ignoreMove=!0,this._topClusterLevel._recursively(n,e,0,function(r){var o,a=r._latlng,h=r._markers;for(n.contains(a)||(a=null),r._isSingleParent()&&e+1===t?(s.removeLayer(r),r._recursivelyAddChildrenToMap(null,t,n)):(r.clusterHide(),r._recursivelyAddChildrenToMap(a,t,n)),i=h.length-1;i>=0;i--)o=h[i],n.contains(o._latlng)||s.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,t),s.eachLayer(function(e){e instanceof L.MarkerCluster||!e._icon||e.clusterShow()}),this._topClusterLevel._recursively(n,e,t,function(e){e._recursivelyRestoreChildPositions(t)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(n,e,0,function(e){s.removeLayer(e),e.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){var i=this,n=this._featureGroup;n.addLayer(e),t!==e&&(t._childCount>2?(t._updateIcon(),this._forceLayout(),this._animationStart(),e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),e.clusterHide(),this._enqueue(function(){n.removeLayer(e),e.clusterShow(),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(t,this._map.getMaxZoom(),this._map.getZoom())))}},_animationZoomOutSingle:function(e,t,i){var n=this._getExpandedVisibleBounds();e._recursivelyAnimateChildrenInAndAddSelfToMap(n,t+1,i);var s=this;this._forceLayout(),e._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===e._childCount){var r=e._markers[0];this._ignoreMove=!0,r.setLatLng(r.getLatLng()),this._ignoreMove=!1,r.clusterShow&&r.clusterShow()}else e._recursively(n,i,0,function(e){e._recursivelyRemoveChildrenFromMap(n,t+1)});s._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(t.body.offsetWidth)}}),L.markerClusterGroup=function(e){return new L.MarkerClusterGroup(e)},L.MarkerCluster=L.Marker.extend({initialize:function(e,t,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this}),this._group=e,this._zoom=t,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(e){e=e||[];for(var t=this._childClusters.length-1;t>=0;t--)this._childClusters[t].getAllChildMarkers(e);for(var i=this._markers.length-1;i>=0;i--)e.push(this._markers[i]);return e},getChildCount:function(){return this._childCount},zoomToBounds:function(){for(var e,t=this._childClusters.slice(),i=this._group._map,n=i.getBoundsZoom(this._bounds),s=this._zoom+1,r=i.getZoom();t.length>0&&n>s;){s++;var o=[];for(e=0;e<t.length;e++)o=o.concat(t[e]._childClusters);t=o}n>s?this._group._map.setView(this._latlng,s):r>=n?this._group._map.setView(this._latlng,r+1):this._group._map.fitBounds(this._bounds)},getBounds:function(){var e=new L.LatLngBounds;return e.extend(this._bounds),e},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(e),e instanceof L.MarkerCluster?(t||(this._childClusters.push(e),e.__parent=this),this._childCount+=e._childCount):(t||this._markers.push(e),this._childCount++),this.__parent&&this.__parent._addChild(e,!0)},_setClusterCenter:function(e){this._cLatLng||(this._cLatLng=e._cLatLng||e._latlng)},_resetBounds:function(){var e=this._bounds;e._southWest&&(e._southWest.lat=1/0,e._southWest.lng=1/0),e._northEast&&(e._northEast.lat=-1/0,e._northEast.lng=-1/0)},_recalculateBounds:function(){var e,t,i,n,s=this._markers,r=this._childClusters,o=0,a=0,h=this._childCount;if(0!==h){for(this._resetBounds(),e=0;e<s.length;e++)i=s[e]._latlng,this._bounds.extend(i),o+=i.lat,a+=i.lng;for(e=0;e<r.length;e++)t=r[e],t._boundsNeedUpdate&&t._recalculateBounds(),this._bounds.extend(t._bounds),i=t._wLatLng,n=t._childCount,o+=i.lat*n,a+=i.lng*n;this._latlng=this._wLatLng=new L.LatLng(o/h,a/h),this._boundsNeedUpdate=!1}},_addToMap:function(e){e&&(this._backupLatlng=this._latlng,this.setLatLng(e)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(e,t,i){this._recursively(e,0,i-1,function(e){var i,n,s=e._markers;for(i=s.length-1;i>=0;i--)n=s[i],n._icon&&(n._setPos(t),n.clusterHide())},function(e){var i,n,s=e._childClusters;for(i=s.length-1;i>=0;i--)n=s[i],n._icon&&(n._setPos(t),n.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,i){this._recursively(e,i,0,function(n){n._recursivelyAnimateChildrenIn(e,n._group._map.latLngToLayerPoint(n.getLatLng()).round(),t),n._isSingleParent()&&t-1===i?(n.clusterShow(),n._recursivelyRemoveChildrenFromMap(e,t)):n.clusterHide(),n._addToMap()})},_recursivelyBecomeVisible:function(e,t){this._recursively(e,0,t,null,function(e){e.clusterShow()})},_recursivelyAddChildrenToMap:function(e,t,i){this._recursively(i,-1,t,function(n){if(t!==n._zoom)for(var s=n._markers.length-1;s>=0;s--){var r=n._markers[s];i.contains(r._latlng)&&(e&&(r._backupLatlng=r.getLatLng(),r.setLatLng(e),r.clusterHide&&r.clusterHide()),n._group._featureGroup.addLayer(r))}},function(t){t._addToMap(e)})},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var i=this._markers[t];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(e-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var s=this._childClusters.length-1;s>=0;s--)this._childClusters[s]._recursivelyRestoreChildPositions(e)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(e,t,i){var n,s;this._recursively(e,-1,t-1,function(e){for(s=e._markers.length-1;s>=0;s--)n=e._markers[s],i&&i.contains(n._latlng)||(e._group._featureGroup.removeLayer(n),n.clusterShow&&n.clusterShow())},function(e){for(s=e._childClusters.length-1;s>=0;s--)n=e._childClusters[s],i&&i.contains(n._latlng)||(e._group._featureGroup.removeLayer(n),n.clusterShow&&n.clusterShow())})},_recursively:function(e,t,i,n,s){var r,o,a=this._childClusters,h=this._zoom;if(t>h)for(r=a.length-1;r>=0;r--)o=a[r],e.intersects(o._bounds)&&o._recursively(e,t,i,n,s);else if(n&&n(this),s&&this._zoom===i&&s(this),i>h)for(r=a.length-1;r>=0;r--)o=a[r],e.intersects(o._bounds)&&o._recursively(e,t,i,n,s)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}}),L.Marker.include({clusterHide:function(){return this.options.opacityWhenUnclustered=this.options.opacity||1,this.setOpacity(0)},clusterShow:function(){var e=this.setOpacity(this.options.opacity||this.options.opacityWhenUnclustered);return delete this.options.opacityWhenUnclustered,e}}),L.DistanceGrid=function(e){this._cellSize=e,this._sqCellSize=e*e,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),s=this._grid,r=s[n]=s[n]||{},o=r[i]=r[i]||[],a=L.Util.stamp(e);this._objectPoint[a]=t,o.push(e)},updateObject:function(e,t){this.removeObject(e),this.addObject(e,t)},removeObject:function(e,t){var i,n,s=this._getCoord(t.x),r=this._getCoord(t.y),o=this._grid,a=o[r]=o[r]||{},h=a[s]=a[s]||[];for(delete this._objectPoint[L.Util.stamp(e)],i=0,n=h.length;n>i;i++)if(h[i]===e)return h.splice(i,1),1===n&&delete a[s],!0},eachObject:function(e,t){var i,n,s,r,o,a,h,u=this._grid;for(i in u){o=u[i];for(n in o)for(a=o[n],s=0,r=a.length;r>s;s++)h=e.call(t,a[s]),h&&(s--,r--)}},getNearObject:function(e){var t,i,n,s,r,o,a,h,u=this._getCoord(e.x),l=this._getCoord(e.y),_=this._objectPoint,d=this._sqCellSize,c=null;for(t=l-1;l+1>=t;t++)if(s=this._grid[t])for(i=u-1;u+1>=i;i++)if(r=s[i])for(n=0,o=r.length;o>n;n++)a=r[n],h=this._sqDist(_[L.Util.stamp(a)],e),d>h&&(d=h,c=a);return c},_getCoord:function(e){return Math.floor(e/this._cellSize)},_sqDist:function(e,t){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(e,t){var i=t[1].lat-t[0].lat,n=t[0].lng-t[1].lng;return n*(e.lat-t[0].lat)+i*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var i,n,s,r=0,o=null,a=[];for(i=t.length-1;i>=0;i--)n=t[i],s=this.getDistant(n,e),s>0&&(a.push(n),s>r&&(r=s,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(e,t){var i=[],n=this.findMostDistantPointFromBaseLine(e,t);return n.maxPoint?(i=i.concat(this.buildConvexHull([e[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,e[1]],n.newPoints))):[e[0]]},getConvexHull:function(e){var t,i=!1,n=!1,s=!1,r=!1,o=null,a=null,h=null,u=null,l=null,_=null;for(t=e.length-1;t>=0;t--){var d=e[t];(i===!1||d.lat>i)&&(o=d,i=d.lat),(n===!1||d.lat<n)&&(a=d,n=d.lat),(s===!1||d.lng>s)&&(h=d,s=d.lng),(r===!1||d.lng<r)&&(u=d,r=d.lng)}n!==i?(_=a,l=o):(_=u,l=h);var c=[].concat(this.buildConvexHull([_,l],e),this.buildConvexHull([l,_],e));return c}}}(),L.MarkerCluster.include({getConvexHull:function(){var e,t,i=this.getAllChildMarkers(),n=[];for(t=i.length-1;t>=0;t--)e=i[t].getLatLng(),n.push(e);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:Math.PI/6,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var e,t=this.getAllChildMarkers(),i=this._group,n=i._map,s=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,t.length>=this._circleSpiralSwitchover?e=this._generatePointsSpiral(t.length,s):(s.y+=10,e=this._generatePointsCircle(t.length,s)),this._animationSpiderfy(t,e)}},unspiderfy:function(e){this._group._inZoomAnimation||(this._animationUnspiderfy(e),this._group._spiderfied=null)},_generatePointsCircle:function(e,t){var i,n,s=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),r=s/this._2PI,o=this._2PI/e,a=[];for(a.length=e,i=e-1;i>=0;i--)n=this._circleStartAngle+i*o,a[i]=new L.Point(t.x+r*Math.cos(n),t.y+r*Math.sin(n))._round();return a},_generatePointsSpiral:function(e,t){var i,n=this._group.options.spiderfyDistanceMultiplier,s=n*this._spiralLengthStart,r=n*this._spiralFootSeparation,o=n*this._spiralLengthFactor*this._2PI,a=0,h=[];for(h.length=e,i=e-1;i>=0;i--)a+=r/s+5e-4*i,h[i]=new L.Point(t.x+s*Math.cos(a),t.y+s*Math.sin(a))._round(),s+=o/a;return h},_noanimationUnspiderfy:function(){var e,t,i=this._group,n=i._map,s=i._featureGroup,r=this.getAllChildMarkers();for(i._ignoreMove=!0,this.setOpacity(1),t=r.length-1;t>=0;t--)e=r[t],s.removeLayer(e),e._preSpiderfyLatlng&&(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng),e.setZIndexOffset&&e.setZIndexOffset(0),e._spiderLeg&&(n.removeLayer(e._spiderLeg),delete e._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:r}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(e,t){var i,n,s,r,o=this._group,a=o._map,h=o._featureGroup,u=this._group.options.spiderLegPolylineOptions;for(o._ignoreMove=!0,i=0;i<e.length;i++)r=a.layerPointToLatLng(t[i]),n=e[i],s=new L.Polyline([this._latlng,r],u),a.addLayer(s),n._spiderLeg=s,n._preSpiderfyLatlng=n._latlng,n.setLatLng(r),n.setZIndexOffset&&n.setZIndexOffset(1e6),h.addLayer(n);this.setOpacity(.3),o._ignoreMove=!1,o.fire("spiderfied",{cluster:this,markers:e})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(e,t){var n,s,r,o,a,h,u=this,l=this._group,_=l._map,d=l._featureGroup,c=this._latlng,p=_.latLngToLayerPoint(c),f=L.Path.SVG,m=L.extend({},this._group.options.spiderLegPolylineOptions),g=m.opacity;for(g===i&&(g=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),f?(m.opacity=0,m.className=(m.className||"")+" leaflet-cluster-spider-leg"):m.opacity=g,l._ignoreMove=!0,n=0;n<e.length;n++)s=e[n],h=_.layerPointToLatLng(t[n]),r=new L.Polyline([c,h],m),_.addLayer(r),s._spiderLeg=r,f&&(o=r._path,a=o.getTotalLength()+.1,o.style.strokeDasharray=a,o.style.strokeDashoffset=a),s.setZIndexOffset&&s.setZIndexOffset(1e6),s.clusterHide&&s.clusterHide(),d.addLayer(s),s._setPos&&s._setPos(p);for(l._forceLayout(),l._animationStart(),n=e.length-1;n>=0;n--)h=_.layerPointToLatLng(t[n]),s=e[n],s._preSpiderfyLatlng=s._latlng,s.setLatLng(h),s.clusterShow&&s.clusterShow(),f&&(r=s._spiderLeg,o=r._path,o.style.strokeDashoffset=0,r.setStyle({opacity:g}));this.setOpacity(.3),l._ignoreMove=!1,setTimeout(function(){l._animationEnd(),l.fire("spiderfied",{cluster:u,markers:e})},200)},_animationUnspiderfy:function(e){var t,i,n,s,r,o,a=this,h=this._group,u=h._map,l=h._featureGroup,_=e?u._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):u.latLngToLayerPoint(this._latlng),d=this.getAllChildMarkers(),c=L.Path.SVG;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),i=d.length-1;i>=0;i--)t=d[i],t._preSpiderfyLatlng&&(t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng,o=!0,t._setPos&&(t._setPos(_),o=!1),t.clusterHide&&(t.clusterHide(),o=!1),o&&l.removeLayer(t),c&&(n=t._spiderLeg,s=n._path,r=s.getTotalLength()+.1,s.style.strokeDashoffset=r,n.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var e=0;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&e++;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&(t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),e>1&&l.removeLayer(t),u.removeLayer(t._spiderLeg),delete t._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:a,markers:d})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(e))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){this._spiderfied&&this._spiderfied.unspiderfy(e)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(e){e._spiderLeg&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),this._map.removeLayer(e._spiderLeg),delete e._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(e){return e?e instanceof L.MarkerClusterGroup?e=e._topClusterLevel.getAllChildMarkers():e instanceof L.LayerGroup?e=e._layers:e instanceof L.MarkerCluster?e=e.getAllChildMarkers():e instanceof L.Marker&&(e=[e]):e=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(e),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(e),this},_flagParentsIconsNeedUpdate:function(e){var t,i;for(t in e)for(i=e[t].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()})},_refreshSingleMarkerModeMarkers:function(e){var t,i;for(t in e)i=e[t],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(e,t){var i=this.options.icon;return L.setOptions(i,e),this.setIcon(i),t&&this.__parent&&this.__parent._group.refreshClusters(this),this}})}(window,document);
L.Control.Fullscreen=L.Control.extend({options:{position:"topleft",title:{"false":"View Fullscreen","true":"Exit Fullscreen"}},onAdd:function(map){var container=L.DomUtil.create("div","leaflet-control-fullscreen leaflet-bar leaflet-control");this.link=L.DomUtil.create("a","leaflet-control-fullscreen-button leaflet-bar-part",container);this.link.href="#";this._map=map;this._map.on("fullscreenchange",this._toggleTitle,this);this._toggleTitle();L.DomEvent.on(this.link,"click",this._click,this);return container},_click:function(e){L.DomEvent.stopPropagation(e);L.DomEvent.preventDefault(e);this._map.toggleFullscreen(this.options)},_toggleTitle:function(){this.link.title=this.options.title[this._map.isFullscreen()]}});L.Map.include({isFullscreen:function(){return this._isFullscreen||false},toggleFullscreen:function(options){var container=this.getContainer();if(this.isFullscreen()){if(options&&options.pseudoFullscreen){this._disablePseudoFullscreen(container)}else if(document.exitFullscreen){document.exitFullscreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else{this._disablePseudoFullscreen(container)}}else{if(options&&options.pseudoFullscreen){this._enablePseudoFullscreen(container)}else if(container.requestFullscreen){container.requestFullscreen()}else if(container.mozRequestFullScreen){container.mozRequestFullScreen()}else if(container.webkitRequestFullscreen){container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}else if(container.msRequestFullscreen){container.msRequestFullscreen()}else{this._enablePseudoFullscreen(container)}}},_enablePseudoFullscreen:function(container){L.DomUtil.addClass(container,"leaflet-pseudo-fullscreen");this._setFullscreen(true);this.invalidateSize();this.fire("fullscreenchange")},_disablePseudoFullscreen:function(container){L.DomUtil.removeClass(container,"leaflet-pseudo-fullscreen");this._setFullscreen(false);this.invalidateSize();this.fire("fullscreenchange")},_setFullscreen:function(fullscreen){this._isFullscreen=fullscreen;var container=this.getContainer();if(fullscreen){L.DomUtil.addClass(container,"leaflet-fullscreen-on")}else{L.DomUtil.removeClass(container,"leaflet-fullscreen-on")}},_onFullscreenChange:function(e){var fullscreenElement=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;if(fullscreenElement===this.getContainer()&&!this._isFullscreen){this._setFullscreen(true);this.fire("fullscreenchange")}else if(fullscreenElement!==this.getContainer()&&this._isFullscreen){this._setFullscreen(false);this.fire("fullscreenchange")}}});L.Map.mergeOptions({fullscreenControl:false});L.Map.addInitHook(function(){if(this.options.fullscreenControl){this.fullscreenControl=new L.Control.Fullscreen(this.options.fullscreenControl);this.addControl(this.fullscreenControl)}var fullscreenchange;if("onfullscreenchange"in document){fullscreenchange="fullscreenchange"}else if("onmozfullscreenchange"in document){fullscreenchange="mozfullscreenchange"}else if("onwebkitfullscreenchange"in document){fullscreenchange="webkitfullscreenchange"}else if("onmsfullscreenchange"in document){fullscreenchange="MSFullscreenChange"}if(fullscreenchange){var onFullscreenChange=L.bind(this._onFullscreenChange,this);this.whenReady(function(){L.DomEvent.on(document,fullscreenchange,onFullscreenChange)});this.on("unload",function(){L.DomEvent.off(document,fullscreenchange,onFullscreenChange)})}});L.control.fullscreen=function(options){return new L.Control.Fullscreen(options)};
/*
* L.VisualClick
* Description: A plugin that adds visual feedback when user clicks/taps the map. Useful for when you have a delay on the clickEvents for async fetching of data, or implmentation of Leaflet.singleclick
* Example: L.visualClick({map: leafletMap}); //Just works
* Author: Dag Jomar Mersland (twitter: @dagjomar)
*/


L.Map.VisualClick = L.Handler.extend({

    _makeVisualIcon: function(){

        var touchMode = this._map.options.visualClickMode === 'touch' ? true : false;

        return L.divIcon({
            className: "leaflet-visualclick-icon" + (touchMode ? '-touch' : ''),    // See L.VisualClick.css
            iconSize: [0, 0],
            clickable: false
        });
    },

    _visualIcon: null,

    _onClick: function(e) {

        var map = this._map;

        var latlng = e.latlng;
        var marker = L.marker(latlng, {
            pane: this._map.options.visualClickPane,
            icon: this._visualIcon,
            interactive: false
        }).addTo(map);

        window.setTimeout(function(){
            if(map){
                map.removeLayer(marker);
            }
        }.bind(this), map.options.visualClick.removeTimeout || 450);    // Should somewhat match the css animation to prevent loops

        return true;
    },

    addHooks: function () {
        if(this._visualIcon === null){
            this._visualIcon = this._makeVisualIcon();
        }

        if (this._map.options.visualClickPane === 'ie10-visual-click-pane') {
            this._map.createPane('ie10-visual-click-pane');
        }

        this._map.on(this._map.options.visualClickEvents, this._onClick, this);
    },

    removeHooks: function () {
        this._map.off(this._map.options.visualClickEvents, this._onClick, this);
    },

});


L.Map.mergeOptions({
    visualClick: L.Browser.any3d ? true : false, //Can be true, desktop, touch, false. Not straight forward to use L.Browser.touch flag because true on IE10
    visualClickMode: L.Browser.touch && L.Browser.mobile ? 'touch' : 'desktop', //Not straight forward to use only L.Browser.touch flag because true on IE10 - so this is slightly better
    visualClickEvents: 'click contextmenu', //Standard leaflety way of defining which events to hook on to
    visualClickPane: (L.Browser.ie && document.documentMode === 10) ?
        'ie10-visual-click-pane' :
        'shadowPane'	// Map pane where the pulse markers will be showh
});

L.Map.addInitHook('addHandler', 'visualClick', L.Map.VisualClick);


