n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(654861),
    i = n.n(r),
    a = n(108131),
    s = n.n(a),
    o = n(943881),
    l = n(650774),
    u = n(430824),
    c = n(70956),
    d = n(709054);
function _(e, t, n) {
    let r = i()(e),
        a = null != t ? i()(t) : null,
        s = null != n ? i()(n) : null;
    return !((null != a && r.lesser(a)) || (null != s && r.greater(s))) && !0;
}
function E(e) {
    let t, n;
    for (let [r, i] of e)
        switch (r) {
            case s().v3('min_id'):
                t = i;
                break;
            case s().v3('max_id'):
                n = i;
        }
    return {
        min: t,
        max: n
    };
}
let f = {
    [s().v3('guild_ids')]: (e) => {
        let t = [];
        for (let [n, r] of e) n === s().v3('guild_ids') && (t = r);
        return (e) => t.includes(e);
    },
    [s().v3('guild_id_range')]: (e) => {
        let { min: t, max: n } = E(e);
        return (e) => _(e, t, n);
    },
    [s().v3('guild_age_range_days')]: (e) => {
        let { min: t, max: n } = E(e);
        return (e) => _(Math.floor(d.default.age(e) / c.Z.Millis.DAY), t, n);
    },
    [s().v3('guild_member_count_range')]: (e) => {
        let { min: t, max: n } = E(e);
        return (e) => {
            let r = l.Z.getMemberCount(e);
            return null != r && _(r, t, n);
        };
    },
    [s().v3('guild_has_feature')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : o.Z.getGuild(e);
            return null != r && t.some((e) => r.hasFeature(e));
        };
    },
    [s().v3('guild_hub_types')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : o.Z.getGuild(e);
            return null != r && 'number' == typeof r.hubType && t.some((e) => r.hubType === e);
        };
    },
    [s().v3('guild_has_vanity_url')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null !== (n = u.Z.getGuild(e)) && void 0 !== n ? n : o.Z.getGuild(e);
            return null != r && t === (null != r.vanityURLCode);
        };
    },
    [s().v3('guild_in_range_by_hash')]: (e) => {
        let t, n;
        for (let [i, a] of e)
            switch (i) {
                case s().v3('hash_key'):
                    t = a;
                    break;
                case s().v3('target'):
                    var r;
                    n = null !== (r = parseInt(a)) && void 0 !== r ? r : 0;
            }
        return (e) => {
            let r = s().v3(''.concat(t, ':').concat(e));
            return (r > 0 ? r + r : r >>> 0) % 10000 < n;
        };
    }
};
