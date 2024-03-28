"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("789020"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("224706"),
  r = n("593472"),
  o = n("603113"),
  u = n("367907"),
  d = n("104950"),
  c = n("731429"),
  f = n("188471"),
  E = n("318885"),
  h = n("453542"),
  _ = n("358221"),
  C = n("710845"),
  m = n("581567"),
  S = n("594190"),
  I = n("38618"),
  p = n("501640"),
  T = n("924301"),
  g = n("734307"),
  A = n("355298"),
  N = n("427679"),
  v = n("695346"),
  O = n("592125"),
  R = n("77498"),
  L = n("271383"),
  P = n("430824"),
  M = n("131951"),
  y = n("375954"),
  D = n("19780"),
  b = n("944486"),
  x = n("914010"),
  U = n("885110"),
  j = n("9156"),
  G = n("594174"),
  w = n("774343"),
  k = n("974042"),
  F = n("808506"),
  B = n("626135"),
  H = n("630388"),
  V = n("823379"),
  Y = n("998502"),
  W = n("981631"),
  K = n("987650");
class z extends s.PureComponent {
  componentDidMount() {
    let {
      selectedChannelId: e,
      connected: t,
      isNSFWChannel: n,
      isTextInVoice: a
    } = this.props;
    t && null != e && ((0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
      ...(0, u.getChannelOpenedMetadata)(e)
    }), (0, f.trackClickstream)(W.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
      channelId: e
    }), a && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
      channel_is_nsfw: n
    }))
  }
  componentDidUpdate(e) {
    var t, n, a;
    let {
      voiceChannelId: s,
      voiceChannelGuildId: l,
      voiceChannelType: o,
      voiceChannelBitrate: I,
      videoEnabled: p,
      isScreenSharing: A,
      runningGame: L,
      runningGamePid: M,
      selectedChannelId: b,
      selectedGuildId: G,
      connected: w,
      homeLink: k,
      friendsTabSection: z,
      isNSFWChannel: q,
      isMemberPending: Q,
      hasPreviewEnabled: Z,
      postableChannelCount: X,
      isTextInVoice: J,
      numMessageRequests: $
    } = this.props;
    if (e.voiceChannelId !== s && null != e.voiceChannelId) {
      let t = S.default.getCurrentGameForAnalytics(),
        n = null != t ? t.name : "",
        a = N.default.getStageInstanceByChannel(e.voiceChannelId),
        s = T.default.getActiveEventByChannel(e.voiceChannelId);
      B.default.track(W.AnalyticEvents.LEAVE_VOICE_CHANNEL, {
        channel_id: e.voiceChannelId,
        channel_type: e.voiceChannelType,
        channel_bitrate: e.voiceChannelBitrate,
        guild_id: e.voiceChannelGuildId,
        rtc_connection_id: D.default.getRTCConnectionId(),
        game_name: n,
        duration: D.default.getDuration(),
        game_platform: this.props.gamePlatform,
        game_id: this.props.gameId,
        media_session_id: D.default.getMediaSessionId(),
        stage_instance_id: null == a ? void 0 : a.id,
        guild_scheduled_event_id: null == s ? void 0 : s.id,
        ...(0, u.getVoiceStateMetadata)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
        ...D.default.getVoiceStateStats(),
        ..._.default.getSelectedParticipantStats(e.voiceChannelId)
      })
    }
    if (e.voiceChannelId !== s && null != s) {
      let e = S.default.getCurrentGameForAnalytics(),
        t = null != e ? e.name : "",
        n = N.default.getStageInstanceByChannel(s),
        a = T.default.getActiveEventByChannel(s);
      (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
        ...(0, u.getChannelOpenedMetadata)(s)
      }), (0, f.trackClickstream)(W.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: s
      }), B.default.track(W.AnalyticEvents.JOIN_VOICE_CHANNEL, {
        channel_id: s,
        channel_type: o,
        channel_bitrate: I,
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
    if (e.runningGame !== L && null != L && !L.isLauncher) {
      let e = R.default.getGameByName(L.name),
        t = S.default.getOverrideForGame(L),
        n = P.default.getGuildIds(),
        a = v.ActivityRestrictedGuilds.getSetting(),
        s = n.filter(e => !a.includes(e)).slice(0, 200),
        l = null;
      l = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
      let o = (0, S.getOverlayGameStatus)(L);
      if (setTimeout(() => {
          var t;
          let n = Y.default.GetWindowFullscreenTypeByPid(L.pid, L.name, L.fullscreenType),
            {
              gameName: a,
              gameId: i,
              exe: u,
              distributor: d
            } = (0, m.getRunningGameAnalytics)(L);
          B.default.track(W.AnalyticEvents.LAUNCH_GAME, {
            game: a,
            game_id: i,
            verified: null != e && (0, m.isVerifiedGameExecutable)(u, null == e ? void 0 : e.executables),
            elevated: L.elevated,
            is_launcher: null !== (t = null == L ? void 0 : L.isLauncher) && void 0 !== t && t,
            game_platform: W.ActivityGamePlatforms.DESKTOP,
            detection_method: l,
            distributor: d,
            is_overlay_enabled: F.default.enabled,
            is_overlay_game_enabled: o.enabled,
            is_overlay_game_source: o.source,
            fullscreen_type: r.RunningProcessFullscreenType[n],
            overlay_method: K.OverlayMethod[o.overlayMethod],
            activity_status_enabled: v.ShowCurrentGame.getSetting(),
            activity_status_shared_guilds: s,
            current_user_status: U.default.getStatus(),
            game_detection_enabled: (0, S.isDetectionEnabled)(L),
            executable_path: u
          })
        }, 1e4), null != L.name && null != M && R.default.shouldReport(L.name)) {
        let e = L.name;
        i.default.identifyGame(M, e).then(e => i.default.reportUnverifiedGame(e)).catch(e => new C.default("AutoAnalytics").error("Cannot identify game", e))
      }
    }
    if ((e.videoEnabled !== p || e.isScreenSharing !== A) && null != s) {
      let e = "none",
        t = [A ? "screen" : null, p ? "camera" : null].filter(V.isNotNullish),
        n = null;
      A ? (e = "screen", n = (0, E.getDesktopSourceMetadata)()) : p && (e = "camera"), B.default.track(W.AnalyticEvents.VIDEO_INPUT_TOGGLED, {
        video_input_type: e,
        video_toggle_source: __OVERLAY__ ? "overlay" : "app",
        enabled_inputs: t,
        preview_enabled: v.AlwaysPreviewVideo.getSetting(),
        ...n,
        ...this.getGameMetadata(),
        ...(0, u.collectVoiceAnalyticsMetadata)(s)
      })
    }
    if (w && null != G && (G !== e.selectedGuildId || !e.connected || Q && !e.isMemberPending)) {
      let e = {
        ...Q ? {
          is_pending: Q,
          preview_enabled: Z
        } : {},
        postable_channels: X,
        premium_progress_bar_enabled: null !== (n = null === (t = P.default.getGuild(x.default.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
        viewing_all_channels: !j.default.isOptInEnabled(G),
        num_recent_channels: g.default.recentsChannelCount(G)
      };
      (0, u.trackWithMetadata)(W.AnalyticEvents.GUILD_VIEWED, e)
    } else w && null == G && k === W.Routes.FRIENDS && (!e.connected || z !== e.friendsTabSection || k !== e.homeLink) ? B.default.track(W.AnalyticEvents.FRIENDS_LIST_VIEWED, {
      tab_opened: z,
      ...(0, d.default)(),
      ...(0, h.getNowPlayingAnalytics)()
    }) : w && null == G && k === W.Routes.MESSAGE_REQUESTS && (!e.connected || k !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, B.default.track(W.AnalyticEvents.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: $
    }));
    if (w && null != b && (!e.connected || b !== e.selectedChannelId || G !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = O.default.getChannel(t),
        s = P.default.getGuild(null == n ? void 0 : n.getGuildId());
      if (null != t && null != n && null != s && s.publicUpdatesChannelId === t) {
        let e = y.default.getMessages(t),
          l = e.toArray().reverse().find(e => {
            var t;
            return (0, H.hasFlag)(e.flags, W.MessageFlags.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
          });
        B.default.track(W.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
          last_message_id: null == l ? void 0 : l.id,
          last_message_reference_message_id: null == l ? void 0 : null === (a = l.messageReference) || void 0 === a ? void 0 : a.message_id,
          messages_loaded: e.hasFetched,
          ...(0, u.collectChannelAnalyticsMetadata)(n),
          ...(0, u.collectGuildAnalyticsMetadata)(s.id)
        })
      }
      let l = (0, c.collectThreadMetadata)(O.default.getChannel(b), !0);
      (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
        ...l,
        ...(0, u.getChannelOpenedMetadata)(b)
      }), (0, f.trackClickstream)(W.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: b
      }), J && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
        channel_is_nsfw: q
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

function q() {
  let [e, t] = (0, l.useStateFromStoresArray)([b.default], () => [b.default.getVoiceChannelId(), b.default.getChannelId()], []), n = (0, l.useStateFromStores)([O.default], () => O.default.getChannel(t), [t]), s = (0, l.useStateFromStores)([_.default], () => (null == n ? void 0 : n.id) != null && _.default.getChatOpen(n.id), [n]), i = null == n ? void 0 : n.nsfw, r = (0, l.useStateFromStores)([O.default], () => O.default.getChannel(e), [e]), u = (0, l.useStateFromStores)([x.default], () => x.default.getGuildId(), []), d = (0, l.useStateFromStores)([P.default], () => P.default.getGuild(u), [u]), c = (0, l.useStateFromStores)([G.default], () => G.default.getCurrentUser(), []), f = (0, l.useStateFromStores)([L.default], () => {
    var e, t;
    return null != c && null != u && null !== (t = null === (e = L.default.getMember(u, c.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }, [c, u]), E = (0, l.useStateFromStores)([k.default], () => k.default.getState().section, []), h = (0, l.useStateFromStores)([w.default], () => w.default.getHomeLink(), []), C = (0, l.useStateFromStores)([I.default], () => I.default.isConnected(), []), [m, T] = (0, l.useStateFromStoresArray)([M.default], () => [M.default.isVideoEnabled(), M.default.isScreenSharing()], []), g = (0, l.useStateFromStores)([U.default], () => U.default.getPrimaryActivity(), []), N = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentGameForAnalytics(), []), v = (0, p.default)(u), R = (0, l.useStateFromStores)([A.default], () => A.default.getMessageRequestsCount(), []), y = {
    selectedChannelId: t,
    isNSFWChannel: i,
    selectedGuildId: u,
    friendsTabSection: E,
    homeLink: h,
    connected: C,
    videoEnabled: m,
    isScreenSharing: T,
    voiceChannelId: null == r ? void 0 : r.id,
    voiceChannelGuildId: null == r ? void 0 : r.getGuildId(),
    voiceChannelType: null == r ? void 0 : r.type,
    voiceChannelBitrate: null == r ? void 0 : r.bitrate,
    runningGame: N,
    runningGamePid: null != N ? N.pid : null,
    gamePlatform: (0, o.default)(g),
    gameName: null != g ? g.name : null,
    gameId: null != g ? g.application_id : null,
    gameExeName: null != N ? N.exeName : null,
    hasPreviewEnabled: null == d ? void 0 : d.features.has(W.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: f,
    postableChannelCount: v,
    isTextInVoice: s,
    numMessageRequests: R
  };
  return (0, a.jsx)(z, {
    ...y
  })
}