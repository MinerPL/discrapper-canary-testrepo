"use strict";
s.r(t), s.d(t, {
  canResetThemeColors: function() {
    return o
  },
  setNewPendingGuildIdentityBio: function() {
    return n
  },
  setNewPendingGuildIdentityPronouns: function() {
    return l
  },
  setNewPendingGuildIdentityThemeColors: function() {
    return r
  },
  setNewPendingNickname: function() {
    return i
  }
});
var a = s("18438");

function n(e, t) {
  (0, a.setPendingBio)(e === t ? void 0 : e)
}

function l(e, t) {
  (0, a.setPendingPronouns)(e === t ? void 0 : e)
}

function i(e, t) {
  (0, a.setPendingNickname)(e === t || "" === e && null === t ? void 0 : e)
}

function r(e, t) {
  let s = (null == e ? void 0 : e[0]) == null || (null == e ? void 0 : e[1]) == null;
  (0, a.setPendingThemeColors)(s && null == t ? void 0 : e)
}

function o(e, t) {
  return void 0 === e ? null != t : (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null
}