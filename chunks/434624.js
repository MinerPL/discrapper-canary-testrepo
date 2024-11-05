n.d(t, {
    l: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(866442),
    s = n(596454),
    c = n(434650),
    d = n(446489),
    u = n(56314),
    m = n(566006),
    h = n(287151),
    f = n(96042),
    p = n(688236);
let g = r.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: r, hideEmoji: l, emoji: c, className: g, count: _, me: C, me_burst: E, burst_count: I, burst_colors: x, readOnly: v, isLurking: N, isGuest: T, isPendingMember: S, type: b, emojiSize: A } = e,
            j = b === m.O.BURST,
            Z = (0, h.y4)(C, E, b),
            R = (0, u.v)(j && null != x ? x : []),
            P = r ? p : f,
            y = j ? I : _,
            L = (0, d.y)(y, h.aO),
            O = {};
        if (j && null != R) {
            var M;
            let { accentColor: e, backgroundColor: i, opacity: r } = R,
                l = null !== (M = (0, o.wK)(null != i ? i : '', r)) && void 0 !== M ? M : '';
            Z && (O.borderColor = i), (O.background = l), (t = e), (n = e);
        }
        let k = {
            minWidth: L,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: a()(P.reaction, P.reactionInner, g, {
                [P.reactionMe]: Z,
                [P.reactionReadOnly]: v && !N && !S && !T
            }),
            style: O,
            children: [
                (0, i.jsx)(s.Z, {
                    className: a()({ [P.hideEmoji]: l }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: A,
                    animated: j && c.animated
                }),
                (0, i.jsx)('div', {
                    className: P.reactionCount,
                    style: k,
                    children: y
                })
            ]
        });
    }),
    _ = r.memo(function (e) {
        let { showImmediate: t, reactions: n, emojiSize: l, ...a } = e,
            [o, s] = r.useState(!1),
            [d, u] = r.useTransition(),
            f = r.useCallback(
                (e) => {
                    e &&
                        !o &&
                        !d &&
                        u(() => {
                            s(!0);
                        });
                },
                [o, d]
            ),
            p = (0, c.O)(f),
            _ = (o && !d) || t ? h.le : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: p }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        _,
                        {
                            ...a,
                            ...e,
                            emojiSize: l
                        },
                        ((t = e),
                        ''
                            .concat(t.type === m.O.BURST ? 'burst:' : '')
                            .concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':')
                            .concat(t.emoji.name))
                    );
                })
            ]
        });
    });
