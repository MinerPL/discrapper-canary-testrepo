"use strict";
n.d(t, {
  AB: function() {
    return a
  },
  ZP: function() {
    return _
  },
  s5: function() {
    return d
  }
});
var i = n(442837),
  r = n(271383),
  s = n(594174),
  o = n(69882);

function a(e) {
  let t = (0, i.e7)([s.default], () => s.default.getCurrentUser());
  return _(null == t ? void 0 : t.id, e)
}

function l(e, t, n) {
  return null != t && null != e ? n.getMember(t, e) : null
}

function u(e) {
  var t;
  return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, o.b)(e)]
}

function _(e, t) {
  return u((0, i.e7)([r.ZP], () => l(e, t, r.ZP), [t, e]))
}

function d(e, t) {
  return u(l(e, t, r.ZP))
}