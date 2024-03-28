"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var l = n("512722"),
  s = n.n(l),
  i = n("442837"),
  r = n("779618"),
  o = n("446226"),
  u = n("441167"),
  d = n("822183"),
  c = n("641015"),
  f = n("131951"),
  h = n("594174"),
  m = n("700785"),
  p = n("213652"),
  E = n("320427"),
  C = n("145010"),
  g = n("933686"),
  S = n("997614"),
  _ = n("159909"),
  T = n("981631"),
  I = n("564675");

function A(e) {
  let {
    channel: t,
    hasActiveStream: n,
    themeable: l = !1
  } = e, A = (0, i.useStateFromStores)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), v = (0, o.default)(), {
    isSharedCanvasEnabled: N
  } = d.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: x
  } = u.default.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: !1
  }), M = (0, r.default)(f.default);
  if (null == t || null != v) return null;
  let R = (0, c.default)(t),
    L = m.can({
      permission: T.Permissions.ADD_REACTIONS,
      user: A,
      context: t
    });
  return (0, a.jsxs)("div", {
    className: I.voiceEffectsActionBar,
    children: [R && (0, a.jsx)(S.default, {
      channel: t,
      themeable: l
    }), L && (0, a.jsx)(g.default, {
      channel: t
    }), x && M && (0, a.jsx)(p.default, {
      channel: t
    }), N && n && (0, a.jsx)(E.default, {}), N && n && (0, a.jsx)(C.default, {
      channel: t
    }), N && n && (0, a.jsx)(_.default, {})]
  })
}