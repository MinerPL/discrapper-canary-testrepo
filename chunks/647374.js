"use strict";
n.r(t), n.d(t, {
  punycodeLink: function() {
    return I
  },
  default: function() {
    return C
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("70102");
var i = n("917351"),
  s = n.n(i),
  r = n("693566"),
  a = n.n(r);
n("125601");
var o = n("132710"),
  l = n.n(o),
  u = n("312016"),
  d = n("449008"),
  c = n("891137"),
  f = n("76216");
let _ = new a({
  max: 50
});

function h(e) {
  let t = _.get(e);
  if (null != t) return t;
  let n = (0, f.sanitizeWhitespace)(e),
    i = (0, f.sanitizeUnicodeConfusables)(n),
    s = {
      whitespaceSanitized: n,
      fullySanitized: i
    };
  return _.set(e, s), s
}
let g = ["http:", "https:", "discord:"],
  m = [c.AST_KEY.TEXT, c.AST_KEY.UNDERLINE, c.AST_KEY.STRONG, c.AST_KEY.ITALICS, c.AST_KEY.STRIKETHROUGH, c.AST_KEY.INLINE_CODE, c.AST_KEY.SPOILER, c.AST_KEY.LINE_BREAK, c.AST_KEY.TIMESTAMP],
  E = [...m, c.AST_KEY.EMOJI, c.AST_KEY.CUSTOM_EMOJI],
  p = [c.AST_KEY.LIST, c.AST_KEY.HEADING, c.AST_KEY.BLOCK_QUOTE],
  v = [c.AST_KEY.TEXT],
  S = [c.AST_KEY.UNDERLINE, c.AST_KEY.STRONG, c.AST_KEY.ITALICS, c.AST_KEY.STRIKETHROUGH, c.AST_KEY.INLINE_CODE, c.AST_KEY.SPOILER, c.AST_KEY.LINE_BREAK, c.AST_KEY.TIMESTAMP, c.AST_KEY.EMOJI, c.AST_KEY.CUSTOM_EMOJI, c.AST_KEY.LIST, c.AST_KEY.HEADING, c.AST_KEY.BLOCK_QUOTE];

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i of (!Array.isArray(e) && (e = [e]), e)) {
    if (!t.includes(i.type)) return null;
    if (i.type === c.AST_KEY.INLINE_CODE) {
      let e = [...t, ...n];
      if (null == T(i.validationChildContent, e)) return null
    }
    if (Array.isArray(i.content) && null == T(i.content, t)) return null
  }
  return e
}

function I(e) {
  try {
    var t;
    let n = new URL(e),
      i = null !== (t = n.protocol) && void 0 !== t ? t : "";
    if (!g.includes(i.toLowerCase())) throw Error("Provided protocol is not allowed: " + i);
    if (("http:" === i || "https:" === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
    let s = (0, f.safelyMakeUrlHumanReadable)(n);
    n.username = "", n.password = "";
    let r = (0, f.safelyMakeUrlHumanReadable)(n);
    return {
      target: s,
      displayTarget: r
    }
  } catch (e) {
    return null
  }
}
var C = {
  ...l.defaultRules.link,
  match: (e, t, n) => t.allowLinks ? l.defaultRules.link.match(e, t, n) : null,
  parse(e, t, i) {
    let [r, a, o, f] = e, _ = () => ({
      type: c.AST_KEY.TEXT,
      content: r
    }), g = h(o), C = h(a), A = h(null != f ? f : ""), y = g.whitespaceSanitized, N = C.fullySanitized, R = A.fullySanitized, O = N.trim(), D = y.trim();
    if (0 === D.length || 0 === O.length) return _();
    let P = l.unescapeUrl(o),
      b = I(P),
      L = (0, u.default)(a).length > 0 || (0, u.default)(f).length > 0;
    if (null == b || L) return _();
    let M = {
        ...i,
        allowEscape: !1,
        parseInlineCodeChildContent: !0
      },
      U = i.allowEmojiLinks ? E : m,
      k = [...U, ...p],
      w = [...v, ...S],
      V = t(N, M),
      G = T(V, k, [c.AST_KEY.EMOJI]),
      F = t(R, M),
      x = T(F, w);
    if (null == G || null == x) return _();
    let B = function e(t) {
        let n = "";
        for (let i of t) switch (i.type) {
          case c.AST_KEY.TEXT:
          case c.AST_KEY.INLINE_CODE:
            n += i.content;
            break;
          case c.AST_KEY.CUSTOM_EMOJI:
            n += i.name;
            break;
          case c.AST_KEY.EMOJI:
            n += i.surrogate;
            break;
          case c.AST_KEY.LINE_BREAK:
            n += "\n";
            break;
          case c.AST_KEY.STRONG:
          case c.AST_KEY.ITALICS:
          case c.AST_KEY.UNDERLINE:
          case c.AST_KEY.STRIKETHROUGH:
          case c.AST_KEY.SPOILER:
            n += e(i.content);
            break;
          case c.AST_KEY.TIMESTAMP:
            n += "<timestamp>";
            break;
          case c.AST_KEY.BLOCK_QUOTE:
          case c.AST_KEY.LIST:
          case c.AST_KEY.HEADING:
            n += "<".concat(i.type, "Content>");
            break;
          default:
            (0, d.assertNever)(i.type)
        }
        return n
      }(G),
      H = 0 === B.trim().length;
    if (H) return _();
    let {
      default: {
        RULES: Y
      }
    } = n("888198"), j = l.parserFor(s.pick(Y, U)), W = j(C.whitespaceSanitized, M), K = A.whitespaceSanitized, {
      target: z
    } = b;
    return {
      content: W,
      target: z,
      title: K
    }
  }
}