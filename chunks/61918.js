"use strict";
n.r(t), n.d(t, {
  default: function() {
    return et
  }
}), n("222007"), n("808653");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("974667"),
  d = n("394846"),
  c = n("446674"),
  f = n("233736"),
  h = n("77078"),
  m = n("272030"),
  p = n("666020"),
  E = n("352674"),
  g = n("888503"),
  S = n("206230"),
  C = n("812204"),
  _ = n("716241"),
  I = n("685665"),
  T = n("86097"),
  v = n("29319"),
  x = n("381351"),
  N = n("346967"),
  A = n("653319"),
  M = n("95039"),
  R = n("405645"),
  j = n("12896"),
  L = n("506885"),
  y = n("981601"),
  O = n("19766"),
  P = n("305961"),
  D = n("191542"),
  b = n("697218"),
  U = n("476765"),
  w = n("826684"),
  F = n("483093"),
  V = n("659500"),
  H = n("449008"),
  k = n("158998"),
  B = n("50885"),
  G = n("49111"),
  W = n("782340"),
  Y = n("559571");
let z = B.default.getEnableHardwareAcceleration(),
  K = 44 + g.AVATAR_DECORATION_PADDING,
  Z = {
    origin: {
      x: 38,
      y: 11
    },
    targetWidth: 232,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  };
class X extends l.Component {
  shouldComponentUpdate(e) {
    return !(0, f.default)(this.props, e, ["channelId"])
  }
  render() {
    let {
      colorString: e,
      colorRoleName: t,
      isOwner: n,
      nick: l,
      user: s,
      currentUser: i,
      activities: r,
      applicationStream: u,
      status: o,
      channel: c,
      guildId: f,
      isTyping: m,
      isMobileOnline: p,
      premiumSince: E,
      ...S
    } = this.props, C = null != E ? new Date(E) : null;
    return (0, a.jsx)(h.Popout, {
      preload: () => (0, L.default)(s.id, s.getAvatarURL(f, 80), {
        guildId: f,
        channelId: c.id
      }),
      renderPopout: this.renderUserPopout,
      position: d.isMobile ? "window_center" : "left",
      spacing: 16,
      onShiftClick: this.handleShiftClick,
      children: (d, h) => {
        let {
          isShown: E
        } = h;
        return (0, a.jsx)(g.default, {
          className: Y.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: z,
          user: s,
          currentUser: i,
          nick: l,
          status: o,
          activities: r,
          applicationStream: u,
          isOwner: n,
          premiumSince: C,
          colorString: e,
          colorRoleName: t,
          isTyping: m,
          channel: c,
          guildId: f,
          isMobile: p,
          onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
          selected: E,
          itemProps: S,
          ...d
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.renderUserContextMenu = e => {
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("834247").then(n.bind(n, "834247"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user,
          guildId: this.props.guildId,
          channel: this.props.channel,
          showMediaItems: !0
        })
      })
    }, this.handleShiftClick = () => {
      let {
        user: e,
        channel: t
      } = this.props, n = "@".concat(k.default.getUserTag(e, {
        decoration: "never"
      })), a = "<@".concat(e.id, ">");
      V.ComponentDispatch.dispatchToLastSubscribed(G.ComponentActions.INSERT_TEXT, {
        plainText: n,
        rawText: a
      }), E.default.startTyping(t.id)
    }, this.openGuildSubscriptionModal = e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, M.openGuildBoostingMarketingModal)({
        guildId: t,
        location: {
          section: G.AnalyticsSections.MEMBER_LIST,
          object: G.AnalyticsObjects.BOOST_GEM_ICON
        }
      }))
    }, this.renderUserPopout = e => (0, a.jsx)(y.default, {
      ...e,
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      roleId: this.props.colorRoleId,
      analyticsParams: {
        location: {
          page: G.AnalyticsPages.GUILD_CHANNEL,
          section: G.AnalyticsSections.MEMBER_LIST
        }
      }
    })
  }
}
let Q = l.memo(e => {
    let {
      colorRoleId: t,
      ...n
    } = e, {
      channel: l,
      user: s,
      index: i
    } = e, r = (0, o.useListItem)("".concat(i)), u = (0, c.useStateFromStores)([D.default], () => D.default.isTyping(l.id, s.id)), d = (0, c.useStateFromStores)([b.default], () => b.default.getCurrentUser()), f = (0, c.useStateFromStores)([P.default], () => {
      var e;
      return null != t ? null === (e = P.default.getRole(l.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0
    }, [l, t]);
    return (0, a.jsx)(X, {
      ...n,
      ...r,
      isTyping: u,
      currentUser: d,
      colorRoleName: f
    })
  }),
  q = l.memo(function(e) {
    let {
      id: t,
      title: n,
      count: l,
      guildId: s
    } = e, i = (0, R.useRoleIcon)({
      roleId: t,
      guildId: s,
      size: 16
    });
    return t === G.StatusTypes.UNKNOWN ? (0, a.jsx)("div", {
      className: Y.membersGroup,
      children: (0, a.jsx)("div", {
        className: Y.memberGroupsPlaceholder
      })
    }) : (0, a.jsxs)(w.default, {
      className: Y.membersGroup,
      children: [(0, a.jsx)(h.HiddenVisually, {
        children: W.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: l
        })
      }), (0, a.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != i ? (0, a.jsx)(F.default, {
          className: Y.roleIcon,
          ...i
        }) : null, n, " — ", l]
      })]
    })
  });

