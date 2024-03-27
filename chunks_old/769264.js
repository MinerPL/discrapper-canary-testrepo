"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("446674"),
  a = n("95410"),
  s = n("913144"),
  u = n("749866");
let r = "SpellcheckStore",
  c = !0,
  o = new Set;

function i() {
  a.Storage.set(r, {
    enabled: c,
    learnedWords: o
  })
}
class d extends l.default.Store {
  initialize() {
    let e = a.Storage.get(r);
    null != e && (c = e.enabled, o = new Set(e.learnedWords), (0, u.setEnabled)(c), (0, u.setLearnedWords)(o))
  }
  isEnabled() {
    return c
  }
  hasLearnedWord(e) {
    return o.has(e.toLocaleLowerCase())
  }
}
d.displayName = "SpellcheckStore";
var f = new d(s.default, {
  SPELLCHECK_TOGGLE() {
    c = !c, (0, u.setEnabled)(c), i()
  },
  SPELLCHECK_LEARN_WORD(e) {
    let {
      word: t
    } = e;
    o.add(t.toLocaleLowerCase()), (0, u.setLearnedWords)(o), i()
  },
  SPELLCHECK_UNLEARN_WORD(e) {
    let {
      word: t
    } = e;
    o.delete(t.toLocaleLowerCase()), (0, u.setLearnedWords)(o), i()
  },
  I18N_LOAD_SUCCESS(e) {
    let {
      locale: t
    } = e;
    (0, u.setAppLocale)(t)
  }
})