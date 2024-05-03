"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("924826"),
  d = n("873546"),
  c = n("442837"),
  f = n("481060"),
  h = n("239091"),
  m = n("144144"),
  p = n("607070"),
  E = n("100527"),
  C = n("906732"),
  g = n("623624"),
  S = n("518738"),
  _ = n("965376"),
  T = n("159299"),
  I = n("484459"),
  A = n("103575"),
  N = n("199902"),
  v = n("271383"),
  x = n("430824"),
  M = n("158776"),
  R = n("885110"),
  L = n("111583"),
  y = n("594174"),
  O = n("499033"),
  j = n("630641"),
  P = n("158010"),
  D = n("151827"),
  b = n("176278"),
  U = n("626135"),
  F = n("585483"),
  w = n("700785"),
  k = n("51144"),
  H = n("998502"),
  B = n("276264"),
  G = n("981631"),
  V = n("689938"),
  W = n("909864"),
  Y = n("354811");
let z = H.default.getEnableHardwareAcceleration(),
  K = 44 + B.AVATAR_DECORATION_PADDING,
  Z = l.memo(function(e) {
    let {
      channel: t,
      sectionId: s,
      userId: i,
      guildOwnerId: r
    } = e, o = (0, c.useStateFromStores)([L.default], () => L.default.isTyping(t.id, i)), p = (0, c.useStateFromStores)([v.default], () => v.default.getMember(t.guild_id, i)), E = (0, c.useStateFromStores)([x.default], () => {
      var e;
      return (null == p ? void 0 : p.colorRoleId) != null ? null === (e = x.default.getRole(t.guild_id, p.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
    }, [t.guild_id, p]), C = (0, c.useStateFromStores)([y.default], () => y.default.getUser(i)), S = (0, c.useStateFromStores)([y.default], () => y.default.getCurrentUser()), _ = (null == C ? void 0 : C.id) === (null == S ? void 0 : S.id), O = (0, c.useStateFromStores)([M.default, R.default], () => _ ? R.default.getStatus() : M.default.getStatus(i, t.guild_id)), j = (0, c.useStateFromStores)([M.default], () => M.default.isMobileOnline(i)), P = (0, c.useStateFromStores)([M.default, R.default], () => _ ? R.default.getActivities() : M.default.getActivities(i, t.guild_id)), D = (0, c.useStateFromStores)([N.default], () => N.default.getAnyStreamForUser(i)), b = (0, u.useListItem)(i), U = (0, c.useStateFromStores)([T.default], () => T.default.canUserViewChannel(t.id, s, i)), w = (null == C ? void 0 : C.id) != null && C.id === r, H = l.useCallback(e => {
      null != C && (0, h.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("70675")]).then(n.bind(n, "654663"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: C,
          guildId: t.guild_id,
          channel: t
        })
      })
    }, [C, t]), W = l.useCallback(() => {
      if (null == C) return;
      let e = "@".concat(k.default.getUserTag(C, {
          decoration: "never"
        })),
        n = "<@".concat(C.id, ">");
      F.ComponentDispatch.dispatchToLastSubscribed(G.ComponentActions.INSERT_TEXT, {
        plainText: e,
        rawText: n
      }), m.default.startTyping(t.id)
    }, [C, t]), Y = l.useCallback(e => {
      e.stopPropagation(), (0, g.openGuildBoostingMarketingModal)({
        guildId: t.guild_id,
        location: {
          section: G.AnalyticsSections.THREAD_MEMBER_LIST,
          object: G.AnalyticsObjects.BOOST_GEM_ICON
        }
      })
    }, [t.guild_id]);
    if (null == C) return null;
    let K = null == p ? void 0 : p.premiumSince;
    return (0, a.jsx)(f.Popout, {
      preload: () => (0, I.maybeFetchUserProfileForPopout)(C, {
        guildId: t.guild_id,
        channelId: t.id
      }),
      renderPopout: e => (0, a.jsx)(A.default, {
        ...e,
        location: "ThreadMembers",
        userId: C.id,
        guildId: t.guild_id,
        channelId: t.id,
        analyticsParams: {
          location: {
            page: G.AnalyticsPages.GUILD_CHANNEL,
            section: G.AnalyticsSections.THREAD_MEMBER_LIST
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
        return (0, a.jsx)(B.default, {
          onContextMenu: H,
          shouldAnimateStatus: z,
          user: C,
          currentUser: S,
          nick: null == p ? void 0 : p.nick,
          status: O,
          activities: P,
          colorString: null == p ? void 0 : p.colorString,
          colorRoleName: E,
          isTyping: o,
          channel: t,
          guildId: t.guild_id,
          isMobile: j,
          selected: l,
          applicationStream: D,
          premiumSince: null == K ? null : new Date(K),
          onClickPremiumGuildIcon: Y,
          itemProps: b,
          lostPermissionTooltipText: U ? void 0 : V.default.Messages.THREAD_MEMBER_WITHOUT_ACCESS,
          isOwner: w,
          ...e
        })
      }
    })
  }),
  q = l.memo(function(e) {
    let {
      id: t,
      label: n,
      count: l,
      guildId: s
    } = e, i = (0, S.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === G.StatusTypes.UNKNOWN ? (0, a.jsx)("div", {
      className: Y.membersGroup,
      children: (0, a.jsx)("div", {
        className: Y.memberGroupsPlaceholder
      })
    }) : (0, a.jsxs)(D.default, {
      className: Y.membersGroup,
      "aria-label": V.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
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
  X = l.memo(function(e) {
    let {
      channel: t
    } = e;
    return t.type === G.ChannelTypes.PRIVATE_THREAD ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: W.divider
      }), (0, a.jsxs)(f.Text, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: W.private,
        children: [(0, a.jsx)(j.default, {
          width: 12,
          height: 12
        }), "\xa0", V.default.Messages.THREAD_BROWSER_PRIVATE]
      }), (0, a.jsx)(f.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: W.instructions,
        children: V.default.Messages.MEMBER_LIST_PRIVATE_THREAD_INSTRUCTIONS
      })]
    }) : null
  });

