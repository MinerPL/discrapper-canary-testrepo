i.d(n, {
  Z: function() {
return d;
  }
});
var t = i(735250);
i(470079);
var a = i(481060),
  r = i(463571),
  o = i(744142),
  l = i(981631),
  s = i(689938),
  c = i(563727);

function d(e) {
  let {
applications: n,
className: i,
listingClassName: o,
title: d,
showViewAll: _,
onViewOne: p,
onViewAll: m
  } = e;
  return (0, t.jsxs)('div', {
className: i,
children: [
  null != d ? (0, t.jsxs)('div', {
    className: c.header,
    children: [
      (0, t.jsx)(a.Heading, {
        variant: 'heading-lg/semibold',
        children: d
      }),
      _ ? (0, t.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        onClick: m,
        children: s.Z.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
      }) : null
    ]
  }) : null,
  (0, t.jsx)('ul', {
    className: c.list,
    children: n.map(e => (0, t.jsx)(r.Z, {
      href: l.Z5c.APPLICATION_DIRECTORY_PROFILE(e.id),
      children: (0, t.jsx)(u, {
        className: o,
        application: e,
        onClick: n => {
          let {
            mutualGuilds: i
          } = n;
          return p({
            application: e,
            mutualGuilds: i
          });
        }
      })
    }, e.id))
  })
]
  });
}

function u(e) {
  return (0, t.jsx)(o.Z, {
...e
  });
}