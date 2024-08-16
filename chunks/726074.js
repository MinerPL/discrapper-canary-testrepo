n.d(t, {
    as: function () {
        return a;
    },
    tX: function () {
        return s;
    }
});
let r = 'undefined' != typeof global ? global : self,
    i = r.MutationObserver || r.WebKitMutationObserver;
function a(e) {
    return function () {
        let t = setTimeout(r, 0),
            n = setInterval(r, 50);
        function r() {
            clearTimeout(t), clearInterval(n), e();
        }
    };
}
let s =
    'function' == typeof i
        ? function (e) {
              let t = 1,
                  n = new i(e),
                  r = document.createTextNode('');
              return (
                  n.observe(r, { characterData: !0 }),
                  function () {
                      (t = -t), (r.data = t);
                  }
              );
          }
        : a;
