"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var l = s("735250");
s("470079");
var a = s("290421"),
  i = s("80132"),
  n = s("484404"),
  r = s("681837"),
  o = s("502762"),
  u = s("530"),
  d = s("616140"),
  c = s("228168"),
  f = s("602091"),
  S = s("854898");

function m(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: m,
    autoFocusNote: E,
    transitionState: I,
    onClose: v
  } = e, _ = (0, a.default)(s);
  return (0, l.jsxs)("div", {
    className: S.container,
    children: [(0, l.jsxs)("div", {
      className: S.usernameBadgeList,
      children: [(0, l.jsx)(u.default, {
        user: t,
        profileType: c.UserProfileTypes.FULL_SIZE,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold",
        nicknameIcons: (0, l.jsx)(r.default, {
          userId: t.id
        })
      }), _.length > 0 && (0, l.jsx)(o.default.Overlay, {
        children: (0, l.jsx)(i.default, {
          badges: _,
          className: S.badgeList,
          onClose: v
        })
      })]
    }), (0, l.jsxs)(o.default.Overlay, {
      className: S.overlay,
      children: [I === f.ModalTransitionState.ENTERED && (0, l.jsx)(n.default, {
        onTooltipClose: v
      }), (0, l.jsx)(d.default, {
        user: t,
        displayProfile: s,
        initialSection: m,
        autoFocusNote: E,
        onClose: v
      })]
    })]
  })
}