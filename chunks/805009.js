"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return k
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
  C = n("979264"),
  g = n("282256"),
  S = n("833858"),
  _ = n("223135"),
  T = n("366695"),
  I = n("119828"),
  A = n("156338"),
  N = n("794358"),
  v = n("381238"),
  x = n("255439"),
  M = n("374129"),
  R = n("639351"),
  L = n("944581"),
  y = n("368666"),
  O = n("630388"),
  j = n("51144"),
  P = n("981631"),
  D = n("354459"),
  b = n("927923"),
  U = n("689938"),
  F = n("35571");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let k = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: a
    } = e;
    return (0, l.jsx)("div", {
      className: r()(a, F.list, n ? F.listCollapse : F.listDefault),
      role: "group",
      children: t
    })
  },
  H = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: a
    } = e;
    return a && null == t ? (0, l.jsx)(h.TooltipContainer, {
      className: F.iconSpacing,
      text: U.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, l.jsx)(f.PlusLargeIcon, {
        className: r()(F.icon, n)
      })
    }, "add-status") : (0, l.jsx)(h.TooltipContainer, {
      className: F.iconSpacing,
      text: (0, S.getHangStatusText)(t),
      children: (0, l.jsx)(_.default, {
        hangStatusActivity: t,
        className: r()(F.hangStatusIcon, n)
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
      text: U.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, l.jsx)("div", {
        className: r()(F.iconPriortySpeaker, {
          [F.iconPriortySpeakerSpeaking]: !a && !s && e
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
      className: r()(a, F.avatar, {
        [F.avatarLarge]: n === P.OverlayAvatarSizes.LARGE,
        [F.avatarSmall]: n === P.OverlayAvatarSizes.SMALL,
        [F.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === P.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
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
      isOverlay: d
    } = this.props, c = (0, l.jsxs)("div", {
      className: r()(s, {
        [F.username]: !0,
        [F.usernameSpeaking]: !i && !o && a
      }),
      children: [null != e ? e : j.default.getName(t), u ? (0, l.jsxs)("span", {
        className: F.guestSuffix,
        children: ["\xa0", U.default.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
    }), f = {
      clan: t.clan,
      userId: t.id,
      disableTooltip: !0,
      className: F.clanTag
    };
    return d ? (0, l.jsxs)(l.Fragment, {
      children: [c, (0, l.jsx)(C.default, {
        ...f
      })]
    }) : n ? null : (0, l.jsx)(l.Fragment, {
      children: (0, l.jsx)(g.default, {
        ...f,
        children: c
      })
    })
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
      isSelf: T,
      application: v,
      guildId: x,
      channelId: j,
      user: w,
      handleHoverHangStatus: k
    } = this.props;
    if (o || c) return null;
    let B = [],
      W = (0, l.jsx)(V, {
        iconClassName: m,
        mute: e,
        localMute: t,
        serverMute: a,
        deaf: s,
        serverDeaf: i
      });
    u && (n ? B.push((0, l.jsx)(h.TooltipContainer, {
      className: F.iconSpacing,
      text: U.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, l.jsx)(A.default, {
        className: r()(F.icon, m),
        foreground: F.strikethrough
      })
    }, "video")) : B.push((0, l.jsx)(h.TooltipContainer, {
      className: F.iconSpacing,
      text: U.default.Messages.VIDEO,
      children: (0, l.jsx)(I.default, {
        className: r()(F.icon, m)
      })
    }, "video"))), null != E && B.push((0, l.jsx)(h.TooltipContainer, {
      text: (0, p.default)(E.name),
      className: F.iconSpacing,
      children: (0, l.jsx)(L.default, {
        className: r()(F.icon, m)
      })
    }, "activity")), C === b.GameConsoleTypes.XBOX || g === D.VoicePlatforms.XBOX ? B.push((0, l.jsx)("div", {
      className: r()(F.iconSpacing),
      children: (0, l.jsx)(R.default, {
        className: r()(F.icon, m)
      })
    }, "xbox")) : (C === b.GameConsoleTypes.PLAYSTATION || g === D.VoicePlatforms.PLAYSTATION) && B.push((0, l.jsx)("div", {
      className: r()(F.iconSpacing),
      children: (0, l.jsx)(M.default, {
        className: r()(F.icon, m)
      })
    }, "playstation")), d ? B.push((0, l.jsx)("div", {
      className: r()(F.iconSpacing, F.liveIconSpacing),
      children: (0, l.jsx)(y.default, {
        size: y.default.Sizes.SMALL
      })
    }, "stream")) : f && B.push((0, l.jsx)(h.TooltipContainer, {
      className: F.iconSpacing,
      text: U.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, l.jsx)(N.default, {
        className: r()(F.icon, m)
      })
    }, "watch"));
    let Y = null != v && !(0, O.hasFlag)(v.flags, P.ApplicationFlags.EMBEDDED),
      z = null == S && Y;
    return 0 !== B.length || null != W || _ || z ? (0, l.jsxs)("div", {
      className: F.icons,
      children: [(0, l.jsxs)("div", {
        className: F.iconGroup,
        onMouseEnter: () => null == k ? void 0 : k(!1),
        children: [W, B]
      }), _ || z ? (0, l.jsx)("div", {
        className: F.iconGroup,
        onMouseEnter: () => null == k ? void 0 : k(!0),
        children: z ? (0, l.jsx)(G, {
          application: v,
          iconClassName: m,
          guildId: x,
          channelId: j,
          userId: w.id
        }, "".concat(w.id, "-game")) : (0, l.jsx)(H, {
          hangStatusActivity: S,
          iconClassName: m,
          isSelf: T
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
        [F.voiceUser]: !0,
        [F.overlap]: u,
        [F.selected]: i,
        [F.clickable]: null != e,
        [F.userSmall]: a === P.OverlayAvatarSizes.SMALL,
        [F.userLarge]: a === P.OverlayAvatarSizes.LARGE,
        [F.disabled]: !i && o
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
        className: r()(F.content, {
          [F.flipped]: n
        }),
        children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
      })
    })
  }
  constructor(...e) {
    super(...e), w(this, "handleClick", e => {
      let {
        onClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), w(this, "handleDoubleClick", e => {
      let {
        onDoubleClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), w(this, "handleContextMenu", e => {
      let {
        onContextMenu: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), w(this, "handleMouseLeave", e => {
      let {
        onMouseLeave: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), w(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), w(this, "handleMouseDown", e => {
      let {
        onMouseDown: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    })
  }
}

function G(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: i,
    userId: o
  } = e, [u, d] = s.useState(!1), c = (0, m.useIsVisible)(e => d(e));
  return s.useEffect(() => {
    u && E.default.trackWithMetadata(P.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: i,
      guild_id: a,
      user_id: o
    })
  }, [t.id, i, a, o, u]), (0, l.jsx)(h.TooltipContainer, {
    text: U.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": U.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: F.iconSpacing,
    children: (0, l.jsx)("div", {
      ref: c,
      children: (0, l.jsx)(T.default, {
        className: r()(F.icon, n),
        game: t,
        size: T.default.Sizes.XSMALL,
        onMouseEnter: () => {
          E.default.trackWithMetadata(P.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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

function V(e) {
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
        className: r()(F.icon, t, {
          [F.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(x.default, {
      className: r()(F.icon, t, {
        [F.iconServer]: s
      }),
      foreground: a ? F.strikethrough : void 0
    });
    p.push((0, l.jsx)(h.TooltipContainer, {
      text: a ? U.default.Messages.LOCAL_MUTED : s ? U.default.Messages.SERVER_MUTED : U.default.Messages.VOICE_CHANNEL_MUTED,
      className: F.iconSpacing,
      children: e
    }, "mute"))
  }
  if (f || i) {
    let e;
    if (m) {
      let n = f ? o.HeadphonesDenyIcon : u.HeadphonesSlashIcon;
      e = (0, l.jsx)(n, {
        className: r()(F.icon, t, {
          [F.iconServer]: f
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(v.default, {
      className: r()(F.icon, t, {
        [F.iconServer]: f
      })
    });
    p.push((0, l.jsx)(h.TooltipContainer, {
      className: F.iconSpacing,
      text: f ? U.default.Messages.SERVER_DEAFENED : U.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === p.length ? null : (0, l.jsx)(l.Fragment, {
    children: p
  })
}
w(B, "defaultProps", {
  avatarContainerClass: F.avatarContainer,
  userNameClassName: F.usernameFont,
  size: P.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1
}), t.default = B