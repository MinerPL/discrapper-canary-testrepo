"use strict";
n.d(t, {
  Z: function() {
    return R
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(873546),
  l = n(481060),
  u = n(648996),
  _ = n(51144),
  d = n(785717),
  c = n(659101),
  E = n(689938),
  I = n(846389),
  T = n(390965),
  h = n(752266),
  S = n(390820),
  f = n(230797),
  N = n(612830),
  A = n(293173);
let m = [n(198087), T, f, S, N, h, A];

function O(e) {
  let {
    userId: t
  } = e, [n, s] = r.useState(!1);
  return r.useLayoutEffect(() => {
    !n && s(!0)
  }, [n]), (0, i.jsx)("div", {
    className: I.wumpusWrapper,
    children: (0, i.jsxs)("div", {
      className: o()(I.wumpus, {
        [I.wumpusShown]: n
      }),
      children: [(0, i.jsx)("img", {
        className: I.wumpusImage,
        alt: E.Z.Messages.IMG_ALT_ICON.format({
          name: E.Z.Messages.WUMPUS
        }),
        src: m[parseInt(t.slice(-6), 10) % m.length]
      }), (0, i.jsxs)(l.Text, {
        variant: "text-sm/normal",
        children: [E.Z.Messages.USER_POPOUT_WUMPUS_TOOLTIP, "???"]
      })]
    })
  })
}

function R(e) {
  let {
    user: t,
    setNote: n,
    canDM: r,
    onClose: s
  } = e, {
    trackUserProfileAction: o
  } = (0, d.KZ)(), l = r && (0, _.EO)(t) && !t.bot;
  return (0, i.jsxs)(c.Z, {
    className: I.section,
    lastSection: !0,
    children: [l && r ? (0, i.jsx)(O, {
      userId: t.id
    }) : null, r ? (0, i.jsx)(u.Z, {
      className: I.messageInputContainer,
      inputClassName: I.messageInput,
      user: t,
      autoFocus: !a.tq && !n,
      onSend: () => {
        o({
          action: "SEND_DIRECT_MESSAGE"
        }), null == s || s()
      }
    }) : null]
  })
}