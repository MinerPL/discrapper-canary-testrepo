"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return w
  }
}), n("653041"), n("789020"), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("742444"),
  u = n("498503"),
  d = n("247636"),
  c = n("278724"),
  f = n("975359"),
  h = n("481060"),
  m = n("434650"),
  p = n("657305"),
  E = n("367907"),
  C = n("282256"),
  g = n("833858"),
  S = n("223135"),
  _ = n("366695"),
  T = n("119828"),
  I = n("156338"),
  A = n("794358"),
  N = n("381238"),
  v = n("779863"),
  x = n("374129"),
  M = n("639351"),
  R = n("944581"),
  y = n("368666"),
  L = n("630388"),
  O = n("51144"),
  j = n("981631"),
  P = n("354459"),
  D = n("927923"),
  b = n("689938"),
  U = n("172219");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let w = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: a
    } = e;
    return (0, l.jsx)("div", {
      className: r()(a, U.list, n ? U.listCollapse : U.listDefault),
      role: "group",
      children: t
    })
  },
  k = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: a
    } = e;
    return a && null == t ? (0, l.jsx)(h.TooltipContainer, {
      className: U.iconSpacing,
      text: b.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, l.jsx)(f.PlusLargeIcon, {
        className: r()(U.icon, n)
      })
    }, "add-status") : (0, l.jsx)(h.TooltipContainer, {
      className: U.iconSpacing,
      text: (0, g.getHangStatusText)(t),
      children: (0, l.jsx)(S.default, {
        hangStatusActivity: t,
        className: r()(U.hangStatusIcon, n)
      })
    }, "hang-status")
  };
