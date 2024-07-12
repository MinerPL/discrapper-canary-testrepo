n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(519938),
  s = n(317381),
  l = n(988980),
  u = n(917107),
  c = n(866885),
  d = n(358221),
  _ = n(928518),
  E = n(210887),
  f = n(442917),
  h = n(592125),
  p = n(366050),
  m = n(944486),
  I = n(451478),
  T = n(518774),
  g = n(823379),
  S = n(981631),
  A = n(918559),
  N = n(354459);
let v = {
  [S.NYg.VIDEO]: f.Z,
  [S.NYg.EMBED_IFRAME]: c.Z
};
class O extends i.PureComponent {
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
return (0, r.jsx)(T.Z, {
  pictureInPictureComponents: v,
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
  _.Z,
  s.ZP,
  I.Z,
  E.Z,
  h.Z,
  m.Z,
  p.Z,
  d.Z
], e => {
  var t, n, r, i;
  let a;
  let o, {
  showInPopoutWindow: c = !1,
  disallowTextActivity: f = !1
} = e,
T = _.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
v = s.ZP.getCurrentEmbeddedActivity(),
O = null != v && !(0, u.Z)(v.channelId, h.Z, m.Z),
R = s.ZP.getActivityPanelMode(),
C = null != v && O && R === A.Ez.PANEL,
y = null != v && (null === (t = d.Z.getSelectedParticipant(v.channelId)) || void 0 === t ? void 0 : t.type) === N.fO.ACTIVITY,
D = I.Z.windowSize();
  if (T && (f && C || !C)) {
let e = _.Z.getWindow(S.KJ3.CHANNEL_CALL_POPOUT);
D = null == e ? D : {
  width: e.innerWidth,
  height: e.innerHeight
};
  }!f && C ? a = S.IlC.APP : c && (a = S.IlC.POPOUT), o = f && O ? null : O || !T || c ? null != v && R === A.Ez.PANEL && O ? null !== (n = p.Z.pipActivityWindow) && void 0 !== n ? n : p.Z.pipVideoWindow : null !== (r = p.Z.pipVideoWindow) && void 0 !== r ? r : p.Z.pipActivityWindow : null;
  let L = Array.from(p.Z.pipWindows.values()),
b = L.find(e => e.component === S.NYg.VIDEO),
M = [
  b,
  L.find(e => e.component === S.NYg.EMBED_IFRAME)
].filter(g.lm),
P = (C || y) && null != v && (0, l.q)(v.applicationId);
  return {
selectedPIPWindow: o,
pipWindows: M,
maxX: D.width,
maxY: D.height,
theme: E.Z.theme,
dockedRect: p.Z.getDockedRect(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : ''),
appContext: a,
roundCorners: !P
  };
})(O);