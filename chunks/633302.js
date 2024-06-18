"use strict";
n.d(t, {
  dy: function() {
    return R
  },
  gw: function() {
    return f
  }
}), n(411104), n(47120), n(757143), n(653041), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(946188),
  o = n(176354),
  a = n(906411);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = null,
  _ = {},
  d = {},
  c = {},
  E = {},
  I = [],
  T = 0,
  h = 0,
  S = {
    "1f3fb": 0,
    "1f3fc": 1,
    "1f3fd": 2,
    "1f3fe": 3,
    "1f3ff": 4
  },
  f = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
  N = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  A = n(523558),
  m = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
  O = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < f.length; e++) {
  let t = f[e];
  c["skin-tone-".concat(e + 1)] = t, E[t] = "skin-tone-".concat(e + 1)
}
class R {
  get names() {
    return this.emojiObject.names
  }
  get allNamesString() {
    return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
  }
  get unicodeVersion() {
    var e;
    return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0
  }
  get hasDiversity() {
    return this.emojiObject.hasDiversity
  }
  get hasMultiDiversity() {
    return this.emojiObject.hasMultiDiversity
  }
  get hasDiversityParent() {
    return this.emojiObject.hasDiversityParent
  }
  get hasMultiDiversityParent() {
    return this.emojiObject.hasMultiDiversityParent
  }
  get managed() {
    return !0
  }
  get animated() {
    return !1
  }
  get defaultDiversityChild() {
    if (this.hasDiversity && null != u) {
      let e = function(e) {
        let t = s.Z.convert.toCodePoint(e);
        return null != t ? t : ""
      }(u);
      return this.diversityChildren[e]
    }
    return null
  }
  get url() {
    let e = this.defaultDiversityChild;
    return null != e ? o.ZP.getURL(e.surrogates) : o.ZP.getURL(this.surrogates)
  }
  get name() {
    return this.hasDiversity && null != u ? "".concat(this.uniqueName, "::").concat(E[u]) : this.uniqueName
  }
  get optionallyDiverseSequence() {
    let e = this.defaultDiversityChild;
    return null != e ? e.surrogates : this.surrogates
  }
  forEachDiversity(e) {
    null != this.diversityChildren && r().each(this.diversityChildren, e)
  }
  forEachName(e) {
    r().each(this.names, e)
  }
  setSpriteSheetIndex(e) {
    this.index = e, this.useSpriteSheet = !0
  }
  constructor(e) {
    l(this, "emojiObject", void 0), l(this, "type", void 0), l(this, "uniqueName", void 0), l(this, "surrogates", void 0), l(this, "diversityChildren", void 0), l(this, "originalName", void 0), l(this, "id", void 0), l(this, "guildId", void 0), l(this, "index", void 0), l(this, "useSpriteSheet", void 0), this.emojiObject = e, this.type = a.B.UNICODE, this.uniqueName = e.names[0];
    if (this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
      for (let t of e.diversityChildren)
        if (null != t.diversity) {
          let e = t.diversity.join("-");
          this.diversityChildren[e] = new R(t)
        }
    }
  }
}
let C = n(5420);
for (let e in C) {
  let t = C[e].map(e => {
    let t = new R(e),
      n = t.surrogates,
      i = t.uniqueName;
    if (t.setSpriteSheetIndex(t.hasDiversity ? T++ : h++), E[n] = i, 0 > n.indexOf("‍")) {
      let e = n.replace("️", "");
      e !== n && (E[e] = i)
    }
    for (let e of t.names) d[e] = t, c[e] = n;
    let r = t.diversityChildren;
    for (let t in r) {
      let n = r[t],
        i = n.surrogates;
      for (let e of n.names) d[e] = n, c[e] = i;
      if (!e.hasMultiDiversity) {
        let t = S[n.emojiObject.diversity[0]];
        for (let r of e.names) {
          let e = "".concat(r, "::skin-tone-").concat(t + 1);
          c[e] = i, d[e] = n
        }
      }
      E[i] = n.uniqueName
    }
    return I.push(t), t
  });
  _[e] = o.ZP.filterUnsupportedEmojis(t)
}

function p(e) {
  return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null
}

function g(e) {
  let t = E[e];
  return null != t ? {
    type: "emoji",
    surrogate: e,
    emojiName: ":".concat(t, ":")
  } : {
    type: "text",
    text: e
  }
}
let L = String.fromCodePoint(917631),
  v = String.fromCodePoint(127988),
  D = /^[\u{E0061}-\u{E007A}]$/u;

function M(e, t) {
  var n;
  if (!0 !== t && !m.test(e)) return [{
    type: "text",
    text: e
  }];
  let i = "",
    r = [],
    s = null !== (n = e.match(O)) && void 0 !== n ? n : [];
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (null != i && "" !== i) {
      if (t === L) t = i + t, i = "";
      else if (D.test(t)) {
        i += t;
        continue
      } else r.push(g(i)), i = ""
    } else if (t === v) {
      i = t;
      continue
    }
    let n = g(t);
    if (r.length > 0) {
      let e = r[r.length - 1];
      if ("text" === n.type && "text" === e.type) {
        e.text += n.text;
        continue
      }
    }
    r.push(n)
  }
  return null != i && "" !== i && r.push(g(i)), r
}

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return Object.prototype.hasOwnProperty.call(c, e) ? c[e] : t
}

function y(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    i = n;
  return Object.prototype.hasOwnProperty.call(E, e) && (i = E[e]), t ? ":".concat(i, ":") : i
}
t.ZP = {
  getDefaultDiversitySurrogate: function() {
    return u
  },
  setDefaultDiversitySurrogate: function(e) {
    u = null != e && "" !== e ? e : null
  },
  getCategories: function() {
    return Object.keys(_)
  },
  getByName: p,
  getByCategory: function(e) {
    return _[e]
  },
  translateInlineEmojiToSurrogates: function(e) {
    return e.replace(N, (e, t) => P(t, e))
  },
  maybeTranslateSurrogatesToInlineEmoji: function(e) {
    if (!m.test(e)) return null;
    let t = M(e, !0).map(e => "text" === e.type ? e.text : e.emojiName).join("");
    return t === e ? null : t
  },
  findInlineEmojisFromSurrogates: M,
  translateSurrogatesToInlineEmoji: function(e) {
    return M(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
  },
  convertNameToSurrogate: P,
  convertSurrogateToName: y,
  convertShortcutToName: function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      i = n;
    return Object.prototype.hasOwnProperty.call(A, e) && (i = A[e]), t ? ":".concat(i, ":") : i
  },
  convertSurrogateToBase: function(e) {
    return p(y(f.reduce((e, t) => e.replace(t, ""), e), !1))
  },
  forEach: e => r().each(I, e),
  all: () => I,
  numDiversitySprites: T,
  numNonDiversitySprites: h,
  EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  EMOJI_NAME_AND_DIVERSITY_RE: N,
  EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  hasSurrogates: function(e) {
    return r().toArray(e).some(e => null != E[e])
  }
}