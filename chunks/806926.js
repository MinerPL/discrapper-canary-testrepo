"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
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
  c = s("602091"),
  f = s("727004");

function S(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: S,
    autoFocusNote: m,
    transitionState: I,
    onClose: E
  } = e, v = (0, a.default)(s);
  return (0, l.jsxs)("div", {
    className: f.container,
    children: [(0, l.jsxs)("div", {
      className: f.usernameBadgeList,
      children: [(0, l.jsx)(u.default, {
        className: f.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold",
        nicknameIcons: (0, l.jsx)(r.default, {
          userId: t.id
        })
      }), v.length > 0 && (0, l.jsx)(o.default.Overlay, {
        children: (0, l.jsx)(i.default, {
          badges: v,
          className: f.badgeList,
          onClose: E
        })
      })]
    }), (0, l.jsxs)(o.default.Overlay, {
      className: f.overlay,
      children: [I === c.ModalTransitionState.ENTERED && (0, l.jsx)(n.default, {
        onTooltipClose: E
      }), (0, l.jsx)(d.default, {
        user: t,
        displayProfile: s,
        initialSection: S,
        autoFocusNote: m,
        onClose: E
      })]
    })]
  })
}