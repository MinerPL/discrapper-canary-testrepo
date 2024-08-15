n.d(t, {
  Z0: function() {
return l;
  },
  zx: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(621433);

function l(e) {
  let {
className: t
  } = e;
  return (0, r.jsx)('div', {
className: a()(t, o.separator)
  });
}

function u(e) {
  let {
onClick: t,
onContextMenu: n,
className: i,
selected: l = !1,
children: u,
disabled: c = !1,
dangerous: d,
..._
  } = e;
  return (0, r.jsx)(s.Clickable, {
onClick: c ? void 0 : t,
onContextMenu: c ? void 0 : n,
className: a()(i, {
  [o.button]: !0,
  [o.selected]: l,
  [o.disabled]: c,
  [o.dangerous]: d
}),
..._,
children: u
  });
}
t.ZP = function(e) {
  let {
className: t,
children: n
  } = e;
  return (0, r.jsx)('div', {
className: a()(t, o.wrapper),
children: n
  });
};