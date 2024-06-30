n.d(t, {
    _g: function () {
        return T;
    },
    au: function () {
        return I;
    },
    c: function () {
        return f;
    },
    dy: function () {
        return h;
    },
    hs: function () {
        return p;
    },
    op: function () {
        return N;
    }
});
var i = n(470079), a = n(442837), s = n(570140), l = n(213609), r = n(211644), o = n(605236), c = n(594190), d = n(960359), u = n(346114), _ = n(524347), E = n(853197), m = n(702512);
function I(e) {
    let t, n;
    let i = u.a.useExperiment({ location: '59cc4b_1' });
    if (null == e)
        return null;
    let a = (0, E.BS)(e);
    if (null == a)
        return null;
    if (a.dropsQuestId === m.oL)
        t = u.a, n = i;
    else
        t = null, n = null;
    return null == t || null == n ? null : {
        experiment: t,
        config: n,
        drop: a
    };
}
function T(e) {
    var t;
    let n = (0, a.e7)([_.Z], () => _.Z.serverEligibleByQuestIds), l = I(e), r = function (e) {
            let t = (0, a.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)), n = i.useMemo(() => (0, E.R9)(), []);
            return (0, E.YK)(e, t, n);
        }(e), o = null != l && n[l.drop.dropsQuestId];
    null != l && o && r && l.experiment.trackExposure({ location: 'ELIGIBILITY_ENROLLMENT_TOOLTIP' });
    let u = null == l ? void 0 : null === (t = l.config) || void 0 === t ? void 0 : t.dropsEnabled, m = null == l ? void 0 : l.drop, T = null == m || (0, E.hM)(m);
    return i.useEffect(() => {
        u && !T && r && null != m && s.Z.wait(() => {
            null == o && (0, d.Vt)(m.dropsQuestId);
        });
    }, [
        o,
        m,
        u,
        T,
        r
    ]), null != m && !!u && !T && o && r;
}
function h() {
    let e = I(m.X2.FORTNITE);
    return null == e ? void 0 : e.config.dropsEnabled;
}
function N(e) {
    let t = I(e), n = null == t ? void 0 : t.drop, s = (0, a.e7)([_.Z], () => null != n && _.Z.serverEligibleByQuestIds[n.dropsQuestId]), l = (0, a.e7)([_.Z], () => _.Z.hasInitialProgressFetched);
    i.useEffect(() => {
        null != n && s && !l && (0, d.Vb)(n.dropsQuestId);
    }, [
        n,
        s,
        l
    ]);
}
function f(e, t, n, i) {
    var s;
    let l = I(e), c = null == l ? void 0 : l.drop, d = (0, a.e7)([_.Z], () => null != c && _.Z.serverEligibleByQuestIds[c.dropsQuestId]), u = (0, a.e7)([_.Z], () => _.Z.getIsPartnerGameQuestComplete(e)), m = (0, E.wj)(null == t ? void 0 : t.name, null !== (s = null == c ? void 0 : c.gameSearchTerm) && void 0 !== s ? s : []), T = (0, r.ot)([
            n,
            i
        ]), h = (0, o.wE)(i), N = null == c || (0, E.hM)(c), f = !!(null != c && !N && m && (null == l ? void 0 : l.config.dropsEnabled) && d);
    return {
        partnerGame: f ? e : null,
        dropsActivityPanelExperienceBlocked: T,
        showDropsSparkles: !u && !h
    };
}
function p(e, t, n) {
    let i = (0, E.BS)(e);
    (0, l.Z)({
        type: t,
        name: n,
        properties: {
            drops_quest_id: null == i ? void 0 : i.dropsQuestId,
            game_id: null == i ? void 0 : i.dropsGameId
        }
    });
}
