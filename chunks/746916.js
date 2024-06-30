n.d(t, {
    E: function () {
        return c;
    }
});
var r = n(442837), i = n(271383), a = n(594174), o = n(881952), s = n(467138), l = n(937111), u = n(981631);
function c(e) {
    let t = (0, s.e)(null != e ? e : u.lds), n = (0, r.e7)([
            l.Z,
            a.default,
            i.ZP
        ], () => {
            let t = l.Z.getRequest(e), n = a.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id)
                return;
            let r = i.ZP.getMember(e, t.userId);
            if (null == r || !!r.isPending || !!(0, o.oP)(t))
                return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
