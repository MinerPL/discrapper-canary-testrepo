t.d(n, {
    Z: function () {
        return T;
    },
    f: function () {
        return m;
    }
}),
    t(47120);
var r,
    i,
    o = t(735250),
    l = t(470079),
    u = t(120356),
    a = t.n(u),
    s = t(91192),
    c = t(442837),
    d = t(481060),
    _ = t(239091),
    f = t(596454),
    E = t(607070),
    I = t(339085),
    g = t(695346),
    p = t(572004),
    S = t(689938),
    C = t(109756);
function T(e) {
    let { tag: n, size: r = 1, disabled: i, className: u, onClick: T, onRemove: m, selected: A, ariaLabel: N } = e,
        { name: h, emojiId: v, emojiName: L } = n,
        R = null != m,
        [M, O] = l.useState(!1),
        b = (0, c.e7)([I.ZP], () => (null != v ? I.ZP.getUsableCustomEmojiById(v) : null)),
        D = R || null != T,
        U = (!R || !M) && (null != v || null != L),
        Z = 0 === r,
        P = l.useRef(null),
        y = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        x = (e) => {
            let r = g.Sb.getSetting();
            p.wS &&
                r &&
                (0, _.jW)(e, async () => {
                    let { default: e } = await t.e('29646').then(t.bind(t, 955116));
                    return (t) =>
                        (0, o.jsx)(e, {
                            ...t,
                            tag: n
                        });
                });
        },
        G = (0, o.jsxs)(o.Fragment, {
            children: [
                U
                    ? (0, o.jsx)(f.Z, {
                          className: a()(C.emoji, { [C.small]: Z }),
                          emojiId: v,
                          emojiName: L,
                          animated: !!(null == b ? void 0 : b.animated),
                          size: 'reaction'
                      })
                    : null,
                M &&
                    R &&
                    (0, o.jsx)('div', {
                        className: C.closeCircle,
                        children: (0, o.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.close
                        })
                    }),
                (0, o.jsx)(d.Text, {
                    variant: Z ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    children: h
                })
            ]
        }),
        j = {
            key: n.id,
            className: a()(
                C.pill,
                {
                    [C.disabled]: i,
                    [C.clickable]: D,
                    [C.small]: Z,
                    [C.selected]: A
                },
                u
            ),
            onClick: (e) => {
                null == T || T(e), null == m || m(n), !y && null != P.current && P.current.blur();
            },
            onContextMenu: (e) => x(e),
            onMouseEnter: () => R && O(!0),
            onMouseLeave: () => R && O(!1)
        },
        w = (0, s.JA)('forum-tag-'.concat(n.id));
    return D
        ? (0, o.jsx)(d.Clickable, {
              ...w,
              innerRef: P,
              focusProps: { ringTarget: P },
              'aria-label': null != N ? N : S.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({ tagName: h }),
              role: 'button',
              'aria-pressed': A,
              ...j,
              children: G
          })
        : (0, o.jsx)('div', {
              ...j,
              children: G
          });
}
function m(e) {
    let { tags: n, count: t, size: r = 1 } = e,
        i = 0 === r;
    return (0, o.jsx)(d.Tooltip, {
        'aria-label': S.Z.Messages.FORUM_TAGS,
        text: (0, o.jsx)(o.Fragment, {
            children: n.map((e) =>
                (0, o.jsx)(
                    T,
                    {
                        tag: e,
                        className: C.tooltipPill,
                        size: T.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, o.jsx)('div', {
                ...e,
                className: a()(C.pill, { [C.small]: i }),
                children: (0, o.jsxs)(d.Text, {
                    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                    children: ['+', t]
                })
            })
    });
}
((i = r || (r = {}))[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), (T.Sizes = r);
