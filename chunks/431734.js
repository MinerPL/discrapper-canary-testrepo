"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
});
var l = a("37983"),
  n = a("884691"),
  r = a("414456"),
  i = a.n(r),
  s = a("446674"),
  u = a("77078"),
  o = a("308289"),
  d = a("697218"),
  c = a("564875"),
  f = a("449008"),
  m = a("387111"),
  v = a("782340"),
  p = a("655357");

function h(e) {
  let {
    user: t
  } = e, a = m.default.useName(null, null, t);
  return (0, l.jsxs)("div", {
    className: p.userItem,
    children: [(0, l.jsx)(o.default, {
      user: t
    }), (0, l.jsx)(u.Text, {
      color: "header-primary",
      variant: "text-sm/medium",
      children: a
    })]
  })
}

function x(e) {
  let {
    clip: t,
    className: a
  } = e, r = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = n.useCallback(e => {
    let {
      row: t
    } = e, a = r[t];
    return null == a ? null : (0, l.jsx)(h, {
      user: a
    }, t)
  }, [r]);
  return (0, l.jsxs)("div", {
    className: i(a, p.root),
    children: [(0, l.jsx)("div", {
      className: p.header,
      children: (0, l.jsxs)(u.FormTitle, {
        className: p.title,
        children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, l.jsxs)("div", {
          className: p.userCountPill,
          children: [(0, l.jsx)(u.Text, {
            color: "text-normal",
            variant: "text-xs/medium",
            children: r.length
          }), (0, l.jsx)(c.default, {
            className: p.userCountIcon
          })]
        })]
      })
    }), (0, l.jsx)(u.List, {
      className: p.userList,
      sectionHeight: 0,
      rowHeight: 40,
      sections: [r.length],
      renderRow: o
    })]
  })
}