t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(553813), s = t.n(l), a = t(375964), i = t(579806), r = t(131951), o = t(358085), u = t(70722), c = t(65154), d = t(689938);
function m() {
    if (!r.Z.supports(c.AN.SOUNDSHARE))
        return a.GO_LIVE_SCREENSHARE_NO_SOUND;
    if ((0, o.isWindows)() && !s().satisfies(null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release, u.I9))
        return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
    if ((0, o.isMac)() && !s().satisfies(null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release, u.Ec))
        return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
    return null;
}
