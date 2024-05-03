"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("735250");
r("470079");
var i = r("442837"),
  l = r("481060"),
  n = r("800599"),
  o = r("594174"),
  s = r("681619"),
  c = r("974747"),
  d = r("893048");
let u = [{
  key: "user",
  cellClassName: c.userCell,
  render(e) {
    var t;
    let {
      user: r,
      key: a
    } = e;
    return null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : a
  }
}, {
  key: "affinity",
  cellClassName: c.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return "".concat(t)
  }
}];

function h() {
  let e = (0, i.useStateFromStoresArray)([n.default, o.default], () => n.default.getUserAffinities().map(e => {
    let {
      user_id: t,
      affinity: r
    } = e;
    return {
      user: o.default.getUser(t),
      affinity: r,
      key: t
    }
  }));
  return 0 === e.length ? null : (0, a.jsx)(l.ScrollerThin, {
    children: (0, a.jsx)(s.default, {
      className: d.panel,
      columns: u,
      rowClassName: c.row,
      data: e
    })
  })
}