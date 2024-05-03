"use strict";
n.r(t), n.d(t, {
  default: function() {
    return en
  }
}), n("47120"), n("724458");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("924826"),
  d = n("873546"),
  c = n("442837"),
  f = n("902704"),
  h = n("481060"),
  m = n("239091"),
  p = n("941028"),
  E = n("144144"),
  C = n("276264"),
  g = n("607070"),
  S = n("100527"),
  _ = n("367907"),
  T = n("906732"),
  I = n("493324"),
  A = n("611064"),
  N = n("677432"),
  v = n("178762"),
  x = n("868671"),
  M = n("623624"),
  R = n("518738"),
  L = n("155409"),
  y = n("484459"),
  O = n("103575"),
  j = n("439170"),
  P = n("430824"),
  D = n("111583"),
  b = n("594174"),
  U = n("153124"),
  F = n("151827"),
  w = n("176278"),
  k = n("585483"),
  H = n("823379"),
  B = n("51144"),
  G = n("998502"),
  V = n("981631"),
  W = n("689938"),
  Y = n("354811");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let K = G.default.getEnableHardwareAcceleration(),
  Z = 44 + C.AVATAR_DECORATION_PADDING,
  q = {
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
      applicationStream: o,
      status: u,
      channel: c,
      guildId: f,
      isTyping: m,
      isMobileOnline: p,
      premiumSince: E,
      ...g
    } = this.props, S = null != E ? new Date(E) : null;
    return (0, a.jsx)(h.Popout, {
      preload: () => (0, y.maybeFetchUserProfileForPopout)(s),
      renderPopout: this.renderUserPopout,
      position: d.isMobile ? "window_center" : "left",
      spacing: 16,
      onShiftClick: this.handleShiftClick,
      children: (d, h) => {
        let {
          isShown: E
        } = h;
        return (0, a.jsx)(C.default, {
          className: Y.member,
          onContextMenu: this.renderUserContextMenu,
          shouldAnimateStatus: K,
          user: s,
          currentUser: i,
          nick: l,
          status: u,
          activities: r,
          applicationStream: o,
          isOwner: n,
          premiumSince: S,
          colorString: e,
          colorRoleName: t,
          isTyping: m,
          channel: c,
          guildId: f,
          isMobile: p,
          onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
          selected: E,
          itemProps: g,
          ...d
        })
      }
    })
  }
  constructor(...e) {
    super(...e), z(this, "renderUserContextMenu", e => {
      (0, m.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user,
          guildId: this.props.guildId,
          channel: this.props.channel,
          showMediaItems: !0
        })
      })
    }), z(this, "handleShiftClick", () => {
      let {
        user: e,
        channel: t
      } = this.props, n = "@".concat(B.default.getUserTag(e, {
        decoration: "never"
      })), a = "<@".concat(e.id, ">");
      k.ComponentDispatch.dispatchToLastSubscribed(V.ComponentActions.INSERT_TEXT, {
        plainText: n,
        rawText: a
      }), E.default.startTyping(t.id)
    }), z(this, "openGuildSubscriptionModal", e => {
      let {
        guildId: t
      } = this.props;
      null != t && (e.stopPropagation(), (0, M.openGuildBoostingMarketingModal)({
        guildId: t,
        location: {
          section: V.AnalyticsSections.MEMBER_LIST,
          object: V.AnalyticsObjects.BOOST_GEM_ICON
        }
      }))
    }), z(this, "renderUserPopout", e => (0, a.jsx)(O.default, {
      ...e,
      location: "ChannelMembers",
      userId: this.props.user.id,
      guildId: this.props.guildId,
      channelId: this.props.channel.id,
      roleId: this.props.colorRoleId,
      analyticsParams: {
        location: {
          page: V.AnalyticsPages.GUILD_CHANNEL,
          section: V.AnalyticsSections.MEMBER_LIST
        }
      }
    }))
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
    } = e, r = (0, u.useListItem)("".concat(i)), o = (0, c.useStateFromStores)([D.default], () => D.default.isTyping(l.id, s.id)), d = (0, c.useStateFromStores)([b.default], () => b.default.getCurrentUser()), f = (0, c.useStateFromStores)([P.default], () => {
      var e;
      return null != t ? null === (e = P.default.getRole(l.guild_id, t)) || void 0 === e ? void 0 : e.name : void 0
    }, [l, t]);
    return (0, a.jsx)(X, {
      ...n,
      ...r,
      isTyping: o,
      currentUser: d,
      colorRoleName: f
    })
  }),
  J = l.memo(function(e) {
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
    return t === V.StatusTypes.UNKNOWN ? (0, a.jsx)("div", {
      className: Y.membersGroup,
      children: (0, a.jsx)("div", {
        className: Y.memberGroupsPlaceholder
      })
    }) : (0, a.jsxs)(F.default, {
      className: Y.membersGroup,
      children: [(0, a.jsx)(h.HiddenVisually, {
        children: W.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
          title: n,
          count: l
        })
      }), (0, a.jsxs)("span", {
        "aria-hidden": !0,
        children: [null != i ? (0, a.jsx)(w.default, {
          className: Y.roleIcon,
          ...i
        }) : null, n, " — ", l]
      })]
    })
  });

