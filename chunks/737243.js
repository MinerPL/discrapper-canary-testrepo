n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(699516),
  r = n(697451),
  o = n(348238);
let c = a.memo(function(e) {
  var t;
  let {
message: n,
channel: c,
compact: u = !1,
interactionUsernameProfile: d,
interactionAvatarProfile: h,
interactionData: p,
setPopout: m
  } = e, _ = (0, s.e7)([l.Z], () => l.Z.isBlockedForMessage(n), [n]), f = (0, o.wq)(null === (t = n.interaction) || void 0 === t ? void 0 : t.user.id, c.id), E = (0, o.Nk)(n.interaction, c, d, m), g = (0, o.NU)(h, m), C = (0, o.Xn)(p, m), I = a.useCallback(() => m({
interactionUsernameProfile: !1,
interactionAvatarProfile: !1,
interactionData: !1
  }), [m]);
  return (0, i.jsx)(r.Z, {
message: n,
channel: c,
compact: u,
isInteractionUserBlocked: _,
showAvatarPopout: h,
showUsernamePopout: d,
showDataPopout: p,
onClickAvatar: g,
onClickUsername: E,
onClickCommand: C,
onUserContextMenu: f,
onPopoutRequestClose: I
  });
});

function u(e, t, n) {
  let {
message: a,
channel: s,
compact: l
  } = e, {
interactionUsernameProfile: r,
interactionAvatarProfile: o,
interactionData: u
  } = n;
  return null != a.interaction && '' !== a.interaction.displayName ? (0, i.jsx)(c, {
message: a,
channel: s,
compact: l,
setPopout: t,
interactionUsernameProfile: r,
interactionAvatarProfile: o,
interactionData: u
  }) : null;
}