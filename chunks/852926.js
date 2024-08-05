n.d(t, {
  GC: function() {
return I;
  },
  _X: function() {
return E;
  },
  em: function() {
return h;
  },
  s0: function() {
return _;
  }
});
var i = n(13245),
  a = n(808506),
  s = n(998502),
  r = n(13140),
  l = n(996106),
  o = n(914946),
  c = n(186901),
  d = n(981631);
let u = ['207646673902501888'];

function _(e) {
  return a.Z.isReady(e) ? (i.Z.setLocked(!1, e), {
lock() {
  i.Z.setLocked(!0, e);
},
context: d.IlC.OVERLAY
  }) : (s.ZP.focus(null, !0), {
lock() {
  s.ZP.setForegroundProcess(e);
},
context: d.IlC.APP
  });
}
let h = async (e, t, n) => {
  if ((0, o.YK)(e, t), (null == n || '' === n) && (0, o.s9)(t))
return e.authorization.scopes = [
  c.cE,
  c.CN
], Promise.resolve();
  if (null == n || '' === n)
return Promise.reject(new l.Z({
  closeCode: d.$VG.INVALID_CLIENTID
}, 'No Client ID Specified'));
  let i = s.ZP.releaseChannel !== d.R5N.CANARY && !u.includes(n) && e.transport !== c.He.POST_MESSAGE;
  return await (0, o.vv)(n, i), (0, o.fy)(e, n, t);
}, E = () => (0, o.tr)(e => {
  let t = [];
  if (null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut))
t = e.modeOptions.shortcut.map(e => {
  var t;
  return {
    type: e[0],
    code: e[1],
    name: null !== (t = (0, r.H9)(e)) && void 0 !== t ? t : 'unknown'
  };
});
  return t;
}), I = e => (0, o.FJ)(e, e => {
  let t = '';
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, r.BB)(e.modeOptions.shortcut)), t;
});