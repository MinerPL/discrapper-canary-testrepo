n.d(t, {
  e: function() {
return A;
  }
}), n(653041), n(789020), n(47120);
var i, a = n(735250),
  l = n(470079),
  s = n(120356),
  r = n.n(s),
  o = n(481060),
  c = n(434650),
  d = n(657305),
  u = n(367907),
  h = n(282256),
  p = n(833858),
  m = n(223135),
  _ = n(366695),
  f = n(374129),
  E = n(639351),
  C = n(368666),
  g = n(630388),
  I = n(51144),
  x = n(981631),
  T = n(354459),
  v = n(927923),
  N = n(689938),
  S = n(665861);

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
  text: N.Z.Messages.HANG_STATUS_VC_ROW_ADD,
  children: (0, a.jsx)(o.PlusLargeIcon, {
    className: r()(S.icon, n)
  })
}, 'add-status') : (0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: (0, p.O8)(t),
  children: (0, a.jsx)(m.Z, {
    hangStatusActivity: t,
    className: r()(S.hangStatusIcon, n)
  })
}, 'hang-status');
  };
class b extends(i = l.Component) {
  renderPrioritySpeaker() {
let {
  speaking: e,
  priority: t,
  collapsed: n,
  mute: i,
  serverMute: l
} = this.props;
return t && !n ? (0, a.jsx)(o.Tooltip, {
  text: N.Z.Messages.PRIORITY_SPEAKER,
  children: t => (0, a.jsx)('div', {
    className: r()(S.iconPriortySpeaker, {
      [S.iconPriortySpeakerSpeaking]: !i && !l && e
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
  guildId: l
} = this.props;
return (0, a.jsx)('div', {
  className: r()(i, S.avatar, {
    [S.avatarLarge]: n === x.ipw.LARGE,
    [S.avatarSmall]: n === x.ipw.SMALL,
    [S.avatarSpeaking]: e
  }),
  style: {
    backgroundImage: 'url('.concat(t.getAvatarURL(l, n === x.ipw.LARGE ? 38 : 24), ')')
  }
});
  }
  renderName() {
let {
  nick: e,
  user: t,
  collapsed: n,
  speaking: i,
  userNameClassName: l,
  mute: s,
  serverMute: o,
  isGuest: c,
  isOverlay: d,
  guildId: u
} = this.props, p = (0, a.jsxs)('div', {
  className: r()(l, {
    [S.username]: !0,
    [S.usernameSpeaking]: !s && !o && i
  }),
  children: [
    null != e ? e : I.ZP.getName(t),
    c ? (0, a.jsxs)('span', {
      className: S.guestSuffix,
      children: [
        '\xA0',
        N.Z.Messages.GUEST_NAME_SUFFIX
      ]
    }) : ''
  ]
}), m = {
  clan: t.clan,
  userId: t.id,
  contextGuildId: u,
  isOverlay: d,
  disableTooltip: !0,
  className: r()(S.clanTag, d && S.isOverlay),
  profileViewedAnalytics: {
    source: d ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL,
    tagUserId: t.id
  }
};
return !n || d ? (0, a.jsx)(a.Fragment, {
  children: (0, a.jsx)(h.Z, {
    ...m,
    children: p
  })
}) : null;
  }
  renderIcons() {
let {
  mute: e,
  localMute: t,
  localVideoDisabled: n,
  serverMute: i,
  deaf: l,
  serverDeaf: s,
  collapsed: c,
  video: u,
  isStreaming: h,
  disabled: p,
  isWatching: m,
  iconClassName: _,
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
if (c || p)
  return null;
let H = [],
  G = (0, a.jsx)(j, {
    iconClassName: _,
    mute: e,
    localMute: t,
    serverMute: i,
    deaf: l,
    serverDeaf: s
  });
u && (n ? H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: N.Z.Messages.LOCAL_VIDEO_DISABLED,
  children: (0, a.jsx)(o.VideoSlashIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, _),
    colorClass: S.strikethrough
  })
}, 'video')) : H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: N.Z.Messages.VIDEO,
  children: (0, a.jsx)(o.VideoIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, _)
  })
}, 'video'))), B && H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: N.Z.Messages.NOTICE_USER_DISCONNECTED,
  children: (0, a.jsx)(o.CircleExclamationPointIcon, {
    className: r()(S.icon, _),
    color: o.tokens.colors.STATUS_WARNING_BACKGROUND
  })
}, 'disconnected')), null != I && H.push((0, a.jsx)(o.TooltipContainer, {
  text: (0, d.Z)(I.name),
  className: S.iconSpacing,
  children: (0, a.jsx)(o.ActivitiesIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, _)
  })
}, 'activity')), Z === v.YE.XBOX || A === T.wR.XBOX ? H.push((0, a.jsx)('div', {
  className: r()(S.iconSpacing),
  children: (0, a.jsx)(E.Z, {
    className: r()(S.icon, _)
  })
}, 'xbox')) : (Z === v.YE.PLAYSTATION || A === T.wR.PLAYSTATION) && H.push((0, a.jsx)('div', {
  className: r()(S.iconSpacing),
  children: (0, a.jsx)(f.Z, {
    className: r()(S.icon, _)
  })
}, 'playstation')), h ? H.push((0, a.jsx)('div', {
  className: r()(S.iconSpacing, S.liveIconSpacing),
  children: (0, a.jsx)(C.ZP, {
    size: C.ZP.Sizes.SMALL
  })
}, 'stream')) : m && H.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: N.Z.Messages.WATCH_STREAM_WATCHING,
  children: (0, a.jsx)(o.EyeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: r()(S.icon, _)
  })
}, 'watch'));
let V = null != O && !(0, g.yE)(O.flags, x.udG.EMBEDDED),
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
        iconClassName: _,
        guildId: y,
        channelId: D,
        userId: k.id
      }, ''.concat(k.id, '-game')) : (0, a.jsx)(M, {
        hangStatusActivity: b,
        iconClassName: _,
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
  className: l,
  selected: s,
  disabled: c,
  overlap: d,
  'aria-label': u,
  tabIndex: h
} = this.props;
return (0, a.jsx)(o.Clickable, {
  className: r()(l, {
    [S.voiceUser]: !0,
    [S.overlap]: d,
    [S.selected]: s,
    [S.clickable]: null != e,
    [S.userSmall]: i === x.ipw.SMALL,
    [S.userLarge]: i === x.ipw.LARGE,
    [S.disabled]: !s && c
  }),
  onClick: this.handleClick,
  onDoubleClick: this.handleDoubleClick,
  onContextMenu: this.handleContextMenu,
  onMouseEnter: this.handleMouseEnter,
  onMouseLeave: this.handleMouseLeave,
  onMouseDown: this.handleMouseDown,
  onKeyDown: t,
  'aria-label': u,
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
channelId: s,
userId: d
  } = e, [h, p] = l.useState(!1), m = (0, c.O)(e => p(e));
  return l.useEffect(() => {
h && u.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
  channel_id: s,
  guild_id: i,
  user_id: d
});
  }, [
t.id,
s,
i,
d,
h
  ]), (0, a.jsx)(o.TooltipContainer, {
text: N.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
  game: t.name
}),
'aria-label': N.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
  game: t.name
}),
className: S.iconSpacing,
children: (0, a.jsx)('div', {
  ref: m,
  children: (0, a.jsx)(_.Z, {
    className: r()(S.icon, n),
    game: t,
    size: _.Z.Sizes.XSMALL,
    onMouseEnter: () => {
      u.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
        channel_id: s,
        guild_id: i,
        game_name: t.name,
        user_id: d
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
serverMute: l,
deaf: s,
serverDeaf: c
  } = e, d = (0, o.useRedesignIconContext)().enabled, u = [];
  if (n) {
let e;
if (d) {
  let n;
  n = l ? o.MicrophoneDenyIcon : i ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon, e = (0, a.jsx)(n, {
    className: r()(S.icon, t, {
      [S.iconServer]: l
    }),
    color: 'currentColor'
  });
} else
  e = (0, a.jsx)(o.MicrophoneSlashIcon, {
    size: 'md',
    color: 'currentColor',
    className: r()(S.icon, t, {
      [S.iconServer]: l
    }),
    colorClass: i ? S.strikethrough : void 0
  });
u.push((0, a.jsx)(o.TooltipContainer, {
  text: i ? N.Z.Messages.LOCAL_MUTED : l ? N.Z.Messages.SERVER_MUTED : N.Z.Messages.VOICE_CHANNEL_MUTED,
  className: S.iconSpacing,
  children: e
}, 'mute'));
  }
  if (c || s) {
let e;
if (d) {
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
u.push((0, a.jsx)(o.TooltipContainer, {
  className: S.iconSpacing,
  text: c ? N.Z.Messages.SERVER_DEAFENED : N.Z.Messages.VOICE_CHANNEL_DEAFENED,
  children: e
}, 'deaf'));
  }
  return 0 === u.length ? null : (0, a.jsx)(a.Fragment, {
children: u
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