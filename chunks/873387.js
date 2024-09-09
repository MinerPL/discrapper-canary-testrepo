n.d(t, {
    g: function () {
        return m;
    }
});
var i = n(149765),
    o = n(442837),
    a = n(665906),
    l = n(271383),
    r = n(496675),
    d = n(594174),
    c = n(981631);
function m(e) {
    let t = e.getGuildId(),
        n = (0, o.e7)([l.ZP, d.default], () => {
            var e, n;
            let i = d.default.getCurrentUser();
            return null !== (n = null != t && null != i ? (null === (e = l.ZP.getMember(t, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        { messagesDisabled: m } = (0, o.cj)(
            [r.Z],
            () => {
                let t = e.isPrivate(),
                    o = r.Z.computePermissions(e),
                    l = i.e$(o, c.Plq.SEND_MESSAGES),
                    d = (0, a.xl)(e);
                return { messagesDisabled: n || (!t && !l) || d };
            },
            [e, n]
        );
    return !m;
}
