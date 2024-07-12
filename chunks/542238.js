n.d(t, {
  t: function() {
return l;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(258609),
  s = n(536773);

function l(e) {
  let {
body: t,
dismissCallback: n,
errorCodeMessage: l
  } = e, u = (0, a.e7)([o.Z], () => o.Z.getRemoteSessionId());
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
    className: s.errorCodeMessage,
    children: l
  })
]
  });
}