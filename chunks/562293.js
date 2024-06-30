n.d(t, {
    H: function () {
        return l;
    },
    Z: function () {
        return r;
    }
});
var i = n(913527), a = n.n(i), s = n(689938);
function l(e) {
    let t = a()();
    if (e <= t)
        return;
    let n = e.diff(t, 'days');
    if (n > 1)
        return s.Z.Messages.POLL_EXPIRY_DAYS_REMAINING.format({ days: n });
    let i = e.diff(t, 'hours');
    if (i > 1)
        return s.Z.Messages.POLL_EXPIRY_HOURS_REMAINING.format({ hours: i });
    let l = e.diff(t, 'minutes');
    return s.Z.Messages.POLL_EXPIRY_MINUTES_REMAINING.format({ minutes: l });
}
function r(e) {
    if (null != e)
        return l(e);
}
