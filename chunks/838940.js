n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(528027),
  o = n(686807),
  c = n(113318),
  u = n(384348);

function d(e) {
  let {
benefit: t,
guildId: n
  } = e, s = (0, c.Z)(n, t.ref_id), d = (0, i.jsx)(l.Z, {
guildId: n,
emojiId: t.emoji_id,
emojiName: t.emoji_name
  }), _ = null != s ? (0, i.jsx)(r.Clickable, {
className: u.__invalid_channelLink,
onClick: s.navigateToChannel,
'aria-label': s.ariaLabel,
role: 'link',
children: (0, i.jsx)(r.Text, {
  variant: 'text-md/medium',
  color: 'header-primary',
  className: a()(u.name, u.linkedName),
  children: (0, o.Z)(t)
})
  }) : (0, i.jsx)(r.Text, {
variant: 'text-md/medium',
color: 'header-primary',
className: u.name,
children: (0, o.Z)(t)
  });
  return (0, i.jsxs)('div', {
className: u.container,
children: [
  (0, i.jsxs)('div', {
    className: u.infoContainer,
    children: [
      _,
      (0, i.jsx)(r.Text, {
        color: 'interactive-normal',
        variant: 'text-sm/normal',
        children: t.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: u.emojiContainer,
    children: d
  })
]
  });
}