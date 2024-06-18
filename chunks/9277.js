"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(143927),
  l = n(442837),
  u = n(114101),
  _ = n(481060),
  d = n(28546),
  c = n(581883),
  E = n(147915),
  I = n(459273),
  T = n(981631),
  h = n(957825),
  S = n(689938),
  f = n(838329);
t.Z = r.memo(r.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: s
  } = e, [N, A] = r.useState(!1), m = (0, l.e7)([c.Z], () => {
    var e, t;
    return N && Object.values(null !== (t = null === (e = c.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
  }), [O, R, C] = (0, d.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], a.Z), p = r.useRef(0), g = r.useCallback(() => {
    A(!0), clearTimeout(p.current), p.current = setTimeout(() => {
      A(!1), p.current = 0
    }, 2e3)
  }, []);
  (0, I.yp)({
    event: T.CkL.FAVORITE_GIF,
    handler: g
  });
  let L = r.useCallback(() => {
      (0, d.RO)(h.X1.GIF, s)
    }, [s]),
    {
      Component: v,
      events: D,
      play: M
    } = (0, u.V)();
  if (n) return null;
  let P = O === h.X1.GIF && R === s;
  return (0, i.jsx)(_.Tooltip, {
    text: m ? S.Z.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
    forceOpen: !0,
    children: e => (0, i.jsx)("div", {
      ref: t,
      className: o()(h.CT, f.buttonContainer),
      ...e,
      children: (0, i.jsx)(E.Z, {
        innerClassName: f.button,
        onMouseEnter: D.onMouseEnter,
        onMouseLeave: D.onMouseLeave,
        onClick: () => {
          L(), M()
        },
        isActive: P,
        pulse: N,
        "aria-label": S.Z.Messages.GIF_BUTTON_LABEL,
        "aria-expanded": P,
        "aria-haspopup": "dialog",
        "aria-controls": C,
        children: (0, i.jsx)(v, {
          color: "currentColor"
        })
      })
    })
  })
}))