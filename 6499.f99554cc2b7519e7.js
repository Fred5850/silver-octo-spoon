"use strict";(self.webpackChunksilver_octo_spoon=self.webpackChunksilver_octo_spoon||[]).push([[6499],{6499:(B,l,e)=>{e.r(l),e.d(l,{createSwipeBackGesture:()=>m});var _=e(1656),u=e(2782),g=e(2104);const m=(n,v,M,p,P)=>{const i=n.ownerDocument.defaultView;let o=(0,u.i)(n);const d=t=>o?-t.deltaX:t.deltaX;return(0,g.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(o=(0,u.i)(n),(t=>{const{startX:s}=t;return o?s>=i.innerWidth-50:s<=50})(t)&&v()),onStart:M,onMove:t=>{const s=d(t)/i.innerWidth;p(s)},onEnd:t=>{const r=d(t),s=i.innerWidth,c=r/s,a=(t=>o?-t.velocityX:t.velocityX)(t),h=a>=0&&(a>.2||r>s/2),E=(h?1-c:c)*s;let D=0;if(E>5){const y=E/Math.abs(a);D=Math.min(y,540)}P(h,c<=0?.01:(0,_.m)(0,c,.9999),D)}})}}}]);