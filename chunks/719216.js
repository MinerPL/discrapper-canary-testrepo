"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(763472),
  s = n(49012),
  o = n(591759),
  a = n(915863);

function l(e) {
  let {
    activity: t,
    color: n,
    user: l,
    look: u,
    onAction: _
  } = e;
  if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
  async function d(e, t, n) {
    try {
      let i = await (0, r.sd)(e, t);
      if (i.button_urls.length <= n) return;
      let a = i.button_urls[n];
      if ("string" != typeof a) return;
      let l = o.Z.safeParseWithQuery(a);
      if (null == l || null == l.protocol || null == l.hostname) return;
      (0, s.q)({
        href: o.Z.format(l),
        trusted: !1
      })
    } catch (e) {}
  }
  return (0, i.jsx)(i.Fragment, {
    children: t.buttons.map((e, r) => (0, i.jsx)(a.Z, {
      color: n,
      look: u,
      onClick: () => {
        null == _ || _(), d(t, l.id, r)
      },
      children: e
    }, "customButton-".concat(r)))
  })
}