"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return b
  },
  default: function() {
    return w
  }
}), n("424973"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("966900"),
  o = n("838048"),
  u = n("359902"),
  d = n("780624"),
  c = n("120606"),
  f = n("77078"),
  h = n("811425"),
  p = n("204947"),
  m = n("716241"),
  E = n("808742"),
  C = n("342845"),
  S = n("953109"),
  g = n("437825"),
  _ = n("142303"),
  I = n("462579"),
  T = n("200639"),
  v = n("97347"),
  x = n("998564"),
  N = n("420145"),
  A = n("82636"),
  M = n("980423"),
  R = n("158998"),
  j = n("49111"),
  L = n("99795"),
  O = n("171644"),
  y = n("782340"),
  P = n("593596");
let b = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: l
    } = e;
    return (0, a.jsx)("div", {
      className: i(l, P.list, n ? P.listCollapse : P.listDefault),
      role: "group",
      children: t
    })
  },
  D = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: l
    } = e;
    return l && null == t ? (0, a.jsx)(f.TooltipContainer, {
      className: P.iconSpacing,
      text: y.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, a.jsx)(c.PlusLargeIcon, {
        className: i(P.icon, n)
      })
    }, "add-status") : (0, a.jsx)(f.TooltipContainer, {
      className: P.iconSpacing,
      text: (0, E.getHangStatusText)(t),
      children: (0, a.jsx)(C.default, {
        hangStatusActivity: t,
        className: i(P.hangStatusIcon, n)
      })
    }, "hang-status")
  };
