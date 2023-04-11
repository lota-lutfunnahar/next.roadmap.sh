import{h as l,p as E}from"./hooks.module.ee390651.js";import{h as U,a as _}from"./http.9fcca5a9.js";import{a as S,T as C}from"./jwt.5024b243.js";import{o as e}from"./jsxRuntime.module.760e3403.js";import"./preact.module.e54f245b.js";function q(){const[i,c]=l(""),[k,I]=l(""),[d,u]=l(""),[m,f]=l(""),[p,g]=l(""),[b,h]=l(""),[x,n]=l(!0),[w,s]=l(""),[y,N]=l(""),P=async t=>{t.preventDefault(),n(!0),s(""),N("");const{response:a,error:r}=await U(`${{}.PUBLIC_API_URL}/v1-update-profile`,{name:i,github:d||void 0,linkedin:p||void 0,twitter:m||void 0,website:b||void 0});if(r||!a){n(!1),s(r?.message||"Something went wrong");return}await v(),N("Profile updated successfully")},v=async()=>{n(!0);const{error:t,response:a}=await _(`${{}.PUBLIC_API_URL}/v1-me`);if(t||!a){if(t?.status===401){S.remove(C),window.location.reload();return}n(!1),s(t?.message||"Something went wrong");return}const{name:r,email:L,links:o}=a;c(r),I(L),u(o?.github||""),g(o?.linkedin||""),f(o?.twitter||""),h(o?.website||""),n(!1)};return E(()=>{v().finally(()=>{})},[]),e("form",{onSubmit:P,children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Profile"}),e("p",{className:"mt-2",children:"Update your profile details below."}),e("div",{className:"mt-8 space-y-4",children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"John Doe",value:i,onInput:t=>c(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"email",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Email"}),e("input",{type:"email",name:"email",id:"email",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,disabled:!0,placeholder:"john@example.com",value:k})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"github",className:"text-sm leading-none text-slate-500",children:"Github"}),e("input",{type:"text",name:"github",id:"github",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/username",value:d,onInput:t=>u(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"twitter",className:"text-sm leading-none text-slate-500",children:"Twitter"}),e("input",{type:"text",name:"twitter",id:"twitter",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://twitter.com/username",value:m,onInput:t=>f(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"linkedin",className:"text-sm leading-none text-slate-500",children:"LinkedIn"}),e("input",{type:"text",name:"linkedin",id:"linkedin",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/in/username/",value:p,onInput:t=>g(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Website"}),e("input",{type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://example.com",value:b,onInput:t=>h(t.target.value)})]}),w&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:w}),y&&e("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:y}),e("button",{type:"submit",disabled:x,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:x?"Please wait...":"Continue"})]})]})}export{q as UpdateProfileForm};
