n.d(t, { ZP: () => f }), n(415506);
var r = n(259443),
    i = n(668757),
    o = n(626135),
    a = n(960048),
    s = n(981631);
let l = new r.Yd('libdiscore');
function c() {
    o.default.track(s.rMx.LIBDISCORE_LOADED, { success: !0 });
}
function u(e) {
    let t = '',
        n = null;
    return (e instanceof Error ? ((t = e.message), (n = e.name)) : (t = null != e ? String(e) : 'Unknown error'), t.length > 1000 && (t = t.substring(0, 997) + '...'), null != n) ? ''.concat(n, ': ').concat(t) : t;
}
function d(e) {
    l.error('Failed to execute smoke test:', e), e instanceof Error && a.Z.captureException(e);
    let t = u(e);
    o.default.track(s.rMx.LIBDISCORE_LOADED, {
        success: !1,
        error: t
    });
}
let f = async function () {
    try {
        await (0, i.eW)();
        let e = (0, i.rs)(6, 7);
        l.info('The answer for life the universe and everything is:', e), c();
    } catch (e) {
        d(e);
    }
};
