"use strict";
n.d(t, {
  yw: function() {
    return O
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(411104);
var i = n(392711),
  r = n.n(i),
  s = n(31775),
  o = n.n(s);
n(711739);
var a = n(302454),
  l = n.n(a),
  u = n(830121),
  _ = n(823379),
  d = n(172244),
  c = n(571989);
let E = new(o())({
  max: 50
});

function I(e) {
  let t = E.get(e);
  if (null != t) return t;
  let n = (0, c.yx)(e),
    i = (0, c.zq)(n),
    r = {
      whitespaceSanitized: n,
      fullySanitized: i
    };
  return E.set(e, r), r
}
let T = ["http:", "https:", "discord:"],
  h = [d.b.TEXT, d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP],
  S = [...h, d.b.EMOJI, d.b.CUSTOM_EMOJI],
  f = [d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT],
  N = [d.b.TEXT],
  A = [d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP, d.b.EMOJI, d.b.CUSTOM_EMOJI, d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT];

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i of (!Array.isArray(e) && (e = [e]), e)) {
    if (void 0 === i || !t.includes(i.type)) return null;
    if (i.type === d.b.INLINE_CODE) {
      let e = [...t, ...n];
      if (null == m(i.validationChildContent, e)) return null
    }
    if (Array.isArray(i.content) && null == m(i.content, t)) return null
  }
  return e
}

function O(e) {
  try {
    var t;
    let n = new URL(e),
      i = null !== (t = n.protocol) && void 0 !== t ? t : "";
    if (!T.includes(i.toLowerCase())) throw Error("Provided protocol is not allowed: " + i);
    if (("http:" === i || "https:" === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
    let r = (0, c.MO)(n);
    n.username = "", n.password = "";
    let s = (0, c.MO)(n);
    return {
      target: r,
      displayTarget: s
    }
  } catch (e) {
    return null
  }
}
t.ZP = {
  ...l().defaultRules.link,
  match: (e, t, n) => t.allowLinks ? l().defaultRules.link.match(e, t, n) : null,
  parse(e, t, n) {
    let [i, s, o, a] = e, c = () => ({
      type: d.b.TEXT,
      content: i
    }), E = I(o), T = I(s), R = I(null != a ? a : ""), C = E.whitespaceSanitized, p = T.fullySanitized, g = R.fullySanitized, L = p.trim();
    if (0 === C.trim().length || 0 === L.length) return c();
    let v = O(l().unescapeUrl(o)),
      D = (0, u.ZP)(s).length > 0 || (0, u.ZP)(a).length > 0;
    if (null == v || D) return c();
    let M = {
        ...n,
        allowEscape: !1,
        parseInlineCodeChildContent: !0
      },
      P = n.allowEmojiLinks ? S : h,
      y = [...P, ...f],
      U = [...N, ...A],
      b = m(t(p, M), y, [d.b.EMOJI]),
      G = m(t(g, M), U);
    if (null == b || null == G || 0 === (function e(t) {
        let n = "";
        for (let i of t) switch (i.type) {
          case d.b.TEXT:
          case d.b.INLINE_CODE:
            n += i.content;
            break;
          case d.b.CUSTOM_EMOJI:
            n += i.name;
            break;
          case d.b.EMOJI:
            n += i.surrogate;
            break;
          case d.b.LINE_BREAK:
            n += "\n";
            break;
          case d.b.STRONG:
          case d.b.ITALICS:
          case d.b.UNDERLINE:
          case d.b.STRIKETHROUGH:
          case d.b.SPOILER:
            n += e(i.content);
            break;
          case d.b.TIMESTAMP:
            n += "<timestamp>";
            break;
          case d.b.BLOCK_QUOTE:
          case d.b.LIST:
          case d.b.HEADING:
          case d.b.SUBTEXT:
            n += "<".concat(i.type, "Content>");
            break;
          default:
            (0, _.vE)(i.type)
        }
        return n
      })(b).trim().length) return c();
    let w = r().pick(t.rules, P),
      k = l().parserFor(w)(T.whitespaceSanitized, M),
      B = R.whitespaceSanitized,
      {
        target: x
      } = v;
    return {
      content: k,
      target: x,
      title: B
    }
  }
}