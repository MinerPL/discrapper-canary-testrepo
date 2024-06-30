t(47120);
var i = t(735250);
t(470079);
var l = t(392711), o = t.n(l), E = t(481060), r = t(718528), u = t(905423), a = t(984933), s = t(914010), d = t(771845), _ = t(55589), c = t(585483), C = t(475468), A = t(981631), I = t(490897);
function S(e, n) {
    var t, i;
    return [
        {
            resourceId: e,
            type: I.W.GUILD_EVENT
        },
        ...(t = e, i = n, t === A.ME ? _.Z.getPrivateChannelIds() : (0, r.Z)(t, i).map(e => e.id))
    ];
}
n.Z = o().throttle(function (e, n) {
    var l, o;
    let r, {
            channelPredicate: _ = (e, n) => !0,
            guildPredicate: I = e => !0,
            guildFeaturePredicate: T = (e, n) => !1,
            withVoiceChannels: L = !1
        } = n, N = null !== (l = u.Z.getState().guildId) && void 0 !== l ? l : A.ME, O = u.Z.getState().channelId, D = function (e, n) {
            let t = [
                    A.ME,
                    ...d.ZP.getFlattenedGuildIds()
                ], i = t.indexOf(e);
            return n > 0 ? t.slice(i).concat(t.slice(0, i), e) : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
        }(N, e), g = e > 0 ? 0 : D.length - 1, R = S(N, L), f = R.indexOf(O) + e;
    for (; null != N && '' !== N;) {
        if (r = R[f], I(N))
            for (; null != r && '' !== r;) {
                if ('string' == typeof r) {
                    if (_(N, r))
                        return (0, C.K)(N, r, !1, L);
                } else if ('object' == typeof r && T(r.resourceId, r.type))
                    return N !== s.Z.getGuildId() && (0, C.K)(N, null === (o = a.ZP.getDefaultChannel(N)) || void 0 === o ? void 0 : o.id), (0, E.openModalLazy)(async () => {
                        let {default: e} = await Promise.all([
                            t.e('77287'),
                            t.e('14262'),
                            t.e('22347'),
                            t.e('56236'),
                            t.e('89565')
                        ]).then(t.bind(t, 17671));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            guildId: N
                        });
                    });
                f += e, r = R[f];
            }
        if (g += e, null == (N = D[g]) || '' === N)
            break;
        R = S(N, L), f = e < 0 ? R.length - 1 : 0;
    }
    c.S.dispatch(A.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, A.aZC);
