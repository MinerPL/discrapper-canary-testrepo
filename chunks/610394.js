n(47120), n(411104);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(13245),
    c = n(579806),
    d = n(710845),
    f = n(353926),
    _ = n(594190),
    h = n(928518),
    p = n(314897),
    m = n(998502),
    g = n(145597),
    E = n(454991),
    v = n(568963),
    I = n(388627),
    S = n(987650),
    T = n(501787);
let b = new d.Z('OverlayStore'),
    y = new Set(),
    A = new Set(),
    N = null,
    C = !1,
    R = null,
    O = null,
    D = null;
function L() {
    let { useOverlayV3: e } = v.Z.getCurrentConfig({ location: 'overlay_store_v3' });
    return e;
}
function x() {
    if (!C) {
        for (let e of y) null == N || N.untrackGame(e);
        y.clear();
        return;
    }
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => {
                var t, n;
                return null !== (n = null === (t = _.ZP.getGameOverlayStatus(e)) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
            })
            .map((e) => e.pid)
    );
    for (let t of y.difference(e)) null == N || N.untrackGame(t), y.delete(t);
    for (let t of e.difference(y)) null == N || N.trackGame(t), y.add(t);
}
function w(e) {
    null == N || N.setInteractionEnabled(!e);
}
async function M(e) {
    var t, n;
    return await (0, I.fK)(), c.Z.window.setBackgroundThrottling(!1), (O = e), (0, g.tB)(O), null !== (n = await (null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(T.$J))) && void 0 !== n ? n : '';
}
function P() {
    var e;
    null === c.Z || void 0 === c.Z || null === (e = c.Z.window) || void 0 === e || e.close(T.$J), (O = null), (0, g.tB)(null != O ? O : -1), c.Z.window.setBackgroundThrottling(!0);
}
function k(e) {
    let t = _.ZP.getGameForPID(e);
    u.Z.setAssociatedGame(null != O ? O : -1, e, t), A.delete(null != O ? O : -1), (O = e), (0, g.tB)(null != O ? O : -1);
    let n = h.Z.getWindow(T.$J),
        r = () =>
            new Promise((e) => {
                null == n ||
                    n.requestAnimationFrame(() => {
                        let t = new MessageChannel();
                        (t.port1.onmessage = () => {
                            e();
                        }),
                            t.port2.postMessage(void 0);
                    });
            }),
        i = 0,
        a = () => {
            15 === i ? null == N || N.readyToShow(e) : ((i += 1), r().then(a));
        };
    a();
}
function U(e, t, n, r) {
    let i = h.Z.getWindow(T.$J);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        s = Math.ceil(r * i.innerHeight),
        o = new MouseEvent(t, {
            screenX: a,
            screenY: s,
            clientX: a,
            clientY: s,
            bubbles: !0,
            view: i
        }),
        l = i.document.elementFromPoint(a, s);
    if (null == l) throw Error();
    l.dispatchEvent(o);
}
function G(e) {
    (R = e), u.Z.setFocusedPID(R);
}
function B(e) {
    (R = null), u.Z.setFocusedPID(null);
}
function Z(e) {
    u.Z.successfullyShown(e);
}
let F = (() => {
    let e = null;
    async function t() {
        if (!S.iP) throw (b.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(U), r.setHostWindowCallbacks(M, P, k), r.setFocusCallback(G), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, B), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, Z), (N = r), x();
        } catch (e) {
            throw (b.error('failed loading overlay module', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function V(e, t) {
    if (!!S.iP && !!L()) {
        if (
            ((C = e),
            E.v.update({
                enabled: e,
                global: t
            }),
            (0, g.vR)(!0),
            null == N)
        ) {
            F();
            return;
        }
        x();
    }
}
function j() {
    L() ? V(E.v.enabled, E.v.global) : C && ((C = !1), (0, g.vR)(!1), x());
}
class H extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, p.default, f.Z);
    }
    isInputLocked(e) {
        return !A.has(e);
    }
    isSupported() {
        return S.iP;
    }
    isOverlayV3Enabled() {
        return L();
    }
    get enabled() {
        return C;
    }
    getFocusedPID() {
        return R;
    }
    isReady(e) {
        return y.has(e);
    }
}
(s = 'OverlayStore-v3'),
    (a = 'displayName') in (i = H)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new H(l.Z, {
        CONNECTION_OPEN: j,
        EXPERIMENT_OVERRIDE_BUCKET: j,
        OVERLAY_SET_ENABLED: function (e) {
            let { enabled: t, global: n } = e;
            V(t, n);
        },
        RUNNING_GAMES_CHANGE: function (e) {
            x();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            if (!!C && 'pid' in e.game) e.newEnabledValue ? (null == N || N.trackGame(e.game.pid), y.add(e.game.pid)) : (null == N || N.untrackGame(e.game.pid), y.delete(e.game.pid));
        },
        OVERLAY_SET_CLICK_ZONES: function (e) {
            let { zones: t } = e;
            if (!!C)
                null == N ||
                    N.setCaptureZones(
                        t.map((e) => ({
                            name: e.name,
                            left: e.left,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom
                        }))
                    );
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t, pid: n } = e;
            if (!t && !y.has(n)) return;
            if ((t ? A.delete(n) : A.add(n), null == D || (clearTimeout(D), (D = null), !t)))
                t
                    ? w(t)
                    : (D = setTimeout(() => {
                          w(t), (D = null);
                      }, 100));
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
            let { region: t } = e;
            w(!1);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
            w(!0);
        }
    }));
