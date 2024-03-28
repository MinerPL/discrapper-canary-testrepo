"use strict";
t.r(r), t.d(r, {
  default: function() {
    return h
  }
});
var a = t("735250");
t("470079");
var n = t("442837"),
  i = t("481060"),
  o = t("800599"),
  l = t("594174"),
  s = t("681619"),
  c = t("64823"),
  d = t("779869");
let u = [{
  key: "user",
  cellClassName: c.userCell,
  render(e) {
    var r;
    let {
      user: t,
      key: a
    } = e;
    return null !== (r = null == t ? void 0 : t.username) && void 0 !== r ? r : a
  }
}, {
  key: "affinity",
  cellClassName: c.affinityCell,
  render(e) {
    let {
      affinity: r
    } = e;
    return "".concat(r)
  }
}];

function h() {
  let e = (0, n.useStateFromStoresArray)([o.default, l.default], () => o.default.getUserAffinities().map(e => {
    let {
      user_id: r,
      affinity: t
    } = e;
    return {
      user: l.default.getUser(r),
      affinity: t,
      key: r
    }
  }));
  return 0 === e.length ? null : (0, a.jsx)(i.ScrollerThin, {
    children: (0, a.jsx)(s.default, {
      className: d.panel,
      columns: u,
      rowClassName: c.row,
      data: e
    })
  })
}