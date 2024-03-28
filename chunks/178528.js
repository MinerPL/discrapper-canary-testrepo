"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("718017"),
  s = n("442837"),
  o = n("481060"),
  r = n("619915"),
  d = n("554747"),
  u = n("373274"),
  c = n("315174"),
  f = n("840780"),
  h = n("905423"),
  p = n("680089"),
  g = n("58468"),
  m = n("796974"),
  E = n("324067"),
  S = n("984933"),
  v = n("888369"),
  y = n("430824"),
  I = n("496675"),
  T = n("944486"),
  N = n("9156"),
  O = n("938475"),
  _ = n("937482"),
  C = n("547881"),
  A = n("669083"),
  x = n("711553"),
  R = n("981631"),
  M = n("647086"),
  L = n("689938"),
  D = n("555344");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let j = 54;
class P extends a.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t
    } = e;
    return null == t || null == t.banner ? {
      renderBanner: !1,
      bannerVisible: !1
    } : null
  }
  componentDidMount() {
    let {
      guildId: e
    } = this.props, {
      scrollTop: t
    } = m.default.getGuildDimensions(e);
    this.setAnimatedValue(null != t ? t : 0)
  }
  componentDidUpdate(e) {
    let {
      guild: t,
      guildId: n
    } = this.props;
    if (e.guild !== t) {
      let {
        scrollTop: e
      } = m.default.getGuildDimensions(n);
      this.setAnimatedValue(null != e ? e : 0)
    }
  }
  renderSettings(e) {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(A.default, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e))
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: i,
      controller: a
    } = this.state;
    (e >= j && i || e < j && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: i,
      communityInfoVisible: n
    }), a.update({
      value: Math.min(1, Math.max(0, 1 - e / 78)),
      immediate: !0
    }).start()
  }
  setAnimatedValueForCommunityInfo(e) {
    let {
      communityInfoVisible: t,
      controller: n
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && this.setState({
      communityInfoVisible: !t
    }), n.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  render() {
    let {
      onDragStart: e,
      ...t
    } = this.props, {
      guild: n
    } = t, {
      controller: a,
      renderBanner: l,
      bannerVisible: s,
      communityInfoVisible: r
    } = this.state, d = n.id === M.FAVORITES_RAW_GUILD_ID ? u.FavoritesChannelList : u.GuildChannelList;
    return (0, i.jsxs)(x.default, {
      header: (0, i.jsx)(c.default, {
        guild: n,
        controller: a,
        renderBanner: l,
        bannerVisible: s,
        className: D.guildHeader,
        headerClassName: D.guildHeaderInner,
        onMouseDown: e,
        disableBannerAnimation: !1,
        communityInfoVisible: r,
        children: (0, i.jsx)(o.Popout, {
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(C.default.Icon, {
            icon: _.default,
            label: L.default.Messages.SETTINGS,
            ...e
          })
        })
      }),
      children: [(0, i.jsx)("div", {
        className: D.channelList,
        children: (0, i.jsx)(d, {
          ...t,
          guild: n,
          disableManageChannels: !0,
          onScroll: null != n && null != n.banner ? this.handleScroll : null
        })
      }), (0, i.jsx)("section", {
        className: D.panels,
        "aria-label": L.default.Messages.ACCOUNT_A11Y_LABEL,
        children: (0, i.jsx)(f.default, {
          guildId: n.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      controller: new l.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1
    }), b(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function w(e) {
  var t;
  let {
    guildId: n
  } = e, a = (0, s.useStateFromStores)([y.default], () => y.default.getGuild(n)), l = (0, s.useStateFromStores)([S.default], () => S.default.getChannels(n)), o = (0, s.useStateFromStores)([E.default], () => E.default.getCategories(n)), {
    mutedChannels: u,
    collapseMuted: c
  } = (0, s.useStateFromStoresObject)([N.default], () => ({
    mutedChannels: N.default.getMutedChannels(n),
    collapseMuted: N.default.isGuildCollapsed(n)
  })), f = (0, s.useStateFromStores)([O.default], () => O.default.getVoiceStates(n)), _ = (0, s.useStateFromStores)([g.default], () => g.default.getCollapsed()), {
    scrollTo: C
  } = (0, s.useStateFromStores)([m.default], () => m.default.getGuildDimensions(n)), A = (0, h.default)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), x = (0, s.useStateFromStores)([T.default], () => T.default.getVoiceChannelId()), M = (0, s.useStateFromStores)([I.default], () => I.default.getGuildVersion(n)), L = (0, s.useStateFromStores)([p.default], () => p.default.version), D = (0, s.useStateFromStores)([v.default], () => v.default.getGuildChangeSentinel(n)), b = (0, r.useEmbeddedAppsByChannel)(null == a ? void 0 : a.id), j = (0, d.useActiveEventsByChannel)(null == a ? void 0 : a.id), w = null !== (t = null == a ? void 0 : a.hasFeature(R.GuildFeatures.COMMUNITY)) && void 0 !== t && t;
  return (0, i.jsx)(P, {
    guildId: n,
    guild: a,
    channels: l,
    categories: o,
    mutedChannels: u,
    scrollToChannel: C,
    selectedChannelId: A,
    selectedVoiceChannelId: x,
    voiceStates: f,
    collapsedChannels: _,
    collapseMuted: c,
    guildReadStateSentinel: D,
    permissionVersion: M,
    categoryCollapseVersion: L,
    embeddedAppsByChannel: b,
    activeEventsByChannel: j,
    showNewUnreadsBar: w,
    optInEnabled: !1
  })
}