class U extends l.Component {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: l,
      serverMute: s
    } = this.props;
    return t && !n ? (0, a.jsx)(f.Tooltip, {
      text: y.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, a.jsx)("div", {
        className: i(P.iconPriortySpeaker, {
          [P.iconPriortySpeakerSpeaking]: !l && !s && e
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
      className: i(l, P.avatar, {
        [P.avatarLarge]: n === j.OverlayAvatarSizes.LARGE,
        [P.avatarSmall]: n === j.OverlayAvatarSizes.SMALL,
        [P.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === j.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
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
      serverMute: o,
      isGuest: u
    } = this.props;
    return n ? null : (0, a.jsxs)("div", {
      className: i(s, {
        [P.username]: !0,
        [P.usernameSpeaking]: !r && !o && l
      }),
      children: [null != e ? e : R.default.getName(t), u ? (0, a.jsxs)("span", {
        className: P.guestSuffix,
        children: ["\xa0", y.default.Messages.GUEST_NAME_SUFFIX]
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
      collapsed: o,
      video: u,
      isStreaming: d,
      disabled: c,
      isWatching: h,
      iconClassName: m,
      embeddedApplication: E,
      otherClientSessionType: C,
      voicePlatform: S,
      hangStatusActivity: T,
      showHangStatus: v,
      isSelf: R,
      application: j,
      guildId: b,
      channelId: U,
      user: w,
      handleHoverOwnHangStatus: V
    } = this.props;
    if (o || c) return null;
    let B = [],
      H = (0, a.jsx)(k, {
        iconClassName: m,
        mute: e,
        localMute: t,
        serverMute: l,
        deaf: s,
        serverDeaf: r
      });
    u && (n ? B.push((0, a.jsx)(f.TooltipContainer, {
      className: P.iconSpacing,
      text: y.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, a.jsx)(_.default, {
        className: i(P.icon, m),
        foreground: P.strikethrough
      })
    }, "video")) : B.push((0, a.jsx)(f.TooltipContainer, {
      className: P.iconSpacing,
      text: y.default.Messages.VIDEO,
      children: (0, a.jsx)(g.default, {
        className: i(P.icon, m)
      })
    }, "video"))), null != E && B.push((0, a.jsx)(f.TooltipContainer, {
      text: (0, p.default)(E.name),
      className: P.iconSpacing,
      children: (0, a.jsx)(A.default, {
        className: i(P.icon, m)
      })
    }, "activity")), C === O.GameConsoleTypes.XBOX || S === L.VoicePlatforms.XBOX ? B.push((0, a.jsx)("div", {
      className: i(P.iconSpacing),
      children: (0, a.jsx)(N.default, {
        className: i(P.icon, m)
      })
    }, "xbox")) : (C === O.GameConsoleTypes.PLAYSTATION || S === L.VoicePlatforms.PLAYSTATION) && B.push((0, a.jsx)("div", {
      className: i(P.iconSpacing),
      children: (0, a.jsx)(x.default, {
        className: i(P.icon, m)
      })
    }, "playstation")), d ? B.push((0, a.jsx)("div", {
      className: i(P.iconSpacing, P.liveIconSpacing),
      children: (0, a.jsx)(M.default, {
        size: M.default.Sizes.SMALL
      })
    }, "stream")) : h && B.push((0, a.jsx)(f.TooltipContainer, {
      className: P.iconSpacing,
      text: y.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, a.jsx)(I.default, {
        className: i(P.icon, m)
      })
    }, "watch"));
    let G = null == T && null != j;
    return 0 !== B.length || null != H || v || G ? (0, a.jsxs)("div", {
      className: P.icons,
      children: [(0, a.jsxs)("div", {
        className: P.iconGroup,
        onMouseEnter: () => null == V ? void 0 : V(!1),
        children: [H, B]
      }), v || G ? (0, a.jsx)("div", {
        className: P.iconGroup,
        onMouseEnter: () => null == V ? void 0 : V(!0),
        children: G ? (0, a.jsx)(F, {
          application: j,
          iconClassName: m,
          guildId: b,
          channelId: U,
          userId: w.id
        }, "".concat(w.id, "-game")) : (0, a.jsx)(D, {
          hangStatusActivity: T,
          iconClassName: m,
          isSelf: R
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
      disabled: o,
      overlap: u,
      "aria-label": d,
      tabIndex: c
    } = this.props;
    return (0, a.jsx)(f.Clickable, {
      className: i(s, {
        [P.voiceUser]: !0,
        [P.overlap]: u,
        [P.selected]: r,
        [P.clickable]: null != e,
        [P.userSmall]: l === j.OverlayAvatarSizes.SMALL,
        [P.userLarge]: l === j.OverlayAvatarSizes.LARGE,
        [P.disabled]: !r && o
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
        className: i(P.content, {
          [P.flipped]: n
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
U.defaultProps = {
  avatarContainerClass: P.avatarContainer,
  userNameClassName: P.usernameFont,
  size: j.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1
};
var w = U;

function F(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: s,
    channelId: r,
    userId: o
  } = e, [u, d] = l.useState(!1), c = (0, h.useIsVisible)(e => d(e));
  return l.useEffect(() => {
    u && m.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: r,
      guild_id: s,
      user_id: o
    })
  }, [t.id, r, s, o, u]), (0, a.jsx)(f.TooltipContainer, {
    text: y.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": y.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: P.iconSpacing,
    children: (0, a.jsx)("div", {
      ref: c,
      children: (0, a.jsx)(S.default, {
        className: i(P.icon, n),
        game: t,
        size: S.default.Sizes.XSMALL,
        onMouseEnter: () => {
          m.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: r,
            guild_id: s,
            game_name: t.name,
            user_id: o
          })
        }
      })
    })
  })
}

function k(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: l,
    serverMute: s,
    deaf: c,
    serverDeaf: h
  } = e, p = (0, f.useRedesignIconContext)().enabled, m = [];
  if (n) {
    let e;
    if (p) {
      let n;
      n = s ? u.MicrophoneDenyIcon : l ? u.MicrophoneDenyIcon : d.MicrophoneSlashIcon, e = (0, a.jsx)(n, {
        className: i(P.icon, t, {
          [P.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, a.jsx)(v.default, {
      className: i(P.icon, t, {
        [P.iconServer]: s
      }),
      foreground: l ? P.strikethrough : void 0
    });
    m.push((0, a.jsx)(f.TooltipContainer, {
      text: l ? y.default.Messages.LOCAL_MUTED : s ? y.default.Messages.SERVER_MUTED : y.default.Messages.VOICE_CHANNEL_MUTED,
      className: P.iconSpacing,
      children: e
    }, "mute"))
  }
  if (h || c) {
    let e;
    if (p) {
      let n = h ? r.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
      e = (0, a.jsx)(n, {
        className: i(P.icon, t, {
          [P.iconServer]: h
        }),
        color: "currentColor"
      })
    } else e = (0, a.jsx)(T.default, {
      className: i(P.icon, t, {
        [P.iconServer]: h
      })
    });
    m.push((0, a.jsx)(f.TooltipContainer, {
      className: P.iconSpacing,
      text: h ? y.default.Messages.SERVER_DEAFENED : y.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === m.length ? null : (0, a.jsx)(a.Fragment, {
    children: m
  })
}