"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(433517),
  u = n(570140),
  _ = n(601993);
let d = "SpellcheckStore",
  c = !0,
  E = new Set;

function I() {
  l.K.set(d, {
    enabled: c,
    learnedWords: E
  })
}
class T extends(i = a.ZP.Store) {
  initialize() {
    let e = l.K.get(d);
    null != e && (c = e.enabled, E = new Set(e.learnedWords), (0, _.gL)(c), (0, _.fG)(E))
  }
  isEnabled() {
    return c
  }
  hasLearnedWord(e) {
    return E.has(e.toLocaleLowerCase())
  }
}
o = "SpellcheckStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new T(u.Z, {
  SPELLCHECK_TOGGLE() {
    c = !c, (0, _.gL)(c), I()
  },
  SPELLCHECK_LEARN_WORD(e) {
    let {
      word: t
    } = e;
    E.add(t.toLocaleLowerCase()), (0, _.fG)(E), I()
  },
  SPELLCHECK_UNLEARN_WORD(e) {
    let {
      word: t
    } = e;
    E.delete(t.toLocaleLowerCase()), (0, _.fG)(E), I()
  },
  I18N_LOAD_SUCCESS(e) {
    let {
      locale: t
    } = e;
    (0, _._2)(t)
  }
})