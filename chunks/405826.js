"use strict";
n.d(t, {
  N: function() {
    return N
  }
}), n(757143), n(47120);
var i = n(623279),
  r = n(392711),
  s = n.n(r),
  o = n(374470),
  a = n(579806),
  l = n(710845),
  u = n(706454),
  _ = n(823379),
  d = n(598105),
  c = n(643413);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = new l.Z("Spellchecker"),
  T = null === a.Z || void 0 === a.Z ? void 0 : a.Z.spellCheck;

function h(e) {
  var t;
  e = null !== (t = c.Z[e]) && void 0 !== t ? t : e;
  let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
  if (null == n || null == n.langtag.language || null == n.langtag.region) {
    I.error("".concat(e, " is not a valid locale."));
    return
  }
  let {
    language: r,
    region: s
  } = n.langtag;
  return "".concat(r.language.toLowerCase(), "-").concat(s.toUpperCase())
}
class S {
  get enabled() {
    return this._enabled
  }
  set enabled(e) {
    this._enabled = e
  }
  setLearnedWords(e) {
    T.setLearnedWords(e)
  }
  setLocale(e) {
    var t;
    null === (t = T.setLocale(e)) || void 0 === t || t.then(t => {
      I.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
    })
  }
  setAppLocale(e) {
    this.regionPreference = e.split("-")[1]
  }
  detectLanguage(e) {
    if (!!this.enabled) this.languageDetector.process(e)
  }
  getAvailableLanguages(e) {
    let t = {};
    return e.forEach(e => {
      var n;
      let [i] = e.split("-");
      t[i] = null !== (n = t[i]) && void 0 !== n ? n : e
    }), t
  }
  isMisspelled(e, t) {
    return "" !== this.misspelledWord && e === this.misspelledWord
  }
  getCorrectionsForMisspelling(e, t) {
    return this.isMisspelled(e, t) ? this.corrections : []
  }
  replaceMisspelling(e) {
    T.replaceMisspelling(e)
  }
  constructor(e) {
    E(this, "languageDetector", void 0), E(this, "regionPreference", void 0), E(this, "_enabled", !0), E(this, "misspelledWord", ""), E(this, "corrections", []);
    let [t, n] = u.default.locale.split("-");
    this.regionPreference = n;
    let i = this.getAvailableLanguages(e);
    this.languageDetector = new d.Z(t, n => {
      let r = "".concat(n, "-").concat(this.regionPreference);
      if (-1 !== e.indexOf(r)) this.setLocale(r);
      else {
        var s;
        let e = null !== (s = i[n]) && void 0 !== s ? s : c.Z[t];
        null != e && this.setLocale(e)
      }
    }), T.on("spellcheck-result", (e, t) => {
      this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
    })
  }
}
let f = s().debounce((e, t) => {
  let n = function(e) {
    return null == e ? null : (0, o.k)(e, HTMLInputElement) || (0, o.k)(e, HTMLTextAreaElement) ? e.value : (0, o.k)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
  }(t);
  null != n && e.detectLanguage(n)
}, 250);
async function N() {
  var e, t;
  let n = new S((null !== (e = await T.getAvailableDictionaries()) && void 0 !== e ? e : []).map(h).filter(_.lm));
  return t = n, null != document.body && document.body.addEventListener("beforeinput", e => f(t, e.target), !0), n
}