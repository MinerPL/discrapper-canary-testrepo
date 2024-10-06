n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(553813),
    a = n.n(i),
    s = n(872810),
    r = n(579806),
    l = n(594190),
    o = n(199902),
    c = n(592125),
    d = n(430824),
    u = n(131951),
    _ = n(496675),
    E = n(944486),
    h = n(449224),
    m = n(358085),
    I = n(382182),
    p = n(74299),
    g = n(299570),
    T = n(989941),
    f = n(70722);
function S() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(0, p.Z)(u.Z) || null != o.Z.getCurrentUserActiveStream()) return !1;
    let t = E.Z.getVoiceChannelId(),
        n = c.Z.getChannel(t);
    if (null == n) return !1;
    let i = n.getGuildId();
    if (!(0, I.JL)(n, d.Z, _.Z, !1)) return !1;
    if (u.Z.getUseSystemScreensharePicker()) (0, m.isMac)() && a().satisfies(null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release, f.jR) ? (0, g.T)() : (0, g.T)('window');
    else {
        let t = (0, T.Z)(l.ZP, h.Z);
        if (null == t || (t.isLauncher && !e)) return !1;
        (0, s.WH)(i, n.id, { pid: t.pid });
    }
    return !0;
}