function J(e) {
  let {
    index: t
  } = e, n = (0, o.useListItem)("".concat(t));
  return (0, a.jsx)(g.default, {
    itemProps: n
  })
}
class $ extends l.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, T.isMemberListActivityHidden)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: a
    } = e, l = this.getContentFeedHeight(), s = Math.max(0, t - Math.max(0, l - a));
    return {
      height: s,
      rowHeight: n,
      rowsVisible: Math.floor(s / n),
      y: Math.max(0, a - l)
    }
  }
  getDimensions() {
    let e = this._list;
    if (null == e) return {
      y: 0,
      height: 0,
      rowHeight: 0
    };
    let {
      offsetHeight: t,
      scrollTop: n
    } = e.getScrollerState(), a = Math.floor(t / K);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: K,
      rowsVisible: a,
      y: n
    })
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n
    } = this.props;
    return (0, a.jsx)(h.FocusJumpSection, {
      children: l => (0, a.jsx)(U.UID, {
        children: s => (0, a.jsx)("aside", {
          className: i(Y.membersWrap, Y.hiddenMembers),
          "aria-labelledby": s,
          children: (0, a.jsx)(h.HeadingLevel, {
            component: (0, a.jsx)(h.HiddenVisually, {
              children: (0, a.jsx)(h.H, {
                id: s,
                children: W.default.Messages.MEMBERS_LIST_LANDMARK_LABEL.format({
                  channel: n.name
                })
              })
            }),
            children: (0, a.jsx)(o.ListNavigatorContainer, {
              children: n => {
                let {
                  ref: s,
                  role: r,
                  ...u
                } = n;
                return (0, a.jsx)(h.List, {
                  innerRole: r,
                  innerAriaLabel: W.default.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: i(Y.members, {
                    [Y.fullWidth]: d.isMobile
                  }),
                  paddingTop: 0,
                  sectionHeight: 40,
                  rowHeight: this.getRowHeightComputer(),
                  renderSection: this.renderSection,
                  renderRow: this.renderRow,
                  sections: e.map(e => e.count),
                  onScroll: this.handleScroll,
                  fade: !0,
                  customTheme: !0,
                  ...u,
                  ...l
                }, t)
              }
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._list = null, this._areActivitiesExperimentallyHidden = !1, this.setList = e => {
      this._list = e, this.props.listRef.current = e
    }, this.renderSection = e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: s
      } = this.props, i = n[t];
      return (0, v.isContentGroup)(i) ? (0, l.createElement)(v.default, {
        ...i,
        key: "section-".concat(t)
      }) : 0 === t ? (0, a.jsx)(j.default, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: Z,
        children: (0, a.jsx)(q, {
          ...i,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, l.createElement)(q, {
        ...i,
        key: "section-".concat(t),
        guildId: s.guild_id
      })
    }, this.getRowProps = e => {
      let {
        groups: t,
        rows: n
      } = this.props, a = t[e.section];
      if (null == a) return null;
      let {
        index: l
      } = a;
      return null == l || "row" !== e.type ? null : n[l + 1 + e.row]
    }, this.renderRow = e => {
      let {
        section: t,
        row: n,
        rowIndex: l
      } = e, {
        channel: s
      } = this.props, i = this.getRowProps(e);
      if (null != i) {
        if (i.type === O.MemberListRowTypes.MEMBER && "user" in i) {
          let {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: r,
            isOwner: u,
            isMobileOnline: o,
            nick: d,
            activities: c,
            applicationStream: f,
            premiumSince: h
          } = i;
          return (0, a.jsx)(Q, {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: r,
            isOwner: u,
            nick: d,
            activities: this._areActivitiesExperimentallyHidden ? [] : c,
            applicationStream: f,
            channel: s,
            guildId: s.guild_id,
            premiumSince: h,
            isMobileOnline: o,
            index: l
          }, "member-".concat(i.user.id))
        }
        if (i.type === O.MemberListRowTypes.CONTENT_INVENTORY) return (0, a.jsx)(N.default, {
          ...i,
          channel: this.props.channel,
          index: l
        }, "content-inventory-".concat(i.entry.id));
        if (i.type === O.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY) return (0, a.jsx)(x.default, {}, "content-inventory-hidden-entry")
      }
      return (0, a.jsx)(J, {
        index: l
      }, "placeholder-".concat(t, ":").concat(n))
    }, this.handleScroll = () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }, this.updateMaxContentFeedRowSeen = u.debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState();
      this.props.updateMaxContentFeedRowSeen(n + t - 40)
    }, 50), this.getContentFeedGroup = () => {
      let e = this.props.groups[A.CONTENT_FEED_SECTION];
      if ((0, v.isContentGroup)(e)) return e
    }, this.hasContentFeed = () => null != this.getContentFeedGroup(), this.getRowHeightComputer = () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let {
          rows: t
        } = this.props, n = e.index;
        return function(e, a) {
          if (e === A.CONTENT_FEED_SECTION) {
            let e = t[n + 1 + a];
            return (0, N.getContentRowHeight)(e)
          }
          return K
        }
      }
      return K
    }, this.getContentFeedHeight = () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let t = e.feedHeight;
        return t + 40
      }
      return 0
    }, this.updateSubscription = u.debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        channel: t
      } = this.props, {
        rowHeight: n,
        y: a,
        height: l
      } = this.getDimensions();
      (0, p.subscribeChannelDimensions)({
        guildId: t.guild_id,
        channelId: t.id,
        y: a,
        height: l,
        rowHeight: n
      })
    }, 50), this.trackMemberListViewed = () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (void 0 === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== A.CONTENT_FEED_SECTION));
      let a = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(H.isNotNullish);
      if (0 === a.length) return;
      let l = a.reduce((e, t) => t.type !== O.MemberListRowTypes.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === G.ActivityTypes.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, _.default.trackWithMetadata(G.AnalyticEvents.MEMBER_LIST_VIEWED, {
        ...l
      })
    }
  }
}

