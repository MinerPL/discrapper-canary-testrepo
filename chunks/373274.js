n.d(t, {
  E: function() {
return eh;
  },
  j: function() {
return ed;
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
  C = n(362658),
  I = n(583962),
  E = n(915885),
  N = n(258871),
  x = n(216306),
  S = n(398758),
  v = n(220444),
  Z = n(31022),
  T = n(10401),
  L = n(131704),
  A = n(592125),
  b = n(796974),
  M = n(984933),
  R = n(914010),
  O = n(153124),
  y = n(540126),
  P = n(734307),
  j = n(854444),
  D = n(688265),
  U = n(896053),
  w = n(301342),
  G = n(906817),
  k = n(429122),
  B = n(285573),
  V = n(519358),
  H = n(910595),
  F = n(466935),
  W = n(120818),
  Y = n(61642),
  z = n(848442),
  K = n(53425),
  q = n(424785),
  Q = n(770202),
  J = n(79556),
  X = n(428127),
  $ = n(950969),
  ee = n(233657),
  et = n(831700),
  en = n(443063),
  ei = n(327530),
  el = n(981631),
  er = n(176505),
  ea = n(689938),
  es = n(222625);

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class ec extends(i = r.PureComponent) {
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
} = b.Z.getGuildDimensions(i);
null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != a && this.scrollTo(a) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == a && null != l ? this.scrollToChannel(l, !1, ei.yE, this.handleListScroll) : this.scrollTo(null != a ? a : 0, this.handleListScroll)), this.testShouldSkipTutorial();
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
  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei.yE,
  i = arguments.length > 3 ? arguments[3] : void 0,
  l = this._list,
  r = this.getSectionRowsFromChannel(e)[0];
if (null != r && null != l) {
  if (null != r.threadOffset) {
    let [e] = l.getScrollPosition(r.section, r.row), a = r.threadOffset * ei.Vf;
    l.scrollIntoViewRect({
      start: e + a,
      end: e + a + ei.Vf,
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
  if (i < y.wd || e.isPlaceholderRow(i, l))
    return !1;
  let r = e.getChannelFromSectionRow(i, l);
  if (null == r)
    return !1;
  let {
    channel: a,
    category: s
  } = r;
  return !!(0, L.vc)(a.record.type) && (!s.isCollapsed || !s.isMuted) && !a.isMuted && !!t.isItemVisible(i, l, !0) && (0, v.d)(a.record);
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
  className: es.positionedContainer,
  children: (0, l.jsx)($.Z, {
    ref: this.unreadTopRef,
    textUnread: ea.Z.Messages.NEW_UNREADS,
    textMention: ea.Z.Messages.NEW_MENTIONS,
    hide: null == e && (i || null != t || null != n),
    className: es.unreadTop,
    barClassName: es.unreadBar,
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
return (0, l.jsx)($.Z, {
  reverse: !0,
  ref: this.unreadBottomRef,
  textUnread: ea.Z.Messages.NEW_UNREADS,
  textMention: ea.Z.Messages.NEW_MENTIONS,
  hide: null == i && r,
  className: es.unreadBottom,
  barClassName: es.unreadBar,
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
  hasGuildSubheader: i
} = this.props, {
  ref: r,
  ...a
} = this.context, s = 0;
return null != n ? s = ei.Q0 : t.hasCommunityInfoSubheader() && !i && (s = ei.JD), (0, l.jsx)(d.FocusJumpSection, {
  children: t => (0, l.jsx)(d.List, {
    ref: this.setListRef,
    className: es.scroller,
    fade: !0,
    customTheme: !0,
    sectionHeight: this.getSectionHeight,
    footerHeight: this.getSectionFooterHeight,
    rowHeight: this.getRowHeight,
    paddingTop: s,
    paddingBottom: ei.$k,
    renderSection: this.renderSection,
    renderFooter: this.renderSectionFooter,
    renderRow: this.renderRow,
    onScroll: this.handleListScroll,
    onResize: this.handleResize,
    onContentResize: this.handleResize,
    sections: e.getSections(),
    innerAriaLabel: ea.Z.Messages.CHANNELS,
    innerTag: 'ul',
    getAnchorId: this.getAnchorId,
    ...a,
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
  children: (0, l.jsx)(O.FG, {
    children: i => (0, l.jsx)(d.HeadingLevel, {
      component: (0, l.jsx)(d.HiddenVisually, {
        children: (0, l.jsx)(d.H, {
          id: i,
          children: ea.Z.Messages.CHANNELS
        })
      }),
      children: n ? (0, l.jsxs)(r.Fragment, {
        children: [
          (0, l.jsx)('div', {
            className: es.positionedContainer,
            children: (0, l.jsx)(X.Z, {
              position: 'top',
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })
          }),
          this.renderList(),
          (0, l.jsx)(X.Z, {
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
super(...e), eo(this, '_list', null), eo(this, 'unreadTopRef', r.createRef()), eo(this, 'unreadBottomRef', r.createRef()), eo(this, 'state', {
  initialized: !1,
  isUnreadVisible: !0,
  topUnread: null,
  topMention: null,
  bottomUnread: null,
  bottomMention: null
}), eo(this, 'setListRef', e => {
  var t;
  let {
    ref: n
  } = this.context;
  n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e;
}), eo(this, 'jumpToVoiceChannels', () => {
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
    padding: ei.yE
  });
}), eo(this, 'jumpToChannel', e => this.scrollToChannel(e, !0, ei.Q1)), eo(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
  let [n, i] = t;
  return this.scrollToChannel(e, !0, null != n && null != i ? ei.Q1 : ei.yE);
}), eo(this, 'isChannelVisible', (e, t) => {
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
}), eo(this, 'getVisibleChannels', () => {
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
}), eo(this, 'handleResize', () => {
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
}), eo(this, 'handleListScroll', () => {
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
}), eo(this, 'handleUnreadCalculate', (e, t, n) => {
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
}), eo(this, 'updateChannelListScroll', s().throttle(e => {
  h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
}, 100)), eo(this, 'getSectionHeight', e => {
  let {
    guild: t,
    guildChannels: n
  } = this.props;
  return (0, G.EM)(e, t, n);
}), eo(this, 'getSectionFooterHeight', e => {
  let {
    guildChannels: t,
    voiceStates: n,
    selectedVoiceChannelId: i,
    selectedChannelId: l,
    optInEnabled: r,
    guildChannelsVersion: a
  } = this.props;
  return (0, k.dt)({
    sectionIndex: e,
    guildChannels: t,
    guildChannelsVersion: a,
    voiceStates: n,
    selectedChannelId: l,
    selectedVoiceChannelId: i,
    optInEnabled: r
  });
}), eo(this, 'getRowHeight', (e, t) => {
  let {
    guildChannels: n,
    voiceStates: i,
    stageChannelSpeakerVoiceStates: l,
    selectedVoiceChannelId: r,
    selectedGuildId: a
  } = this.props, s = ei.Vf;
  if (e === y.zm) {
    let e = n.getCommunitySection();
    return e.isEmpty() ? 0 : e.getRow(t) === en.f.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? I.aR : I.PD : s;
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
  if (c.record.type === el.d4z.GUILD_CATEGORY)
    return 40;
  let {
    isFavoritesPerk: d
  } = C.Z.getCurrentConfig({
    location: 'channel_list'
  }, {
    autoTrackExposure: !0
  });
  for (let e of (d && a === el.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice() && (s = ei.GQ), c.threadIds)) {
    s += ei.Vf;
    let t = i[c.id];
    null != t && t.length > 0 && (s += (r === e ? t.length * ei.Hb : ei.Hb) + ei.cx);
  }
  if (c.record.isGuildVoice()) {
    let e = i[c.id];
    if (null != e && e.length > 0) {
      let t = e.length * ei.Hb;
      (c.isCollapsed || u.isCollapsed) && (t = ei.Hb), s += t + ei.cx;
    }
    c.id === this.props.rtcConnectedChannelId && (s += this.props.rtcDesyncedVoiceStatesCount * ei.Hb);
  }
  if (null != c.subtitle && (s += ei.NY), c.record.isGuildStageVoice()) {
    var h, p;
    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
      t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
    if (null != e && e.length > 0) {
      let e = t.length * ei.Hb;
      c.isCollapsed || u.isCollapsed ? e = Math.ceil(e / ei.VE) : e += ei.Hb, s += e + ei.cx;
    }
  }
  return s;
}), eo(this, 'dismissRecents', () => {
  let {
    guild: e,
    guildChannels: t,
    selectedChannelId: n
  } = this.props, i = t.getCategoryFromSection(t.recentsSectionNumber);
  if (null == i)
    return;
  let l = null,
    r = i.getShownChannelAndThreadIds();
  null != n && r.includes(n) && (l = (0, x.KY)(t)), (0, x.Uo)(e.id, r, l);
}), eo(this, 'renderSection', e => {
  let {
    section: t
  } = e, {
    guildChannels: n,
    guildChannelsVersion: i,
    guild: r,
    selectedChannelId: a,
    disableManageChannels: s
  } = this.props;
  return (0, l.jsx)(G.ZP, {
    sectionIndex: t,
    guild: r,
    guildChannels: n,
    guildChannelsVersion: i,
    selectedChannelId: a,
    disableManageChannels: s
  }, (0, G.WW)(t, n));
}), eo(this, 'renderRow', e => {
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
    withGuildIcon: f
  } = this.props;
  if (t === y.zm) {
    let e = u.getCommunitySection(),
      t = e.getRow(n);
    if (null == t)
      return null;
    switch (t) {
      case en.f.GUILD_HUB_HEADER_OPTIONS:
        return (0, l.jsx)(N.Z, {
          guild: i,
          channel: M.ZP.getDefaultChannel(i.id)
        }, en.f.GUILD_HUB_HEADER_OPTIONS);
      case en.f.GUILD_PREMIUM_PROGRESS_BAR:
        let r = e.getRows();
        return (0, l.jsx)(I.ZP, {
          guild: i,
          withMargin: r.length > 1
        }, en.f.GUILD_PREMIUM_PROGRESS_BAR);
      case en.f.GUILD_HOME:
        return (0, l.jsx)(H.Z, {
          guild: i,
          selected: s === er.oC.GUILD_HOME
        }, en.f.GUILD_HOME);
      case en.f.GUILD_SCHEDULED_EVENTS:
        return (0, l.jsx)(ee.Z, {
          guild: i,
          selected: s === en.f.GUILD_SCHEDULED_EVENTS
        }, en.f.GUILD_SCHEDULED_EVENTS);
      case en.f.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, l.jsx)(Y.Z, {
          guild: i,
          selected: s === er.oC.ROLE_SUBSCRIPTIONS
        }, en.f.GUILD_ROLE_SUBSCRIPTIONS);
      case en.f.GUILD_SHOP:
        return (0, l.jsx)(z.Z, {
          guild: i,
          selected: s === er.oC.GUILD_SHOP
        }, en.f.GUILD_SHOP);
      case en.f.GUILD_MEMBER_APPLICATIONS:
        return (0, l.jsx)(F.Z, {
          guild: i,
          selected: s === er.oC.MEMBER_APPLICATIONS
        }, en.f.GUILD_MEMBER_APPLICATIONS);
      case en.f.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
        return (0, l.jsx)(W.T, {
          guild: i
        });
      case en.f.CHANNELS_AND_ROLES:
        return (0, l.jsx)(V.m, {
          guild: i,
          selected: s === er.oC.CHANNEL_BROWSER || s === er.oC.CUSTOMIZE_COMMUNITY
        }, en.f.CHANNELS_AND_ROLES);
      case en.f.GUILD_DIRECTORY:
        return (0, l.jsx)(B.Z, {
          guild: i,
          selectedChannelId: s,
          disableManageChannels: h
        }, en.f.GUILD_DIRECTORY);
      case en.f.GUILD_MOD_DASH_MEMBER_SAFETY:
        return (0, l.jsx)(E.Z, {
          guild: i,
          selected: s === er.oC.MEMBER_SAFETY
        }, en.f.GUILD_MOD_DASH_MEMBER_SAFETY);
      default:
        return null;
    }
  }
  if (u.isPlaceholderRow(t, n))
    return null;
  let m = u.getChannelFromSectionRow(t, n);
  if (null == m)
    return null;
  let {
    category: g,
    channel: C
  } = m, x = g instanceof y.VR, S = C.record, v = ''.concat(t).concat(C.id);
  switch (S.type) {
    case el.d4z.GUILD_ANNOUNCEMENT:
    case el.d4z.GUILD_TEXT:
    case el.d4z.GUILD_FORUM:
    case el.d4z.GUILD_MEDIA:
    case el.d4z.DM:
    case el.d4z.GROUP_DM:
      return (0, l.jsxs)(r.Fragment, {
        children: [
          (0, l.jsx)(J.Z, {
            channel: S,
            guild: i,
            position: C.position,
            selected: s === C.id,
            muted: C.isMuted,
            subtitle: C.subtitle,
            disableManageChannels: h,
            canBeNewChannel: _ && t === u.recentsSectionNumber,
            isFavoriteCategory: x,
            withGuildIcon: f
          }),
          C.threadCount > 0 ? (0, l.jsx)(K.Z, {
            withGuildIcon: f,
            channel: S,
            sortedThreadIds: C.threadIds,
            selectedChannel: null != a && (a.id === C.id || a.parent_id === S.id) ? a : null,
            selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === S.id ? c : null
          }) : null
        ]
      }, v);
    case el.d4z.GUILD_STAGE_VOICE:
      var Z, T;
      return (0, l.jsx)(q.Z, {
        channel: S,
        guild: i,
        position: C.position,
        selected: s === C.id,
        connected: c === C.id,
        collapsed: C.isCollapsed || g.isCollapsed,
        voiceStates: null !== (Z = d[C.id]) && void 0 !== Z ? Z : [],
        speakerVoiceStates: null !== (T = p[C.id]) && void 0 !== T ? T : [],
        disableManageChannels: h,
        isFavoriteCategory: x
      }, v);
    case el.d4z.GUILD_VOICE:
      return (0, l.jsx)(et.Z, {
        channel: S,
        guild: i,
        position: C.position,
        selected: s === C.id,
        connected: c === C.id,
        collapsed: C.isCollapsed || g.isCollapsed,
        voiceStates: d[C.id],
        subtitle: C.subtitle,
        disableManageChannels: h,
        showTutorial: C.isFirstVoiceChannel,
        isFavoriteCategory: x,
        withGuildIcon: f
      }, v);
    case el.d4z.GUILD_STORE:
      return (0, l.jsx)(Q.Z, {
        channel: S,
        guild: i,
        position: C.position,
        selected: s === C.id
      }, v);
    case el.d4z.GUILD_CATEGORY:
      if (t !== u.voiceChannelsSectionNumber)
        return null;
      return (0, l.jsx)(w.kw, {
        channel: S
      }, 'readonly-'.concat(S.id));
    case el.d4z.PUBLIC_THREAD:
    case el.d4z.PRIVATE_THREAD:
      return (0, l.jsx)(J.Z, {
        channel: S,
        guild: i,
        position: C.position,
        selected: s === C.id,
        muted: C.isMuted,
        subtitle: C.subtitle,
        disableManageChannels: h,
        canBeNewChannel: !1,
        isFavoriteCategory: !1,
        forceTopLevelThread: !0
      }, v);
    default:
      return null;
  }
}), eo(this, 'renderSectionFooter', e => {
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
  return (0, l.jsx)(k.ZP, {
    guildId: c,
    guildChannels: n,
    guildChannelsVersion: i,
    sectionIndex: t,
    voiceStates: r,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    optInEnabled: o
  }, (0, k.eo)(t, n, o));
}), eo(this, 'getAnchorId', (e, t) => {
  var n, i, l;
  let {
    guildChannels: r
  } = this.props;
  if (e !== y.zm) {
    if (null == t)
      return e === y.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === y.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
    if (!r.isPlaceholderRow(e, t))
      return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
  }
}), eo(this, 'testShouldSkipTutorial', () => {
  if (!T.Z.shouldShow('voice-conversations'))
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
eo(ec, 'contextType', o.qB);
let eu = e => {
  let {
guildId: t,
selectedChannelId: n,
selectedVoiceChannelId: i
  } = e, a = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled), {
analyticsLocations: s
  } = (0, g.ZP)(m.Z.GUILD_CHANNEL_LIST), d = (0, u.e7)([A.Z], () => A.Z.getChannel(n)), h = (0, u.e7)([A.Z], () => A.Z.getChannel(i)), p = (0, u.e7)([R.Z], () => R.Z.getGuildId()), C = (0, S.DM)(t), I = r.useRef(null), E = r.useCallback((e, t) => {
let n = I.current;
if (null != n) {
  if (el.Xyh.test(t) || (0, er.AB)(t))
    n.scrollToChannel(t, !1, 2 * ei.yE, () => {
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
  }), []), v = (0, c.ZP)({
id: 'channels',
defaultFocused: null != n ? n : void 0,
isEnabled: a,
setFocus: E,
scrollToStart: N,
scrollToEnd: x
  }), T = v.setFocus;
  r.useEffect(() => {
null != n && T(n);
  }, [
n,
T
  ]);
  let L = (0, Z.Z)(t);
  return (0, l.jsx)(g.Gt, {
value: s,
children: (0, l.jsx)(_.Z, {
  section: el.jXE.GUILD_CHANNEL_LIST,
  children: (0, l.jsx)(o.bG, {
    navigator: v,
    children: (0, l.jsx)(ec, {
      ...e,
      listNavigator: v,
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

function ed(e) {
  let t = (0, j.o)(),
{
  isFavoritesPerk: n
} = (0, C.z)('favorites-channel-list');
  return (0, l.jsx)(eu, {
...e,
guildChannels: t,
guildChannelsVersion: 0,
withGuildIcon: n
  });
}

function eh(e) {
  let t = (0, U.Z)(e.guild),
n = (0, D.Z)(e.guild),
i = s().uniq(n.concat(t)),
r = (0, u.cj)([P.Z], () => P.Z.getGuild(e.guildId, i));
  return (0, l.jsx)(eu, {
...e,
...r
  });
}