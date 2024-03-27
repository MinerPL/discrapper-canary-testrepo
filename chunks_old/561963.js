"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("974667"),
  d = n("394846"),
  c = n("446674"),
  f = n("77078"),
  h = n("272030"),
  m = n("352674"),
  p = n("206230"),
  E = n("812204"),
  g = n("685665"),
  S = n("95039"),
  C = n("405645"),
  _ = n("256648"),
  I = n("593752"),
  T = n("506885"),
  v = n("340906"),
  x = n("373469"),
  N = n("26989"),
  A = n("305961"),
  M = n("824563"),
  R = n("101125"),
  j = n("191542"),
  L = n("697218"),
  y = n("543289"),
  O = n("45029"),
  P = n("155207"),
  D = n("826684"),
  b = n("483093"),
  U = n("599110"),
  w = n("659500"),
  F = n("991170"),
  V = n("158998"),
  H = n("50885"),
  k = n("888503"),
  B = n("49111"),
  G = n("782340"),
  W = n("363092"),
  Y = n("559571");
let z = H.default.getEnableHardwareAcceleration(),
  K = 44 + k.AVATAR_DECORATION_PADDING,
  Z = l.memo(function(e) {
    let {
      channel: t,
      sectionId: s,
      userId: i,
      guildOwnerId: r
    } = e, u = (0, c.useStateFromStores)([j.default], () => j.default.isTyping(t.id, i)), p = (0, c.useStateFromStores)([N.default], () => N.default.getMember(t.guild_id, i)), E = (0, c.useStateFromStores)([A.default], () => {
      var e;
      return (null == p ? void 0 : p.colorRoleId) != null ? null === (e = A.default.getRole(t.guild_id, p.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
    }, [t.guild_id, p]), g = (0, c.useStateFromStores)([L.default], () => L.default.getUser(i)), C = (0, c.useStateFromStores)([L.default], () => L.default.getCurrentUser()), _ = (null == g ? void 0 : g.id) === (null == C ? void 0 : C.id), y = (0, c.useStateFromStores)([M.default, R.default], () => _ ? R.default.getStatus() : M.default.getStatus(i, t.guild_id)), O = (0, c.useStateFromStores)([M.default], () => M.default.isMobileOnline(i)), P = (0, c.useStateFromStores)([M.default, R.default], () => _ ? R.default.getActivities() : M.default.getActivities(i, t.guild_id)), D = (0, c.useStateFromStores)([x.default], () => x.default.getAnyStreamForUser(i)), b = (0, o.useListItem)(i), U = (0, c.useStateFromStores)([I.default], () => I.default.canUserViewChannel(t.id, s, i)), F = (null == g ? void 0 : g.id) != null && g.id === r, H = l.useCallback(e => {
      null != g && (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("721429").then(n.bind(n, "721429"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: g,
          guildId: t.guild_id,
          channel: t
        })
      })
    }, [g, t]), W = l.useCallback(() => {
      if (null == g) return;
      let e = "@".concat(V.default.getUserTag(g, {
          decoration: "never"
        })),
        n = "<@".concat(g.id, ">");
      w.ComponentDispatch.dispatchToLastSubscribed(B.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), m.default.startTyping(t.id)
    }, [g, t]), Y = l.useCallback(e => {
      e.stopPropagation(), (0, S.openGuildBoostingMarketingModal)({
        guildId: t.guild_id,
        location: {
          section: B.AnalyticsSections.THREAD_MEMBER_LIST,
          object: B.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]);
    if (null == g) return null;
    let K = null == p ? void 0 : p.premiumSince;
    return (0, a.jsx)(f.Popout, {
      preload: () => (0, T.default)(g.id, g.getAvatarURL(t.guild_id, 80), {
        guildId: t.guild_id,
        channelId: t.id
      }),
      renderPopout: e => (0, a.jsx)(v.default, {
        ...e,
        location: "ThreadMembers",
        userId: g.id,
        guildId: t.guild_id,
        channelId: t.id,
        analyticsParams: {
          location: {
            page: B.AnalyticsPages.GUILD_CHANNEL,
            section: B.AnalyticsSections.THREAD_MEMBER_LIST
          }
        }
      }),
      position: d.isMobile ? "window_center" : "left",
      spacing: 16,
      onShiftClick: W,
      children: (e, n) => {
        let {
          isShown: l
        } = n;
        return (0, a.jsx)(k.default, {
          onContextMenu: H,
          shouldAnimateStatus: z,
          user: g,
          currentUser: C,
          nick: null == p ? void 0 : p.nick,
          status: y,
          activities: P,
          colorString: null == p ? void 0 : p.colorString,
          colorRoleName: E,
          isTyping: u,
          channel: t,
          guildId: t.guild_id,
          isMobile: O,
          selected: l,
          applicationStream: D,
          premiumSince: null == K ? null : new Date(K),
          onClickPremiumGuildIcon: Y,
          itemProps: b,
          lostPermissionTooltipText: U ? void 0 : G.default.Messages.THREAD_MEMBER_WITHOUT_ACCESS,
          isOwner: F,
          ...e
        })
      }
    })
  }),
  X = l.memo(function(e) {
    let {
      id: t,
      label: n,
      count: l,
      guildId: s
    } = e, i = (0, C.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === B.StatusTypes.UNKNOWN ? (0, a.jsx)("div", {
      className: Y.membersGroup,
      children: (0, a.jsx)("div", {
        className: Y.memberGroupsPlaceholder
      })
    }) : (0, a.jsxs)(D.default, {
      className: Y.membersGroup,
      "aria-label": G.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: n,
        count: l
      }),
      children: [null != i ? (0, a.jsx)(b.default, {
        className: Y.roleIcon,
        ...i
      }) : null, (0, a.jsxs)("span", {
        "aria-hidden": !0,
        children: [n, " — ", l]
      })]
    })
  }),
  Q = l.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === B.ChannelTypes.PRIVATE_THREAD ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: W.divider
      }), (0, a.jsxs)(f.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: W.private,
        children: [(0, a.jsx)(O.default, {
          width: 12,
          height: 12
        }), "\xa0", G.default.Messages.THREAD_BROWSER_PRIVATE]
      }), (0, a.jsx)(f.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: W.instructions,
        children: G.default.Messages.MEMBER_LIST_PRIVATE_THREAD_INSTRUCTIONS
      })]
    }) : null
  });

