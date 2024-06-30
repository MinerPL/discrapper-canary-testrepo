n(47120), n(653041);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(215569), o = n(481060), c = n(566006), d = n(60174), u = n(453687), _ = n(434624), E = n(287151), m = n(689938), I = n(704963), T = n(667671);
let h = (e, t) => null == e && null == t || e === t, N = (e, t) => e.findIndex(e => h(e.emoji.id, null == t ? void 0 : t.id) && h(e.emoji.name, null == t ? void 0 : t.name)), f = (e, t) => {
        if (null == t)
            return e;
        let n = N(e, t);
        return n < 0 ? e : [
            e[n],
            ...e.slice(0, n),
            ...e.slice(n + 1)
        ];
    };
class p extends a.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let n = e.message.reactions.length;
        return 0 === t.reactionsCount && n > 0 ? {
            disableTransitionAppear: !1,
            reactionsCount: n
        } : t.reactionsCount !== n ? { reactionsCount: n } : null;
    }
    render() {
        let {
                message: e,
                disableReactionCreates: t,
                disableReactionUpdates: n,
                isLurking: a,
                isGuest: s,
                isPendingMember: h,
                isForumToolbar: N,
                channel: f,
                className: p,
                forceAddReactions: C,
                reactionClassName: g,
                useChatFontScaling: S,
                forceHideReactionCreates: A,
                remainingReactions: x,
                combinedReactions: O,
                visibleReactionsCount: R
            } = this.props, {disableTransitionAppear: M} = this.state, v = S ? T : I, L = R > 0;
        return L || C ? (0, i.jsxs)(r.W, {
            component: 'div',
            className: l()(v.reactions, p),
            transitionAppear: !M,
            role: 'group',
            transitionLeave: !1,
            id: (0, u.bY)(e),
            onMouseEnter: () => this.setState({ isHovered: !0 }),
            onMouseLeave: () => this.setState({ isHovered: !1 }),
            children: [
                (0, i.jsx)(_.l, {
                    reactions: O,
                    message: e,
                    readOnly: n,
                    isLurking: a,
                    isGuest: s,
                    isPendingMember: h,
                    isForumToolbar: N,
                    useChatFontScaling: S,
                    className: g
                }),
                x > 0 && (0, i.jsx)(o.Clickable, {
                    onClick: t => {
                        t.stopPropagation(), (0, E.op)(f, e);
                    },
                    className: l()(v.reaction, g, v.remainingReactions),
                    'aria-label': m.Z.Messages.ADD_REACTION,
                    children: (0, i.jsxs)(o.Text, {
                        className: v.reactionInner,
                        variant: 'text-sm/normal',
                        children: [
                            '+',
                            x
                        ]
                    })
                }),
                !t && !A && (0, i.jsx)(d.X, {
                    type: c.O.NORMAL,
                    message: e,
                    channel: f,
                    useChatFontScaling: S,
                    isHovered: this.state.isHovered,
                    className: l()({
                        [v.forceShow]: C && !L,
                        [v.forceShowLook]: C
                    })
                })
            ]
        }) : null;
    }
    constructor(...e) {
        var t, n, i;
        super(...e), t = this, n = 'state', i = {
            disableTransitionAppear: !0,
            reactionsCount: this.props.message.reactions.length,
            isHovered: !1
        }, n in t ? Object.defineProperty(t, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = i;
    }
}
t.Z = e => {
    let {
            message: t,
            maxReactions: n,
            hoistReaction: s
        } = e, {
            combinedReactions: l,
            remainingReactions: r,
            visibleReactionsCount: o
        } = a.useMemo(() => {
            let e = [], i = f(t.reactions, s), a = null != n && n < i.length ? i.slice(0, n) : i, l = i.length - a.length, r = i.length;
            return a.forEach(t => {
                t.burst_count > 0 && e.push({
                    ...t,
                    type: c.O.BURST
                }), t.count > 0 && e.push({
                    ...t,
                    type: c.O.NORMAL
                }), null != t.me_vote && --r;
            }), {
                combinedReactions: e,
                visibleReactionsCount: r,
                remainingReactions: l
            };
        }, [
            s,
            n,
            t.reactions
        ]);
    return (0, i.jsx)(p, {
        ...e,
        visibleReactionsCount: o,
        combinedReactions: l,
        remainingReactions: r
    });
};
