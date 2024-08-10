n.d(t, {
  e: function() {
return A;
  }
}), n(653041), n(789020), n(47120);
var i, a = n(735250),
  s = n(470079),
  l = n(120356),
  r = n.n(l),
  o = n(481060),
  c = n(434650),
  u = n(657305),
  d = n(367907),
  h = n(194082),
  p = n(282256),
  m = n(925329),
  _ = n(833858),
  f = n(223135),
  E = n(374129),
  g = n(639351),
  C = n(630388),
  I = n(51144),
  x = n(981631),
  T = n(354459),
  N = n(927923),
  v = n(689938),
  S = n(683756);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let A = e => {
let {
  children: t,
  collapsed: n = !1,
  className: i
} = e;
return (0, a.jsx)('div', {
  className: r()(i, S.list, n ? S.listCollapse : S.listDefault),
  role: 'group',
  children: t
});
  },
  M = e => {
let {
  hangStatusActivity: t,
  iconClassName: n,
  isSelf: i
} = e;
return i && null == t ? (0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: v.Z.Messages.HANG_STATUS_VC_ROW_ADD,
  children: (0, a.jsx)(o.PlusLargeIcon, {
    className: r()(S.icon, n)
  })
}, 'add-status') : (0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: (0, _.O8)(t),
  children: (0, a.jsx)(f.Z, {
    hangStatusActivity: t,
    className: r()(S.hangStatusIcon, n)
  })
}, 'hang-status');
  };
class b extends(i = s.Component) {
  renderPrioritySpeaker() {
let {
  speaking: e,
  priority: t,
  collapsed: n,
  mute: i,
  serverMute: s
} = this.props;
return t && !n ? (0, a.jsx)(o.Tooltip, {
  text: v.Z.Messages.PRIORITY_SPEAKER,
  children: t => (0, a.jsx)('div', {
    className: r()(S.iconPriortySpeaker, {
      [S.iconPriortySpeakerSpeaking]: !i && !s && e
    }),
    ...t
  })
}) : null;
  }
  renderAvatar() {
let {
  speaking: e,
  user: t,
  size: n,
  avatarContainerClass: i,
  guildId: s
} = this.props;
return (0, a.jsx)('div', {
  className: r()(i, S.avatar, {
    [S.avatarLarge]: n === x.ipw.LARGE,
    [S.avatarSmall]: n === x.ipw.SMALL,
    [S.avatarSpeaking]: e
  }),
  style: {
    backgroundImage: 'url('.concat(t.getAvatarURL(s, n === x.ipw.LARGE ? 38 : 24), ')')
  }
});
  }
  renderName() {
let {
  nick: e,
  user: t,
  collapsed: n,
  speaking: i,
  userNameClassName: s,
  mute: l,
  serverMute: o,
  isGuest: c,
  isOverlay: u,
  guildId: d
} = this.props, h = (0, a.jsxs)('div', {
  className: r()(s, {
    [S.username]: !0,
    [S.usernameSpeaking]: !l && !o && i
  }),
  children: [
    null != e ? e : I.ZP.getName(t),
    c ? (0, a.jsxs)('span', {
      className: S.guestSuffix,
      children: [
        '\xA0',
        v.Z.Messages.GUEST_NAME_SUFFIX
      ]
    }) : ''
  ]
}), m = {
  clan: t.clan,
  userId: t.id,
  contextGuildId: d,
  isOverlay: u,
  disableTooltip: !0,
  className: r()(S.clanTag, u && S.isOverlay),
  profileViewedAnalytics: {
    source: u ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL,
    tagUserId: t.id
  }
};
return !n || u ? (0, a.jsx)(a.Fragment, {
  children: (0, a.jsx)(p.Z, {
    ...m,
    children: h
  })
}) : null;
  }
  renderIcons() {
let {
  mute: e,
  localMute: t,
  localVideoDisabled: n,
  serverMute: i,
  deaf: s,
  serverDeaf: l,
  collapsed: c,
  video: d,
  isStreaming: p,
  disabled: m,
  isWatching: _,
  iconClassName: f,
  embeddedApplication: I,
  otherClientSessionType: Z,
  voicePlatform: A,
  hangStatusActivity: b,
  showHangStatus: L,
  isSelf: P,
  application: O,
  guildId: y,
  channelId: D,
  user: k,
  handleHoverHangStatus: U,
  handleHoverIcons: w,
  disconnected: B
} = this.props;
if (c || m)
  return null;
let H = [],
  G = (0, a.jsx)(j, {
    iconClassName: f,
    mute: e,
    localMute: t,
    serverMute: i,
    deaf: s,
    serverDeaf: l
  });
d && (n ? H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: v.Z.Messages.LOCAL_VIDEO_DISABLED,
  children: (0, a.jsx)(o.VideoSlashIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, f),
    colorClass: S.strikethrough
  })
}, 'video')) : H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: v.Z.Messages.VIDEO,
  children: (0, a.jsx)(o.VideoIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, f)
  })
}, 'video'))), B && H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: v.Z.Messages.NOTICE_USER_DISCONNECTED,
  children: (0, a.jsx)(o.CircleWarningIcon, {
    className: r()(S.icon, f),
    color: o.tokens.colors.STATUS_WARNING_BACKGROUND
  })
}, 'disconnected')), null != I && H.push((0, a.jsx)(o.TooltipContainer, {
  text: (0, u.Z)(I.name),
  className: S.iconSpacing,
  children: (0, a.jsx)(o.ActivitiesIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, f)
  })
}, 'activity')), Z === N.YE.XBOX || A === T.wR.XBOX ? H.push((0, a.jsx)('div', {
  className: r()(S.iconSpacing),
  children: (0, a.jsx)(g.Z, {
    className: r()(S.icon, f)
  })
}, 'xbox')) : (Z === N.YE.PLAYSTATION || A === T.wR.PLAYSTATION) && H.push((0, a.jsx)('div', {
  className: r()(S.iconSpacing),
  children: (0, a.jsx)(E.Z, {
    className: r()(S.icon, f)
  })
}, 'playstation')), p ? H.push((0, a.jsx)('div', {
  className: r()(S.iconSpacing, S.liveIconSpacing),
  children: (0, a.jsx)(h.ZP, {
    size: h.ZP.Sizes.SMALL
  })
}, 'stream')) : _ && H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: v.Z.Messages.WATCH_STREAM_WATCHING,
  children: (0, a.jsx)(o.EyeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: r()(S.icon, f)
  })
}, 'watch'));
let V = null != O && !(0, C.yE)(O.flags, x.udG.EMBEDDED),
  F = null == b && V;
