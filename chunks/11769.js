n.d(t, {
    k: function () {
        return o;
    }
});
var i = n(70956),
    s = n(689938);
function o(e) {
    if (e >= i.Z.Seconds.HOUR) {
        let t = Math.floor(e / i.Z.Seconds.HOUR),
            n = Math.floor((e - t * i.Z.Seconds.HOUR) / i.Z.Seconds.MINUTE),
            o = e - t * i.Z.Seconds.HOUR - n * i.Z.Seconds.MINUTE;
        return s.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
            hours: t,
            minutes: n,
            seconds: o
        });
    }
    if (!(e >= 60)) return s.Z.Messages.CHANNEL_SLOWMODE_DESC.format({ seconds: e });
    {
        let t = Math.floor(e / 60);
        return s.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
            minutes: t,
            seconds: e - 60 * t
        });
    }
}
