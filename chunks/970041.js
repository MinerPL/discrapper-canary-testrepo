i.d(s, {
  Z: function() {
return I;
  }
}), i(789020);
var n = i(735250);
i(470079);
var l = i(597312),
  t = i(442837),
  o = i(481060),
  a = i(860719),
  r = i(621853),
  d = i(689938),
  c = i(21232);

function u(e) {
  let {
icon: s,
title: i,
description: l
  } = e;
  return (0, n.jsxs)('div', {
className: c.row,
children: [
  (0, n.jsx)('div', {
    className: c.rowIcon,
    children: (0, n.jsx)(s, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor'
    })
  }),
  (0, n.jsxs)('div', {
    className: c.rowText,
    children: [
      (0, n.jsx)(o.Heading, {
        variant: 'text-xs/semibold',
        children: i
      }),
      (0, n.jsx)(o.Text, {
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
user: s
  } = e, i = (0, t.e7)([r.Z], () => {
var e;
return null === (e = r.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
  }), {
hasMessageContent: I,
hasGuildPresences: _,
hasGuildMembers: f
  } = (0, a.w)({
flags: null == i ? void 0 : i.flags
  });
  return (0, n.jsxs)(l.zJ, {
fade: !0,
className: c.scroller,
children: [
  I && (0, n.jsx)(u, {
    icon: o.ChatIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  }),
  _ && (0, n.jsx)(u, {
    icon: o.GameControllerIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  }),
  f && (0, n.jsx)(u, {
    icon: o.GroupIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  }),
  (0, n.jsx)(o.Text, {
    variant: 'text-xs/normal',
    children: d.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
    })
  })
]
  });
}