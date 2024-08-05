n.d(t, {
  Kq: function() {
return u;
  },
  Ot: function() {
return d;
  },
  jz: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(534091),
  o = n(981631),
  c = n(118655);

function u(e) {
  let {
locked: t = !1,
channelType: n
  } = e, a = (0, l.useRedesignIconContext)().enabled, r = n === o.d4z.GUILD_VOICE || n === o.d4z.GUILD_STAGE_VOICE;
  if (!a)
return (0, i.jsx)('div', {
  className: s()(c.emptyChannelIcon, c.emptyChannelIconSvg, {
    [c.locked]: t,
    [c.voiceChat]: r
  })
});
  {
let e = r ? l.ChatIcon : t ? l.TextLockIcon : l.TextIcon;
return (0, i.jsx)('div', {
  className: s()(c.emptyChannelIcon, c.emptyChannelIconComponent),
  children: (0, i.jsx)(e, {
    color: l.tokens.colors.WHITE,
    size: 'custom',
    width: 42,
    height: 42
  })
});
  }
}

function d(e) {
  let {
children: t,
className: n
  } = e;
  return (0, i.jsx)(l.Heading, {
'aria-hidden': 'true',
className: s()(n, c.header),
variant: 'heading-xxl/extrabold',
children: t
  });
}

function h(e) {
  let {
children: t
  } = e;
  return (0, i.jsx)(l.Text, {
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
...l
  } = e;
  return (0, i.jsx)('div', {
className: s()(t, c.container),
id: (0, r.p)(n, n),
...l,
children: a
  });
};