n.d(t, {
    EW: function () {
        return R;
    },
    H4: function () {
        return g;
    },
    kk: function () {
        return A;
    },
    un: function () {
        return T;
    },
    wE: function () {
        return S;
    },
    wH: function () {
        return v;
    }
}),
    n(47120);
var r = n(442837),
    i = n(704215),
    a = n(561746),
    s = n(675478),
    o = n(581883),
    l = n(626135),
    u = n(915486),
    c = n(261376),
    d = n(883904),
    _ = n(68985),
    E = n(952193),
    f = n(211644),
    h = n(57207),
    p = n(644916),
    I = n(921944),
    m = n(981631);
function T(e) {
    var t;
    if ((0, h.B)(e)) return !0;
    let n = null === (t = o.Z.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
    return null != n && (0, u.jl)(n, e);
}
function S(e) {
    return (0, r.e7)([o.Z], () => T(e));
}
function g(e) {
    var t, n;
    if ((0, h.B)(e)) return !0;
    let r = null === (n = o.Z.settings.userContent) || void 0 === n ? void 0 : null === (t = n.recurringDismissibleContentStates[e]) || void 0 === t ? void 0 : t.lastDismissedVersion,
        i = (0, p.t)(e);
    return null != r && r >= i;
}
function A(e, t, n) {
    if (
        !(
            (0, f.cI)(e) ||
            _.Z.hasUserHitDCCap(e) ||
            (function (e) {
                let t = E.$.has(e),
                    { enabled: n } = a.Z.getCurrentConfig({ location: 'isUserSubjectToDCFHoldout' }, { autoTrackExposure: !t });
                return n && !t;
            })(e)
        ) &&
        !n
    )
        (0, f.f0)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [r, a] = (0, f.Aq)();
                (0, d.cm)(e),
                    l.default.track(m.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                        type: i.z[e],
                        content_count: r,
                        fatigable_content_count: a,
                        group_name: null == t ? void 0 : t.groupName,
                        bypass_fatigue: c.O.has(e),
                        guild_id: null == t ? void 0 : t.guildId,
                        version: null == t ? void 0 : t.version
                    }),
                    null == t || null === (n = t.onShown) || void 0 === n || n.call(t);
            }
        });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    ((0, f.cI)(e) || t.forceTrack) &&
        (function (e, t) {
            var n;
            let [r] = (0, f.Aq)(),
                a = _.Z.getRenderedAtTimestamp(e),
                s = new Date(),
                o = null == a ? null : s.getTime() - a;
            l.default.track(m.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
                type: i.z[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : I.L.UNKNOWN,
                content_count: r,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: c.O.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o,
                version: null == t ? void 0 : t.version
            });
        })(e, t),
        (0, d.Vr)(e);
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = !_.Z.hasUserHitDCCap();
    (0, f.gE)(
        {
            content: e,
            groupName: null == t ? void 0 : t.groupName
        },
        n
    );
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    N(e, t), await (0, s.nm)(e), O(e, t);
}
async function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    N(e, n), await (0, s.Bn)(e, t), O(e, n);
}
