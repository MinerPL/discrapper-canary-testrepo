"use strict";
n.d(t, {
  Z: function() {
    return D
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(350810),
  u = n(579806),
  _ = n(40851),
  d = n(358221),
  c = n(754347),
  E = n(428548),
  I = n(718759),
  T = n(679219),
  h = n(835225),
  S = n(939039),
  f = n(117795),
  N = n(358085),
  A = n(792125),
  m = n(998502),
  O = n(689938),
  R = n(577944);
let C = e => m.ZP.close(e),
  p = e => m.ZP.minimize(e),
  g = (e, t) => {
    (0, N.isMac)() && !t.altKey ? m.ZP.fullscreen(e) : m.ZP.maximize(e)
  },
  L = e => {
    let {
      windowKey: t,
      themeOverride: n,
      hasOpenLayer: r
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(R.typeWindows, (0, A.Q)(n), {
        [R.withBackgroundOverride]: !r
      }),
      children: [(0, i.jsx)("div", {
        className: R.wordmarkWindows,
        children: (0, i.jsx)(c.Z, {})
      }), (0, i.jsx)(a.Clickable, {
        className: R.winButtonClose,
        onClick: () => C(t),
        "aria-label": O.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
        tabIndex: -1,
        children: (0, i.jsx)(E.Z, {})
      }), (0, i.jsx)(a.Clickable, {
        className: R.winButtonMinMax,
        onClick: e => g(t, e),
        "aria-label": O.Z.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, i.jsx)(T.Z, {})
      }), (0, i.jsx)(a.Clickable, {
        className: R.winButtonMinMax,
        onClick: () => p(t),
        "aria-label": O.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, i.jsx)(S.Z, {})
      })]
    })
  },
  v = e => {
    let {
      focused: t,
      windowKey: n,
      frame: r,
      themeOverride: o,
      hasOpenLayer: l
    } = e;
    return (0, i.jsxs)(a.Clickable, {
      className: s()(r ? R.typeMacOSWithFrame : R.typeMacOS, t ? R.focused : R.unfocused, (0, A.Q)(o), {
        [R.withBackgroundOverride]: !l
      }),
      onDoubleClick: () => m.ZP.maximize(n),
      tabIndex: -1,
      children: [u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, i.jsx)("div", {
        className: R.macDragRegion
      }) : (0, i.jsxs)("div", {
        className: R.macButtons,
        children: [(0, i.jsx)(a.Clickable, {
          className: R.macButtonClose,
          onClick: () => C(n),
          "aria-label": O.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
          tabIndex: -1,
          children: (0, i.jsx)(I.Z, {
            color: "#4c0000"
          })
        }), (0, i.jsx)(a.Clickable, {
          className: R.macButtonMinimize,
          onClick: () => p(n),
          "aria-label": O.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
          tabIndex: -1,
          children: (0, i.jsx)(f.Z, {
            color: "#975500"
          })
        }), (0, i.jsx)(a.Clickable, {
          className: R.macButtonMaximize,
          onClick: e => g(n, e),
          "aria-label": O.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
          tabIndex: -1,
          children: (0, i.jsx)(h.Z, {
            color: "#006500"
          })
        })]
      }), r ? (0, i.jsx)("div", {
        className: R.wordmarkMacOS,
        children: (0, i.jsx)(c.Z, {
          color: "#ffffff"
        })
      }) : null]
    })
  };

function D(e) {
  let {
    focused: t,
    type: n,
    windowKey: r,
    macOSFrame: s = !1,
    themeOverride: a
  } = e, u = (0, _.bp)(), c = (0, o.e7)([d.Z], () => d.Z.isFullscreenInContext(u)), E = (0, l.Z)();
  if (c) return null;
  switch (n) {
    case N.PlatformTypes.WINDOWS:
      return (0, i.jsx)(L, {
        windowKey: r,
        themeOverride: a,
        hasOpenLayer: E
      });
    case N.PlatformTypes.OSX:
      return (0, i.jsx)(v, {
        focused: t,
        windowKey: r,
        frame: s,
        themeOverride: a,
        hasOpenLayer: E
      });
    default:
      return null
  }
}