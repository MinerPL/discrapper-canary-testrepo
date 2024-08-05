n.d(t, {
  E: function() {
return e_;
  },
  j: function() {
return ep;
  }
}), n(47120), n(653041);
var i, l = n(735250),
  r = n(470079),
  a = n(392711),
  s = n.n(a),
  o = n(91192),
  c = n(924826),
  u = n(442837),
  d = n(481060),
  h = n(925549),
  p = n(260300),
  _ = n(410575),
  f = n(607070),
  m = n(100527),
  g = n(906732),
  C = n(540059),
  I = n(362658),
  E = n(583962),
  N = n(915885),
  x = n(258871),
  S = n(216306),
  v = n(398758),
  Z = n(220444),
  T = n(31022),
  L = n(10401),
  A = n(131704),
  b = n(592125),
  M = n(796974),
  R = n(984933),
  O = n(914010),
  y = n(153124),
  P = n(540126),
  j = n(734307),
  D = n(854444),
  U = n(688265),
  G = n(896053),
  w = n(301342),
  k = n(471995),
  B = n(906817),
  H = n(429122),
  V = n(285573),
  F = n(519358),
  W = n(910595),
  Y = n(466935),
  z = n(120818),
  K = n(61642),
  q = n(848442),
  Q = n(53425),
  J = n(424785),
  X = n(770202),
  $ = n(79556),
  ee = n(428127),
  et = n(950969),
  en = n(233657),
  ei = n(831700),
  el = n(443063),
  er = n(327530),
  ea = n(981631),
  es = n(176505),
  eo = n(689938),
  ec = n(222625);

