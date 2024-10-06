n.d(t, {
    Z: function () {
        return u;
    }
});
var l = n(553813),
    s = n.n(l),
    i = n(579806),
    r = n(131951),
    a = n(358085),
    o = n(70722),
    c = n(65154),
    d = n(689938);
function u() {
    if (!r.Z.supports(c.AN.SOUNDSHARE)) return d.Z.Messages.GO_LIVE_SCREENSHARE_NO_SOUND;
    if ((0, a.isWindows)() && !s().satisfies(null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release, o.I9)) return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
    if ((0, a.isMac)() && !s().satisfies(null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release, o.Ec)) return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
    return null;
}
