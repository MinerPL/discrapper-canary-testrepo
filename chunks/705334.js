n.d(t, {
  _: function() {
return I;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(143927),
  o = n(731965),
  c = n(481060),
  d = n(836768),
  u = n(766219),
  _ = n(49898),
  E = n(689938),
  h = n(671590);

function m(e) {
  let {
tab: t
  } = e, n = (0, d.d)(e => e.selectedPage === t, l.Z), s = a.useMemo(() => function(e) {
switch (e) {
  case _.F$.SERVERS:
    return (0, i.jsx)(c.ServerIcon, {
      color: 'currentColor'
    });
  case _.F$.QUESTS:
    return (0, i.jsx)(c.QuestsIcon, {
      color: 'currentColor'
    });
}
  }(t), [t]), E = a.useMemo(() => (0, u.sm)(t), [t]), m = a.useCallback(() => {
(0, o.j)(() => d.d.setState({
  selectedPage: t
}));
  }, [t]);
  return (0, i.jsxs)(c.Clickable, {
onClick: m,
className: r()(h.navItem, {
  [h.selected]: n
}),
children: [
  (0, i.jsx)('div', {
    className: h.navItemIcon,
    children: s
  }),
  (0, i.jsx)(c.Text, {
    variant: 'text-md/medium',
    color: 'none',
    children: E
  })
]
  });
}

function I() {
  return (0, i.jsxs)('div', {
className: h.container,
children: [
  (0, i.jsx)('div', {
    className: h.header,
    children: (0, i.jsx)(c.Heading, {
      variant: 'text-lg/semibold',
      children: E.Z.Messages.GLOBAL_DISCOVERY_TITLE
    })
  }),
  (0, i.jsx)('nav', {
    className: h.nav,
    children: _.mc.map(e => (0, i.jsx)(m, {
      tab: e
    }, e))
  })
]
  });
}