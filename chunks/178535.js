"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(607070),
  r = n(981631);

function s(e, t, n) {
  var s, o, a, l, u, _, d, c;
  let E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    key: null !== (o = null !== (s = t.key) && void 0 !== s ? s : E) && void 0 !== o ? o : "modal",
    modal: e,
    animation: null !== (a = t.animation) && void 0 !== a ? a : i.Z.useReducedMotion ? r.fMv.FADE : r.fMv.SLIDE_UP,
    shouldPersistUnderModals: null !== (l = t.shouldPersistUnderModals) && void 0 !== l && l,
    props: n,
    backdropStyle: null !== (u = t.backdropStyle) && void 0 !== u ? u : null,
    backdropInstant: null !== (_ = t.backdropInstant) && void 0 !== _ && _,
    disableAnimation: null !== (d = t.disableAnimation) && void 0 !== d && d,
    closable: "boolean" != typeof t.closable || t.closable,
    label: null !== (c = t.label) && void 0 !== c ? c : "",
    callbacks: {}
  }
}