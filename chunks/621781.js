t.d(n, {
    Z: function () {
        return i;
    }
});
var a = t(470079), u = t(442837), r = t(706454), s = t(356659), o = t(689938);
function i() {
    let e = (0, u.e7)([r.default], () => r.default.locale);
    return a.useMemo(() => [
        {
            value: s.OT.SECONDS_30,
            label: o.Z.Messages.CLIPS_LENGTH_SECONDS.format({ count: 30 })
        },
        {
            value: s.OT.MINUTES_1,
            label: o.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 1 })
        },
        {
            value: s.OT.MINUTES_2,
            label: o.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 2 })
        }
    ], [e]);
}
