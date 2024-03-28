"use strict";
n.r(t), n.d(t, {
  NonChannelCategory: function() {
    return O
  },
  ReadonlyCategoryChannel: function() {
    return b
  },
  VoiceChannelCategory: function() {
    return D
  },
  VoiceChannelCategoryButton: function() {
    return y
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("211739"),
  c = n("239091"),
  f = n("146773"),
  h = n("680089"),
  C = n("430824"),
  p = n("496675"),
  m = n("9156"),
  g = n("514342"),
  E = n("696202"),
  S = n("605403"),
  _ = n("908773"),
  I = n("632184"),
  N = n("151827"),
  T = n("203818"),
  A = n("438144"),
  L = n("981631"),
  v = n("689938"),
  x = n("850992");

function R(e) {
  e.stopPropagation()
}
let M = a.memo(function(e) {
  let t, {
      channel: s,
      connectChannelDragSource: f,
      connectChannelDropTarget: E,
      disableManageChannels: I,
      position: T,
      sortingPosition: A,
      hideIcon: M,
      children: O
    } = e,
    y = (0, o.useStateFromStores)([m.default], () => m.default.isChannelMuted(s.getGuildId(), s.id)),
    D = (0, o.useStateFromStores)([h.default], () => h.default.isCollapsed(s.id)),
    b = (0, o.useStateFromStores)([p.default], () => p.default.can(L.Permissions.MANAGE_CHANNELS, s));
  t = null != A ? T > A ? x.containerDragAfter : x.containerDragBefore : x.containerDefault;
  let j = a.useCallback(() => {
      D ? (0, d.categoryExpand)(s.id) : (0, d.categoryCollapse)(s.id)
    }, [s.id, D]),
    G = a.useCallback(e => {
      if ("null" !== s.id) {
        let t = C.default.getGuild(s.getGuildId());
        null != t && (0, c.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.e("8965").then(n.bind(n, "139035"));
          return n => (0, l.jsx)(e, {
            ...n,
            channel: s,
            guild: t
          })
        })
      }
    }, [s]),
    U = a.useCallback(() => {
      let e = s.type === L.ChannelTypes.GUILD_CATEGORY ? null : s.type,
        t = s.getGuildId();
      null != t && (0, u.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("99387"), n.e("45094"), n.e("36494")]).then(n.bind(n, "218613"));
        return n => (0, l.jsx)(a, {
          ...n,
          channelType: e,
          guildId: t,
          categoryId: "null" !== s.id ? s.id : null
        })
      })
    }, [s]),
    {
      role: P,
      tabIndex: w,
      ...F
    } = (0, r.useListItem)(s.id),
    B = a.useRef(null),
    V = a.useRef(null),
    H = (0, l.jsxs)("li", {
      className: t,
      "data-dnd-name": s.name,
      children: [(0, l.jsx)(u.FocusRing, {
        focusTarget: B,
        ringTarget: V,
        offset: {
          left: 4,
          right: 4
        },
        children: (0, l.jsxs)("div", {
          ref: V,
          className: i()(x.iconVisibility, x.wrapper, {
            [x.collapsed]: D,
            [x.muted]: y,
            [x.clickable]: !0
          }),
          onContextMenu: G,
          children: [(0, l.jsxs)(u.Clickable, {
            innerRef: B,
            className: x.mainContent,
            tabIndex: w,
            ...F,
            onClick: j,
            "aria-label": v.default.Messages.CATEGORY_A11Y_LABEL.format({
              categoryName: s.name
            }),
            "aria-expanded": !D,
            focusProps: {
              enabled: !1
            },
            children: [M ? null : (0, l.jsx)(S.default, {
              className: x.icon
            }), (0, l.jsx)(N.default, {
              className: x.name,
              children: (0, l.jsx)(g.default, {
                children: s.name
              })
            })]
          }), (0, l.jsx)("div", {
            onClick: R,
            className: x.children,
            children: b && !I ? (0, l.jsx)(u.Tooltip, {
              text: v.default.Messages.CREATE_CHANNEL,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n
                } = e;
                return (0, l.jsx)(u.Button, {
                  "aria-label": v.default.Messages.CREATE_CHANNEL,
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.NONE,
                  className: i()(x.addButton, x.forceVisible),
                  onClick: U,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  tabIndex: w,
                  focusProps: {
                    offset: {
                      top: -3,
                      right: -4,
                      bottom: -3,
                      left: -4
                    }
                  },
                  children: (0, l.jsx)(_.default, {
                    width: 18,
                    height: 18,
                    className: x.addButtonIcon
                  })
                })
              }
            }) : null
          })]
        })
      }), O]
    });
  return null != E && null != f ? E(f(H)) : H
});
t.default = (0, f.makeChannelSortable)(M);
let O = a.memo(function(e) {
    let {
      name: t,
      onDismiss: n,
      className: a
    } = e;
    return (0, l.jsx)("li", {
      className: i()(a, x.containerDefault),
      children: (0, l.jsxs)("div", {
        className: i()(x.iconVisibility, x.wrapperStatic),
        children: [(0, l.jsx)("div", {
          className: x.mainContent,
          children: (0, l.jsx)(N.default, {
            className: x.name,
            children: (0, l.jsx)(g.default, {
              children: t
            })
          })
        }), null != n ? (0, l.jsx)(u.TooltipContainer, {
          text: v.default.Messages.CLEAR_RECENT_CHANNELS,
          className: x.dismissWrapper,
          children: (0, l.jsx)(u.Clickable, {
            className: x.dismissButton,
            onClick: n,
            children: (0, l.jsx)(E.default, {
              className: x.dismiss
            })
          })
        }) : null]
      })
    })
  }),
  y = a.memo(function(e) {
    let {
      category: t
    } = e, n = (0, o.useStateFromStores)([T.default], () => T.default.isVoiceCategoryCollapsed(t.guild.id)), s = a.useCallback(() => {
      n ? (0, A.voiceCategoryExpand)(t.guild.id) : (0, A.voiceCategoryCollapse)(t.guild.id)
    }, [t.guild.id, n]);
    return n ? (0, l.jsxs)(u.Clickable, {
      className: x.voiceChannelsButton,
      onClick: s,
      children: [(0, l.jsx)(I.default, {
        className: x.voiceChannelsToggleIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: v.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND
      })]
    }) : (0, l.jsxs)(u.Clickable, {
      className: x.voiceChannelsButton,
      onClick: s,
      children: [(0, l.jsx)(I.default, {
        className: x.voiceChannelsToggleIcon,
        width: 16,
        height: 16
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        children: v.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE
      })]
    })
  }),
  D = a.memo(function(e) {
    let {
      category: t,
      channel: n
    } = e, a = (0, o.useStateFromStores)([T.default], () => T.default.isVoiceCategoryCollapsed(t.guild.id));
    return a || null == n || n.record.type === L.ChannelTypes.GUILD_CATEGORY ? a ? (0, l.jsx)("li", {
      className: i()(x.containerDefault),
      children: (0, l.jsx)("div", {
        className: i()(x.iconVisibility, x.wrapperStatic),
        children: (0, l.jsx)(N.default, {
          className: x.name,
          children: (0, l.jsx)(g.default, {
            children: v.default.Messages.VOICE_CHANNELS_CATEGORY_HEADER
          })
        })
      })
    }) : null : (0, l.jsx)("div", {
      style: {
        height: 16
      }
    })
  }),
  b = a.memo(function(e) {
    let {
      channel: t
    } = e;
    return (0, l.jsx)("li", {
      className: i()(x.containerDefault),
      children: (0, l.jsx)("div", {
        className: i()(x.iconVisibility, x.wrapperStatic),
        children: (0, l.jsx)(N.default, {
          className: x.name,
          children: (0, l.jsx)(g.default, {
            children: t.name
          })
        })
      })
    })
  })