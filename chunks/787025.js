"use strict";
n.d(t, {
  G: function() {
    return S
  },
  j: function() {
    return f
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(466377),
  l = n(481060),
  u = n(252618),
  _ = n(612744),
  d = n(449934),
  c = n(792125),
  E = n(981631),
  I = n(756286),
  T = n(689938),
  h = n(897456);

function S(e) {
  let {
    children: t,
    wrapperClassName: n,
    embedded: s
  } = e, [a, S] = r.useState(I.hO.INITIAL), f = r.useCallback(e => {
    S(t => Math.max(t, e))
  }, []);
  return (0, u.Tt)({
    location: T.Z.Messages.OAUTH2_TITLE
  }), (0, i.jsx)(l.ThemeContextProvider, {
    theme: E.BRd.DARK,
    children: (0, i.jsx)(_.Z, {
      embedded: s,
      className: o()((0, c.Q)(E.BRd.DARK), h.wave),
      splash: (0, d.gK)(),
      waveState: a,
      showLogo: !0,
      updateWaveState: f,
      children: (0, i.jsx)("div", {
        className: o()(h.oauth2Wrapper, n),
        children: t
      })
    })
  })
}

function f(e) {
  let {
    children: t,
    transitionState: n,
    ...r
  } = e;
  return (0, i.jsx)(a.Y0, {
    size: a.Cg.DYNAMIC,
    transitionState: n,
    className: h.oauth2Wrapper,
    ...r,
    children: t
  })
}