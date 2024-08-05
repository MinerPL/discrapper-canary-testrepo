n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(122611),
  r = n(18993);

function l(e) {
  let {
guild: t,
setHasSubheader: n
  } = e, l = a.useRef(null);
  return a.useLayoutEffect(() => {
let e = l.current;
null != e && n(e.childNodes.length > 0);
  }), (0, i.jsx)('div', {
className: r.container,
ref: l,
children: (0, i.jsx)(s.Z, {
  guild: t
})
  });
}