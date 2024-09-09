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
    h = n(740492),
    p = n(442917),
    I = n(592125),
    m = n(366050),
    T = n(944486),
    S = n(451478),
    g = n(823379),
    A = n(981631),
    N = n(918559),
    O = n(354459);
function R(e, t, n) {
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
let v = {
    [A.NYg.VIDEO]: p.Z,
    [A.NYg.EMBED_IFRAME]: c.Z
};
class C extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipType: n, pipWidth: i, maxX: a, maxY: s, theme: o, dockedRect: l, appContext: u, roundCorners: c } = this.props;
        return (0, r.jsx)(_.Z, {
            pictureInPictureComponents: v,
            selectedPIPWindow: e,
            pipWindows: t,
            pipType: n,
            pipWidth: i,
            maxX: a,
            maxY: s,
            dockedRect: l,
            theme: o,
            onWindowMove: this.handleWindowMove,
            onWindowResize: this.handleWindowResize,
            appContext: u,
            roundCorners: c
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleWindowMove', (e, t) => {
                s.Ao(e, t);
            }),
            R(this, 'handleWindowResize', (e) => {
                s.d7(e, this.props.pipType);
            });
    }
}
t.Z = a.ZP.connectStores([E.Z, o.ZP, S.Z, f.Z, I.Z, T.Z, m.Z, d.Z, h.ZP], (e) => {
    var t, n, r, i;
    let a,
        { inPopoutWindow: s = !1 } = e,
        c = E.Z.getWindowOpen(A.KJ3.CHANNEL_CALL_POPOUT),
        _ = o.ZP.getCurrentEmbeddedActivity(),
        p = null != _ && !(0, u.Z)(_.channelId, I.Z, T.Z),
        R = o.ZP.getActivityPanelMode(),
        v = p && R === N.Ez.PANEL,
        C = null != _ && (null === (t = d.Z.getSelectedParticipant(_.channelId)) || void 0 === t ? void 0 : t.type) === O.fO.ACTIVITY,
        y = S.Z.windowSize();
    if (s) {
        let e = E.Z.getWindow(A.KJ3.CHANNEL_CALL_POPOUT);
        y =
            null == e
                ? y
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let L = s ? A.IlC.POPOUT : A.IlC.APP;
    a = s && p ? null : s || !c || p ? (null != _ && v ? (null !== (n = m.Z.pipActivityWindow) && void 0 !== n ? n : m.Z.pipVideoWindow) : null !== (r = m.Z.pipVideoWindow) && void 0 !== r ? r : m.Z.pipActivityWindow) : null;
    let D = O.cL.VIDEO,
        b = Array.from(m.Z.pipWindows.values()),
        M = m.Z.pipWidth(D),
        P = b.find((e) => e.component === A.NYg.VIDEO),
        U = [P, b.find((e) => e.component === A.NYg.EMBED_IFRAME)].filter(g.lm),
        w = h.ZP.callChatSidebarWidth,
        x = T.Z.getVoiceChannelId(),
        G = T.Z.getChannelId() === x,
        k = null != x && d.Z.getChatOpen(x),
        B = (v || C) && null != _ && (0, l.q)(_.applicationId);
    return {
        selectedPIPWindow: a,
        pipWindows: U,
        pipWidth: M,
        pipType: D,
        maxX: y.width - (G && k ? w : 0),
        maxY: y.height,
        theme: f.Z.theme,
        dockedRect: m.Z.getDockedRect(null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : ''),
        appContext: L,
        roundCorners: !B
    };
})(C);
