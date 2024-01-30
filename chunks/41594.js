"use strict";
t.r(e), t.d(e, {
  ChannelItemIcon: function() {
    return G
  },
  default: function() {
    return H
  }
}), t("222007");
var E = t("37983"),
  l = t("884691"),
  n = t("414456"),
  C = t.n(n),
  F = t("974667"),
  i = t("617258"),
  u = t("446674"),
  a = t("77078"),
  r = t("430568"),
  o = t("789394"),
  D = t("843962"),
  d = t("679653"),
  s = t("419830"),
  A = t("565298"),
  c = t("965381"),
  f = t("305961"),
  N = t("824563"),
  _ = t("191542"),
  T = t("697218"),
  h = t("37785"),
  m = t("98292"),
  v = t("587974"),
  I = t("50885"),
  S = t("49111"),
  p = t("133335"),
  L = t("404135");
let g = (B, e, t) => {
    l.useLayoutEffect(() => {
      let E = null;
      return B > 0 && (clearTimeout(E), E = setTimeout(() => {
        t(), clearTimeout(E)
      }, 4 * e)), () => clearTimeout(E)
    }, [B, e, t])
  },
  O = {
    SELECTED: L.modeSelected,
    CONNECTED: L.modeConnected,
    UNREAD_IMPORTANT: L.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
    MUTED: L.modeMuted,
    LOCKED: L.modeLocked
  };

function y(B) {
  B.preventDefault(), B.stopPropagation()
}
let U = I.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function M(B) {
  let {
    channel: e
  } = B;
  return (0, E.jsx)(U, {
    src: (0, D.getChannelIconURL)(e),
    "aria-hidden": !0,
    size: a.AvatarSizes.SIZE_20
  })
}

function R(B) {
  let {
    channel: e
  } = B, t = (0, u.useStateFromStores)([T.default], () => T.default.getUser(null == e ? void 0 : e.recipients[0])), l = (0, u.useStateFromStores)([_.default], () => !(null == t || null == e || e.isMultiUserDM()) && null != _.default.getTypingUsers(null == e ? void 0 : e.id)[null == t ? void 0 : t.id]), {
    status: n,
    isMobile: C
  } = (0, u.useStateFromStoresObject)([N.default], () => null == t || null == e || e.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: N.default.getStatus(t.id),
    isMobile: N.default.isMobileOnline(t.id)
  });
  return (0, E.jsx)(U, {
    size: a.AvatarSizes.SIZE_20,
    src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
    status: n,
    isMobile: C,
    isTyping: l,
    "aria-label": null == t ? void 0 : t.username,
    statusTooltip: !0
  })
}
let j = [13, 11, 10, 10, 10, 10, 10],
  G = B => {
    var e;
    let {
      className: t,
      channel: l,
      locked: n,
      hasActiveThreads: F,
      withGuildIcon: r
    } = B, o = (0, u.useStateFromStores)([f.default], () => f.default.getGuild(l.guild_id), [l.guild_id]), D = r ? null == o ? void 0 : o.getIconURL(48) : null, d = null != D, A = function(B, e, t) {
      switch (B.type) {
        case S.ChannelTypes.DM:
          return function() {
            return (0, E.jsx)(R, {
              channel: B
            })
          };
        case S.ChannelTypes.GROUP_DM:
          return function() {
            return (0, E.jsx)(M, {
              channel: B
            })
          };
        default:
          return (0, s.getChannelIconComponent)(B, e, t)
      }
    }(l, o, {
      locked: n,
      hasActiveThreads: F
    });
    if (null == A) return null;
    let c = d ? null == o ? void 0 : o.name : (0, s.getChannelIconTooltipText)(l, o, n, F),
      N = d && null != o ? "".concat(o.name, " - ").concat(c, " icon") : "".concat(c, " icon"),
      _ = (0, i.getAcronym)(null !== (e = null == o ? void 0 : o.toString()) && void 0 !== e ? e : null),
      T = l.type === S.ChannelTypes.DM || l.type === S.ChannelTypes.GROUP_DM;
    return (0, E.jsx)(a.Tooltip, {
      text: c,
      delay: 500,
      children: B => {
        var e;
        return (0, E.jsxs)("div", {
          ...B,
          role: "img",
          "aria-label": N,
          className: C(L.iconContainer, {
            [L.iconContainerWithGuildIcon]: d
          }),
          children: [d && (0, E.jsx)(v.default, {
            mask: v.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, E.jsx)("img", {
              alt: "",
              src: D,
              className: L.channelGuildIcon
            })
          }), !d && r && !T && (0, E.jsx)(v.default, {
            mask: v.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, E.jsx)("div", {
              className: C(L.channelGuildIcon, L.acronym),
              style: {
                fontSize: (e = _).length - 1 > j.length ? j[j.length - 1] : j[e.length - 1]
              },
              children: _
            })
          }), (0, E.jsx)(A, {
            className: C(L.icon, {
              [L.iconWithGuildIcon]: r
            }, t)
          })]
        })
      }
    })
  };

