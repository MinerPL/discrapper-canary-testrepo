"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var i = s("470079");

function a(e, t) {
  let s = i.useRef(e);
  i.useEffect(() => {
    e.length > s.current.length && t(), s.current = e
  }, [e, t])
}