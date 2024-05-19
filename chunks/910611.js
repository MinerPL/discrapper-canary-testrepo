"use strict";
n.r(t), n.d(t, {
  HeaderGuildBreadcrumb: function() {
    return L
  },
  renderTitle: function() {
    return x
  },
  renderTopic: function() {
    return R
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("933557"),
  d = n("995123"),
  c = n("266076"),
  f = n("703656"),
  h = n("699516"),
  m = n("914010"),
  p = n("594174"),
  E = n("467679"),
  C = n("346656"),
  g = n("946734"),
  S = n("99843"),
  _ = n("372564"),
  T = n("984370"),
  I = n("217314"),
  A = n("981631"),
  N = n("689938"),
  v = n("19340");

function x(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: s,
    guild: r,
    inSidebar: f = !1,
    handleClick: m,
    handleContextMenu: E,
    handleParentClick: C,
    handleParentContextMenu: g,
    renderFollowButton: _
  } = e, x = (0, d.default)(t, r), {
    prefix: M,
    level: R
  } = function(e, t) {
    var n, a;
    switch (e) {
      case A.ChannelTypes.DM:
        return {
          prefix: N.default.Messages.DIRECT_MESSAGE, level: 1
        };
      case A.ChannelTypes.GROUP_DM:
        return {
          prefix: N.default.Messages.GROUP_DM, level: 1
        };
      case A.ChannelTypes.GUILD_DIRECTORY:
        return {
          prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
        };
      case A.ChannelTypes.GUILD_ANNOUNCEMENT:
      case A.ChannelTypes.GUILD_TEXT:
      case A.ChannelTypes.GUILD_FORUM:
      case A.ChannelTypes.GUILD_MEDIA:
      case A.ChannelTypes.GUILD_STAGE_VOICE:
      case A.ChannelTypes.GUILD_VOICE:
        return {
          prefix: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : "", level: 1
        };
      case A.ChannelTypes.ANNOUNCEMENT_THREAD:
      case A.ChannelTypes.PUBLIC_THREAD:
      case A.ChannelTypes.PRIVATE_THREAD:
        return {
          prefix: N.default.Messages.THREAD, level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, r), L = (0, a.jsxs)(a.Fragment, {
    children: [null != M ? (0, a.jsxs)(o.HiddenVisually, {
      children: [M, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case A.ChannelTypes.DM:
      return (0, a.jsx)(I.default, {
        level: R,
        channel: t,
        handleClick: m,
        handleContextMenu: E
      });
    case A.ChannelTypes.GROUP_DM:
      if (t.isManaged()) return L;
      return (0, a.jsxs)(l.Fragment, {
        children: [(0, a.jsx)(o.HiddenVisually, {
          children: N.default.Messages.GROUP_DM
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(c.default, {
            "aria-hidden": !0,
            channel: t,
            size: o.AvatarSizes.SIZE_24,
            facepileSizeOverride: o.AvatarSizes.SIZE_32,
            experimentLocation: "header_bar",
            className: v.avatar
          })
        }), (0, a.jsx)(S.default, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case A.ChannelTypes.GUILD_ANNOUNCEMENT:
    case A.ChannelTypes.GUILD_TEXT:
    case A.ChannelTypes.GUILD_FORUM:
    case A.ChannelTypes.GUILD_MEDIA:
      return (0, a.jsxs)(l.Fragment, {
        children: [y(x, t.type === A.ChannelTypes.GUILD_ANNOUNCEMENT ? N.default.Messages.NEWS_CHANNEL : N.default.Messages.TEXT_CHANNEL), (0, a.jsx)(T.default.Title, {
          level: R,
          onContextMenu: E,
          onClick: m,
          children: L
        }), null != _ ? _() : null]
      });
    case A.ChannelTypes.GUILD_VOICE:
      return (0, a.jsxs)(l.Fragment, {
        children: [y(x, N.default.Messages.VOICE_CHANNEL), (0, a.jsx)(T.default.Title, {
          level: R,
          onContextMenu: E,
          onClick: m,
          children: L
        })]
      });
    case A.ChannelTypes.GUILD_STAGE_VOICE:
      return (0, a.jsxs)(l.Fragment, {
        children: [y(x, N.default.Messages.STAGE_CHANNEL), (0, a.jsx)(T.default.Title, {
          level: R,
          onContextMenu: E,
          onClick: m,
          children: L
        })]
      });
    case A.ChannelTypes.ANNOUNCEMENT_THREAD:
    case A.ChannelTypes.PUBLIC_THREAD:
    case A.ChannelTypes.PRIVATE_THREAD:
      let O = null;
      if (!f && null != s) {
        let e = (0, d.default)(s, r);
        O = (0, a.jsxs)(l.Fragment, {
          children: [y(e, N.default.Messages.TEXT_CHANNEL), (0, a.jsx)(T.default.Title, {
            level: R,
            onContextMenu: g,
            onClick: C,
            className: i()(v.parentChannelName, v.cursorPointer),
            children: (0, u.computeChannelName)(s, p.default, h.default)
          }), (0, a.jsx)(T.default.Caret, {})]
        })
      }
      let j = (null == s ? void 0 : s.type) != null && A.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type);
      return (0, a.jsxs)(l.Fragment, {
        children: [O, y(j ? null : x, N.default.Messages.THREAD), (0, a.jsx)(T.default.Title, {
          level: R,
          onContextMenu: E,
          onClick: m,
          className: i()({
            [v.cursorPointer]: f,
            [v.forumPostTitle]: j
          }),
          children: L
        })]
      });
    case A.ChannelTypes.GUILD_DIRECTORY:
      let P = (null == r ? void 0 : r.hasFeature(A.GuildFeatures.HUB)) ? N.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
        guildName: n
      }) : n;
      return (0, a.jsxs)(l.Fragment, {
        children: [null !== x ? (0, a.jsx)(T.default.Icon, {
          iconClassName: v.__invalid_icon,
          icon: x,
          "aria-hidden": !0
        }) : null, (0, a.jsxs)(T.default.Title, {
          level: R,
          onContextMenu: E,
          onClick: m,
          children: [null != M ? (0, a.jsxs)(o.HiddenVisually, {
            children: [M, ":"]
          }) : null, " ", P]
        })]
      });
    default:
      return null
  }
}
let M = e => {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentUser()), l = (0, r.useStateFromStores)([p.default], () => p.default.getUser(t.getRecipientId()));
  return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff()) ? (0, a.jsx)(E.default, {
    type: E.default.Types.STAFF_ONLY_DM
  }) : null
};

function R(e, t) {
  switch (e.type) {
    case A.ChannelTypes.DM:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(M, {
          channel: e
        }), (0, a.jsx)(g.default, {
          channel: e
        }, e.id)]
      });
    case A.ChannelTypes.GUILD_ANNOUNCEMENT:
    case A.ChannelTypes.GUILD_TEXT:
    case A.ChannelTypes.GUILD_VOICE:
    case A.ChannelTypes.GUILD_STAGE_VOICE:
    case A.ChannelTypes.GROUP_DM:
      return null != t ? (0, a.jsx)(_.default, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function y(e, t) {
  return (0, a.jsxs)(a.Fragment, {
    children: [null !== e && (0, a.jsx)(T.default.Icon, {
      iconClassName: v.__invalid_icon,
      icon: e,
      "aria-hidden": !0
    }), (0, a.jsx)(o.HiddenVisually, {
      children: t
    })]
  })
}

function L(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: l = "left"
  } = e;
  return (0, r.useStateFromStores)([m.default], () => m.default.getGuildId()) !== A.FAVORITES || null == t ? null : (0, a.jsxs)("div", {
    className: v.guildBreadcrumbContainer,
    children: ["left" === l && (0, a.jsx)(T.default.Caret, {
      direction: "left"
    }), (0, a.jsx)(C.default, {
      guild: t,
      size: C.default.Sizes.SMALLER,
      className: v.guildBreadcrumbIcon,
      active: !0
    }), (0, a.jsx)(T.default.Title, {
      onClick: () => {
        (0, f.transitionToGuild)(t.id, n.id)
      },
      className: i()(v.parentChannelName, v.cursorPointer),
      children: t.name
    }), "right" === l && (0, a.jsx)(T.default.Caret, {
      direction: "right"
    })]
  })
}