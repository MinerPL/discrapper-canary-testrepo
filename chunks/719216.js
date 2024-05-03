"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("763472"),
  a = n("49012"),
  s = n("591759"),
  o = n("915863");

function l(e) {
  let {
    activity: t,
    color: n,
    user: l,
    look: u,
    onAction: d
  } = e;
  if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
  async function _(e, t, n) {
    try {
      let i = await (0, r.getMetadata)(e, t);
      if (i.button_urls.length <= n) return;
      let o = i.button_urls[n];
      if ("string" != typeof o) return;
      let l = s.default.safeParseWithQuery(o);
      if (null == l || null == l.protocol || null == l.hostname) return;
      (0, a.handleClick)({
        href: s.default.format(l),
        trusted: !1
      })
    } catch (e) {}
  }
  return (0, i.jsx)(i.Fragment, {
    children: t.buttons.map((e, r) => (0, i.jsx)(o.default, {
      color: n,
      look: u,
      onClick: () => {
        null == d || d(), _(t, l.id, r)
      },
      children: e
    }, "customButton-".concat(r)))
  })
}