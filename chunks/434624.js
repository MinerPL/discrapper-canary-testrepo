n.d(t, {
    l: function () {
        return h;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(866442), o = n(596454), c = n(434650), d = n(56314), u = n(18732), _ = n(566006), E = n(287151), m = n(704963), I = n(667671);
let T = a.memo(function (e) {
        let t, n, {
                useChatFontScaling: a,
                hideEmoji: s,
                emoji: c,
                className: T,
                count: h,
                me: N,
                me_burst: f,
                burst_count: p,
                burst_colors: C,
                readOnly: g,
                isLurking: S,
                isGuest: A,
                isPendingMember: x,
                type: O
            } = e, R = O === _.O.BURST, M = (0, E.y4)(N, f, O), v = (0, d.v)(R && null != C ? C : []), L = a ? I : m, Z = R ? p : h, P = (0, u.y)(Z, E.aO), b = {};
        if (R && null != v) {
            var D;
            let {
                    accentColor: e,
                    backgroundColor: i,
                    opacity: a
                } = v, s = null !== (D = (0, r.wK)(null != i ? i : '', a)) && void 0 !== D ? D : '';
            M && (b.borderColor = i), b.background = s, t = e, n = e;
        }
        let j = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: l()(L.reaction, L.reactionInner, T, {
                [L.reactionMe]: M,
                [L.reactionReadOnly]: g && !S && !x && !A
            }),
            style: b,
            children: [
                (0, i.jsx)(o.Z, {
                    className: l()({ [L.hideEmoji]: s }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: 'reaction',
                    animated: R && c.animated
                }),
                (0, i.jsx)('div', {
                    className: L.reactionCount,
                    style: j,
                    children: Z
                })
            ]
        });
    }), h = a.memo(function (e) {
        let {
                showImmediate: t,
                reactions: n,
                ...s
            } = e, [l, r] = a.useState(!1), [o, d] = a.useTransition(), u = a.useCallback(e => {
                e && !l && !o && d(() => {
                    r(!0);
                });
            }, [
                l,
                o
            ]), m = (0, c.O)(u), I = l && !o || t ? E.le : T;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: m }),
                n.map(e => {
                    var t, n;
                    return (0, i.jsx)(I, {
                        ...s,
                        ...e
                    }, (t = e, ''.concat(t.type === _.O.BURST ? 'burst:' : '').concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':').concat(t.emoji.name)));
                })
            ]
        });
    });
