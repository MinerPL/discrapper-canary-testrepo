"use strict";
n.d(t, {
  Gx: function() {
    return u
  },
  Op: function() {
    return h
  },
  T4: function() {
    return d
  },
  V_: function() {
    return c
  }
});
var s, l, a = n(539573),
  i = n(689938);

function r(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function o(e) {
  return r(0, e)
}

function c() {
  return r(0, i.Z.Messages.FORUM_POST_EMPTY_TITLE_ERROR)
}

function d() {
  return r(0, i.Z.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR)
}

function u(e, t) {
  return r(1, (0, a.$q)(e, null == t ? void 0 : t.id))
}

function h(e, t) {
  var n;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null !== (n = e.message) && void 0 !== n ? n : null
}(s = l || (l = {}))[s.EmptyContent = 0] = "EmptyContent", s[s.AutomodViolation = 1] = "AutomodViolation", s[s.EmptyTags = 2] = "EmptyTags"