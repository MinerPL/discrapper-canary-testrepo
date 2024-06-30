n.d(t, {
    Gg: function () {
        return C;
    },
    Kb: function () {
        return v;
    },
    Ww: function () {
        return D;
    },
    ZI: function () {
        return A;
    },
    _W: function () {
        return N;
    },
    uF: function () {
        return O;
    }
}), n(653041), n(998459), n(47120), n(411104), n(789020);
var r = n(392711), i = n.n(r), a = n(913527), o = n.n(a), s = n(991637), l = n.n(s), u = n(873546), c = n(544891), d = n(355467), _ = n(134432), E = n(351402), f = n(853872), h = n(78839), p = n(526167), m = n(630388), I = n(823379);
n(358085);
var T = n(709054), g = n(981631);
n(689938), l().shim();
let S = !u.tq && !u.Em && -1 !== (0, p.vu)();
function A(e, t) {
    let {
        analyticsSource: n,
        analyticsProperties: r,
        storeListingId: i,
        slug: a,
        channelId: o,
        guildId: s
    } = t;
    return {
        pathname: null != o && null != s ? g.Z5c.CHANNEL(s, o, e) : g.Z5c.APPLICATION_STORE_LISTING_SKU(e, a),
        state: {
            analyticsSource: n,
            analyticsProperties: r
        },
        search: null != i ? '?store_listing_id='.concat(i) : ''
    };
}
function N(e, t, n, r) {
    var i;
    let a;
    let o = window.GLOBAL_ENV.CDN_HOST;
    if (null == r)
        switch (t.mimeType || t.mime_type) {
        case 'video/quicktime':
        case 'video/mp4':
            r = 'mp4';
            break;
        case 'image/gif':
            r = 'gif';
            break;
        default:
            r = 'webp';
        }
    'webp' === r && !S && (r = 'png');
    let s = 'string' == typeof t ? t : t.id, l = (i = 'https:', 'https:');
    return a = null != o ? ''.concat(l, '//').concat(o, '/app-assets/').concat(e, '/store/').concat(s, '.').concat(r) : ''.concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(g.ANM.STORE_ASSET(e, s, r)), null != n && (a += '?size='.concat((0, _.oO)(n * (0, _.x_)()))), a;
}
async function v(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (a) {
        let e = [];
        !f.Z.hasFetchedPaymentSources && e.push(null !== (n = E.Z.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, d.tZ)()), !E.Z.ipCountryCodeLoaded && e.push((0, d.GE)()), e.push(new Promise(async e => {
            if (h.ZP.hasFetchedSubscriptions())
                e();
            else if (E.Z.isSubscriptionFetching) {
                let t = () => {
                    E.Z.isSubscriptionFetching ? setTimeout(t, 50) : e();
                };
                t();
            } else
                await (0, d.jg)(), e();
        })), await Promise.allSettled(e);
    }
    let o = f.Z.getDefaultBillingCountryCode(), s = null !== (r = null === (t = f.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null, l = h.ZP.getPremiumTypeSubscription();
    null != l && null != l.paymentSourceId && (s = l.paymentSourceId), null === o && (o = null !== (i = E.Z.ipCountryCode) && void 0 !== i ? i : null);
    let u = {};
    if (null != o && (u.country_code = o), null != s && (u.payment_source_id = s), null != o || null != s) {
        if ('string' == typeof e && (e = {
                url: e,
                oldFormErrors: !0
            }), 'string' == typeof e.query)
            throw Error('string query not supported');
        e.query = {
            ...u,
            ...e.query
        };
    }
    return c.tn.get(e);
}
function O(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}
let R = [];
function C(e, t, n, r, a) {
    let o = t.get(e);
    if (null == o)
        return R;
    let s = o.applicationId, l = [], u = [], c = function (e, t, n) {
            var r;
            let i = null !== (r = n.getNowPlaying(e)) && void 0 !== r ? r : {}, a = T.default.keys(i).map(e => {
                    let n = t.getUser(e);
                    return null == n ? null : {
                        user: n,
                        startTime: i[n.id].startedPlaying
                    };
                }).filter(I.lm).sort((e, t) => t.startTime - e.startTime);
            return 0 === a.length ? null : {
                type: g.AzA.NOW_PLAYING,
                userInfo: a
            };
        }(s, n, r);
    null != c && (l.push(c), u = c.userInfo.map(e => {
        let {user: t} = e;
        return t.id;
    }));
    let d = a.getStatisticsForApplication(s);
    if (null != d) {
        let e = d.map(e => e.user_id);
        if (i().difference(e, u).length > 0) {
            let e = function (e, t, n) {
                let r = n.getStatisticsForApplication(e);
                if (null == r)
                    return null;
                let i = r.map(e => {
                    let n = t.getUser(e.user_id);
                    return null == n ? null : {
                        user: n,
                        endTime: Date.parse(e.last_played_at)
                    };
                }).filter(I.lm).sort((e, t) => t.endTime - e.endTime);
                return 0 === i.length ? null : {
                    type: g.AzA.EVER_PLAYED,
                    userInfo: i
                };
            }(s, n, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let y = [];
function D(e, t, n) {
    let r = t.get(e), i = n.getForSKU(e);
    if (null == r || null == i)
        return y;
    let a = [];
    (0, m.yE)(r.flags, g.l4R.HAS_FREE_PREMIUM_CONTENT) && a.push({ type: g.AzA.HAS_FREE_PREMIUM_CONTENT });
    let s = r.releaseDate;
    return null != s && 3 > o()().diff(s, 'months') && (r.accessType === g.kGb.EARLY_ACCESS ? a.push({
        type: g.AzA.EARLY_ACCESS,
        releaseDate: s
    }) : a.push({
        type: g.AzA.RECENT_RELEASE_DATE,
        releaseDate: s
    })), null != i.flavorText && a.push({
        type: g.AzA.FLAVOR_TEXT,
        flavorText: i.flavorText
    }), a;
}
