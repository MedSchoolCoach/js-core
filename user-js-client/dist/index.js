(()=>{"use strict";var e={};function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"value",10),r(this,"props",{x:0,y:0})}var n,a;return n=e,(a=[{key:"getValue",value:function(){return this.value}},{key:"setValue",value:function(e){this.value=e}},{key:"setProps",value:function(e){this.props=e}},{key:"getProps",value:function(){return this.props}}])&&t(n.prototype,a),e}(),a=new n;a.setValue(1e3),a.getValue();var o=new n;o.setProps({x:1e3,y:1e3}),o.getProps()})();