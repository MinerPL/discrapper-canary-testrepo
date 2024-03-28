"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return F
  }
}), n("653041"), n("789020"), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("803997"),
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
  C = n("833858"),
  g = n("223135"),
  S = n("366695"),
  _ = n("119828"),
  T = n("156338"),
  I = n("794358"),
  A = n("381238"),
  v = n("255439"),
  N = n("374129"),
  x = n("639351"),
  M = n("944581"),
  R = n("368666"),
  L = n("630388"),
  y = n("51144"),
  O = n("981631"),
  j = n("354459"),
  P = n("927923"),
  D = n("689938"),
  b = n("474229");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let F = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: a
    } = e;
    return (0, l.jsx)("div", {
      className: r()(a, b.list, n ? b.listCollapse : b.listDefault),
      role: "group",
      children: t
    })
  },
  w = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: a
    } = e;
    return a && null == t ? (0, l.jsx)(h.TooltipContainer, {
      className: b.iconSpacing,
      text: D.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, l.jsx)(f.PlusLargeIcon, {
        className: r()(b.icon, n)
      })
    }, "add-status") : (0, l.jsx)(h.TooltipContainer, {
      className: b.iconSpacing,
      text: (0, C.getHangStatusText)(t),
      children: (0, l.jsx)(g.default, {
        hangStatusActivity: t,
        className: r()(b.hangStatusIcon, n)
      })
    }, "hang-status")
  };
