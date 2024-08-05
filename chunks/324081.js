n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(91192),
  l = n(442837),
  o = n(481060),
  c = n(788307),
  u = n(43267),
  d = n(933557),
  _ = n(471445),
  E = n(565138),
  I = n(199902),
  m = n(592125),
  T = n(430824),
  h = n(158776),
  N = n(594174),
  C = n(2093),
  f = n(153124),
  p = n(689938),
  g = n(444771);
let S = {
  top: 8,
  bottom: 8,
  left: -4,
  right: -4
};

function A(e) {
  let {
channel: t,
children: n,
gotoChannel: s,
mentionCount: a,
channelState: l,
toggleCollapsed: c
  } = e, u = (0, r.JA)('recents-header-'.concat(t.id, '-').concat((0, f.Dt)()));
  return (0, i.jsx)(o.FocusRing, {
offset: S,
children: (0, i.jsxs)('div', {
  className: g.channelHeader,
  ...u,
  tabIndex: 0,
  'data-recents-channel': t.id,
  onKeyDown: function(e) {
    null != c && null != l && ('ArrowRight' === e.key && l.collapsed || 'ArrowLeft' === e.key && !l.collapsed) && (null == c || c(l));
  },
  children: [
    (0, i.jsx)(R, {
      channel: t,
      gotoChannel: s
    }),
    (0, i.jsx)(M, {
      channel: t,
      gotoChannel: s,
      mentionCount: a
    }),
    n
  ]
})
  });
}

function R(e) {
  let {
channel: t,
gotoChannel: n
  } = e;
  return t.isPrivate() ? (0, i.jsx)(O, {
channel: t,
gotoChannel: n
  }) : (0, i.jsx)(x, {
channel: t,
gotoChannel: n
  });
}

function O(e) {
  let {
channel: t,
gotoChannel: n
  } = e, s = (0, l.e7)([N.default], () => t.isDM() ? N.default.getUser(t.getRecipientId()) : null), a = null == s ? (0, u.x)(t) : s.getAvatarURL(void 0, 40);
  return (0, i.jsx)(o.Clickable, {
onClick: n,
tabIndex: -1,
children: (0, i.jsx)('img', {
  className: g.dmIcon,
  src: a,
  alt: '',
  'aria-hidden': !0
})
  });
}

function x(e) {
  let {
channel: t,
gotoChannel: n
  } = e, s = (0, l.e7)([T.Z], () => T.Z.getGuild(t.guild_id));
  return null == s ? null : (0, i.jsx)(E.Z, {
'aria-hidden': !0,
className: g.guildIcon,
guild: s,
size: E.Z.Sizes.MEDIUM,
active: !0,
onClick: n,
tabIndex: -1
  });
}

function M(e) {
  let {
channel: t,
gotoChannel: n,
mentionCount: s
  } = e, r = (0, l.e7)([T.Z], () => T.Z.getGuild(t.guild_id)), c = (0, l.e7)([m.Z], () => m.Z.getChannel(t.parent_id)), u = (0, _.KS)(t, r), E = (0, d.ZP)(t, !1), I = null == c ? null == r ? void 0 : r.name : ''.concat(null == r ? void 0 : r.name, ' \u203A ').concat(c.name), h = t.isMultiUserDM() ? p.Z.Messages.MEMBERS_HEADER.format({
members: t.recipients.length + 1
  }) : t.isPrivate() ? (0, i.jsx)(v, {
channel: t
  }) : (0, i.jsx)(o.Clickable, {
className: a()(g.subtext, g.guildName),
onClick: n,
children: I
  });
  return (0, i.jsxs)('div', {
className: g.channelNameSection,
children: [
  (0, i.jsx)(o.Heading, {
    variant: 'heading-md/semibold',
    className: g.channelNameHeader,
    children: (0, i.jsxs)(o.Clickable, {
      className: g.channelName,
      onClick: n,
      children: [
        t.isThread() || t.isGroupDM() || null == u ? null : (0, i.jsx)(u, {
          className: t.isForumLikeChannel() ? g.forumIcon : void 0,
          width: 18,
          height: 18,
          size: 'custom',
          color: 'currentColor'
        }),
        (0, i.jsx)('span', {
          className: g.channelNameSpan,
          children: E
        }),
        null != s && s > 0 ? (0, i.jsx)(C.Z, {
          value: s,
          className: g.badge
        }) : null
      ]
    })
  }),
  (0, i.jsx)(o.Text, {
    color: 'header-secondary',
    variant: 'text-xs/normal',
    className: g.subtextContainer,
    children: h
  })
]
  });
}

function v(e) {
  let {
channel: t
  } = e, {
user: n,
activities: s,
applicationStream: a
  } = (0, l.cj)([
N.default,
h.Z,
I.Z
  ], () => {
let e = N.default.getUser(t.getRecipientId());
return {
  user: e,
  activities: null != e ? h.Z.getActivities(e.id) : null,
  applicationStream: null != e ? I.Z.getAnyStreamForUser(e.id) : null
};
  });
  return null == s ? null : (0, i.jsx)(c.Z, {
className: g.activityStatus,
emojiClassName: g.activityEmoji,
activities: s,
applicationStream: a,
hideTooltip: !0,
user: n
  });
}