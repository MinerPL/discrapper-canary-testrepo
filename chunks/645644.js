"use strict";
n(47120), n(411104);
var i, r, s = n(259443),
  o = n(379649),
  a = n(570140),
  l = n(593472),
  u = n(147913),
  _ = n(579806),
  d = n(581567),
  c = n(594190),
  E = n(449224),
  I = n(808506),
  T = n(237997),
  h = n(626135),
  S = n(998502),
  f = n(830917),
  N = n(554174),
  A = n(938038),
  m = n(981631),
  O = n(987650);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = new s.Y("OverlayUsageStatsManager");
C.verbose = () => {};
class p {
  increment(e) {
    ++this.actions[e]
  }
  getAnalytics(e, t) {
    let n = this.actions[O.bv.Viewed],
      i = this.actions[O.bv.Clicked];
    return 0 === n && 0 === i ? null : {
      event_uuid: t,
      notification_type: e,
      viewed_count: n,
      clicked_count: i
    }
  }
  constructor() {
    R(this, "actions", {
      [O.bv.Viewed]: 0,
      [O.bv.Clicked]: 0
    })
  }
}
class g {
  static makeEmptyGroupAnalytics() {
    return {
      [O.Vk.Nudge]: 0,
      [O.Vk.TextChat]: 0,
      [O.Vk.VoiceCall]: 0,
      [O.Vk.Activity]: 0,
      [O.Vk.Clips]: 0,
      [O.Vk.Other]: 0
    }
  }
  increment(e, t) {
    let n = this.groupCounters[t];
    if (null == n) {
      C.error("NotificationCounter: Unknown notification action: ".concat(t));
      return
    }
    let i = (0, O.YK)(e);
    if (!(i in n)) {
      C.error("NotificationCounter: Unknown notification action: ".concat(e));
      return
    }++n[i], ++this.actionCounters[t];
    let r = this.counters[e];
    if (null == r) {
      C.error("NotificationCounter: Unknown notification type: ".concat(e));
      return
    }
    r.increment(t)
  }
  getAnalytics() {
    let e = this.groupCounters[O.bv.Viewed],
      t = this.groupCounters[O.bv.Clicked];
    return {
      notices_viewed: this.actionCounters[O.bv.Viewed],
      notices_clicked: this.actionCounters[O.bv.Clicked],
      notice_nudge_viewed: e[O.Vk.Nudge],
      notice_text_chat_viewed: e[O.Vk.TextChat],
      notice_voice_call_viewed: e[O.Vk.VoiceCall],
      notice_activity_viewed: e[O.Vk.Activity],
      notice_clips_viewed: e[O.Vk.Clips],
      notice_other_viewed: e[O.Vk.Other],
      notice_nudge_clicked: t[O.Vk.Nudge],
      notice_text_chat_clicked: t[O.Vk.TextChat],
      notice_voice_call_clicked: t[O.Vk.VoiceCall],
      notice_activity_clicked: t[O.Vk.Activity],
      notice_clips_clicked: t[O.Vk.Clips],
      notice_other_clicked: t[O.Vk.Other]
    }
  }
  getCounterAnalytics(e) {
    return Object.entries(this.counters).map(t => {
      let [n, i] = t;
      return i.getAnalytics(n, e)
    }).filter(e => null != e)
  }
  constructor() {
    R(this, "actionCounters", {
      [O.bv.Viewed]: 0,
      [O.bv.Clicked]: 0
    }), R(this, "groupCounters", {
      [O.bv.Viewed]: g.makeEmptyGroupAnalytics(),
      [O.bv.Clicked]: g.makeEmptyGroupAnalytics()
    }), R(this, "counters", {
      [O.n0.NewsNudge]: new p,
      [O.n0.WelcomeNudge]: new p,
      [O.n0.TextChat]: new p,
      [O.n0.ActivityUserJoin]: new p,
      [O.n0.ActivityInvite]: new p,
      [O.n0.IncomingCall]: new p,
      [O.n0.GoLiveNudge]: new p,
      [O.n0.GoLiveNonVoiceNudge]: new p,
      [O.n0.OverlayCrashed]: new p,
      [O.n0.StartBroadcastNotification]: new p,
      [O.n0.ClipsReminderNotification]: new p,
      [O.n0.ClipsNotification]: new p,
      [O.n0.KeybindIndicatorsNotification]: new p
    })
  }
}(r = i || (i = {}))[r.Voice = 0] = "Voice", r[r.Text = 1] = "Text";
class L {
  static makeEmptyAnalytics() {
    return {
      initialized: !1,
      pinnedToggledCount: 0,
      visibleDuration: new o.G9,
      pinned: !1
    }
  }
  getByType(e) {
    return this.types[e]
  }
  getByWidget(e) {
    switch (e) {
      case m.Odu.VOICE:
        return this.getByType(0);
      case m.Odu.TEXT:
        return this.getByType(1);
      default:
        return null
    }
  }
  getAnalytics() {
    let e = this.types[0],
      t = this.types[1];
    return {
      widget_voice_pin_toggle_count: e.pinnedToggledCount,
      widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
      widget_voice_pinned: e.pinned,
      widget_text_pin_toggle_count: t.pinnedToggledCount,
      widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
      widget_text_pinned: t.pinned
    }
  }
  constructor() {
    R(this, "types", {
      0: L.makeEmptyAnalytics(),
      1: L.makeEmptyAnalytics()
    })
  }
}
class v {
  update() {
    let e = this.game,
      t = S.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
    if (t !== this.lastscreenType) {
      if (!(t in this.counters)) {
        C.error("ScreenTypeAnalytics: Unknown screen type: ".concat(t), t);
        return
      }
      this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = t
    }
  }
  getAnalytics() {
    var e, t;
    let n = e => this.counters[e].elapsed().asMilliseconds(),
      i = {
        [l.Jx.UNKNOWN]: n(l.Jx.UNKNOWN),
        [l.Jx.WINDOWED]: n(l.Jx.WINDOWED),
        [l.Jx.MAXIMIZED]: n(l.Jx.MAXIMIZED),
        [l.Jx.BORDERLESS_FULLSCREEN]: n(l.Jx.BORDERLESS_FULLSCREEN),
        [l.Jx.FULLSCREEN]: n(l.Jx.FULLSCREEN),
        [l.Jx.MINIMIZED]: n(l.Jx.MINIMIZED)
      },
      r = Object.entries(i).sort((e, t) => {
        let [n, i] = e, [r, s] = t;
        return s - i
      })[0],
      s = parseInt(r[0], 10),
      o = isNaN(s) ? l.Jx.UNKNOWN : s;
    isNaN(s) && C.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(r), i);
    let a = A.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
    A.c.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, o);
    let u = {
      screentype_unknown_duration: i[l.Jx.UNKNOWN],
      screentype_windowed_duration: i[l.Jx.WINDOWED],
      screentype_maximized_duration: i[l.Jx.MAXIMIZED],
      screentype_borderless_fullscreen_duration: i[l.Jx.BORDERLESS_FULLSCREEN],
      screentype_fullscreen_duration: i[l.Jx.FULLSCREEN],
      screentype_minimized_duration: i[l.Jx.MINIMIZED]
    };
    return {
      ...u,
      screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
      screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
      screentype_initial: l.Jx[this.game.fullscreenType],
      screentype_most_used: l.Jx[o],
      screentype_most_used_previous: null == a ? null : l.Jx[a],
      game_display_mode_is_adjustment_supported: S.ZP.GameDisplayModeIsGameSupported(this.game.name)
    }
  }
  destroy() {
    clearInterval(this.updateScreenInterval)
  }
  constructor(e) {
    R(this, "game", void 0), R(this, "counters", void 0), R(this, "lastscreenType", void 0), R(this, "updateScreenInterval", void 0), this.game = e, this.counters = {
      [l.Jx.UNKNOWN]: new o.G9,
      [l.Jx.WINDOWED]: new o.G9,
      [l.Jx.MAXIMIZED]: new o.G9,
      [l.Jx.BORDERLESS_FULLSCREEN]: new o.G9,
      [l.Jx.FULLSCREEN]: new o.G9,
      [l.Jx.MINIMIZED]: new o.G9
    }, this.lastscreenType = void 0, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
  }
}
class D {
  static get debug() {
    return {
      gamesByPid: D.gamesByPid,
      gamesByName: D.gamesByName
    }
  }
  set successfullyShown(e) {
    this._successfullyShown = e
  }
  static getGameName(e) {
    var t, n;
    return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null
  }
  static ignoreGame(e) {
    var t;
    return null !== (t = e.isLauncher) && void 0 !== t && t
  }
  static create(e) {
    let t = D.getGameName(e);
    if (D.ignoreGame(e) || null == t) return null;
    let n = new D({
      ...e
    });
    return n.gameConcurrentGameCount = Object.values(D.gamesByPid).length, D.gamesByPid[e.pid] = n, D.gamesByName[t] = n, n
  }
  static getByName(e) {
    return null == e ? null : D.gamesByName[e]
  }
  static getByPid(e) {
    return D.gamesByPid[e]
  }
  static async destroy(e) {
    let t = D.getGameName(e);
    if (D.ignoreGame(e) || null == t) return;
    let n = D.gamesByPid[e.pid];
    if (null != n) {
      n.screenAnalytics.destroy();
      let t = await n.getAnalytics();
      for (let e of (h.default.track(m.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) h.default.track(m.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
      C.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete D.gamesByPid[e.pid]
    }
    delete D.gamesByName[t]
  }
  async getAnalytics() {
    var e, t, n, i, r, s, o;
    let a = {
        setting_is_enabled: I.Z.enabled,
        setting_method: null == this.overlayStatus ? null : O.gl[this.overlayStatus.overlayMethod],
        setting_display_user: T.Z.getDisplayUserMode(),
        setting_display_name: T.Z.getDisplayNameMode(),
        setting_avatar_size: T.Z.getAvatarSizeMode(),
        setting_notification_position: T.Z.getNotificationPositionMode(),
        setting_chat_notification: T.Z.getTextChatNotificationMode()
      },
      l = (0, c.jk)(this.game),
      u = (0, d.G8)(this.game);
    return {
      usage: {
        event_uuid: this.uuid,
        overlay_usage_stats_version: 3,
        ...this.notificationAnalytics.getAnalytics(),
        ...this.widgetAnalytics.getAnalytics(),
        ...this.screenAnalytics.getAnalytics(),
        ...a,
        overlay_status_game_enabled: l.enabled,
        overlay_status_game_source: l.source,
        game_name: null !== (n = u.gameName) && void 0 !== n ? n : null,
        game_id: null !== (i = u.gameId) && void 0 !== i ? i : null,
        game_exe: null !== (r = u.exe) && void 0 !== r ? r : null,
        game_elevated: this.game.elevated,
        game_is_launcher: null !== (s = this.game.isLauncher) && void 0 !== s && s,
        game_duration: this.gameTimer.elapsed().asMilliseconds(),
        game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
        game_focused_change_count: this.gameFocusChangedCount,
        game_concurrent_game_count: this.gameConcurrentGameCount,
        ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
        ui_unlocked_count: this.uiUnlockedCount,
        ui_locked_count: this.uiLockedCount,
        soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
        soundboard_shown_count: this.soundboardShownCount,
        soundboard_keep_open_count: this.soundboardKeepOpenCount,
        hardware_display_count: null !== (o = await (null === _.Z || void 0 === _.Z ? void 0 : null === (t = _.Z.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== o ? o : null,
        message_ack_count: this.overlayMessageAckCount,
        message_created_count: this.overlayMessageCreateCount,
        desktop_message_ack_count: this.desktopMessageAckCount,
        desktop_message_created_count: this.desktopMessageCreateCount,
        desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
        desktop_focused_change_count: this.desktopFocusChangedCount,
        rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
        mute_toggled_count: this.muteToggledCount,
        overlay_successfully_shown: this._successfullyShown
      },
      notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
    }
  }
  setLocked(e) {
    e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
  }
  static gameSetAllUnfocused() {
    for (let e of Object.values(D.gamesByPid)) e.gameFocusedTimer.stop()
  }
  static incrementConcurrentGameCount() {
    for (let e of Object.values(D.gamesByPid)) ++e.gameConcurrentGameCount
  }
  gameSetFocused(e) {
    this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
  }
  setSoundboardShown(e, t) {
    this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
  }
  static handleMuteToggled() {
    for (let e of Object.values(D.gamesByPid)) ++e.muteToggledCount
  }
  static desktopSetFocused(e) {
    if (e !== D.desktopMainWindowHasFocus) {
      for (let t of Object.values(D.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
      D.desktopMainWindowHasFocus = e
    }
  }
  static desktopMessageEvent(e) {
    for (let t of Object.values(D.gamesByPid)) switch (e) {
      case "ack":
        ++t.desktopMessageAckCount;
        break;
      case "created":
        ++t.desktopMessageCreateCount
    }
  }
  static toggleRtcConnection(e) {
    for (let t of Object.values(D.gamesByPid)) t.rtcConnectionTimer.toggle(e)
  }
  constructor(e) {
    R(this, "game", void 0), R(this, "uuid", void 0), R(this, "overlayStatus", void 0), R(this, "notificationAnalytics", void 0), R(this, "widgetAnalytics", void 0), R(this, "screenAnalytics", void 0), R(this, "uiUnlockedCount", void 0), R(this, "uiLockedCount", void 0), R(this, "gameFocusChangedCount", void 0), R(this, "gameConcurrentGameCount", void 0), R(this, "overlayMessageAckCount", void 0), R(this, "overlayMessageCreateCount", void 0), R(this, "gameTimer", void 0), R(this, "gameFocusedTimer", void 0), R(this, "unlockedTimer", void 0), R(this, "rtcConnectionTimer", void 0), R(this, "desktopFocusedTimer", void 0), R(this, "desktopFocusChangedCount", void 0), R(this, "desktopMessageAckCount", void 0), R(this, "desktopMessageCreateCount", void 0), R(this, "soundboardShownTimer", void 0), R(this, "soundboardShownCount", void 0), R(this, "soundboardKeepOpenCount", void 0), R(this, "muteToggledCount", void 0), R(this, "_successfullyShown", void 0), this.game = e, this.uuid = crypto.randomUUID(), this.notificationAnalytics = new g, this.widgetAnalytics = new L, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = o.G9.startNew(), this.gameFocusedTimer = new o.G9, this.unlockedTimer = new o.G9, this.rtcConnectionTimer = new o.G9, this.desktopFocusedTimer = new o.G9, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new o.G9, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = !1, this.screenAnalytics = new v(e), this.overlayStatus = c.ZP.getGameOverlayStatus(e), D.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), H.hasConnection() && this.rtcConnectionTimer.start()
  }
}

function M(e) {
  for (let t of (C.verbose("handleRunningGamesChange", e), e.added)) {
    D.incrementConcurrentGameCount();
    let e = D.create(t);
    C.verbose("handleRunningGamesChange added", t, e)
  }
  for (let t of e.removed) D.destroy(t), C.verbose("handleRunningGamesChange removed", t)
}

function P(e) {
  let t = D.getByPid(e.pid);
  if (C.verbose("OVERLAY_SET_UI_LOCKED", t), null == t) {
    C.error("OVERLAY_SET_UI_LOCKED: Unable to find game", e, D.debug);
    return
  }
  t.setLocked(e.locked)
}

function y(e) {
  var t;
  C.verbose("OVERLAY_NOTIFICATION_EVENT", e);
  let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
  if (null == n) {
    C.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, D.debug);
    return
  }
  n.notificationAnalytics.increment(e.notificationType, e.action)
}

function U(e) {
  var t;
  C.verbose("OVERLAY_WIDGET_CHANGED", e);
  let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
  if (null == n) {
    C.error("OVERLAY_WIDGET_CHANGED: Game not found", e, D.debug);
    return
  }
  let i = n.widgetAnalytics.getByWidget(e.widgetType);
  if (null != i) !i.initialized && (i.initialized = !0, i.pinned = e.pinned), i.pinned !== e.pinned && ++i.pinnedToggledCount, i.pinned = e.pinned, i.visibleDuration.toggle(e.visible)
}

function b(e) {
  if (C.verbose("OVERLAY_FOCUSED", e), D.gameSetAllUnfocused(), null == e.pid) return;
  let t = D.getByPid(e.pid);
  if (null == t) {
    C.error("OVERLAY_FOCUSED: Game not found", e, D.debug);
    return
  }
  t.gameSetFocused(!0)
}

function G(e) {
  var t;
  C.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e);
  let n = D.getByPid(e.pid);
  if (null == n) {
    C.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, D.debug);
    return
  }
  n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t)
}

function w(e) {
  var t;
  C.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e);
  let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
  if (null == n) {
    C.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, D.debug);
    return
  }
  switch (e.eventType) {
    case "ack":
      ++n.overlayMessageAckCount;
      break;
    case "create":
      ++n.overlayMessageCreateCount
  }
}

function k(e) {
  C.verbose("MESSAGE_ACKED", e), D.desktopMessageEvent("ack")
}

function B(e) {
  e.message.state === m.yb.SENDING && D.desktopMessageEvent("created")
}

function x(e) {
  null != (0, N.Z)() && (C.verbose("AUDIO_TOGGLE_SELF_MUTE", e), D.handleMuteToggled())
}

function V(e) {
  C.verbose("WINDOW_FOCUS", e);
  let t = (0, f.UU)();
  if (e.windowId !== t) {
    C.verbose("WINDOW_FOCUS: Not main window", {
      action: e,
      mainWindowId: t
    });
    return
  }
  D.desktopSetFocused(e.focused)
}

function Z(e) {
  let t = D.getByPid(e.pid);
  if (null == t) {
    C.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, D.debug);
    return
  }
  t.successfullyShown = !0
}
R(D, "gamesByPid", {}), R(D, "gamesByName", {}), R(D, "desktopMainWindowHasFocus", document.hasFocus());
class H {
  static hasConnection() {
    return H.connections.size > 0
  }
  static handleRTCConnectionState(e) {
    var t;
    let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
    switch (e.state) {
      case m.hes.RTC_CONNECTED:
        H.connections.add(n);
        break;
      case m.hes.DISCONNECTED:
        H.connections.delete(n)
    }
    let i = H.hasConnection();
    H.previousHasConnection !== i && (D.toggleRtcConnection(i), H.previousHasConnection = i)
  }
}
R(H, "connections", new Set), R(H, "previousHasConnection", !1);
class F {
  static handleMessageAcked(e) {
    C.verbose("MESSAGE_ACKED", e);
    let t = E.Z.getGame();
    if (null == t) {
      C.error("Game not found.");
      return
    }
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "ack",
      gameName: t.name,
      gameId: t.id
    })
  }
  static handleMessageCreate(e) {
    if (e.message.state !== m.yb.SENDING) return;
    C.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = E.Z.getGame();
    if (null == t) {
      C.error("Game not found.");
      return
    }
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "create",
      gameName: t.name,
      gameId: t.id
    })
  }
}
class Y extends u.Z {
  constructor(...e) {
    super(...e), R(this, "actions", __OVERLAY__ ? {
      MESSAGE_ACKED: F.handleMessageAcked,
      MESSAGE_CREATE: F.handleMessageCreate
    } : {
      OVERLAY_FOCUSED: b,
      OVERLAY_NOTIFICATION_EVENT: y,
      OVERLAY_SET_UI_LOCKED: P,
      OVERLAY_WIDGET_CHANGED: U,
      OVERLAY_MESSAGE_EVENT_ACTION: w,
      RUNNING_GAMES_CHANGE: M,
      SOUNDBOARD_SET_OVERLAY_ENABLED: G,
      MESSAGE_ACKED: k,
      MESSAGE_CREATE: B,
      WINDOW_FOCUS: V,
      RTC_CONNECTION_STATE: H.handleRTCConnectionState,
      AUDIO_TOGGLE_SELF_MUTE: x,
      OVERLAY_SUCCESSFULLY_SHOWN: Z
    })
  }
}
t.Z = new Y