n.d(t, {
    p: function () {
        return h;
    },
    s: function () {
        return g;
    }
});
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(294796), o = n(481060), c = n(153124), d = n(817460), u = n(723047), _ = n(528027), E = n(686807), I = n(157018), T = n(828656), m = n(689938), N = n(411053);
function S(e) {
    let {
            guildId: t,
            emojiId: n,
            emojiName: i,
            title: l,
            description: c,
            targetType: d,
            index: u,
            dndName: E,
            onEdit: I,
            onMove: S,
            disabled: h = !1
        } = e, g = a.useRef(null), C = a.useRef(null), {
            drag: x,
            dragPreview: p,
            drop: R,
            isDragging: f
        } = (0, T.Z)(g, d, u, S);
    return x(C), p(R(g)), (0, s.jsxs)('div', {
        ref: g,
        className: r()(N.card, {
            [N.cardDragging]: f,
            [N.disabled]: h
        }),
        children: [
            (0, s.jsxs)('div', {
                className: N.emojiWrapper,
                children: [
                    (0, s.jsx)(_.Z, {
                        guildId: t,
                        emojiId: n,
                        emojiName: i,
                        className: N.emoji
                    }),
                    !h && (0, s.jsx)('div', {
                        ref: C,
                        className: N.dragIconWrapper,
                        'data-dnd-name': E,
                        children: (0, s.jsx)(o.DragIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: N.dragIcon
                        })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: N.cardText,
                children: [
                    (0, s.jsx)(o.Text, {
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: l
                    }),
                    (0, s.jsx)(o.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: c
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: N.cardActions,
                children: !h && (0, s.jsx)(o.Clickable, {
                    className: N.cardActionButton,
                    onClick: h ? void 0 : I,
                    'aria-label': m.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EDIT_ARIA_LABEL,
                    'aria-disabled': h,
                    children: (0, s.jsx)(o.PencilIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: N.cardActionButtonIcon
                    })
                })
            })
        ]
    });
}
function h(e) {
    let {
            benefits: t,
            onEdit: n,
            onMove: i,
            guildId: o
        } = e, _ = (0, c.Dt)(), {isDragging: T} = (0, l.f)(e => ({ isDragging: e.getItemType() === _ })), m = (0, u.mY)();
    return 0 === t.length ? null : (0, s.jsx)('div', {
        className: r()(N.container, { [N.isDragging]: T }),
        children: t.map((e, t) => (0, s.jsxs)(a.Fragment, {
            children: [
                t > 0 ? (0, s.jsx)('div', { className: N.divider }) : null,
                (0, s.jsx)(S, {
                    guildId: o,
                    emojiId: e.emoji_id,
                    emojiName: e.emoji_name,
                    title: (0, E.Z)(e),
                    description: e.description,
                    targetType: _,
                    index: t,
                    dndName: (0, I.Z)(e),
                    onEdit: () => n(t),
                    onMove: i,
                    disabled: m
                })
            ]
        }, (0, d.ab)(e)))
    });
}
function g(e) {
    let {
        onClick: t,
        children: n,
        disabled: a = !1
    } = e;
    return (0, s.jsx)(o.Clickable, {
        className: N.container,
        onClick: a ? void 0 : t,
        'aria-disabled': a,
        children: (0, s.jsxs)('div', {
            className: r()(N.card, N.addBenefit, { [N.disabled]: a }),
            children: [
                (0, s.jsx)('div', {
                    className: N.emojiWrapper,
                    children: (0, s.jsx)(o.CirclePlusIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: N.addBenefitIcon
                    })
                }),
                (0, s.jsx)('div', {
                    className: N.cardText,
                    children: (0, s.jsx)(o.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        children: n
                    })
                })
            ]
        })
    });
}
