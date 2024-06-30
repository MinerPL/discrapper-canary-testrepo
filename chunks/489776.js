n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(920906), r = n(722770), l = n(442837), o = n(481060), c = n(607070), d = n(236413), u = n(85960), _ = n(65912), E = n(564488), I = n(689938), T = n(463011);
function m(e) {
    let {
            guildId: t,
            triggerType: n
        } = e, m = a.useMemo(() => () => (0, d.ep)(t, n), [
            t,
            n
        ]), [N] = a.useState(m), [S, h] = a.useState(!1), {
            editingRule: g,
            createNewEditingRule: C
        } = (0, _.V)(), {getDefaultRuleName: x} = u.I6[n], p = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), R = !(0, d.Vb)(g) && (null == g ? void 0 : g.triggerType) === n, [f, L] = a.useState(R ? g : N), O = (0, i.useSpring)({
            opacity: R ? 0 : 1,
            pointerEvents: R ? 'none' : 'all',
            config: {
                ...i.config.stiff,
                clamp: !0
            },
            immediate: p
        }), A = (0, i.useSpring)({
            opacity: R ? 1 : 0,
            pointerEvents: R ? 'all' : 'none',
            config: {
                ...i.config.stiff,
                clamp: !0
            },
            immediate: p,
            onStart: () => {
                L(R ? g : N);
            },
            onRest: () => {
                L(R ? g : N), h(R);
            }
        });
    return null == g || R ? (0, s.jsxs)('div', {
        className: T.mainRuleContainer,
        style: { height: R ? 'auto' : '60px' },
        children: [
            (0, s.jsx)(i.animated.div, {
                className: T.animatedRuleCardContainer,
                style: A,
                children: (0, s.jsx)(E.Z, {
                    rule: f,
                    persistEdit: S
                })
            }),
            (0, s.jsx)(i.animated.div, {
                className: T.animatedNewRuleContainer,
                style: O,
                children: (0, s.jsxs)(o.Clickable, {
                    className: T.addAnotherRuleCardContainer,
                    onClick: () => {
                        C(t, n);
                    },
                    children: [
                        (0, s.jsx)(o.CirclePlusIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: r.Z.BLUE_345,
                            className: T.plusIcon
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            color: 'text-link',
                            children: I.Z.Messages.GUILD_AUTOMOD_ADD_ADDITIONAL_RULE.format({ ruleName: x() })
                        })
                    ]
                })
            })
        ]
    }) : null;
}
