"use strict";
n.r(t), n.d(t, {
  useScreenDimensions: function() {
    return a
  }
}), n("47120");
var l = n("470079");

function a() {
  var e, t;
  let [n, a] = l.useState({
    width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
    height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
  });
  return l.useLayoutEffect(() => {
    function e() {
      let e = window.innerWidth;
      a({
        width: e,
        height: window.innerHeight
      })
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), n
}