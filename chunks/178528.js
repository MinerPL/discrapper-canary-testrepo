"use strict";
n.d(t, {
  Z: function() {
    return k
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(920906),
  a = n(442837),
  o = n(481060),
  r = n(619915),
  d = n(554747),
  c = n(373274),
  u = n(315174),
  h = n(840780),
  p = n(905423),
  f = n(680089),
  E = n(58468),
  Z = n(796974),
  g = n(324067),
  m = n(984933),
  _ = n(888369),
  I = n(430824),
  S = n(496675),
  v = n(878884),
  C = n(19780),
  x = n(944486),
  N = n(9156),
  T = n(938475),
  O = n(937482),
  A = n(547881),
  y = n(669083),
  R = n(711553),
  M = n(981631),
  L = n(647086),
  D = n(689938),
  P = n(589131);

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let b = 54;
class w extends s.PureComponent {
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
    } = Z.Z.getGuildDimensions(e);
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
      } = Z.Z.getGuildDimensions(n);
      this.setAnimatedValue(null != e ? e : 0)
    }
  }
  renderSettings(e) {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(y.Z, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
    if (null != t && (null != t.banner || !!n)) null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e)
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: i,
      controller: s
    } = this.state;
    (e >= b && i || e < b && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: i,
      communityInfoVisible: n
    }), s.update({
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
      controller: s,
      renderBanner: l,
      bannerVisible: a,
      communityInfoVisible: r
    } = this.state, d = n.id === L._ ? c.j : c.E;
    return (0, i.jsxs)(R.Z, {
      header: (0, i.jsx)(u.ZP, {
        guild: n,
        controller: s,
        renderBanner: l,
        bannerVisible: a,
        className: P.guildHeader,
        headerClassName: P.guildHeaderInner,
        onMouseDown: e,
        disableBannerAnimation: !1,
        communityInfoVisible: r,
        children: (0, i.jsx)(o.Popout, {
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(A.ZP.Icon, {
            icon: O.Z,
            label: D.Z.Messages.SETTINGS,
            ...e
          })
        })
      }),
      children: [(0, i.jsx)("div", {
        className: P.channelList,
        children: (0, i.jsx)(d, {
          ...t,
          guild: n,
          disableManageChannels: !0,
          onScroll: null != n && null != n.banner ? this.handleScroll : null
        })
      }), (0, i.jsx)("section", {
        className: P.panels,
        "aria-label": D.Z.Messages.ACCOUNT_A11Y_LABEL,
        children: (0, i.jsx)(h.Z, {
          guildId: n.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "state", {
      controller: new l.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1
    }), j(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function k(e) {
  var t;
  let {
    guildId: n
  } = e, s = (0, a.e7)([I.Z], () => I.Z.getGuild(n)), l = (0, a.e7)([m.ZP], () => m.ZP.getChannels(n)), o = (0, a.e7)([g.Z], () => g.Z.getCategories(n)), {
    mutedChannels: c,
    collapseMuted: u
  } = (0, a.cj)([N.ZP], () => ({
    mutedChannels: N.ZP.getMutedChannels(n),
    collapseMuted: N.ZP.isGuildCollapsed(n)
  })), h = (0, a.e7)([T.ZP], () => T.ZP.getVoiceStates(n)), O = (0, a.e7)([E.Z], () => E.Z.getCollapsed()), {
    scrollTo: A
  } = (0, a.e7)([Z.Z], () => Z.Z.getGuildDimensions(n)), y = (0, p.Z)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), R = (0, a.e7)([x.Z], () => x.Z.getVoiceChannelId()), L = (0, a.e7)([S.Z], () => S.Z.getGuildVersion(n)), D = (0, a.e7)([f.Z], () => f.Z.version), P = (0, a.e7)([_.default], () => _.default.getGuildChangeSentinel(n)), j = (0, r.QN)(null == s ? void 0 : s.id), b = (0, d.gM)(null == s ? void 0 : s.id), k = null !== (t = null == s ? void 0 : s.hasFeature(M.oNc.COMMUNITY)) && void 0 !== t && t, V = (0, a.e7)([C.Z], () => C.Z.getChannelId()), U = (0, a.e7)([v.Z], () => v.Z.desyncedVoiceStatesCount);
  return (0, i.jsx)(w, {
    guildId: n,
    guild: s,
    channels: l,
    categories: o,
    mutedChannels: c,
    scrollToChannel: A,
    selectedChannelId: y,
    selectedVoiceChannelId: R,
    voiceStates: h,
    rtcConnectedChannelId: V,
    rtcDesyncedVoiceStatesCount: U,
    collapsedChannels: O,
    collapseMuted: u,
    guildReadStateSentinel: P,
    permissionVersion: L,
    categoryCollapseVersion: D,
    embeddedAppsByChannel: j,
    activeEventsByChannel: b,
    showNewUnreadsBar: k,
    optInEnabled: !1
  })
}