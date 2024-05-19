"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
}), n("789020"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("224706"),
  r = n("593472"),
  o = n("603113"),
  u = n("367907"),
  d = n("731429"),
  c = n("188471"),
  f = n("176881"),
  E = n("318885"),
  h = n("358221"),
  _ = n("710845"),
  C = n("581567"),
  m = n("594190"),
  S = n("38618"),
  p = n("501640"),
  g = n("924301"),
  I = n("734307"),
  T = n("355298"),
  A = n("427679"),
  N = n("695346"),
  v = n("592125"),
  R = n("77498"),
  O = n("271383"),
  L = n("430824"),
  M = n("131951"),
  y = n("375954"),
  P = n("19780"),
  x = n("944486"),
  D = n("914010"),
  b = n("885110"),
  U = n("9156"),
  j = n("594174"),
  G = n("774343"),
  k = n("974042"),
  w = n("808506"),
  B = n("626135"),
  F = n("630388"),
  H = n("823379"),
  V = n("998502"),
  Y = n("981631"),
  W = n("987650");
class K extends s.PureComponent {
  componentDidMount() {
    let {
      selectedChannelId: e,
      connected: t,
      isNSFWChannel: n,
      isTextInVoice: a
    } = this.props;
    t && null != e && ((0, u.trackWithMetadata)(Y.AnalyticEvents.CHANNEL_OPENED, {
      ...(0, u.getChannelOpenedMetadata)(e)
    }), (0, c.trackClickstream)(Y.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
      channelId: e
    }), a && (0, u.trackWithMetadata)(Y.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
      channel_is_nsfw: n
    }))
  }
  componentDidUpdate(e) {
    var t, n, a;
    let {
      voiceChannelId: s,
      voiceChannelGuildId: l,
      voiceChannelType: o,
      voiceChannelBitrate: S,
      videoEnabled: p,
      isScreenSharing: T,
      runningGame: O,
      runningGamePid: M,
      selectedChannelId: x,
      selectedGuildId: j,
      connected: G,
      homeLink: k,
      friendsTabSection: K,
      isNSFWChannel: z,
      isMemberPending: q,
      hasPreviewEnabled: Q,
      postableChannelCount: Z,
      isTextInVoice: X,
      numMessageRequests: J
    } = this.props;
    if (e.voiceChannelId !== s && null != e.voiceChannelId) {
      let t = m.default.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        a = A.default.getStageInstanceByChannel(e.voiceChannelId),
        s = g.default.getActiveEventByChannel(e.voiceChannelId);
      B.default.track(Y.AnalyticEvents.LEAVE_VOICE_CHANNEL, {
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: P.default.getRTCConnectionId(),
        game_name: n,
        duration: P.default.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: P.default.getMediaSessionId(),
        stage_instance_id: null == a ? void 0 : a.id,
        guild_scheduled_event_id: null == s ? void 0 : s.id,
        ...(0, u.getVoiceStateMetadata)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
        ...P.default.getVoiceStateStats(),
        ...h.default.getSelectedParticipantStats(e.voiceChannelId)
      })
    }
    if (e.voiceChannelId !== s && null != s) {
      let e = m.default.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = A.default.getStageInstanceByChannel(s),
        a = g.default.getActiveEventByChannel(s);
      (0, u.trackWithMetadata)(Y.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, u.getChannelOpenedMetadata)(s)
      }), (0, c.trackClickstream)(Y.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: s
      }), B.default.track(Y.AnalyticEvents.JOIN_VOICE_CHANNEL, {
        channel_id: s,
        channel_type: o,
        channel_bitrate: S,
        guild_id: l,
        game_name: t,
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        stage_instance_id: null == n ? void 0 : n.id,
        guild_scheduled_event_id: null == a ? void 0 : a.id,
        ...(0, u.getCustomStatusMetadata)(l, s),
        ...(0, u.getVoiceStateMetadata)(l, s, p)
      })
    }
    if (e.runningGame !== O && null != O && !O.isLauncher) {
      let e = R.default.getGameByName(O.name),
        t = m.default.getOverrideForGame(O),
        n = L.default.getGuildIds(),
        a = N.ActivityRestrictedGuilds.getSetting(),
        s = n.filter(e => !a.includes(e)).slice(0, 200),
        l = null;
      l = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
      let o = (0, m.getOverlayGameStatus)(O);
      if (setTimeout(() => {
          var t;
          let n = V.default.GetWindowFullscreenTypeByPid(O.pid, O.name, O.fullscreenType),
            {
              gameName: a,
              gameId: i,
              exe: u,
              distributor: d
            } = (0, C.getRunningGameAnalytics)(O);
          B.default.track(Y.AnalyticEvents.LAUNCH_GAME, {
            game: a,
            game_id: i,
            verified: null != e && (0, C.isVerifiedGameExecutable)(u, null == e ? void 0 : e.executables),
            elevated: O.elevated,
            is_launcher: null !== (t = null == O ? void 0 : O.isLauncher) && void 0 !== t && t,
            game_platform: Y.ActivityGamePlatforms.DESKTOP,
            detection_method: l,
            distributor: d,
            is_overlay_enabled: w.default.enabled,
            is_overlay_game_enabled: o.enabled,
            is_overlay_game_source: o.source,
            fullscreen_type: r.RunningProcessFullscreenType[n],
            overlay_method: W.OverlayMethod[o.overlayMethod],
            activity_status_enabled: N.ShowCurrentGame.getSetting(),
            activity_status_shared_guilds: s,
            current_user_status: b.default.getStatus(),
            game_detection_enabled: (0, m.isDetectionEnabled)(O),
            executable_path: u
          })
        }, 1e4), null != O.name && null != M && R.default.shouldReport(O.name)) {
        let e = O.name;
        i.default.identifyGame(M, e).then(e => i.default.reportUnverifiedGame(e)).catch(e => new _.default("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== p || e.isScreenSharing !== T) && null != s) {
      let e = "none",
        t = [T ? "screen" : null, p ? "camera" : null].filter(H.isNotNullish),
        n = null;
      T ? (e = "screen", n = (0, E.getDesktopSourceMetadata)()) : p && (e = "camera"), B.default.track(Y.AnalyticEvents.VIDEO_INPUT_TOGGLED, {
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: N.AlwaysPreviewVideo.getSetting(),
        ...n,
        ...this.getGameMetadata(),
        ...(0, u.collectVoiceAnalyticsMetadata)(s)
      })
    }
    if (G && null != j && (j !== e.selectedGuildId || !e.connected || q && !e.isMemberPending)) {
      let e = {
        ...q ? {
          is_pending: q,
          preview_enabled: Q
        } : {},
        postable_channels: Z,
        premium_progress_bar_enabled: null !== (n = null === (t = L.default.getGuild(D.default.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
        viewing_all_channels: !U.default.isOptInEnabled(j),
        num_recent_channels: I.default.recentsChannelCount(j)
      };
      (0, u.trackWithMetadata)(Y.AnalyticEvents.GUILD_VIEWED, e), (0, c.trackClickstream)(Y.AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, {
        guildId: j
      })
    } else G && null == j && k === Y.Routes.FRIENDS && (!e.connected || K !== e.friendsTabSection || k !== e.homeLink) ? (0, f.default)({
      tab_opened: K
    }) : G && null == j && k === Y.Routes.MESSAGE_REQUESTS && (!e.connected || k !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, B.default.track(Y.AnalyticEvents.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: J
    }));
    if (G && null != x && (!e.connected || x !== e.selectedChannelId || j !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = v.default.getChannel(t),
        s = L.default.getGuild(null == n ? void 0 : n.getGuildId());
      if (null != t && null != n && null != s && s.publicUpdatesChannelId === t) {
        let e = y.default.getMessages(t),
          l = e.toArray().reverse().find(e => {
            var t;
            return (0, F.hasFlag)(e.flags, Y.MessageFlags.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
          });
        B.default.track(Y.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
          last_message_id: null == l ? void 0 : l.id,
          last_message_reference_message_id: null == l ? void 0 : null === (a = l.messageReference) || void 0 === a ? void 0 : a.message_id,
          messages_loaded: e.hasFetched,
          ...(0, u.collectChannelAnalyticsMetadata)(n),
          ...(0, u.collectGuildAnalyticsMetadata)(s.id)
        })
      }
      let l = (0, d.collectThreadMetadata)(v.default.getChannel(x), !0);
      (0, u.trackWithMetadata)(Y.AnalyticEvents.CHANNEL_OPENED, {
        ...l,
        ...(0, u.getChannelOpenedMetadata)(x)
      }), (0, c.trackClickstream)(Y.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: x
      }), X && (0, u.trackWithMetadata)(Y.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: z
      })
    }
  }
  getGameMetadata() {
    return {
      game_platform: this.props.gamePlatform,
      game_name: this.props.gameName,
      game_exe_name: this.props.gameExeName,
      game_id: this.props.gameId
    }
  }
  render() {
    return null
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, a = !1, (n = "isMessageRequestsInitialized") in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}

function z() {
  let [e, t] = (0, l.useStateFromStoresArray)([x.default], () => [x.default.getVoiceChannelId(), x.default.getChannelId()], []), n = (0, l.useStateFromStores)([v.default], () => v.default.getChannel(t), [t]), s = (0, l.useStateFromStores)([h.default], () => (null == n ? void 0 : n.id) != null && h.default.getChatOpen(n.id), [n]), i = null == n ? void 0 : n.nsfw, r = (0, l.useStateFromStores)([v.default], () => v.default.getChannel(e), [e]), u = (0, l.useStateFromStores)([D.default], () => D.default.getGuildId(), []), d = (0, l.useStateFromStores)([L.default], () => L.default.getGuild(u), [u]), c = (0, l.useStateFromStores)([j.default], () => j.default.getCurrentUser(), []), f = (0, l.useStateFromStores)([O.default], () => {
    var e, t;
    return null != c && null != u && null !== (t = null === (e = O.default.getMember(u, c.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }, [c, u]), E = (0, l.useStateFromStores)([k.default], () => k.default.getState().section, []), _ = (0, l.useStateFromStores)([G.default], () => G.default.getHomeLink(), []), C = (0, l.useStateFromStores)([S.default], () => S.default.isConnected(), []), [g, I] = (0, l.useStateFromStoresArray)([M.default], () => [M.default.isVideoEnabled(), M.default.isScreenSharing()], []), A = (0, l.useStateFromStores)([b.default], () => b.default.getPrimaryActivity(), []), N = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentGameForAnalytics(), []), R = (0, p.default)(u), y = (0, l.useStateFromStores)([T.default], () => T.default.getMessageRequestsCount(), []), P = {
    selectedChannelId: t,
    isNSFWChannel: i,
    selectedGuildId: u,
    friendsTabSection: E,
    homeLink: _,
    connected: C,
    videoEnabled: g,
    isScreenSharing: I,
    voiceChannelId: null == r ? void 0 : r.id,
    voiceChannelGuildId: null == r ? void 0 : r.getGuildId(),
    voiceChannelType: null == r ? void 0 : r.type,
    voiceChannelBitrate: null == r ? void 0 : r.bitrate,
    runningGame: N,
    runningGamePid: null != N ? N.pid : null,
    gamePlatform: (0, o.default)(A),
    gameName: null != A ? A.name : null,
    gameId: null != A ? A.application_id : null,
    gameExeName: null != N ? N.exeName : null,
    hasPreviewEnabled: null == d ? void 0 : d.features.has(Y.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: f,
    postableChannelCount: R,
    isTextInVoice: s,
    numMessageRequests: y
  };
  return (0, a.jsx)(K, {
    ...P
  })
}