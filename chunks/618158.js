n.d(t, {
  Y: function() {
return o;
  },
  Z: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(937995);

function o(e) {
  let {
onPreventIdle: t,
onAllowIdle: n,
onActive: r
  } = i.useContext(a.nM), o = i.useCallback(() => {
t(e);
  }, [
e,
t
  ]);
  return {
preventIdle: o,
allowIdle: i.useCallback(() => {
  n(e);
}, [
  e,
  n
]),
onActive: r
  };
}

function s(e) {
  let {
children: t,
className: n
  } = e, {
onForceIdle: s,
onActive: l
  } = i.useContext(a.nM), {
preventIdle: u,
allowIdle: c
  } = o('interact');
  i.useEffect(() => () => c(), [c]);
  let d = i.useCallback(e => {
var t;
let n = null !== (t = e.target.ownerDocument) && void 0 !== t ? t : document;
if (!e.currentTarget.contains(n.activeElement))
  s();
  }, [s]);
  return (0, r.jsx)('div', {
className: n,
onMouseEnter: u,
onMouseLeave: c,
onFocus: l,
onBlur: d,
children: t
  });
}