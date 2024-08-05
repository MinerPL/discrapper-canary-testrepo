n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(259580),
  r = n(528027),
  l = n(686807),
  o = n(113318),
  c = n(720145);

function u(e) {
  let {
benefit: t,
guildId: n,
onClick: u
  } = e, d = (0, o.Z)(n, t.ref_id), _ = (0, i.jsx)(r.Z, {
guildId: n,
emojiId: t.emoji_id,
emojiName: t.emoji_name
  });
  return (0, i.jsxs)(s.Clickable, {
className: c.container,
onClick: () => {
  null == d || d.navigateToChannel(), u();
},
'aria-label': null == d ? void 0 : d.ariaLabel,
role: 'link',
children: [
  (0, i.jsx)('div', {
    className: c.emojiContainer,
    children: _
  }),
  (0, i.jsxs)('div', {
    className: c.infoContainer,
    children: [
      (0, i.jsx)(s.Text, {
        variant: 'text-md/medium',
        color: 'header-primary',
        className: c.name,
        children: (0, l.Z)(t)
      }),
      (0, i.jsx)(s.Text, {
        color: 'interactive-normal',
        variant: 'text-sm/normal',
        children: t.description
      })
    ]
  }),
  (0, i.jsx)(a.Z, {
    direction: a.Z.Directions.RIGHT,
    className: c.caret
  })
]
  });
}