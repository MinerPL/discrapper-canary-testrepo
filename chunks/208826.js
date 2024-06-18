"use strict";
n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(481060),
  o = n(40851),
  a = n(819640),
  l = n(574254),
  u = n(981631);

function _() {
  let e = (0, s.useModalsStore)(e => !Object.entries(e).every(e => {
      let [t, n] = e;
      return 0 === n.length
    })),
    t = (0, r.e7)([l.Z], () => l.Z.isOpen()),
    n = (0, r.e7)([a.Z], () => a.Z.hasLayers()),
    [_, d] = i.useState(!1),
    c = (0, o.Aq)();
  return i.useEffect(() => {
    function e() {
      d(!0)
    }

    function t() {
      d(!1)
    }
    return c.subscribe(u.CkL.POPOUT_SHOW, e), c.subscribe(u.CkL.POPOUT_HIDE, t), () => {
      c.unsubscribe(u.CkL.POPOUT_SHOW, e), c.unsubscribe(u.CkL.POPOUT_HIDE, t)
    }
  }, [c]), e || t || _ || n
}