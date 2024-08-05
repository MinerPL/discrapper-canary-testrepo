n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(763472),
  a = n(49012),
  s = n(591759),
  o = n(915863);

function l(e) {
  let {
activity: t,
color: n,
user: l,
look: u,
onAction: c
  } = e;
  if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1)
return null;
  async function d(e, t, n) {
try {
  let r = await (0, i.sd)(e, t);
  if (r.button_urls.length <= n)
    return;
  let o = r.button_urls[n];
  if ('string' != typeof o)
    return;
  let l = s.Z.safeParseWithQuery(o);
  if (null == l || null == l.protocol || null == l.hostname)
    return;
  (0, a.q)({
    href: s.Z.format(l),
    trusted: !1
  });
} catch (e) {}
  }
  return (0, r.jsx)(r.Fragment, {
children: t.buttons.map((e, i) => (0, r.jsx)(o.Z, {
  color: n,
  look: u,
  onClick: () => {
    null == c || c(), d(t, l.id, i);
  },
  children: e
}, 'customButton-'.concat(i)))
  });
}