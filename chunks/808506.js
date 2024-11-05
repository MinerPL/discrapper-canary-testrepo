let r, i;
n.d(t, {
    Y: function () {
        return eu;
    }
}),
    n(47120),
    n(411104),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(642549),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(177593);
var a,
    s,
    o,
    l,
    u,
    c,
    d = n(807864),
    f = n(442837),
    _ = n(570140),
    h = n(26151),
    p = n(224706),
    m = n(765250),
    g = n(13245),
    E = n(287734),
    v = n(579806),
    I = n(887278),
    S = n(490029),
    T = n(710845),
    b = n(594190),
    y = n(454991),
    A = n(633565),
    N = n(610394),
    C = n(48481),
    R = n(314897),
    O = n(77498),
    D = n(355863),
    L = n(449224),
    x = n(626135),
    w = n(866119),
    M = n(671999),
    P = n(998502),
    k = n(145597),
    U = n(981631),
    G = n(987650);
((o = a || (a = {})).ATTACHING = 'ATTACHING'), (o.CONNECTING = 'CONNECTING'), (o.CONNECTED = 'CONNECTED'), (o.READY = 'READY'), (o.CRASHED = 'CRASHED'), (o.CONNECT_FAILED = 'CONNECT_FAILED'), (o.HOOK_FAILED = 'HOOK_FAILED');
let B = {},
    Z = new Map(),
    F = !1,
    V = new Set(),
    j = !1,
    H = !1,
    Y = !1,
    W = null,
    K = null,
    z = '',
    q = new Set(),
    Q = !1,
    X = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'VERIFY_FAILURE', 'VERIFY_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'MENTION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'MENTION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    J = new Set(),
    $ = new T.Z('OverlayBridgeStore'),
    ee = 'none',
    et = (0, d.H)({
        onContention: (e, t) => $.verbose('overlayLock contention: lastMutexCall '.concat(ee)),
        onContentionResolved: () => $.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(ee, '}');
            $.error(n),
                x.default.track(U.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                });
        },
        timeoutMs: 180000
    });
