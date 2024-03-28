"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("442837"),
  r = n("481060"),
  o = n("797258"),
  u = n("374129"),
  d = n("639351"),
  c = n("565473"),
  f = n("927923"),
  E = n("689938"),
  h = n("695503");

function _(e) {
  let {
    platform: t
  } = e;
  return t === f.GameConsoleTypes.XBOX ? (0, a.jsx)(d.default, {
    className: h.icon
  }) : t === f.GameConsoleTypes.PLAYSTATION ? (0, a.jsx)(u.default, {
    className: h.icon
  }) : null
}

function C(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, s = null != n ? (0, c.coercePlatformTypeToConsoleType)(n.type) : null, u = (0, i.useStateFromStores)([o.default], () => {
    var e, n;
    return null === (e = o.default.getSessionById(null !== (n = null == t ? void 0 : t.sessionId) && void 0 !== n ? n : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), d = null != s ? s : u;
  if (null == d || !f.GAME_CONSOLE_SESSIONS.has(d)) return null;
  let C = null != n,
    m = C ? d === f.GameConsoleTypes.XBOX ? E.default.Messages.XBOX_TRANSFERRING_ELLIPSIS : E.default.Messages.PLAYSTATION_TRANSFERRING_ELLIPSIS : d === f.GameConsoleTypes.XBOX ? E.default.Messages.XBOX_REMOTE_CONNECTED.format() : E.default.Messages.PLAYSTATION_REMOTE_CONNECTED.format();
  return (0, a.jsxs)("div", {
    className: l()(h.root, C ? h.connecting : h.connected),
    children: [(0, a.jsx)(_, {
      platform: d
    }), (0, a.jsx)(r.Text, {
      color: C ? "header-primary" : "always-white",
      variant: "text-xs/medium",
      children: m
    })]
  })
}