class B extends(a = s.Component) {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: a,
      serverMute: s
    } = this.props;
    return t && !n ? (0, l.jsx)(h.Tooltip, {
      text: b.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, l.jsx)("div", {
        className: r()(U.iconPriortySpeaker, {
          [U.iconPriortySpeakerSpeaking]: !a && !s && e
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
      avatarContainerClass: a,
      guildId: s
    } = this.props;
    return (0, l.jsx)("div", {
      className: r()(a, U.avatar, {
        [U.avatarLarge]: n === j.OverlayAvatarSizes.LARGE,
        [U.avatarSmall]: n === j.OverlayAvatarSizes.SMALL,
        [U.avatarSpeaking]: e
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
      speaking: a,
      userNameClassName: s,
      mute: i,
      serverMute: o,
      isGuest: u,
      isOverlay: d,
      guildId: c
    } = this.props, f = (0, l.jsxs)("div", {
      className: r()(s, {
        [U.username]: !0,
        [U.usernameSpeaking]: !i && !o && a
      }),
      children: [null != e ? e : O.default.getName(t), u ? (0, l.jsxs)("span", {
        className: U.guestSuffix,
        children: ["\xa0", b.default.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
    }), h = {
      clan: t.clan,
      userId: t.id,
      contextGuildId: c,
      isOverlay: d,
      disableTooltip: !0,
      className: r()(U.clanTag, d && U.isOverlay),
      profileViewedAnalytics: {
        source: d ? j.AnalyticsSections.OVERLAY : j.AnalyticsLocations.VOICE_PANEL,
        tagUserId: t.id
      }
    };
    return !n || d ? (0, l.jsx)(l.Fragment, {
      children: (0, l.jsx)(C.default, {
        ...h,
        children: f
      })
    }) : null
  }
  renderIcons() {
    let {
      mute: e,
      localMute: t,
      localVideoDisabled: n,
      serverMute: a,
      deaf: s,
      serverDeaf: i,
      collapsed: o,
      video: u,
      isStreaming: d,
      disabled: c,
      isWatching: f,
      iconClassName: m,
      embeddedApplication: E,
      otherClientSessionType: C,
      voicePlatform: g,
      hangStatusActivity: S,
      showHangStatus: _,
      isSelf: N,
      application: v,
      guildId: O,
      channelId: F,
      user: w,
      handleHoverHangStatus: B
    } = this.props;
    if (o || c) return null;
    let V = [],
      W = (0, l.jsx)(G, {
        iconClassName: m,
        mute: e,
        localMute: t,
        serverMute: a,
        deaf: s,
        serverDeaf: i
      });
    u && (n ? V.push((0, l.jsx)(h.TooltipContainer, {
      className: U.iconSpacing,
      text: b.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, l.jsx)(I.default, {
        className: r()(U.icon, m),
        foreground: U.strikethrough
      })
    }, "video")) : V.push((0, l.jsx)(h.TooltipContainer, {
      className: U.iconSpacing,
      text: b.default.Messages.VIDEO,
      children: (0, l.jsx)(T.default, {
        className: r()(U.icon, m)
      })
    }, "video"))), null != E && V.push((0, l.jsx)(h.TooltipContainer, {
      text: (0, p.default)(E.name),
      className: U.iconSpacing,
      children: (0, l.jsx)(R.default, {
        className: r()(U.icon, m)
      })
    }, "activity")), C === D.GameConsoleTypes.XBOX || g === P.VoicePlatforms.XBOX ? V.push((0, l.jsx)("div", {
      className: r()(U.iconSpacing),
      children: (0, l.jsx)(M.default, {
        className: r()(U.icon, m)
      })
    }, "xbox")) : (C === D.GameConsoleTypes.PLAYSTATION || g === P.VoicePlatforms.PLAYSTATION) && V.push((0, l.jsx)("div", {
      className: r()(U.iconSpacing),
      children: (0, l.jsx)(x.default, {
        className: r()(U.icon, m)
      })
    }, "playstation")), d ? V.push((0, l.jsx)("div", {
      className: r()(U.iconSpacing, U.liveIconSpacing),
      children: (0, l.jsx)(y.default, {
        size: y.default.Sizes.SMALL
      })
    }, "stream")) : f && V.push((0, l.jsx)(h.TooltipContainer, {
      className: U.iconSpacing,
      text: b.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, l.jsx)(A.default, {
        className: r()(U.icon, m)
      })
    }, "watch"));
    let Y = null != v && !(0, L.hasFlag)(v.flags, j.ApplicationFlags.EMBEDDED),
      z = null == S && Y;
    return 0 !== V.length || null != W || _ || z ? (0, l.jsxs)("div", {
      className: U.icons,
      children: [(0, l.jsxs)("div", {
        className: U.iconGroup,
        onMouseEnter: () => null == B ? void 0 : B(!1),
        children: [W, V]
      }), _ || z ? (0, l.jsx)("div", {
        className: U.iconGroup,
        onMouseEnter: () => null == B ? void 0 : B(!0),
        children: z ? (0, l.jsx)(H, {
          application: v,
          iconClassName: m,
          guildId: O,
          channelId: F,
          userId: w.id
        }, "".concat(w.id, "-game")) : (0, l.jsx)(k, {
          hangStatusActivity: S,
          iconClassName: m,
          isSelf: N
        })
      }) : null]
    }) : null
  }
  render() {
    let {
      onClick: e,
      onKeyDown: t,
      flipped: n,
      size: a,
      className: s,
      selected: i,
      disabled: o,
      overlap: u,
      "aria-label": d,
      tabIndex: c
    } = this.props;
    return (0, l.jsx)(h.Clickable, {
      className: r()(s, {
        [U.voiceUser]: !0,
        [U.overlap]: u,
        [U.selected]: i,
        [U.clickable]: null != e,
        [U.userSmall]: a === j.OverlayAvatarSizes.SMALL,
        [U.userLarge]: a === j.OverlayAvatarSizes.LARGE,
        [U.disabled]: !i && o
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
      children: (0, l.jsxs)("div", {
        className: r()(U.content, {
          [U.flipped]: n
        }),
        children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
      })
    })
  }
  constructor(...e) {
    super(...e), F(this, "handleClick", e => {
      let {
        onClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), F(this, "handleDoubleClick", e => {
      let {
        onDoubleClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), F(this, "handleContextMenu", e => {
      let {
        onContextMenu: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), F(this, "handleMouseLeave", e => {
      let {
        onMouseLeave: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), F(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), F(this, "handleMouseDown", e => {
      let {
        onMouseDown: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    })
  }
}

function H(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: i,
    userId: o
  } = e, [u, d] = s.useState(!1), c = (0, m.useIsVisible)(e => d(e));
  return s.useEffect(() => {
    u && E.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: i,
      guild_id: a,
      user_id: o
    })
  }, [t.id, i, a, o, u]), (0, l.jsx)(h.TooltipContainer, {
    text: b.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": b.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: U.iconSpacing,
    children: (0, l.jsx)("div", {
      ref: c,
      children: (0, l.jsx)(_.default, {
        className: r()(U.icon, n),
        game: t,
        size: _.default.Sizes.XSMALL,
        onMouseEnter: () => {
          E.default.trackWithMetadata(j.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: i,
            guild_id: a,
            game_name: t.name,
            user_id: o
          })
        }
      })
    })
  })
}

function G(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: a,
    serverMute: s,
    deaf: i,
    serverDeaf: f
  } = e, m = (0, h.useRedesignIconContext)().enabled, p = [];
  if (n) {
    let e;
    if (m) {
      let n;
      n = s ? d.MicrophoneDenyIcon : a ? d.MicrophoneDenyIcon : c.MicrophoneSlashIcon, e = (0, l.jsx)(n, {
        className: r()(U.icon, t, {
          [U.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(v.default, {
      className: r()(U.icon, t, {
        [U.iconServer]: s
      }),
      foreground: a ? U.strikethrough : void 0
    });
    p.push((0, l.jsx)(h.TooltipContainer, {
      text: a ? b.default.Messages.LOCAL_MUTED : s ? b.default.Messages.SERVER_MUTED : b.default.Messages.VOICE_CHANNEL_MUTED,
      className: U.iconSpacing,
      children: e
    }, "mute"))
  }
  if (f || i) {
    let e;
    if (m) {
      let n = f ? o.HeadphonesDenyIcon : u.HeadphonesSlashIcon;
      e = (0, l.jsx)(n, {
        className: r()(U.icon, t, {
          [U.iconServer]: f
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(N.default, {
      className: r()(U.icon, t, {
        [U.iconServer]: f
      })
    });
    p.push((0, l.jsx)(h.TooltipContainer, {
      className: U.iconSpacing,
      text: f ? b.default.Messages.SERVER_DEAFENED : b.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === p.length ? null : (0, l.jsx)(l.Fragment, {
    children: p
  })
}
F(B, "defaultProps", {
  avatarContainerClass: U.avatarContainer,
  userNameClassName: U.usernameFont,
  size: j.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1,
  isOverlay: !1
}), t.default = B