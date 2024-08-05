n.d(e, {
  U3: function() {
return p;
  },
  XM: function() {
return u;
  },
  hd: function() {
return c;
  },
  lI: function() {
return l;
  },
  py: function() {
return d;
  }
});
var a = n(481060),
  o = n(819640),
  r = n(585483),
  i = n(981631);
let s = () => o.Z.hasLayers() || (0, a.hasAnyModalOpen)(),
  l = 12633 == n.j ? {
binds: ['right'],
comboKeysBindGlobal: !0,
action() {
  if (!s())
    return r.S.dispatch(i.CkL.CAROUSEL_NEXT), !1;
}
  } : null,
  c = 12633 == n.j ? {
binds: ['left'],
comboKeysBindGlobal: !0,
action() {
  if (!s())
    return r.S.dispatch(i.CkL.CAROUSEL_PREV), !1;
}
  } : null,
  u = {
binds: [
  'right',
  'down',
  'space'
],
comboKeysBindGlobal: !0,
action: () => (r.S.dispatch(i.CkL.MODAL_CAROUSEL_NEXT), !1)
  },
  d = {
binds: [
  'left',
  'up'
],
comboKeysBindGlobal: !0,
action: () => (r.S.dispatch(i.CkL.MODAL_CAROUSEL_PREV), !1)
  },
  p = {
binds: ['esc'],
comboKeysBindGlobal: !0,
action() {
  if (r.S.hasSubscribers(i.CkL.MODAL_CLOSE))
    return r.S.dispatch(i.CkL.MODAL_CLOSE), !1;
}
  };