n(653041);
var i = n(735250),
    s = n(470079),
    a = n(374470),
    l = n(442837),
    r = n(952265),
    o = n(481060),
    c = n(40851),
    u = n(213459),
    d = n(314910),
    h = n(585483),
    m = n(5967),
    p = n(499254),
    _ = n(541099),
    f = n(827498),
    E = n(695676),
    g = n(421591),
    C = n(314734),
    I = n(981631),
    x = n(689938),
    T = n(1966);
let v = { height: C.lv };
function S() {
    p.y(f.ti.DISMISSED);
}
function N(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: d } = e,
        p = s.useRef(null),
        { renderWindow: x, windowDispatch: T } = s.useContext(c.ZP),
        v = null != d,
        N = (0, r.Jw)(null != d ? d : ''),
        A = s.useCallback(
            (e) => {
                var t;
                if ((!v && (0, r.$s)()) || (v && !(N && n))) return;
                let { target: i } = e;
                if ((0, a.k)(i) && null != i.closest('.' + C.Jh)) return;
                for (; (0, a.k)(i); ) {
                    if (i === p.current) return;
                    if (i.classList.contains(C.t4)) {
                        e.preventDefault();
                        return;
                    }
                    if (i.classList.contains(C.NN)) return;
                    i = i.parentNode;
                }
                S();
                let s = null === (t = (0, m.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == s || 'BODY' === s.tagName) && h.S.dispatchToLastSubscribed(I.CkL.TEXTAREA_FOCUS);
            },
            [n, N, v]
        );
    s.useLayoutEffect(
        () => (
            x.addEventListener('mousedown', A),
            x.addEventListener('contextmenu', A),
            T.subscribe(I.CkL.POPOUT_CLOSE, S),
            () => {
                x.removeEventListener('mousedown', A), x.removeEventListener('contextmenu', A), T.unsubscribe(I.CkL.POPOUT_CLOSE, S);
            }
        ),
        [A, x, T]
    ),
        (0, o.useFocusLock)(p),
        s.useEffect(() => {
            ((!v && (0, r.$s)()) || (v && !N)) && S();
        }, [N, v]);
    let Z = (0, l.e7)([_.Z], () => _.Z.initialState(), []),
        M = s.useMemo(() => {
            if (null == Z) return;
            let e = [{ type: E.gc.HOME }];
            if (null != Z.applicationId) {
                var n;
                let i = (0, u.If)(t, Z.applicationId);
                (null == i ? void 0 : null === (n = i.descriptor) || void 0 === n ? void 0 : n.application) != null &&
                    e.push({
                        type: E.gc.APPLICATION,
                        application: i.descriptor.application,
                        installOnDemand: !i.isGuildInstalled && !i.isUserInstalled
                    });
            }
            return e;
        }, [t, Z]);
    return (0, i.jsx)(g.Z, {
        ref: p,
        channel: t,
        entrypoint: f._b.TEXT,
        initHistory: M
    });
}
t.Z = s.memo(function (e) {
    let { positionTargetRef: t, ...n } = e;
    return (0, i.jsx)('span', {
        style: C.u$,
        children: (0, i.jsx)(d.W5, {
            className: T.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: T.positionContainer,
                    role: 'dialog',
                    style: v,
                    'aria-label': x.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_LAUNCHER_ARIA_LABEL,
                    children: t && (0, i.jsx)(N, { ...n })
                });
            }
        })
    });
});
