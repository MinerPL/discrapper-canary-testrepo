"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var i = s("884691");

function n(e, t) {
  let s = i.useRef(e);
  i.useEffect(() => {
    e.length > s.current.length && t(), s.current = e
  }, [e, t])
}