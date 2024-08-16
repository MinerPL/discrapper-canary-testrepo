t.d(n, {
    Z: function () {
        return i;
    }
});
var s = t(470079),
    a = t(442837),
    u = t(706454),
    l = t(356659),
    c = t(689938);
function i() {
    let e = (0, a.e7)([u.default], () => u.default.locale);
    return s.useMemo(
        () => [
            {
                value: l.OT.SECONDS_30,
                label: c.Z.Messages.CLIPS_LENGTH_SECONDS.format({ count: 30 })
            },
            {
                value: l.OT.MINUTES_1,
                label: c.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 1 })
            },
            {
                value: l.OT.MINUTES_2,
                label: c.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 2 })
            }
        ],
        [e]
    );
}
