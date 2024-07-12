n.d(t, {
  _: function() {
return _;
  }
});
var i = n(735250),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(52689),
  o = n(49898),
  c = n(689938),
  d = n(876425);

function u(e) {
  let {
config: t,
selected: n,
handleSelectPage: s
  } = e;
  return (0, i.jsxs)(r.Clickable, {
onClick: () => s(t.slug),
className: a()(d.navItem, {
  [d.selectedNavItem]: n
}),
children: [
  (0, i.jsx)('div', {
    className: d.navItemIcon,
    children: function(e) {
      switch (e) {
        case o.SM.SERVERS:
          return (0, i.jsx)(r.ServerIcon, {
            color: 'currentColor'
          });
        case o.SM.APPS:
          return (0, i.jsx)(r.AppsIcon, {
            color: 'currentColor'
          });
        case o.SM.QUESTS:
          return (0, i.jsx)(r.QuestsIcon, {
            color: 'currentColor'
          });
        case o.SM.SHOP:
          return (0, i.jsx)(r.ShopSparkleIcon, {
            color: 'currentColor'
          });
        default:
          return null;
      }
    }(t.slug)
  }),
  (0, i.jsx)(r.Text, {
    variant: 'text-md/normal',
    color: 'none',
    children: t.title
  })
]
  });
}

function _() {
  let {
config: e,
selectedPage: t,
handleSelectPage: n
  } = (0, l.Z)();
  return (0, i.jsxs)('div', {
className: d.container,
children: [
  (0, i.jsx)('div', {
    className: d.header,
    children: (0, i.jsx)(r.Heading, {
      variant: 'text-lg/semibold',
      children: c.Z.Messages.GLOBAL_DISCOVERY_TITLE
    })
  }),
  (0, i.jsx)('nav', {
    className: d.nav,
    children: e.map(e => (0, i.jsx)(u, {
      config: e,
      selected: t === e.slug,
      handleSelectPage: n
    }, e.slug))
  })
]
  });
}