import{j as t,c,r as d}from"./vendor-kjgEj_H5.js";import{T as a,H as l,A as u}from"./components-DiM1pyKP.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(){return t.jsxs("div",{children:[t.jsx(a,{}),t.jsxs("div",{className:"App",children:[t.jsx("a",{class:"skip",href:"#content",children:"Skip to Content"}),t.jsxs("div",{className:"wrapper",children:[t.jsx(l,{}),t.jsx("main",{id:"content",className:"MainContent",children:t.jsx(u,{})})]})]})]})}c(document.getElementById("root")).render(t.jsx(d.StrictMode,{children:t.jsx(f,{})}));
