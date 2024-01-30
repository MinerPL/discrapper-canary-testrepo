"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("862337"),
  u = n("899633"),
  d = n("191225"),
  c = n("299285"),
  f = n("442939"),
  h = n("699209"),
  p = n("32346"),
  m = n("835040"),
  E = n("373469"),
  C = n("271938"),
  S = n("546463"),
  g = n("26989"),
  _ = n("42887"),
  I = n("957255"),
  T = n("824563"),
  v = n("101125"),
  x = n("235660"),
  N = n("280168"),
  A = n("800762"),
  M = n("68148"),
  R = n("158998"),
  j = n("785814"),
  L = n("201380"),
  O = n("49111"),
  y = n("39141"),
  P = n("707155");
let b = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: I
  } = e, M = s.id, P = (0, r.useStateFromStores)([C.default], () => C.default.getId() === M, [M]), [b, D, U] = (0, r.useStateFromStoresArray)([_.default], () => P ? [!_.default.isSupported() || _.default.isSelfMute() || _.default.isSelfMutedTemporarily(), _.default.isSelfDeaf(), !1] : [!_.default.isSupported() || _.default.isLocalMute(M), !1, _.default.isLocalVideoDisabled(M)], [P, M]), w = (0, r.useStateFromStores)([N.default], () => N.default.isPrioritySpeaker(M)), F = (0, u.default)({
    userId: M,
    checkSoundSharing: !0
  }), k = (0, r.useStateFromStores)([g.default], () => g.default.isGuestOrLurker(i.guild_id, M)), V = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(M)
  }), [M, i.id]), B = (0, f.default)(null != V ? [V.applicationId] : []), H = (0, j.useIsVoiceChannelGameActivityEnabled)(i.guild_id, "voice_users_eligibility_check", !1), G = (0, r.useStateFromStores)([T.default, v.default], () => P ? v.default.getActivities() : T.default.getActivities(M, i.guild_id)), W = G.find(e => null != e.application_id && e.type === O.ActivityTypes.PLAYING), Y = (0, r.useStateFromStores)([S.default], () => (null == W ? void 0 : W.application_id) != null ? S.default.getDetectableGame(W.application_id) : null), z = (0, r.useStateFromStores)([c.default], () => null != Y && (null == W ? void 0 : W.application_id) != null ? c.default.getApplication(null == W ? void 0 : W.application_id) : void 0);
  null != Y && j.default.trackExposure({
    guildId: i.guild_id,
    location: "voice_users"
  });
  let [K, Z] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.getStreamForUser(M, i.getGuildId()), E.default.getActiveStreamForUser(M, i.getGuildId())], [i, M]), X = (0, r.useStateFromStores)([x.default], () => x.default.getSessionById(o)), J = R.default.useName(s), q = (0, r.useStateFromStores)([A.default], () => A.default.getVoicePlatformForChannel(i.id, M), [i.id, M]), {
    enableHangStatus: Q
  } = h.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), $ = (0, r.useStateFromStores)([p.default], () => P ? p.default.getHangStatusActivity() : null, [P]), ee = (0, r.useStateFromStores)([T.default], () => T.default.findActivity(M, e => e.type === O.ActivityTypes.HANG_STATUS), [M]);
  return (0, a.jsx)(m.default, {
    shakeLocation: y.ShakeLocation.VOICE_USER,
    isShaking: F,
    children: (0, a.jsx)(L.default, {
      ...e,
      nick: null != I ? I : J,
      canDrag: e.canDrag && !k,
      otherClientSessionType: null == X ? void 0 : null === (t = X.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: q,
      localMute: b && !P,
      localVideoDisabled: U,
      mute: n || b,
      deaf: l || D,
      speaking: F,
      priority: w,
      embeddedApplication: B[0],
      isStreaming: null != K && K.channelId === i.id,
      isWatching: null != Z && Z.state !== O.ApplicationStreamStates.ENDED,
      isGuest: k,
      showHangStatus: Q && (C.default.getId() === s.id || null != ee),
      hangStatusActivity: P ? $ : ee,
      isSelf: C.default.getId() === s.id,
      application: H ? z : void 0
    })
  })
});
b.displayName = "ConnectedVoiceUser";
class D extends l.Component {
  renderVoiceUsers() {
    let {
      channel: e,
      allowDragging: t,
      voiceStates: n,
      collapsed: l,
      collapsedMax: s = 6,
      tabIndex: i,
      location: r,
      numAudience: o
    } = this.props, {
      previewUserId: u,
      previewIsOpen: d
    } = this.state;
    if (null == n || 0 === n.length) return null;
    let c = l && n.length > s + 1 ? n.slice(0, s) : n,
      f = c.map(n => {
        var s;
        let {
          user: o,
          nick: c,
          voiceState: f
        } = n;
        return (0, a.jsx)(b, {
          user: o,
          nick: c,
          isSelfOnOtherClient: C.default.getId() === o.id && f.sessionId !== C.default.getSessionId(),
          mute: f.isVoiceMuted(),
          deaf: f.isVoiceDeafened(),
          video: f.selfVideo,
          serverMute: f.mute,
          serverDeaf: f.deaf,
          sessionId: null !== (s = f.sessionId) && void 0 !== s ? s : "",
          channel: e,
          collapsed: l,
          canDrag: t && I.default.can(O.Permissions.MOVE_MEMBERS, e),
          showPreview: this.handleShowPreview,
          hidePreview: this.handleHidePreview,
          previewIsOpen: d,
          shouldShowPreview: u === o.id,
          tabIndex: i,
          location: r
        }, o.id)
      });
    return null != o && o > 0 ? f.push((0, a.jsx)(L.AudienceVoiceUser, {
      collapsed: l,
      numAudience: o
    })) : l && n.length > s + 1 && f.push((0, a.jsx)(L.MoreVoiceUser, {
      numUsers: n.length - s
    })), f
  }
  render() {
    let e = this.renderVoiceUsers(),
      {
        collapsed: t,
        className: n,
        children: l,
        withGuildIcon: s
      } = this.props;
    return null == e && null == l ? null : (0, a.jsxs)(M.VoiceUserList, {
      className: i(n, P.list, {
        [P.collapsed]: t,
        [P.withGuildIcon]: s
      }),
      collapsed: t,
      children: [e, l]
    })
  }
  constructor(...e) {
    super(...e), this.showPreview = new o.DelayedCall(50, () => {
      this.setState({
        previewUserId: this.previewUserIdAfterDelay
      }), this.previewUserIdAfterDelay = null
    }), this.hidePreview = new o.DelayedCall(175, () => {
      this.setState({
        previewUserId: null
      })
    }), this.previewUserIdAfterDelay = null, this.state = {
      previewUserId: null,
      previewIsOpen: !1
    }, this.handleShowPreview = e => {
      this.props.allowPreviews && (this.setState({
        previewIsOpen: !0
      }), this.hidePreview.cancel(), this.previewUserIdAfterDelay = e, this.showPreview.delay())
    }, this.handleHidePreview = e => {
      if (!this.props.allowPreviews) return;
      let {
        previewUserId: t
      } = this.state;
      this.showPreview.cancel(), t === e && (this.setState({
        previewIsOpen: !1
      }), this.hidePreview.delay())
    }
  }
}
D.defaultProps = {
  allowPreviews: !0,
  allowDragging: !0
};
var U = D