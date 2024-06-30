n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(726542), i = n(603113), a = n(981631), o = n(689938);
function s(e) {
    var t;
    let n = null !== (t = (0, i.Z)(e)) && void 0 !== t ? t : '';
    switch (n) {
    case a.M7m.PS4:
    case a.M7m.PS5:
        return o.Z.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({ platform: n.toUpperCase() });
    case a.M7m.XBOX:
    case a.M7m.SAMSUNG:
        return o.Z.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({ platform: r.Z.get(n).name });
    default:
        return o.Z.Messages.USER_ACTIVITY_HEADER_PLAYING;
    }
}
