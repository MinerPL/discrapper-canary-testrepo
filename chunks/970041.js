i.d(n, {
  Z: function() {
return I;
  }
}), i(789020);
var s = i(735250);
i(470079);
var l = i(597312),
  o = i(442837),
  t = i(481060),
  r = i(860719),
  a = i(621853),
  d = i(689938),
  c = i(21232);

function u(e) {
  let {
icon: n,
title: i,
description: l
  } = e;
  return (0, s.jsxs)('div', {
className: c.row,
children: [
  (0, s.jsx)('div', {
    className: c.rowIcon,
    children: (0, s.jsx)(n, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor'
    })
  }),
  (0, s.jsxs)('div', {
    className: c.rowText,
    children: [
      (0, s.jsx)(t.Heading, {
        variant: 'text-xs/semibold',
        children: i
      }),
      (0, s.jsx)(t.Text, {
        variant: 'text-sm/normal',
        children: l
      })
    ]
  })
]
  });
}

function I(e) {
  let {
user: n
  } = e, i = (0, o.e7)([a.Z], () => {
var e;
return null === (e = a.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
  }), {
hasMessageContent: I,
hasGuildPresences: _,
hasGuildMembers: f
  } = (0, r.w)({
flags: null == i ? void 0 : i.flags
  });
  return (0, s.jsxs)(l.zJ, {
fade: !0,
className: c.scroller,
children: [
  I && (0, s.jsx)(u, {
    icon: t.ChatIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  }),
  _ && (0, s.jsx)(u, {
    icon: t.GameControllerIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  }),
  f && (0, s.jsx)(u, {
    icon: t.GroupIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  }),
  (0, s.jsx)(t.Text, {
    variant: 'text-xs/normal',
    children: d.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
    })
  })
]
  });
}