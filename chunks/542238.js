n.d(t, {
  t: function() {
return l;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(258609),
  o = n(240902);

function l(e) {
  let {
body: t,
dismissCallback: n,
errorCodeMessage: l
  } = e, u = (0, a.e7)([s.Z], () => s.Z.getRemoteSessionId());
  return (i.useEffect(() => {
null != u && n();
  }, [
u,
n
  ]), null == l) ? (0, r.jsx)(r.Fragment, {
children: t
  }) : (0, r.jsxs)(r.Fragment, {
children: [
  t,
  (0, r.jsx)('div', {
    className: o.errorCodeMessage,
    children: l
  })
]
  });
}