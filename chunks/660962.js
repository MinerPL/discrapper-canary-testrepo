n.d(t, {
    ZP: function () {
        return B;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(605436),
    _ = n(663993),
    I = n(518738),
    E = n(786761),
    T = n(3148),
    m = n(753206),
    N = n(598077),
    S = n(496675),
    h = n(764260),
    g = n(95242),
    C = n(541575),
    x = n(420966),
    p = n(337344),
    R = n(275296),
    f = n(203377),
    L = n(981631),
    O = n(689938),
    A = n(670653),
    M = n(151365),
    D = n(179517),
    v = n(79829);
let j = (0, _.Un)({
        createPromise: () => n.e('5609').then(n.bind(n, 336231)),
        webpackId: 336231
    }),
    Z = o().debounce((e, t) => (0, h.Uv)(e, t), 200);
function b(e) {
    let { role: t, disabled: n } = e,
        [i, r] = a.useState(t.name);
    return (
        a.useEffect(() => {
            r(t.name);
        }, [t.name]),
        (0, s.jsx)(d.FormItem, {
            title: O.Z.Messages.FORM_LABEL_ROLE_NAME,
            required: !0,
            children: (0, s.jsx)(d.TextInput, {
                type: 'text',
                value: i,
                maxLength: L.VKK,
                onChange: function (e) {
                    r(e), Z(t.id, e);
                },
                disabled: n
            })
        })
    );
}
function U(e) {
    let { role: t, disabled: n } = e;
    return (0, s.jsxs)(d.FormItem, {
        className: A.colorPicker,
        title: O.Z.Messages.FORM_LABEL_ROLE_COLOR,
        required: !0,
        children: [
            (0, s.jsx)(d.FormText, {
                className: A.colorDescription,
                children: O.Z.Messages.ROLE_COLOR_HELP
            }),
            (0, s.jsx)(
                j,
                {
                    defaultColor: L.p6O,
                    colors: L.pmI,
                    value: t.color,
                    disabled: n,
                    onChange: (e) =>
                        (function (e, t) {
                            if (e.color !== t && (t !== L.p6O || 0 !== e.color)) t === L.p6O && (t = 0), (0, h.OW)(e.id, t);
                        })(t, e),
                    customPickerPosition: 'right'
                },
                t.id
            )
        ]
    });
}
function G(e) {
    var t, i;
    let { role: r, guildId: l } = e;
    let o =
            ((i = O.Z.Messages.ROLE_SAMPLE_MESSAGE),
            a.useMemo(() => {
                let e = (0, E.e5)({
                    ...(0, T.ZP)({
                        channelId: '1337',
                        content: i
                    }),
                    state: L.yb.SENT,
                    id: '31337'
                });
                return (
                    (e.author = new N.Z({
                        id: '313337',
                        username: O.Z.Messages.WUMPUS,
                        discriminator: '0000',
                        bot: !1
                    })),
                    (e.author.getAvatarURL = () => n(52008)),
                    e
                );
            }, [i])),
        c = {
            nick: o.author.username,
            colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
        },
        u = {
            src: D,
            name: r.name
        },
        _ = {
            src: v,
            name: r.name
        },
        S = (0, I.oC)(l, r);
    return (0, s.jsx)(d.FocusBlock, {
        children: (0, s.jsxs)('div', {
            className: A.previewContainer,
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: [
                (0, s.jsx)(d.ThemeProvider, {
                    theme: L.BRd.LIGHT,
                    children: (e) =>
                        (0, s.jsx)('div', {
                            className: e,
                            children: (0, s.jsx)('div', {
                                className: A.messageContainer,
                                children: (0, s.jsx)(m.Z, {
                                    author: c,
                                    message: o,
                                    roleIcon: null != S ? S : _,
                                    isGroupStart: !0
                                })
                            })
                        })
                }),
                (0, s.jsx)(d.ThemeProvider, {
                    theme: L.BRd.DARK,
                    children: (e) =>
                        (0, s.jsx)('div', {
                            className: e,
                            children: (0, s.jsx)('div', {
                                className: A.messageContainer,
                                children: (0, s.jsx)(m.Z, {
                                    author: c,
                                    message: o,
                                    roleIcon: null != S ? S : u,
                                    isGroupStart: !0
                                })
                            })
                        })
                })
            ]
        })
    });
}
function P(e) {
    let { role: t, disabled: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(d.FormSwitch, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, h.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: O.Z.Messages.FORM_LABEL_HOIST_DESCRIPTION
            }),
            (0, s.jsx)(d.FormDivider, { className: A.divider }),
            (0, s.jsx)(d.FormSwitch, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, h.we)(t.id, t.hoist, e),
                note: O.Z.Messages.FORM_LABEL_MENTIONABLE_DESCRIPTION,
                hideBorder: !0,
                children: O.Z.Messages.FORM_LABEL_MENTIONABLE.format()
            })
        ]
    });
}
function B(e) {
    let { guild: t, role: n, locked: a, setSelectedSection: i } = e,
        l = (0, u.pM)(null == t ? void 0 : t.id, n.id),
        o = a || l,
        _ = (0, c.e7)([S.Z], () => S.Z.canImpersonateRole(t, n)),
        { headerHeight: I, headerRef: E } = (0, g.Z)(0),
        { scrolledToTop: T, handleScroll: m } = (0, x.V)();
    return (0, s.jsx)(d.AdvancedScrollerAuto, {
        className: A.scroller,
        style: { scrollPaddingTop: I },
        onScroll: m,
        children: (0, s.jsxs)('div', {
            className: M.contentWidth,
            children: [
                (0, s.jsx)('div', {
                    className: r()(M.header, M.stickyHeader, { [M.stickyHeaderElevated]: !T }),
                    ref: E,
                    children: (0, s.jsx)(x.Z, {
                        guild: t,
                        role: n,
                        selectedSection: f.ZI.DISPLAY,
                        setSelectedSection: i
                    })
                }),
                (0, s.jsx)(b, {
                    role: n,
                    disabled: o
                }),
                (0, s.jsx)('div', {
                    className: A.noticeContainer,
                    children: (0, s.jsx)(R.Z, { role: n })
                }),
                (0, s.jsx)(d.FormDivider, { className: A.divider }),
                (0, s.jsx)(U, {
                    role: n,
                    disabled: o
                }),
                (0, s.jsx)(C.Z, {
                    guild: t,
                    disabled: o,
                    role: n
                }),
                (0, s.jsx)(G, {
                    role: n,
                    guildId: t.id
                }),
                (0, s.jsx)(d.FormDivider, { className: A.divider }),
                (0, s.jsx)(P, {
                    role: n,
                    disabled: o
                }),
                _
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(d.FormDivider, { className: A.divider }),
                              (0, s.jsx)(p.L, {
                                  guildId: t.id,
                                  role: n
                              })
                          ]
                      })
                    : null
            ]
        })
    });
}
