"use strict";
n.d(t, {
  MT: function() {
    return s
  },
  TG: function() {
    return a
  },
  wB: function() {
    return o
  }
});
var i = n(149765),
  r = n(981631);

function s(e) {
  return i.e$(e.permissions, r.Plq.VIEW_CHANNEL)
}

function o(e, t) {
  return null != t && (!!i.e$(t.deny, r.Plq.VIEW_CHANNEL) || e.isGuildVocal() && i.e$(t.deny, r.Plq.CONNECT))
}

function a(e, t) {
  return !(null == t || o(e, t)) && !!i.e$(t.allow, r.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || i.e$(t.allow, r.Plq.CONNECT))
}