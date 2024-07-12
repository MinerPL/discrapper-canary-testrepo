n(47120);
var r, i, a, o, s = n(442837),
  l = n(433517),
  u = n(570140),
  c = n(601993);
let d = 'SpellcheckStore',
  _ = !0,
  E = new Set();

function f() {
  l.K.set(d, {
enabled: _,
learnedWords: E
  });
}
class h extends(r = s.ZP.Store) {
  initialize() {
let e = l.K.get(d);
null != e && (_ = e.enabled, E = new Set(e.learnedWords), (0, c.gL)(_), (0, c.fG)(E));
  }
  isEnabled() {
return _;
  }
  hasLearnedWord(e) {
return E.has(e.toLocaleLowerCase());
  }
}
o = 'SpellcheckStore', (a = 'displayName') in(i = h) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new h(u.Z, {
  SPELLCHECK_TOGGLE() {
_ = !_, (0, c.gL)(_), f();
  },
  SPELLCHECK_LEARN_WORD(e) {
let {
  word: t
} = e;
E.add(t.toLocaleLowerCase()), (0, c.fG)(E), f();
  },
  SPELLCHECK_UNLEARN_WORD(e) {
let {
  word: t
} = e;
E.delete(t.toLocaleLowerCase()), (0, c.fG)(E), f();
  },
  I18N_LOAD_SUCCESS(e) {
let {
  locale: t
} = e;
(0, c._2)(t);
  }
});