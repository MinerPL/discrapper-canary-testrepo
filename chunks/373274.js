"use strict";
n.r(t), n.d(t, {
  FavoritesChannelList: function() {
    return eh
  },
  GuildChannelList: function() {
    return eC
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
  C = n("607070"),
  p = n("100527"),
  m = n("906732"),
  g = n("362658"),
  E = n("583962"),
  S = n("915885"),
  _ = n("15608"),
  I = n("518756"),
  N = n("554747"),
  T = n("258871"),
  A = n("216306"),
  L = n("398758"),
  v = n("220444"),
  x = n("31022"),
  R = n("10401"),
  M = n("131704"),
  O = n("592125"),
  y = n("796974"),
  D = n("984933"),
  b = n("914010"),
  j = n("153124"),
  G = n("540126"),
  U = n("734307"),
  P = n("854444"),
  w = n("688265"),
  F = n("896053"),
  B = n("301342"),
  V = n("906817"),
  H = n("429122"),
  k = n("285573"),
  Y = n("519358"),
  K = n("910595"),
  W = n("466935"),
  Z = n("120818"),
  z = n("61642"),
  X = n("848442"),
  Q = n("53425"),
  q = n("424785"),
  J = n("770202"),
  $ = n("79556"),
  ee = n("428127"),
  et = n("950969"),
  en = n("233657"),
  el = n("831700"),
  ea = n("443063"),
  es = n("327530"),
  ei = n("981631"),
  er = n("176505"),
  eo = n("689938"),
  eu = n("677351");

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class ec extends(l = s.PureComponent) {
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
    } = y.default.getGuildDimensions(l);
    null != n ? (this.scrollToChannel(n), c.default.clearChannelListScrollTo(l)) : l !== e.guildId ? null != i && this.scrollTo(i) : a !== e.selectedChannelId ? this.scrollToChannel(a) : !t.initialized && s && (null == i && null != a ? this.scrollToChannel(a, !1, es.SCROLL_TO_SPACER, this.handleListScroll) : this.scrollTo(null != i ? i : 0, this.handleListScroll)), this.testShouldSkipTutorial()
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
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : es.SCROLL_TO_SPACER,
      l = arguments.length > 3 ? arguments[3] : void 0,
      a = this._list,
      s = this.getSectionRowsFromChannel(e)[0];
    if (null != s && null != a) {
      if (null != s.threadOffset) {
        let [e] = a.getScrollPosition(s.section, s.row), i = s.threadOffset * es.HEIGHT_CHANNEL;
        a.scrollIntoViewRect({
          start: e + i,
          end: e + i + es.HEIGHT_CHANNEL,
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
      if (l < G.SECTION_INDEX_UNCATEGORIZED_CHANNELS || e.isPlaceholderRow(l, a)) return !1;
      let s = e.getChannelFromSectionRow(l, a);
      if (null == s) return !1;
      let {
        channel: i,
        category: r
      } = s;
      return !!(0, M.isGuildReadableType)(i.record.type) && (!r.isCollapsed || !r.isMuted) && !i.isMuted && !!t.isItemVisible(l, a, !0) && (0, v.getHasImportantUnread)(i.record)
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
      className: eu.positionedContainer,
      children: (0, a.jsx)(et.default, {
        ref: this.unreadTopRef,
        textUnread: eo.default.Messages.NEW_UNREADS,
        textMention: eo.default.Messages.NEW_MENTIONS,
        hide: null == e && (l || null != t || null != n),
        className: eu.unreadTop,
        barClassName: eu.unreadBar,
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
    return (0, a.jsx)(et.default, {
      reverse: !0,
      ref: this.unreadBottomRef,
      textUnread: eo.default.Messages.NEW_UNREADS,
      textMention: eo.default.Messages.NEW_MENTIONS,
      hide: null == l && s,
      className: eu.unreadBottom,
      barClassName: eu.unreadBar,
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
    return null != n ? r = es.SERVER_BANNER_PADDING : t.hasCommunityInfoSubheader() && !l && (r = es.SERVER_COMMUNITY_INFO_PADDING), (0, a.jsx)(d.FocusJumpSection, {
      children: t => (0, a.jsx)(d.List, {
        ref: this.setListRef,
        className: eu.scroller,
        fade: !0,
        customTheme: !0,
        sectionHeight: this.getSectionHeight,
        footerHeight: this.getSectionFooterHeight,
        rowHeight: this.getRowHeight,
        paddingTop: r,
        paddingBottom: es.HEIGHT_BUFFER,
        renderSection: this.renderSection,
        renderFooter: this.renderSectionFooter,
        renderRow: this.renderRow,
        onScroll: this.handleListScroll,
        onResize: this.handleResize,
        onContentResize: this.handleResize,
        sections: e.getSections(),
        innerAriaLabel: eo.default.Messages.CHANNELS,
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
      children: (0, a.jsx)(j.UID, {
        children: l => (0, a.jsx)(d.HeadingLevel, {
          component: (0, a.jsx)(d.HiddenVisually, {
            children: (0, a.jsx)(d.H, {
              id: l,
              children: eo.default.Messages.CHANNELS
            })
          }),
          children: n ? (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)("div", {
              className: eu.positionedContainer,
              children: (0, a.jsx)(ee.default, {
                position: "top",
                guildChannels: e,
                guildChannelsVersion: t,
                jumpToVoiceChannels: this.jumpToVoiceChannels,
                jumpToChannel: this.jumpToChannel
              })
            }), this.renderList(), (0, a.jsx)(ee.default, {
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
    super(...e), ed(this, "_list", null), ed(this, "unreadTopRef", s.createRef()), ed(this, "unreadBottomRef", s.createRef()), ed(this, "state", {
      initialized: !1,
      isUnreadVisible: !0,
      topUnread: null,
      topMention: null,
      bottomUnread: null,
      bottomMention: null
    }), ed(this, "setListRef", e => {
      var t;
      let {
        ref: n
      } = this.context;
      n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e
    }), ed(this, "jumpToVoiceChannels", () => {
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
        padding: es.SCROLL_TO_SPACER
      })
    }), ed(this, "jumpToChannel", e => this.scrollToChannel(e, !0, es.SCROLL_TO_UNREAD_BUFFER)), ed(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
      let [n, l] = t;
      return this.scrollToChannel(e, !0, null != n && null != l ? es.SCROLL_TO_UNREAD_BUFFER : es.SCROLL_TO_SPACER)
    }), ed(this, "isChannelVisible", (e, t) => {
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
    }), ed(this, "getVisibleChannels", () => {
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
    }), ed(this, "handleResize", () => {
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
    }), ed(this, "handleListScroll", () => {
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
    }), ed(this, "handleUnreadCalculate", (e, t, n) => {
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
    }), ed(this, "updateChannelListScroll", r().throttle(e => {
      c.default.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), ed(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n
      } = this.props;
      return (0, V.getChannelListSectionHeight)(e, t, n)
    }), ed(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: l,
        selectedChannelId: a,
        optInEnabled: s,
        guildChannelsVersion: i
      } = this.props;
      return (0, H.getChannelListSectionFooterHeight)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: i,
        voiceStates: n,
        selectedChannelId: a,
        selectedVoiceChannelId: l,
        optInEnabled: s
      })
    }), ed(this, "getRowHeight", (e, t) => {
      let {
        guildChannels: n,
        voiceStates: l,
        stageChannelSpeakerVoiceStates: a,
        selectedVoiceChannelId: s,
        selectedGuildId: i
      } = this.props, r = es.HEIGHT_CHANNEL;
      if (e === G.SECTION_INDEX_COMMUNITY) {
        let e = n.getCommunitySection();
        return e.isEmpty() ? 0 : e.getRow(t) === ea.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? E.PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN : E.PROGRESS_BAR_CONTAINER_HEIGHT : r
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let o = n.getChannelFromSectionRow(e, t);
      if (null == o) return 0;
      let {
        channel: u,
        category: d
      } = o;
      if (u.record.type === ei.ChannelTypes.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: c
      } = g.default.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: !0
      });
      for (let e of (c && i === ei.FAVORITES && !u.record.isDM() && !u.record.isGroupDM() && !u.record.isGuildStageVoice() && (r = es.HEIGHT_CHANNEL_FAVORITES), u.threadIds)) {
        r += es.HEIGHT_CHANNEL;
        let t = l[u.id];
        null != t && t.length > 0 && (r += (s === e ? t.length * es.HEIGHT_USER : es.HEIGHT_USER) + es.HEIGHT_USER_PADDING)
      }
      if (u.record.isGuildVoice()) {
        let e = l[u.id];
        if (null != e && e.length > 0) {
          let t = e.length * es.HEIGHT_USER;
          (u.isCollapsed || d.isCollapsed) && (t = es.HEIGHT_USER), r += t + es.HEIGHT_USER_PADDING
        }
      }
      if (null != u.subtitle && (r += es.HEIGHT_CHANNEL_SUBTITLE), u.record.isGuildStageVoice()) {
        var f, h;
        let e = null !== (f = l[u.id]) && void 0 !== f ? f : [],
          t = null !== (h = a[u.id]) && void 0 !== h ? h : [];
        if (null != e && e.length > 0) {
          let e = t.length * es.HEIGHT_USER;
          u.isCollapsed || d.isCollapsed ? e = Math.ceil(e / es.COLLAPSED_USERS_PER_ROW) : e += es.HEIGHT_USER, r += e + es.HEIGHT_USER_PADDING
        }
      }
      return r
    }), ed(this, "dismissRecents", () => {
      let {
        guild: e,
        guildChannels: t,
        selectedChannelId: n
      } = this.props, l = t.getCategoryFromSection(t.recentsSectionNumber);
      if (null == l) return;
      let a = null,
        s = l.getShownChannelAndThreadIds();
      null != n && s.includes(n) && (a = (0, A.getFirstRouteFor)(t)), (0, A.clearRecentChannels)(e.id, s, a)
    }), ed(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: l,
        guild: s,
        selectedChannelId: i,
        disableManageChannels: r
      } = this.props;
      return (0, a.jsx)(V.default, {
        sectionIndex: t,
        guild: s,
        guildChannels: n,
        guildChannelsVersion: l,
        selectedChannelId: i,
        disableManageChannels: r
      }, (0, V.getKeyForSection)(t, n))
    }), ed(this, "renderRow", e => {
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
        optInEnabled: C,
        withGuildIcon: p
      } = this.props;
      if (t === G.SECTION_INDEX_COMMUNITY) {
        let e = d.getCommunitySection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case ea.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS:
            return (0, a.jsx)(T.default, {
              guild: l,
              channel: D.default.getDefaultChannel(l.id)
            }, ea.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS);
          case ea.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR:
            let s = e.getRows();
            return (0, a.jsx)(E.default, {
              guild: l,
              withMargin: s.length > 1
            }, ea.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR);
          case ea.ChannelListCommunityRow.GUILD_HOME:
            return (0, a.jsx)(K.default, {
              guild: l,
              selected: r === er.StaticChannelRoute.GUILD_HOME
            }, ea.ChannelListCommunityRow.GUILD_HOME);
          case ea.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS:
            return (0, a.jsx)(en.default, {
              guild: l,
              selected: r === ea.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS
            }, ea.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS);
          case ea.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, a.jsx)(z.default, {
              guild: l,
              selected: r === er.StaticChannelRoute.ROLE_SUBSCRIPTIONS
            }, ea.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS);
          case ea.ChannelListCommunityRow.GUILD_SHOP:
            return (0, a.jsx)(X.default, {
              guild: l,
              selected: r === er.StaticChannelRoute.GUILD_SHOP
            }, ea.ChannelListCommunityRow.GUILD_SHOP);
          case ea.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
            return (0, a.jsx)(W.default, {
              guild: l,
              selected: r === er.StaticChannelRoute.MEMBER_APPLICATIONS
            }, ea.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS);
          case ea.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, a.jsx)(Z.GuildNewMemberActionsProgressBar, {
              guild: l
            });
          case ea.ChannelListCommunityRow.CHANNELS_AND_ROLES:
            return (0, a.jsx)(Y.GuildBrowseChannelsRow, {
              guild: l,
              selected: r === er.StaticChannelRoute.CHANNEL_BROWSER || r === er.StaticChannelRoute.CUSTOMIZE_COMMUNITY
            }, ea.ChannelListCommunityRow.CHANNELS_AND_ROLES);
          case ea.ChannelListCommunityRow.GUILD_DIRECTORY:
            return (0, a.jsx)(k.default, {
              guild: l,
              selectedChannelId: r,
              disableManageChannels: f
            }, ea.ChannelListCommunityRow.GUILD_DIRECTORY);
          case ea.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, a.jsx)(S.default, {
              guild: l,
              selected: r === er.StaticChannelRoute.MEMBER_SAFETY
            }, ea.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY);
          default:
            return null
        }
      }
      if (d.isPlaceholderRow(t, n)) return null;
      let m = d.getChannelFromSectionRow(t, n);
      if (null == m) return null;
      let {
        category: g,
        channel: _
      } = m, I = g instanceof G.ChannelListFavoritesCategory, N = _.record, A = "".concat(t).concat(_.id);
      switch (N.type) {
        case ei.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ei.ChannelTypes.GUILD_TEXT:
        case ei.ChannelTypes.GUILD_FORUM:
        case ei.ChannelTypes.GUILD_MEDIA:
        case ei.ChannelTypes.DM:
        case ei.ChannelTypes.GROUP_DM:
          return (0, a.jsxs)(s.Fragment, {
            children: [(0, a.jsx)($.default, {
              channel: N,
              guild: l,
              position: _.position,
              selected: r === _.id,
              muted: _.isMuted,
              subtitle: _.subtitle,
              disableManageChannels: f,
              canBeNewChannel: C && t === d.recentsSectionNumber,
              isFavoriteCategory: I,
              withGuildIcon: p
            }), _.threadCount > 0 ? (0, a.jsx)(Q.default, {
              withGuildIcon: p,
              channel: N,
              sortedThreadIds: _.threadIds,
              selectedChannel: null != i && (i.id === _.id || i.parent_id === N.id) ? i : null,
              selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === N.id ? u : null
            }) : null]
          }, A);
        case ei.ChannelTypes.GUILD_STAGE_VOICE:
          var L, v;
          return (0, a.jsx)(q.default, {
            channel: N,
            guild: l,
            position: _.position,
            selected: r === _.id,
            connected: u === _.id,
            collapsed: _.isCollapsed || g.isCollapsed,
            voiceStates: null !== (L = c[_.id]) && void 0 !== L ? L : [],
            speakerVoiceStates: null !== (v = h[_.id]) && void 0 !== v ? v : [],
            disableManageChannels: f,
            isFavoriteCategory: I
          }, A);
        case ei.ChannelTypes.GUILD_VOICE:
          return (0, a.jsx)(el.default, {
            channel: N,
            guild: l,
            position: _.position,
            selected: r === _.id,
            connected: u === _.id,
            collapsed: _.isCollapsed || g.isCollapsed,
            voiceStates: c[_.id],
            subtitle: _.subtitle,
            disableManageChannels: f,
            showTutorial: _.isFirstVoiceChannel,
            isFavoriteCategory: I,
            withGuildIcon: p
          }, A);
        case ei.ChannelTypes.GUILD_STORE:
          return (0, a.jsx)(J.default, {
            channel: N,
            guild: l,
            position: _.position,
            selected: r === _.id
          }, A);
        case ei.ChannelTypes.GUILD_CATEGORY:
          if (t !== d.voiceChannelsSectionNumber) return null;
          return (0, a.jsx)(B.ReadonlyCategoryChannel, {
            channel: N
          }, "readonly-".concat(N.id));
        case ei.ChannelTypes.PUBLIC_THREAD:
        case ei.ChannelTypes.PRIVATE_THREAD:
          return (0, a.jsx)($.default, {
            channel: N,
            guild: l,
            position: _.position,
            selected: r === _.id,
            muted: _.isMuted,
            subtitle: _.subtitle,
            disableManageChannels: f,
            canBeNewChannel: !1,
            isFavoriteCategory: !1,
            forceTopLevelThread: !0
          }, A);
        default:
          return null
      }
    }), ed(this, "renderSectionFooter", e => {
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
      return (0, a.jsx)(H.default, {
        guildId: u,
        guildChannels: n,
        guildChannelsVersion: l,
        sectionIndex: t,
        voiceStates: s,
        selectedChannelId: i,
        selectedVoiceChannelId: r,
        optInEnabled: o
      }, (0, H.getKeyForSectionFooter)(t, n, o))
    }), ed(this, "getAnchorId", (e, t) => {
      var n, l, a;
      let {
        guildChannels: s
      } = this.props;
      if (e !== G.SECTION_INDEX_COMMUNITY) {
        if (null == t) return e === G.SECTION_INDEX_FAVORITES ? "favorites-header" : e === s.recentsSectionNumber ? "recents-header" : e === s.voiceChannelsSectionNumber ? "voice-channels" : e === G.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? "uncategorized-header" : null === (a = s.getNamedCategoryFromSection(e)) || void 0 === a ? void 0 : a.id;
        if (!s.isPlaceholderRow(e, t)) return null === (l = s.getChannelFromSectionRow(e, t)) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id
      }
    }), ed(this, "testShouldSkipTutorial", () => {
      if (!R.default.shouldShow("voice-conversations")) return;
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
ed(ec, "contextType", o.ListContainerContext);
let ef = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: l
  } = e, i = (0, u.useStateFromStores)([C.default], () => C.default.keyboardModeEnabled), {
    analyticsLocations: r
  } = (0, m.default)(p.default.GUILD_CHANNEL_LIST), d = (0, u.useStateFromStores)([O.default], () => O.default.getChannel(n)), c = (0, u.useStateFromStores)([O.default], () => O.default.getChannel(l)), f = (0, u.useStateFromStores)([b.default], () => b.default.getGuildId()), g = (0, L.useOptInEnabledForGuild)(t), E = s.useRef(null), S = s.useCallback((e, t) => {
    let n = E.current;
    if (null != n) {
      if (ei.ID_REGEX.test(t) || (0, er.isStaticChannelRoute)(t)) n.scrollToChannel(t, !1, 2 * es.SCROLL_TO_SPACER, () => {
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
  }, []), _ = s.useCallback(() => new Promise(e => {
    let t = E.current;
    if (null == t) return e();
    t.scrollTo(0, () => requestAnimationFrame(() => e()))
  }), []), I = s.useCallback(() => new Promise(e => {
    let t = E.current;
    if (null == t) return e();
    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
  }), []), N = (0, o.default)({
    id: "channels",
    defaultFocused: null != n ? n : void 0,
    isEnabled: i,
    setFocus: S,
    scrollToStart: _,
    scrollToEnd: I
  }), T = N.setFocus;
  s.useEffect(() => {
    null != n && T(n)
  }, [n, T]);
  let A = (0, x.default)(t);
  return (0, a.jsx)(m.AnalyticsLocationProvider, {
    value: r,
    children: (0, a.jsx)(h.default, {
      section: ei.AnalyticsSections.GUILD_CHANNEL_LIST,
      children: (0, a.jsx)(o.ListNavigatorProvider, {
        navigator: N,
        children: (0, a.jsx)(ec, {
          ...e,
          listNavigator: N,
          ref: E,
          selectedChannel: d,
          selectedVoiceChannel: c,
          stageChannelSpeakerVoiceStates: A,
          selectedGuildId: f,
          optInEnabled: g
        })
      })
    })
  })
};

function eh(e) {
  let t = (0, P.useFavoritesServerChannelList)(),
    {
      isFavoritesPerk: n
    } = (0, g.useFavoritesServerExperiment)("favorites-channel-list");
  return (0, a.jsx)(ef, {
    ...e,
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n
  })
}

function eC(e) {
  let t = (0, F.default)(e.guild),
    n = (0, w.default)(e.guild),
    l = r().uniq(n.concat(t)),
    s = (0, I.default)(e.guild.id),
    i = (0, N.default)(e.guild.id),
    o = (0, u.useStateFromStoresObject)([U.default], () => U.default.getGuild(e.guildId, l));
  return !e.guild.hasFeature(ei.GuildFeatures.COMMUNITY) && !e.guild.hasFeature(ei.GuildFeatures.HUB) && s && 0 === i.length && _.default.trackExposure({
    guildId: e.guildId,
    location: "Channel List"
  }), (0, a.jsx)(ef, {
    ...e,
    ...o
  })
}