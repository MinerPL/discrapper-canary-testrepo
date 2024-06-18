"use strict";
n.d(t, {
  Dv: function() {
    return u
  },
  Gq: function() {
    return a
  },
  Gx: function() {
    return E
  },
  XX: function() {
    return l
  },
  bX: function() {
    return d
  },
  bY: function() {
    return _
  },
  iG: function() {
    return c
  },
  ut: function() {
    return o
  }
});
var i = n(446108),
  r = n(901461),
  s = n(981631);

function o(e) {
  return "message-content-".concat(e.id)
}

function a(e) {
  return "message-reply-context-".concat(e.id)
}

function l(e, t) {
  let n = null != t ? t : e.id;
  return "message-username-".concat(n)
}

function u(e) {
  return "message-timestamp-".concat(e.id)
}

function _(e) {
  return "message-reactions-".concat(e.id)
}

function d(e) {
  return "message-accessories-".concat(e.id)
}

function c(e, t, n) {
  let _ = e.type === s.uaV.REPLY && null != e.messageReference,
    c = e.embeds.length > 0,
    E = e.attachments.length > 0,
    I = e.stickerItems.length > 0,
    T = e.codedLinks.length > 0,
    h = e.hasFlag(s.iLy.HAS_THREAD),
    S = c || E || I || T || h || e.type === s.uaV.THREAD_CREATED,
    f = c && e.content === e.embeds[0].url && e.embeds[0].type === s.hBH.GIFV,
    N = e.type !== s.uaV.DEFAULT || !f && "" !== e.content,
    A = (0, r.Z)(e),
    m = !A && (null == n ? void 0 : n.hasTimestamp) !== !1,
    O = l(e, t),
    R = a(e),
    C = A ? "" : "".concat(_ ? R : O, " ").concat(i.Z0);
  if (N) {
    let t = o(e);
    C += " ".concat(t)
  }
  if (S) {
    let t = d(e);
    C += " ".concat(t)
  }
  if (m) {
    let t = u(e);
    C += " ".concat(i.fy, " ").concat(t)
  }
  return C.trim()
}

function E(e) {
  if (0 === e.reactions.length) return;
  let t = _(e);
  return "".concat(i.Mb, " ").concat(t)
}