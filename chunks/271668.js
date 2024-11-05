n(47120), n(724458);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(788911),
    c = n(911969),
    d = n(367907),
    f = n(588468),
    _ = n(30465),
    h = n(218867),
    p = n(313201),
    m = n(806966),
    g = n(98528),
    E = n(551058),
    v = n(555573),
    I = n(10718),
    S = n(367790),
    T = n(895924),
    b = n(581364),
    y = n(56801),
    A = n(342687),
    N = n(826298),
    C = n(689079),
    R = n(981631),
    O = n(388032),
    D = n(590515),
    L = n(239840);
let x = [8, 8, 0, 8],
    w = l().debounce(() => {
        (0, d.yw)(R.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300);
function M(e) {
    e.preventDefault();
}
t.Z = i.forwardRef(function (e, t) {
    let { channel: n, canOnlyUseTextCommands: a } = e,
        o = i.useRef(!1),
        l = i.useRef(0),
        [P, k] = i.useState(0),
        U = i.useRef(null),
        [G, B] = i.useState(!1),
        Z = m.Xn.useStore((e) => e.activeCategoryIndex);
    i.useEffect(() => {
        (0, d.yw)(R.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
    }, []);
    let {
            sectionDescriptors: F,
            activeSections: V,
            commandsByActiveSection: j,
            hasMoreAfter: H,
            commands: Y,
            filteredSectionId: W,
            scrollDown: K,
            filterSection: z
        } = I.wi({
            channel: n,
            filters: {
                commandTypes: [c.yU.CHAT],
                builtIns: a ? S.D.ONLY_TEXT : S.D.ALLOW,
                applicationCommands: !a
            },
            options: {
                placeholderCount: 7,
                limit: C.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        q = (0, g.Qs)({
            activeCategoryIndex: Z,
            isScrolling: o,
            listRef: U,
            onActiveCategoryIndexChange: (e) => {
                let t = V[e];
                if (null != t) {
                    let e = F.findIndex((e) => e.id === t.id);
                    m.Xn.setActiveCategoryIndex(e);
                }
            },
            scrollOffset: 20,
            searchQuery: ''
        }),
        Q = (e) => {
            let t = V.length,
                n = j.reduce((e, t) => e + t.data.length, 0) - (H ? 7 : 0);
            H && e + 420 > 48 * t + 56 * n - 512 && K(), q(e), w(), (l.current = e);
        };
    i.useEffect(() => {
        Q(l.current);
    }, [Y]);
    let X = i.useCallback((e) => (e !== V.length - 1 || H ? 16 : 0), [V.length, H]),
        J = j.map((e) => e.data.length);
    i.useEffect(() => {
        null != U.current && G && null != P && U.current.scrollRowIntoView(P);
    }, [G, P]),
        i.useLayoutEffect(() => {
            if (null != W) {
                var e;
                null === (e = U.current) || void 0 === e || e.scrollToSectionTop(0);
            }
        }, [Y, W]);
    let $ = i.useCallback(
            (e) => {
                if (e.id === W || e.id === C.bi.FRECENCY) {
                    var t;
                    z(null), null === (t = U.current) || void 0 === t || t.scrollToSectionTop(0);
                } else z(e.id);
            },
            [z, W]
        ),
        ee = i.useCallback(
            (e, t, r) => {
                v.Po({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: T.Vh.DISCOVERY,
                    triggerSection: r
                });
            },
            [n.id]
        );
    i.useImperativeHandle(
        t,
        () => ({
            onTabOrEnter: (e) => {
                if (null == P) return !e && (k(0), !0);
                if (null == P) return !1;
                let t = 0,
                    n = 0;
                for (let e of j)
                    if (((t = n), P < (n += e.data.length))) {
                        let n = e.data[P - t],
                            r = F.find((e) => e.id === n.applicationId);
                        ee(n, r, (0, b.tI)(e.section));
                        break;
                    }
                return !0;
            },
            onMoveSelection: (e) => {
                if (0 === Y.length) return !0;
                let t = H ? 7 : 0,
                    n = Y.length + t,
                    r = null == P ? 0 : P + e;
                return r >= n ? (r = n - 1) : r < 0 && (r = 0), k(r), B(!0), !0;
            }
        }),
        [Y.length, j, H, F, ee, P]
    );
    let et = i.useCallback(
            (e) => {
                let t = V[e];
                if (null == t) return null;
                let i = (0, N.ky)(t),
                    a = (0, r.jsx)(i, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, r.jsx)(
                    E.Z,
                    {
                        className: D.categoryHeader,
                        icon: a,
                        children: t.name
                    },
                    e
                );
            },
            [n, V]
        ),
        en = i.useCallback(
            (e, t) => {
                let n = e === V.length - 1,
                    i = V[e],
                    { data: a } = j[e];
                return (0, r.jsxs)(
                    'ul',
                    {
                        role: 'group',
                        'aria-label': i.name,
                        className: s()(D.categorySection, { [D.categorySectionLast]: n }),
                        children: [
                            t,
                            0 === a.length &&
                                (0, r.jsx)(u.Z, {
                                    message: O.intl.format(O.t.WoQXT0, { applicationName: i.name }),
                                    noResultsImageURL: L,
                                    className: D.noSearchResults
                                })
                        ]
                    },
                    e
                );
            },
            [V, j]
        ),
        er = i.useCallback(
            (e, t) => {
                var i;
                let a = j[t.sectionIndex],
                    s = a.data[t.sectionRowIndex],
                    o = ''.concat(a.section.id, ':').concat(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : e);
                if (null == s || (a.section.id !== s.applicationId && a.section.id !== C.bi.FRECENCY) || s.inputType === T.iw.PLACEHOLDER) return (0, r.jsx)(A.Z, {}, o);
                let l = F.find((e) => e.id === s.applicationId);
                return (0, r.jsx)(
                    f.ZP.NewCommand,
                    {
                        index: e,
                        command: s,
                        channel: n,
                        className: D.itemWrapper,
                        selected: P === e,
                        showImage: a.section.id !== s.applicationId,
                        section: l,
                        onClick: () => ee(s, l, (0, b.tI)(a.section)),
                        onHover: () => {
                            k(null), B(!1);
                        }
                    },
                    o
                );
            },
            [n, j, ee, F, P]
        ),
        ei = (0, p.Dt)();
    return (
        (0, _.KR)(ei, !0, (0, f.DJ)(P)),
        i.useEffect(
            () => () => {
                (0, _.sJ)();
            },
            []
        ),
        (0, r.jsxs)(f.ZP, {
            id: ei,
            className: D.outerWrapper,
            innerClassName: D.wrapper,
            onMouseDown: M,
            children: [
                (0, r.jsx)(y.Z, {
                    className: D.rail,
                    channel: n,
                    sections: F,
                    filteredSectionId: W,
                    activeCategoryIndex: Z,
                    onSectionClick: $,
                    applicationCommandListRef: U
                }),
                (0, r.jsx)(h.Z, {
                    role: 'listbox',
                    className: D.list,
                    listPadding: x,
                    onScroll: Q,
                    renderRow: er,
                    renderSection: en,
                    renderSectionHeader: et,
                    rowCount: V.length,
                    rowCountBySection: J,
                    rowHeight: 56,
                    sectionHeaderHeight: 32,
                    sectionMarginBottom: X,
                    ref: U,
                    stickyHeaders: !0
                })
            ]
        })
    );
});
