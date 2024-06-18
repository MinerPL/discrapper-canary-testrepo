"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(519938),
  a = n(317381),
  l = n(917107),
  u = n(385326),
  _ = n(928518),
  d = n(210887),
  c = n(442917),
  E = n(592125),
  I = n(366050),
  T = n(944486),
  h = n(451478),
  S = n(518774),
  f = n(823379),
  N = n(981631),
  A = n(918559);
let m = {
  [N.NYg.VIDEO]: c.Z,
  [N.NYg.EMBED_IFRAME]: u.Z
};
class O extends r.PureComponent {
  render() {
    let {
      selectedPIPWindow: e,
      pipWindows: t,
      maxX: n,
      maxY: r,
      theme: s,
      dockedRect: o,
      appContext: a,
      roundCorners: l
    } = this.props;
    return (0, i.jsx)(S.Z, {
      pictureInPictureComponents: m,
      selectedPIPWindow: e,
      pipWindows: t,
      maxX: n,
      maxY: r,
      dockedRect: o,
      theme: s,
      onWindowMove: this.handleWindowMove,
      appContext: a,
      roundCorners: l
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "handleWindowMove", i = (e, t) => {
      o.Ao(e, t)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = s.ZP.connectStores([_.Z, a.ZP, h.Z, d.Z, E.Z, I.Z, T.Z], e => {
  var t, n, i;
  let r;
  let s, {
      showInPopoutWindow: o = !1,
      disallowTextActivity: u = !1
    } = e,
    c = _.Z.getWindowOpen(N.KJ3.CHANNEL_CALL_POPOUT),
    S = a.ZP.getCurrentEmbeddedActivity(),
    m = null != S && !(0, l.Z)(S.channelId, E.Z, T.Z),
    O = a.ZP.getActivityPanelMode(),
    R = null != S && m && O === A.Ez.PANEL,
    C = h.Z.windowSize();
  if (c && (u && R || !R)) {
    let e = _.Z.getWindow(N.KJ3.CHANNEL_CALL_POPOUT);
    C = null == e ? C : {
      width: e.innerWidth,
      height: e.innerHeight
    }
  }!u && R ? r = N.IlC.APP : o && (r = N.IlC.POPOUT), s = u && m ? null : m || !c || o ? null != S && O === A.Ez.PANEL && m ? null !== (t = I.Z.pipActivityWindow) && void 0 !== t ? t : I.Z.pipVideoWindow : null !== (n = I.Z.pipVideoWindow) && void 0 !== n ? n : I.Z.pipActivityWindow : null;
  let p = Array.from(I.Z.pipWindows.values()),
    g = p.find(e => e.component === N.NYg.VIDEO);
  return {
    selectedPIPWindow: s,
    pipWindows: [g, p.find(e => e.component === N.NYg.EMBED_IFRAME)].filter(f.lm),
    maxX: C.width,
    maxY: C.height,
    theme: d.Z.theme,
    dockedRect: I.Z.getDockedRect(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : ""),
    appContext: r,
    roundCorners: !0
  }
})(O)