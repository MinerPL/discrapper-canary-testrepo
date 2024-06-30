n.d(t, {
    EW: function () {
        return S;
    },
    kk: function () {
        return g;
    },
    un: function () {
        return I;
    },
    wE: function () {
        return T;
    }
}), n(47120);
var r = n(442837), i = n(704215), a = n(561746), o = n(675478), s = n(581883), l = n(626135), u = n(915486), c = n(261376), d = n(883904), _ = n(68985), E = n(952193), f = n(211644), h = n(57207), p = n(921944), m = n(981631);
function I(e) {
    var t;
    if ((0, h.B)(e))
        return !0;
    let n = null === (t = s.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != n && (0, u.jl)(n, e);
}
function T(e) {
    return (0, r.e7)([s.Z], () => I(e));
}
function g(e, t, n) {
    if (!((0, f.cI)(e) || _.Z.hasUserHitDCCap(e) || function (e) {
            let t = E.$.has(e), {enabled: n} = a.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !t });
            return n && !t;
        }(e)) && !n)
        (0, f.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, a] = (0, f.Aq)();
                (0, d.cm)(e), l.default.track(m.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                    type: i.z[e],
                    content_count: r,
                    fatigable_content_count: a,
                    group_name: null == t ? void 0 : t.groupName,
                    bypass_fatigue: c.O.has(e),
                    guild_id: null == t ? void 0 : t.guildId
                }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
            }
        });
}
async function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, f.cI)(e) || t.forceTrack) && function (e, t) {
        var n;
        let [r] = (0, f.Aq)(), a = _.Z.getRenderedAtTimestamp(e), o = new Date(), s = null == a ? null : o.getTime() - a;
        l.default.track(m.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
            type: i.z[e],
            action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : p.L.UNKNOWN,
            content_count: r,
            group_name: null == t ? void 0 : t.groupName,
            bypass_fatigue: c.O.has(e),
            guild_id: null == t ? void 0 : t.guildId,
            shown_duration: s
        });
    }(e, t), (0, d.Vr)(e), await (0, o.nm)(e);
    let n = !_.Z.hasUserHitDCCap();
    (0, f.gE)({
        content: e,
        groupName: null == t ? void 0 : t.groupName
    }, n);
}
