"use strict";(self.webpackChunkquilt_navigator=self.webpackChunkquilt_navigator||[]).push([[8937],{26663:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(45987),l=n(67294),i=(n(59864),n(86010));function o(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var c=n(14670),s=n(93871),u=l.forwardRef((function(e,t){var n=e.children,c=e.classes,u=e.className,d=e.exclusive,m=void 0!==d&&d,p=e.onChange,f=e.orientation,h=void 0===f?"horizontal":f,v=e.size,g=void 0===v?"medium":v,b=e.value,y=(0,r.Z)(e,["children","classes","className","exclusive","onChange","orientation","size","value"]),k=function(e,t){if(p){var n,a=b&&b.indexOf(t);b&&a>=0?(n=b.slice()).splice(a,1):n=b?b.concat(t):[t],p(e,n)}},E=function(e,t){p&&p(e,b===t?null:t)};return l.createElement("div",(0,a.Z)({role:"group",className:(0,i.Z)(c.root,u,"vertical"===h&&c.vertical),ref:t},y),l.Children.map(n,(function(e){return l.isValidElement(e)?l.cloneElement(e,{className:(0,i.Z)(c.grouped,c["grouped".concat((0,s.Z)(h))],e.props.className),onChange:m?E:k,selected:void 0===e.props.selected?o(e.props.value,b):e.props.selected,size:e.props.size||g}):null})))}));const d=(0,c.Z)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),{name:"MuiToggleButtonGroup"})(u)},66518:e=>{e.exports=function(e){var t=void 0;t="string"==typeof e?[e]:e.raw;for(var n="",a=0;a<t.length;a++)n+=t[a].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),a<(arguments.length<=1?0:arguments.length-1)&&(n+=arguments.length<=a+1?void 0:arguments[a+1]);var r=n.split("\n"),l=null;return r.forEach((function(e){var t=e.match(/^(\s+)\S+/);if(t){var n=t[1].length;l=l?Math.min(l,n):n}})),null!==l&&(n=r.map((function(e){return" "===e[0]?e.slice(l):e})).join("\n")),(n=n.trim()).replace(/\\n/g,"\n")}},29039:(e,t,n)=>{n.d(t,{Z:()=>V});var a=n(70655),r=n(26470),l=n(61920),i=n(70475),o=n(25991),c=n(84734),s=n(67294),u=n(73727),d=n(41120),m=n(282),p=n(11476),f=n(18463),h=n(87462),v=n(45987),g=n(86010),b=n(14670),y=n(22318),k=s.forwardRef((function(e,t){var n=e.action,a=e.avatar,r=e.classes,l=e.className,i=e.component,o=void 0===i?"div":i,c=e.disableTypography,u=void 0!==c&&c,d=e.subheader,m=e.subheaderTypographyProps,p=e.title,f=e.titleTypographyProps,b=(0,v.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),k=p;null==k||k.type===y.Z||u||(k=s.createElement(y.Z,(0,h.Z)({variant:a?"body2":"h5",className:r.title,component:"span",display:"block"},f),k));var E=d;return null==E||E.type===y.Z||u||(E=s.createElement(y.Z,(0,h.Z)({variant:a?"body2":"body1",className:r.subheader,color:"textSecondary",component:"span",display:"block"},m),E)),s.createElement(o,(0,h.Z)({className:(0,g.Z)(r.root,l),ref:t},b),a&&s.createElement("div",{className:r.avatar},a),s.createElement("div",{className:r.content},k,E),n&&s.createElement("div",{className:r.action},n))}));const E=(0,b.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(k);var Z=n(10529),x=n(79912),w=n(55517),R=n(22534),C=n(22966),N=n(73179),T=n(51379),D=n(43987),z=n(13950),B=n(84268),L=n(27474),I=n(69534),P=n(70397),$=n(36473),O=n(33211),S=d.Z((function(e){return{root:{display:"flex",justifyContent:"flex-end",margin:e.spacing(2,0)}}}));function q(e){var t=e.packageHandle,n=e.path,a=R.BF(t,n),r=S();return s.createElement("div",{className:r.root},a.render(),s.createElement(m.Z,{color:"primary",size:"small",variant:"contained",onClick:a.open},"Add README"))}var K=function(e){return l.Z((function(t){return e.test((0,$.Us)(t.logicalKey||t.key))}))},_=i.Z({readme:K(/^readme\.md$/i),summarize:K(/^quilt_summarize\.json$/i),images:o.Z((function(e){return!e.archived&&T.Qe.some((function(t){return(e.logicalKey||e.key).toLowerCase().endsWith(t)}))}))}),F=p.Z(f.Z)((function(e){var t,n=e.theme;return(t={position:"relative",zIndex:1})[n.breakpoints.down("xs")]={borderRadius:0},t[n.breakpoints.up("sm")]={marginTop:n.spacing(2)},t})),U=function(e){var t=e.children;return s.createElement(E,{title:s.createElement(y.Z,{variant:"h5"},t)})};function j(e){var t=e.handle,n=e.children,a=L.D$();return a&&t.logicalKey&&!t.key?s.createElement(B.ZP,{fetch:a,params:t.logicalKey},n):n(D.Z.Ok(t))}var M=function(e){return s.createElement(Z.Z,{mx:"auto"},e)},H={context:N.IT.LISTING};function W(e){var t,n=e.handle,a=e.name,l=e.mkUrl;return s.createElement(F,null,s.createElement(U,null,s.createElement(P.Z,{to:l(n)},a||(0,r.basename)(n.logicalKey||n.key))),s.createElement(x.Z,null,(t=N.jf({renderContents:M}),s.createElement(j,{handle:n},D.Z.case({Err:function(e,t){var a=t.fetch;return N.Mh.Unexpected({handle:n,retry:a,originalError:e})},Ok:function(e){return N.zD(e,t,H)},_:t})))))}var A=d.Z((function(e){return{container:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},link:{flexBasis:"19%",marginBottom:e.spacing(2)},img:{display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"100%"},filler:{flexBasis:"19%","&::after":{content:'""'}}}}));function G(e){var t=e.images,n=e.mkUrl,l=A(),i=s.useRef(null),o=s.useCallback((function(e){e&&i.current&&i.current.scrollIntoView()}),[i]),d=C.D$(t,{perPage:25,onChange:o});return s.createElement(F,null,s.createElement(U,null,"Images (",d.from,"–",d.to," of ",t.length,")"),s.createElement("div",{ref:i}),s.createElement(x.Z,{className:l.container},d.paginated.map((function(e){return s.createElement(u.Link,{key:e.logicalKey||e.key,to:n(e),className:l.link},s.createElement(j,{handle:e},D.Z.case({_:function(){return null},Ok:function(t){return s.createElement(T.ZP,{handle:t,className:l.img,alt:(0,r.basename)(e.logicalKey||e.key),title:(0,r.basename)(e.logicalKey||e.key)})}})))})),c.Z((function(e){return s.createElement("div",{className:l.filler,key:"__filler".concat(e)})}),(5-d.paginated.length%5)%5)),d.pages>1&&s.createElement(Z.Z,null,s.createElement(w.Z,null),s.createElement(Z.Z,{display:"flex",justifyContent:"flex-end",px:2,py:.25},s.createElement(C.ZX,(0,a.pi)({},d)))))}function V(e){var t,n,l=e.files,i=e.mkUrl,o=e.packageHandle,c=e.path,u=I.D$().urls,d=z.D$().preferences,m=s.useCallback((function(e){return i?i(e):u.bucketFile(e.bucket,e.key,{version:e.version})}),[i,u]),p=_(l),f=p.readme,h=p.images,v=p.summarize;return s.createElement(s.Fragment,null,f&&s.createElement(W,{title:(0,r.basename)(f.logicalKey||f.key),handle:f,mkUrl:m}),!f&&!c&&!!o&&!!(null===(n=null===(t=null==d?void 0:d.ui)||void 0===t?void 0:t.actions)||void 0===n?void 0:n.revisePackage)&&s.createElement(q,{packageHandle:o,path:c}),!!h.length&&s.createElement(G,(0,a.pi)({},{images:h,mkUrl:m})),v&&s.createElement(O.As,{handle:v,mkUrl:m,packageHandle:o}))}},98657:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a,r,l=n(70655),i=n(26470),o=n(66518),c=n.n(o),s=n(82539),u=n(30601),d=n(67294),m=n(16550),p=n(41120),f=n(10529),h=n(95477),v=n(78869),g=n(85693),b=n(43987),y=n(32248),k=n(84268),E=n(69534),Z=n(82268),x=n(36473),w=n(15592),R=n(37600),C=n(25170),N=n(29039),T=n(73206),D=n(42059),z=n(21497),B=n(74708),L=p.Z((function(e){return{crumbs:(0,l.pi)((0,l.pi)({},e.typography.body1),{maxWidth:"100%",overflowWrap:"break-word"})}}));function I(e){var t=e.match.params,n=t.bucket,o=t.path,p=void 0===o?"":o,I=e.location,P=z.D(),$=y.D$().noDownload,O=L(),S=E.D$().urls,q=(0,m.k6)(),K=g.S3.use(),_=(0,Z.Z)(I.search).prefix,F=x.Jx(p),U=F?(0,i.basename)(F):n,j=d.useMemo((function(){return[{label:"Python",hl:"python",contents:c()(a||(a=(0,l.cy)(['\n          import quilt3 as q3\n          b = q3.Bucket("s3://','")\n          # list files\n          b.ls("','")\n          # download\n          b.fetch("','", "./','")\n        '],['\n          import quilt3 as q3\n          b = q3.Bucket("s3://','")\n          # list files\n          b.ls("','")\n          # download\n          b.fetch("','", "./','")\n        '])),n,F,F,U)},{label:"CLI",hl:"bash",contents:c()(r||(r=(0,l.cy)(['\n          # list files\n          aws s3 ls "s3://',"/",'"\n          # download\n          aws s3 cp --recursive "s3://',"/",'" "./','"\n        '],['\n          # list files\n          aws s3 ls "s3://',"/",'"\n          # download\n          aws s3 cp --recursive "s3://',"/",'" "./','"\n        '])),n,F,n,F,U)}]}),[n,F,U]),M=d.useState(null),H=M[0],W=M[1];d.useLayoutEffect((function(){W(null)}),[F,_]);var A=(0,k.et)(D.rx,{s3:K,bucket:n,path:F,prefix:_,prev:H}),G=d.useCallback((function(){b.Z.case({Ok:function(e){e.continuationToken&&W(e)},_:function(){}},A.result)}),[A.result,W]),V=d.useCallback((function(e){q.push(S.bucketDir(n,F,e))}),[q,S,n,F]);return d.createElement(f.Z,{pt:2,pb:4},d.createElement(f.Z,{display:"flex",alignItems:"flex-start",mb:2},d.createElement("div",{className:O.crumbs,onCopy:v.Yn},(0,v.sY)((0,B.Z)({bucket:n,path:F,urls:S,scope:P.scope}))),d.createElement(f.Z,{flexGrow:1}),!$&&d.createElement(R.dN,{suffix:"dir/".concat(n,"/").concat(F),label:"Download directory",newTab:!0})),!P.hideCode&&d.createElement(w.Z,{gutterBottom:!0},j),A.case({Err:(0,T.Sj)(),Init:function(){return null},_:function(e){var t=b.Z.getPrevResult(e);if(!t)return d.createElement(h.Z,null);var n=function(e,t){var n=e.urls,a=e.scope,r=t.dirs.map((function(e){return{type:"dir",name:x.ge(x.ro(t.path,e)),to:n.bucketDir(t.bucket,e)}})),o=t.files.map((function(e){var a=e.key,r=e.size,l=e.modified,o=e.archived;return{type:"file",name:(0,i.basename)(a),to:n.bucketFile(t.bucket,a),size:r,modified:l,archived:o}})),c=(0,l.ev)((0,l.ev)([],r,!0),o,!0);return""===t.path||t.path===a||t.prefix||c.unshift({type:"dir",name:"..",to:n.bucketDir(t.bucket,x.up(t.path))}),s.Z(u.Z("name"),c)}({urls:S,scope:P.scope},t),a=!b.Z.Ok.is(e);return d.createElement(d.Fragment,null,d.createElement(C.NB,{items:n,locked:a,loadMore:G,truncated:t.truncated,prefixFilter:t.prefix,toolbarContents:d.createElement(C.I4,{key:"".concat(t.bucket,"/").concat(t.path),prefix:t.prefix,setPrefix:V})}),d.createElement(N.Z,{files:t.files,path:F}))}}))}},74708:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(70655),r=n(26470),l=n(36962),i=n(67294),o=n(78869),c=n(36473);const s=function(e){var t=e.bucket,n=e.path,s=e.urls,u=e.scope,d=e.excludeBase,m=void 0!==d&&d,p=u&&n.startsWith(u),f=p?n.substring(u.length):n,h={label:p?(0,r.basename)(u):"ROOT",path:""},v=m?c.up(f):f,g=(0,a.ev)([h],c.tO(v),!0).map((function(e){var n=e.label,a=e.path;return o.$2.Segment({label:n,to:a===f?void 0:s.bucketDir(t,"".concat(p?u:"").concat(a))})})),b=l.Z(o.$2.Sep(i.createElement(i.Fragment,null," / ")),g);return m?(0,a.ev)((0,a.ev)([],b,!0),[o.$2.Sep(i.createElement(i.Fragment,null," /"))],!1):b}}}]);
//# sourceMappingURL=8937.5aa1a05961c2df571e8a.chunk.js.map