t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(553813),
    s = t.n(l),
    a = t(375964),
    r = t(579806),
    i = t(131951),
    o = t(358085),
    c = t(70722),
    u = t(65154),
    d = t(689938);
function m() {
    if (!i.Z.supports(u.AN.SOUNDSHARE)) return a.GO_LIVE_SCREENSHARE_NO_SOUND;
    if ((0, o.isWindows)() && !s().satisfies(null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release, c.I9)) return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
    if ((0, o.isMac)() && !s().satisfies(null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release, c.Ec)) return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
    return null;
}
