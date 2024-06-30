n.d(l, {
    ZP: function () {
        return h;
    },
    tE: function () {
        return t;
    }
}), n(47120);
var t, i, r = n(735250), a = n(470079), s = n(120356), u = n.n(s), o = n(481060), d = n(911969), c = n(114484), m = n(970184), p = n(280501), f = n(689938), v = n(505038), E = n(609601);
function N(e) {
    let {
        icon: l,
        iconSize: n
    } = e;
    return (0, r.jsx)('div', {
        className: v.iconContainer,
        style: {
            height: n,
            width: n
        },
        children: l
    });
}
function h(e) {
    let {
            selectActionComponent: l,
            queryOptions: n,
            renderIcon: t,
            renderOptionLabel: i,
            defaultValues: s
        } = e, {
            type: h,
            placeholder: C,
            maxValues: I,
            disabled: g
        } = l, [x, S] = a.useState(!1), [j, T] = a.useState(!1), [_, L] = a.useState(new Map(null == s ? void 0 : s.map(e => [
            e.value,
            e
        ]))), [Z, M] = a.useState(new Set(_.keys())), [O, A] = a.useState(() => (null != s ? s : []).map(e => e.value)), [R, y] = a.useState(0);
    a.useEffect(() => {
        let e = (null != s ? s : []).map(e => e.value);
        if (e.every(e => O.includes(e)) && O.every(l => e.includes(l)))
            return;
        A(e);
        let l = new Map(null == s ? void 0 : s.map(e => [
            e.value,
            e
        ]));
        L(l), M(new Set(l.keys())), y(e => e + 1);
    }, [
        s,
        O
    ]);
    let {
            state: b,
            executeStateUpdate: U,
            visualState: P,
            isDisabled: w,
            error: k
        } = (0, m.Ee)(l, {
            type: h,
            selectedOptions: Array.from(_.values())
        }), G = P === p.gH.LOADING;
    a.useEffect(() => {
        if ((null == b ? void 0 : b.type) === d.re.USER_SELECT || (null == b ? void 0 : b.type) === d.re.ROLE_SELECT || (null == b ? void 0 : b.type) === d.re.MENTIONABLE_SELECT || (null == b ? void 0 : b.type) === d.re.CHANNEL_SELECT) {
            let e = new Map(b.selectedOptions.map(e => [
                e.value,
                e
            ]));
            L(e), M(new Set(e.keys()));
        }
    }, [b]);
    let B = a.useCallback(() => {
        U({
            type: h,
            selectedOptions: Array.from(_.values())
        }) && M(new Set(_.keys()));
    }, [
        U,
        h,
        _
    ]);
    a.useEffect(() => {
        if (!(x || j || _.size === Z.size && Array.from(_.keys()).every(e => Z.has(e))))
            B();
    }, [
        x,
        j,
        Z,
        _,
        B
    ]);
    let V = 0 === _.size || x, z = {
            isDisabled: g || w,
            wrapperClassName: v.select,
            options: e => new Promise(l => {
                l(n(e));
            }),
            placeholder: V ? null != C ? C : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
            onClose: () => S(!1),
            onOpen: () => S(!0),
            onBlur: () => T(!1),
            maxVisibleItems: 5,
            optionClassName: v.__invalid_selectOption,
            renderOptionPrefix: (e, l) => {
                let {inPill: n} = l, i = n ? 16 : 24, a = t(e, i);
                return null != a ? (0, r.jsx)(N, {
                    icon: a,
                    iconSize: i
                }) : null;
            },
            renderOptionLabel: i
        };
    return (0, r.jsxs)(a.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: v.container,
                children: [
                    I > 1 ? (0, r.jsx)(o.SearchableSelect, {
                        className: v.badges,
                        value: Array.from(_.values()),
                        onChange: e => {
                            !x && T(!0), L(new Map(e.map(e => [
                                e.value,
                                e
                            ])));
                        },
                        multi: !0,
                        inputClassNames: u()({
                            [v.soloInput]: 0 === _.size,
                            [v.inlineInput]: _.size > 0,
                            [v.hidden]: !V
                        }),
                        closeOnSelect: !1,
                        centerCaret: !0,
                        ...z
                    }, R) : (0, r.jsx)(o.SearchableSelect, {
                        className: (v.badges, v.singleSelect),
                        value: [..._.values()][0],
                        onChange: e => L(null != e ? new Map([[
                                e.value,
                                e
                            ]]) : new Map()),
                        clearable: !0,
                        centerCaret: !0,
                        ...z
                    }, R),
                    G ? (0, r.jsx)('div', {
                        className: v.loading,
                        children: (0, r.jsx)(o.Dots, {
                            dotRadius: 3.5,
                            themed: !0
                        })
                    }) : null
                ]
            }),
            null != k ? (0, r.jsx)(c.st, {
                ...(0, c.c4)(k),
                className: E.error
            }) : null
        ]
    });
}
(i = t || (t = {}))[i.PILL_ICON_SIZE = 16] = 'PILL_ICON_SIZE', i[i.ROW_ICON_SIZE = 24] = 'ROW_ICON_SIZE';
