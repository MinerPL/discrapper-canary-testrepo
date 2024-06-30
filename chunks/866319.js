n.d(s, {
    G: function () {
        return o;
    },
    b: function () {
        return d;
    }
});
var l = n(442837), t = n(430824), i = n(594174), r = n(944163), a = n(981631);
function o(e) {
    let {guildId: s} = e, n = (0, l.e7)([r.Z], () => r.Z.get(s)), i = null == n ? void 0 : n.guild;
    return (0, l.e7)([t.Z], () => {
        var e;
        let n = null === (e = t.Z.getGuild(s)) || void 0 === e ? void 0 : e.verificationLevel, l = null == i ? void 0 : i.verification_level;
        return (null != n ? n : l) === a.sFg.VERY_HIGH;
    }, [
        s,
        i
    ]);
}
function d(e) {
    let {guildId: s} = e, n = (0, l.e7)([i.default], () => i.default.getCurrentUser()), t = o({ guildId: s }), r = (null == n ? void 0 : n.isPhoneVerified()) || (null == n ? void 0 : n.isStaff()), a = (null == n ? void 0 : n.verified) || r;
    return {
        isPhoneVerificationLevel: t,
        isCurrentUserVerified: !!(t ? r : a)
    };
}
