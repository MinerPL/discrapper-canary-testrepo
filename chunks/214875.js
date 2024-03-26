"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("702976"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("823411"),
  r = n("115718"),
  o = n("575365"),
  u = n("716241"),
  d = n("382483"),
  c = n("701916"),
  f = n("918105"),
  E = n("939398"),
  h = n("815553"),
  _ = n("191145"),
  C = n("605250"),
  S = n("963990"),
  I = n("161454"),
  m = n("619443"),
  p = n("963103"),
  T = n("398604"),
  g = n("123561"),
  A = n("288518"),
  N = n("834052"),
  R = n("845579"),
  O = n("42203"),
  v = n("546463"),
  L = n("26989"),
  M = n("305961"),
  P = n("42887"),
  y = n("377253"),
  D = n("945956"),
  x = n("18494"),
  b = n("162771"),
  U = n("101125"),
  G = n("282109"),
  j = n("697218"),
  w = n("330338"),
  k = n("545429"),
  F = n("860957"),
  B = n("599110"),
  H = n("568734"),
  V = n("449008"),
  Y = n("50885"),
  W = n("49111"),
  K = n("6791");
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
      voiceChannelBitrate: m,
      videoEnabled: p,
      isScreenSharing: A,
      runningGame: L,
      runningGamePid: P,
      selectedChannelId: x,
      selectedGuildId: j,
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
      let t = I.default.getCurrentGameForAnalytics(),
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
      let e = I.default.getCurrentGameForAnalytics(),
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
        channel_bitrate: m,
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
      let e = v.default.getGameByName(L.name),
        t = I.default.getOverrideForGame(L),
        n = M.default.getGuildIds(),
        a = R.ActivityRestrictedGuilds.getSetting(),
        s = n.filter(e => !a.includes(e)).slice(0, 200),
        l = null;
      l = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
      let o = (0, I.getOverlayGameStatus)(L);
      if (setTimeout(() => {
          var t;
          let n = Y.default.GetWindowFullscreenTypeByPid(L.pid, L.name, L.fullscreenType),
            {
              gameName: a,
              gameId: i,
              exe: u,
              distributor: d
            } = (0, S.getRunningGameAnalytics)(L);
          B.default.track(W.AnalyticEvents.LAUNCH_GAME, {
            game: a,
            game_id: i,
            verified: null != e && (0, S.isVerifiedGameExecutable)(u, null == e ? void 0 : e.executables),
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
            activity_status_enabled: R.ShowCurrentGame.getSetting(),
            activity_status_shared_guilds: s,
            current_user_status: U.default.getStatus(),
            game_detection_enabled: (0, I.isDetectionEnabled)(L),
            executable_path: u
          })
        }, 1e4), null != L.name && null != P && v.default.shouldReport(L.name)) {
        let e = L.name;
        i.default.identifyGame(P, e).then(e => i.default.reportUnverifiedGame(e)).catch(e => new(0, C.default)("AutoAnalytics").error("Cannot identify game", e))
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
        preview_enabled: R.AlwaysPreviewVideo.getSetting(),
        ...n,
        ...this.getGameMetadata(),
        ...(0, u.collectVoiceAnalyticsMetadata)(s)
      })
    }
    if (w && null != j && (j !== e.selectedGuildId || !e.connected || Q && !e.isMemberPending)) {
      let e = {
        ...Q ? {
          is_pending: Q,
          preview_enabled: Z
        } : {},
        postable_channels: X,
        premium_progress_bar_enabled: null !== (n = null === (t = M.default.getGuild(b.default.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
        viewing_all_channels: !G.default.isOptInEnabled(j),
        num_recent_channels: g.default.recentsChannelCount(j)
      };
      (0, u.trackWithMetadata)(W.AnalyticEvents.GUILD_VIEWED, e)
    } else w && null == j && k === W.Routes.FRIENDS && (!e.connected || z !== e.friendsTabSection || k !== e.homeLink) ? B.default.track(W.AnalyticEvents.FRIENDS_LIST_VIEWED, {
      tab_opened: z,
      ...(0, d.default)(),
      ...(0, h.getNowPlayingAnalytics)()
    }) : w && null == j && k === W.Routes.MESSAGE_REQUESTS && (!e.connected || k !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, B.default.track(W.AnalyticEvents.MESSAGE_REQUESTS_INITIALIZED, {
      num_message_requests: $
    }));
    if (w && null != x && (!e.connected || x !== e.selectedChannelId || j !== e.selectedGuildId)) {
      let t = e.selectedChannelId,
        n = O.default.getChannel(t),
        s = M.default.getGuild(null == n ? void 0 : n.getGuildId());
      if (null != t && null != n && null != s && s.publicUpdatesChannelId === t) {
        let e = y.default.getMessages(t),
          l = e.toArray().reverse(),
          i = l.find(e => {
            var t;
            return (0, H.hasFlag)(e.flags, W.MessageFlags.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
          });
        B.default.track(W.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
          last_message_id: null == i ? void 0 : i.id,
          last_message_reference_message_id: null == i ? void 0 : null === (a = i.messageReference) || void 0 === a ? void 0 : a.message_id,
          messages_loaded: e.hasFetched,
          ...(0, u.collectChannelAnalyticsMetadata)(n),
          ...(0, u.collectGuildAnalyticsMetadata)(s.id)
        })
      }
      let l = (0, c.collectThreadMetadata)(O.default.getChannel(x), !0);
      (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
        ...l,
        ...(0, u.getChannelOpenedMetadata)(x)
      }), (0, f.trackClickstream)(W.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: x
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
    super(...e), this.isMessageRequestsInitialized = !1
  }
}

function q() {
  let [e, t] = (0, l.useStateFromStoresArray)([x.default], () => [x.default.getVoiceChannelId(), x.default.getChannelId()], []), n = (0, l.useStateFromStores)([O.default], () => O.default.getChannel(t), [t]), s = (0, l.useStateFromStores)([_.default], () => (null == n ? void 0 : n.id) != null && _.default.getChatOpen(n.id), [n]), i = null == n ? void 0 : n.nsfw, r = (0, l.useStateFromStores)([O.default], () => O.default.getChannel(e), [e]), u = (0, l.useStateFromStores)([b.default], () => b.default.getGuildId(), []), d = (0, l.useStateFromStores)([M.default], () => M.default.getGuild(u), [u]), c = (0, l.useStateFromStores)([j.default], () => j.default.getCurrentUser(), []), f = (0, l.useStateFromStores)([L.default], () => {
    var e, t;
    return null != c && null != u && null !== (t = null === (e = L.default.getMember(u, c.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
  }, [c, u]), E = (0, l.useStateFromStores)([k.default], () => k.default.getState().section, []), h = (0, l.useStateFromStores)([w.default], () => w.default.getHomeLink(), []), C = (0, l.useStateFromStores)([m.default], () => m.default.isConnected(), []), [S, T] = (0, l.useStateFromStoresArray)([P.default], () => [P.default.isVideoEnabled(), P.default.isScreenSharing()], []), g = (0, l.useStateFromStores)([U.default], () => U.default.getPrimaryActivity(), []), N = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentGameForAnalytics(), []), R = (0, p.default)(u), v = (0, l.useStateFromStores)([A.default], () => A.default.getMessageRequestsCount(), []), y = {
    selectedChannelId: t,
    isNSFWChannel: i,
    selectedGuildId: u,
    friendsTabSection: E,
    homeLink: h,
    connected: C,
    videoEnabled: S,
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
    postableChannelCount: R,
    isTextInVoice: s,
    numMessageRequests: v
  };
  return (0, a.jsx)(z, {
    ...y
  })
}