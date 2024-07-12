n.d(t, {
  Dw: function() {
return c;
  },
  RM: function() {
return _;
  },
  SC: function() {
return d;
  },
  iA: function() {
return f;
  },
  pj: function() {
return u;
  },
  xD: function() {
return E;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(227879),
  o = n(260034),
  s = n(993365),
  l = n(133065);

function u(e) {
  return (0, r.jsx)(a.bL, {
...e,
className: l.cell
  });
}

function c(e) {
  let {
children: t,
...n
  } = e;
  return (0, r.jsx)(a.sg, {
...n,
className: l.column,
children: (0, r.jsx)(s.x, {
  variant: 'eyebrow',
  className: l.columnText,
  children: t
})
  });
}

function d(e) {
  return (0, r.jsx)(a.X2, {
...e,
className: l.row
  });
}

function _(e) {
  return (0, r.jsx)(a.RM, {
...e,
className: l.body
  });
}

function E(e) {
  return (0, r.jsx)(a.xD, {
...e,
className: l.header
  });
}

function f(e) {
  let {
title: t,
header: n,
footer: s,
...u
  } = e, c = i.useId();
  return (0, r.jsxs)('div', {
className: l.container,
children: [
  (0, r.jsxs)('div', {
    className: l.toolbar,
    children: [
      (0, r.jsx)(o.X, {
        className: l.__invalid_title,
        variant: 'heading-md/semibold',
        id: c,
        children: t
      }),
      (0, r.jsx)('div', {
        children: n
      })
    ]
  }),
  (0, r.jsx)(a.iA, {
    ...u,
    'aria-labelledby': c,
    className: l.table
  }),
  null != s && (0, r.jsx)('div', {
    className: l.footer,
    children: s
  })
]
  });
}