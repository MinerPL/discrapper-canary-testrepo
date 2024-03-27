"use strict";
n.r(t), n.d(t, {
  renderTitle: function() {
    return x
  },
  renderTopic: function() {
    return y
  },
  HeaderGuildBreadcrumb: function() {
    return O
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("843962"),
  d = n("679653"),
  c = n("619335"),
  f = n("393414"),
  h = n("506885"),
  C = n("27618"),
  p = n("162771"),
  m = n("697218"),
  E = n("79798"),
  g = n("476263"),
  S = n("718490"),
  T = n("960454"),
  A = n("740961"),
  _ = n("539938"),
  M = n("540853"),
  I = n("49111"),
  N = n("782340"),
  v = n("250455");

function x(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: l,
    guild: r,
    inSidebar: f = !1,
    handleClick: h,
    handleContextMenu: p,
    handleParentClick: E,
    handleParentContextMenu: g,
    renderFollowButton: S
  } = e, A = (0, c.default)(t, r), {
    prefix: x,
    level: L
  } = function(e, t) {
    var n, s;
    switch (e) {
      case I.ChannelTypes.DM:
        return {
          prefix: N.default.Messages.DIRECT_MESSAGE, level: 1
        };
      case I.ChannelTypes.GROUP_DM:
        return {
          prefix: N.default.Messages.GROUP_DM, level: 1
        };
      case I.ChannelTypes.GUILD_DIRECTORY:
        return {
          prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
        };
      case I.ChannelTypes.GUILD_ANNOUNCEMENT:
      case I.ChannelTypes.GUILD_TEXT:
      case I.ChannelTypes.GUILD_FORUM:
      case I.ChannelTypes.GUILD_MEDIA:
      case I.ChannelTypes.GUILD_STAGE_VOICE:
      case I.ChannelTypes.GUILD_VOICE:
        return {
          prefix: null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : "", level: 1
        };
      case I.ChannelTypes.ANNOUNCEMENT_THREAD:
      case I.ChannelTypes.PUBLIC_THREAD:
      case I.ChannelTypes.PRIVATE_THREAD:
        return {
          prefix: N.default.Messages.THREAD, level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, r), y = (0, s.jsxs)(s.Fragment, {
    children: [null != x ? (0, s.jsxs)(o.HiddenVisually, {
      children: [x, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case I.ChannelTypes.DM:
      return (0, s.jsx)(M.default, {
        level: L,
        channel: t,
        handleClick: h,
        handleContextMenu: p
      });
    case I.ChannelTypes.GROUP_DM:
      if (t.isManaged()) return y;
      return (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(o.HiddenVisually, {
          children: N.default.Messages.GROUP_DM
        }), (0, s.jsx)("div", {
          children: (0, s.jsx)(o.Avatar, {
            "aria-hidden": !0,
            className: v.avatar,
            size: o.AvatarSizes.SIZE_24,
            src: (0, u.getChannelIconURL)(t, 80, !1)
          })
        }), (0, s.jsx)(T.default, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case I.ChannelTypes.GUILD_ANNOUNCEMENT:
    case I.ChannelTypes.GUILD_TEXT:
    case I.ChannelTypes.GUILD_FORUM:
    case I.ChannelTypes.GUILD_MEDIA:
      return (0, s.jsxs)(a.Fragment, {
        children: [R(A, t.type === I.ChannelTypes.GUILD_ANNOUNCEMENT ? N.default.Messages.NEWS_CHANNEL : N.default.Messages.TEXT_CHANNEL), (0, s.jsx)(_.default.Title, {
          level: L,
          onContextMenu: p,
          onClick: h,
          children: y
        }), null != S ? S() : null]
      });
    case I.ChannelTypes.GUILD_VOICE:
      return (0, s.jsxs)(a.Fragment, {
        children: [R(A, N.default.Messages.VOICE_CHANNEL), (0, s.jsx)(_.default.Title, {
          level: L,
          onContextMenu: p,
          onClick: h,
          children: y
        })]
      });
    case I.ChannelTypes.GUILD_STAGE_VOICE:
      return (0, s.jsxs)(a.Fragment, {
        children: [R(A, N.default.Messages.STAGE_CHANNEL), (0, s.jsx)(_.default.Title, {
          level: L,
          onContextMenu: p,
          onClick: h,
          children: y
        })]
      });
    case I.ChannelTypes.ANNOUNCEMENT_THREAD:
    case I.ChannelTypes.PUBLIC_THREAD:
    case I.ChannelTypes.PRIVATE_THREAD:
      let O = null;
      if (!f && null != l) {
        let e = (0, c.default)(l, r);
        O = (0, s.jsxs)(a.Fragment, {
          children: [R(e, N.default.Messages.TEXT_CHANNEL), (0, s.jsx)(_.default.Title, {
            level: L,
            onContextMenu: g,
            onClick: E,
            className: i(v.parentChannelName, v.cursorPointer),
            children: (0, d.computeChannelName)(l, m.default, C.default)
          }), (0, s.jsx)(_.default.Caret, {})]
        })
      }
      let D = (null == l ? void 0 : l.type) != null && I.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type);
      return (0, s.jsxs)(a.Fragment, {
        children: [O, R(D ? null : A, N.default.Messages.THREAD), (0, s.jsx)(_.default.Title, {
          level: L,
          onContextMenu: p,
          onClick: h,
          className: i({
            [v.cursorPointer]: f,
            [v.forumPostTitle]: D
          }),
          children: y
        })]
      });
    case I.ChannelTypes.GUILD_DIRECTORY:
      let P = (null == r ? void 0 : r.hasFeature(I.GuildFeatures.HUB)) ? N.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
        guildName: n
      }) : n;
      return (0, s.jsxs)(a.Fragment, {
        children: [null !== A ? (0, s.jsx)(_.default.Icon, {
          iconClassName: v.icon,
          icon: A,
          "aria-hidden": !0
        }) : null, (0, s.jsxs)(_.default.Title, {
          level: L,
          onContextMenu: p,
          onClick: h,
          children: [null != x ? (0, s.jsxs)(o.HiddenVisually, {
            children: [x, ":"]
          }) : null, " ", P]
        })]
      });
    default:
      return null
  }
}
let L = e => {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), l = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t.getRecipientId()));
  return (a.useEffect(() => {
    (null == n ? void 0 : n.isStaff()) && (0, h.default)(l.id, l.getAvatarURL(void 0, 80), {
      dispatchWait: !0,
      withMutualGuilds: !0,
      withMutualFriendsCount: !0
    })
  }, [n, l]), t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff())) ? (0, s.jsx)(E.default, {
    type: E.default.Types.STAFF_ONLY_DM
  }) : null
};

function y(e, t) {
  switch (e.type) {
    case I.ChannelTypes.DM:
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(L, {
          channel: e
        }), (0, s.jsx)(S.default, {
          channel: e
        }, e.id)]
      });
    case I.ChannelTypes.GUILD_ANNOUNCEMENT:
    case I.ChannelTypes.GUILD_TEXT:
    case I.ChannelTypes.GUILD_VOICE:
    case I.ChannelTypes.GUILD_STAGE_VOICE:
    case I.ChannelTypes.GROUP_DM:
      return null != t ? (0, s.jsx)(A.default, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function R(e, t) {
  return (0, s.jsxs)(s.Fragment, {
    children: [null !== e && (0, s.jsx)(_.default.Icon, {
      iconClassName: v.icon,
      icon: e,
      "aria-hidden": !0
    }), (0, s.jsx)(o.HiddenVisually, {
      children: t
    })]
  })
}

function O(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: a = "left"
  } = e, l = (0, r.useStateFromStores)([p.default], () => p.default.getGuildId());
  return l !== I.FAVORITES || null == t ? null : (0, s.jsxs)("div", {
    className: v.guildBreadcrumbContainer,
    children: ["left" === a && (0, s.jsx)(_.default.Caret, {
      direction: "left"
    }), (0, s.jsx)(g.default, {
      guild: t,
      size: g.default.Sizes.SMALLER,
      className: v.guildBreadcrumbIcon,
      active: !0
    }), (0, s.jsx)(_.default.Title, {
      onClick: () => {
        (0, f.transitionToGuild)(t.id, n.id)
      },
      className: i(v.parentChannelName, v.cursorPointer),
      children: t.name
    }), "right" === a && (0, s.jsx)(_.default.Caret, {
      direction: "right"
    })]
  })
}