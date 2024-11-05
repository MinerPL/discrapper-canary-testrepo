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
    f = n(594190),
    _ = n(449224),
    h = n(808506),
    p = n(237997),
    m = n(626135),
    g = n(998502),
    E = n(145597),
    v = n(830917),
    I = n(554174),
    S = n(938038),
    T = n(981631),
    b = n(987650);
function y(e, t, n) {
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
let A = new a.Y('OverlayUsageStatsManager');
A.verbose = () => {};
class N {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[b.bv.Viewed],
            r = this.actions[b.bv.Clicked];
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
        y(this, 'actions', {
            [b.bv.Viewed]: 0,
            [b.bv.Clicked]: 0
        });
    }
}
class C {
    static makeEmptyGroupAnalytics() {
        return {
            [b.Vk.Nudge]: 0,
            [b.Vk.TextChat]: 0,
            [b.Vk.VoiceCall]: 0,
            [b.Vk.Activity]: 0,
            [b.Vk.Clips]: 0,
            [b.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) {
            A.error('NotificationCounter: Unknown notification action: '.concat(t));
            return;
        }
        let r = (0, b.YK)(e);
        if (!(r in n)) {
            A.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) {
            A.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[b.bv.Viewed],
            t = this.groupCounters[b.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[b.bv.Viewed],
            notices_clicked: this.actionCounters[b.bv.Clicked],
            notice_nudge_viewed: e[b.Vk.Nudge],
            notice_text_chat_viewed: e[b.Vk.TextChat],
            notice_voice_call_viewed: e[b.Vk.VoiceCall],
            notice_activity_viewed: e[b.Vk.Activity],
            notice_clips_viewed: e[b.Vk.Clips],
            notice_other_viewed: e[b.Vk.Other],
            notice_nudge_clicked: t[b.Vk.Nudge],
            notice_text_chat_clicked: t[b.Vk.TextChat],
            notice_voice_call_clicked: t[b.Vk.VoiceCall],
            notice_activity_clicked: t[b.Vk.Activity],
            notice_clips_clicked: t[b.Vk.Clips],
            notice_other_clicked: t[b.Vk.Other]
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
        y(this, 'actionCounters', {
            [b.bv.Viewed]: 0,
            [b.bv.Clicked]: 0
        }),
            y(this, 'groupCounters', {
                [b.bv.Viewed]: C.makeEmptyGroupAnalytics(),
                [b.bv.Clicked]: C.makeEmptyGroupAnalytics()
            }),
            y(this, 'counters', {
                [b.n0.NewsNudge]: new N(),
                [b.n0.WelcomeNudge]: new N(),
                [b.n0.TextChat]: new N(),
                [b.n0.ActivityUserJoin]: new N(),
                [b.n0.ActivityInvite]: new N(),
                [b.n0.IncomingCall]: new N(),
                [b.n0.GoLiveNudge]: new N(),
                [b.n0.GoLiveNonVoiceNudge]: new N(),
                [b.n0.OverlayCrashed]: new N(),
                [b.n0.ClipsReminderNotification]: new N(),
                [b.n0.ClipsNotification]: new N(),
                [b.n0.KeybindIndicatorsNotification]: new N(),
                [b.n0.SendGameInvitesNotification]: new N()
            });
    }
}
((i = r || (r = {}))[(i.Voice = 0)] = 'Voice'), (i[(i.Text = 1)] = 'Text');
class R {
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
            case T.Odu.VOICE:
                return this.getByType(0);
            case T.Odu.TEXT:
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
        y(this, 'types', {
            0: R.makeEmptyAnalytics(),
            1: R.makeEmptyAnalytics()
        });
    }
}
class O {
    update() {
        let e = this.game,
            t = g.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                A.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
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
        isNaN(a) && A.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(i), r);
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
            game_display_mode_is_adjustment_supported: g.ZP.GameDisplayModeIsGameSupported(this.game.name)
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        y(this, 'game', void 0),
            y(this, 'counters', void 0),
            y(this, 'lastscreenType', void 0),
            y(this, 'updateScreenInterval', void 0),
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
class D {
    static get debug() {
        return {
            gamesByPid: D.gamesByPid,
            gamesByName: D.gamesByName
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
        let t = D.getGameName(e);
        if (D.ignoreGame(e) || null == t) return null;
        let n = new D({ ...e });
        return (n.gameConcurrentGameCount = Object.values(D.gamesByPid).length), (D.gamesByPid[e.pid] = n), (D.gamesByName[t] = n), n;
    }
    static getByName(e) {
        return null == e ? null : D.gamesByName[e];
    }
    static getByPid(e) {
        return D.gamesByPid[e];
    }
    static async destroy(e) {
        let t = D.getGameName(e);
        if (D.ignoreGame(e) || null == t) return;
        let n = D.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (m.default.track(T.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) m.default.track(T.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            A.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete D.gamesByPid[e.pid];
        }
        delete D.gamesByName[t];
    }
    async getAnalytics() {
        var e, t, n, r, i, a, s;
        let o = {
                setting_is_enabled: h.Z.enabled,
                setting_method: null == this.overlayStatus ? null : b.gl[this.overlayStatus.overlayMethod],
                setting_display_user: p.Z.getDisplayUserMode(),
                setting_display_name: p.Z.getDisplayNameMode(),
                setting_avatar_size: p.Z.getAvatarSizeMode(),
                setting_notification_position: p.Z.getNotificationPositionMode(),
                setting_chat_notification: p.Z.getTextChatNotificationMode()
            },
            l = (0, f.jk)(this.game),
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
        for (let e of Object.values(D.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(D.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(D.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== D.desktopMainWindowHasFocus) {
            for (let t of Object.values(D.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            D.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(D.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(D.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        y(this, 'game', void 0), y(this, 'uuid', void 0), y(this, 'overlayStatus', void 0), y(this, 'notificationAnalytics', void 0), y(this, 'widgetAnalytics', void 0), y(this, 'screenAnalytics', void 0), y(this, 'uiUnlockedCount', void 0), y(this, 'uiLockedCount', void 0), y(this, 'gameFocusChangedCount', void 0), y(this, 'gameConcurrentGameCount', void 0), y(this, 'overlayMessageAckCount', void 0), y(this, 'overlayMessageCreateCount', void 0), y(this, 'gameTimer', void 0), y(this, 'gameFocusedTimer', void 0), y(this, 'unlockedTimer', void 0), y(this, 'rtcConnectionTimer', void 0), y(this, 'desktopFocusedTimer', void 0), y(this, 'desktopFocusChangedCount', void 0), y(this, 'desktopMessageAckCount', void 0), y(this, 'desktopMessageCreateCount', void 0), y(this, 'soundboardShownTimer', void 0), y(this, 'soundboardShownCount', void 0), y(this, 'soundboardKeepOpenCount', void 0), y(this, 'muteToggledCount', void 0), y(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.notificationAnalytics = new C()), (this.widgetAnalytics = new R()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = s.G9.startNew()), (this.gameFocusedTimer = new s.G9()), (this.unlockedTimer = new s.G9()), (this.rtcConnectionTimer = new s.G9()), (this.desktopFocusedTimer = new s.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new s.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new O(e)), (this.overlayStatus = f.ZP.getGameOverlayStatus(e)), D.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), j.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function L(e) {
    for (let t of (A.verbose('handleRunningGamesChange', e), e.added)) {
        D.incrementConcurrentGameCount();
        let e = D.create(t);
        A.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) D.destroy(t), A.verbose('handleRunningGamesChange removed', t);
}
function x(e) {
    if (e.pid === E.Js) return;
    let t = D.getByPid(e.pid);
    if ((A.verbose('OVERLAY_SET_INPUT_LOCKED', t), null == t)) {
        A.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, D.debug);
        return;
    }
    t.setLocked(e.locked);
}
function w(e) {
    var t;
    if ((A.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        A.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, D.debug);
        return;
    }
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function M(e) {
    var t;
    if ((A.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        A.error('OVERLAY_WIDGET_CHANGED: Game not found', e, D.debug);
        return;
    }
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    if (null != r) !r.initialized && ((r.initialized = !0), (r.pinned = e.pinned)), r.pinned !== e.pinned && ++r.pinnedToggledCount, (r.pinned = e.pinned), r.visibleDuration.toggle(e.visible);
}
function P(e) {
    if ((A.verbose('OVERLAY_FOCUSED', e), D.gameSetAllUnfocused(), null == e.pid || e.pid === E.Js)) return;
    let t = D.getByPid(e.pid);
    if (null == t) {
        A.error('OVERLAY_FOCUSED: Game not found', e, D.debug);
        return;
    }
    t.gameSetFocused(!0);
}
function k(e) {
    var t;
    if ((A.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === E.Js)) return;
    let n = D.getByPid(e.pid);
    if (null == n) {
        A.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, D.debug);
        return;
    }
    n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t);
}
function U(e) {
    var t;
    if ((A.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let n = D.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        A.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, D.debug);
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
    A.verbose('MESSAGE_ACKED', e), D.desktopMessageEvent('ack');
}
function B(e) {
    e.message.state === T.yb.SENDING && D.desktopMessageEvent('created');
}
function Z(e) {
    let t = (0, I.Z)();
    null != t && t !== E.Js && (A.verbose('AUDIO_TOGGLE_SELF_MUTE', e), D.handleMuteToggled());
}
function F(e) {
    A.verbose('WINDOW_FOCUS', e);
    let t = (0, v.UU)();
    if (e.windowId !== t) {
        A.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
        return;
    }
    D.desktopSetFocused(e.focused);
}
function V(e) {
    if (e.pid === E.Js) return;
    let t = D.getByPid(e.pid);
    if (null == t) {
        A.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, D.debug);
        return;
    }
    t.successfullyShown = !0;
}
y(D, 'gamesByPid', {}), y(D, 'gamesByName', {}), y(D, 'desktopMainWindowHasFocus', document.hasFocus());
class j {
    static hasConnection() {
        return j.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
        switch (e.state) {
            case T.hes.RTC_CONNECTED:
                j.connections.add(n);
                break;
            case T.hes.DISCONNECTED:
                j.connections.delete(n);
        }
        let r = j.hasConnection();
        j.previousHasConnection !== r && (D.toggleRtcConnection(r), (j.previousHasConnection = r));
    }
}
y(j, 'connections', new Set()), y(j, 'previousHasConnection', !1);
class H {
    static handleMessageAcked(e) {
        A.verbose('MESSAGE_ACKED', e);
        let t = _.Z.getGame();
        if (null == t) {
            A.error('Game not found.');
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
        if (e.message.state !== T.yb.SENDING) return;
        A.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = _.Z.getGame();
        if (null == t) {
            A.error('Game not found.');
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
            y(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: H.handleMessageAcked,
                          MESSAGE_CREATE: H.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: P,
                          OVERLAY_NOTIFICATION_EVENT: w,
                          OVERLAY_SET_INPUT_LOCKED: x,
                          OVERLAY_WIDGET_CHANGED: M,
                          OVERLAY_MESSAGE_EVENT_ACTION: U,
                          RUNNING_GAMES_CHANGE: L,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: k,
                          MESSAGE_ACKED: G,
                          MESSAGE_CREATE: B,
                          WINDOW_FOCUS: F,
                          RTC_CONNECTION_STATE: j.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: Z,
                          OVERLAY_SUCCESSFULLY_SHOWN: V
                      }
            );
    }
}
t.Z = new Y();
