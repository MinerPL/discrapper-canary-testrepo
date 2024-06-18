"use strict";
n.d(t, {
  J: function() {
    return T
  },
  q: function() {
    return h
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(524437),
  o = n(781391),
  a = n(740492),
  l = n(581883),
  u = n(626135),
  _ = n(238302),
  d = n(514361),
  c = n(981631),
  E = n(474936),
  I = n(874893);
let T = () => {
    let e = (0, r.e7)([d.Z], () => d.Z.gradientPreset),
      t = (0, r.e7)([a.ZP], () => a.ZP.useSystemTheme === I.K.ON),
      [n, s] = (0, i.useState)(t);
    return (0, i.useEffect)(() => {
      if (null == e) s(t)
    }, [e, t]), (0, i.useCallback)(() => {
      if (null == e) return;
      if ((0, _.kj)(), !!n)(0, o.hi)(I.K.ON)
    }, [e, n])
  },
  h = () => {
    let {
      previewPaneVariant: e
    } = (0, r.cj)([d.Z], () => ({
      previewPaneVariant: d.Z.isPreview ? E.h1.FREE : E.h1.PREMIUM_STANDARD
    })), t = (0, r.e7)([l.Z], () => {
      var e;
      let t = null === (e = l.Z.settings.appearance) || void 0 === e ? void 0 : e.theme;
      return "default ".concat(t === s.Q2.LIGHT ? c.BRd.LIGHT : c.BRd.DARK)
    });
    return (0, i.useCallback)(n => {
      u.default.track(n, {
        preview_pane_variant: e,
        original_theme: t
      })
    }, [e, t])
  }