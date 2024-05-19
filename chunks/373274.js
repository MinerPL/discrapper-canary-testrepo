"use strict";
n.r(t), n.d(t, {
  FavoritesChannelList: function() {
    return ed
  },
  GuildChannelList: function() {
    return ec
  }
}), n("47120"), n("653041");
var l, a = n("735250"),
  s = n("470079"),
  i = n("392711"),
  r = n.n(i),
  o = n("924826"),
  u = n("442837"),
  d = n("481060"),
  c = n("925549"),
  f = n("260300"),
  h = n("410575"),
  m = n("607070"),
  C = n("100527"),
  p = n("906732"),
  g = n("362658"),
  E = n("583962"),
  _ = n("915885"),
  S = n("258871"),
  I = n("216306"),
  N = n("398758"),
  T = n("220444"),
  A = n("31022"),
  L = n("10401"),
  v = n("131704"),
  x = n("592125"),
  R = n("796974"),
  M = n("984933"),
  y = n("914010"),
  O = n("153124"),
  D = n("540126"),
  b = n("734307"),
  j = n("854444"),
  P = n("688265"),
  G = n("896053"),
  U = n("301342"),
  w = n("906817"),
  B = n("429122"),
  F = n("285573"),
  H = n("519358"),
  V = n("910595"),
  k = n("466935"),
  Y = n("120818"),
  W = n("61642"),
  K = n("848442"),
  z = n("53425"),
  Z = n("424785"),
  X = n("770202"),
  Q = n("79556"),
  J = n("428127"),
  q = n("950969"),
  $ = n("233657"),
  ee = n("831700"),
  et = n("443063"),
  en = n("327530"),
  el = n("981631"),
  ea = n("176505"),
  es = n("689938"),
  ei = n("333960");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class eo extends(l = s.PureComponent) {
  componentDidMount() {
    this.setState({
      initialized: !0
    })
  }
  componentWillUnmount() {
    this.updateChannelListScroll.cancel()
  }
  componentDidUpdate(e, t) {
    let {
      scrollToChannel: n,
      guildId: l,
      selectedChannelId: a
    } = this.props, {
      initialized: s
    } = this.state, {
      scrollTop: i
    } = R.default.getGuildDimensions(l);
    null != n ? (this.scrollToChannel(n), c.default.clearChannelListScrollTo(l)) : l !== e.guildId ? null != i && this.scrollTo(i) : a !== e.selectedChannelId ? this.scrollToChannel(a) : !t.initialized && s && (null == i && null != a ? this.scrollToChannel(a, !1, en.SCROLL_TO_SPACER, this.handleListScroll) : this.scrollTo(null != i ? i : 0, this.handleListScroll)), this.testShouldSkipTutorial()
  }
  getSectionRowsFromChannel(e) {
    return this.props.guildChannels.getSectionRowsFromChannel(e)
  }
  scrollTo(e, t) {
    var n;
    null === (n = this._list) || void 0 === n || n.scrollTo({
      to: e,
      animate: !1,
      callback: t
    })
  }
  scrollToChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : en.SCROLL_TO_SPACER,
      l = arguments.length > 3 ? arguments[3] : void 0,
      a = this._list,
      s = this.getSectionRowsFromChannel(e)[0];
    if (null != s && null != a) {
      if (null != s.threadOffset) {
        let [e] = a.getScrollPosition(s.section, s.row), i = s.threadOffset * en.HEIGHT_CHANNEL;
        a.scrollIntoViewRect({
          start: e + i,
          end: e + i + en.HEIGHT_CHANNEL,
          padding: n,
          animate: t,
          callback: l
        })
      } else a.scrollToIndex({
        section: s.section,
        row: s.row,
        animate: t,
        padding: n,
        callback: l
      })
    }
  }
  isUnreadVisible() {
    let {
      guildChannels: e
    } = this.props, t = this._list;
    return null != t && t.getItems().some(n => {
      if ("row" !== n.type) return !1;
      let {
        section: l,
        row: a
      } = n;
      if (l < D.SECTION_INDEX_UNCATEGORIZED_CHANNELS || e.isPlaceholderRow(l, a)) return !1;
      let s = e.getChannelFromSectionRow(l, a);
      if (null == s) return !1;
      let {
        channel: i,
        category: r
      } = s;
      return !!(0, v.isGuildReadableType)(i.record.type) && (!r.isCollapsed || !r.isMuted) && !i.isMuted && !!t.isItemVisible(l, a, !0) && (0, T.getHasImportantUnread)(i.record)
    })
  }
  renderTopUnread() {
    let {
      topMention: e,
      bottomUnread: t,
      bottomMention: n,
      isUnreadVisible: l
    } = this.state, {
      guildId: s,
      guildChannels: i,
      guildChannelsVersion: r
    } = this.props;
    return (0, a.jsx)("div", {
      className: ei.positionedContainer,
      children: (0, a.jsx)(q.default, {
        ref: this.unreadTopRef,
        textUnread: es.default.Messages.NEW_UNREADS,
        textMention: es.default.Messages.NEW_MENTIONS,
        hide: null == e && (l || null != t || null != n),
        className: ei.unreadTop,
        barClassName: ei.unreadBar,
        guildId: s,
        guildChannels: i,
        guildChannelsVersion: r,
        isVisible: this.isChannelVisible,
        onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
        onCalculate: this.handleUnreadCalculate
      })
    })
  }
  renderBottomUnread() {
    let {
      guildId: e,
      guildChannels: t,
      guildChannelsVersion: n
    } = this.props, {
      bottomMention: l,
      isUnreadVisible: s
    } = this.state;
    return (0, a.jsx)(q.default, {
      reverse: !0,
      ref: this.unreadBottomRef,
      textUnread: es.default.Messages.NEW_UNREADS,
      textMention: es.default.Messages.NEW_MENTIONS,
      hide: null == l && s,
      className: ei.unreadBottom,
      barClassName: ei.unreadBar,
      guildId: e,
      guildChannels: t,
      guildChannelsVersion: n,
      isVisible: this.isChannelVisible,
      onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
      onCalculate: this.handleUnreadCalculate
    })
  }
  renderList() {
    let {
      guildChannels: e,
      guild: t,
      guildBanner: n,
      hasGuildSubheader: l
    } = this.props, {
      ref: s,
      ...i
    } = this.context, r = 0;
    return null != n ? r = en.SERVER_BANNER_PADDING : t.hasCommunityInfoSubheader() && !l && (r = en.SERVER_COMMUNITY_INFO_PADDING), (0, a.jsx)(d.FocusJumpSection, {
      children: t => (0, a.jsx)(d.List, {
        ref: this.setListRef,
        className: ei.scroller,
        fade: !0,
        customTheme: !0,
        sectionHeight: this.getSectionHeight,
        footerHeight: this.getSectionFooterHeight,
        rowHeight: this.getRowHeight,
        paddingTop: r,
        paddingBottom: en.HEIGHT_BUFFER,
        renderSection: this.renderSection,
        renderFooter: this.renderSectionFooter,
        renderRow: this.renderRow,
        onScroll: this.handleListScroll,
        onResize: this.handleResize,
        onContentResize: this.handleResize,
        sections: e.getSections(),
        innerAriaLabel: es.default.Messages.CHANNELS,
        innerTag: "ul",
        getAnchorId: this.getAnchorId,
        ...i,
        ...t
      }, "guild-channels")
    })
  }
  render() {
    let {
      guildChannels: e,
      guildChannelsVersion: t,
      showNewUnreadsBar: n
    } = this.props;
    return (0, a.jsx)(s.Fragment, {
      children: (0, a.jsx)(O.UID, {
        children: l => (0, a.jsx)(d.HeadingLevel, {
          component: (0, a.jsx)(d.HiddenVisually, {
            children: (0, a.jsx)(d.H, {
              id: l,
              children: es.default.Messages.CHANNELS
            })
          }),
          children: n ? (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)("div", {
              className: ei.positionedContainer,
              children: (0, a.jsx)(J.default, {
                position: "top",
                guildChannels: e,
                guildChannelsVersion: t,
                jumpToVoiceChannels: this.jumpToVoiceChannels,
                jumpToChannel: this.jumpToChannel
              })
            }), this.renderList(), (0, a.jsx)(J.default, {
              position: "bottom",
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })]
          }) : (0, a.jsxs)(s.Fragment, {
            children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), er(this, "_list", null), er(this, "unreadTopRef", s.createRef()), er(this, "unreadBottomRef", s.createRef()), er(this, "state", {
      initialized: !1,
      isUnreadVisible: !0,
      topUnread: null,
      topMention: null,
      bottomUnread: null,
      bottomMention: null
    }), er(this, "setListRef", e => {
      var t;
      let {
        ref: n
      } = this.context;
      n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e
    }), er(this, "jumpToVoiceChannels", () => {
      var e, t, n, l;
      let {
        guildChannels: a,
        voiceStates: s
      } = this.props, i = 0, r = null !== (n = null === (e = a.getCategoryFromSection(a.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
      for (let e = 0; e < r.length - 1; e++)
        if ((null !== (l = s[r[e]]) && void 0 !== l ? l : []).length > 0) {
          i = e + 1;
          break
        } null === (t = this._list) || void 0 === t || t.scrollToIndex({
        section: a.voiceChannelsSectionNumber,
        row: i,
        animate: !0,
        padding: en.SCROLL_TO_SPACER
      })
    }), er(this, "jumpToChannel", e => this.scrollToChannel(e, !0, en.SCROLL_TO_UNREAD_BUFFER)), er(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
      let [n, l] = t;
      return this.scrollToChannel(e, !0, null != n && null != l ? en.SCROLL_TO_UNREAD_BUFFER : en.SCROLL_TO_SPACER)
    }), er(this, "isChannelVisible", (e, t) => {
      let n = this.getSectionRowsFromChannel(e),
        l = this._list;
      if (null == l) return !1;
      for (let {
          row: e,
          section: a
        }
        of n) {
        let [n, s] = l.getScrollPosition(a, e), i = l.getScrollerState();
        if (t && n + s < i.scrollTop + i.offsetHeight) return !0;
        if (!t && n > i.scrollTop) return !0
      }
      return !1
    }), er(this, "getVisibleChannels", () => {
      let e = this._list;
      if (null == e) return [];
      let t = e.getItems(),
        n = e.getScrollerState(),
        l = [];
      for (var a = 0; a < t.length; a++) {
        let s = t[a];
        if ((0, d.isListItemRow)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
          let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
            [a, i] = e.getScrollPosition(s.section, s.row);
          null != t && a + i < n.scrollTop + n.offsetHeight && a > n.scrollTop && l.push(t.channel.id)
        }
      }
      return l
    }), er(this, "handleResize", () => {
      var e, t;
      let {
        showNewUnreadsBar: n
      } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
      if (this.setState({
          isUnreadVisible: this.isUnreadVisible()
        }), n && null != l) {
        let {
          scrollTop: e
        } = l;
        this.updateChannelListScroll(e)
      }
    }), er(this, "handleListScroll", () => {
      var e, t;
      let {
        onScroll: n
      } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
      if (null != l) {
        let {
          scrollTop: e
        } = l;
        null != n && n(l), this.updateChannelListScroll(e)
      }
      null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState()
    }), er(this, "handleUnreadCalculate", (e, t, n) => {
      let l = this.isUnreadVisible();
      n ? this.setState({
        isUnreadVisible: l,
        bottomUnread: t,
        bottomMention: e
      }) : this.setState({
        isUnreadVisible: l,
        topUnread: t,
        topMention: e
      })
    }), er(this, "updateChannelListScroll", r().throttle(e => {
      c.default.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), er(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n
      } = this.props;
      return (0, w.getChannelListSectionHeight)(e, t, n)
    }), er(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: l,
        selectedChannelId: a,
        optInEnabled: s,
        guildChannelsVersion: i
      } = this.props;
      return (0, B.getChannelListSectionFooterHeight)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: i,
        voiceStates: n,
        selectedChannelId: a,
        selectedVoiceChannelId: l,
        optInEnabled: s
      })
    }), er(this, "getRowHeight", (e, t) => {
      let {
        guildChannels: n,
        voiceStates: l,
        stageChannelSpeakerVoiceStates: a,
        selectedVoiceChannelId: s,
        selectedGuildId: i
      } = this.props, r = en.HEIGHT_CHANNEL;
      if (e === D.SECTION_INDEX_COMMUNITY) {
        let e = n.getCommunitySection();
        return e.isEmpty() ? 0 : e.getRow(t) === et.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? E.PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN : E.PROGRESS_BAR_CONTAINER_HEIGHT : r
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let o = n.getChannelFromSectionRow(e, t);
      if (null == o) return 0;
      let {
        channel: u,
        category: d
      } = o;
      if (u.record.type === el.ChannelTypes.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: c
      } = g.default.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: !0
      });
      for (let e of (c && i === el.FAVORITES && !u.record.isDM() && !u.record.isGroupDM() && !u.record.isGuildStageVoice() && (r = en.HEIGHT_CHANNEL_FAVORITES), u.threadIds)) {
        r += en.HEIGHT_CHANNEL;
        let t = l[u.id];
        null != t && t.length > 0 && (r += (s === e ? t.length * en.HEIGHT_USER : en.HEIGHT_USER) + en.HEIGHT_USER_PADDING)
      }
      if (u.record.isGuildVoice()) {
        let e = l[u.id];
        if (null != e && e.length > 0) {
          let t = e.length * en.HEIGHT_USER;
          (u.isCollapsed || d.isCollapsed) && (t = en.HEIGHT_USER), r += t + en.HEIGHT_USER_PADDING
        }
      }
      if (null != u.subtitle && (r += en.HEIGHT_CHANNEL_SUBTITLE), u.record.isGuildStageVoice()) {
        var f, h;
        let e = null !== (f = l[u.id]) && void 0 !== f ? f : [],
          t = null !== (h = a[u.id]) && void 0 !== h ? h : [];
        if (null != e && e.length > 0) {
          let e = t.length * en.HEIGHT_USER;
          u.isCollapsed || d.isCollapsed ? e = Math.ceil(e / en.COLLAPSED_USERS_PER_ROW) : e += en.HEIGHT_USER, r += e + en.HEIGHT_USER_PADDING
        }
      }
      return r
    }), er(this, "dismissRecents", () => {
      let {
        guild: e,
        guildChannels: t,
        selectedChannelId: n
      } = this.props, l = t.getCategoryFromSection(t.recentsSectionNumber);
      if (null == l) return;
      let a = null,
        s = l.getShownChannelAndThreadIds();
      null != n && s.includes(n) && (a = (0, I.getFirstRouteFor)(t)), (0, I.clearRecentChannels)(e.id, s, a)
    }), er(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: l,
        guild: s,
        selectedChannelId: i,
        disableManageChannels: r
      } = this.props;
      return (0, a.jsx)(w.default, {
        sectionIndex: t,
        guild: s,
        guildChannels: n,
        guildChannelsVersion: l,
        selectedChannelId: i,
        disableManageChannels: r
      }, (0, w.getKeyForSection)(t, n))
    }), er(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: l,
        selectedChannel: i,
        selectedChannelId: r,
        selectedVoiceChannel: o,
        selectedVoiceChannelId: u,
        guildChannels: d,
        voiceStates: c,
        disableManageChannels: f,
        stageChannelSpeakerVoiceStates: h,
        optInEnabled: m,
        withGuildIcon: C
      } = this.props;
      if (t === D.SECTION_INDEX_COMMUNITY) {
        let e = d.getCommunitySection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case et.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS:
            return (0, a.jsx)(S.default, {
              guild: l,
              channel: M.default.getDefaultChannel(l.id)
            }, et.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS);
          case et.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR:
            let s = e.getRows();
            return (0, a.jsx)(E.default, {
              guild: l,
              withMargin: s.length > 1
            }, et.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR);
          case et.ChannelListCommunityRow.GUILD_HOME:
            return (0, a.jsx)(V.default, {
              guild: l,
              selected: r === ea.StaticChannelRoute.GUILD_HOME
            }, et.ChannelListCommunityRow.GUILD_HOME);
          case et.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS:
            return (0, a.jsx)($.default, {
              guild: l,
              selected: r === et.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS
            }, et.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS);
          case et.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, a.jsx)(W.default, {
              guild: l,
              selected: r === ea.StaticChannelRoute.ROLE_SUBSCRIPTIONS
            }, et.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS);
          case et.ChannelListCommunityRow.GUILD_SHOP:
            return (0, a.jsx)(K.default, {
              guild: l,
              selected: r === ea.StaticChannelRoute.GUILD_SHOP
            }, et.ChannelListCommunityRow.GUILD_SHOP);
          case et.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
            return (0, a.jsx)(k.default, {
              guild: l,
              selected: r === ea.StaticChannelRoute.MEMBER_APPLICATIONS
            }, et.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS);
          case et.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, a.jsx)(Y.GuildNewMemberActionsProgressBar, {
              guild: l
            });
          case et.ChannelListCommunityRow.CHANNELS_AND_ROLES:
            return (0, a.jsx)(H.GuildBrowseChannelsRow, {
              guild: l,
              selected: r === ea.StaticChannelRoute.CHANNEL_BROWSER || r === ea.StaticChannelRoute.CUSTOMIZE_COMMUNITY
            }, et.ChannelListCommunityRow.CHANNELS_AND_ROLES);
          case et.ChannelListCommunityRow.GUILD_DIRECTORY:
            return (0, a.jsx)(F.default, {
              guild: l,
              selectedChannelId: r,
              disableManageChannels: f
            }, et.ChannelListCommunityRow.GUILD_DIRECTORY);
          case et.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, a.jsx)(_.default, {
              guild: l,
              selected: r === ea.StaticChannelRoute.MEMBER_SAFETY
            }, et.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY);
          default:
            return null
        }
      }
      if (d.isPlaceholderRow(t, n)) return null;
      let p = d.getChannelFromSectionRow(t, n);
      if (null == p) return null;
      let {
        category: g,
        channel: I
      } = p, N = g instanceof D.ChannelListFavoritesCategory, T = I.record, A = "".concat(t).concat(I.id);
      switch (T.type) {
        case el.ChannelTypes.GUILD_ANNOUNCEMENT:
        case el.ChannelTypes.GUILD_TEXT:
        case el.ChannelTypes.GUILD_FORUM:
        case el.ChannelTypes.GUILD_MEDIA:
        case el.ChannelTypes.DM:
        case el.ChannelTypes.GROUP_DM:
          return (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)(Q.default, {
              channel: T,
              guild: l,
              position: I.position,
              selected: r === I.id,
              muted: I.isMuted,
              subtitle: I.subtitle,
              disableManageChannels: f,
              canBeNewChannel: m && t === d.recentsSectionNumber,
              isFavoriteCategory: N,
              withGuildIcon: C
            }), I.threadCount > 0 ? (0, a.jsx)(z.default, {
              withGuildIcon: C,
              channel: T,
              sortedThreadIds: I.threadIds,
              selectedChannel: null != i && (i.id === I.id || i.parent_id === T.id) ? i : null,
              selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === T.id ? u : null
            }) : null]
          }, A);
        case el.ChannelTypes.GUILD_STAGE_VOICE:
          var L, v;
          return (0, a.jsx)(Z.default, {
            channel: T,
            guild: l,
            position: I.position,
            selected: r === I.id,
            connected: u === I.id,
            collapsed: I.isCollapsed || g.isCollapsed,
            voiceStates: null !== (L = c[I.id]) && void 0 !== L ? L : [],
            speakerVoiceStates: null !== (v = h[I.id]) && void 0 !== v ? v : [],
            disableManageChannels: f,
            isFavoriteCategory: N
          }, A);
        case el.ChannelTypes.GUILD_VOICE:
          return (0, a.jsx)(ee.default, {
            channel: T,
            guild: l,
            position: I.position,
            selected: r === I.id,
            connected: u === I.id,
            collapsed: I.isCollapsed || g.isCollapsed,
            voiceStates: c[I.id],
            subtitle: I.subtitle,
            disableManageChannels: f,
            showTutorial: I.isFirstVoiceChannel,
            isFavoriteCategory: N,
            withGuildIcon: C
          }, A);
        case el.ChannelTypes.GUILD_STORE:
          return (0, a.jsx)(X.default, {
            channel: T,
            guild: l,
            position: I.position,
            selected: r === I.id
          }, A);
        case el.ChannelTypes.GUILD_CATEGORY:
          if (t !== d.voiceChannelsSectionNumber) return null;
          return (0, a.jsx)(U.ReadonlyCategoryChannel, {
            channel: T
          }, "readonly-".concat(T.id));
        case el.ChannelTypes.PUBLIC_THREAD:
        case el.ChannelTypes.PRIVATE_THREAD:
          return (0, a.jsx)(Q.default, {
            channel: T,
            guild: l,
            position: I.position,
            selected: r === I.id,
            muted: I.isMuted,
            subtitle: I.subtitle,
            disableManageChannels: f,
            canBeNewChannel: !1,
            isFavoriteCategory: !1,
            forceTopLevelThread: !0
          }, A);
        default:
          return null
      }
    }), er(this, "renderSectionFooter", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: l,
        voiceStates: s,
        selectedChannelId: i,
        selectedVoiceChannelId: r,
        optInEnabled: o,
        guildId: u
      } = this.props;
      return (0, a.jsx)(B.default, {
        guildId: u,
        guildChannels: n,
        guildChannelsVersion: l,
        sectionIndex: t,
        voiceStates: s,
        selectedChannelId: i,
        selectedVoiceChannelId: r,
        optInEnabled: o
      }, (0, B.getKeyForSectionFooter)(t, n, o))
    }), er(this, "getAnchorId", (e, t) => {
      var n, l, a;
      let {
        guildChannels: s
      } = this.props;
      if (e !== D.SECTION_INDEX_COMMUNITY) {
        if (null == t) return e === D.SECTION_INDEX_FAVORITES ? "favorites-header" : e === s.recentsSectionNumber ? "recents-header" : e === s.voiceChannelsSectionNumber ? "voice-channels" : e === D.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? "uncategorized-header" : null === (a = s.getNamedCategoryFromSection(e)) || void 0 === a ? void 0 : a.id;
        if (!s.isPlaceholderRow(e, t)) return null === (l = s.getChannelFromSectionRow(e, t)) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id
      }
    }), er(this, "testShouldSkipTutorial", () => {
      if (!L.default.shouldShow("voice-conversations")) return;
      let {
        guildChannels: e
      } = this.props, t = e.getFirstVoiceChannel();
      if (null == t) {
        f.default.dismiss("voice-conversations");
        return
      }
      let n = this._list;
      if (null != n)
        for (let {
            section: e,
            row: l
          }
          of this.getSectionRowsFromChannel(t.id)) !n.isItemVisible(e, l) && f.default.dismiss("voice-conversations")
    })
  }
}
er(eo, "contextType", o.ListContainerContext);
let eu = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: l
  } = e, i = (0, u.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), {
    analyticsLocations: r
  } = (0, p.default)(C.default.GUILD_CHANNEL_LIST), d = (0, u.useStateFromStores)([x.default], () => x.default.getChannel(n)), c = (0, u.useStateFromStores)([x.default], () => x.default.getChannel(l)), f = (0, u.useStateFromStores)([y.default], () => y.default.getGuildId()), g = (0, N.useOptInEnabledForGuild)(t), E = s.useRef(null), _ = s.useCallback((e, t) => {
    let n = E.current;
    if (null != n) {
      if (el.ID_REGEX.test(t) || (0, ea.isStaticChannelRoute)(t)) n.scrollToChannel(t, !1, 2 * en.SCROLL_TO_SPACER, () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus()
        })
      });
      else {
        var l;
        null === (l = document.querySelector(e)) || void 0 === l || l.focus()
      }
    }
  }, []), S = s.useCallback(() => new Promise(e => {
    let t = E.current;
    if (null == t) return e();
    t.scrollTo(0, () => requestAnimationFrame(() => e()))
  }), []), I = s.useCallback(() => new Promise(e => {
    let t = E.current;
    if (null == t) return e();
    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
  }), []), T = (0, o.default)({
    id: "channels",
    defaultFocused: null != n ? n : void 0,
    isEnabled: i,
    setFocus: _,
    scrollToStart: S,
    scrollToEnd: I
  }), L = T.setFocus;
  s.useEffect(() => {
    null != n && L(n)
  }, [n, L]);
  let v = (0, A.default)(t);
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: r,
    children: (0, a.jsx)(h.default, {
      section: el.AnalyticsSections.GUILD_CHANNEL_LIST,
      children: (0, a.jsx)(o.ListNavigatorProvider, {
        navigator: T,
        children: (0, a.jsx)(eo, {
          ...e,
          listNavigator: T,
          ref: E,
          selectedChannel: d,
          selectedVoiceChannel: c,
          stageChannelSpeakerVoiceStates: v,
          selectedGuildId: f,
          optInEnabled: g
        })
      })
    })
  })
};

function ed(e) {
  let t = (0, j.useFavoritesServerChannelList)(),
    {
      isFavoritesPerk: n
    } = (0, g.useFavoritesServerExperiment)("favorites-channel-list");
  return (0, a.jsx)(eu, {
    ...e,
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n
  })
}

function ec(e) {
  let t = (0, G.default)(e.guild),
    n = (0, P.default)(e.guild),
    l = r().uniq(n.concat(t)),
    s = (0, u.useStateFromStoresObject)([b.default], () => b.default.getGuild(e.guildId, l));
  return (0, a.jsx)(eu, {
    ...e,
    ...s
  })
}