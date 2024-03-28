"use strict";
n.r(t), n.d(t, {
  ChannelItemIcon: function() {
    return v
  },
  default: function() {
    return V
  }
});
var l = n("735250"),
  u = n("470079"),
  s = n("803997"),
  a = n.n(s),
  r = n("924826"),
  i = n("468194"),
  I = n("442837"),
  o = n("481060"),
  d = n("43267"),
  _ = n("933557"),
  T = n("471445"),
  E = n("727429"),
  f = n("430824"),
  c = n("158776"),
  N = n("111583"),
  S = n("594174"),
  O = n("499150"),
  m = n("514342"),
  g = n("806519"),
  h = n("998502"),
  M = n("981631"),
  p = n("490897"),
  D = n("697908");
let U = {
  SELECTED: D.modeSelected,
  CONNECTED: D.modeConnected,
  UNREAD_IMPORTANT: D.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
  MUTED: D.modeMuted,
  LOCKED: D.modeLocked
};

function R(e) {
  e.preventDefault(), e.stopPropagation()
}
let P = h.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function A(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(P, {
    src: (0, d.getChannelIconURL)(t),
    "aria-hidden": !0,
    size: o.AvatarSizes.SIZE_20
  })
}

function C(e) {
  let {
    channel: t
  } = e, n = (0, I.useStateFromStores)([S.default], () => S.default.getUser(null == t ? void 0 : t.recipients[0])), u = (0, I.useStateFromStores)([N.default], () => !(null == n || null == t || t.isMultiUserDM()) && null != N.default.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]), {
    status: s,
    isMobile: a
  } = (0, I.useStateFromStoresObject)([c.default], () => null == n || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: c.default.getStatus(n.id),
    isMobile: c.default.isMobileOnline(n.id)
  });
  return (0, l.jsx)(P, {
    size: o.AvatarSizes.SIZE_20,
    src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
    status: s,
    isMobile: a,
    isTyping: u,
    "aria-label": null == n ? void 0 : n.username,
    statusTooltip: !0
  })
}
let y = [13, 11, 10, 10, 10, 10, 10],
  v = e => {
    var t;
    let {
      className: n,
      channel: u,
      locked: s,
      hasActiveThreads: r,
      withGuildIcon: d
    } = e, _ = (0, I.useStateFromStores)([f.default], () => f.default.getGuild(u.guild_id), [u.guild_id]), E = d ? null == _ ? void 0 : _.getIconURL(48) : null, c = null != E, N = function(e, t, n) {
      switch (e.type) {
        case M.ChannelTypes.DM:
          return function() {
            return (0, l.jsx)(C, {
              channel: e
            })
          };
        case M.ChannelTypes.GROUP_DM:
          return function() {
            return (0, l.jsx)(A, {
              channel: e
            })
          };
        default:
          return (0, T.getChannelIconComponent)(e, t, n)
      }
    }(u, _, {
      locked: s,
      hasActiveThreads: r
    });
    if (null == N) return null;
    let S = c ? null == _ ? void 0 : _.name : (0, T.getChannelIconTooltipText)(u, _, s, r),
      O = c && null != _ ? "".concat(_.name, " - ").concat(S, " icon") : "".concat(S, " icon"),
      m = (0, i.getAcronym)(null !== (t = null == _ ? void 0 : _.toString()) && void 0 !== t ? t : null),
      h = u.type === M.ChannelTypes.DM || u.type === M.ChannelTypes.GROUP_DM;
    return (0, l.jsx)(o.Tooltip, {
      text: S,
      delay: 500,
      children: e => {
        var t;
        return (0, l.jsxs)("div", {
          ...e,
          role: "img",
          "aria-label": O,
          className: a()(D.iconContainer, {
            [D.iconContainerWithGuildIcon]: c
          }),
          children: [c && (0, l.jsx)(g.default, {
            mask: g.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("img", {
              alt: "",
              src: E,
              className: D.channelGuildIcon
            })
          }), !c && d && !h && (0, l.jsx)(g.default, {
            mask: g.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("div", {
              className: a()(D.channelGuildIcon, D.acronym),
              style: {
                fontSize: (t = m).length - 1 > y.length ? y[y.length - 1] : y[t.length - 1]
              },
              children: m
            })
          }), (0, l.jsx)(N, {
            className: a()(D.icon, {
              [D.iconWithGuildIcon]: d
            }, n)
          })]
        })
      }
    })
  };

