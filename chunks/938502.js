n.d(t, {
    P5: function () {
        return _;
    },
    TJ: function () {
        return d;
    },
    UA: function () {
        return u;
    },
    d5: function () {
        return a;
    }
}),
    n(47120),
    n(470079),
    n(442837),
    n(430824);
var s,
    a,
    i,
    r,
    l = n(626135);
n(59970), n(946314);
var o = n(731455),
    c = n(981631);
function d(e, t) {
    let n = e.hasFeature(c.oNc.VERIFIED),
        s = e.hasFeature(c.oNc.DISCOVERABLE),
        a = e.hasFeature(c.oNc.ENABLED_DISCOVERABLE_BEFORE);
    if (n) return 'settings';
    if (!s && !a) return 'intro';
    if (null == t) return 'settings';
    let i = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date();
    return t.sufficient || i || !s ? (t.sufficient || i ? 'settings' : 'intro') : 'disqualified';
}
function u(e, t) {
    let n = !1,
        s = {
            guild_id: e.id,
            automatic: !1
        };
    (null == t || e.discoverySplash !== t.discoverySplash) && ((s.discovery_splash_edit_type = null == e.discoverySplash ? 'removed' : 'uploaded'), (n = !0)), (null == t || e.features.has(c.oNc.DISCOVERABLE) !== t.features.has(c.oNc.DISCOVERABLE)) && ((s.is_discoverable = e.features.has(c.oNc.DISCOVERABLE)), (n = !0)), (null == t || e.rulesChannelId !== t.rulesChannelId) && ((s.rules_channel_id = e.rulesChannelId), (n = !0)), n && l.default.track(c.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, s);
}
function _(e) {
    var t, n;
    return null !== (n = null === (t = o.U2[e]) || void 0 === t ? void 0 : t.map((e) => e())) && void 0 !== n ? n : [];
}
((i = s || (s = {})).UPLOADED = 'uploaded'), (i.REMOVED = 'removed'), ((r = a || (a = {})).INTRO = 'intro'), (r.DISQUALIFIED = 'disqualified'), (r.SETTINGS = 'settings');
