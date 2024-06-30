n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(519938), s = n(317381), l = n(917107), u = n(866885), c = n(358221), d = n(928518), _ = n(210887), E = n(442917), f = n(592125), h = n(366050), p = n(944486), m = n(451478), I = n(518774), T = n(823379), g = n(981631), S = n(918559), A = n(354459);
let N = {
    [g.NYg.VIDEO]: E.Z,
    [g.NYg.EMBED_IFRAME]: u.Z
};
class v extends i.PureComponent {
    render() {
        let {
            selectedPIPWindow: e,
            pipWindows: t,
            maxX: n,
            maxY: i,
            theme: a,
            dockedRect: o,
            appContext: s,
            roundCorners: l
        } = this.props;
        return (0, r.jsx)(I.Z, {
            pictureInPictureComponents: N,
            selectedPIPWindow: e,
            pipWindows: t,
            maxX: n,
            maxY: i,
            dockedRect: o,
            theme: a,
            onWindowMove: this.handleWindowMove,
            appContext: s,
            roundCorners: l
        });
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'handleWindowMove', r = (e, t) => {
            o.Ao(e, t);
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = a.ZP.connectStores([
    d.Z,
    s.ZP,
    m.Z,
    _.Z,
    f.Z,
    p.Z,
    h.Z,
    c.Z
], e => {
    var t, n, r, i;
    let a;
    let o, {
            showInPopoutWindow: u = !1,
            disallowTextActivity: E = !1
        } = e, I = d.Z.getWindowOpen(g.KJ3.CHANNEL_CALL_POPOUT), N = s.ZP.getCurrentEmbeddedActivity(), v = null != N && !(0, l.Z)(N.channelId, f.Z, p.Z), O = s.ZP.getActivityPanelMode(), R = null != N && v && O === S.Ez.PANEL, C = null != N && (null === (t = c.Z.getSelectedParticipant(N.channelId)) || void 0 === t ? void 0 : t.type) === A.fO.ACTIVITY, y = m.Z.windowSize();
    if (I && (E && R || !R)) {
        let e = d.Z.getWindow(g.KJ3.CHANNEL_CALL_POPOUT);
        y = null == e ? y : {
            width: e.innerWidth,
            height: e.innerHeight
        };
    }
    !E && R ? a = g.IlC.APP : u && (a = g.IlC.POPOUT), o = E && v ? null : v || !I || u ? null != N && O === S.Ez.PANEL && v ? null !== (n = h.Z.pipActivityWindow) && void 0 !== n ? n : h.Z.pipVideoWindow : null !== (r = h.Z.pipVideoWindow) && void 0 !== r ? r : h.Z.pipActivityWindow : null;
    let D = Array.from(h.Z.pipWindows.values()), L = D.find(e => e.component === g.NYg.VIDEO);
    return {
        selectedPIPWindow: o,
        pipWindows: [
            L,
            D.find(e => e.component === g.NYg.EMBED_IFRAME)
        ].filter(T.lm),
        maxX: y.width,
        maxY: y.height,
        theme: _.Z.theme,
        dockedRect: h.Z.getDockedRect(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : ''),
        appContext: a,
        roundCorners: !C
    };
})(v);
