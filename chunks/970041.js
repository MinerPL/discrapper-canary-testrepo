n.d(s, {
  Z: function() {
return _;
  }
}), n(789020);
var i = n(735250);
n(470079);
var t = n(597312),
  l = n(442837),
  o = n(481060),
  a = n(860719),
  r = n(621853),
  d = n(689938),
  c = n(116604);

function u(e) {
  let {
icon: s,
title: n,
description: t
  } = e;
  return (0, i.jsxs)('div', {
className: c.row,
children: [
  (0, i.jsx)('div', {
    className: c.rowIcon,
    children: (0, i.jsx)(s, {
      size: 'custom',
      width: 20,
      height: 20,
      color: 'currentColor'
    })
  }),
  (0, i.jsxs)('div', {
    className: c.rowText,
    children: [
      (0, i.jsx)(o.Heading, {
        variant: 'text-xs/semibold',
        children: n
      }),
      (0, i.jsx)(o.Text, {
        variant: 'text-sm/normal',
        children: t
      })
    ]
  })
]
  });
}

function _(e) {
  let {
user: s
  } = e, n = (0, l.e7)([r.Z], () => {
var e;
return null === (e = r.Z.getUserProfile(s.id)) || void 0 === e ? void 0 : e.application;
  }), {
hasMessageContent: _,
hasGuildPresences: I,
hasGuildMembers: f
  } = (0, a.w)({
flags: null == n ? void 0 : n.flags
  });
  return (0, i.jsxs)(t.zJ, {
fade: !0,
className: c.scroller,
children: [
  _ && (0, i.jsx)(u, {
    icon: o.ChatIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  }),
  I && (0, i.jsx)(u, {
    icon: o.GameControllerIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  }),
  f && (0, i.jsx)(u, {
    icon: o.GroupIcon,
    title: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
    description: d.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  }),
  (0, i.jsx)(o.Text, {
    variant: 'text-xs/normal',
    children: d.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
      helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
    })
  })
]
  });
}