function $(e) {
  let {
    index: t
  } = e, n = (0, u.useListItem)("".concat(t));
  return (0, a.jsx)(C.default, {
    itemProps: n
  })
}
class ee extends l.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, I.isMemberListActivityHidden)("ChannelMembers")
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
    } = e.getScrollerState(), a = Math.floor(t / Z);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: Z,
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
          className: i()(Y.membersWrap, Y.hiddenMembers),
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
            children: (0, a.jsx)(u.ListNavigatorContainer, {
              children: n => {
                let {
                  ref: s,
                  role: r,
                  ...o
                } = n;
                return (0, a.jsx)(h.List, {
                  innerRole: r,
                  innerAriaLabel: W.default.Messages.MEMBERS,
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                  },
                  className: i()(Y.members, {
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
                  ...o,
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
    super(...e), z(this, "_list", null), z(this, "_areActivitiesExperimentallyHidden", !1), z(this, "lastReportedAnalyticsChannel", void 0), z(this, "setList", e => {
      this._list = e, this.props.listRef.current = e
    }), z(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: s
      } = this.props, i = n[t];
      return (0, A.isContentGroup)(i) ? (0, l.createElement)(A.default, {
        ...i,
        key: "section-".concat(t)
      }) : 0 === t ? (0, a.jsx)(L.default, {
        tutorialId: "whos-online",
        position: "left",
        inlineSpecs: q,
        children: (0, a.jsx)(J, {
          ...i,
          guildId: s.guild_id
        })
      }, "section-".concat(t)) : (0, l.createElement)(J, {
        ...i,
        key: "section-".concat(t),
        guildId: s.guild_id
      })
    }), z(this, "getRowProps", e => {
      let {
        groups: t,
        rows: n
      } = this.props, a = t[e.section];
      if (null == a) return null;
      let {
        index: l
      } = a;
      return null == l || "row" !== e.type ? null : n[l + 1 + e.row]
    }), z(this, "renderRow", e => {
      let {
        section: t,
        row: n,
        rowIndex: l
      } = e, {
        channel: s
      } = this.props, i = this.getRowProps(e);
      if (null != i) {
        if (i.type === j.MemberListRowTypes.MEMBER && "user" in i) {
          let {
            colorString: e,
            colorRoleId: t,
            user: n,
            status: r,
            isOwner: o,
            isMobileOnline: u,
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
            isOwner: o,
            nick: d,
            activities: this._areActivitiesExperimentallyHidden ? [] : c,
            applicationStream: f,
            channel: s,
            guildId: s.guild_id,
            premiumSince: h,
            isMobileOnline: u,
            index: l
          }, "member-".concat(i.user.id))
        }
        if (i.type === j.MemberListRowTypes.CONTENT_INVENTORY) {
          let e = "content-inventory-".concat(i.entry.id);
          return null != i.entry.original_id && (e += "-".concat(i.entry.original_id)), (0, a.jsx)(v.default, {
            ...i,
            channel: this.props.channel,
            index: l
          }, e)
        }
        if (i.type === j.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY) return (0, a.jsx)(N.default, {}, "content-inventory-hidden-entry")
      }
      return (0, a.jsx)($, {
        index: l
      }, "placeholder-".concat(t, ":").concat(n))
    }), z(this, "handleScroll", () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }), z(this, "updateMaxContentFeedRowSeen", o().debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState();
      this.props.updateMaxContentFeedRowSeen(n + t - 40)
    }, 50)), z(this, "getContentFeedGroup", () => {
      let e = this.props.groups[x.CONTENT_FEED_SECTION];
      if ((0, A.isContentGroup)(e)) return e
    }), z(this, "hasContentFeed", () => null != this.getContentFeedGroup()), z(this, "getRowHeightComputer", () => {
      let e = this.getContentFeedGroup();
      if (null != e) {
        let {
          rows: t
        } = this.props, n = e.index;
        return function(e, a) {
          if (e === x.CONTENT_FEED_SECTION) {
            let e = t[n + 1 + a];
            return (0, v.getContentRowHeight)(e)
          }
          return Z
        }
      }
      return Z
    }), z(this, "getContentFeedHeight", () => {
      let e = this.getContentFeedGroup();
      return null != e ? e.feedHeight + 40 : 0
    }), z(this, "updateSubscription", o().debounce(() => {
      if (null == this._list) return;
      let {
        channel: e
      } = this.props, {
        rowHeight: t,
        y: n,
        height: a
      } = this.getDimensions();
      (0, p.subscribeChannelDimensions)({
        guildId: e.guild_id,
        channelId: e.id,
        y: n,
        height: a,
        rowHeight: t
      })
    }, 50)), z(this, "trackMemberListViewed", () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (void 0 === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== x.CONTENT_FEED_SECTION));
      let a = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(H.isNotNullish);
      if (0 === a.length) return;
      let l = a.reduce((e, t) => t.type !== j.MemberListRowTypes.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === V.ActivityTypes.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e), {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, _.default.trackWithMetadata(V.AnalyticEvents.MEMBER_LIST_VIEWED, {
        ...l
      })
    })
  }
}