function en(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        et(() => t(...r), e);
    };
}
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = Z.get(e);
    if ((null === n || r === n) && r !== t) {
        if ((null == t ? Z.delete(e) : Z.set(e, t), null == t || 'CRASHED' === t)) {
            var i;
            W = null;
            let e = null === v.Z || void 0 === v.Z ? void 0 : null === (i = v.Z.fileManager) || void 0 === i ? void 0 : i.uploadDiscordHookCrashes;
            null != e &&
                e().then((e) => {
                    if (!!Array.isArray(e) && 0 !== e.length)
                        for (let l of ($.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                            var t, n, r, i, a, s, o;
                            if (null == l) continue;
                            let e = null != l.processName ? O.Z.getGameByExecutable(l.processName) : null;
                            x.default.track(U.rMx.OVERLAY_HOOK_CRASHED, {
                                process_name: null == l ? void 0 : l.processName,
                                game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                minidump_exception_type: null !== (r = l.exceptionString) && void 0 !== r ? r : null,
                                minidump_exception_module_name: null !== (i = l.exceptionModuleName) && void 0 !== i ? i : null,
                                minidump_relative_crash_address: null !== (a = l.relativeCrashAddress) && void 0 !== a ? a : null,
                                minidump_exception_module_version: null !== (s = l.exceptionModuleVersion) && void 0 !== s ? s : null,
                                minidump_exception_module_code_id: null !== (o = l.exceptionModuleCodeId) && void 0 !== o ? o : null
                            });
                        }
                });
        }
        q.delete(e),
            $.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                    .concat(null != t ? t : 'DISCONNECTED'),
                Z
            ),
            (F = Array.from(Z.values()).some((e) => 'READY' === e));
    }
}
async function ei(e) {
    if (P.ZP.supportsFeature(U.eRX.CREATE_HOST_ON_ATTACH)) {
        if (Z.size > 0) {
            ee = 'reconcile.getOverlayURL';
            let t = await eu();
            (ee = 'reconcile.createHostProcess'), e.createHostProcess(t, eI, eg);
        } else (ee = 'reconcile.destroyHostProcess'), e.destroyHostProcess();
    } else if (j) {
        let t = await eu();
        e.createHostProcess(t, eI, eg);
    } else e.destroyHostProcess();
}
async function ea(e) {
    !et.isMutexHeld() && $.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let t = Z.get(e);
    if (null != t) {
        $.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(t));
        return;
    }
    ee = 'attach.getOverlayModule';
    let n = await ec();
    (ee = 'attach.transitionOverlayPIDStatus'), er(e, 'ATTACHING'), (ee = 'attach.attachToProcess');
    let r = await I.YT(e);
    null == r ? ((ee = 'attach.transitionOverlayPIDStatus (CONNECTING)'), er(e, 'CONNECTING', 'ATTACHING'), (ee = 'attach.reconcileHostProcess'), await ei(n), n.connectProcess(e)) : ((ee = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), er(e, 'HOOK_FAILED', 'ATTACHING'), $.warn('Could not hook to pid='.concat(e, ', error=').concat(r)));
}
async function es(e) {
    if ((!et.isMutexHeld() && $.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !Z.has(e))) {
        $.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    ee = 'detach.getOverlayModule';
    let t = await ec();
    (ee = 'detach.transitionOverlayPIDStatus'), er(e, null), e !== k.Js && ((ee = 'detach.cancelAttachToProcess'), I.pn(e), (ee = 'detach.disconnectProcess'), t.disconnectProcess(e)), (ee = 'detach.reconcileHostProcess'), await ei(t);
}
async function eo(e) {
    var t;
    if (
        ($.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: Y,
            action: e
        }),
        !et.isMutexHeld() && $.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !Y && null != e)
    ) {
        $.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function n(t) {
        if (!(t in B)) {
            $.error('Unexpected. '.concat(t, ' is not a tracked game?'), B, e);
            return;
        }
        let n = B[t];
        delete B[t];
        try {
            await n.deconstructor();
        } catch (e) {
            $.error('Failed to deconstruct tracked game '.concat(t), e);
        }
    }
    if (null == e || !j || N.Z.isOverlayV3Enabled()) {
        for (let t of ($.verbose('updateIntendedOverlayPIDs: Removing all.', B, e), Object.keys(B))) await n(Number(t));
        return;
    }
    for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
        let t = b.ZP.getGameOverlayStatus(n);
        if (($.verbose('updateIntendedOverlayPIDs: newGame', n, t), null != t && t.enabled))
            switch ((n.pid in B && $.error('Unexpected. '.concat(n.pid, ' is being added twice?'), B, e), t.overlayMethod)) {
                case G.gl.OutOfProcess:
                    let r = await eh();
                    null == r || r.trackGame(n.pid),
                        (B[n.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                let e = await eh();
                                null == e || e.untrackGame(n.pid);
                            }
                        });
                    break;
                case G.gl.Hook:
                    !Z.has(n.pid) && (await ea(n.pid)),
                        (B[n.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                await es(n.pid);
                            }
                        });
                    break;
                case G.gl.Disabled:
                    $.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    $.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(t.overlayMethod));
            }
    }
    for (let t of e.removed) $.verbose('updateIntendedOverlayPIDs: removedGame', t), await n(t.pid);
}
let el = en('updateIntendedOverlayPIDs', (e) => eo(e));
function eu() {
    return new Promise((e) => {
        ex.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let ec = (() => {
    let e = null;
    async function t() {
        if (!G.iP) throw ($.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
        try {
            return (
                await P.ZP.ensureModule('discord_overlay2'),
                (function (e) {
                    for (let t of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[t] && ($.info('polyfilling OverlayModule.'.concat(t, '(); Overlay module is probably out of date.')), (e[t] = () => void 0));
                    return e;
                })(P.ZP.requireModule('discord_overlay2'))
            );
        } catch (e) {
            throw ($.error('failed ensuring discord_overlay2', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
async function ed(e) {
    var t, n, r, i, a, s, o;
    try {
        let t = (await eu()) + '&oop=true&pid='.concat(e);
        await (null === v.Z || void 0 === v.Z ? void 0 : null === (i = v.Z.globalOverlay) || void 0 === i ? void 0 : null === (r = i.openWindow) || void 0 === r ? void 0 : r.call(i, t));
    } catch (e) {
        $.log('globalOverlay: Failed to open overlay: '.concat(e), e), null === v.Z || void 0 === v.Z || null === (s = v.Z.window) || void 0 === s || s.close(null === v.Z || void 0 === v.Z ? void 0 : null === (a = v.Z.globalOverlay) || void 0 === a ? void 0 : a.WINDOW_KEY);
    }
    return (K = e), null !== (o = await (null === v.Z || void 0 === v.Z ? void 0 : null === (n = v.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(null === v.Z || void 0 === v.Z ? void 0 : null === (t = v.Z.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== o ? o : '';
}
function ef() {
    var e, t;
    null === v.Z || void 0 === v.Z || null === (t = v.Z.window) || void 0 === t || t.close(null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), (K = null);
}
function e_(e) {
    let t = L.Z.getGameForPID(e);
    g.Z.setAssociatedGame(null != K ? K : -1, e, t);
}
let eh = (() => {
    let e = null;
    async function t() {
        if (N.Z.isOverlayV3Enabled()) return null;
        if (!G.iP || !(0, k.VS)()) throw ($.error('Attempted to load out of process overlay on an unsupported platform.'), Error('Out of Process Overlay is not supported on this platform.'));
        try {
            var e, t, n;
            let { OutOfProcess: r } = await ec();
            return null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setClickZoneCallback(eA), r.setHostWindowCallbacks(ed, ef, e_), r.setFocusCallback(eg), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, eE), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, ev), r;
        } catch (e) {
            throw ($.error('failed loading out of process overlay', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function ep() {
    return el({
        added: b.ZP.getRunningGames(),
        removed: []
    });
}
let em = en('setOverlayEnabled', async (e, t, n) => {
    if (!G.iP || N.Z.isOverlayV3Enabled() || (j === e && H === t)) return;
    (j = e),
        (H = t),
        y.v.update({
            enabled: e,
            legacyEnabled: t,
            global: n
        }),
        ex.emitChange();
    let r = await ec(),
        { OutOfProcess: i } = r;
    (0, k.vR)(null != i), await eo(void 0), await ei(r), j && ep();
});
function eg(e) {
    if (0 === e) {
        var t, n;
        if ((null !== (n = null === (t = B[null != W ? W : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : G.gl.Disabled) === G.gl.OutOfProcess) return;
    }
    g.Z.setFocusedPID(0 === e ? null : e);
}
function eE(e) {
    W = null;
}
function ev(e) {
    g.Z.successfullyShown(e);
}
function eI(e, t, n) {
    var r;
    let i = null === (r = b.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
        a = O.Z.getGameByName(i),
        s = {
            game_name: i,
            game_id: null == a ? null : a.id,
            success: t,
            ...n
        };
    (0, m.te)(k.qU, D.Z.getDefaultLayout(k.qU), 0, {
        width: n.graphics_width,
        height: n.graphics_height
    }),
        x.default.track(U.rMx.OVERLAY_HOOK_RESULT, s),
        $.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s),
        t ? er(e, 'CONNECTED', 'CONNECTING') : er(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eS() {
    let e = R.default.getToken(),
        t = R.default.getId();
    if (null != e)
        S.lW({
            type: U.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: 'UPDATE_TOKEN',
                    token: e,
                    userId: t
                }
            ]
        });
}
async function eT(e) {
    let t = await ec();
    if (
        (null != W &&
            W !== k.Js &&
            t.sendCommand(W, {
                message: 'intercept_input',
                intercept: !e
            }),
        (0, k.VS)())
    ) {
        let t = await eh();
        null == t || t.setInteractionEnabled(!e);
    }
}
function eb(e) {
    if (e) {
        let t = b.ZP.getVisibleGame(),
            n = null == t ? null : b.ZP.getGameOverlayStatus(t);
        (null == n ? void 0 : n.overlayMethod) === G.gl.OutOfProcess ? eT(e) : setTimeout(() => eT(e), 200);
    } else eT(e);
}
let ey = null;
function eA(e, t, n) {
    g.Z.relayClickZoneClicked(e, t, n);
}
async function eN(e) {
    if (!(0, k.VS)()) return;
    let t = await eh();
    null == t ||
        t.setClickZones(
            e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }))
        );
}
function eC(e) {
    return (
        !(Q || !F || X.has(e.type)) &&
        ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
            (e = {
                ...e,
                settings: {
                    type: e.settings.type,
                    proto: (0, C.cv)(e.settings.type, e.settings.proto)
                }
            }),
        V.add(e),
        null == i && (i = setTimeout(eR, 1)),
        !1)
    );
}
function eR() {
    if ((null != i && (clearTimeout(i), (i = null)), !F)) {
        V.clear();
        return;
    }
    V.size > 0 &&
        (S.lW({
            type: U.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(V)
        }),
        V.clear());
}
function eO(e) {
    return null != e && (0, w.y)(e, z);
}
function eD(e) {
    switch ((0, e.type)) {
        case U.BmY.CONNECT:
            let t = R.default.getToken();
            if (null == t) break;
            (0, m.te)(k.qU, D.Z.getDefaultLayout(k.qU), 0),
                Promise.all([(0, A.Z)(t, e.pid), f.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    S.lW({
                        type: U.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r
                    }),
                        S.lW({
                            type: U.BmY.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n]
                        }),
                        er(i, 'READY'),
                        g.Z.overlayReady(i);
                });
            break;
        case U.BmY.DISPATCH:
            if (null != e.payloads) {
                var n;
                (n = e.payloads), (Q = !0), n.forEach((e) => _.Z.dispatch(e)), (Q = !1);
            }
            break;
        case U.BmY.LOG_MESSAGES:
            $.info('[overlay data received]', e.payload);
    }
}
class eL extends (s = f.ZP.Store) {
    initialize() {
        if (!(!G.iP || __OVERLAY__)) this.waitFor(b.ZP, R.default, N.Z), S.sr(eD, eO), R.default.addChangeListener(eS), em(y.v.enabled, y.v.legacyEnabled, y.v.global), _.Z.addInterceptor(eC);
    }
    isInputLocked(e) {
        return N.Z.isOverlayV3Enabled() ? N.Z.isInputLocked(e) : !q.has(e);
    }
    isSupported() {
        return !!N.Z.isOverlayV3Enabled() || G.iP;
    }
    get enabled() {
        return N.Z.isOverlayV3Enabled() ? N.Z.enabled : j;
    }
    get legacyEnabled() {
        return !N.Z.isOverlayV3Enabled() && H;
    }
    getFocusedPID() {
        return N.Z.isOverlayV3Enabled() ? N.Z.getFocusedPID() : W;
    }
    isReady(e) {
        return N.Z.isOverlayV3Enabled() ? N.Z.isReady(e) : 'READY' === Z.get(e);
    }
    isCrashed(e) {
        return !N.Z.isOverlayV3Enabled() && 'CRASHED' === Z.get(e);
    }
}
(c = 'OverlayBridgeStore'),
    (u = 'displayName') in (l = eL)
        ? Object.defineProperty(l, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = c);
let ex = new eL(
    _.Z,
    __OVERLAY__
        ? {
              OVERLAY_RELAY_CLICK_ZONE_CLICKED: function (e) {
                  let { normalizedMouseX: t, normalizedMouseY: n } = e;
                  setTimeout(() => {
                      let e = Math.ceil(t * window.innerWidth),
                          r = Math.ceil(n * window.innerHeight),
                          i = (0, M.B)('click', e, r);
                      (0, M.J)(i, e, r);
                  }, 50);
              },
              OVERLAY_SET_ASSOCIATED_GAME: function (e) {
                  if (!(0, k.W2)()) return;
                  (0, k.tB)(e.associatedGamePID);
                  let t = () =>
                          new Promise((e) => {
                              requestAnimationFrame(() => {
                                  let t = new MessageChannel();
                                  (t.port1.onmessage = () => {
                                      e();
                                  }),
                                      t.port2.postMessage(void 0);
                              });
                          }),
                      n = 0,
                      r = () => {
                          15 === n ? g.Z.notifyReadyToShow(e.associatedGamePID) : ((n += 1), t().then(r));
                      };
                  r();
              }
          }
        : {
              CONNECTION_OPEN: function () {
                  (Y = !0), ep();
              },
              CONNECTION_CLOSED: function () {
                  (Y = !1), (W = null), el(void 0);
              },
              EXPERIMENT_OVERRIDE_BUCKET: function () {
                  return !0;
              },
              OVERLAY_SET_ENABLED: function (e) {
                  let { enabled: t, legacyEnabled: n, global: r } = e;
                  return em(t, n, r), !1;
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  W = t;
              },
              RUNNING_GAMES_CHANGE: function (e) {
                  el(e);
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t, pid: n } = e,
                      r = Z.get(n);
                  if (!t && !('READY' === r || 'CRASHED' === r)) return;
                  if ((t ? q.delete(n) : q.add(n), J.clear(), null == ey || (clearTimeout(ey), (ey = null), !t)))
                      t
                          ? eb(t)
                          : (ey = setTimeout(() => {
                                eb(t), (ey = null);
                            }, 100));
              },
              OVERLAY_ACTIVATE_REGION: function (e) {
                  let { region: t } = e;
                  J.add(t), eb(!1);
              },
              OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                  J.clear(), eb(!0);
              },
              RPC_SERVER_READY: function (e) {
                  let { port: t } = e;
                  z = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
                  let n = new URLSearchParams();
                  n.append('build_id', 'c834947973a3dbe9ee055b5ddf292713397e5739'), n.append('rpc', String(t)), n.append('rpc_auth_token', z), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
              },
              OVERLAY_CALL_PRIVATE_CHANNEL: function (e) {
                  let { channelId: t, ring: n } = e;
                  setImmediate(() => {
                      E.default.selectPrivateChannel(t), h.Z.call(t, !1, !!n);
                  });
              },
              OVERLAY_JOIN_GAME: function (e) {
                  let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
                  setImmediate(() => {
                      p.Z.join({
                          userId: t,
                          sessionId: n,
                          applicationId: r,
                          channelId: i,
                          messageId: a
                      }),
                          null != W && g.Z.setInputLocked(!0, W);
                  });
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t } = e;
                  er(t, 'CRASHED');
              },
              RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                  if (($.verbose('handleGameToggleOverlay', e), !('pid' in e.game))) {
                      $.verbose('handleGameToggleOverlay: Game was not a RunningGame.', e);
                      return;
                  }
                  let t = [e.game];
                  el({
                      added: e.newEnabledValue ? t : [],
                      removed: e.newEnabledValue ? [] : t
                  });
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  eN(t);
              },
              OVERLAY_SET_ASSOCIATED_GAME: function (e) {
                  var t, n;
                  if ((null !== (n = null === (t = B[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : G.gl.Disabled) !== G.gl.OutOfProcess) return;
                  let r = Z.get(e.previousAssociatedGamePID);
                  null != r && (Z.delete(e.previousAssociatedGamePID), Z.set(e.associatedGamePID, r)), q.delete(e.previousAssociatedGamePID), (K = e.associatedGamePID);
              },
              OVERLAY_NOTIFY_READY_TO_SHOW: function (e) {
                  eh().then((t) => {
                      null == t || t.readyToShow(e.pid);
                  });
              }
          }
);
t.Z = ex;
