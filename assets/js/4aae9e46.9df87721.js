"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4443],{557:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=n(5893),r=n(1151);const l={title:"Stopping K3s"},a=void 0,i={id:"upgrades/killall",title:"Stopping K3s",description:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped.",source:"@site/docs/upgrades/killall.md",sourceDirName:"upgrades",slug:"/upgrades/killall",permalink:"/upgrades/killall",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/killall.md",tags:[],version:"current",lastUpdatedAt:172365169e4,frontMatter:{title:"Stopping K3s"},sidebar:"mySidebar",previous:{title:"Upgrades",permalink:"/upgrades/"},next:{title:"Manual Upgrades",permalink:"/upgrades/manual"}},c={},o=[{value:"K3s Service",id:"k3s-service",level:2},{value:"Killall Script",id:"killall-script",level:2}];function d(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{TabItem:n,Tabs:l}=s;return n||h("TabItem",!0),l||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped."}),"\n",(0,t.jsx)(s.h2,{id:"k3s-service",children:"K3s Service"}),"\n",(0,t.jsx)(s.p,{children:"Stopping and restarting K3s is supported by the installation script for systemd and OpenRC."}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(n,{value:"systemd",children:[(0,t.jsx)(s.p,{children:"To stop servers:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo systemctl stop k3s\n"})}),(0,t.jsx)(s.p,{children:"To restart servers:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo systemctl start k3s\n"})}),(0,t.jsx)(s.p,{children:"To stop agents:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo systemctl stop k3s-agent\n"})}),(0,t.jsx)(s.p,{children:"To restart agents:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo systemctl start k3s-agent\n"})})]}),(0,t.jsxs)(n,{value:"OpenRC",children:[(0,t.jsx)(s.p,{children:"To stop servers:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo rc-service k3s stop\n"})}),(0,t.jsx)(s.p,{children:"To restart servers:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo rc-service k3s restart\n"})}),(0,t.jsx)(s.p,{children:"To stop agents:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo rc-service k3s-agent stop\n"})}),(0,t.jsx)(s.p,{children:"To restart agents:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"sudo rc-service k3s-agent restart\n"})})]})]}),"\n",(0,t.jsx)(s.h2,{id:"killall-script",children:"Killall Script"}),"\n",(0,t.jsxs)(s.p,{children:["To stop all of the K3s containers and reset the containerd state, the ",(0,t.jsx)(s.code,{children:"k3s-killall.sh"})," script can be used."]}),"\n",(0,t.jsx)(s.p,{children:"The killall script cleans up containers, K3s directories, and networking components while also removing the iptables chain with all the associated rules. The cluster data will not be deleted."}),"\n",(0,t.jsx)(s.p,{children:"To run the killall script from a server node, run:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"/usr/local/bin/k3s-killall.sh\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var t=n(7294);const r={},l=t.createContext(r);function a(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);