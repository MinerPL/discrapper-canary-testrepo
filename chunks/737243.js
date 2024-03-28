"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("699516"),
  r = n("783709"),
  o = n("348238");
let u = l.memo(function(e) {
  var t;
  let {
    message: n,
    channel: u,
    compact: d = !1,
    interactionUsernameProfile: c,
    interactionAvatarProfile: f,
    interactionData: h,
    setPopout: m
  } = e, p = (0, s.useStateFromStores)([i.default], () => null != n.interaction && i.default.isBlocked(n.interaction.user.id), [n.interaction]), E = (0, o.useContextMenuUser)(null === (t = n.interaction) || void 0 === t ? void 0 : t.user.id, u.id), C = (0, o.useClickInteractionUserUsername)(n.interaction, u, c, m), g = (0, o.useClickInteractionUserAvatar)(f, m), S = (0, o.useClickInteractionCommandName)(h, m), _ = l.useCallback(() => m({
    interactionUsernameProfile: !1,
    interactionAvatarProfile: !1,
    interactionData: !1
  }), [m]);
  return (0, a.jsx)(r.default, {
    message: n,
    channel: u,
    compact: d,
    isInteractionUserBlocked: p,
    showAvatarPopout: f,
    showUsernamePopout: c,
    showDataPopout: h,
    onClickAvatar: g,
    onClickUsername: C,
    onClickCommand: S,
    onUserContextMenu: E,
    onPopoutRequestClose: _
  })
});

function d(e, t, n) {
  let {
    message: l,
    channel: s,
    compact: i
  } = e, {
    interactionUsernameProfile: r,
    interactionAvatarProfile: o,
    interactionData: d
  } = n;
  return null != l.interaction && "" !== l.interaction.displayName ? (0, a.jsx)(u, {
    message: l,
    channel: s,
    compact: i,
    setPopout: t,
    interactionUsernameProfile: r,
    interactionAvatarProfile: o,
    interactionData: d
  }) : null
}