n.d(t, {
  Ol: function() {
return l;
  },
  Q6: function() {
return u;
  },
  cu: function() {
return c;
  },
  m8: function() {
return d;
  },
  uq: function() {
return o;
  }
});
var r = n(289393),
  i = n(430824),
  a = n(308636),
  s = n(981631);

function o(e) {
  return null != e && e.includes(a.o.NEW_PURCHASES_DISABLED);
}

function l(e) {
  var t;
  if (null == e)
return !1;
  let n = r.Z.getMonetizationRestrictionsFetchState(e),
a = r.Z.getMonetizationRestrictions(e),
l = i.Z.getGuild(e);
  return n === r.M.FETCHED ? o(a) : null === (t = null == l ? void 0 : l.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t;
}

function u(e) {
  return null != e && e.includes(a.o.SETTINGS_READ_ONLY);
}

function c(e) {
  var t;
  if (null == e)
return !1;
  let n = r.Z.getMonetizationRestrictionsFetchState(e),
a = r.Z.getMonetizationRestrictions(e),
o = i.Z.getGuild(e);
  return n === r.M.FETCHED ? u(a) : null === (t = null == o ? void 0 : o.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t;
}

function d(e) {
  return null != e && e.includes(a.o.REAPPLICATION_DISABLED);
}