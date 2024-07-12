n(653041), n(47120);
var s = n(735250),
  t = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(481060),
  o = n(43267),
  u = n(933557),
  c = n(471445),
  d = n(134432),
  m = n(695346),
  N = n(768581),
  v = n(153066),
  h = n(285952),
  C = n(366695),
  p = n(346656),
  x = n(689938),
  g = n(985505);
let I = e => {
let {
  text: l,
  extra: n
} = e;
return (0, s.jsxs)(r.FormTitle, {
  className: g.header,
  children: [
    l,
    n
  ]
});
  },
  j = e => {
let {
  resolving: l,
  children: n
} = e;
return (0, s.jsx)('div', {
  className: g.content,
  children: l ? (0, s.jsxs)('div', {
    className: g.resolvingWrapper,
    children: [
      (0, s.jsx)('div', {
        className: g.resolving,
        children: (0, s.jsx)('div', {
          className: g.resolvingBackground
        })
      }),
      (0, s.jsx)('div', {
        className: g.resolvingFakeButton,
        children: (0, s.jsx)('div', {
          className: g.resolvingBackground
        })
      })
    ]
  }) : n
});
  },
  E = e => {
var l;
let {
  application: n,
  guild: t,
  channel: a,
  onClick: c,
  expired: d = !1,
  user: N,
  className: h
} = e, x = null !== (l = (0, u.ZP)(a)) && void 0 !== l ? l : '', I = m.QK.useSetting();
if (d)
  return (0, s.jsx)('div', {
    className: g.guildIconExpired
  });
let j = null == t || null != t.icon,
  E = i()((0, v.l)(g, 'guildIcon', j ? 'Image' : '', null != c ? 'Joined' : ''), h);
if (null != n)
  return (0, s.jsx)(C.Z, {
    game: n,
    onClick: c,
    size: g.applicationIcon,
    className: E
  });
if (null != t)
  return (0, s.jsx)(p.Z, {
    onClick: c,
    active: !0,
    guild: t,
    className: E,
    animate: I
  });
if (null != a)
  return (0, s.jsx)(r.Avatar, {
    onClick: c,
    src: (0, o.x)(a),
    size: r.AvatarSizes.SIZE_56,
    className: E,
    'aria-label': x
  });
else if (null != N)
  return (0, s.jsx)(r.Avatar, {
    onClick: c,
    src: N.getAvatarURL(null, 56),
    size: r.AvatarSizes.SIZE_56,
    className: E,
    'aria-label': x
  });
return null;
  },
  L = e => {
let {
  title: l,
  onClick: n,
  expired: t,
  children: a
} = e, i = (0, s.jsx)(r.Heading, {
  variant: 'heading-md/semibold',
  className: (0, v.l)(g, 'inviteDestination', t ? 'Expired' : null != n ? 'Joined' : ''),
  children: l
});
return (0, s.jsxs)(h.Z, {
  className: g.guildInfo,
  direction: h.Z.Direction.VERTICAL,
  justify: h.Z.Justify.CENTER,
  children: [
    null == n ? i : (0, s.jsx)(r.Clickable, {
      onClick: n,
      children: i
    }),
    (0, s.jsx)(r.Text, {
      tag: 'strong',
      className: g.guildDetail,
      variant: 'text-sm/normal',
      children: a
    })
  ]
});
  },
  f = e => {
let {
  membersOnline: l,
  members: n
} = e, t = [];
return null != l && l > 0 && t.push((0, s.jsxs)('div', {
  className: g.statusWrapper,
  children: [
    (0, s.jsx)('i', {
      className: g.statusOnline
    }),
    (0, s.jsx)('span', {
      className: g.count,
      children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: l
      })
    })
  ]
}, 'onlineCount')), null != n && t.push((0, s.jsxs)('div', {
  className: g.statusWrapper,
  children: [
    (0, s.jsx)('i', {
      className: g.statusOffline
    }),
    (0, s.jsx)('span', {
      className: g.count,
      children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
        count: n
      })
    })
  ]
}, 'memberCount')), (0, s.jsx)('div', {
  className: g.statusCounts,
  children: t
});
  },
  B = e => {
let {
  channel: l,
  guild: n
} = e, t = (0, c.KS)(l, n);
return null == l || null == t ? null : (0, s.jsxs)('div', {
  className: g.channel,
  children: [
    (0, s.jsx)(t, {
      className: g.channelIcon,
      color: 'currentColor',
      size: 'custom',
      width: 20,
      height: 20
    }),
    (0, s.jsx)('span', {
      className: g.channelName,
      children: l.name
    })
  ]
});
  },
  k = e => {
let {
  children: l,
  onClick: n,
  className: t,
  isDisabled: a,
  ...o
} = e;
return (0, s.jsx)(r.Button, {
  ...o,
  disabled: a,
  onClick: n,
  size: g.buttonSize,
  className: i()(g.button, t),
  children: l
});
  };
k.Colors = r.Button.Colors, k.Looks = r.Button.Looks, k.defaultProps = {
  className: null,
  isDisabled: !1
};
let Z = e => {
let {
  children: l,
  className: n,
  containerRef: t
} = e;
return (0, s.jsx)('div', {
  ref: t,
  className: i()(g.wrapper, n),
  children: l
});
  },
  _ = e => {
let {
  guild: l
} = e, [n, a] = t.useState(!1), r = N.ZP.getGuildSplashURL({
  id: l.id,
  splash: l.splash,
  size: 400 * (0, d.x_)()
});
return null == r ? null : (0, s.jsx)('div', {
  className: g.inviteSplash,
  children: (0, s.jsx)('img', {
    src: r,
    alt: '',
    className: i()(g.inviteSplashImage, {
      [g.inviteSplashImageLoaded]: n
    }),
    onLoad: () => a(!0)
  })
});
  },
  S = e => {
let {
  guild: l
} = e;
return (0, s.jsx)('div', {
  className: g.guildNameWrapper,
  children: (0, s.jsx)('span', {
    className: g.guildName,
    children: l.name
  })
});
  },
  b = e => {
let {
  guildTemplate: l
} = e;
return (0, s.jsx)('div', {
  className: g.guildNameWrapper,
  children: (0, s.jsx)('span', {
    className: g.guildName,
    children: l.serializedSourceGuild.name
  })
});
  };
Z.Header = I, Z.Body = j, Z.Icon = E, Z.Info = L, Z.Data = f, Z.Channel = B, Z.Button = k, Z.GuildSplash = _, Z.GuildName = S, Z.GuildTemplateName = b, I.displayName = 'InviteButton.Header', j.displayName = 'InviteButton.Body', E.displayName = 'InviteButton.Icon', L.displayName = 'InviteButton.Info', f.displayName = 'InviteButton.Data', B.displayName = 'InviteButton.Channel', k.displayName = 'InviteButton.Button', _.displayName = 'InviteButton.GuildSplash', S.displayName = 'InviteButton.GuildName', b.displayName = 'InviteButton.GuildTemplateName', l.Z = Z;