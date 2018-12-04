/**
 * simplecounter - Simple jquery countdown plugin
 * @version v1.0.0
 * @link https://github.com/tomkiernan120/simplecounter#readme
 * @license ISC
 */
!function(c){c.n.e({t:function(e){var n=new Date,t={r:c("#years"),o:c("#months"),s:c("#weeks"),a:c("#days"),f:c("#hours"),i:c("#minutes"),u:c("#seconds"),v:n.getFullYear()+1,c:6,h:23,y:0,d:0,m:0,w:function(){}},v=e=c.e(t,e);return this.D(function(){setInterval(function(){var e=new Date,n=new Date(v.v,v.c-1,v.h,v.y,v.d,v.m),t=function(e){var n=e/1e3,t=0,r=0,o=0,s=0,a=0,f=0,i=0;if(31536e3<=n){var u=n/31536e3;n%=31536e3;for(var v=1;v<=u;v++)i++}if(2628e3<=n){var c=n/2628e3;for(n%=2628e3,v=1;v<=c;v++)f++}if(604800<=n){var h=n/604800;for(n%=604800,v=0;v<=h;v++)a++}if(86400<=n){var y=n/86400;for(n%=86400,v=1;v<=y;v++)s++}if(3600<=n){var d=n/3600;for(n%=3600,v=1;v<=d;v++)o++}if(60<=n){var m=n/60;for(n%=60,v=1;v<=m;v++)r++}if(0<n)for(v=1;v<=n;v++)t++;return dates={k:i,l:f,s:a,a:s,f:o,i:r,u:t}}(Math.floor(n.getTime()-e.getTime())),r=v.r,o=v.o,s=v.s,a=v.a,f=v.f,i=v.i,u=v.u;c(r,o,s,a,f,i,u).M(0),c(r).M(t.k),c(o).M(t.l),c(s).M(t.s),c(a).M(t.a),c(f).M(t.f),c(i).M(t.i),c(u).M(t.u)},1e3),c.g(v.w)&&v.w.call(this)})}})}(jQuery);