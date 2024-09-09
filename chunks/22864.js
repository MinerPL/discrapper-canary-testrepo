n.d(t, {
    Z: function () {
        return u;
    }
});
var a = n(348327),
    s = n.n(a),
    l = n(392711),
    r = n.n(l),
    i = n(442837),
    o = n(566006),
    d = n(542578),
    c = n(981631);
function u(e) {
    var t, n;
    let { channelId: a, messageId: l, reaction: u } = e,
        m = (0, i.e7)(
            [d.Z],
            () => {
                let e = d.Z.getReactions(a, l, u.emoji, c.pTL, o.O.VOTE);
                return r().map(e, (e) => e);
            },
            [a, l, u.emoji],
            s()
        );
    return {
        reactors: m,
        hasMore: (null !== (n = null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0) > m.length
    };
}
