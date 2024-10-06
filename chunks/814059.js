n.d(t, {
    n: function () {
        return o;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(70956),
    s = n(689938);
let o = (e) => {
    let t = Math.max(0, i()(e).diff(i()(), 's'));
    if (t < a.Z.Seconds.DAY) {
        let e = Math.round(t / a.Z.Seconds.HOUR);
        return s.Z.Messages.LEADERBOARD_INTERVAL_END_HOURS_LEFT.format({ count: e });
    }
    {
        let e = Math.round(t / a.Z.Seconds.DAY);
        return s.Z.Messages.LEADERBOARD_INTERVAL_END_DAYS_LEFT.format({ count: e });
    }
};