function Q(e) {
  let {
    channel: t,
    guild: n
  } = e, s = "members-".concat(t.id), {
    analyticsLocations: r
  } = (0, C.default)(E.default.MEMBER_LIST), d = (0, _.useThreadMemberListSections)(t.id, n), h = d.filter(e => e.userIds.length > 0).reverse()[0], {
    navigator: m,
    listRef: g
  } = function(e, t) {
    let n = (0, c.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled),
      a = l.useRef(null),
      s = l.useCallback((e, n) => {
        let l = a.current;
        if (null == l) return;
        let s = parseInt(n, 10),
          [i, r] = l.getSectionRowFromIndex(s),
          o = 0 === i && 0 === r ? t : 0;
        l.scrollToIndex({
          section: i,
          row: r,
          padding: o,
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
      }), []);
    return {
      navigator: (0, u.default)({
        id: e,
        setFocus: s,
        isEnabled: n,
        scrollToStart: i,
        scrollToEnd: r
      }),
      listRef: a
    }
  }(s, K), S = 0 === d.length || d.every(e => 0 === e.userIds.length);
  if (l.useEffect(() => {
      U.default.track(G.AnalyticEvents.MEMBER_LIST_VIEWED, {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id
      })
    }, [t.guild_id, t.id, t.type]), S) return (0, a.jsx)(J, {
    channel: t
  });
  let T = o().omit(m.containerProps, ["ref"]),
    I = w.getGuildVisualOwnerId(n);
  return (0, a.jsx)(C.AnalyticsLocationProvider, {
    value: r,
    children: (0, a.jsx)(u.ListNavigatorProvider, {
      navigator: m,
      children: (0, a.jsx)(f.FocusJumpSection, {
        children: e => (0, a.jsx)("div", {
          className: i()(Y.membersWrap, Y.hiddenMembers),
          children: (0, a.jsx)(f.List, {
            ref: g,
            className: Y.members,
            paddingTop: 0,
            sectionHeight: 40,
            renderSection: e => {
              let {
                section: t
              } = e, l = d[t];
              return (0, a.jsx)(q, {
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
                guildOwnerId: I
              }, s[l])
            },
            footerHeight: e => d[e] === h && t.type === G.ChannelTypes.PRIVATE_THREAD ? 80 : 0,
            renderFooter: e => d[e.section] === h ? (0, a.jsx)(X, {
              channel: t
            }, "footer") : null,
            innerAriaLabel: V.default.Messages.MEMBERS,
            innerTag: "ul",
            sections: d.map(e => e.userIds.length),
            fade: !0,
            ...T,
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
    className: i()(Y.membersWrap, Y.hiddenMembers, Y.members, W.emptyState),
    children: [(0, a.jsx)(f.Text, {
      className: W.emptyStateHeader,
      variant: "text-xs/bold",
      color: "interactive-normal",
      children: V.default.Messages.MEMBERS
    }), (0, a.jsxs)("div", {
      className: W.emptyStateIconContainer,
      children: [(0, a.jsx)("div", {
        className: W.emptyStateIcon,
        children: (0, a.jsx)(P.default, {
          width: 32,
          height: 32
        })
      }), (0, a.jsx)(O.default, {
        className: W.emptyStateStars
      })]
    }), (0, a.jsx)(f.Heading, {
      variant: "heading-md/semibold",
      children: t.isForumPost() ? V.default.Messages.FORUM_POST_MEMBER_LIST_EMPTY_STATE_HEADER : V.default.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_HEADER
    }), (0, a.jsx)(f.Text, {
      className: W.emptyStateSubtext,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: V.default.Messages.THREAD_MEMBER_LIST_EMPTY_STATE_SUBTEXT
    })]
  })
}