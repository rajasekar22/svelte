var An=Array.isArray,Rn=Array.from,Sn=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,gn=Object.prototype,xn=Array.prototype,Ut=Object.getPrototypeOf;const Dn=()=>{};function kn(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,_t=4,M=8,tt=16,y=32,G=64,x=128,B=256,p=512,S=1024,j=2048,I=4096,Y=8192,Vt=16384,ct=32768,On=65536,Kt=1<<18,vt=1<<19,ot=Symbol("$state");function pt(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!$t(t,this.v)}function Gt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function zt(){throw new Error("effect_update_depth_exceeded")}function In(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function Pn(){throw new Error("state_descriptors_fixed")}function bn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Cn(t){return Xt(nt(t))}function Fn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Xt(t){return a!==null&&a.f&T&&(d===null?pn([t]):d.push(t)),t}function tn(t,n){return a!==null&&st()&&a.f&(T|tt)&&(d===null||!d.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=Ft(),dt(t,S),st()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(E(o,S),W(o)):R===null?hn([t]):R.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,l=0;l<s;l++){var u=r[l],i=u.f;i&S||!e&&u===o||(E(u,n),i&(p|x)&&(i&T?dt(u,j):W(u)))}}const qn=1,Ln=2,Mn=4,jn=8,Yn=16,Hn=1,Un=2,rn="[",en="[!",sn="]",yt={},Bn=Symbol();function Et(t){console.warn("hydration_mismatch")}let N=!1;function Vn(t){N=t}let m;function F(t){if(t===null)throw Et(),yt;return m=t}function Kn(){return F(P(m))}function $n(t){if(N){if(P(m)!==null)throw Et(),yt;m=t}}function Gn(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=P(n);n.remove(),n=e}}var at,wt,Tt;function Zn(){if(at===void 0){at=window;var t=Element.prototype,n=Node.prototype;wt=ut(n,"firstChild").get,Tt=ut(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return wt.call(t)}function P(t){return Tt.call(t)}function Wn(t,n){if(!N)return J(t);var r=J(m);if(r===null)r=m.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),F(e),e}return F(r),r}function zn(t,n){if(!N){var r=J(t);return r instanceof Comment&&r.data===""?P(r):r}return m}function Jn(t,n=1,r=!1){let e=N?m:t;for(;n--;)e=P(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var l=z();return e==null||e.before(l),F(l),l}return F(e),e}function Qn(t){t.textContent=""}function ln(t){var n=T|S;o===null?n|=x:o.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(a!==null&&a.f&T){var e=a;(e.children??(e.children=[])).push(r)}return r}function Xn(t){const n=ln(t);return n.equals=ht,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?rt(e):C(e)}}}function At(t){var n,r=o;$(t.parent);try{mt(t),n=qt(t)}finally{$(r)}return n}function Rt(t){var n=At(t),r=(D||t.f&x)&&t.deps!==null?j:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ft())}function rt(t){mt(t),L(t,0),E(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function St(t){o===null&&a===null&&Wt(),a!==null&&a.f&x&&Zt(),et&&Gt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&G)!==0,l=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{it(!0),Z(u),u.f|=Vt}catch(c){throw C(u),c}finally{it(i)}}else n!==null&&W(u);var w=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&vt)===0;if(!w&&!s&&e&&(l!==null&&un(u,l),a!==null&&a.f&T)){var A=a;(A.children??(A.children=[])).push(u)}return u}function tr(t){const n=b(M,null,!1);return E(n,p),n.teardown=t,n}function nr(t){St();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:a})}else{var e=gt(t);return e}}function rr(t){return St(),on(t)}function er(t){const n=b(G,t,!0);return()=>{C(n)}}function gt(t){return b(_t,t,!1)}function on(t){return b(M,t,!0)}function sr(t){return an(t)}function an(t,n=0){return b(M|tt|n,t,!0)}function lr(t,n=!0){return b(M|y,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=et,e=a;ft(!0),K(null);try{n.call(null)}finally{ft(r),K(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:P(e);e.remove(),e=l}r=!0}Dt(t),kt(t,n&&!r),L(t,0),E(t,Y);var u=t.transitions;if(u!==null)for(const w of u)w.stop();xt(t);var i=t.parent;i!==null&&i.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ur(t,n){var r=[];It(t,r,!0),_n(r,()=>{C(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&I)){if(t.f^=I,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ct)!==0||(e.f&y)!==0;It(e,n,l?r:!1),e=s}}}function or(t){Nt(t,!0)}function Nt(t,n){if(t.f&I){t.f^=I,H(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&y)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,Q=[];function Pt(){V=!1;const t=Q.slice();Q=[],Bt(t)}function ar(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function cn(){V&&Pt()}const bt=0,vn=1;let U=bt,q=!1,k=!1,et=!1;function it(t){k=t}function ft(t){et=t}let g=[],O=0;let a=null;function K(t){a=t}let o=null;function $(t){o=t}let d=null;function pn(t){d=t}let _=null,h=0,R=null;function hn(t){R=t}let Ct=0,D=!1,f=null;function Ft(){return++Ct}function st(){return f!==null&&f.l===null}function H(t){var u,i;var n=t.f;if(n&S)return!0;if(n&j){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Rt(l),e&&o!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||E(t,p)}return!1}function dn(t,n,r){throw t}function qt(t){var lt;var n=_,r=h,e=R,s=a,l=D,u=d,i=f,w=t.f;_=null,h=0,R=null,a=w&(y|G)?null:t,D=!k&&(w&x)!==0,d=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,R=e,a=s,D=l,d=u,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(E(n,j),n.f&(x|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Z(t){var n=t.f;if(!(n&Y)){E(t,p);var r=o;o=t;try{Dt(t),n&tt?fn(t):kt(t),xt(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=Ct}catch(s){dn(s)}finally{o=r}}}function Lt(){O>1e3&&(O=0,zt()),O++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),En(l)}}finally{k=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|I))&&H(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function wn(){if(q=!1,O>1001)return;const t=g;g=[],Mt(t),q||(O=0)}function W(t){U===bt&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|y)){if(!(r&p))return;n.f^=p}}g.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,u=l&&(s&p)!==0;if(!u&&!(s&I))if(s&M){l?r.f^=p:H(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Yt(t){var n=U,r=g;try{Lt();const s=[];U=vn,g=s,q=!1,Mt(r);var e=t==null?void 0:t();return cn(),(g.length>0||s.length>0)&&Yt(),O=0,e}finally{U=n,g=r}}async function ir(){await Promise.resolve(),Yt()}function Tn(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&Y){var e=At(t);return rt(t),e}if(a!==null){d!==null&&d.includes(t)&&Jt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),R!==null&&o!==null&&o.f&p&&!(o.f&y)&&R.includes(t)&&(E(o,S),W(o))}else if(r&&t.deps===null){var l=t,u=l.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(l))&&(u.deriveds??(u.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Rt(l)),t.v}function fr(t){const n=a;try{return a=null,t()}finally{a=n}}const mn=~(S|j|p);function E(t,n){t.f=t.f&mn|n}function _r(t,n=1){var r=+Tn(t);return tn(t,r+n),r}function cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function vr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=o,e=a;n.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];$(l.effect),K(l.reaction),gt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ot in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ot in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ht(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{xn as $,pr as A,Sn as B,K as C,$ as D,ct as E,An as F,a as G,o as H,Zn as I,J,rn as K,P as L,yt as M,Vn as N,F as O,Kn as P,sn as Q,Et as R,In as S,Qn as T,Rn as U,er as V,z as W,Hn as X,Un as Y,ot as Z,gn as _,Jn as a,nt as a0,Pn as a1,Bn as a2,ut as a3,bn as a4,Ut as a5,en as a6,Gn as a7,or as a8,ur as a9,gt as aa,on as ab,ar as ac,Nn as ad,On as ae,Mn as af,ht as ag,y as ah,G as ai,qn as aj,Ln as ak,jn as al,Xn as am,Y as an,Yn as ao,Yt as ap,ir as aq,$t as ar,fr as b,Wn as c,ln as d,tr as e,zn as f,Tn as g,tn as h,an as i,lr as j,C as k,N as l,Fn as m,Dn as n,m as o,cr as p,vr as q,$n as r,Cn as s,sr as t,_r as u,rr as v,nr as w,f as x,Bt as y,kn as z};
