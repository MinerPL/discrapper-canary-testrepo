"use strict";
n.r(t), n("47120");
var s, a = n("735250"),
  l = n("470079"),
  i = n("442837"),
  r = n("481060"),
  o = n("278323"),
  u = n("224706"),
  d = n("763472"),
  c = n("498179"),
  f = n("276852"),
  E = n("994339"),
  _ = n("275920"),
  T = n("431583"),
  m = n("592745"),
  I = n("952164"),
  p = n("768419"),
  h = n("456432"),
  N = n("103575"),
  S = n("789407"),
  C = n("598077"),
  A = n("757266"),
  g = n("831506"),
  M = n("271383"),
  R = n("283595"),
  O = n("293273"),
  v = n("594174"),
  L = n("181106"),
  x = n("417363"),
  D = n("243769"),
  P = n("768581"),
  y = n("358085"),
  U = n("804739"),
  b = n("410575"),
  j = n("981631"),
  G = n("701488");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let F = {
  spotify: "Spotify"
};
class k extends(s = l.PureComponent) {
  getCoverImage() {
    let {
      activity: e,
      connectedApplication: t,
      application: n,
      isPreview: s,
      message: a
    } = this.props;
    if (null != n && (s || null != a && (0, E.default)(e, a, n.id))) {
      let t = (0, f.default)(e, n.id);
      if (null != t) return t
    }
    return null == n || n instanceof S.default ? null : P.default.getApplicationIconURL({
      id: n.id,
      icon: null != t ? t.coverImage : n.coverImage,
      size: G.ACTIVITY_INVITE_COVER_IMAGE_SIZE
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
    return null != t && null != t.primarySkuId && !e && y.isPlatformEmbedded
  }
  render() {
    return (0, a.jsx)(b.default, {
      section: b.default.Sections.APPLICATION_EMBED,
      children: this.renderEmbed()
    })
  }
  constructor(...e) {
    super(...e), B(this, "state", {
      sending: !1
    }), B(this, "handleJoin", () => {
      let {
        activity: e,
        analyticsLocations: t,
        userId: n,
        message: s,
        channelId: a
      } = this.props;
      if (null != e && null != n && null != s && null != e.session_id && null != e.application_id) {
        var l;
        u.default.join({
          userId: n,
          sessionId: e.session_id,
          applicationId: e.application_id,
          channelId: a,
          messageId: s.id
        }), (0, _.default)({
          type: j.AnalyticsGameOpenTypes.JOIN,
          source: j.AnalyticsLocations.MESSAGE_EMBED,
          userId: n,
          applicationId: e.application_id,
          partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id,
          messageId: s.id,
          analyticsLocations: t
        })
      }
    }), B(this, "handleInvite", async () => {
      let {
        activity: e,
        channelId: t
      } = this.props;
      if (null != e && null != t) try {
        this.setState({
          sending: !0
        }), await o.default.sendActivityInvite({
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
    }), B(this, "handleSync", () => {
      let {
        activity: e,
        userId: t
      } = this.props;
      null != e && null != t && d.sync(e, t)
    }), B(this, "handleDownloadApp", () => {
      (0, r.openModal)(e => (0, a.jsx)(T.default, {
        source: "Game Invite",
        ...e
      }))
    }), B(this, "renderUserPopout", (e, t) => {
      let {
        channelId: n,
        guildId: s,
        message: l,
        analyticsLocations: i
      } = this.props;
      return null == n ? null : (0, a.jsx)(N.default, {
        ...t,
        location: "ActivityInviteEmbed",
        userId: e.id,
        guildId: null != s ? s : void 0,
        channelId: n,
        messageId: null == l ? void 0 : l.id,
        newAnalyticsLocations: i
      })
    }), B(this, "renderSpotifyJoinButton", e => {
      let {
        channelId: t,
        guildId: n
      } = this.props;
      return (0, a.jsx)(h.default, {
        guildId: null != n ? n : void 0,
        channelId: t,
        source: "Invite Embed",
        ...e
      })
    }), B(this, "renderCustomButton", e => {
      let {
        application: t
      } = this.props;
      return (0, a.jsx)(c.default, {
        ...e,
        source: j.AnalyticsLocations.MESSAGE_EMBED,
        application: t
      })
    }), B(this, "renderEmbed", () => {
      let e;
      let {
        activity: t,
        partyId: n,
        myPartyId: s,
        application: l,
        partyMembers: i,
        isPreview: r,
        isLaunching: o,
        isSender: u,
        activityActionType: d,
        className: c,
        channelId: f,
        message: E,
        hideParty: _,
        isSyncable: T,
        isLaunchable: m,
        guildId: I
      } = this.props;
      if (null != l) e = l.name;
      else if (null != n) {
        let [t] = n.split(":");
        e = F[t]
      }
      return (0, a.jsx)(D.default, {
        activity: t,
        partyId: n,
        myPartyId: s,
        applicationId: null != l ? l.id : null,
        name: e,
        partyMembers: i,
        className: c,
        coverImage: this.getCoverImage(),
        isPreview: r,
        isGameLaunchable: m,
        isLoading: o || this.state.sending,
        activityActionType: d,
        isInBrowser: !y.isPlatformEmbedded,
        isSyncable: T,
        isSender: u,
        channelId: f,
        guildId: null != I ? I : void 0,
        message: E,
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
    })
  }
}
B(k, "defaultProps", {
  isPreview: !1
}), t.default = i.default.connectStores([p.default, g.default, O.default, R.default, m.default, x.default, A.default, L.default, v.default, M.default], e => {
  let {
    activity: t,
    analyticsLocations: n,
    application: s,
    partyId: a,
    userId: l,
    guildId: i
  } = e, {
    id: r
  } = null != s ? s : {}, o = null != t && null != t.party && t.party.id === a ? g.default.getParty(t.party.id) : null, u = null != r ? O.default.getApplicationActivity(r) : O.default.findActivity(e => e.type === j.ActivityTypes.LISTENING), d = !1;
  null != r && (d = L.default.getState(r, j.ActivityActionTypes.JOIN) === j.ActivityActionStates.LOADING);
  let c = Array.from(null != o ? o : []).map(e => {
      let t = null != i ? M.default.getMember(i, e) : null,
        n = null != t ? t.nick : null,
        s = v.default.getUser(e),
        a = null == s;
      return null == s && (s = new C.default({
        discriminator: "0005"
      })), {
        user: s,
        unknownUser: a,
        nick: n
      }
    }),
    f = null != t && p.default.canPlay(t),
    E = p.default.getSyncingWith(),
    _ = null != E && null != l && E.userId === l;
  return {
    analyticsLocations: n,
    partyMembers: c,
    connectedApplication: null != r ? A.default.getApplication(r) : null,
    myPartyId: null != u && null != u.party ? u.party.id : null,
    isLaunching: d,
    isSyncable: f && !_,
    isLaunchable: null != r && (0, U.isLaunchable)({
      LibraryApplicationStore: R.default,
      LaunchableGameStore: m.default,
      DispatchApplicationStore: x.default,
      ConnectedAppsStore: A.default,
      applicationId: r
    })
  }
})(k)