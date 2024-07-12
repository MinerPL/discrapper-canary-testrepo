n.d(t, {
  h: function() {
return u;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(481060),
  r = n(909820),
  o = n(740492),
  c = n(937995),
  d = n(618158);

function u(e) {
  let {
buttonRef: t,
dismissed: n,
onDismiss: u,
renderComponent: h
  } = e, p = a.useContext(c.h9), [m, _] = a.useState(''), [f, E] = a.useState(!1), C = (0, l.e7)([o.ZP], () => o.ZP.callHeaderHeight), g = a.createRef(), I = a.useRef(0);
  a.useEffect(() => {
var e, t;
_(String(I.current)), E(void 0 !== C && C < (null !== (t = null === (e = g.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), I.current += 1;
  }, [
C,
g
  ]);
  let {
preventIdle: x,
allowIdle: T
  } = (0, d.Y)('popup');
  return (null == t ? void 0 : t.current) == null ? null : (0, i.jsx)(r.ZP, {
children: (0, i.jsx)(s.ReferencePositionLayer, {
  targetRef: t,
  position: 'top',
  align: 'center',
  spacing: 0,
  nudgeAlignIntoViewport: !1,
  positionKey: m,
  children: () => (0, i.jsx)('div', {
    ref: g,
    onMouseOver: x,
    onFocus: x,
    onBlur: T,
    onMouseLeave: T,
    children: h({
      hidden: f || p || n,
      onDismiss: u
    })
  })
})
  });
}