"use strict";
n.d(t, {
  EO: function() {
    return N
  },
  Fc: function() {
    return f
  },
  Ft: function() {
    return O
  },
  W5: function() {
    return m
  },
  _T: function() {
    return I
  },
  oY: function() {
    return E
  },
  u5: function() {
    return h
  }
}), n(411104);
var i = n(442837),
  r = n(246946),
  s = n(594174),
  o = n(981631),
  a = n(689938);
let l = e => "".concat(e[0], "..."),
  u = e => "@".concat(e),
  _ = {
    mode: "full",
    decoration: "never",
    identifiable: "auto",
    forcePomelo: !1
  };

function d(e) {
  return !!(null != e && e.length > 0)
}

function c(e) {
  if (d(e.global_name)) return e.global_name;
  if (d(e.globalName)) return e.globalName;
  if (d(e.username)) return e.username;
  else return "???"
}

function E(e) {
  var t;
  if (null == e) return;
  let n = r.Z.hidePersonalInformation,
    i = c(e);
  return n && i.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (i = l(i)), i
}

function I(e) {
  var t;
  let n = (0, i.e7)([r.Z], () => r.Z.hidePersonalInformation);
  if (null == e) return;
  let s = c(e);
  return n && s.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && "0" === e.discriminator && (s = l(s)), s
}

function T(e) {
  if (null != e) {
    if (d(e.globalName)) return e.globalName;
    else if (d(e.global_name)) return e.global_name;
    else return
  }
}

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case o.Skl.ONLINE:
      return t ? a.Z.Messages.STATUS_ONLINE_MOBILE : a.Z.Messages.STATUS_ONLINE;
    case o.Skl.OFFLINE:
      return a.Z.Messages.STATUS_OFFLINE;
    case o.Skl.IDLE:
      return a.Z.Messages.STATUS_IDLE;
    case o.Skl.DND:
      return a.Z.Messages.STATUS_DND;
    case o.Skl.INVISIBLE:
      return a.Z.Messages.STATUS_INVISIBLE;
    case o.Skl.STREAMING:
      return a.Z.Messages.STATUS_STREAMING;
    case o.Skl.UNKNOWN:
    default:
      return null
  }
}

function S(e, t) {
  let {
    maxDaysOld: n,
    minDaysOld: i = 0
  } = t;
  if (null == e) return !1;
  let r = Date.now() - e.createdAt.getTime();
  return (null == n || !!(r <= 864e5 * n)) && !!(r >= 864e5 * i) || !1
}

function f(e) {
  return !S(e, {
    minDaysOld: 0,
    maxDaysOld: 30
  })
}

function N(e) {
  return S(e, {
    minDaysOld: 0,
    maxDaysOld: 7
  })
}

function A(e, t, n) {
  if (null == e) return a.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER;
  if (!d(e.username)) return "???";
  let i = n;
  if ("always" === t.identifiable ? i = !1 : "never" === t.identifiable && (i = !0), "0" !== e.discriminator && e.discriminator !== o.fo$ && !t.forcePomelo) return "username" === t.mode ? e.username : i ? e.username : "".concat(e.username, "#").concat(e.discriminator);
  let r = i ? l(e.username) : e.username;
  return "never" !== t.decoration ? u(r) : r
}

function m(e, t) {
  let n = {
      ..._,
      ...t
    },
    i = "auto" !== n.identifiable || r.Z.hidePersonalInformation;
  return A(e, n, i)
}

function O(e) {
  return (0, i.e7)([s.default], () => {
    if (null != e) return e.isPrivate() && e.isDM() ? s.default.getUser(e.getRecipientId()) : null
  })
}
t.ZP = {
  getName: E,
  useName: I,
  getUserTag: m,
  useUserTag: function(e, t) {
    let n = {
      ..._,
      ...t
    };
    return A(e, n, (0, i.e7)([r.Z], () => r.Z.hidePersonalInformation))
  },
  getFormattedName: function(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return "???";
    let i = T(e),
      r = n ? m(e) : null !== (t = e.username) && void 0 !== t ? t : "???";
    return i === r ? i : null != i ? "".concat(i, " (").concat(r, ")") : r
  },
  getGlobalName: T,
  humanizeStatus: h,
  useDirectMessageRecipient: O
}