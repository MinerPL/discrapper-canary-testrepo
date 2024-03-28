"use strict";
n.r(t), n.d(t, {
  HeaderGuildBreadcrumb: function() {
    return O
  },
  renderTitle: function() {
    return M
  },
  renderTopic: function() {
    return L
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("43267"),
  d = n("933557"),
  c = n("995123"),
  f = n("703656"),
  h = n("484459"),
  m = n("699516"),
  p = n("914010"),
  E = n("594174"),
  C = n("467679"),
  g = n("346656"),
  S = n("946734"),
  _ = n("99843"),
  T = n("372564"),
  I = n("984370"),
  A = n("217314"),
  v = n("981631"),
  N = n("689938"),
  x = n("121950");

function M(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: s,
    guild: r,
    inSidebar: f = !1,
    handleClick: h,
    handleContextMenu: p,
    handleParentClick: C,
    handleParentContextMenu: g,
    renderFollowButton: S
  } = e, T = (0, c.default)(t, r), {
    prefix: M,
    level: R
  } = function(e, t) {
    var n, a;
    switch (e) {
      case v.ChannelTypes.DM:
        return {
          prefix: N.default.Messages.DIRECT_MESSAGE, level: 1
        };
      case v.ChannelTypes.GROUP_DM:
        return {
          prefix: N.default.Messages.GROUP_DM, level: 1
        };
      case v.ChannelTypes.GUILD_DIRECTORY:
        return {
          prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "", level: 1
        };
      case v.ChannelTypes.GUILD_ANNOUNCEMENT:
      case v.ChannelTypes.GUILD_TEXT:
      case v.ChannelTypes.GUILD_FORUM:
      case v.ChannelTypes.GUILD_MEDIA:
      case v.ChannelTypes.GUILD_STAGE_VOICE:
      case v.ChannelTypes.GUILD_VOICE:
        return {
          prefix: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : "", level: 1
        };
      case v.ChannelTypes.ANNOUNCEMENT_THREAD:
      case v.ChannelTypes.PUBLIC_THREAD:
      case v.ChannelTypes.PRIVATE_THREAD:
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
    case v.ChannelTypes.DM:
      return (0, a.jsx)(A.default, {
        level: R,
        channel: t,
        handleClick: h,
        handleContextMenu: p
      });
    case v.ChannelTypes.GROUP_DM:
      if (t.isManaged()) return L;
      return (0, a.jsxs)(l.Fragment, {
        children: [(0, a.jsx)(o.HiddenVisually, {
          children: N.default.Messages.GROUP_DM
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(o.Avatar, {
            "aria-hidden": !0,
            className: x.avatar,
            size: o.AvatarSizes.SIZE_24,
            src: (0, u.getChannelIconURL)(t, 80, !1)
          })
        }), (0, a.jsx)(_.default, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case v.ChannelTypes.GUILD_ANNOUNCEMENT:
    case v.ChannelTypes.GUILD_TEXT:
    case v.ChannelTypes.GUILD_FORUM:
    case v.ChannelTypes.GUILD_MEDIA:
      return (0, a.jsxs)(l.Fragment, {
        children: [y(T, t.type === v.ChannelTypes.GUILD_ANNOUNCEMENT ? N.default.Messages.NEWS_CHANNEL : N.default.Messages.TEXT_CHANNEL), (0, a.jsx)(I.default.Title, {
          level: R,
          onContextMenu: p,
          onClick: h,
          children: L
        }), null != S ? S() : null]
      });
    case v.ChannelTypes.GUILD_VOICE:
      return (0, a.jsxs)(l.Fragment, {
        children: [y(T, N.default.Messages.VOICE_CHANNEL), (0, a.jsx)(I.default.Title, {
          level: R,
          onContextMenu: p,
          onClick: h,
          children: L
        })]
      });
    case v.ChannelTypes.GUILD_STAGE_VOICE:
      return (0, a.jsxs)(l.Fragment, {
        children: [y(T, N.default.Messages.STAGE_CHANNEL), (0, a.jsx)(I.default.Title, {
          level: R,
          onContextMenu: p,
          onClick: h,
          children: L
        })]
      });
    case v.ChannelTypes.ANNOUNCEMENT_THREAD:
    case v.ChannelTypes.PUBLIC_THREAD:
    case v.ChannelTypes.PRIVATE_THREAD:
      let O = null;
      if (!f && null != s) {
        let e = (0, c.default)(s, r);
        O = (0, a.jsxs)(l.Fragment, {
          children: [y(e, N.default.Messages.TEXT_CHANNEL), (0, a.jsx)(I.default.Title, {
            level: R,
            onContextMenu: g,
            onClick: C,
            className: i()(x.parentChannelName, x.cursorPointer),
            children: (0, d.computeChannelName)(s, E.default, m.default)
          }), (0, a.jsx)(I.default.Caret, {})]
        })
      }
      let j = (null == s ? void 0 : s.type) != null && v.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type);
      return (0, a.jsxs)(l.Fragment, {
        children: [O, y(j ? null : T, N.default.Messages.THREAD), (0, a.jsx)(I.default.Title, {
          level: R,
          onContextMenu: p,
          onClick: h,
          className: i()({
            [x.cursorPointer]: f,
            [x.forumPostTitle]: j
          }),
          children: L
        })]
      });
    case v.ChannelTypes.GUILD_DIRECTORY:
      let P = (null == r ? void 0 : r.hasFeature(v.GuildFeatures.HUB)) ? N.default.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
        guildName: n
      }) : n;
      return (0, a.jsxs)(l.Fragment, {
        children: [null !== T ? (0, a.jsx)(I.default.Icon, {
          iconClassName: x.__invalid_icon,
          icon: T,
          "aria-hidden": !0
        }) : null, (0, a.jsxs)(I.default.Title, {
          level: R,
          onContextMenu: p,
          onClick: h,
          children: [null != M ? (0, a.jsxs)(o.HiddenVisually, {
            children: [M, ":"]
          }) : null, " ", P]
        })]
      });
    default:
      return null
  }
}
let R = e => {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), s = (0, r.useStateFromStores)([E.default], () => E.default.getUser(t.getRecipientId()));
  return (l.useEffect(() => {
    (null == n ? void 0 : n.isStaff()) && (0, h.default)(s.id, s.getAvatarURL(void 0, 80), {
      dispatchWait: !0,
      withMutualGuilds: !0,
      withMutualFriendsCount: !0
    })
  }, [n, s]), t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == s ? void 0 : s.isStaff())) ? (0, a.jsx)(C.default, {
    type: C.default.Types.STAFF_ONLY_DM
  }) : null
};

function L(e, t) {
  switch (e.type) {
    case v.ChannelTypes.DM:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R, {
          channel: e
        }), (0, a.jsx)(S.default, {
          channel: e
        }, e.id)]
      });
    case v.ChannelTypes.GUILD_ANNOUNCEMENT:
    case v.ChannelTypes.GUILD_TEXT:
    case v.ChannelTypes.GUILD_VOICE:
    case v.ChannelTypes.GUILD_STAGE_VOICE:
    case v.ChannelTypes.GROUP_DM:
      return null != t ? (0, a.jsx)(T.default, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function y(e, t) {
  return (0, a.jsxs)(a.Fragment, {
    children: [null !== e && (0, a.jsx)(I.default.Icon, {
      iconClassName: x.__invalid_icon,
      icon: e,
      "aria-hidden": !0
    }), (0, a.jsx)(o.HiddenVisually, {
      children: t
    })]
  })
}

function O(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: l = "left"
  } = e;
  return (0, r.useStateFromStores)([p.default], () => p.default.getGuildId()) !== v.FAVORITES || null == t ? null : (0, a.jsxs)("div", {
    className: x.guildBreadcrumbContainer,
    children: ["left" === l && (0, a.jsx)(I.default.Caret, {
      direction: "left"
    }), (0, a.jsx)(g.default, {
      guild: t,
      size: g.default.Sizes.SMALLER,
      className: x.guildBreadcrumbIcon,
      active: !0
    }), (0, a.jsx)(I.default.Title, {
      onClick: () => {
        (0, f.transitionToGuild)(t.id, n.id)
      },
      className: i()(x.parentChannelName, x.cursorPointer),
      children: t.name
    }), "right" === l && (0, a.jsx)(I.default.Caret, {
      direction: "right"
    })]
  })
}