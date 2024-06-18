"use strict";
n.d(t, {
  R: function() {
    return a
  }
});
var i = n(470079),
  r = n(442837),
  s = n(675478),
  o = n(654455);

function a(e) {
  i.useEffect(() => {
    s.DZ.loadIfNecessary()
  }, []);
  let t = (0, r.e7)([o.ZP], () => o.ZP.getTopCommandsWithoutLoadingLatest());
  return i.useMemo(() => (0, o.LU)(t, e), [t, e])
}