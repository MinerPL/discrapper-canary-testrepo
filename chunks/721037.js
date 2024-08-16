n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(519938),
    o = n(317381),
    l = n(988980),
    u = n(917107),
    c = n(866885),
    d = n(358221),
    _ = n(241915),
    E = n(928518),
    f = n(210887),
    h = n(442917),
    p = n(592125),
    m = n(366050),
    I = n(944486),
    T = n(451478),
    g = n(823379),
    S = n(981631),
    A = n(918559),
    N = n(354459);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = {
    [S.NYg.VIDEO]: h.Z,
    [S.NYg.EMBED_IFRAME]: c.Z
};
class R extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: s, dockedRect: o, appContext: l, roundCorners: u } = this.props;
        return (0, r.jsx)(_.Z, {
            pictureInPictureComponents: O,
            selectedPIPWindow: e,
            pipWindows: t,
            pipWidth: n,
            maxX: i,
            maxY: a,
            dockedRect: o,
            theme: s,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: l,
            roundCorners: u
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'handleWindowMove', (e, t) => {
                s.Ao(e, t);
            }),
            v(this, 'handleWindowResize', (e, t) => {
                s.d7(t);
            });
    }
}
t.Z = a.ZP.connectStores([E.Z, o.ZP, T.Z, f.Z, p.Z, I.Z, m.Z, d.Z], (e) => {
    var t, n, r, i;
    let a,
        { inPopoutWindow: s = !1 } = e,
        c = E.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
        _ = o.ZP.getCurrentEmbeddedActivity(),
        h = null != _ && !(0, u.Z)(_.channelId, p.Z, I.Z),
        v = o.ZP.getActivityPanelMode(),
        O = h && v === A.Ez.PANEL,
        R = null != _ && (null === (t = d.Z.getSelectedParticipant(_.channelId)) || void 0 === t ? void 0 : t.type) === N.fO.ACTIVITY,
        C = T.Z.windowSize();
    if (s) {
        let e = E.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
        C =
            null == e
                ? C
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let y = s ? S.IlC.POPOUT : S.IlC.APP;
    a = s && h ? null : s || !c || h ? (null != _ && O ? (null !== (n = m.Z.pipActivityWindow) && void 0 !== n ? n : m.Z.pipVideoWindow) : null !== (r = m.Z.pipVideoWindow) && void 0 !== r ? r : m.Z.pipActivityWindow) : null;
    let D = Array.from(m.Z.pipWindows.values()),
        L = m.Z.pipWidth,
        b = D.find((e) => e.component === S.NYg.VIDEO),
        M = [b, D.find((e) => e.component === S.NYg.EMBED_IFRAME)].filter(g.lm),
        P = (O || R) && null != _ && (0, l.q)(_.applicationId);
    return {
        selectedPIPWindow: a,
        pipWindows: M,
        pipWidth: L,
        maxX: C.width,
        maxY: C.height,
        theme: f.Z.theme,
        dockedRect: m.Z.getDockedRect(null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : ''),
        appContext: y,
        roundCorners: !P
    };
})(R);
