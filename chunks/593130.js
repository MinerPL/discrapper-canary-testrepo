t.d(n, {
    Z: function () {
        return v;
    }
}), t(47120);
var a = t(735250), s = t(470079), l = t(120356), r = t.n(l), i = t(442837), o = t(481060), c = t(496675), d = t(346479), u = t(665906), h = t(91159), m = t(443671), g = t(342449), E = t(488131), f = t(124368), Z = t(981631), x = t(689938), T = t(246634);
function v(e) {
    let {
            channel: n,
            className: t,
            onClose: l
        } = e, v = (0, i.e7)([c.Z], () => c.Z.can(Z.Plq.READ_MESSAGE_HISTORY, n)), R = (0, u.cD)(n), j = () => {
            l(), (0, E.R6)(n, void 0, 'Thread Browser Empty State');
        }, N = s.useCallback((e, n) => {
            l(), (0, E.ok)(e, !n, f.on.BROWSER);
        }, [l]), S = function (e, n) {
            let [t, a] = s.useState(''), [l, r] = s.useState(!1), [i, o] = s.useState(!1), [c, u] = s.useState([]), h = async () => {
                    if (null != t && '' !== t) {
                        if (!l) {
                            r(!0);
                            try {
                                let a = await d.Z.searchThreads(e, n, t);
                                o(!0), u(a);
                            } finally {
                                r(!1);
                            }
                        }
                    }
                };
            return {
                query: t,
                setQuery: e => {
                    a(e), 0 === e.length && o(!1);
                },
                isLoading: l,
                hasResults: i,
                submit: h,
                results: c
            };
        }(n.guild_id, n.id);
    return s.useEffect(() => {
        (0, h.A_)();
    }, []), (0, a.jsx)('div', {
        className: r()(t, T.container),
        children: (0, a.jsx)(o.HeadingLevel, {
            component: (0, a.jsxs)('div', {
                className: T.header,
                children: [
                    (0, a.jsx)(o.ThreadIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.threadIcon
                    }),
                    (0, a.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        className: T.title,
                        children: x.Z.Messages.THREAD_BROWSER_TITLE
                    }),
                    v ? (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)('div', { className: T.divider }),
                            (0, a.jsx)(_, { ...S })
                        ]
                    }) : null,
                    (0, a.jsx)('div', { className: T.spacer }),
                    R ? (0, a.jsx)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        className: T.createButton,
                        onClick: () => {
                            l(), (0, E.R6)(n, void 0, 'Thread Browser Toolbar');
                        },
                        children: x.Z.Messages.CREATE
                    }) : null,
                    (0, a.jsx)(o.Clickable, {
                        className: T.closeIcon,
                        onClick: l,
                        'aria-label': x.Z.Messages.CLOSE,
                        children: (0, a.jsx)(o.CloseSmallIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            children: S.hasResults ? (0, a.jsx)(m.Z, {
                channel: n,
                startThread: j,
                goToThread: N,
                threadIds: S.results
            }) : (0, a.jsx)(g.Z, {
                channel: n,
                startThread: j,
                goToThread: N
            })
        })
    });
}
function _(e) {
    let {
        query: n,
        setQuery: t,
        submit: s,
        isLoading: l
    } = e;
    return (0, a.jsx)(o.SearchBar, {
        autoFocus: !0,
        className: T.searchBox,
        query: n,
        isLoading: l,
        onChange: e => t(e),
        onClear: () => t(''),
        onKeyDown: e => 'Enter' === e.key && s(),
        placeholder: x.Z.Messages.SEARCH_THREAD_NAMES,
        'aria-label': x.Z.Messages.SEARCH_THREAD_NAMES
    });
}
