"use strict";
var i = n(470079),
  r = n(442837),
  s = n(952265),
  o = n(481060),
  a = n(714338),
  l = n(857595),
  u = n(607070),
  _ = n(627845),
  d = n(556296),
  c = n(5967),
  E = n(13140),
  I = n(981631),
  T = n(420212);

function h(e) {
  let t = e.ctrlKey || e.altKey || e.metaKey;
  e.key === T.mR.Tab && !t && !__OVERLAY__ && !(0, s.$s)() && _.Z.maybeShowKeyboardNavigationExplainerModal()
}

function S() {
  (0, l.rf)()
}
t.Z = function(e, t) {
  let n = (0, r.e7)([u.Z], () => u.Z.keyboardModeEnabled);
  (0, o.useFocusJumpSectionManager)(n);
  let s = (0, i.useCallback)(e => {
    ! function(e, t) {
      var n, i;
      let r = (0, c.VG)(null === (n = (0, c.uB)(e)) || void 0 === n ? void 0 : n.activeElement);
      if (r && e.key !== T.mR.Tab || e.ctrlKey || e.altKey || e.metaKey || e.key !== T.mR.Tab && e.shiftKey) return;
      let s = function(e) {
        let t = E.C$("shift"),
          n = E.C$("tab");
        if (e.key === T.mR.Tab && e.shiftKey && null != t && null != n) return [
          [I.MoX.KEYBOARD_KEY, t],
          [I.MoX.KEYBOARD_KEY, n]
        ];
        let i = T.el.get(e.key);
        if (null != i) {
          let e = E.C$(i);
          if (null != e) return [
            [I.MoX.KEYBOARD_KEY, e]
          ]
        }
        return null
      }(e);
      null != s && !d.Z.hasExactKeybind(s) && !a.Z.hasBind(null !== (i = E.H9(s[0])) && void 0 !== i ? i : "") && ((0, l.Qj)(), r && !t && e.preventDefault())
    }(e, t)
  }, [t]);
  return (0, i.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", S), e.addEventListener("keydown", h)) : e.addEventListener("keydown", s), () => {
    n ? (e.removeEventListener("mousedown", S), e.removeEventListener("keydown", h)) : e.removeEventListener("keydown", s)
  }), [e, s, n]), n
}