function ee(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: s
  } = (0, I.default)(C.default.MEMBER_LIST), r = (0, c.useStateFromStores)([S.default], () => S.default.keyboardModeEnabled), u = (0, c.useStateFromStoresObject)([O.default], () => O.default.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: f,
    version: h,
    updateMaxRowSeen: m
  } = (0, A.useInjectContentInventoryFeed)({
    memberStoreProps: u,
    channelId: t.id,
    guildId: t.guild_id
  }), p = l.useRef(null), E = l.useCallback((e, t) => {
    let n = p.current;
    if (null == n) return;
    let a = parseInt(t, 10),
      [l, s] = n.getSectionRowFromIndex(a),
      i = 0 === l && 0 === s ? K : 0;
    n.scrollToIndex({
      section: l,
      row: s,
      padding: i,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, []), g = l.useCallback(() => new Promise(e => {
    let t = p.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), _ = l.useCallback(() => new Promise(e => {
    let t = p.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), T = (0, o.default)({
    id: "members-".concat(t.id),
    setFocus: E,
    isEnabled: r,
    scrollToStart: g,
    scrollToEnd: _
  });
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: s,
    children: (0, a.jsx)("div", {
      className: i(Y.container, n),
      children: (0, a.jsx)(o.ListNavigatorProvider, {
        navigator: T,
        children: (0, a.jsx)($, {
          ...e,
          ...u,
          version: h,
          groups: f,
          rows: d,
          listRef: p,
          updateMaxContentFeedRowSeen: m
        })
      })
    })
  })
}

function et(e) {
  let {
    channel: t,
    className: n
  } = e, s = l.useDeferredValue(t);
  return l.useMemo(() => (0, a.jsx)(ee, {
    channel: s,
    className: n
  }), [s, n])
}