return 0 !== H.length || null != G || L || F ? (0, a.jsxs)('div', {
  className: S.icons,
  children: [
    (0, a.jsxs)('div', {
      className: S.iconGroup,
      onMouseEnter: () => null == w ? void 0 : w(!0),
      onMouseLeave: () => null == w ? void 0 : w(!1),
      children: [
        G,
        H
      ]
    }),
    L || F ? (0, a.jsx)('div', {
      className: S.iconGroup,
      onMouseEnter: () => null == U ? void 0 : U(!0),
      onMouseLeave: () => null == U ? void 0 : U(!1),
      children: F ? (0, a.jsx)(R, {
        application: O,
        iconClassName: f,
        guildId: y,
        channelId: D,
        userId: k.id
      }, ''.concat(k.id, '-game')) : (0, a.jsx)(M, {
        hangStatusActivity: b,
        iconClassName: f,
        isSelf: P
      })
    }) : null
  ]
}) : null;
  }
  render() {
let {
  onClick: e,
  onKeyDown: t,
  flipped: n,
  size: i,
  className: s,
  selected: l,
  disabled: c,
  overlap: u,
  'aria-label': d,
  tabIndex: h
} = this.props;
return (0, a.jsx)(o.Clickable, {
  className: r()(s, {
    [S.voiceUser]: !0,
    [S.overlap]: u,
    [S.selected]: l,
    [S.clickable]: null != e,
    [S.userSmall]: i === x.ipw.SMALL,
    [S.userLarge]: i === x.ipw.LARGE,
    [S.disabled]: !l && c
  }),
  onClick: this.handleClick,
  onDoubleClick: this.handleDoubleClick,
  onContextMenu: this.handleContextMenu,
  onMouseEnter: this.handleMouseEnter,
  onMouseLeave: this.handleMouseLeave,
  onMouseDown: this.handleMouseDown,
  onKeyDown: t,
  'aria-label': d,
  tabIndex: h,
  children: (0, a.jsxs)('div', {
    className: r()(S.content, {
      [S.flipped]: n
    }),
    children: [
      this.renderPrioritySpeaker(),
      this.renderAvatar(),
      this.renderName(),
      this.renderIcons()
    ]
  })
});
  }
  constructor(...e) {
super(...e), Z(this, 'handleClick', e => {
  let {
    onClick: t,
    user: n
  } = this.props;
  null == t || t(e, n);
}), Z(this, 'handleDoubleClick', e => {
  let {
    onDoubleClick: t,
    user: n
  } = this.props;
  null == t || t(e, n);
}), Z(this, 'handleContextMenu', e => {
  let {
    onContextMenu: t,
    user: n
  } = this.props;
  null == t || t(e, n);
}), Z(this, 'handleMouseLeave', e => {
  let {
    onMouseLeave: t,
    user: n
  } = this.props;
  null == t || t(e, n);
}), Z(this, 'handleMouseEnter', e => {
  let {
    onMouseEnter: t,
    user: n
  } = this.props;
  null == t || t(e, n);
}), Z(this, 'handleMouseDown', e => {
  let {
    onMouseDown: t,
    user: n
  } = this.props;
  null == t || t(e, n);
});
  }
}

