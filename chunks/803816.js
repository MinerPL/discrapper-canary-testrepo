"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("260365"),
  o = n("823411"),
  u = n("968194"),
  d = n("658457"),
  c = n("286509"),
  E = n("676223"),
  f = n("407908"),
  _ = n("649486"),
  T = n("860285"),
  I = n("769791"),
  m = n("662285"),
  N = n("866253"),
  p = n("981601"),
  S = n("671071"),
  A = n("766274"),
  C = n("86878"),
  h = n("925758"),
  g = n("26989"),
  M = n("686470"),
  O = n("52028"),
  R = n("697218"),
  L = n("953998"),
  v = n("535974"),
  P = n("763237"),
  D = n("315102"),
  x = n("773336"),
  y = n("602043"),
  U = n("901582"),
  j = n("49111"),
  b = n("954016");
let G = {
  spotify: "Spotify"
};
class B extends a.PureComponent {
  getCoverImage() {
    let {
      activity: e,
      connectedApplication: t,
      application: n,
      isPreview: s,
      message: a
    } = this.props;
    if (null != n && (s || null != a && (0, E.default)(e, a, n.id))) {
      let t = (0, c.default)(e, n.id);
      if (null != t) return t
    }
    return null == n || n instanceof S.default ? null : D.default.getApplicationIconURL({
      id: n.id,
      icon: null != t ? t.coverImage : n.coverImage,
      size: b.ACTIVITY_INVITE_COVER_IMAGE_SIZE
    })
  }
  handleOpenSpotifyTrack(e) {
    (0, I.openTrack)(e)
  }
  handleOpenSpotifyArtist(e, t, n) {
    (0, I.openArtist)(e, t, n)
  }
  handleOpenSpotifyAlbum(e, t) {
    (0, I.openAlbum)(e, t)
  }
  shouldRenderCustomButton() {
    let {
      isLaunchable: e,
      application: t
    } = this.props;
    return null != t && null != t.primarySkuId && !e && x.isPlatformEmbedded
  }
  render() {
    return (0, s.jsx)(U.default, {
      section: U.default.Sections.APPLICATION_EMBED,
      children: this.renderEmbed()
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      sending: !1
    }, this.handleJoin = () => {
      let {
        activity: e,
        analyticsLocations: t,
        userId: n,
        message: s,
        channelId: a
      } = this.props;
      if (null != e && null != n && null != s && null != e.session_id && null != e.application_id) {
        var l;
        o.default.join({
          userId: n,
          sessionId: e.session_id,
          applicationId: e.application_id,
          channelId: a,
          messageId: s.id
        }), (0, f.default)({
          type: j.AnalyticsGameOpenTypes.JOIN,
          source: j.AnalyticsLocations.MESSAGE_EMBED,
          userId: n,
          applicationId: e.application_id,
          partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id,
          messageId: s.id,
          analyticsLocations: t
        })
      }
    }, this.handleInvite = async () => {
      let {
        activity: e,
        channelId: t
      } = this.props;
      if (null != e && null != t) try {
        this.setState({
          sending: !0
        }), await r.default.sendActivityInvite({
          type: j.ActivityActionTypes.JOIN,
          channelId: t,
          activity: e,
          location: j.AnalyticsLocations.MESSAGE_EMBED
        })
      } finally {
        this.setState({
          sending: !1
        })
      }
    }, this.handleSync = () => {
      let {
        activity: e,
        userId: t
      } = this.props;
      null != e && null != t && u.sync(e, t)
    }, this.handleDownloadApp = () => {
      (0, i.openModal)(e => (0, s.jsx)(_.default, {
        source: "Game Invite",
        ...e
      }))
    }, this.renderUserPopout = (e, t) => {
      let {
        channelId: n,
        guildId: a,
        message: l,
        analyticsLocations: i
      } = this.props;
      return null == n ? null : (0, s.jsx)(p.default, {
        ...t,
        userId: e.id,
        guildId: null != a ? a : void 0,
        channelId: n,
        messageId: null == l ? void 0 : l.id,
        newAnalyticsLocations: i
      })
    }, this.renderSpotifyJoinButton = e => {
      let {
        channelId: t,
        guildId: n
      } = this.props;
      return (0, s.jsx)(N.default, {
        guildId: null != n ? n : void 0,
        channelId: t,
        source: "Invite Embed",
        ...e
      })
    }, this.renderCustomButton = e => {
      let {
        application: t
      } = this.props;
      return (0, s.jsx)(d.default, {
        ...e,
        source: j.AnalyticsLocations.MESSAGE_EMBED,
        application: t
      })
    }, this.renderEmbed = () => {
      let e;
      let {
        activity: t,
        partyId: n,
        myPartyId: a,
        application: l,
        partyMembers: i,
        isPreview: r,
        isLaunching: o,
        isSender: u,
        activityActionType: d,
        className: c,
        channelId: E,
        message: f,
        hideParty: _,
        isSyncable: T,
        isLaunchable: I,
        guildId: m
      } = this.props;
      if (null != l) e = l.name;
      else if (null != n) {
        let [t] = n.split(":");
        e = G[t]
      }
      return (0, s.jsx)(P.default, {
        activity: t,
        partyId: n,
        myPartyId: a,
        applicationId: null != l ? l.id : null,
        name: e,
        partyMembers: i,
        className: c,
        coverImage: this.getCoverImage(),
        isPreview: r,
        isGameLaunchable: I,
        isLoading: o || this.state.sending,
        activityActionType: d,
        isInBrowser: !x.isPlatformEmbedded,
        isSyncable: T,
        isSender: u,
        channelId: E,
        guildId: null != m ? m : void 0,
        message: f,
        hideParty: _,
        onJoin: this.handleJoin,
        onInvite: this.handleInvite,
        onSync: this.handleSync,
        onDownloadApp: this.handleDownloadApp,
        onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
        onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
        onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
        renderUserPopout: this.renderUserPopout,
        renderSpotifyJoinButton: this.renderSpotifyJoinButton,
        renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
      })
    }
  }
}
B.defaultProps = {
  isPreview: !1
};
var k = l.default.connectStores([m.default, h.default, O.default, M.default, T.default, v.default, C.default, L.default, R.default, g.default], e => {
  let {
    activity: t,
    analyticsLocations: n,
    application: s,
    partyId: a,
    userId: l,
    guildId: i
  } = e, {
    id: r
  } = null != s ? s : {}, o = null != t && null != t.party && t.party.id === a ? h.default.getParty(t.party.id) : null, u = null != r ? O.default.getApplicationActivity(r) : O.default.findActivity(e => e.type === j.ActivityTypes.LISTENING), d = !1;
  null != r && (d = L.default.getState(r, j.ActivityActionTypes.JOIN) === j.ActivityActionStates.LOADING);
  let c = Array.from(null != o ? o : []).map(e => {
      let t = null != i ? g.default.getMember(i, e) : null,
        n = null != t ? t.nick : null,
        s = R.default.getUser(e),
        a = null == s;
      return null == s && (s = new A.default({
        discriminator: "0005"
      })), {
        user: s,
        unknownUser: a,
        nick: n
      }
    }),
    E = null != t && m.default.canPlay(t),
    f = m.default.getSyncingWith(),
    _ = null != f && null != l && f.userId === l;
  return {
    analyticsLocations: n,
    partyMembers: c,
    connectedApplication: null != r ? C.default.getApplication(r) : null,
    myPartyId: null != u && null != u.party ? u.party.id : null,
    isLaunching: d,
    isSyncable: E && !_,
    isLaunchable: null != r && (0, y.isLaunchable)({
      LibraryApplicationStore: M.default,
      LaunchableGameStore: T.default,
      DispatchApplicationStore: v.default,
      ConnectedAppsStore: C.default,
      applicationId: r
    })
  }
})(B)