function eu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class ed extends(i = r.PureComponent) {
  componentDidMount() {
this.setState({
  initialized: !0
});
  }
  componentWillUnmount() {
this.updateChannelListScroll.cancel();
  }
  componentDidUpdate(e, t) {
let {
  scrollToChannel: n,
  guildId: i,
  selectedChannelId: l
} = this.props, {
  initialized: r
} = this.state, {
  scrollTop: a
} = M.Z.getGuildDimensions(i);
null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != a && this.scrollTo(a) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == a && null != l ? this.scrollToChannel(l, !1, er.yE, this.handleListScroll) : this.scrollTo(null != a ? a : 0, this.handleListScroll)), this.testShouldSkipTutorial();
  }
  getSectionRowsFromChannel(e) {
return this.props.guildChannels.getSectionRowsFromChannel(e);
  }
  scrollTo(e, t) {
var n;
null === (n = this._list) || void 0 === n || n.scrollTo({
  to: e,
  animate: !1,
  callback: t
});
  }
  scrollToChannel(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : er.yE,
  i = arguments.length > 3 ? arguments[3] : void 0,
  l = this._list,
  r = this.getSectionRowsFromChannel(e)[0];
if (null != r && null != l) {
  if (null != r.threadOffset) {
    let [e] = l.getScrollPosition(r.section, r.row), a = r.threadOffset * er.Vf;
    l.scrollIntoViewRect({
      start: e + a,
      end: e + a + er.Vf,
      padding: n,
      animate: t,
      callback: i
    });
  } else
    l.scrollToIndex({
      section: r.section,
      row: r.row,
      animate: t,
      padding: n,
      callback: i
    });
} else
  null == i || i();
  }
  isUnreadVisible() {
let {
  guildChannels: e
} = this.props, t = this._list;
return null != t && t.getItems().some(n => {
  if ('row' !== n.type)
    return !1;
  let {
    section: i,
    row: l
  } = n;
  if (i < P.wd || e.isPlaceholderRow(i, l))
    return !1;
  let r = e.getChannelFromSectionRow(i, l);
  if (null == r)
    return !1;
  let {
    channel: a,
    category: s
  } = r;
  return !!(0, A.vc)(a.record.type) && (!s.isCollapsed || !s.isMuted) && !a.isMuted && !!t.isItemVisible(i, l, !0) && (0, Z.d)(a.record);
});
  }
  renderTopUnread() {
let {
  topMention: e,
  bottomUnread: t,
  bottomMention: n,
  isUnreadVisible: i
} = this.state, {
  guildId: r,
  guildChannels: a,
  guildChannelsVersion: s
} = this.props;
return (0, l.jsx)('div', {
  className: ec.positionedContainer,
  children: (0, l.jsx)(et.Z, {
    ref: this.unreadTopRef,
    textUnread: eo.Z.Messages.NEW_UNREADS,
    textMention: eo.Z.Messages.NEW_MENTIONS,
    hide: null == e && (i || null != t || null != n),
    className: ec.unreadTop,
    barClassName: ec.unreadBar,
    guildId: r,
    guildChannels: a,
    guildChannelsVersion: s,
    isVisible: this.isChannelVisible,
    onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
    onCalculate: this.handleUnreadCalculate
  })
});
  }
  renderBottomUnread() {
let {
  guildId: e,
  guildChannels: t,
  guildChannelsVersion: n
} = this.props, {
  bottomMention: i,
  isUnreadVisible: r
} = this.state;
return (0, l.jsx)(et.Z, {
  reverse: !0,
  ref: this.unreadBottomRef,
  textUnread: eo.Z.Messages.NEW_UNREADS,
  textMention: eo.Z.Messages.NEW_MENTIONS,
  hide: null == i && r,
  className: ec.unreadBottom,
  barClassName: ec.unreadBar,
  guildId: e,
  guildChannels: t,
  guildChannelsVersion: n,
  isVisible: this.isChannelVisible,
  onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
  onCalculate: this.handleUnreadCalculate
});
  }
  renderList() {
let {
  guildChannels: e,
  guild: t,
  guildBanner: n,
  hasGuildSubheader: i,
  isRefreshEnabled: r = !1
} = this.props, {
  ref: a,
  ...s
} = this.context, o = 0;
return null != n ? o = r ? er.hl : er.Q0 : t.hasCommunityInfoSubheader() && !i && (o = er.JD), (0, l.jsx)(d.FocusJumpSection, {
  children: t => (0, l.jsx)(d.List, {
    ref: this.setListRef,
    className: ec.scroller,
    fade: !0,
    customTheme: !0,
    sectionHeight: this.getSectionHeight,
    footerHeight: this.getSectionFooterHeight,
    rowHeight: this.getRowHeight,
    paddingTop: o,
    paddingBottom: er.$k,
    renderSection: this.renderSection,
    renderFooter: this.renderSectionFooter,
    renderListHeader: r ? this.renderListHeader : void 0,
    stickyListHeader: r,
    renderRow: this.renderRow,
    onScroll: this.handleListScroll,
    onResize: this.handleResize,
    onContentResize: this.handleResize,
    sections: e.getSections(),
    innerAriaLabel: eo.Z.Messages.CHANNELS,
    innerTag: 'ul',
    getAnchorId: this.getAnchorId,
    ...s,
    ...t
  }, 'guild-channels')
});
  }
  render() {
let {
  guildChannels: e,
  guildChannelsVersion: t,
  showNewUnreadsBar: n
} = this.props;
return (0, l.jsx)(r.Fragment, {
  children: (0, l.jsx)(y.FG, {
    children: i => (0, l.jsx)(d.HeadingLevel, {
      component: (0, l.jsx)(d.HiddenVisually, {
        children: (0, l.jsx)(d.H, {
          id: i,
          children: eo.Z.Messages.CHANNELS
        })
      }),
      children: n ? (0, l.jsxs)(r.Fragment, {
        children: [
          (0, l.jsx)('div', {
            className: ec.positionedContainer,
            children: (0, l.jsx)(ee.Z, {
              position: 'top',
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })
          }),
          this.renderList(),
          (0, l.jsx)(ee.Z, {
            position: 'bottom',
            guildChannels: e,
            guildChannelsVersion: t,
            jumpToVoiceChannels: this.jumpToVoiceChannels,
            jumpToChannel: this.jumpToChannel
          })
        ]
      }) : (0, l.jsxs)(r.Fragment, {
        children: [
          this.renderTopUnread(),
          this.renderList(),
          this.renderBottomUnread()
        ]
      })
    })
  })
});
  }
  constructor(...e) {
super(...e), eu(this, '_list', null), eu(this, 'unreadTopRef', r.createRef()), eu(this, 'unreadBottomRef', r.createRef()), eu(this, 'state', {
  initialized: !1,
  isUnreadVisible: !0,
  topUnread: null,
  topMention: null,
  bottomUnread: null,
  bottomMention: null
}), eu(this, 'setListRef', e => {
  var t;
  let {
    ref: n
  } = this.context;
  n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e;
}), eu(this, 'jumpToVoiceChannels', () => {
  var e, t, n, i;
  let {
    guildChannels: l,
    voiceStates: r
  } = this.props, a = 0, s = null !== (n = null === (e = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
  for (let e = 0; e < s.length - 1; e++)
    if ((null !== (i = r[s[e]]) && void 0 !== i ? i : []).length > 0) {
      a = e + 1;
      break;
    }
  null === (t = this._list) || void 0 === t || t.scrollToIndex({
    section: l.voiceChannelsSectionNumber,
    row: a,
    animate: !0,
    padding: er.yE
  });
}), eu(this, 'jumpToChannel', e => this.scrollToChannel(e, !0, er.Q1)), eu(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
  let [n, i] = t;
  return this.scrollToChannel(e, !0, null != n && null != i ? er.Q1 : er.yE);
}), eu(this, 'isChannelVisible', (e, t) => {
  let n = this.getSectionRowsFromChannel(e),
    i = this._list;
  if (null == i)
    return !1;
  for (let {
      row: e,
      section: l
    }
    of n) {
    let [n, r] = i.getScrollPosition(l, e), a = i.getScrollerState();
    if (t && n + r < a.scrollTop + a.offsetHeight)
      return !0;
    if (!t && n > a.scrollTop)
      return !0;
  }
  return !1;
}), eu(this, 'getVisibleChannels', () => {
  let e = this._list;
  if (null == e)
    return [];
  let t = e.getItems(),
    n = e.getScrollerState(),
    i = [];
  for (var l = 0; l < t.length; l++) {
    let r = t[l];
    if ((0, d.isListItemRow)(r) && r.section >= this.props.guildChannels.favoritesSectionNumber) {
      let t = this.props.guildChannels.getChannelFromSectionRow(r.section, r.row),
        [l, a] = e.getScrollPosition(r.section, r.row);
      null != t && l + a < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
    }
  }
  return i;
}), eu(this, 'handleResize', () => {
  var e, t;
  let {
    showNewUnreadsBar: n
  } = this.props, i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
  if (this.setState({
      isUnreadVisible: this.isUnreadVisible()
    }), n && null != i) {
    let {
      scrollTop: e
    } = i;
    this.updateChannelListScroll(e);
  }
}), eu(this, 'handleListScroll', () => {
  var e, t;
  let {
    onScroll: n
  } = this.props, i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
  if (null != i) {
    let {
      scrollTop: e
    } = i;
    null != n && n(i), this.updateChannelListScroll(e);
  }
  null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
}), eu(this, 'handleUnreadCalculate', (e, t, n) => {
  let i = this.isUnreadVisible();
  n ? this.setState({
    isUnreadVisible: i,
    bottomUnread: t,
    bottomMention: e
  }) : this.setState({
    isUnreadVisible: i,
    topUnread: t,
    topMention: e
  });
}), eu(this, 'updateChannelListScroll', s().throttle(e => {
  h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
}, 100)), eu(this, 'getSectionHeight', e => {
  let {
    guild: t,
    guildChannels: n
  } = this.props;
  return (0, B.EM)(e, t, n);
}), eu(this, 'getSectionFooterHeight', e => {
  let {
    guildChannels: t,
    voiceStates: n,
    selectedVoiceChannelId: i,
    selectedChannelId: l,
    optInEnabled: r,
    guildChannelsVersion: a
  } = this.props;
  return (0, H.dt)({
    sectionIndex: e,
    guildChannels: t,
    guildChannelsVersion: a,
    voiceStates: n,
    selectedChannelId: l,
    selectedVoiceChannelId: i,
    optInEnabled: r
  });
}), eu(this, 'getRowHeight', (e, t) => {
  let {
    guildChannels: n,
    voiceStates: i,
    stageChannelSpeakerVoiceStates: l,
    selectedVoiceChannelId: r,
    selectedGuildId: a
  } = this.props, s = er.Vf;
  if (e === P.zm) {
    let e = n.getCommunitySection();
    return e.isEmpty() ? 0 : e.getRow(t) === el.f.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? E.aR : E.PD : s;
  }
  if (n.isPlaceholderRow(e, t))
    return 0;
  let o = n.getChannelFromSectionRow(e, t);
  if (null == o)
    return 0;
  let {
    channel: c,
    category: u
  } = o;
  if (c.record.type === ea.d4z.GUILD_CATEGORY)
    return 40;
  let {
    isFavoritesPerk: d
  } = I.Z.getCurrentConfig({
    location: 'channel_list'
  }, {
    autoTrackExposure: !0
  });
  for (let e of (d && a === ea.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice() && (s = er.GQ), c.threadIds)) {
    s += er.Vf;
    let t = i[c.id];
    null != t && t.length > 0 && (s += (r === e ? t.length * er.Hb : er.Hb) + er.cx);
  }
  if (c.record.isGuildVoice()) {
    let e = i[c.id];
    if (null != e && e.length > 0) {
      let t = e.length * er.Hb;
      (c.isCollapsed || u.isCollapsed) && (t = er.Hb), s += t + er.cx;
    }
    c.id === this.props.rtcConnectedChannelId && (s += this.props.rtcDesyncedVoiceStatesCount * er.Hb);
  }
  if (null != c.subtitle && (s += er.NY), c.record.isGuildStageVoice()) {
    var h, p;
    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
      t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
    if (null != e && e.length > 0) {
      let e = t.length * er.Hb;
      c.isCollapsed || u.isCollapsed ? e = Math.ceil(e / er.VE) : e += er.Hb, s += e + er.cx;
    }
  }
  return s;
}), eu(this, 'dismissRecents', () => {
  let {
    guild: e,
    guildChannels: t,
    selectedChannelId: n
  } = this.props, i = t.getCategoryFromSection(t.recentsSectionNumber);
  if (null == i)
    return;
  let l = null,
    r = i.getShownChannelAndThreadIds();
  null != n && r.includes(n) && (l = (0, S.KY)(t)), (0, S.Uo)(e.id, r, l);
}), eu(this, 'renderSection', e => {
  let {
    section: t
  } = e, {
    guildChannels: n,
    guildChannelsVersion: i,
    guild: r,
    selectedChannelId: a,
    disableManageChannels: s
  } = this.props;
  return (0, l.jsx)(B.ZP, {
    sectionIndex: t,
    guild: r,
    guildChannels: n,
    guildChannelsVersion: i,
    selectedChannelId: a,
    disableManageChannels: s
  }, (0, B.WW)(t, n));
}), eu(this, 'renderListHeader', () => {
  let {
    guild: e,
    guildChannels: t,
    guildBanner: n
  } = this.props;
  return (0, l.jsx)(k.B, {
    guild: e,
    guildChannels: t,
    hasBanner: null != n
  });
}), eu(this, 'renderRow', e => {
  let {
    section: t,
    row: n
  } = e, {
    guild: i,
    selectedChannel: a,
    selectedChannelId: s,
    selectedVoiceChannel: o,
    selectedVoiceChannelId: c,
    guildChannels: u,
    voiceStates: d,
    disableManageChannels: h,
    stageChannelSpeakerVoiceStates: p,
    optInEnabled: _,
    withGuildIcon: f,
    isRefreshEnabled: m
  } = this.props;
  if (t === P.zm) {
    let e = u.getCommunitySection(),
      t = e.getRow(n);
    if (null == t)
      return null;
    switch (t) {
      case el.f.GUILD_HUB_HEADER_OPTIONS:
        return (0, l.jsx)(x.Z, {
          guild: i,
          channel: R.ZP.getDefaultChannel(i.id)
        }, el.f.GUILD_HUB_HEADER_OPTIONS);
      case el.f.GUILD_PREMIUM_PROGRESS_BAR:
        let r = e.getRows();
        return (0, l.jsx)(E.ZP, {
          guild: i,
          withMargin: r.length > 1
        }, el.f.GUILD_PREMIUM_PROGRESS_BAR);
      case el.f.GUILD_HOME:
        return (0, l.jsx)(W.Z, {
          guild: i,
          selected: s === es.oC.GUILD_HOME
        }, el.f.GUILD_HOME);
      case el.f.GUILD_SCHEDULED_EVENTS:
        if (m)
          return null;
        return (0, l.jsx)(en.Z, {
          guild: i,
          selected: s === el.f.GUILD_SCHEDULED_EVENTS
        }, el.f.GUILD_SCHEDULED_EVENTS);
      case el.f.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, l.jsx)(K.Z, {
          guild: i,
          selected: s === es.oC.ROLE_SUBSCRIPTIONS
        }, el.f.GUILD_ROLE_SUBSCRIPTIONS);
      case el.f.GUILD_SHOP:
        return (0, l.jsx)(q.Z, {
          guild: i,
          selected: s === es.oC.GUILD_SHOP
        }, el.f.GUILD_SHOP);
      case el.f.GUILD_MEMBER_APPLICATIONS:
        return (0, l.jsx)(Y.Z, {
          guild: i,
          selected: s === es.oC.MEMBER_APPLICATIONS
        }, el.f.GUILD_MEMBER_APPLICATIONS);
      case el.f.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
        return (0, l.jsx)(z.T, {
          guild: i
        });
      case el.f.CHANNELS_AND_ROLES:
        if (m)
          return null;
        return (0, l.jsx)(F.m, {
          guild: i,
          selected: s === es.oC.CHANNEL_BROWSER || s === es.oC.CUSTOMIZE_COMMUNITY
        }, el.f.CHANNELS_AND_ROLES);
      case el.f.GUILD_DIRECTORY:
        return (0, l.jsx)(V.Z, {
          guild: i,
          selectedChannelId: s,
          disableManageChannels: h
        }, el.f.GUILD_DIRECTORY);
      case el.f.GUILD_MOD_DASH_MEMBER_SAFETY:
        if (m)
          return null;
        return (0, l.jsx)(N.Z, {
          guild: i,
          selected: s === es.oC.MEMBER_SAFETY
        }, el.f.GUILD_MOD_DASH_MEMBER_SAFETY);
      default:
        return null;
    }
  }
  if (u.isPlaceholderRow(t, n))
    return null;
  let g = u.getChannelFromSectionRow(t, n);
  if (null == g)
    return null;
  let {
    category: C,
    channel: I
  } = g, S = C instanceof P.VR, v = I.record, Z = ''.concat(t).concat(I.id);
  switch (v.type) {
    case ea.d4z.GUILD_ANNOUNCEMENT:
    case ea.d4z.GUILD_TEXT:
    case ea.d4z.GUILD_FORUM:
    case ea.d4z.GUILD_MEDIA:
    case ea.d4z.DM:
    case ea.d4z.GROUP_DM:
      return (0, l.jsxs)(r.Fragment, {
        children: [
          (0, l.jsx)($.Z, {
            channel: v,
            guild: i,
            position: I.position,
            selected: s === I.id,
            muted: I.isMuted,
            subtitle: I.subtitle,
            disableManageChannels: h,
            canBeNewChannel: _ && t === u.recentsSectionNumber,
            isFavoriteCategory: S,
            withGuildIcon: f
          }),
          I.threadCount > 0 ? (0, l.jsx)(Q.Z, {
            withGuildIcon: f,
            channel: v,
            sortedThreadIds: I.threadIds,
            selectedChannel: null != a && (a.id === I.id || a.parent_id === v.id) ? a : null,
            selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === v.id ? c : null
          }) : null
        ]
      }, Z);
    case ea.d4z.GUILD_STAGE_VOICE:
      var T, L;
      return (0, l.jsx)(J.Z, {
        channel: v,
        guild: i,
        position: I.position,
        selected: s === I.id,
        connected: c === I.id,
        collapsed: I.isCollapsed || C.isCollapsed,
        voiceStates: null !== (T = d[I.id]) && void 0 !== T ? T : [],
        speakerVoiceStates: null !== (L = p[I.id]) && void 0 !== L ? L : [],
        disableManageChannels: h,
        isFavoriteCategory: S
      }, Z);
    case ea.d4z.GUILD_VOICE:
      return (0, l.jsx)(ei.Z, {
        channel: v,
        guild: i,
        position: I.position,
        selected: s === I.id,
        connected: c === I.id,
        collapsed: I.isCollapsed || C.isCollapsed,
        voiceStates: d[I.id],
        subtitle: I.subtitle,
        disableManageChannels: h,
        showTutorial: I.isFirstVoiceChannel,
        isFavoriteCategory: S,
        withGuildIcon: f
      }, Z);
    case ea.d4z.GUILD_STORE:
      return (0, l.jsx)(X.Z, {
        channel: v,
        guild: i,
        position: I.position,
        selected: s === I.id
      }, Z);
    case ea.d4z.GUILD_CATEGORY:
      if (t !== u.voiceChannelsSectionNumber)
        return null;
      return (0, l.jsx)(w.kw, {
        channel: v
      }, 'readonly-'.concat(v.id));
    case ea.d4z.PUBLIC_THREAD:
    case ea.d4z.PRIVATE_THREAD:
      return (0, l.jsx)($.Z, {
        channel: v,
        guild: i,
        position: I.position,
        selected: s === I.id,
        muted: I.isMuted,
        subtitle: I.subtitle,
        disableManageChannels: h,
        canBeNewChannel: !1,
        isFavoriteCategory: !1,
        forceTopLevelThread: !0
      }, Z);
    default:
      return null;
  }
}), eu(this, 'renderSectionFooter', e => {
  let {
    section: t
  } = e, {
    guildChannels: n,
    guildChannelsVersion: i,
    voiceStates: r,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    optInEnabled: o,
    guildId: c
  } = this.props;
  return (0, l.jsx)(H.ZP, {
    guildId: c,
    guildChannels: n,
    guildChannelsVersion: i,
    sectionIndex: t,
    voiceStates: r,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    optInEnabled: o
  }, (0, H.eo)(t, n, o));
}), eu(this, 'getAnchorId', (e, t) => {
  var n, i, l;
  let {
    guildChannels: r
  } = this.props;
  if (e !== P.zm) {
    if (null == t)
      return e === P.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === P.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
    if (!r.isPlaceholderRow(e, t))
      return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
  }
}), eu(this, 'testShouldSkipTutorial', () => {
  if (!L.Z.shouldShow('voice-conversations'))
    return;
  let {
    guildChannels: e
  } = this.props, t = e.getFirstVoiceChannel();
  if (null == t) {
    p.Z.dismiss('voice-conversations');
    return;
  }
  let n = this._list;
  if (null != n)
    for (let {
        section: e,
        row: i
      }
      of this.getSectionRowsFromChannel(t.id))
      !n.isItemVisible(e, i) && p.Z.dismiss('voice-conversations');
});
  }
}
eu(ed, 'contextType', o.qB);
let eh = e => {
  let {
guildId: t,
selectedChannelId: n,
selectedVoiceChannelId: i
  } = e, a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled), {
analyticsLocations: s
  } = (0, g.ZP)(m.Z.GUILD_CHANNEL_LIST), d = (0, u.e7)([b.Z], () => b.Z.getChannel(n)), h = (0, u.e7)([b.Z], () => b.Z.getChannel(i)), p = (0, u.e7)([O.Z], () => O.Z.getGuildId()), C = (0, v.DM)(t), I = r.useRef(null), E = r.useCallback((e, t) => {
let n = I.current;
if (null != n) {
  if (ea.Xyh.test(t) || (0, es.AB)(t))
    n.scrollToChannel(t, !1, 2 * er.yE, () => {
      requestAnimationFrame(() => {
        var t;
        return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus();
      });
    });
  else {
    var i;
    null === (i = document.querySelector(e)) || void 0 === i || i.focus();
  }
}
  }, []), N = r.useCallback(() => new Promise(e => {
let t = I.current;
if (null == t)
  return e();
t.scrollTo(0, () => requestAnimationFrame(() => e()));
  }), []), x = r.useCallback(() => new Promise(e => {
let t = I.current;
if (null == t)
  return e();
t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
  }), []), S = (0, c.ZP)({
id: 'channels',
defaultFocused: null != n ? n : void 0,
isEnabled: a,
setFocus: E,
scrollToStart: N,
scrollToEnd: x
  }), Z = S.setFocus;
  r.useEffect(() => {
null != n && Z(n);
  }, [
n,
Z
  ]);
  let L = (0, T.Z)(t);
  return (0, l.jsx)(g.Gt, {
value: s,
children: (0, l.jsx)(_.Z, {
  section: ea.jXE.GUILD_CHANNEL_LIST,
  children: (0, l.jsx)(o.bG, {
    navigator: S,
    children: (0, l.jsx)(ed, {
      ...e,
      listNavigator: S,
      ref: I,
      selectedChannel: d,
      selectedVoiceChannel: h,
      stageChannelSpeakerVoiceStates: L,
      selectedGuildId: p,
      optInEnabled: C
    })
  })
})
  });
};

function ep(e) {
  let t = (0, D.o)(),
{
  isFavoritesPerk: n
} = (0, I.z)('favorites-channel-list');
  return (0, l.jsx)(eh, {
...e,
guildChannels: t,
guildChannelsVersion: 0,
withGuildIcon: n
  });
}

function e_(e) {
  let t = (0, G.Z)(e.guild),
n = (0, U.Z)(e.guild),
i = s().uniq(n.concat(t)),
r = (0, u.cj)([j.Z], () => j.Z.getGuild(e.guildId, i)),
a = (0, C.Q)('GuildChannelList');
  return (0, l.jsx)(eh, {
...e,
...r,
isRefreshEnabled: a
  });
}