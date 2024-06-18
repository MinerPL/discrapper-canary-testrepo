"use strict";
n.d(t, {
  Z: function() {
    return A
  },
  r: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(692547),
  l = n(215569),
  u = n(481060),
  _ = n(19780),
  d = n(285952),
  c = n(470441),
  E = n(824717),
  I = n(727218),
  T = n(540028),
  h = n(507675),
  S = n(689938),
  f = n(376838);

function N(e) {
  let {
    title: t,
    onJumpToChannel: n,
    idle: r,
    preventIdleComponent: s
  } = e, l = (0, o.e7)([_.Z], () => _.Z.getChannelId()), d = null != l ? (0, i.jsx)(T.Z, {
    voiceChannelId: l,
    idle: r
  }) : null;
  return (0, i.jsxs)(s, {
    className: f.headerIdleContainer,
    children: [(0, i.jsxs)(u.Clickable, {
      className: f.headerTitle,
      onClick: n,
      children: [(0, i.jsx)(E.Z, {
        "aria-label": S.Z.Messages.OPEN_IN_THEATER,
        className: f.backButton,
        width: 20,
        height: 20
      }), (0, i.jsx)(I.Z, {
        className: f.headerText,
        size: I.Z.Sizes.SIZE_16,
        color: a.Z.unsafe_rawColors.WHITE_500.css,
        children: t
      })]
    }), d]
  })
}

function A(e) {
  let {
    children: t,
    idle: n,
    onJumpToChannel: r,
    backgroundKey: o,
    onActive: a,
    onForceIdle: u,
    renderBottomLeftControls: _,
    renderBottomRightControls: E,
    screenMessage: I,
    hideControls: T = !1,
    className: S,
    innerClassName: A,
    ...m
  } = e;
  return (0, i.jsxs)("div", {
    onMouseMove: a,
    onMouseDown: a,
    onMouseLeave: u,
    className: s()(f.pictureInPictureVideo, {
      [f.idle]: n
    }, S),
    onDoubleClick: r,
    children: [(0, i.jsx)(l.W, {
      children: (0, i.jsx)(c.B, {
        className: A,
        children: t
      }, o)
    }), null != I ? (0, i.jsx)(h.Z, {
      size: "small",
      ...I
    }) : null, !T && (0, i.jsxs)("div", {
      className: f.videoControls,
      children: [(0, i.jsx)("div", {
        className: f.topControls,
        children: (0, i.jsx)(N, {
          idle: n,
          onJumpToChannel: r,
          ...m
        })
      }), (0, i.jsxs)("div", {
        className: f.bottomControls,
        children: [(0, i.jsx)(d.Z, {
          grow: 0,
          shrink: 1,
          basis: "50%",
          align: d.Z.Align.CENTER,
          className: f.bottomLeftControls,
          children: null == _ ? void 0 : _()
        }), (0, i.jsx)(d.Z, {
          grow: 0,
          shrink: 1,
          justify: d.Z.Justify.END,
          basis: "50%",
          align: d.Z.Align.CENTER,
          children: null == E ? void 0 : E()
        })]
      })]
    })]
  })
}