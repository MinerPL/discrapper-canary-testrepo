n.d(t, {
    Z: function () {
        return i;
    }
});
var s = n(581050), a = n(689938);
function i(e) {
    var t, n;
    let i = (null == e ? void 0 : null === (t = e.latestRequest) || void 0 === t ? void 0 : t.state) === s.X.REJECTED;
    return {
        isApplicationRejected: i,
        requestCooldownDuration: function (e) {
            let t;
            if (null == e)
                return;
            let n = Date.parse(e), s = Date.now();
            if (isNaN(n) || n < s)
                return;
            let i = 1440, r = 10080, l = 43200, o = Math.round((n - s) / 60000), c = e => Math.round(o / e);
            return t = o >= 43200 ? a.Z.Messages.DURATION_MONTHS.format({ months: c(l) }) : o >= r ? a.Z.Messages.DURATION_WEEKS.format({ weeks: c(r) }) : o >= i ? a.Z.Messages.DURATION_DAYS.format({ days: c(i) }) : o >= 60 ? a.Z.Messages.DURATION_HOURS.format({ hours: c(60) }) : a.Z.Messages.DURATION_MINUTES.format({ minutes: o });
        }(null == e ? void 0 : null === (n = e.rejection) || void 0 === n ? void 0 : n.can_reapply_at)
    };
}
