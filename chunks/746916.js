"use strict";
n.d(t, {
  E: function() {
    return _
  }
});
var i = n(442837),
  r = n(271383),
  s = n(594174),
  o = n(881952),
  a = n(467138),
  l = n(937111),
  u = n(981631);

function _(e) {
  let t = (0, a.e)(null != e ? e : u.lds),
    n = (0, i.e7)([l.Z, s.default, r.ZP], () => {
      let t = l.Z.getRequest(e),
        n = s.default.getCurrentUser();
      if (null == n || null == t || t.userId !== n.id) return;
      let i = r.ZP.getMember(e, t.userId);
      if (null == i || !!i.isPending || !!(0, o.oP)(t)) return t.applicationStatus
    }, [e]);
  return t ? n : void 0
}