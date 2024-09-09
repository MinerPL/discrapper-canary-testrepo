t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(735250),
    a = t(470079),
    l = t(481060),
    o = t(239091),
    r = t(823531),
    s = t(695346),
    c = t(973616),
    d = t(783097),
    u = t(176412),
    m = t(753972),
    p = t(532309),
    _ = t(728021),
    C = t(413097);
function f(e) {
    var n;
    let { command: t, application: f, onClick: h, query: A, searchResultsPosition: E } = e,
        N = s.Sb.useSetting(),
        x = a.useCallback(
            (e) => {
                if ((0, d.BQ)(f) && N) {
                    let n = f instanceof c.Z ? f : c.Z.createFromServer(f);
                    (0, o.vq)(e, (e) =>
                        (0, i.jsx)(r.Z, {
                            application: n,
                            ...e
                        })
                    );
                }
            },
            [f, N]
        ),
        { iconURL: v, name: I, description: g } = a.useMemo(() => (0, d.sl)(f, { fakeAppIconURL: C }), [f]),
        P = a.useMemo(() => {
            var e;
            let n = null !== (e = null == t ? void 0 : t.displayDescription) && void 0 !== e ? e : g;
            return null == n ? null : (0, u.ae)(n, void 0);
        }, [g, null == t ? void 0 : t.displayDescription]),
        { trackSearchResultsItemImpressionRef: S } = (0, p.Z)({
            applicationId: f.id,
            commandId: null == t ? void 0 : t.id,
            query: A,
            searchResultsPosition: E
        });
    return (0, i.jsx)(l.Clickable, {
        className: _.clickable,
        innerRef: (e) => (S.current = e),
        onClick: h,
        onContextMenu: x,
        children: (0, i.jsxs)(l.FocusBlock, {
            className: _.focusBlock,
            children: [
                (0, i.jsx)(m.Z, {
                    src: v,
                    className: _.icon,
                    'aria-hidden': !0,
                    rendersPlaceholder: !0
                }),
                (0, i.jsxs)('div', {
                    className: _.cmdDetails,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-md/semibold',
                            color: 'header-primary',
                            lineClamp: 1,
                            children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : I
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            lineClamp: 1,
                            children: P
                        })
                    ]
                }),
                null != t
                    ? (0, i.jsx)(l.Text, {
                          className: _.cmdAppName,
                          variant: 'text-sm/normal',
                          color: 'text-secondary',
                          children: I
                      })
                    : null,
                (0, i.jsx)('div', { className: _.underline })
            ]
        })
    });
}
