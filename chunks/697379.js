n.d(t, {
    W: function () {
        return _;
    },
    v: function () {
        return d;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(430824),
    s = n(496675),
    o = n(863249),
    l = n(944163),
    u = n(246364),
    c = n(981631);
function d(e) {
    let t = a.Z.getGuild(e);
    return null != t && t.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && s.Z.can(c.Plq.KICK_MEMBERS, t);
}
function _(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
        n = null != t && t.hasFeature(c.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && s.Z.can(c.Plq.KICK_MEMBERS, t) && t.hasVerificationGate(),
        d = (0, i.e7)([l.Z], () => l.Z.get(e), [e]);
    r.useEffect(() => {
        n && o.Z.fetchVerificationForm(e);
    }, [n, e]);
    let _ = r.useMemo(() => {
        var e;
        return (null !== (e = null == d ? void 0 : d.formFields) && void 0 !== e ? e : []).some((e) => !(0, u.J)(e));
    }, [null == d ? void 0 : d.formFields]);
    return n && _;
}
