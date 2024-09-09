l.d(n, {
    Z: function () {
        return d;
    }
});
var s = l(913527),
    a = l.n(s),
    t = l(230900),
    i = l(854698),
    r = l(765305),
    o = l(689938);
function d(e, n) {
    return {
        entity: (function (e) {
            let { entityType: n, channelId: l } = e,
                s = (0, t.xV)(e);
            return null == n || n === r.WX.NONE ? 'An event type must be specified.' : (null == s || '' === s.trim()) && null == l ? 'Either a location or channel must be specified.' : void 0;
        })(e),
        schedule: (function (e, n) {
            let l = (0, i.v1)(e),
                { entityType: s } = e;
            if (null == l || (null == l ? void 0 : l.startDate) == null) return o.Z.Messages.GUILD_EVENT_START_DATE_REQUIRED;
            let { startDate: t, endDate: d } = l;
            return s === r.WX.EXTERNAL && null == d ? o.Z.Messages.GUILD_EVENT_END_DATE_REQUIRED : !n && t.isBefore(a()()) ? o.Z.Messages.GUILD_EVENT_PAST_START_DATE : null != d && null != t && d.isBefore(t) ? o.Z.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != d && d.isBefore(a()()) ? o.Z.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0;
        })(e, n),
        topic: (function (e) {
            let { name: n } = e;
            return null == n || '' === n.trim() ? 'Topic must be specified.' : void 0;
        })(e)
    };
}
