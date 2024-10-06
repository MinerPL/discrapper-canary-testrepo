n.d(t, {
    DC: function () {
        return d;
    },
    ZR: function () {
        return E;
    },
    l8: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(99815),
    s = n(657707),
    o = n(297781),
    l = n(709054),
    u = n(814059),
    c = n(689938);
function d(e) {
    let { value: t, statisticId: n } = e,
        i = (function (e) {
            if (e === a.E.LOL_TOTAL_KILLS) return c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_KILLS;
        })(n);
    return null == i ? null : (0, r.jsx)(E, { text: i.format({ value: t }) });
}
function _(e) {
    let { intervalEnd: t } = e,
        n = i.useMemo(() => (0, u.n)(l.default.extractTimestamp(t)), [t]);
    return (0, r.jsx)(o.ej, {
        Icon: s.Que,
        text: n
    });
}
function E(e) {
    let { text: t } = e;
    return (0, r.jsx)(o.ej, {
        Icon: s.hAD,
        text: t
    });
}