function et(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: s
  } = (0, T.default)(S.default.MEMBER_LIST), r = (0, c.useStateFromStores)([g.default], () => g.default.keyboardModeEnabled), o = (0, c.useStateFromStoresObject)([j.default], () => j.default.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: f,
    version: h,
    updateMaxRowSeen: m
  } = (0, x.useInjectContentInventoryFeed)({
    memberStoreProps: o,
    channelId: t.id,
    guildId: t.guild_id
  }), p = l.useRef(null), E = l.useCallback((e, t) => {
    let n = p.current;
    if (null == n) return;
    let a = parseInt(t, 10),
      [l, s] = n.getSectionRowFromIndex(a),
      i = 0 === l && 0 === s ? Z : 0;
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
  }, []), C = l.useCallback(() => new Promise(e => {
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
  }), []), I = (0, u.default)({
    id: "members-".concat(t.id),
    setFocus: E,
    isEnabled: r,
    scrollToStart: C,
    scrollToEnd: _
  });
  return (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: s,
    children: (0, a.jsx)("div", {
      className: i()(Y.container, n),
      children: (0, a.jsx)(u.ListNavigatorProvider, {
        navigator: I,
        children: (0, a.jsx)(ee, {
          ...e,
          ...o,
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

function en(e) {
  let {
    channel: t,
    className: n
  } = e, s = l.useDeferredValue(t);
  return l.useMemo(() => (0, a.jsx)(et, {
    channel: s,
    className: n
  }), [s, n])
}