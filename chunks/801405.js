n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(570140),
  r = n(475179),
  o = n(367907),
  c = n(358221),
  d = n(788983),
  u = n(268353),
  h = n(944486),
  p = n(626135),
  m = n(585483),
  _ = n(358085),
  f = n(228488),
  E = n(981631),
  C = n(495585);
let g = () => {
  s.Z.wait(() => d.xv(E.KJ3.CHANNEL_CALL_POPOUT));
};

function I(e) {
  let {
channel: t,
appContext: n,
popoutOpen: s,
popoutWindow: d,
currentWindow: I
  } = e, x = n === E.IlC.POPOUT, T = a.useRef(null), {
currentLayout: v,
mode: N
  } = (0, l.cj)([c.Z], () => {
let e = c.Z.getMode(t.id),
  i = n === E.IlC.POPOUT;
i && (e = E.WtW.VIDEO);
let a = e === E.WtW.VIDEO ? c.Z.getLayout(t.id, n) : E.AEg.MINIMUM;
return i && a !== E.AEg.FULL_SCREEN && (a = E.AEg.NO_CHAT), {
  currentLayout: a,
  mode: e
};
  }, [
t,
n
  ]), S = (0, l.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
  a.useEffect(() => {
T.current = N;
  });
  let Z = a.useRef(v),
{
  currentDocument: A,
  rootNode: M
} = a.useMemo(() => {
  let e = null != d && x ? d.document : document,
    t = I.document.getElementById('app-mount');
  return {
    currentWindow: I,
    currentDocument: e,
    rootNode: t
  };
}, [
  d,
  x,
  I
]),
b = s && !x,
R = N === E.WtW.VIDEO && S && !b,
j = a.useCallback((e, i) => {
  i !== e && (r.Z.updateLayout(t.id, i, n), i === E.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(E.CkL.TEXTAREA_BLUR));
}, [
  n,
  t
]),
L = a.useCallback(e => {
  if (null != M)
    e === E.AEg.FULL_SCREEN && (j(e, Z.current), (0, f.Pr)(e => {
      Z.current = e;
    }, A));
}, [
  A,
  j,
  M
]),
P = a.useCallback(e => () => {
  null != M && (e !== E.AEg.FULL_SCREEN ? (Z.current = e, j(e, E.AEg.FULL_SCREEN), (0, f.Dj)(M)) : L(e));
}, [
  j,
  L,
  M
]);
  return (a.useEffect(() => {
let e = () => {
  null != M && !(0, f.rB)(M, A) && v === E.AEg.FULL_SCREEN && P(v)();
};
return A.addEventListener(f.NO, e), () => {
  A.removeEventListener(f.NO, e);
};
  }, [
A,
v,
P,
M
  ]), a.useEffect(() => (p.default.track(E.rMx.VIDEO_LAYOUT_TOGGLED, {
video_layout: x ? 'popout' : v,
...(0, o.AB)(t.id)
  }), () => {
!(x && (0, _.isMac)()) && L(v);
  }), [
v,
x
  ]), a.useEffect(() => {
null != M && T.current === E.WtW.VIDEO && N === E.WtW.VOICE && (0, f.Pr)(M, A);
  }, [
A,
N,
T,
M
  ]), a.useEffect(() => {
!S && x && g();
  }, [
S,
x
  ]), R) ? (0, i.jsx)(u.Z, {
themeable: !1,
node: M,
guestWindow: d,
className: C.rightTrayIcon,
onClick: P(v)
  }) : null;
}