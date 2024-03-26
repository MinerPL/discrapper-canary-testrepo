"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return b
  },
  default: function() {
    return F
  }
}), n("424973"), n("702976"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("966900"),
  u = n("838048"),
  o = n("359902"),
  d = n("780624"),
  c = n("120606"),
  f = n("77078"),
  h = n("811425"),
  m = n("204947"),
  p = n("716241"),
  E = n("808742"),
  g = n("342845"),
  S = n("953109"),
  C = n("437825"),
  _ = n("142303"),
  I = n("462579"),
  T = n("200639"),
  v = n("97347"),
  x = n("998564"),
  N = n("420145"),
  A = n("82636"),
  M = n("980423"),
  R = n("568734"),
  j = n("158998"),
  L = n("49111"),
  y = n("99795"),
  O = n("171644"),
  P = n("782340"),
  D = n("274750");
let b = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: l
    } = e;
    return (0, a.jsx)("div", {
      className: i(l, D.list, n ? D.listCollapse : D.listDefault),
      role: "group",
      children: t
    })
  },
  U = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: l
    } = e;
    return l && null == t ? (0, a.jsx)(f.TooltipContainer, {
      className: D.iconSpacing,
      text: P.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, a.jsx)(c.PlusLargeIcon, {
        className: i(D.icon, n)
      })
    }, "add-status") : (0, a.jsx)(f.TooltipContainer, {
      className: D.iconSpacing,
      text: (0, E.getHangStatusText)(t),
      children: (0, a.jsx)(g.default, {
        hangStatusActivity: t,
        className: i(D.hangStatusIcon, n)
      })
    }, "hang-status")
  };
