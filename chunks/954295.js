i.d(s, {
  Z: function() {
return d;
  }
}), i(789020), i(653041);
var n = i(735250);
i(470079);
var l = i(481060),
  t = i(860719),
  o = i(689938),
  a = i(744224);

function r(e) {
  let {
content: s,
heading: i
  } = e;
  return (0, n.jsxs)('div', {
className: a.row,
children: [
  null != i ? (0, n.jsx)(l.Heading, {
    className: a.heading,
    variant: 'text-sm/normal',
    children: i
  }) : null,
  (0, n.jsx)(l.Text, {
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: s
  })
]
  });
}

function d(e) {
  let {
flags: s,
listScrollerStyle: i
  } = e, {
hasMessageContent: d,
hasGuildPresences: c,
hasGuildMembers: u
  } = (0, t.w)({
flags: s
  });
  if (null == s)
return null;
  let I = [];
  return d && I.push((0, n.jsx)(r, {
heading: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
content: o.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
  })), c && I.push((0, n.jsx)(r, {
heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
  })), u && I.push((0, n.jsx)(r, {
heading: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
content: o.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
  })), I.length > 0 && I.push((0, n.jsx)('div', {
className: a.divider,
children: (0, n.jsx)(l.FormDivider, {})
  })), I.push((0, n.jsx)(r, {
content: o.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
  helpCenterUrl: 'https://support.discord.com/hc/articles/7933951485975'
})
  })), (0, n.jsx)(l.ScrollerThin, {
className: i,
children: I
  });
}