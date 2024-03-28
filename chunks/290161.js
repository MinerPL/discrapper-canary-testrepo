"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  l = n("442837"),
  s = n("481060"),
  o = n("490173"),
  r = n("40851"),
  d = n("503737"),
  u = n("823453"),
  c = n("962745"),
  f = n("367207"),
  h = n("241890"),
  p = n("396296"),
  g = n("672752"),
  m = n("153850"),
  E = n("806519"),
  S = n("649561"),
  v = n("631553"),
  y = n("981631");
n("792295"), n("308765"), l.default.initialize();
t.default = function() {
  return a.useEffect(() => (f.default.initialize(), d.default.initialize(), p.default.init(), h.default.init(), () => {
    f.default.terminate(), d.default.terminate()
  }), []), (0, i.jsxs)(a.Fragment, {
    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)(c.default, {
      children: (0, i.jsxs)(S.default, {
        children: [(0, i.jsx)(E.MaskLibrary, {}), (0, i.jsx)(g.default, {}), (0, i.jsx)(r.AppWindowContextProvider, {
          appContext: y.AppContext.OVERLAY,
          renderWindow: window,
          children: (0, i.jsxs)(m.AppLayerProvider, {
            children: [(0, i.jsx)(v.default, {}), (0, i.jsx)(s.Modals, {}), (0, i.jsx)(o.default, {}), (0, i.jsx)(m.AppLayerContainer, {})]
          })
        })]
      })
    })]
  })
}