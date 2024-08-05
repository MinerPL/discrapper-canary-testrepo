n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(806519),
  l = n(768581),
  u = n(895924),
  c = n(481972),
  d = n(970952);

function _(e) {
  let {
section: t,
isSelected: n,
width: a,
height: _,
className: E,
selectable: f = !1,
onFocus: h,
onBlur: p,
onMouseOver: m,
onMouseLeave: I,
...T
  } = e, [g, S] = i.useState(!1), A = i.useCallback(() => {
S(!0), null == h || h();
  }, [h]), N = i.useCallback(() => {
S(!1), null == p || p();
  }, [p]), v = i.useCallback(() => {
S(!0), null == m || m();
  }, [m]), O = i.useCallback(() => {
S(!1), null == I || I();
  }, [I]), R = i.useMemo(() => {
if (t.type === u.Qi.APPLICATION) {
  var e;
  return l.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
    botIconFirst: !0,
    size: a
  });
}
return d;
  }, [
t,
a
  ]);
  return (0, r.jsx)('div', {
...T,
className: s()(c.wrapper, E, {
  [c.selectable]: f,
  [c.selected]: f && n
}),
onFocus: A,
onBlur: N,
onMouseOver: v,
onMouseLeave: O,
children: (0, r.jsx)(o.ZP, {
  className: c.mask,
  mask: f && (n || g) ? o.QS.SQUIRCLE : o.QS.AVATAR_DEFAULT,
  width: a,
  height: _,
  children: (0, r.jsx)('img', {
    alt: '',
    className: c.icon,
    style: {
      width: a,
      height: _
    },
    src: R
  })
})
  });
}