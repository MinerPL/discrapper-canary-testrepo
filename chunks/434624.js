n.d(t, {
    l: function () {
        return h;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(866442),
    o = n(596454),
    c = n(434650),
    u = n(446489),
    d = n(56314),
    _ = n(566006),
    E = n(287151),
    I = n(952527),
    m = n(219021);
let T = a.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: a, hideEmoji: s, emoji: c, className: T, count: h, me: N, me_burst: f, burst_count: C, burst_colors: p, readOnly: g, isLurking: S, isGuest: A, isPendingMember: R, type: x } = e,
            O = x === _.O.BURST,
            M = (0, E.y4)(N, f, x),
            v = (0, d.v)(O && null != p ? p : []),
            L = a ? m : I,
            Z = O ? C : h,
            P = (0, u.y)(Z, E.aO),
            b = {};
        if (O && null != v) {
            var D;
            let { accentColor: e, backgroundColor: i, opacity: a } = v,
                s = null !== (D = (0, l.wK)(null != i ? i : '', a)) && void 0 !== D ? D : '';
            M && (b.borderColor = i), (b.background = s), (t = e), (n = e);
        }
        let j = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: r()(L.reaction, L.reactionInner, T, {
                [L.reactionMe]: M,
                [L.reactionReadOnly]: g && !S && !R && !A
            }),
            style: b,
            children: [
                (0, i.jsx)(o.Z, {
                    className: r()({ [L.hideEmoji]: s }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: 'reaction',
                    animated: O && c.animated
                }),
                (0, i.jsx)('div', {
                    className: L.reactionCount,
                    style: j,
                    children: Z
                })
            ]
        });
    }),
    h = a.memo(function (e) {
        let { showImmediate: t, reactions: n, ...s } = e,
            [r, l] = a.useState(!1),
            [o, u] = a.useTransition(),
            d = a.useCallback(
                (e) => {
                    e &&
                        !r &&
                        !o &&
                        u(() => {
                            l(!0);
                        });
                },
                [r, o]
            ),
            I = (0, c.O)(d),
            m = (r && !o) || t ? E.le : T;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: I }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        m,
                        {
                            ...s,
                            ...e
                        },
                        ((t = e),
                        ''
                            .concat(t.type === _.O.BURST ? 'burst:' : '')
                            .concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':')
                            .concat(t.emoji.name))
                    );
                })
            ]
        });
    });
