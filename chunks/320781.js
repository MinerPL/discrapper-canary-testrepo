n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(471445),
  r = n(456269),
  o = n(660189),
  c = n(257511),
  u = n(967128),
  d = n(689938),
  h = n(472934);

function m(e) {
  var t;
  let {
channel: n
  } = e, m = (0, r.eV)(n), {
firstMessage: p
  } = (0, a.cj)([o.Z], () => o.Z.getMessage(n.id)), _ = new Set((0, r.kn)(n, m)), f = null !== (t = (0, l.KS)(n)) && void 0 !== t ? t : s.ChatIcon;
  return (0, i.jsxs)(u.ZP, {
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
  (0, i.jsx)(u.Ot, {
    className: h.header,
    children: n.name
  }),
  null == p && (0, i.jsx)(s.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: d.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
  }),
  (0, i.jsx)(c.Z, {
    appliedTags: _
  })
]
  });
}