function V(e) {
  var t;
  let {
    channel: n,
    name: s,
    muted: i,
    selected: I,
    connected: d,
    unread: T,
    locked: f,
    hasActiveThreads: c,
    onClick: N,
    onMouseDown: S,
    onMouseUp: g,
    onContextMenu: h,
    connectDragPreview: P,
    className: A,
    iconClassName: C,
    subtitle: y,
    subtitleColor: V,
    channel: {
      type: x
    },
    onMouseEnter: L,
    onMouseLeave: H,
    "aria-label": b,
    children: G,
    guild: j,
    channelTypeOverride: k,
    forceInteractable: F,
    mentionCount: X,
    resolvedUnreadSetting: w,
    isFavoriteSuggestion: Y,
    withGuildIcon: K
  } = e, z = w === p.UnreadSetting.ALL_MESSAGES || null != X && X > 0, {
    role: B,
    ...q
  } = (0, r.useListItem)(n.id), W = u.useRef(null), J = u.useRef(null), Z = (0, E.default)(n), Q = M.Routes.CHANNEL(Z, n.id), $ = (0, _.default)(n), ee = n.isGuildVocal(), et = (0, l.jsx)("div", {
    className: a()({
      [D.favoritesSuggestion]: Y
    }),
    ref: J,
    children: (0, l.jsxs)(O.default, {
      role: ee && !d ? "button" : "link",
      href: ee ? void 0 : Q,
      target: "_blank",
      ref: W,
      className: D.link,
      onClick: () => null == N ? void 0 : N(n),
      ...q,
      "aria-label": b,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: D.linkTop,
        children: [(0, l.jsx)(v, {
          className: C,
          channel: n,
          guild: j,
          hasActiveThreads: c,
          locked: f,
          withGuildIcon: K
        }), (0, l.jsx)(m.default, {
          className: a()(D.name),
          "aria-hidden": !0,
          children: null == s ? $ : s
        }), u.Children.count(G) > 0 ? (0, l.jsx)("div", {
          onClick: R,
          className: D.children,
          children: G
        }) : null]
      }), null != y ? (0, l.jsx)("div", {
        className: a()(D.linkBottom, {
          [D.withGuildIcon]: K
        }),
        children: (0, l.jsx)(o.Text, {
          color: null != V ? V : "text-muted",
          variant: "text-xs/medium",
          className: D.subtitle,
          children: y
        })
      }) : null]
    })
  });
  return (0, l.jsx)(o.FocusRing, {
    focusTarget: W,
    ringTarget: J,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: a()(A, null != N || null != g || null != S || F ? D.wrapper : D.notInteractive, (() => {
        if (I) return U.SELECTED;
        if (d) return U.CONNECTED;
        if (f) return U.LOCKED;
        if (i) return U.MUTED;
        if (T) return z ? U.UNREAD_IMPORTANT : U.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case M.ChannelTypes.GUILD_STAGE_VOICE:
          case M.ChannelTypes.GUILD_VOICE:
            return D.typeVoice;
          case M.ChannelTypes.ANNOUNCEMENT_THREAD:
          case M.ChannelTypes.PUBLIC_THREAD:
          case M.ChannelTypes.PRIVATE_THREAD:
            return D.typeThread;
          case M.ChannelTypes.GUILD_ANNOUNCEMENT:
          case M.ChannelTypes.GUILD_TEXT:
          case M.ChannelTypes.GUILD_STORE:
          case M.ChannelTypes.GUILD_FORUM:
          case M.ChannelTypes.GUILD_MEDIA:
          default:
            return D.typeDefault
        }
      }(null != k ? k : x)),
      onMouseUp: e => null == g ? void 0 : g(e, n),
      onMouseDown: e => null == S ? void 0 : S(e, n),
      onContextMenu: e => null == h ? void 0 : h(e, n),
      onMouseEnter: L,
      onMouseLeave: H,
      children: [i || !T || I && !ee ? null : (0, l.jsx)("div", {
        className: a()(D.unread, z ? D.unreadImportant : void 0)
      }), null !== (t = null == P ? void 0 : P(et)) && void 0 !== t ? t : et]
    })
  })
}