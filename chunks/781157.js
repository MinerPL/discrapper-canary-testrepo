"use strict";
n.d(t, {
  JH: function() {
    return a
  },
  O7: function() {
    return u
  },
  Z0: function() {
    return _
  },
  x7: function() {
    return l
  }
});
var i = n(57132),
  r = n(215355),
  s = n(289551),
  o = n(981631);

function a() {
  return (0, i.cn)()
}

function l() {
  return (0, i.cn)() && !(0, r.LI)({
    location: "isSplitMessagesTab"
  }).mergeTabs
}

function u() {
  if (!l()) return !1;
  let e = (0, s.Z)();
  return (null == e ? void 0 : e.name) === "messages"
}

function _(e) {
  return !!a() && (!l() || null != e && e !== o.ME)
}