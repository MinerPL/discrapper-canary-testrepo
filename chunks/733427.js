"use strict";
n.r(t);
var s = n("470079");
t.default = () => {
  let e = s.useRef(!0);
  return s.useEffect(() => () => {
    e.current = !1
  }, []), s.useCallback(() => e.current, [])
}