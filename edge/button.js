(function(){function k(){d(l,a);delete h[m]}function e(i){if(!b){return}b.parentNode.removeChild(b);d(g,e);if(i&&i.type!=g){history.back()}n=false}function u(B,A){var D=B.dataset,z=B.innerHTML,y=B.getAttribute("href"),C,E;D.button=A+1;D.label=z;D.origin=j(location.href);D.referer=location.href;E=y+"&"+v(D);C=q("width:0px;height:24px;");C.src=E;B.innerHTML="";B.parentNode.replaceChild(C,B);return{element:B,iframe:C}}function a(z){if(typeof z.data!="string"){return}var y=z.data.split("|");if(y[0]!="mymail"){return}switch(y[1]){case"d":var i=r[y[4]-1].iframe;i.style.width=y[2]+"px";i.style.height=y[3]+"px";break;case"s":if(n){break}var i=q("left:0px;top:0px;width:100%;height:100%;z-index:9999;position:fixed !important;",function(){r[y[4]-1].iframe.contentWindow.postMessage("l",y[2]);x(g,e);history.pushState(c,c,location.href)});i.src=y[2];w.getElementsByTagName("body")[0].appendChild(i);b=i;n=true;break;case"c":e();break}}function q(i,z){var y=w.createElement("iframe");y[t]("frameBorder","0");y[t]("allowtransparency","true");y[t]("scrolling","no");y.style.cssText=s+i;y.onload=function(){y.style.visibility="visible";z&&z()};return y}function j(i){var y=i.split("/");return y[0]+"//"+y[2]}function v(z,i,B){var y=[],A;Object.keys(z).forEach(function(F){var C=F;i&&!isNaN(C)?C=i+C:"";var C=encodeURIComponent(C.replace(/[!'()*]/g,escape));B?C=B+"["+C+"]":"";if(typeof z[F]==="object"){var E=build_query(z[F],c,C);y.push(E)}else{var D=encodeURIComponent(z[F].replace(/[!'()*]/g,escape));if(D=="true"){D="1"}if(D=="false"){D="0"}(A=F.match(/^user([A-Z].*)/))?y.push("userdata["+A[1].toLowerCase()+"]="+D):y.push(C+"="+D)}});return y.join("&")}function x(y,z,i){(h.addEventListener)?h.addEventListener(y,z,!!i):h.attachEvent("on"+y,z)}function d(i,y){(h.removeEventListener)?h.removeEventListener(i,y):h.detachEvent("on"+i,y)}var h=window,w=document,m="MyMailSubscribe",c=null,o=".mymail-subscribe-button",f=w.querySelectorAll(o),b,t="setAttribute",l="message",g="popstate",s="border:0;overflow:hidden;visibility:hidden;display:inline-block;margin:0px !important;padding:0px !important;background:transparent;",n=false,r=[],p;if(h[m].loaded){return}for(p=f.length-1;p>=0;p--){r[p]=u(f[p],p)}x(l,a);h[m]={loaded:true,destroy:k,close:e}})();
