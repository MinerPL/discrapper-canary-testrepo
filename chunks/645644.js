n(47120), n(411104);
var r,
    i,
    a = n(259443),
    s = n(379649),
    o = n(570140),
    l = n(593472),
    u = n(147913),
    c = n(579806),
    d = n(581567),
    _ = n(594190),
    E = n(449224),
    f = n(808506),
    h = n(237997),
    p = n(626135),
    I = n(998502),
    m = n(830917),
    T = n(554174),
    S = n(938038),
    g = n(981631),
    A = n(987650);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = new a.Y('OverlayUsageStatsManager');
O.verbose = () => {};
class R {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[A.bv.Viewed],
            r = this.actions[A.bv.Clicked];
        return 0 === n && 0 === r
            ? null
            : {
                  event_uuid: t,
                  notification_type: e,
                  viewed_count: n,
                  clicked_count: r
              };
    }
    constructor() {
        N(this, 'actions', {
            [A.bv.Viewed]: 0,
            [A.bv.Clicked]: 0
        });
    }
}
class v {
    static makeEmptyGroupAnalytics() {
        return {
            [A.Vk.Nudge]: 0,
            [A.Vk.TextChat]: 0,
            [A.Vk.VoiceCall]: 0,
            [A.Vk.Activity]: 0,
            [A.Vk.Clips]: 0,
            [A.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) {
            O.error('NotificationCounter: Unknown notification action: '.concat(t));
            return;
        }
        let r = (0, A.YK)(e);
        if (!(r in n)) {
            O.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) {
            O.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[A.bv.Viewed],
            t = this.groupCounters[A.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[A.bv.Viewed],
            notices_clicked: this.actionCounters[A.bv.Clicked],
            notice_nudge_viewed: e[A.Vk.Nudge],
            notice_text_chat_viewed: e[A.Vk.TextChat],
            notice_voice_call_viewed: e[A.Vk.VoiceCall],
            notice_activity_viewed: e[A.Vk.Activity],
            notice_clips_viewed: e[A.Vk.Clips],
            notice_other_viewed: e[A.Vk.Other],
            notice_nudge_clicked: t[A.Vk.Nudge],
            notice_text_chat_clicked: t[A.Vk.TextChat],
            notice_voice_call_clicked: t[A.Vk.VoiceCall],
            notice_activity_clicked: t[A.Vk.Activity],
            notice_clips_clicked: t[A.Vk.Clips],
            notice_other_clicked: t[A.Vk.Other]
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((t) => {
                let [n, r] = t;
                return r.getAnalytics(n, e);
            })
            .filter((e) => null != e);
    }
    constructor() {
        N(this, 'actionCounters', {
            [A.bv.Viewed]: 0,
            [A.bv.Clicked]: 0
        }),
            N(this, 'groupCounters', {
                [A.bv.Viewed]: v.makeEmptyGroupAnalytics(),
                [A.bv.Clicked]: v.makeEmptyGroupAnalytics()
            }),
            N(this, 'counters', {
                [A.n0.NewsNudge]: new R(),
                [A.n0.WelcomeNudge]: new R(),
                [A.n0.TextChat]: new R(),
                [A.n0.ActivityUserJoin]: new R(),
                [A.n0.ActivityInvite]: new R(),
                [A.n0.IncomingCall]: new R(),
                [A.n0.GoLiveNudge]: new R(),
                [A.n0.GoLiveNonVoiceNudge]: new R(),
                [A.n0.OverlayCrashed]: new R(),
                [A.n0.ClipsReminderNotification]: new R(),
                [A.n0.ClipsNotification]: new R(),
                [A.n0.KeybindIndicatorsNotification]: new R()
            });
    }
}
((i = r || (r = {}))[(i.Voice = 0)] = 'Voice'), (i[(i.Text = 1)] = 'Text');
class C {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new s.G9(),
            pinned: !1
        };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case g.Odu.VOICE:
                return this.getByType(0);
            case g.Odu.TEXT:
                return this.getByType(1);
            default:
                return null;
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
        };
    }
    constructor() {
        N(this, 'types', {
            0: C.makeEmptyAnalytics(),
            1: C.makeEmptyAnalytics()
        });
    }
}
class L {
    update() {
        let e = this.game,
            t = I.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                O.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
                return;
            }
            this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        var e, t;
        let n = (e) => this.counters[e].elapsed().asMilliseconds(),
            r = {
                [l.Jx.UNKNOWN]: n(l.Jx.UNKNOWN),
                [l.Jx.WINDOWED]: n(l.Jx.WINDOWED),
                [l.Jx.MAXIMIZED]: n(l.Jx.MAXIMIZED),
                [l.Jx.BORDERLESS_FULLSCREEN]: n(l.Jx.BORDERLESS_FULLSCREEN),
                [l.Jx.FULLSCREEN]: n(l.Jx.FULLSCREEN),
                [l.Jx.MINIMIZED]: n(l.Jx.MINIMIZED)
            },
            i = Object.entries(r).sort((e, t) => {
                let [n, r] = e,
                    [i, a] = t;
                return a - r;
            })[0],
            a = parseInt(i[0], 10),
            s = isNaN(a) ? l.Jx.UNKNOWN : a;
        isNaN(a) && O.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(i), r);
        let o = S.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        S.c.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, s);
        let u = {
            screentype_unknown_duration: r[l.Jx.UNKNOWN],
            screentype_windowed_duration: r[l.Jx.WINDOWED],
            screentype_maximized_duration: r[l.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: r[l.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: r[l.Jx.FULLSCREEN],
            screentype_minimized_duration: r[l.Jx.MINIMIZED]
        };
        return {
            ...u,
            screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
            screentype_initial: l.Jx[this.game.fullscreenType],
            screentype_most_used: l.Jx[s],
            screentype_most_used_previous: null == o ? null : l.Jx[o],
            game_display_mode_is_adjustment_supported: I.ZP.GameDisplayModeIsGameSupported(this.game.name)
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        N(this, 'game', void 0),
            N(this, 'counters', void 0),
            N(this, 'lastscreenType', void 0),
            N(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [l.Jx.UNKNOWN]: new s.G9(),
                [l.Jx.WINDOWED]: new s.G9(),
                [l.Jx.MAXIMIZED]: new s.G9(),
                [l.Jx.BORDERLESS_FULLSCREEN]: new s.G9(),
                [l.Jx.FULLSCREEN]: new s.G9(),
                [l.Jx.MINIMIZED]: new s.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
class y {
    static get debug() {
        return {
            gamesByPid: y.gamesByPid,
            gamesByName: y.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    static getGameName(e) {
        var t, n;
        return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null;
    }
    static ignoreGame(e) {
        var t;
        return null !== (t = e.isLauncher) && void 0 !== t && t;
    }
    static create(e) {
        let t = y.getGameName(e);
        if (y.ignoreGame(e) || null == t) return null;
        let n = new y({ ...e });
        return (n.gameConcurrentGameCount = Object.values(y.gamesByPid).length), (y.gamesByPid[e.pid] = n), (y.gamesByName[t] = n), n;
    }
    static getByName(e) {
        return null == e ? null : y.gamesByName[e];
    }
    static getByPid(e) {
        return y.gamesByPid[e];
    }
    static async destroy(e) {
        let t = y.getGameName(e);
        if (y.ignoreGame(e) || null == t) return;
        let n = y.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (p.default.track(g.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) p.default.track(g.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            O.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete y.gamesByPid[e.pid];
        }
        delete y.gamesByName[t];
    }
    async getAnalytics() {
        var e, t, n, r, i, a, s;
        let o = {
                setting_is_enabled: f.Z.enabled,
                setting_method: null == this.overlayStatus ? null : A.gl[this.overlayStatus.overlayMethod],
                setting_display_user: h.Z.getDisplayUserMode(),
                setting_display_name: h.Z.getDisplayNameMode(),
                setting_avatar_size: h.Z.getAvatarSizeMode(),
                setting_notification_position: h.Z.getNotificationPositionMode(),
                setting_chat_notification: h.Z.getTextChatNotificationMode()
            },
            l = (0, _.jk)(this.game),
            u = (0, d.G8)(this.game);
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: 3,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...o,
                overlay_status_game_enabled: l.enabled,
                overlay_status_game_source: l.source,
                game_name: null !== (n = u.gameName) && void 0 !== n ? n : null,
                game_id: null !== (r = u.gameId) && void 0 !== r ? r : null,
                game_exe: null !== (i = u.exe) && void 0 !== i ? i : null,
                game_elevated: this.game.elevated,
                game_is_launcher: null !== (a = this.game.isLauncher) && void 0 !== a && a,
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
                hardware_display_count: null !== (s = await (null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== s ? s : null,
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
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(y.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(y.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(y.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== y.desktopMainWindowHasFocus) {
            for (let t of Object.values(y.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            y.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(y.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(y.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        N(this, 'game', void 0), N(this, 'uuid', void 0), N(this, 'overlayStatus', void 0), N(this, 'notificationAnalytics', void 0), N(this, 'widgetAnalytics', void 0), N(this, 'screenAnalytics', void 0), N(this, 'uiUnlockedCount', void 0), N(this, 'uiLockedCount', void 0), N(this, 'gameFocusChangedCount', void 0), N(this, 'gameConcurrentGameCount', void 0), N(this, 'overlayMessageAckCount', void 0), N(this, 'overlayMessageCreateCount', void 0), N(this, 'gameTimer', void 0), N(this, 'gameFocusedTimer', void 0), N(this, 'unlockedTimer', void 0), N(this, 'rtcConnectionTimer', void 0), N(this, 'desktopFocusedTimer', void 0), N(this, 'desktopFocusChangedCount', void 0), N(this, 'desktopMessageAckCount', void 0), N(this, 'desktopMessageCreateCount', void 0), N(this, 'soundboardShownTimer', void 0), N(this, 'soundboardShownCount', void 0), N(this, 'soundboardKeepOpenCount', void 0), N(this, 'muteToggledCount', void 0), N(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.notificationAnalytics = new v()), (this.widgetAnalytics = new C()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = s.G9.startNew()), (this.gameFocusedTimer = new s.G9()), (this.unlockedTimer = new s.G9()), (this.rtcConnectionTimer = new s.G9()), (this.desktopFocusedTimer = new s.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new s.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new L(e)), (this.overlayStatus = _.ZP.getGameOverlayStatus(e)), y.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), H.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function D(e) {
    for (let t of (O.verbose('handleRunningGamesChange', e), e.added)) {
        y.incrementConcurrentGameCount();
        let e = y.create(t);
        O.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) y.destroy(t), O.verbose('handleRunningGamesChange removed', t);
}
function b(e) {
    let t = y.getByPid(e.pid);
    if ((O.verbose('OVERLAY_SET_UI_LOCKED', t), null == t)) {
        O.error('OVERLAY_SET_UI_LOCKED: Unable to find game', e, y.debug);
        return;
    }
    t.setLocked(e.locked);
}
function M(e) {
    var t;
    O.verbose('OVERLAY_NOTIFICATION_EVENT', e);
    let n = y.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        O.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, y.debug);
        return;
    }
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function P(e) {
    var t;
    O.verbose('OVERLAY_WIDGET_CHANGED', e);
    let n = y.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        O.error('OVERLAY_WIDGET_CHANGED: Game not found', e, y.debug);
        return;
    }
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    if (null != r) !r.initialized && ((r.initialized = !0), (r.pinned = e.pinned)), r.pinned !== e.pinned && ++r.pinnedToggledCount, (r.pinned = e.pinned), r.visibleDuration.toggle(e.visible);
}
function U(e) {
    if ((O.verbose('OVERLAY_FOCUSED', e), y.gameSetAllUnfocused(), null == e.pid)) return;
    let t = y.getByPid(e.pid);
    if (null == t) {
        O.error('OVERLAY_FOCUSED: Game not found', e, y.debug);
        return;
    }
    t.gameSetFocused(!0);
}
function w(e) {
    var t;
    O.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e);
    let n = y.getByPid(e.pid);
    if (null == n) {
        O.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, y.debug);
        return;
    }
    n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t);
}
function x(e) {
    var t;
    O.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e);
    let n = y.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        O.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, y.debug);
        return;
    }
    switch (e.eventType) {
        case 'ack':
            ++n.overlayMessageAckCount;
            break;
        case 'create':
            ++n.overlayMessageCreateCount;
    }
}
function G(e) {
    O.verbose('MESSAGE_ACKED', e), y.desktopMessageEvent('ack');
}
function k(e) {
    e.message.state === g.yb.SENDING && y.desktopMessageEvent('created');
}
function B(e) {
    null != (0, T.Z)() && (O.verbose('AUDIO_TOGGLE_SELF_MUTE', e), y.handleMuteToggled());
}
function F(e) {
    O.verbose('WINDOW_FOCUS', e);
    let t = (0, m.UU)();
    if (e.windowId !== t) {
        O.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
        return;
    }
    y.desktopSetFocused(e.focused);
}
function V(e) {
    let t = y.getByPid(e.pid);
    if (null == t) {
        O.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, y.debug);
        return;
    }
    t.successfullyShown = !0;
}
N(y, 'gamesByPid', {}), N(y, 'gamesByName', {}), N(y, 'desktopMainWindowHasFocus', document.hasFocus());
class H {
    static hasConnection() {
        return H.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
        switch (e.state) {
            case g.hes.RTC_CONNECTED:
                H.connections.add(n);
                break;
            case g.hes.DISCONNECTED:
                H.connections.delete(n);
        }
        let r = H.hasConnection();
        H.previousHasConnection !== r && (y.toggleRtcConnection(r), (H.previousHasConnection = r));
    }
}
N(H, 'connections', new Set()), N(H, 'previousHasConnection', !1);
class Z {
    static handleMessageAcked(e) {
        O.verbose('MESSAGE_ACKED', e);
        let t = E.Z.getGame();
        if (null == t) {
            O.error('Game not found.');
            return;
        }
        o.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: t.name,
            gameId: t.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== g.yb.SENDING) return;
        O.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = E.Z.getGame();
        if (null == t) {
            O.error('Game not found.');
            return;
        }
        o.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: t.name,
            gameId: t.id
        });
    }
}
class Y extends u.Z {
    constructor(...e) {
        super(...e),
            N(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: Z.handleMessageAcked,
                          MESSAGE_CREATE: Z.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: U,
                          OVERLAY_NOTIFICATION_EVENT: M,
                          OVERLAY_SET_UI_LOCKED: b,
                          OVERLAY_WIDGET_CHANGED: P,
                          OVERLAY_MESSAGE_EVENT_ACTION: x,
                          RUNNING_GAMES_CHANGE: D,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: w,
                          MESSAGE_ACKED: G,
                          MESSAGE_CREATE: k,
                          WINDOW_FOCUS: F,
                          RTC_CONNECTION_STATE: H.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: B,
                          OVERLAY_SUCCESSFULLY_SHOWN: V
                      }
            );
    }
}
t.Z = new Y();