function R(e) {
  let {
application: t,
iconClassName: n,
guildId: i,
channelId: l,
userId: u
  } = e, [h, p] = s.useState(!1), _ = (0, c.O)(e => p(e));
  return s.useEffect(() => {
h && d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
  channel_id: l,
  guild_id: i,
  user_id: u
});
  }, [
t.id,
l,
i,
u,
h
  ]), (0, a.jsx)(o.TooltipContainer, {
text: v.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
  game: t.name
}),
'aria-label': v.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
  game: t.name
}),
className: S.iconSpacing,
children: (0, a.jsx)('div', {
  ref: _,
  children: (0, a.jsx)(m.Z, {
    className: r()(S.icon, n),
    game: t,
    size: m.Z.Sizes.XSMALL,
    onMouseEnter: () => {
      d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
        channel_id: l,
        guild_id: i,
        game_name: t.name,
        user_id: u
      });
    }
  })
})
  });
}

function j(e) {
  let {
iconClassName: t,
mute: n,
localMute: i,
serverMute: s,
deaf: l,
serverDeaf: c
  } = e, u = (0, o.useRedesignIconContext)().enabled, d = [];
  if (n) {
let e;
if (u) {
  let n;
  n = s ? o.MicrophoneDenyIcon : i ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon, e = (0, a.jsx)(n, {
    className: r()(S.icon, t, {
      [S.iconServer]: s
    }),
    color: 'currentColor'
  });
} else
  e = (0, a.jsx)(o.MicrophoneSlashIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, t, {
      [S.iconServer]: s
    }),
    colorClass: i ? S.strikethrough : void 0
  });
d.push((0, a.jsx)(o.TooltipContainer, {
  text: i ? v.Z.Messages.LOCAL_MUTED : s ? v.Z.Messages.SERVER_MUTED : v.Z.Messages.VOICE_CHANNEL_MUTED,
  className: S.iconSpacing,
  children: e
}, 'mute'));
  }
  if (c || l) {
let e;
if (u) {
  let n = c ? o.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
  e = (0, a.jsx)(n, {
    className: r()(S.icon, t, {
      [S.iconServer]: c
    }),
    color: 'currentColor'
  });
} else
  e = (0, a.jsx)(o.HeadphonesSlashIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, t, {
      [S.iconServer]: c
    })
  });
d.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: c ? v.Z.Messages.SERVER_DEAFENED : v.Z.Messages.VOICE_CHANNEL_DEAFENED,
  children: e
}, 'deaf'));
  }
  return 0 === d.length ? null : (0, a.jsx)(a.Fragment, {
children: d
  });
}
Z(b, 'defaultProps', {
  avatarContainerClass: S.avatarContainer,
  userNameClassName: S.usernameFont,
  size: x.ipw.SMALL,
  selected: !1,
  disabled: !1,
  isOverlay: !1
}), t.Z = b;