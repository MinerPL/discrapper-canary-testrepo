n.d(t, {
    g: function () {
        return m;
    }
});
var i = n(149765),
    a = n(442837),
    o = n(665906),
    l = n(271383),
    d = n(496675),
    c = n(594174),
    r = n(981631);
function m(e) {
    let t = e.getGuildId(),
        n = (0, a.e7)([l.ZP, c.default], () => {
            var e, n;
            let i = c.default.getCurrentUser();
            return null !== (n = null != t && null != i ? (null === (e = l.ZP.getMember(t, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        { messagesDisabled: m } = (0, a.cj)(
            [d.Z],
            () => {
                let t = e.isPrivate(),
                    a = d.Z.computePermissions(e),
                    l = i.e$(a, r.Plq.SEND_MESSAGES),
                    c = (0, o.xl)(e);
                return { messagesDisabled: n || (!t && !l) || c };
            },
            [e, n]
        );
    return !m;
}
