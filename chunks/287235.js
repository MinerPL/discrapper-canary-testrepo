"use strict";
n.d(t, {
  JD: function() {
    return E
  },
  Wd: function() {
    return d
  },
  mF: function() {
    return _
  }
}), n(735250);
var i = n(470079),
  r = n(372817),
  s = n(5967),
  o = n(420212);
let a = "data-jump-section",
  l = "global",
  u = i.createContext(l);

function _() {
  let e = i.useContext(u);
  return i.useMemo(() => ({
    [a]: e
  }), [e])
}

function d(e) {
  let t = _();
  return e.children(t)
}
async function c(e) {
  var t, n, i, u;
  if (e.key !== o.LT) return;
  let _ = (0, s.uB)(e);
  if (null == _) return;
  let d = null,
    c = null,
    E = e.target;
  for (; null != E;) {
    if (E.hasAttribute(a)) {
      d = E.getAttribute(a), c = E;
      break
    }
    E = E.parentElement
  }
  let I = (0, r.E)({
    getFocusableElements: () => Array.from(_.querySelectorAll("[".concat(a, '="').concat(null != d ? d : l, '"]'))),
    getActiveElement: () => _.activeElement
  });
  if ((null === (t = (0, s.uB)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == c) {
    null === (n = I.getFirstFocusableElement()) || void 0 === n || n.focus();
    return
  }
  e.getModifierState("Shift") ? null === (i = await I.getPreviousFocusableElement({
    wrap: !0,
    from: c
  })) || void 0 === i || i.focus() : null === (u = await I.getNextFocusableElement({
    wrap: !0,
    from: c
  })) || void 0 === u || u.focus()
}

function E(e) {
  i.useEffect(() => {
    if (e) return window.addEventListener("keydown", c), () => {
      window.removeEventListener("keydown", c)
    }
  }, [e])
}