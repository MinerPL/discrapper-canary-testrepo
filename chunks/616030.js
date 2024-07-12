t.d(n, {
  Bk: function() {
return l;
  },
  tK: function() {
return c;
  },
  zC: function() {
return i;
  }
}), t(47120);
var s = t(735250);
t(470079);
var r = t(300395),
  a = t(122890);

function i(e) {
  let {
currentStep: n,
purchaseState: t,
className: i,
pause: c
  } = e, [l, L] = (0, a.z)({
purchaseState: t,
currentStep: n,
initialScene: r.NQ.Scenes.NORMAL,
purchaseScene: r.NQ.Scenes.SPEED_START,
errorScene: r.NQ.Scenes.NORMAL,
successScene: r.NQ.Scenes.FINISH
  });
  return (0, s.jsx)(r.NQ, {
className: i,
nextScene: l,
onScenePlay: e => L(r.NQ.getNextScene(e)),
pauseWhileUnfocused: !1,
pause: c
  });
}

function c(e) {
  let {
currentStep: n,
purchaseState: t,
className: i,
pause: c
  } = e, [l, L] = (0, a.z)({
purchaseState: t,
currentStep: n,
initialScene: r.HC.Scenes.NORMAL,
purchaseScene: r.HC.Scenes.SPEED_START,
errorScene: r.HC.Scenes.NORMAL,
successScene: r.HC.Scenes.FINISH
  });
  return (0, s.jsx)(r.HC, {
className: i,
nextScene: l,
onScenePlay: e => L(r.HC.getNextScene(e)),
pauseWhileUnfocused: !1,
pause: c
  });
}

function l(e) {
  let {
currentStep: n,
purchaseState: t,
className: i,
pause: c
  } = e, [l, L] = (0, a.z)({
purchaseState: t,
currentStep: n,
initialScene: r.Db.Scenes.IDLE_ENTRY,
purchaseScene: r.Db.Scenes.BOOST_START,
errorScene: r.Db.Scenes.ERROR,
successScene: r.Db.Scenes.BOOST_END
  });
  return (0, s.jsx)(r.Db, {
className: i,
nextScene: l,
onScenePlay: e => L(r.Db.getNextScene(e)),
pauseWhileUnfocused: !1,
pause: c
  });
}