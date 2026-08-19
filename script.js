/* Portfolio interactions + transaction-card visual fallback */
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}}));

(function(){
  const css = `
    #transactions .deal-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:18px!important;margin-top:45px!important}
    #transactions .deal{display:grid!important;grid-template-columns:44% 56%!important;min-height:245px!important;background:#fff!important;border:1px solid #e4e5e8!important;overflow:hidden!important;transition:transform .2s ease,box-shadow .2s ease!important}
    #transactions .deal:hover{transform:translateY(-5px)!important;box-shadow:10px 10px 0 #c9ff3f!important}
    #transactions .deal-art{display:flex!important;min-height:245px!important;padding:22px!important;flex-direction:column!important;justify-content:space-between!important;position:relative!important;overflow:hidden!important;background:linear-gradient(145deg,#15171b,#2c3036)!important;color:#fff!important}
    #transactions .deal-art strong{display:block!important;font-size:clamp(32px,4vw,48px)!important;line-height:.95!important;font-weight:700!important;color:#c9ff3f!important;position:relative!important;z-index:2!important}
    #transactions .deal-art span,#transactions .deal-art small{position:relative!important;z-index:2!important;color:#b7bbc1!important}
    #transactions .deal-art small{font-size:9px!important;line-height:1.4!important;letter-spacing:.12em!important}
    #transactions .deal-body{display:flex!important;padding:24px!important;flex-direction:column!important;justify-content:center!important}
    #transactions .deal-body h3{margin:10px 0 6px!important;font-size:24px!important;font-weight:700!important}
    #transactions .deal-body p{margin:0 0 18px!important;color:#696d75!important;font-size:12px!important}
    #transactions .deal-body b{font-size:10px!important;text-transform:uppercase!important;letter-spacing:.08em!important}
    #transactions .deal-gold .deal-art{background:linear-gradient(145deg,#171817,#4a4631)!important}
    #transactions .deal-mobility .deal-art{background:linear-gradient(145deg,#17201e,#28544a)!important}
    #transactions .deal-telecom .deal-art{background:linear-gradient(145deg,#171a22,#384052)!important}
    #transactions .deal-fintech .deal-art{background:linear-gradient(145deg,#182019,#3a4b32)!important}
    #transactions .deal-auto .deal-art{background:linear-gradient(145deg,#171717,#454545)!important}
    #transactions .deal-timber .deal-art{background:linear-gradient(145deg,#211b17,#55422e)!important}
    #transactions .deal-wine .deal-art{background:linear-gradient(145deg,#211a24,#54364f)!important}
    #transactions .deal-bridge .deal-art{background:linear-gradient(145deg,#171c21,#344652)!important}
    @media(max-width:950px){#transactions .deal-grid{grid-template-columns:1fr!important}}
    @media(max-width:800px){#transactions .deal{grid-template-columns:1fr!important}#transactions .deal-art{min-height:150px!important}}
  `;
  const style=document.createElement('style');
  style.id='transaction-card-fallback';
  style.textContent=css;
  document.head.appendChild(style);
})();
