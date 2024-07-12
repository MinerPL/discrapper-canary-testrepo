n.d(t, {
  c: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(523753);

function o(e) {
  let {
title: t,
description: n,
button: s,
backgroundImageUrl: o = 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
className: c
  } = e;
  return (0, i.jsxs)('div', {
className: a()(l.hero, c),
style: {
  backgroundImage: 'url('.concat(o, ')')
},
children: [
  (0, i.jsx)('div', {
    className: l.overlay
  }),
  (0, i.jsxs)('div', {
    className: l.content,
    children: [
      (0, i.jsx)(r.Heading, {
        variant: 'heading-lg/medium',
        color: 'always-white',
        children: t
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-md/medium',
        color: 'text-muted',
        children: n
      }),
      s
    ]
  })
]
  });
}