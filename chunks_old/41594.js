"use strict";
n.r(t), n.d(t, {
  ChannelItemIcon: function() {
    return V
  },
  default: function() {
    return O
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("974667"),
  u = n("617258"),
  o = n("446674"),
  d = n("77078"),
  c = n("843962"),
  h = n("679653"),
  f = n("419830"),
  I = n("565298"),
  g = n("305961"),
  E = n("824563"),
  v = n("191542"),
  T = n("697218"),
  m = n("37785"),
  p = n("98292"),
  _ = n("587974"),
  N = n("50885"),
  C = n("49111"),
  S = n("133335"),
  x = n("39776");
let M = {
  SELECTED: x.modeSelected,
  CONNECTED: x.modeConnected,
  UNREAD_IMPORTANT: x.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: x.modeUnreadLessImportant,
  MUTED: x.modeMuted,
  LOCKED: x.modeLocked
};

function A(e) {
  e.preventDefault(), e.stopPropagation()
}
let y = N.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

function R(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(y, {
    src: (0, c.getChannelIconURL)(t),
    "aria-hidden": !0,
    size: d.AvatarSizes.SIZE_20
  })
}

function L(e) {
  let {
    channel: t
  } = e, n = (0, o.useStateFromStores)([T.default], () => T.default.getUser(null == t ? void 0 : t.recipients[0])), a = (0, o.useStateFromStores)([v.default], () => !(null == n || null == t || t.isMultiUserDM()) && null != v.default.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]), {
    status: s,
    isMobile: i
  } = (0, o.useStateFromStoresObject)([E.default], () => null == n || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: E.default.getStatus(n.id),
    isMobile: E.default.isMobileOnline(n.id)
  });
  return (0, l.jsx)(y, {
    size: d.AvatarSizes.SIZE_20,
    src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
    status: s,
    isMobile: i,
    isTyping: a,
    "aria-label": null == n ? void 0 : n.username,
    statusTooltip: !0
  })
}
let j = [13, 11, 10, 10, 10, 10, 10],
  V = e => {
    var t;
    let {
      className: n,
      channel: a,
      locked: s,
      hasActiveThreads: r,
      withGuildIcon: c
    } = e, h = (0, o.useStateFromStores)([g.default], () => g.default.getGuild(a.guild_id), [a.guild_id]), I = c ? null == h ? void 0 : h.getIconURL(48) : null, E = null != I, v = function(e, t, n) {
      switch (e.type) {
        case C.ChannelTypes.DM:
          return function() {
            return (0, l.jsx)(L, {
              channel: e
            })
          };
        case C.ChannelTypes.GROUP_DM:
          return function() {
            return (0, l.jsx)(R, {
              channel: e
            })
          };
        default:
          return (0, f.getChannelIconComponent)(e, t, n)
      }
    }(a, h, {
      locked: s,
      hasActiveThreads: r
    });
    if (null == v) return null;
    let T = E ? null == h ? void 0 : h.name : (0, f.getChannelIconTooltipText)(a, h, s, r),
      m = E && null != h ? "".concat(h.name, " - ").concat(T, " icon") : "".concat(T, " icon"),
      p = (0, u.getAcronym)(null !== (t = null == h ? void 0 : h.toString()) && void 0 !== t ? t : null),
      N = a.type === C.ChannelTypes.DM || a.type === C.ChannelTypes.GROUP_DM;
    return (0, l.jsx)(d.Tooltip, {
      text: T,
      delay: 500,
      children: e => {
        var t;
        return (0, l.jsxs)("div", {
          ...e,
          role: "img",
          "aria-label": m,
          className: i(x.iconContainer, {
            [x.iconContainerWithGuildIcon]: E
          }),
          children: [E && (0, l.jsx)(_.default, {
            mask: _.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("img", {
              alt: "",
              src: I,
              className: x.channelGuildIcon
            })
          }), !E && c && !N && (0, l.jsx)(_.default, {
            mask: _.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("div", {
              className: i(x.channelGuildIcon, x.acronym),
              style: {
                fontSize: (t = p).length - 1 > j.length ? j[j.length - 1] : j[t.length - 1]
              },
              children: p
            })
          }), (0, l.jsx)(v, {
            className: i(x.icon, {
              [x.iconWithGuildIcon]: c
            }, n)
          })]
        })
      }
    })
  };

function O(e) {
  var t;
  let {
    channel: n,
    name: s,
    muted: u,
    selected: o,
    connected: c,
    unread: f,
    locked: g,
    hasActiveThreads: E,
    onClick: v,
    onMouseDown: T,
    onMouseUp: _,
    onContextMenu: N,
    connectDragPreview: y,
    className: R,
    iconClassName: L,
    subtitle: j,
    subtitleColor: O,
    channel: {
      type: D
    },
    onMouseEnter: w,
    onMouseLeave: U,
    "aria-label": G,
    children: P,
    guild: F,
    channelTypeOverride: H,
    forceInteractable: b,
    mentionCount: B,
    resolvedUnreadSetting: k,
    isFavoriteSuggestion: K,
    withGuildIcon: W
  } = e, Y = k === S.UnreadSetting.ALL_MESSAGES || null != B && B > 0, {
    role: Z,
    ...z
  } = (0, r.useListItem)(n.id), q = a.useRef(null), X = a.useRef(null), Q = (0, I.default)(n), J = C.Routes.CHANNEL(Q, n.id), $ = (0, h.default)(n), ee = n.isGuildVocal(), et = (0, l.jsx)("div", {
    className: i({
      [x.favoritesSuggestion]: K
    }),
    ref: X,
    children: (0, l.jsxs)(m.default, {
      role: ee && !c ? "button" : "link",
      href: ee ? void 0 : J,
      target: "_blank",
      ref: q,
      className: x.link,
      onClick: () => null == v ? void 0 : v(n),
      ...z,
      "aria-label": G,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: x.linkTop,
        children: [(0, l.jsx)(V, {
          className: L,
          channel: n,
          guild: F,
          hasActiveThreads: E,
          locked: g,
          withGuildIcon: W
        }), (0, l.jsx)(p.default, {
          className: i(x.name),
          "aria-hidden": !0,
          children: null == s ? $ : s
        }), a.Children.count(P) > 0 ? (0, l.jsx)("div", {
          onClick: A,
          className: x.children,
          children: P
        }) : null]
      }), null != j ? (0, l.jsx)("div", {
        className: i(x.linkBottom, {
          [x.withGuildIcon]: W
        }),
        children: (0, l.jsx)(d.Text, {
          color: null != O ? O : "text-muted",
          variant: "text-xs/medium",
          className: x.subtitle,
          children: j
        })
      }) : null]
    })
  });
  return (0, l.jsx)(d.FocusRing, {
    focusTarget: q,
    ringTarget: X,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: i(R, null != v || null != _ || null != T || b ? x.wrapper : x.notInteractive, (() => {
        if (o) return M.SELECTED;
        if (c) return M.CONNECTED;
        if (g) return M.LOCKED;
        if (u) return M.MUTED;
        if (f) return Y ? M.UNREAD_IMPORTANT : M.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case C.ChannelTypes.GUILD_STAGE_VOICE:
          case C.ChannelTypes.GUILD_VOICE:
            return x.typeVoice;
          case C.ChannelTypes.ANNOUNCEMENT_THREAD:
          case C.ChannelTypes.PUBLIC_THREAD:
          case C.ChannelTypes.PRIVATE_THREAD:
            return x.typeThread;
          case C.ChannelTypes.GUILD_ANNOUNCEMENT:
          case C.ChannelTypes.GUILD_TEXT:
          case C.ChannelTypes.GUILD_STORE:
          case C.ChannelTypes.GUILD_FORUM:
          case C.ChannelTypes.GUILD_MEDIA:
          default:
            return x.typeDefault
        }
      }(null != H ? H : D)),
      onMouseUp: e => null == _ ? void 0 : _(e, n),
      onMouseDown: e => null == T ? void 0 : T(e, n),
      onContextMenu: e => null == N ? void 0 : N(e, n),
      onMouseEnter: w,
      onMouseLeave: U,
      children: [u || !f || o && !ee ? null : (0, l.jsx)("div", {
        className: i(x.unread, Y ? x.unreadImportant : void 0)
      }), null !== (t = null == y ? void 0 : y(et)) && void 0 !== t ? t : et]
    })
  })
}