n.d(t, {
  Z: function() {
return f;
  },
  s: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(763472),
  a = n(394821),
  s = n(49012),
  o = n(591759),
  l = n(652853),
  u = n(475413),
  c = n(228168),
  d = n(689938),
  _ = n(692184);
async function E(e) {
  let {
activity: t,
user: n,
index: r
  } = e;
  try {
let e = await (0, i.sd)(t, n.id);
if (e.button_urls.length <= r)
  return;
let a = e.button_urls[r];
if ('string' != typeof a)
  return;
let l = o.Z.safeParseWithQuery(a);
if (null == l || null == l.protocol || null == l.hostname)
  return;
(0, s.q)({
  href: o.Z.format(l),
  trusted: !1
});
  } catch (e) {}
}

function f(e) {
  let {
user: t,
activity: n,
onClick: i
  } = e, {
profileType: s
  } = (0, l.z)();
  return (null == n ? void 0 : n.buttons) == null || n.buttons.length < 1 ? null : (0, r.jsx)(r.Fragment, {
children: n.buttons.map((e, o) => (0, r.jsx)(u.tG, {
  text: (0, a.Z)(n) ? d.Z.Messages.WATCH : e,
  className: _.customButton,
  fullWidth: !0,
  themeColor: s === c.y0.FULL_SIZE ? 'secondary' : 'primary',
  onClick: e => {
    null == i || i(e), E({
      user: t,
      activity: n,
      index: o
    });
  }
}, o))
  });
}