class w extends l.Component {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: l,
      serverMute: s
    } = this.props;
    return t && !n ? (0, a.jsx)(f.Tooltip, {
      text: P.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, a.jsx)("div", {
        className: i(D.iconPriortySpeaker, {
          [D.iconPriortySpeakerSpeaking]: !l && !s && e
        }),
        ...t
      })
    }) : null
  }
  renderAvatar() {
    let {
      speaking: e,
      user: t,
      size: n,
      avatarContainerClass: l,
      guildId: s
    } = this.props;
    return (0, a.jsx)("div", {
      className: i(l, D.avatar, {
        [D.avatarLarge]: n === L.OverlayAvatarSizes.LARGE,
        [D.avatarSmall]: n === L.OverlayAvatarSizes.SMALL,
        [D.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === L.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
      }
    })
  }
  renderName() {
    let {
      nick: e,
      user: t,
      collapsed: n,
      speaking: l,
      userNameClassName: s,
      mute: r,
      serverMute: u,
      isGuest: o
    } = this.props;
    return n ? null : (0, a.jsxs)("div", {
      className: i(s, {
        [D.username]: !0,
        [D.usernameSpeaking]: !r && !u && l
      }),
      children: [null != e ? e : j.default.getName(t), o ? (0, a.jsxs)("span", {
        className: D.guestSuffix,
        children: ["\xa0", P.default.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
    })
  }
  renderIcons() {
    let {
      mute: e,
      localMute: t,
      localVideoDisabled: n,
      serverMute: l,
      deaf: s,
      serverDeaf: r,
      collapsed: u,
      video: o,
      isStreaming: d,
      disabled: c,
      isWatching: h,
      iconClassName: p,
      embeddedApplication: E,
      otherClientSessionType: g,
      voicePlatform: S,
      hangStatusActivity: T,
      showHangStatus: v,
      isSelf: j,
      application: b,
      guildId: w,
      channelId: F,
      user: k,
      handleHoverHangStatus: B
    } = this.props;
    if (u || c) return null;
    let G = [],
      W = (0, a.jsx)(H, {
        iconClassName: p,
        mute: e,
        localMute: t,
        serverMute: l,
        deaf: s,
        serverDeaf: r
      });
    o && (n ? G.push((0, a.jsx)(f.TooltipContainer, {
      className: D.iconSpacing,
      text: P.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, a.jsx)(_.default, {
        className: i(D.icon, p),
        foreground: D.strikethrough
      })
    }, "video")) : G.push((0, a.jsx)(f.TooltipContainer, {
      className: D.iconSpacing,
      text: P.default.Messages.VIDEO,
      children: (0, a.jsx)(C.default, {
        className: i(D.icon, p)
      })
    }, "video"))), null != E && G.push((0, a.jsx)(f.TooltipContainer, {
      text: (0, m.default)(E.name),
      className: D.iconSpacing,
      children: (0, a.jsx)(A.default, {
        className: i(D.icon, p)
      })
    }, "activity")), g === O.GameConsoleTypes.XBOX || S === y.VoicePlatforms.XBOX ? G.push((0, a.jsx)("div", {
      className: i(D.iconSpacing),
      children: (0, a.jsx)(N.default, {
        className: i(D.icon, p)
      })
    }, "xbox")) : (g === O.GameConsoleTypes.PLAYSTATION || S === y.VoicePlatforms.PLAYSTATION) && G.push((0, a.jsx)("div", {
      className: i(D.iconSpacing),
      children: (0, a.jsx)(x.default, {
        className: i(D.icon, p)
      })
    }, "playstation")), d ? G.push((0, a.jsx)("div", {
      className: i(D.iconSpacing, D.liveIconSpacing),
      children: (0, a.jsx)(M.default, {
        size: M.default.Sizes.SMALL
      })
    }, "stream")) : h && G.push((0, a.jsx)(f.TooltipContainer, {
      className: D.iconSpacing,
      text: P.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, a.jsx)(I.default, {
        className: i(D.icon, p)
      })
    }, "watch"));
    let Y = null != b && !(0, R.hasFlag)(b.flags, L.ApplicationFlags.EMBEDDED),
      z = null == T && Y;
    return 0 !== G.length || null != W || v || z ? (0, a.jsxs)("div", {
      className: D.icons,
      children: [(0, a.jsxs)("div", {
        className: D.iconGroup,
        onMouseEnter: () => null == B ? void 0 : B(!1),
        children: [W, G]
      }), v || z ? (0, a.jsx)("div", {
        className: D.iconGroup,
        onMouseEnter: () => null == B ? void 0 : B(!0),
        children: z ? (0, a.jsx)(V, {
          application: b,
          iconClassName: p,
          guildId: w,
          channelId: F,
          userId: k.id
        }, "".concat(k.id, "-game")) : (0, a.jsx)(U, {
          hangStatusActivity: T,
          iconClassName: p,
          isSelf: j
        })
      }) : null]
    }) : null
  }
  render() {
    let {
      onClick: e,
      onKeyDown: t,
      flipped: n,
      size: l,
      className: s,
      selected: r,
      disabled: u,
      overlap: o,
      "aria-label": d,
      tabIndex: c
    } = this.props;
    return (0, a.jsx)(f.Clickable, {
      className: i(s, {
        [D.voiceUser]: !0,
        [D.overlap]: o,
        [D.selected]: r,
        [D.clickable]: null != e,
        [D.userSmall]: l === L.OverlayAvatarSizes.SMALL,
        [D.userLarge]: l === L.OverlayAvatarSizes.LARGE,
        [D.disabled]: !r && u
      }),
      onClick: this.handleClick,
      onDoubleClick: this.handleDoubleClick,
      onContextMenu: this.handleContextMenu,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseDown: this.handleMouseDown,
      onKeyDown: t,
      "aria-label": d,
      tabIndex: c,
      children: (0, a.jsxs)("div", {
        className: i(D.content, {
          [D.flipped]: n
        }),
        children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      let {
        onClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleDoubleClick = e => {
      let {
        onDoubleClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleContextMenu = e => {
      let {
        onContextMenu: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleMouseLeave = e => {
      let {
        onMouseLeave: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleMouseEnter = e => {
      let {
        onMouseEnter: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleMouseDown = e => {
      let {
        onMouseDown: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }
  }
}
w.defaultProps = {
  avatarContainerClass: D.avatarContainer,
  userNameClassName: D.usernameFont,
  size: L.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1
};
var F = w;

function V(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: s,
    channelId: r,
    userId: u
  } = e, [o, d] = l.useState(!1), c = (0, h.useIsVisible)(e => d(e));
  return l.useEffect(() => {
    o && p.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: r,
      guild_id: s,
      user_id: u
    })
  }, [t.id, r, s, u, o]), (0, a.jsx)(f.TooltipContainer, {
    text: P.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": P.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: D.iconSpacing,
    children: (0, a.jsx)("div", {
      ref: c,
      children: (0, a.jsx)(S.default, {
        className: i(D.icon, n),
        game: t,
        size: S.default.Sizes.XSMALL,
        onMouseEnter: () => {
          p.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: r,
            guild_id: s,
            game_name: t.name,
            user_id: u
          })
        }
      })
    })
  })
}

function H(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: l,
    serverMute: s,
    deaf: c,
    serverDeaf: h
  } = e, m = (0, f.useRedesignIconContext)().enabled, p = [];
  if (n) {
    let e;
    if (m) {
      let n;
      n = s ? o.MicrophoneDenyIcon : l ? o.MicrophoneDenyIcon : d.MicrophoneSlashIcon, e = (0, a.jsx)(n, {
        className: i(D.icon, t, {
          [D.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, a.jsx)(v.default, {
      className: i(D.icon, t, {
        [D.iconServer]: s
      }),
      foreground: l ? D.strikethrough : void 0
    });
    p.push((0, a.jsx)(f.TooltipContainer, {
      text: l ? P.default.Messages.LOCAL_MUTED : s ? P.default.Messages.SERVER_MUTED : P.default.Messages.VOICE_CHANNEL_MUTED,
      className: D.iconSpacing,
      children: e
    }, "mute"))
  }
  if (h || c) {
    let e;
    if (m) {
      let n = h ? r.HeadphonesDenyIcon : u.HeadphonesSlashIcon;
      e = (0, a.jsx)(n, {
        className: i(D.icon, t, {
          [D.iconServer]: h
        }),
        color: "currentColor"
      })
    } else e = (0, a.jsx)(T.default, {
      className: i(D.icon, t, {
        [D.iconServer]: h
      })
    });
    p.push((0, a.jsx)(f.TooltipContainer, {
      className: D.iconSpacing,
      text: h ? P.default.Messages.SERVER_DEAFENED : P.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === p.length ? null : (0, a.jsx)(a.Fragment, {
    children: p
  })
}