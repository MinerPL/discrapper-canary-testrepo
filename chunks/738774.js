"use strict";
n.d(t, {
  Ol: function() {
    return l
  },
  Q6: function() {
    return u
  },
  cu: function() {
    return _
  },
  m8: function() {
    return d
  },
  uq: function() {
    return a
  }
});
var i = n(289393),
  r = n(430824),
  s = n(308636),
  o = n(981631);

function a(e) {
  return null != e && e.includes(s.o.NEW_PURCHASES_DISABLED)
}

function l(e) {
  var t;
  if (null == e) return !1;
  let n = i.Z.getMonetizationRestrictionsFetchState(e),
    s = i.Z.getMonetizationRestrictions(e),
    l = r.Z.getGuild(e);
  return n === i.M.FETCHED ? a(s) : null === (t = null == l ? void 0 : l.hasFeature(o.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
}

function u(e) {
  return null != e && e.includes(s.o.SETTINGS_READ_ONLY)
}

function _(e) {
  var t;
  if (null == e) return !1;
  let n = i.Z.getMonetizationRestrictionsFetchState(e),
    s = i.Z.getMonetizationRestrictions(e),
    a = r.Z.getGuild(e);
  return n === i.M.FETCHED ? u(s) : null === (t = null == a ? void 0 : a.hasFeature(o.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t
}

function d(e) {
  return null != e && e.includes(s.o.REAPPLICATION_DISABLED)
}