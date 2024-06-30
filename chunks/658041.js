t.d(n, {
    M: function () {
        return a;
    }
});
var i = t(913527), c = t.n(i), r = t(709054), l = t(765305);
function a(e, n, t, i) {
    let a = c()(), u = new Date(e.scheduled_start_time).getTime(), o = {
            start: u - l.VF,
            end: u
        };
    if (a.isBetween(o.start, o.end)) {
        if (null != n) {
            let e = c()(n), t = e.isBetween(o.start, o.end), r = e.isBetween(c()(u).subtract(l.zV, 'days'), u);
            return t || r && !i ? void 0 : l.X_.EVENT_STARTING_SOON;
        }
        return l.X_.EVENT_STARTING_SOON;
    }
    let d = r.default.extractTimestamp(e.id), s = Math.min((null != t ? t : d) + l.Fc, u);
    if (a.isBetween(d, s) && null == n && !i)
        return l.X_.NEW_EVENT;
}
