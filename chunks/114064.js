let r;
var i,
    a,
    s,
    o,
    l = n(848246),
    u = n(442837),
    c = n(570140),
    d = n(168232),
    _ = n(933843),
    E = n(746599),
    f = n(1163);
let h = {
        available: {},
        activated: {},
        lastFetched: null,
        overrides: {}
    },
    p = h;
function m() {
    r = f.Z.getCurrentConfig({ location: 'PerksDemosStore' }, { autoTrackExposure: !1 });
}
class I extends (o = u.ZP.Store) {
    isAvailable(e) {
        var t;
        return null !== (t = p.available[e]) && void 0 !== t && t;
    }
    hasActiveDemo(e) {
        let t = p.activated[e];
        return null != t && null != r && ((r.enabled && !r.extendedDemoDuration) || (r.extendedDemoDuration && new Date() <= new Date(t.end_time)));
    }
    hasActivated(e) {
        return null != p.activated[e];
    }
    shouldFetch() {
        return null == p.lastFetched || Date.now() > p.lastFetched + 86400000;
    }
    shouldActivate(e) {
        var t;
        return null !== (t = p.available[e]) && void 0 !== t && t && null == p.activated[e];
    }
    overrides() {
        return p.overrides;
    }
    activatedEndTime(e) {
        var t;
        return null === (t = p.activated[e]) || void 0 === t ? void 0 : t.end_time;
    }
}
(s = 'PerksDemosStore'),
    (a = 'displayName') in (i = I)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new I(c.Z, {
        PREMIUM_PERKS_DEMOS_FETCH_SUCCESS: function (e) {
            let {
                demos: { available: t, activated: n }
            } = e;
            (p.available = null != t ? t : {}), (p.activated = null != n ? n : {}), (p.lastFetched = Date.now());
        },
        PREMIUM_PERKS_DEMOS_FETCH_FAILURE: function () {
            (p.available = h.available), (p.lastFetched = null);
        },
        PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS: function (e) {
            let { perkType: t, activatedDuration: n } = e;
            p.activated[t] = n;
        },
        PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE: function (e) {
            let { perkType: t } = e;
            delete p.activated[t];
        },
        PREMIUM_PERKS_DEMO_COMPLETE: function (e) {
            let { perkType: t } = e;
            if (((p.available[t] = !1), (null == r ? void 0 : r.extendedDemoDuration) !== !0)) delete p.activated[t];
        },
        LOGOUT: function () {
            p = h;
        },
        PREMIUM_PERKS_DEMO_OVERRIDE: function (e) {
            let { user: t, perkType: n, available: r, activateSuccess: i, demoDuration: a } = e;
            void 0 !== t &&
                (0, d.QI)(t) &&
                ((p.overrides[n] = {
                    available: r,
                    activateSuccess: i,
                    demoDuration: a
                }),
                null == p.available && (p.available = {}),
                (p.available[n] = r || !1),
                delete p.activated[n],
                (p.lastFetched = null));
        },
        STREAM_START: function () {
            if (!!(0, _.vw)(l.q.STREAM_HIGH_QUALITY)) (0, E.cD)(!0);
        },
        STREAM_STOP: function () {
            (0, E.cD)(!1);
        },
        CONNECTION_OPEN: m,
        EXPERIMENTS_FETCH_SUCCESS: m,
        EXPERIMENT_OVERRIDE_BUCKET: m
    }));
