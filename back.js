/* دکمه‌های بازگشت: به همان صفحه‌ای برمی‌گردند که کاربر از آن آمده است.
   اگر صفحه‌ی قبلی از همین سایت نبود (مثلاً لینک مستقیم)، به مقصد پیش‌فرض (data-go) می‌روند. */
(function(){
  function hasPrev(){
    try{
      var r=document.referrer;
      if(r&&new URL(r).origin===location.origin)return true;
    }catch(e){}
    /* باز کردن فایل‌ها مستقیم از روی دستگاه (file://) ریفرر ندارد */
    return location.protocol==='file:'&&history.length>1;
  }
  window.yaraBack=function(fallback){
    if(hasPrev()){history.back();return}
    location.href=fallback||'index.html';
  };
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-back],[aria-label="بازگشت"][data-go]');
    if(!t)return;
    e.preventDefault();e.stopImmediatePropagation();
    window.yaraBack(t.getAttribute('data-go'));
  },true);
})();
