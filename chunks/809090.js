"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(806519),
  l = n(768581),
  u = n(895924),
  _ = n(588970),
  d = n(970952);

function c(e) {
  let {
    section: t,
    isSelected: n,
    width: s,
    height: c,
    className: E,
    selectable: I = !1,
    onFocus: T,
    onBlur: h,
    onMouseOver: S,
    onMouseLeave: f,
    ...N
  } = e, [A, m] = r.useState(!1), O = r.useCallback(() => {
    m(!0), null == T || T()
  }, [T]), R = r.useCallback(() => {
    m(!1), null == h || h()
  }, [h]), C = r.useCallback(() => {
    m(!0), null == S || S()
  }, [S]), p = r.useCallback(() => {
    m(!1), null == f || f()
  }, [f]), g = r.useMemo(() => {
    if (t.type === u.Qi.APPLICATION) {
      var e;
      return l.ZP.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
        botIconFirst: !0,
        size: s
      })
    }
    return d
  }, [t, s]);
  return (0, i.jsx)("div", {
    ...N,
    className: o()(_.wrapper, E, {
      [_.selectable]: I,
      [_.selected]: I && n
    }),
    onFocus: O,
    onBlur: R,
    onMouseOver: C,
    onMouseLeave: p,
    children: (0, i.jsx)(a.ZP, {
      className: _.mask,
      mask: I && (n || A) ? a.QS.SQUIRCLE : a.QS.AVATAR_DEFAULT,
      width: s,
      height: c,
      children: (0, i.jsx)("img", {
        alt: "",
        className: _.icon,
        style: {
          width: s,
          height: c
        },
        src: g
      })
    })
  })
}