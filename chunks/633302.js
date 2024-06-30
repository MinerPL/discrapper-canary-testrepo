n.d(t, {
    dy: function () {
        return N;
    },
    gw: function () {
        return I;
    }
}), n(411104), n(47120), n(757143), n(653041), n(724458);
var r = n(392711), i = n.n(r), a = n(946188), o = n(176354), s = n(906411);
function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let u = null, c = {}, d = {}, _ = {}, E = {}, f = [], h = 0, p = 0, m = {
        '1f3fb': 0,
        '1f3fc': 1,
        '1f3fd': 2,
        '1f3fe': 3,
        '1f3ff': 4
    }, I = [
        '\uD83C\uDFFB',
        '\uD83C\uDFFC',
        '\uD83C\uDFFD',
        '\uD83C\uDFFE',
        '\uD83C\uDFFF'
    ], T = /^:([^\s:]+?(?:::skin-tone-\d)?):/, g = n(523558), S = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/, A = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < I.length; e++) {
    let t = I[e];
    _['skin-tone-'.concat(e + 1)] = t, E[t] = 'skin-tone-'.concat(e + 1);
}
class N {
    get names() {
        return this.emojiObject.names;
    }
    get allNamesString() {
        return this.names.length > 1 ? ':'.concat(this.names.join(': :'), ':') : ':'.concat(this.uniqueName, ':');
    }
    get unicodeVersion() {
        var e;
        return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0;
    }
    get hasDiversity() {
        return this.emojiObject.hasDiversity;
    }
    get hasMultiDiversity() {
        return this.emojiObject.hasMultiDiversity;
    }
    get hasDiversityParent() {
        return this.emojiObject.hasDiversityParent;
    }
    get hasMultiDiversityParent() {
        return this.emojiObject.hasMultiDiversityParent;
    }
    get managed() {
        return !0;
    }
    get animated() {
        return !1;
    }
    get defaultDiversityChild() {
        if (this.hasDiversity && null != u) {
            let e = function (e) {
                let t = a.Z.convert.toCodePoint(e);
                return null != t ? t : '';
            }(u);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? o.ZP.getURL(e.surrogates) : o.ZP.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != u ? ''.concat(this.uniqueName, '::').concat(E[u]) : this.uniqueName;
    }
    get optionallyDiverseSequence() {
        let e = this.defaultDiversityChild;
        return null != e ? e.surrogates : this.surrogates;
    }
    forEachDiversity(e) {
        null != this.diversityChildren && i().each(this.diversityChildren, e);
    }
    forEachName(e) {
        i().each(this.names, e);
    }
    setSpriteSheetIndex(e) {
        this.index = e, this.useSpriteSheet = !0;
    }
    constructor(e) {
        l(this, 'emojiObject', void 0), l(this, 'type', void 0), l(this, 'uniqueName', void 0), l(this, 'surrogates', void 0), l(this, 'diversityChildren', void 0), l(this, 'originalName', void 0), l(this, 'id', void 0), l(this, 'guildId', void 0), l(this, 'index', void 0), l(this, 'useSpriteSheet', void 0), this.emojiObject = e, this.type = s.B.UNICODE, this.uniqueName = e.names[0];
        if (this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
            for (let t of e.diversityChildren)
                if (null != t.diversity) {
                    let e = t.diversity.join('-');
                    this.diversityChildren[e] = new N(t);
                }
        }
    }
}
let v = n(5420);
for (let e in v) {
    let t = v[e].map(e => {
        let t = new N(e), n = t.surrogates, r = t.uniqueName;
        if (t.setSpriteSheetIndex(t.hasDiversity ? h++ : p++), E[n] = r, 0 > n.indexOf('‍')) {
            let e = n.replace('️', '');
            e !== n && (E[e] = r);
        }
        for (let e of t.names)
            d[e] = t, _[e] = n;
        let i = t.diversityChildren;
        for (let t in i) {
            let n = i[t], r = n.surrogates;
            for (let e of n.names)
                d[e] = n, _[e] = r;
            if (!e.hasMultiDiversity) {
                let t = m[n.emojiObject.diversity[0]];
                for (let i of e.names) {
                    let e = ''.concat(i, '::skin-tone-').concat(t + 1);
                    _[e] = r, d[e] = n;
                }
            }
            E[r] = n.uniqueName;
        }
        return f.push(t), t;
    });
    c[e] = o.ZP.filterUnsupportedEmojis(t);
}
function O(e) {
    return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null;
}
function R(e) {
    let t = E[e];
    return null != t ? {
        type: 'emoji',
        surrogate: e,
        emojiName: ':'.concat(t, ':')
    } : {
        type: 'text',
        text: e
    };
}
let C = String.fromCodePoint(917631), y = String.fromCodePoint(127988), D = /^[\u{E0061}-\u{E007A}]$/u;
function L(e, t) {
    var n;
    if (!0 !== t && !S.test(e))
        return [{
                type: 'text',
                text: e
            }];
    let r = '', i = [], a = null !== (n = e.match(A)) && void 0 !== n ? n : [];
    for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (null != r && '' !== r) {
            if (t === C)
                t = r + t, r = '';
            else if (D.test(t)) {
                r += t;
                continue;
            } else
                i.push(R(r)), r = '';
        } else if (t === y) {
            r = t;
            continue;
        }
        let n = R(t);
        if (i.length > 0) {
            let e = i[i.length - 1];
            if ('text' === n.type && 'text' === e.type) {
                e.text += n.text;
                continue;
            }
        }
        i.push(n);
    }
    return null != r && '' !== r && i.push(R(r)), i;
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return Object.prototype.hasOwnProperty.call(_, e) ? _[e] : t;
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '', r = n;
    return Object.prototype.hasOwnProperty.call(E, e) && (r = E[e]), t ? ':'.concat(r, ':') : r;
}
t.ZP = {
    getDefaultDiversitySurrogate: function () {
        return u;
    },
    setDefaultDiversitySurrogate: function (e) {
        u = null != e && '' !== e ? e : null;
    },
    getCategories: function () {
        return Object.keys(c);
    },
    getByName: O,
    getByCategory: function (e) {
        return c[e];
    },
    translateInlineEmojiToSurrogates: function (e) {
        return e.replace(T, (e, t) => b(t, e));
    },
    maybeTranslateSurrogatesToInlineEmoji: function (e) {
        if (!S.test(e))
            return null;
        let t = L(e, !0).map(e => 'text' === e.type ? e.text : e.emojiName).join('');
        return t === e ? null : t;
    },
    findInlineEmojisFromSurrogates: L,
    translateSurrogatesToInlineEmoji: function (e) {
        return L(e).map(e => 'text' === e.type ? e.text : e.emojiName).join('');
    },
    convertNameToSurrogate: b,
    convertSurrogateToName: M,
    convertShortcutToName: function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '', r = n;
        return Object.prototype.hasOwnProperty.call(g, e) && (r = g[e]), t ? ':'.concat(r, ':') : r;
    },
    convertSurrogateToBase: function (e) {
        return O(M(I.reduce((e, t) => e.replace(t, ''), e), !1));
    },
    forEach: e => i().each(f, e),
    all: () => f,
    numDiversitySprites: h,
    numNonDiversitySprites: p,
    EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    EMOJI_NAME_AND_DIVERSITY_RE: T,
    EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    hasSurrogates: function (e) {
        return i().toArray(e).some(e => null != E[e]);
    }
};
