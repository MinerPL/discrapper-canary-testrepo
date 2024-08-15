n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(607070),
  i = n(981631);

function a(e, t, n) {
  var a, s, o, l, u, c, d, _;
  let E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return {
key: null !== (s = null !== (a = t.key) && void 0 !== a ? a : E) && void 0 !== s ? s : 'modal',
modal: e,
animation: null !== (o = t.animation) && void 0 !== o ? o : r.Z.useReducedMotion ? i.fMv.FADE : i.fMv.SLIDE_UP,
shouldPersistUnderModals: null !== (l = t.shouldPersistUnderModals) && void 0 !== l && l,
props: n,
backdropStyle: null !== (u = t.backdropStyle) && void 0 !== u ? u : null,
backdropInstant: null !== (c = t.backdropInstant) && void 0 !== c && c,
disableAnimation: null !== (d = t.disableAnimation) && void 0 !== d && d,
closable: 'boolean' != typeof t.closable || t.closable,
label: null !== (_ = t.label) && void 0 !== _ ? _ : '',
callbacks: {}
  };
}