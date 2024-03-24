"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("65597"),
  o = n("384997"),
  u = n("162771"),
  d = n("120363"),
  c = n("994428"),
  f = n("13972");
let E = s.memo(function(e) {
  var t, n, l;
  let {
    state: r,
    markAsDismissed: o
  } = e, {
    name: u,
    guildId: d,
    boundingRect: c
  } = r, E = s.useMemo(() => {
    var e, t, n;
    return e = 0, t = 0, n = 0, null
  }, [u, d, o]);
  if (null == E) return null;
  return (0, a.jsx)("div", {
    className: i(f.upsell, !(null != (t = c) && !(t.y < 0)) && f.hidden),
    style: (n = 0, null == (l = c) ? {} : {
      top: l.top,
      left: l.right - l.x
    }),
    children: E
  })
});

function h() {
  let e = (0, r.useStateFromStores)([u.default], () => u.default.getGuildId()),
    t = (0, d.useChannelListUpsells)(e),
    [n, s] = (0, o.useSelectedDismissibleContent)(Object.values(t).filter(e => {
      let {
        disabled: t
      } = e;
      return !t
    }).map(e => {
      let {
        name: t
      } = e;
      return t
    }), c.DismissibleContentGroupName.SIDEBAR);
  if (null == n) return null;
  let l = t[n];
  return null == l ? null : (0, a.jsx)("div", {
    className: f.container,
    children: (0, a.jsx)(E, {
      state: l,
      markAsDismissed: s
    })
  })
}