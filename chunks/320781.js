n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(471445),
  r = n(456269),
  o = n(660189),
  c = n(257511),
  d = n(967128),
  u = n(689938),
  h = n(865678);

function p(e) {
  var t;
  let {
channel: n
  } = e, p = (0, r.eV)(n), {
firstMessage: m
  } = (0, a.cj)([o.Z], () => o.Z.getMessage(n.id)), _ = new Set((0, r.kn)(n, p)), f = null !== (t = (0, s.KS)(n)) && void 0 !== t ? t : l.ChatIcon;
  return (0, i.jsxs)(d.ZP, {
channelId: n.id,
className: h.container,
children: [
  (0, i.jsx)('div', {
    className: h.iconWrapper,
    children: (0, i.jsx)(f, {
      className: h.icon,
      strokeWidth: 1.75
    })
  }),
  (0, i.jsx)(d.Ot, {
    className: h.header,
    children: n.name
  }),
  null == m && (0, i.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: u.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
  }),
  (0, i.jsx)(c.Z, {
    appliedTags: _
  })
]
  });
}