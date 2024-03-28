"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
});
var l = a("735250"),
  n = a("470079"),
  i = a("803997"),
  r = a.n(i),
  s = a("442837"),
  u = a("481060"),
  o = a("99690"),
  d = a("594174"),
  c = a("988951"),
  m = a("823379"),
  f = a("5192"),
  v = a("689938"),
  p = a("672485");

function h(e) {
  let {
    user: t
  } = e, a = f.default.useName(null, null, t);
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
  } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(m.isNotNullish)), o = n.useCallback(e => {
    let {
      row: t
    } = e, a = i[t];
    return null == a ? null : (0, l.jsx)(h, {
      user: a
    }, t)
  }, [i]);
  return (0, l.jsxs)("div", {
    className: r()(a, p.root),
    children: [(0, l.jsx)("div", {
      className: p.__invalid_header,
      children: (0, l.jsxs)(u.FormTitle, {
        className: p.title,
        children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, l.jsxs)("div", {
          className: p.userCountPill,
          children: [(0, l.jsx)(u.Text, {
            color: "text-normal",
            variant: "text-xs/medium",
            children: i.length
          }), (0, l.jsx)(c.default, {
            className: p.userCountIcon
          })]
        })]
      })
    }), (0, l.jsx)(u.List, {
      className: p.__invalid_userList,
      sectionHeight: 0,
      rowHeight: 40,
      sections: [i.length],
      renderRow: o
    })]
  })
}