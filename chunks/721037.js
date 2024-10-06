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
    },
    C = {
        minWidth: O.Rv[O.cL.VIDEO],
        maxWidth: O.$i[O.cL.VIDEO]
    };
class L extends i.PureComponent {
    render() {
        let { selectedPIPWindow: e, pipWindows: t, pipWidth: n, maxX: i, maxY: a, theme: s, dockedRect: o, appContext: l, roundCorners: u } = this.props;
        return (0, r.jsx)(_.Z, {
            pictureInPictureComponents: v,
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
            roundCorners: u,
            resizeConfig: C
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleWindowMove', (e, t) => {
                s.Ao(e, t);
            }),
            R(this, 'handleWindowResize', (e) => {
                s.d7(e, O.cL.VIDEO);
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
        L = S.Z.windowSize();
    if (s) {
        let e = E.Z.getWindow(A.KJ3.CHANNEL_CALL_POPOUT);
        L =
            null == e
                ? L
                : {
                      width: e.innerWidth,
                      height: e.innerHeight
                  };
    }
    let y = s ? A.IlC.POPOUT : A.IlC.APP;
    a = s && p ? null : s || !c || p ? (null != _ && v ? (null !== (n = m.Z.pipActivityWindow) && void 0 !== n ? n : m.Z.pipVideoWindow) : null !== (r = m.Z.pipVideoWindow) && void 0 !== r ? r : m.Z.pipActivityWindow) : null;
    let D = Array.from(m.Z.pipWindows.values()),
        b = m.Z.pipWidth(O.cL.VIDEO),
        M = D.find((e) => e.component === A.NYg.VIDEO),
        P = [M, D.find((e) => e.component === A.NYg.EMBED_IFRAME)].filter(g.lm),
        U = h.ZP.callChatSidebarWidth,
        w = T.Z.getVoiceChannelId(),
        x = T.Z.getChannelId() === w,
        G = null != w && d.Z.getChatOpen(w),
        k = v || C,
        B = k && null != _ && (0, l.q)(_.applicationId),
        F = !k && null != a && x;
    return {
        selectedPIPWindow: a,
        pipWindows: P,
        pipWidth: b,
        maxX: L.width - (F && G ? U : 0),
        maxY: L.height,
        theme: f.Z.theme,
        dockedRect: m.Z.getDockedRect(null !== (i = null == a ? void 0 : a.id) && void 0 !== i ? i : ''),
        appContext: y,
        roundCorners: !B
    };
})(L);
