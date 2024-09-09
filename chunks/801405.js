n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(570140),
    r = n(475179),
    o = n(367907),
    c = n(358221),
    u = n(788983),
    d = n(268353),
    h = n(944486),
    m = n(626135),
    p = n(585483),
    _ = n(358085),
    E = n(228488),
    f = n(981631),
    C = n(394738);
let g = () => {
    l.Z.wait(() => u.xv(f.KJ3.CHANNEL_CALL_POPOUT));
};
function I(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: u, currentWindow: I } = e,
        x = n === f.IlC.POPOUT,
        T = a.useRef(null),
        { currentLayout: N, mode: v } = (0, s.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    i = n === f.IlC.POPOUT;
                i && (e = f.WtW.VIDEO);
                let a = e === f.WtW.VIDEO ? c.Z.getLayout(t.id, n) : f.AEg.MINIMUM;
                return (
                    i && a !== f.AEg.FULL_SCREEN && (a = f.AEg.NO_CHAT),
                    {
                        currentLayout: a,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        S = (0, s.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
    a.useEffect(() => {
        T.current = v;
    });
    let Z = a.useRef(N),
        { currentDocument: A, rootNode: M } = a.useMemo(() => {
            let e = null != u && x ? u.document : document,
                t = I.document.getElementById('app-mount');
            return {
                currentWindow: I,
                currentDocument: e,
                rootNode: t
            };
        }, [u, x, I]),
        b = l && !x,
        R = v === f.WtW.VIDEO && S && !b,
        j = a.useCallback(
            (e, i) => {
                i !== e && (r.Z.updateLayout(t.id, i, n), i === f.AEg.FULL_SCREEN && t.isPrivate() && p.S.dispatch(f.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        L = a.useCallback(
            (e) => {
                if (null != M)
                    e === f.AEg.FULL_SCREEN &&
                        (j(e, Z.current),
                        (0, E.Pr)((e) => {
                            Z.current = e;
                        }, A));
            },
            [A, j, M]
        ),
        P = a.useCallback(
            (e) => () => {
                null != M && (e !== f.AEg.FULL_SCREEN ? ((Z.current = e), j(e, f.AEg.FULL_SCREEN), (0, E.Dj)(M)) : L(e));
            },
            [j, L, M]
        );
    return (a.useEffect(() => {
        let e = () => {
            null != M && !(0, E.rB)(M, A) && N === f.AEg.FULL_SCREEN && P(N)();
        };
        return (
            A.addEventListener(E.NO, e),
            () => {
                A.removeEventListener(E.NO, e);
            }
        );
    }, [A, N, P, M]),
    a.useEffect(
        () => (
            m.default.track(f.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: x ? 'popout' : N,
                ...(0, o.AB)(t.id)
            }),
            () => {
                !(x && (0, _.isMac)()) && L(N);
            }
        ),
        [N, x]
    ),
    a.useEffect(() => {
        null != M && T.current === f.WtW.VIDEO && v === f.WtW.VOICE && (0, E.Pr)(M, A);
    }, [A, v, T, M]),
    a.useEffect(() => {
        !S && x && g();
    }, [S, x]),
    R)
        ? (0, i.jsx)(d.Z, {
              themeable: !1,
              node: M,
              guestWindow: u,
              className: C.rightTrayIcon,
              onClick: P(N)
          })
        : null;
}