function H(B) {
  var e;
  let {
    channel: t,
    name: n,
    muted: i,
    selected: u,
    connected: D,
    unread: s,
    locked: f,
    hasActiveThreads: N,
    onClick: _,
    onMouseDown: T,
    onMouseUp: v,
    onContextMenu: I,
    connectDragPreview: U,
    className: M,
    iconClassName: R,
    subtitle: j,
    subtitleColor: H,
    enableHangStatus: x,
    channel: {
      type: b
    },
    onMouseEnter: P,
    onMouseLeave: w,
    "aria-label": k,
    children: V,
    guild: J,
    channelTypeOverride: K,
    forceInteractable: W,
    mentionCount: z,
    unreadMode: Y,
    isFavoriteSuggestion: q,
    withGuildIcon: Z
  } = B, {
    enabled: Q,
    left: X
  } = o.ChannelEmojisExperiment.useExperiment({
    location: "337985_1"
  }, {
    autoTrackExposure: !1
  }), $ = Y === p.UnreadMode.IMPORTANT || null != z && z > 0, {
    role: BB,
    ...Be
  } = (0, F.useListItem)(t.id), Bt = l.useRef(null), BE = l.useRef(null), Bl = (0, A.default)(t), Bn = S.Routes.CHANNEL(Bl, t.id), BC = (0, d.default)(t), BF = t.isGuildVocal(), {
    reducedMotion: Bi
  } = l.useContext(a.AccessibilityPreferencesContext), Bu = Bi.enabled, [Ba, Br] = l.useState([]);
  g(Ba.length, 500, () => {
    Br([])
  });
  let Bo = B => {
      if (Bu) return;
      let e = B.currentTarget.getBoundingClientRect(),
        t = e.width > e.height ? e.width : e.height,
        E = B.pageX - e.x - t / 2,
        l = B.pageY - e.y - t / 2;
      Br([...Ba, {
        x: E,
        y: l,
        size: t
      }])
    },
    {
      emoji: BD,
      color: Bd
    } = (0, c.useChannelEmojiAndColor)(t),
    Bs = Q ? (0, E.jsx)(r.default, {
      emojiName: BD.name,
      emojiId: BD.id,
      src: BD.url,
      className: L.twemoji
    }) : null,
    BA = (0, E.jsx)("div", {
      className: C({
        [L.favoritesSuggestion]: q
      }),
      children: (0, E.jsxs)(h.default, {
        role: BF && !D ? "button" : "link",
        href: BF ? void 0 : Bn,
        target: "_blank",
        ref: Bt,
        className: C(L.link, {
          [L.linkWithChannelEmoji]: null != Bs
        }),
        onMouseDown: B => {
          Q && 0 === B.button && Bo(B)
        },
        onClick: () => null == _ ? void 0 : _(t),
        ...Be,
        "aria-label": k,
        focusProps: {
          enabled: !1
        },
        children: [Q && (0, E.jsx)("div", {
          className: L.emojiColorFill,
          style: {
            backgroundColor: Bd,
            opacity: u ? 1 : 0
          }
        }), (0, E.jsxs)("div", {
          className: L.linkTop,
          children: [null != Bs && X && (0, E.jsx)("div", {
            className: C(L.channelEmoji, L.channelEmojiLeftOfIcon),
            style: {
              backgroundColor: Bd
            },
            children: Bs
          }), (0, E.jsx)(G, {
            className: R,
            channel: t,
            guild: J,
            hasActiveThreads: N,
            locked: f,
            withGuildIcon: Z
          }), null != Bs && !X && (0, E.jsx)("div", {
            className: C(L.channelEmoji, L.channelEmojiRightOfIcon),
            style: {
              backgroundColor: Bd
            },
            children: Bs
          }), (0, E.jsx)(m.default, {
            className: C(L.name),
            "aria-hidden": !0,
            children: null == n ? BC : n
          }), l.Children.count(V) > 0 ? (0, E.jsx)("div", {
            onClick: y,
            className: L.children,
            children: V
          }) : null]
        }), x || null == j ? null : (0, E.jsx)("div", {
          className: C(L.linkBottom, {
            [L.withGuildIcon]: Z
          }),
          children: (0, E.jsx)(a.Text, {
            color: null != H ? H : "text-muted",
            variant: "text-xs/medium",
            className: L.subtitle,
            children: j
          })
        }), Q && Ba.length > 0 && Ba.map((B, e) => (0, E.jsx)("span", {
          className: L.ripple,
          style: {
            top: B.y,
            left: B.x,
            width: B.size,
            height: B.size,
            backgroundColor: Bd,
            animationDuration: "".concat(500, "ms"),
            opacity: .36
          }
        }, "ripple-".concat(e)))]
      })
    });
  return (0, E.jsx)(a.FocusRing, {
    focusTarget: Bt,
    ringTarget: BE,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, E.jsxs)("div", {
      className: C(M, null != _ || null != v || null != T || W ? L.wrapper : L.notInteractive, (() => {
        if (u && !Q) return O.SELECTED;
        if (D) return O.CONNECTED;
        if (f) return O.LOCKED;
        if (i) return O.MUTED;
        if (s) return $ ? O.UNREAD_IMPORTANT : O.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(B) {
        switch (B) {
          case S.ChannelTypes.GUILD_STAGE_VOICE:
          case S.ChannelTypes.GUILD_VOICE:
            return L.typeVoice;
          case S.ChannelTypes.ANNOUNCEMENT_THREAD:
          case S.ChannelTypes.PUBLIC_THREAD:
          case S.ChannelTypes.PRIVATE_THREAD:
            return L.typeThread;
          case S.ChannelTypes.GUILD_ANNOUNCEMENT:
          case S.ChannelTypes.GUILD_TEXT:
          case S.ChannelTypes.GUILD_STORE:
          case S.ChannelTypes.GUILD_FORUM:
          case S.ChannelTypes.GUILD_MEDIA:
          default:
            return L.typeDefault
        }
      }(null != K ? K : b)),
      onMouseUp: B => null == v ? void 0 : v(B, t),
      onMouseDown: B => null == T ? void 0 : T(B, t),
      onContextMenu: B => null == I ? void 0 : I(B, t),
      onMouseEnter: P,
      onMouseLeave: w,
      children: [i || !s || u && !BF ? null : (0, E.jsx)("div", {
        className: C(L.unread, $ ? L.unreadImportant : void 0)
      }), null !== (e = null == U ? void 0 : U(BA)) && void 0 !== e ? e : BA]
    })
  })
}