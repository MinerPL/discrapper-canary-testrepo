"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(470079),
  r = n(863840);

function s(e) {
  let t = (0, r.Z)(e);
  (0, i.useEffect)(() => {
    let e = requestAnimationFrame(function n() {
      var i;
      null === (i = t.current) || void 0 === i || i.call(t), e = requestAnimationFrame(n)
    });
    return () => cancelAnimationFrame(e)
  }, [])
}