class k extends(a = s.Component) {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: a,
      serverMute: s
    } = this.props;
    return t && !n ? (0, l.jsx)(h.Tooltip, {
      text: D.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, l.jsx)("div", {
        className: r()(b.iconPriortySpeaker, {
          [b.iconPriortySpeakerSpeaking]: !a && !s && e
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
      className: r()(a, b.avatar, {
        [b.avatarLarge]: n === O.OverlayAvatarSizes.LARGE,
        [b.avatarSmall]: n === O.OverlayAvatarSizes.SMALL,
        [b.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === O.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
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
      isGuest: u
    } = this.props;
    return n ? null : (0, l.jsxs)("div", {
      className: r()(s, {
        [b.username]: !0,
        [b.usernameSpeaking]: !i && !o && a
      }),
      children: [null != e ? e : y.default.getName(t), u ? (0, l.jsxs)("span", {
        className: b.guestSuffix,
        children: ["\xa0", D.default.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
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
      showHangStatus: A,
      isSelf: v,
      application: y,
      guildId: U,
      channelId: F,
      user: k,
      handleHoverHangStatus: G
    } = this.props;
    if (o || c) return null;
    let V = [],
      W = (0, l.jsx)(B, {
        iconClassName: m,
        mute: e,
        localMute: t,
        serverMute: a,
        deaf: s,
        serverDeaf: i
      });
    u && (n ? V.push((0, l.jsx)(h.TooltipContainer, {
      className: b.iconSpacing,
      text: D.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, l.jsx)(T.default, {
        className: r()(b.icon, m),
        foreground: b.strikethrough
      })
    }, "video")) : V.push((0, l.jsx)(h.TooltipContainer, {
      className: b.iconSpacing,
      text: D.default.Messages.VIDEO,
      children: (0, l.jsx)(_.default, {
        className: r()(b.icon, m)
      })
    }, "video"))), null != E && V.push((0, l.jsx)(h.TooltipContainer, {
      text: (0, p.default)(E.name),
      className: b.iconSpacing,
      children: (0, l.jsx)(M.default, {
        className: r()(b.icon, m)
      })
    }, "activity")), C === P.GameConsoleTypes.XBOX || g === j.VoicePlatforms.XBOX ? V.push((0, l.jsx)("div", {
      className: r()(b.iconSpacing),
      children: (0, l.jsx)(x.default, {
        className: r()(b.icon, m)
      })
    }, "xbox")) : (C === P.GameConsoleTypes.PLAYSTATION || g === j.VoicePlatforms.PLAYSTATION) && V.push((0, l.jsx)("div", {
      className: r()(b.iconSpacing),
      children: (0, l.jsx)(N.default, {
        className: r()(b.icon, m)
      })
    }, "playstation")), d ? V.push((0, l.jsx)("div", {
      className: r()(b.iconSpacing, b.liveIconSpacing),
      children: (0, l.jsx)(R.default, {
        size: R.default.Sizes.SMALL
      })
    }, "stream")) : f && V.push((0, l.jsx)(h.TooltipContainer, {
      className: b.iconSpacing,
      text: D.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, l.jsx)(I.default, {
        className: r()(b.icon, m)
      })
    }, "watch"));
    let Y = null != y && !(0, L.hasFlag)(y.flags, O.ApplicationFlags.EMBEDDED),
      z = null == S && Y;
    return 0 !== V.length || null != W || A || z ? (0, l.jsxs)("div", {
      className: b.icons,
      children: [(0, l.jsxs)("div", {
        className: b.iconGroup,
        onMouseEnter: () => null == G ? void 0 : G(!1),
        children: [W, V]
      }), A || z ? (0, l.jsx)("div", {
        className: b.iconGroup,
        onMouseEnter: () => null == G ? void 0 : G(!0),
        children: z ? (0, l.jsx)(H, {
          application: y,
          iconClassName: m,
          guildId: U,
          channelId: F,
          userId: k.id
        }, "".concat(k.id, "-game")) : (0, l.jsx)(w, {
          hangStatusActivity: S,
          iconClassName: m,
          isSelf: v
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
        [b.voiceUser]: !0,
        [b.overlap]: u,
        [b.selected]: i,
        [b.clickable]: null != e,
        [b.userSmall]: a === O.OverlayAvatarSizes.SMALL,
        [b.userLarge]: a === O.OverlayAvatarSizes.LARGE,
        [b.disabled]: !i && o
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
        className: r()(b.content, {
          [b.flipped]: n
        }),
        children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
      })
    })
  }
  constructor(...e) {
    super(...e), U(this, "handleClick", e => {
      let {
        onClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), U(this, "handleDoubleClick", e => {
      let {
        onDoubleClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), U(this, "handleContextMenu", e => {
      let {
        onContextMenu: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), U(this, "handleMouseLeave", e => {
      let {
        onMouseLeave: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), U(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), U(this, "handleMouseDown", e => {
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
    u && E.default.trackWithMetadata(O.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: i,
      guild_id: a,
      user_id: o
    })
  }, [t.id, i, a, o, u]), (0, l.jsx)(h.TooltipContainer, {
    text: D.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": D.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: b.iconSpacing,
    children: (0, l.jsx)("div", {
      ref: c,
      children: (0, l.jsx)(S.default, {
        className: r()(b.icon, n),
        game: t,
        size: S.default.Sizes.XSMALL,
        onMouseEnter: () => {
          E.default.trackWithMetadata(O.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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

function B(e) {
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
        className: r()(b.icon, t, {
          [b.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(v.default, {
      className: r()(b.icon, t, {
        [b.iconServer]: s
      }),
      foreground: a ? b.strikethrough : void 0
    });
    p.push((0, l.jsx)(h.TooltipContainer, {
      text: a ? D.default.Messages.LOCAL_MUTED : s ? D.default.Messages.SERVER_MUTED : D.default.Messages.VOICE_CHANNEL_MUTED,
      className: b.iconSpacing,
      children: e
    }, "mute"))
  }
  if (f || i) {
    let e;
    if (m) {
      let n = f ? o.HeadphonesDenyIcon : u.HeadphonesSlashIcon;
      e = (0, l.jsx)(n, {
        className: r()(b.icon, t, {
          [b.iconServer]: f
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(A.default, {
      className: r()(b.icon, t, {
        [b.iconServer]: f
      })
    });
    p.push((0, l.jsx)(h.TooltipContainer, {
      className: b.iconSpacing,
      text: f ? D.default.Messages.SERVER_DEAFENED : D.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === p.length ? null : (0, l.jsx)(l.Fragment, {
    children: p
  })
}
U(k, "defaultProps", {
  avatarContainerClass: b.avatarContainer,
  userNameClassName: b.usernameFont,
  size: O.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1
}), t.default = k