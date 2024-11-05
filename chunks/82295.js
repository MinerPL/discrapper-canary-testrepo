var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(540059),
    l = n(996479);
t.Z = (e) => {
    let { className: t, children: n, 'aria-label': i, id: u } = e;
    return (0, o.Q)('ListSectionItem')
        ? (0, r.jsx)(s.Text, {
              variant: 'text-xs/semibold',
              className: a()(t, l.container),
              'aria-label': i,
              id: u,
              children: n
          })
        : (0, r.jsx)(s.H, {
              className: a()(t, l.container, l.text),
              'aria-label': i,
              id: u,
              children: n
          });
};
