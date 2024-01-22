"use strict";
s.r(t), s.d(t, {
  makeEmptyTitleError: function() {
    return u
  },
  makeEmptyMessageError: function() {
    return d
  },
  makeAutomodViolationError: function() {
    return c
  },
  renderError: function() {
    return m
  }
});
var a, n, l = s("600798"),
  r = s("782340");

function i(e, t) {
  return {
    type: e,
    message: null != t ? t : null
  }
}

function o(e) {
  return i(0, e)
}

function u() {
  return i(0, r.default.Messages.FORUM_POST_EMPTY_TITLE_ERROR)
}

function d() {
  return i(0, r.default.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR)
}

function c(e, t) {
  return i(1, (0, l.getAutomodErrorMessageFromErrorResponse)(e, null == t ? void 0 : t.id))
}

function m(e, t) {
  var s;
  return null == e || 0 === e.type && null != t.content && t.content.trim().length > 0 || 2 === e.type && null != t.tags && t.tags.length > 0 ? null : null !== (s = e.message) && void 0 !== s ? s : null
}(a = n || (n = {}))[a.EmptyContent = 0] = "EmptyContent", a[a.AutomodViolation = 1] = "AutomodViolation", a[a.EmptyTags = 2] = "EmptyTags"