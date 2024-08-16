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
    f = n(228488),
    E = n(981631),
    g = n(394738);
let C = () => {
    l.Z.wait(() => u.xv(E.KJ3.CHANNEL_CALL_POPOUT));
};
function I(e) {
    let { channel: t, appContext: n, popoutOpen: l, popoutWindow: u, currentWindow: I } = e,
        x = n === E.IlC.POPOUT,
        T = a.useRef(null),
        { currentLayout: N, mode: v } = (0, s.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    i = n === E.IlC.POPOUT;
                i && (e = E.WtW.VIDEO);
                let a = e === E.WtW.VIDEO ? c.Z.getLayout(t.id, n) : E.AEg.MINIMUM;
                return (
                    i && a !== E.AEg.FULL_SCREEN && (a = E.AEg.NO_CHAT),
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
        R = v === E.WtW.VIDEO && S && !b,
        j = a.useCallback(
            (e, i) => {
                i !== e && (r.Z.updateLayout(t.id, i, n), i === E.AEg.FULL_SCREEN && t.isPrivate() && p.S.dispatch(E.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        L = a.useCallback(
            (e) => {
                if (null != M)
                    e === E.AEg.FULL_SCREEN &&
                        (j(e, Z.current),
                        (0, f.Pr)((e) => {
                            Z.current = e;
                        }, A));
            },
            [A, j, M]
        ),
        P = a.useCallback(
            (e) => () => {
                null != M && (e !== E.AEg.FULL_SCREEN ? ((Z.current = e), j(e, E.AEg.FULL_SCREEN), (0, f.Dj)(M)) : L(e));
            },
            [j, L, M]
        );
    return (a.useEffect(() => {
        let e = () => {
            null != M && !(0, f.rB)(M, A) && N === E.AEg.FULL_SCREEN && P(N)();
        };
        return (
            A.addEventListener(f.NO, e),
            () => {
                A.removeEventListener(f.NO, e);
            }
        );
    }, [A, N, P, M]),
    a.useEffect(
        () => (
            m.default.track(E.rMx.VIDEO_LAYOUT_TOGGLED, {
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
        null != M && T.current === E.WtW.VIDEO && v === E.WtW.VOICE && (0, f.Pr)(M, A);
    }, [A, v, T, M]),
    a.useEffect(() => {
        !S && x && C();
    }, [S, x]),
    R)
        ? (0, i.jsx)(d.Z, {
              themeable: !1,
              node: M,
              guestWindow: u,
              className: g.rightTrayIcon,
              onClick: P(N)
          })
        : null;
}
