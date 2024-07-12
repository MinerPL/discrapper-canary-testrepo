n.d(t, {
  Kq: function() {
return d;
  },
  Ot: function() {
return u;
  },
  jz: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(481060),
  r = n(534091),
  o = n(981631),
  c = n(118655);

function d(e) {
  let {
locked: t = !1,
channelType: n
  } = e, a = (0, s.useRedesignIconContext)().enabled, r = n === o.d4z.GUILD_VOICE || n === o.d4z.GUILD_STAGE_VOICE;
  if (!a)
return (0, i.jsx)('div', {
  className: l()(c.emptyChannelIcon, c.emptyChannelIconSvg, {
    [c.locked]: t,
    [c.voiceChat]: r
  })
});
  {
let e = r ? s.ChatIcon : t ? s.TextLockIcon : s.TextIcon;
return (0, i.jsx)('div', {
  className: l()(c.emptyChannelIcon, c.emptyChannelIconComponent),
  children: (0, i.jsx)(e, {
    color: s.tokens.colors.WHITE,
    size: 'custom',
    width: 42,
    height: 42
  })
});
  }
}

function u(e) {
  let {
children: t,
className: n
  } = e;
  return (0, i.jsx)(s.Heading, {
'aria-hidden': 'true',
className: l()(n, c.header),
variant: 'heading-xxl/extrabold',
children: t
  });
}

function h(e) {
  let {
children: t
  } = e;
  return (0, i.jsx)(s.Text, {
variant: 'text-md/normal',
color: 'none',
className: c.description,
children: t
  });
}
t.ZP = function(e) {
  let {
className: t,
channelId: n,
children: a,
...s
  } = e;
  return (0, i.jsx)('div', {
className: l()(t, c.container),
id: (0, r.p)(n, n),
...s,
children: a
  });
};