function q(e) {
  let {
    channel: t,
    guild: n
  } = e, s = "members-".concat(t.id), {
    analyticsLocations: r
  } = (0, g.default)(E.default.MEMBER_LIST), d = (0, _.useThreadMemberListSections)(t.id, n), h = d.filter(e => e.userIds.length > 0).reverse()[0], {
    navigator: m,
    listRef: S
  } = function(e, t) {
    let n = (0, c.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled),
      a = l.useRef(null),
      s = l.useCallback((e, n) => {
        let l = a.current;
        if (null == l) return;
        let s = parseInt(n, 10),
          [i, r] = l.getSectionRowFromIndex(s),
          u = 0 === i && 0 === r ? t : 0;
        l.scrollToIndex({
          section: i,
          row: r,
          padding: u,
          callback: () => {
            requestAnimationFrame(() => {
              var t;
              return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
                preventScroll: !0
              })
            })
          }
        })
      }, [t]),
      i = l.useCallback(() => new Promise(e => {
        let t = a.current;
        if (null == t) return e();
        t.scrollToTop({
          callback: () => requestAnimationFrame(() => e())
        })
      }), []),
      r = l.useCallback(() => new Promise(e => {
        let t = a.current;
        if (null == t) return e();
        t.scrollToBottom({
          callback() {
            requestAnimationFrame(() => setTimeout(e, 100))
          }
        })
      }), []),
      u = (0, o.default)({
        id: e,
        setFocus: s,
        isEnabled: n,
        scrollToStart: i,
        scrollToEnd: r
      });
    return {
      navigator: u,
      listRef: a
    }
  }(s, K), C = 0 === d.length || d.every(e => 0 === e.userIds.length);
  if (l.useEffect(() => {
      U.default.track(B.AnalyticEvents.MEMBER_LIST_VIEWED, {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id
      })
    }, [t.guild_id, t.id, t.type]), C) return (0, a.jsx)(J, {
    channel: t
  });
  let I = u.omit(m.containerProps, ["ref"]),
    T = F.getGuildVisualOwnerId(n);
  return (0, a.jsx)(g.AnalyticsLocationProvider, {
    value: r,
    children: (0, a.jsx)(o.ListNavigatorProvider, {
      navigator: m,
      children: (0, a.jsx)(f.FocusJumpSection, {
        children: e => (0, a.jsx)("div", {
          className: i(Y.membersWrap, Y.hiddenMembers),
          children: (0, a.jsx)(f.List, {
            ref: S,
            className: Y.members,
            paddingTop: 0,
            sectionHeight: 40,
            renderSection: e => {
              let {
                section: t
              } = e, l = d[t];
              return (0, a.jsx)(X, {
                id: l.id,
                label: l.label,
                count: l.userIds.length,
                guildId: n.id
              }, l.id)
            },
            rowHeight: K,
            renderRow: e => {
              let {
                section: n,
                row: l
              } = e, {
                userIds: s,
                id: i
              } = d[n];
              return (0, a.jsx)(Z, {
                channel: t,
                sectionId: i,
                userId: s[l],
                guildOwnerId: T
              }, s[l])
            },
            footerHeight: e => d[e] === h && t.type === B.ChannelTypes.PRIVATE_THREAD ? 80 : 0,
            renderFooter: e => d[e.section] === h ? (0, a.jsx)(Q, {
              channel: t
            }, "footer") : null,
            innerAriaLabel: G.default.Messages.MEMBERS,
            innerTag: "ul",
            sections: d.map(e => e.userIds.length),
            fade: !0,
            ...I,
            ...e
          }, s)
        })
      })
    })
  })
}

function J(e) {
  let {
    channel: t
  } = e;
  return (0, a.jsxs)("div", {
    className: i(Y.membersWrap, Y.hiddenMembers, Y.members, W.emptyState),
    children: [(0, a.jsx)(f.Text, {
      className: W.emptyStateHeader,
      variant: "text-xs/bold",
      color: "interactive-normal",
      children: G.default.Messages.MEMBERS
    }), (0, a.jsxs)("div", {
      className: W.emptyStateIconContainer,
      children: [(0, a.jsx)("div", {
        className: W.emptyStateIcon,
        children: (0, a.jsx)(P.default, {
          width: 32,
          height: 32
        })
      }), (0, a.jsx)(y.default, {
        className: W.emptyStateStars
      })]
    }), (0, a.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? G.default.Messages.FORUM_POST_MEMBER_LIST_EMPTY_STATE_HEADER : G.default.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_HEADER
    }), (0, a.jsx)(f.Text, {
      className: W.emptyStateSubtext,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: G.default.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_SUBTEXT
    })]
  })
}