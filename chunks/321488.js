var i, s, a = n(735250);
n(470079);
var r = n(120356),
  l = n.n(r),
  o = n(873546),
  c = n(481060),
  d = n(446122);

function u(e) {
  let {
icon: t,
tooltip: n,
onClick: i,
actionType: s = 2,
shouldHighlight: r
  } = e;
  return (0, a.jsx)(c.Tooltip, {
text: n,
children: e => (0, a.jsx)(c.Clickable, {
  ...e,
  'aria-label': n,
  onClick: i,
  className: l()(d.actionButton, {
    [d.actionAccept]: 0 === s,
    [d.actionDeny]: 1 === s,
    [d.highlight]: r,
    [d.actionButtonMobile]: o.tq
  }),
  children: (0, a.jsx)(t, {
    className: d.icon,
    color: 'currentColor'
  })
})
  });
}
(i = s || (s = {}))[i.ACCEPT = 0] = 'ACCEPT', i[i.DENY = 1] = 'DENY', i[i.DEFAULT = 2] = 'DEFAULT', u.ActionTypes = s, t.Z = u;