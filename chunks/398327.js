n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(241601),
    d = n(601993);
let _ = 'SpellcheckStore',
    E = !0,
    f = new Set();
function h() {
    l.K.set(_, {
        enabled: E,
        learnedWords: f
    });
}
class p extends (r = o.ZP.Store) {
    initialize() {
        let e = l.K.get(_);
        null != e && ((E = e.enabled), (f = new Set(e.learnedWords)), (0, d.gL)(E), (0, d.fG)(f)), (0, c.Ql)(d._2);
    }
    isEnabled() {
        return E;
    }
    hasLearnedWord(e) {
        return f.has(e.toLocaleLowerCase());
    }
}
(s = 'SpellcheckStore'),
    (a = 'displayName') in (i = p)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new p(u.Z, {
        SPELLCHECK_TOGGLE() {
            (E = !E), (0, d.gL)(E), h();
        },
        SPELLCHECK_LEARN_WORD(e) {
            let { word: t } = e;
            f.add(t.toLocaleLowerCase()), (0, d.fG)(f), h();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let { word: t } = e;
            f.delete(t.toLocaleLowerCase()), (0, d.fG)(f), h();
        }
    }));
