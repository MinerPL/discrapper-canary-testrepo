"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("394846"),
  o = l("77078"),
  u = l("450911"),
  d = l("36341"),
  c = l("109264"),
  f = l("158998"),
  m = l("777003"),
  p = l("782340"),
  T = l("242379"),
  E = l("107680"),
  _ = l("379539"),
  S = l("714073"),
  h = l("980923"),
  I = l("779585"),
  A = l("900143"),
  g = l("923337");
let v = [g, E, h, S, I, _, A];

function C(e) {
  let {
    userId: t
  } = e, [l, s] = a.useState(!1);
  return a.useLayoutEffect(() => {
    !l && s(!0)
  }, [l]), (0, n.jsx)("div", {
    className: T.wumpusWrapper,
    children: (0, n.jsxs)("div", {
      className: i(T.wumpus, {
        [T.wumpusShown]: l
      }),
      children: [(0, n.jsx)("img", {
        className: T.wumpusImage,
        alt: p.default.Messages.IMG_ALT_ICON.format({
          name: p.default.Messages.WUMPUS
        }),
        src: function() {
          let e = parseInt(t.slice(-6), 10);
          return v[e % v.length]
        }()
      }), (0, n.jsx)("span", {
        className: T.wumpusTooltip,
        children: p.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
      })]
    })
  })
}

function N(e) {
  let {
    user: t,
    setNote: l,
    canDM: a,
    onClose: s,
    inClydeProfilesExperiment: i = !1
  } = e;
  if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && i || !a) return null;
  let E = a && (0, f.isNewUser)(t) && !t.bot;
  return (0, n.jsxs)(m.default, {
    className: T.section,
    lastSection: !0,
    children: [E && a ? (0, n.jsx)(C, {
      userId: t.id
    }) : null, a && t.isClyde() ? (0, n.jsxs)(o.Button, {
      className: T.messageClydeButton,
      innerClassName: T.messageClydeButtonInner,
      onClick: () => {
        u.default.openPrivateChannel(t.id)
      },
      fullWidth: !0,
      look: o.ButtonLooks.INVERTED,
      children: [(0, n.jsx)(c.default, {
        width: 16,
        height: 16,
        className: T.messageClydeButtonIcon
      }), p.default.Messages.CLYDE_SEND_MESSAGE]
    }) : null, a && !t.isClyde() ? (0, n.jsx)(d.default, {
      className: T.messageInputContainer,
      inputClassName: T.messageInput,
      user: t,
      onClose: () => null == s ? void 0 : s(),
      autoFocus: !r.isMobile && !l
    }) : null]
  })
}