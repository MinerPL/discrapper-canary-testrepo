n.d(t, {
    RZ: function () {
        return l;
    },
    gn: function () {
        return o;
    },
    sZ: function () {
        return u;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(474936),
    s = n(689938);
let o = (e) => (Object.values(a.VU).includes(e) ? e : null),
    l = (e, t) => {
        if (null == t) return null;
        let n = a.eG[e],
            r = i()(t);
        return r.add(n, 'months'), r.add(1, 'days'), r.toDate();
    },
    u = (e, t) => {
        let n = l(e, t);
        switch (e) {
            case a.VU.PREMIUM_TENURE_1_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_BRONZE_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_3_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_SILVER_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_6_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_GOLD_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_12_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_PLATINUM_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_24_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_DIAMOND_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_36_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_EMERALD_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_60_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_RUBY_TOOLTIP.format({ date: n });
            case a.VU.PREMIUM_TENURE_72_MONTH:
                return s.Z.Messages.TIERED_TNURE_BADGE_FIRE_TOOLTIP.format({ date: n });
            default:
                return s.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: t });
        }
    };
