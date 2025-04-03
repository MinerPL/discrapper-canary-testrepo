n.d(t, { D: () => j }), n(411104);
var r = n(903772),
    i = n(433517),
    l = n(570140),
    a = n(188471),
    o = n(581567),
    s = n(594190),
    c = n(709706),
    u = n(19780),
    d = n(626135),
    p = n(70956),
    h = n(848479),
    f = n(960048),
    g = n(844889),
    m = n(686325),
    b = n(981631);
let _ = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
    E = 'user',
    O = null,
    N = null,
    y = !1;
async function I() {
    if (y) return;
    (y = !0), (0, g.f)(!0);
    let e = await i.K.getAfterRefresh(_).then(m.Hg);
    if (!y) return;
    let t = Date.now(),
        n = 15 * p.Z.Millis.MINUTE + e - t;
    n > p.Z.Millis.HOUR && f.Z.addBreadcrumb({ message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e) }),
        e > t && (n = 0),
        f.Z.addBreadcrumb({ message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat') }),
        v(),
        (N = setTimeout(
            () => {
                C(),
                    (O = setInterval(() => {
                        C();
                    }, 15 * p.Z.Millis.MINUTE));
            },
            Math.max(n, 0)
        ));
}
function v() {
    null != N && (clearTimeout(N), (N = null)), null != O && (clearInterval(O), (O = null));
}
async function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now(),
        n = await (0, g.G)(),
        l = Date.now();
    if (null == n) return void f.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(l - t, 'ms')));
    if (!y && !e) {
        f.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), v();
        return;
    }
    f.Z.addBreadcrumb({
        category: E,
        message: 'Tracking Heartbeat',
        data: { initialized: n.initialized }
    });
    let u = {
            client_heartbeat_initialization_timestamp: n.initialized,
            client_heartbeat_version: 17
        },
        p = h.Z.getMemoryUsageElectronRenderer();
    null != p && (u.client_heartbeat_renderer_memory = p);
    let m = h.Z.getMemoryUsageElectronRendererUsedHeapSize();
    null != m && (u.client_heartbeat_renderer_memory_used_heap = m);
    {
        let e = s.ZP.getCurrentGameForAnalytics();
        null != e && ((u.client_heartbeat_current_game_id = e.id), (u.client_heartbeat_current_game_name = e.name), (u.client_heartbeat_current_game_executable = (0, o.N6)(e.exePath)), (u.client_heartbeat_current_game_distributor = e.distributor), (u.uses_client_mods = (0, r.e)())), c.Z.isNativeModuleLoaded() && (u.voice_filters_native_module_loaded = !0);
    }
    d.default.track(b.rMx.CLIENT_HEARTBEAT, u), i.K.set(_, Date.now().toString()), (0, a.Z)();
}
let S = null,
    T = !0;
function P() {
    if (T || (null != S && S !== b.hes.DISCONNECTED && S !== b.hes.RTC_DISCONNECTED))
        try {
            I();
        } catch (e) {
            f.Z.captureException(e);
        }
    else
        y &&
            ((y = !1),
            f.Z.addBreadcrumb({
                category: E,
                message: 'Stopping Analytics Heartbeat'
            }),
            (0, g.f)(!1),
            v(),
            (0, a.Z)());
}
function j() {
    f.Z.addBreadcrumb({ message: 'Initializing SessionHeartbeatScheduler' }), u.Z.addChangeListener(Z), l.Z.subscribe('WINDOW_FOCUS', x), l.Z.subscribe('APP_STATE_UPDATE', L), l.Z.subscribe('LOGIN_SUCCESS', A), P();
}
function A() {
    C(!0);
}
function Z() {
    let e = u.Z.getState();
    S !== e && ((S = e), P());
}
function x(e) {
    let { focused: t } = e;
    (T = t), P();
}
function L(e) {
    let { state: t } = e;
    (T = t === b.$7l.ACTIVE), P();
}
