n(653041);
var i = n(735250),
    s = n(470079),
    a = n(374470),
    l = n(442837),
    r = n(952265),
    o = n(481060),
    c = n(40851),
    u = n(835473),
    d = n(314910),
    h = n(585483),
    p = n(5967),
    m = n(499254),
    _ = n(541099),
    f = n(827498),
    E = n(695676),
    g = n(421591),
    C = n(314734),
    I = n(981631),
    T = n(689938),
    x = n(767346);
let S = { height: C.lv };
function v() {
    m.yT(f.ti.DISMISSED);
}
function N(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: d } = e,
        m = s.useRef(null),
        { renderWindow: T, windowDispatch: x } = s.useContext(c.ZP),
        S = null != d,
        N = (0, r.Jw)(null != d ? d : ''),
        A = s.useCallback(
            (e) => {
                var t;
                if ((!S && (0, r.$s)()) || (S && !(N && n))) return;
                let { target: i } = e;
                if ((0, a.k)(i) && null != i.closest('.' + C.Jh)) return;
                for (; (0, a.k)(i); ) {
                    if (i === m.current) return;
                    if (i.classList.contains(C.t4)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(C.NN)) return;
                    i = i.parentNode;
                }
                v();
                let s = null === (t = (0, p.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == s || 'BODY' === s.tagName) && h.S.dispatchToLastSubscribed(I.CkL.TEXTAREA_FOCUS);
            },
            [n, N, S]
        );
    s.useLayoutEffect(
        () => (
            T.addEventListener('mousedown', A),
            T.addEventListener('contextmenu', A),
            x.subscribe(I.CkL.POPOUT_CLOSE, v),
            () => {
                T.removeEventListener('mousedown', A), T.removeEventListener('contextmenu', A), x.unsubscribe(I.CkL.POPOUT_CLOSE, v);
            }
        ),
        [A, T, x]
    ),
        (0, o.useFocusLock)(m),
        s.useEffect(() => {
            ((!S && (0, r.$s)()) || (S && !N)) && v();
        }, [N, S]);
    let Z = (0, l.e7)([_.Z], () => _.Z.initialState(), []),
        M = (0, u.q)(null == Z ? void 0 : Z.applicationId),
        b = s.useMemo(() => {
            if (null == Z) return;
            let e = [{ type: E.gc.HOME }];
            return (
                null != Z.applicationId &&
                    null != M &&
                    e.push({
                        type: E.gc.APPLICATION,
                        application: M
                    }),
                e
            );
        }, [Z, M]);
    return (0, i.jsx)(g.Z, {
        ref: m,
        channel: t,
        entrypoint: f._b.TEXT,
        initHistory: b
    });
}
t.Z = s.memo(function (e) {
    let { positionTargetRef: t, ...n } = e;
    return (0, i.jsx)('span', {
        style: C.u$,
        children: (0, i.jsx)(d.W5, {
            className: x.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: x.positionContainer,
                    role: 'dialog',
                    style: S,
                    'aria-label': T.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_LAUNCHER_ARIA_LABEL,
                    children: t && (0, i.jsx)(N, { ...n })
                });
            }
        })
    });
});
