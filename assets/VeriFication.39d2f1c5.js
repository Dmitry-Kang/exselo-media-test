import{m as Ae,r as I,n as oe,p as D,j as b,q as Fe,s as W,v as Be,x as Ee,y as re,z as $e,A as Me,B as Te,C as Y,D as Ie,E as Oe,l as x,F as X,G as me,H as Pe,I as J,T as De,J as ze,K as Ne,k as ue,L as he,M as je,N as Ke,u as Le,a as Ze,d as Ue,O as Qe,o as He,e as Ye,f as Je,t as We,g as ie,h as ee,w as se,Q as Ge}from"./index.1cab0b9d.js";import{a as Xe}from"./axios.37d53be1.js";let de,te=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const et=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const a=new Uint8Array(t);return e.getRandomValues(a),a}}return t=>{const a=[];for(let u=t;u>0;u--)a.push(Math.floor(Math.random()*256));return a}})(),pe=4096;function ce(){(de===void 0||te+16>pe)&&(te=0,de=et(pe));const e=Array.prototype.slice.call(de,te,te+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function tt(e){return e==null?null:e}function be(e,t){return e==null?t===!0?`f_${ce()}`:null:e}function nt({getValue:e,required:t=!0}={}){if(Ae.value===!0){const a=e!==void 0?I(tt(e())):I(null);return t===!0&&a.value===null&&oe(()=>{a.value=`f_${ce()}`}),e!==void 0&&D(e,u=>{a.value=be(u,t)}),a}return e!==void 0?b(()=>be(e(),t)):I(`f_${ce()}`)}const ye=/^on[A-Z]/;function lt(){const{attrs:e,vnode:t}=W(),a={listeners:I({}),attributes:I({})};function u(){const d={},f={};for(const c in e)c!=="class"&&c!=="style"&&ye.test(c)===!1&&(d[c]=e[c]);for(const c in t.props)ye.test(c)===!0&&(f[c]=t.props[c]);a.attributes.value=d,a.listeners.value=f}return Fe(u),u(),a}const qe={dark:{type:Boolean,default:null}};function _e(e,t){return b(()=>e.dark===null?t.dark.isActive:e.dark)}function at({validate:e,resetValidation:t,requiresQForm:a}){const u=Be(Ee,!1);if(u!==!1){const{props:d,proxy:f}=W();Object.assign(f,{validate:e,resetValidation:t}),D(()=>d.disable,c=>{c===!0?(typeof t=="function"&&t(),u.unbindComponent(f)):u.bindComponent(f)}),oe(()=>{d.disable!==!0&&u.bindComponent(f)}),re(()=>{d.disable!==!0&&u.unbindComponent(f)})}else a===!0&&console.error("Parent QForm not found on useFormChild()!")}const ke=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,xe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ce=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ne=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,le=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,fe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ke.test(e),hexaColor:e=>xe.test(e),hexOrHexaColor:e=>Ce.test(e),rgbColor:e=>ne.test(e),rgbaColor:e=>le.test(e),rgbOrRgbaColor:e=>ne.test(e)||le.test(e),hexOrRgbColor:e=>ke.test(e)||ne.test(e),hexaOrRgbaColor:e=>xe.test(e)||le.test(e),anyColor:e=>Ce.test(e)||ne.test(e)||le.test(e)},ot=[!0,!1,"ondemand"],rt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ot.includes(e)}};function ut(e,t){const{props:a,proxy:u}=W(),d=I(!1),f=I(null),c=I(!1);at({validate:N,resetValidation:z});let h=0,A;const w=b(()=>a.rules!==void 0&&a.rules!==null&&a.rules.length!==0),S=b(()=>a.disable!==!0&&w.value===!0&&t.value===!1),y=b(()=>a.error===!0||d.value===!0),Q=b(()=>typeof a.errorMessage=="string"&&a.errorMessage.length!==0?a.errorMessage:f.value);D(()=>a.modelValue,()=>{c.value=!0,S.value===!0&&a.lazyRules===!1&&O()});function $(){a.lazyRules!=="ondemand"&&S.value===!0&&c.value===!0&&O()}D(()=>a.reactiveRules,K=>{K===!0?A===void 0&&(A=D(()=>a.rules,$,{immediate:!0,deep:!0})):A!==void 0&&(A(),A=void 0)},{immediate:!0}),D(()=>a.lazyRules,$),D(e,K=>{K===!0?c.value=!0:S.value===!0&&a.lazyRules!=="ondemand"&&O()});function z(){h++,t.value=!1,c.value=!1,d.value=!1,f.value=null,O.cancel()}function N(K=a.modelValue){if(a.disable===!0||w.value===!1)return!0;const F=++h,H=t.value!==!0?()=>{c.value=!0}:()=>{},L=(q,M)=>{q===!0&&H(),d.value=q,f.value=M||null,t.value=!1},j=[];for(let q=0;q<a.rules.length;q++){const M=a.rules[q];let E;if(typeof M=="function"?E=M(K,fe):typeof M=="string"&&fe[M]!==void 0&&(E=fe[M](K)),E===!1||typeof E=="string")return L(!0,E),!1;E!==!0&&E!==void 0&&j.push(E)}return j.length===0?(L(!1),!0):(t.value=!0,Promise.all(j).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return F===h&&L(!1),!0;const M=q.find(E=>E===!1||typeof E=="string");return F===h&&L(M!==void 0,M),M===void 0},q=>(F===h&&(console.error(q),L(!0)),!1)))}const O=$e(N,0);return re(()=>{A!==void 0&&A(),O.cancel()}),Object.assign(u,{resetValidation:z,validate:N}),Me(u,"hasError",()=>y.value),{isDirtyModel:c,hasRules:w,hasError:y,errorMessage:Q,validate:N,resetValidation:z}}let ve=[],it=[];function Re(e){it.length===0?e():ve.push(e)}function st(e){ve=ve.filter(t=>t!==e)}function ge(e){return e!=null&&(""+e).length!==0}const dt={...qe,...rt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},ft={...dt,maxlength:[Number,String]},ct=["update:modelValue","clear","focus","blur"];function vt({requiredForAttr:e=!0,tagProp:t,changeEvent:a=!1}={}){const{props:u,proxy:d}=W(),f=_e(u,d.$q),c=nt({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:a,tag:t===!0?b(()=>u.tag):{value:"label"},isDark:f,editable:b(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:lt(),targetUid:c,rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function gt(e){const{props:t,emit:a,slots:u,attrs:d,proxy:f}=W(),{$q:c}=f;let h=null;e.hasValue===void 0&&(e.hasValue=b(()=>ge(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{a("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:l,focus:M}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,v=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(v!==void 0?" / "+v:"")}}));const{isDirtyModel:A,hasRules:w,hasError:S,errorMessage:y,resetValidation:Q}=ut(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),z=b(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),N=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=b(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(S.value===!0?" q-field--error":"")+(S.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&z.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(S.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=b(()=>t.labelSlot===!0||t.label!==void 0),H=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&S.value!==!0?` text-${t.labelColor}`:"")),L=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=b(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function q(){const i=document.activeElement;let v=e.targetRef!==void 0&&e.targetRef.value;v&&(i===null||i.id!==e.targetUid.value)&&(v.hasAttribute("tabindex")===!0||(v=v.querySelector("[tabindex]")),v&&v!==i&&v.focus({preventScroll:!0}))}function M(){Re(q)}function E(){st(q);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function o(i){h!==null&&(clearTimeout(h),h=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,a("focus",i))}function l(i,v){h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,a("blur",i)),v!==void 0&&v())})}function s(i){Te(i),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),a("update:modelValue",null),e.changeEvent===!0&&a("change",null),a("clear",t.modelValue),Y(()=>{const v=A.value;Q(),A.value=v})}function r(i){[13,32].includes(i.keyCode)&&s(i)}function p(){const i=[];return u.prepend!==void 0&&i.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},u.prepend())),i.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),S.value===!0&&t.noErrorIcon===!1&&i.push(m("error",[x(me,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(m("inner-loading-append",u.loading!==void 0?u.loading():[x(Pe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(m("inner-clearable-append",[x(me,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-label":c.lang.label.clear,onKeyup:r,onClick:s})])),u.append!==void 0&&i.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},u.append())),e.getInnerAppend!==void 0&&i.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function g(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(L.value))),F.value===!0&&i.push(x("div",{class:H.value},J(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(J(u.default))}function _(){let i,v;S.value===!0?y.value!==null?(i=[x("div",{role:"alert"},y.value)],v=`q--slot-error-${y.value}`):(i=J(u.error),v="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[x("div",t.hint)],v=`q--slot-hint-${t.hint}`):(i=J(u.hint),v="q--slot-hint"));const C=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&C===!1&&i===void 0)return;const R=x("div",{key:v,class:"q-field__messages col"},i);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?R:x(De,{name:"q-transition--field-message"},()=>R),C===!0?x("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function m(i,v){return v===null?null:x("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},v)}let k=!1;return Ie(()=>{k=!0}),Oe(()=>{k===!0&&t.autofocus===!0&&f.focus()}),t.autofocus===!0&&oe(()=>{f.focus()}),re(()=>{h!==null&&clearTimeout(h)}),Object.assign(f,{focus:M,blur:E}),function(){const v=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return x(e.tag.value,{ref:e.rootRef,class:[O.value,d.class],style:d.style,...v},[u.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},u.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},p()),z.value===!0?_():null]),u.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},u.after()):null])}}const we={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ae={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ve=Object.keys(ae);Ve.forEach(e=>{ae[e].regex=new RegExp(ae[e].pattern)});const mt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ve.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,B=String.fromCharCode(1),ht={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function pt(e,t,a,u){let d,f,c,h,A,w;const S=I(null),y=I($());function Q(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,o=>{if(o!==void 0)O(y.value,!0);else{const l=M(y.value);N(),e.modelValue!==l&&t("update:modelValue",l)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{S.value===!0&&O(y.value,!0)}),D(()=>e.unmaskedValue,()=>{S.value===!0&&O(y.value)});function $(){if(N(),S.value===!0){const o=j(M(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function z(o){if(o<d.length)return d.slice(-o);let l="",s=d;const r=s.indexOf(B);if(r!==-1){for(let p=o-s.length;p>0;p--)l+=B;s=s.slice(0,r)+l+s.slice(r)}return s}function N(){if(S.value=e.mask!==void 0&&e.mask.length!==0&&Q(),S.value===!1){h=void 0,d="",f="";return}const o=we[e.mask]===void 0?e.mask:we[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(Se,"\\$&"),r=[],p=[],g=[];let _=e.reverseFillMask===!0,m="",k="";o.replace(mt,(R,n,V,U,Z)=>{if(U!==void 0){const P=ae[U];g.push(P),k=P.negate,_===!0&&(p.push("(?:"+k+"+)?("+P.pattern+"+)?(?:"+k+"+)?("+P.pattern+"+)?"),_=!1),p.push("(?:"+k+"+)?("+P.pattern+")?")}else if(V!==void 0)m="\\"+(V==="\\"?"":V),g.push(V),r.push("([^"+m+"]+)?"+m+"?");else{const P=n!==void 0?n:Z;m=P==="\\"?"\\\\\\\\":P.replace(Se,"\\\\$&"),g.push(P),r.push("([^"+m+"]+)?"+m+"?")}});const i=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),v=p.length-1,C=p.map((R,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+R):n===v?new RegExp("^"+R+"("+(k===""?".":k)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+R));c=g,h=R=>{const n=i.exec(e.reverseFillMask===!0?R:R.slice(0,g.length+1));n!==null&&(R=n.slice(1).join(""));const V=[],U=C.length;for(let Z=0,P=R;Z<U;Z++){const G=C[Z].exec(P);if(G===null)break;P=P.slice(G.shift().length),V.push(...G)}return V.length!==0?V.join(""):R},d=g.map(R=>typeof R=="string"?R:B).join(""),f=d.split(B).join(l)}function O(o,l,s){const r=u.value,p=r.selectionEnd,g=r.value.length-p,_=M(o);l===!0&&N();const m=j(_),k=e.fillMask!==!1?E(m):m,i=y.value!==k;r.value!==k&&(r.value=k),i===!0&&(y.value=k),document.activeElement===r&&Y(()=>{if(k===f){const C=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(C,C,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const C=r.selectionEnd;let R=p-1;for(let n=A;n<=R&&n<C;n++)d[n]!==B&&R++;F.right(r,R);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const C=e.reverseFillMask===!0?p===0?k.length>m.length?1:0:Math.max(0,k.length-(k===f?0:Math.min(m.length,g)+1))+1:p;r.setSelectionRange(C,C,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const C=Math.max(0,k.length-(k===f?0:Math.min(m.length,g+1)));C===1&&p===1?r.setSelectionRange(C,C,"forward"):F.rightReverse(r,C)}else{const C=k.length-g;r.setSelectionRange(C,C,"backward")}else if(i===!0){const C=Math.max(0,d.indexOf(B),Math.min(m.length,p)-1);F.right(r,C)}else{const C=p-1;F.right(r,C)}});const v=e.unmaskedValue===!0?M(k):k;String(e.modelValue)!==v&&(e.modelValue!==null||v!=="")&&a(v,!0)}function K(o,l,s){const r=j(M(o.value));l=Math.max(0,d.indexOf(B),Math.min(r.length,l)),A=l,o.setSelectionRange(l,s,"forward")}const F={left(o,l){const s=d.slice(l-1).indexOf(B)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(d[r]===B){l=r,s===!0&&l++;break}if(r<0&&d[l]!==void 0&&d[l]!==B)return F.right(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},right(o,l){const s=o.value.length;let r=Math.min(s,l+1);for(;r<=s;r++)if(d[r]===B){l=r;break}else d[r-1]===B&&(l=r);if(r>s&&d[l-1]!==void 0&&d[l-1]!==B)return F.left(o,s);o.setSelectionRange(l,l,"forward")},leftReverse(o,l){const s=z(o.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(s[r-1]===B){l=r;break}else if(s[r]===B&&(l=r,r===0))break;if(r<0&&s[l]!==void 0&&s[l]!==B)return F.rightReverse(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},rightReverse(o,l){const s=o.value.length,r=z(s),p=r.slice(0,l+1).indexOf(B)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(r[g-1]===B){l=g,l>0&&p===!0&&l--;break}if(g>s&&r[l-1]!==void 0&&r[l-1]!==B)return F.leftReverse(o,s);o.setSelectionRange(l,l,"forward")}};function H(o){t("click",o),w=void 0}function L(o){if(t("keydown",o),ze(o)===!0||o.altKey===!0)return;const l=u.value,s=l.selectionStart,r=l.selectionEnd;if(o.shiftKey||(w=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&w===void 0&&(w=l.selectionDirection==="forward"?s:r);const p=F[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),p(l,w===s?r:s),o.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(w,g),Math.max(w,g),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===r?(F.left(l,s),l.setSelectionRange(l.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===r&&(F.rightReverse(l,r),l.setSelectionRange(s,l.selectionEnd,"forward"))}function j(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return q(o);const l=c;let s=0,r="";for(let p=0;p<l.length;p++){const g=o[s],_=l[p];if(typeof _=="string")r+=_,g===_&&s++;else if(g!==void 0&&_.regex.test(g))r+=_.transform!==void 0?_.transform(g):g,s++;else return r}return r}function q(o){const l=c,s=d.indexOf(B);let r=o.length-1,p="";for(let g=l.length-1;g>=0&&r!==-1;g--){const _=l[g];let m=o[r];if(typeof _=="string")p=_+p,m===_&&r--;else if(m!==void 0&&_.regex.test(m))do p=(_.transform!==void 0?_.transform(m):m)+p,r--,m=o[r];while(s===g&&m!==void 0&&_.regex.test(m));else return p}return p}function M(o){return typeof o!="string"||h===void 0?typeof o=="number"?h(""+o):o:h(o)}function E(o){return f.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?f.slice(0,-o.length)+o:o+f.slice(o.length)}return{innerValue:y,hasMask:S,moveCursorForPaste:K,updateMaskValue:O,onMaskedKeydown:L,onMaskedClick:H}}const bt={name:String};function yt(e){return b(()=>e.name||e.for)}function kt(e,t){function a(){const u=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return a()}):b(a)}const xt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ct=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,wt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,St=/[a-z0-9_ -]$/i;function Mt(e){return function(a){if(a.type==="compositionend"||a.type==="change"){if(a.target.qComposing!==!0)return;a.target.qComposing=!1,e(a)}else a.type==="compositionupdate"&&a.target.qComposing!==!0&&typeof a.data=="string"&&(Ne.is.firefox===!0?St.test(a.data)===!1:xt.test(a.data)===!0||Ct.test(a.data)===!0||wt.test(a.data)===!0)===!0&&(a.target.qComposing=!0)}}var qt=ue({name:"QInput",inheritAttrs:!1,props:{...ft,...ht,...bt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ct,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:a}){const{proxy:u}=W(),{$q:d}=u,f={};let c=NaN,h,A,w=null,S;const y=I(null),Q=yt(e),{innerValue:$,hasMask:z,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:K,onMaskedClick:F}=pt(e,t,m,y),H=kt(e,!0),L=b(()=>ge($.value)),j=Mt(g),q=vt({changeEvent:!0}),M=b(()=>e.type==="textarea"||e.autogrow===!0),E=b(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),o=b(()=>{const n={...q.splitAttrs.listeners.value,onInput:g,onPaste:p,onChange:i,onBlur:v,onFocus:he};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=j,z.value===!0&&(n.onKeydown=K,n.onClick=F),e.autogrow===!0&&(n.onAnimationend=_),n}),l=b(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Q.value,...q.splitAttrs.attributes.value,id:q.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{y.value&&(y.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(z.value===!0){if(A===!0&&(A=!1,String(n)===c))return;O(n)}else $.value!==n&&($.value=n,e.type==="number"&&f.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete f.value));e.autogrow===!0&&Y(k)}),D(()=>e.autogrow,n=>{n===!0?Y(k):y.value!==null&&a.rows>0&&(y.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Y(k)});function s(){Re(()=>{const n=document.activeElement;y.value!==null&&y.value!==n&&(n===null||n.id!==q.targetUid.value)&&y.value.focus({preventScroll:!0})})}function r(){y.value!==null&&y.value.select()}function p(n){if(z.value===!0&&e.reverseFillMask!==!0){const V=n.target;N(V,V.selectionStart,V.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const V=n.target.value;if(n.target.qComposing===!0){f.value=V;return}if(z.value===!0)O(V,!1,n.inputType);else if(m(V),E.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&V.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&k()}function _(n){t("animationend",n),k()}function m(n,V){S=()=>{w=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==n&&c!==n&&(c=n,V===!0&&(A=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),S=void 0},e.type==="number"&&(h=!0,f.value=n),e.debounce!==void 0?(w!==null&&clearTimeout(w),f.value=n,w=setTimeout(S,e.debounce)):S()}function k(){requestAnimationFrame(()=>{const n=y.value;if(n!==null){const V=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:P}=d.platform.is.firefox===!0?{}:window.getComputedStyle(n),G=Z!==void 0&&Z!=="scroll";G===!0&&(n.style.overflowY="hidden"),V.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",G===!0&&(n.style.overflowY=parseInt(P,10)<n.scrollHeight?"auto":"hidden"),V.marginBottom="",n.scrollTop=U}})}function i(n){j(n),w!==null&&(clearTimeout(w),w=null),S!==void 0&&S(),t("change",n.target.value)}function v(n){n!==void 0&&he(n),w!==null&&(clearTimeout(w),w=null),S!==void 0&&S(),h=!1,A=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{y.value!==null&&(y.value.value=$.value!==void 0?$.value:"")})}function C(){return f.hasOwnProperty("value")===!0?f.value:$.value!==void 0?$.value:""}re(()=>{v()}),oe(()=>{e.autogrow===!0&&k()}),Object.assign(q,{innerValue:$,fieldClass:b(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:y,emitValue:m,hasValue:L,floatingLabel:b(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||ge(e.displayValue)),getControl:()=>x(M.value===!0?"textarea":"input",{ref:y,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...o.value,...e.type!=="file"?{value:C()}:H.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},C()),x("span",e.shadowText)])});const R=gt(q);return Object.assign(u,{focus:s,select:r,getNativeElement:()=>y.value}),Me(u,"nativeEl",()=>y.value),R}}),_t=ue({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const a=b(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(e.tag,{class:a.value},J(t.default))}}),Rt=ue({name:"QCardActions",props:{...je,vertical:Boolean},setup(e,{slots:t}){const a=Ke(e),u=b(()=>`q-card__actions ${a.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>x("div",{class:u.value},J(t.default))}}),Vt=ue({name:"QCard",props:{...qe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=W(),u=_e(e,a),d=b(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:d.value},J(t.default))}});const At={class:"q-pa-md"},Et={__name:"VeriFication",setup(e){const t=Le(),a=Ze(),{t:u}=Ue();Qe();const d=I(""),f=async()=>{try{const h=await Xe.post("https://example.com/api",{data:d.value});console.log("\u041E\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:",h.data)}catch(h){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445:",h)}c("BuySmokFinish")},c=h=>{t.updateCurrentScreen(h),a.push({name:h})};return(h,A)=>(He(),Ye("div",At,[Je("p",null,We(ie(u)("stepVerification1")),1),ee(Vt,null,{default:se(()=>[ee(_t,null,{default:se(()=>[ee(qt,{modelValue:d.value,"onUpdate:modelValue":A[0]||(A[0]=w=>d.value=w),label:ie(u)("enterValue"),filled:"",clearable:""},null,8,["modelValue","label"])]),_:1}),ee(Rt,{align:"right"},{default:se(()=>[ee(Ge,{label:ie(u)("send"),color:"primary",onClick:f},null,8,["label"])]),_:1})]),_:1})]))}};export{Et as default};
