n(610138), n(216116), n(78328), n(815648), n(47120), n(177593);
var r, i, a, o, s, l, u, c = n(735250);
n(92138), n(470079);
var d = n(202226), _ = n(512722), E = n.n(_), f = n(832037), h = n(752137), p = n(464253), m = n(485359), I = n(395727), T = n(471638), g = n(585275), S = n(960048), A = n(63063), N = n(240849), v = n(998502), O = n(513566), R = n(534713), C = n(358085), y = n(703656), D = n(284737), L = n(473159), b = n(846519), M = n(579806), P = n(896361), U = n(892254);
n(296369);
var w = n(183626), x = n(44163), G = n(710845);
let k = 5 * n(70956).Z.Millis.MINUTE, B = document.getElementById('app-mount');
E()(null != B, 'Could not find app-mount'), B.className = __OVERLAY__ ? '' : w.appMount;
let F = (0, d.createRoot)(B), V = { '/oauth2/authorize': R.Z }, H = e => F.render((0, c.jsx)(U.Z, { children: (0, c.jsx)(P.Z, { children: (0, c.jsx)(e, {}) }) }));
if (null != M.Z) {
    null === (r = M.Z.setUncaughtExceptionHandler) || void 0 === r || r.call(M.Z, (e, t) => {
        setImmediate(() => {
            throw S.Z.captureCrash(e), e;
        });
    });
    let e = null === (i = (a = M.Z.remoteApp).getVersion) || void 0 === i ? void 0 : i.call(a), t = null === (o = (s = M.Z.remoteApp).getBuildNumber) || void 0 === o ? void 0 : o.call(s), n = {};
    null != M.Z.remoteApp.getModuleVersions && (n = M.Z.remoteApp.getModuleVersions()), S.Z.setExtra({
        hostVersion: e,
        moduleVersions: n
    }), S.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let c = Object.keys(n).filter(e => null != n[e]).map(e => ''.concat(e, ': ').concat(n[e])).join(', ');
    new G.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(c, ', build: ').concat(t));
    let d = null === (l = (u = M.Z.remoteApp).getReleaseChannel) || void 0 === l ? void 0 : l.call(u);
    ('canary' === d || 'development' === d) && v.ZP.pauseFrameEvictor(), v.ZP.initializeExitHook();
}
if ((0, L.O)(window), __OVERLAY__)
    H(f.Z.Overlay);
else if (null != window.require && null == window.DiscordNative)
    H(f.Z.OutdatedClient);
else {
    if (document.addEventListener('scroll', e => e.preventDefault()), C.isPlatformEmbedded) {
        window.onbeforeunload = () => v.ZP.beforeUnload(), v.ZP.on('HELP_OPEN', () => window.open(A.Z.getCommunityURL()));
        let e = new b.sW(k, () => v.ZP.purgeMemory());
        v.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), v.ZP.setFocused(!1), (0, D.T_)(window, !1);
        }), v.ZP.on('MAIN_WINDOW_FOCUS', () => {
            e.cancel(), v.ZP.setFocused(!0), (0, D.T_)(window, !0);
        }), v.ZP.on('MAIN_WINDOW_PATH', function (e, t, n) {
            var r;
            let i = null != n ? new URLSearchParams(n) : null;
            if (null === (r = V[t]) || void 0 === r ? !void 0 : !r.call(V, i))
                (0, y.uL)(t);
        }), v.ZP.on('MAIN_WINDOW_HIDDEN', () => {
            (0, D.al)(window);
        });
    }
    I.Z.initialize(), h.Z.initialize(), p.Z.init(), g.Z.init(), x.Z.init(), m.Z.initialize(), N.Z.initialize(), O.Z.initialize(), T.j(), H(f.Z.App);
}
