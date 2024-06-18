"use strict";
n.d(t, {
  Gg: function() {
    return m
  },
  KH: function() {
    return f
  },
  ZP: function() {
    return S
  }
}), n(47120), n(653041);
var i = n(512722),
  r = n.n(i),
  s = n(911969),
  o = n(998698),
  a = n(465343),
  l = n(53529),
  u = n(341702),
  _ = n(925994),
  d = n(436660),
  c = n(887490);
let E = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
  I = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
  T = new Set(["line", "blockQuote"]),
  h = new Set(["applicationCommandOption"]);

function S(e, t, n) {
  let {
    isInline: i,
    isVoid: r,
    onChange: s
  } = e;
  e.isVoid = e => !!I.has(e.type) || r(e), e.isInline = e => !!I.has(e.type) || i(e);
  let o = null,
    a = !0;
  return e.onChange = () => {
    let i = c.bN.richValue(e);
    (i !== o || e.previewMarkdown !== a) && (l.T.withMergedEntry(e, () => {
      c.bN.withoutNormalizing(e, () => f(e, t, n))
    }), o = i, a = e.previewMarkdown), s()
  }, e
}

function f(e, t, n) {
  let i = c.bN.areStylesDisabled(e);
  for (let r of c.bN.blocks(e))
    if (T.has(r[0].type)) i ? A(e, r, !0, null) : N(e, r, t, n);
    else {
      let [s, o] = r;
      for (let r = s.children.length - 1; r >= 0; r--) {
        let a = s.children[r];
        if (h.has(a.type)) {
          let s = [a, c.C0.child(o, r)];
          i ? A(e, s, !0, null) : N(e, s, t, n)
        }
      }
    }
}

function N(e, t, n, i) {
  var s;
  let o = "line" === t[0].type && (null === (s = t[0].codeBlockState) || void 0 === s ? void 0 : s.isInCodeBlock) === !0,
    l = c.q.markdown(t[0], n);
  A(e, t, o, l) && (t = c.q.updateElement(e, t), l = c.q.markdown(t[0], n)), !o && (m(e, t, i, l) && (t = c.q.updateElement(e, t), l = c.q.markdown(t[0], n)), function(e, t, n, i, s) {
    let [o, l] = t, u = !1;
    for (let _ = o.children.length - 1; _ >= 0; _--) {
      let I;
      let T = o.children[_];
      if (!c.LC.isText(T)) continue;
      let h = c.C0.child(l, _),
        S = [];
      for (E.lastIndex = 0; null != (I = E.exec(T.text));) {
        if (0 !== I.index && null == T.text.charAt(I.index - 1).match(/(\t|\s)/)) {
          E.lastIndex = I.index + 1;
          continue
        }
        if (O(e, l, {
            path: h,
            offset: I.index
          }, s)) continue;
        let r = (0, a.i)(I[0], n, i);
        null != r && R(i, t[0], r) ? S.push({
          index: I.index,
          length: I[0].length,
          node: r
        }) : E.lastIndex = I.index + 1
      }
      for (let t of S.reverse())(function(e, t, n, i, s) {
        let [o, a] = t, l = {
          path: a,
          offset: n
        }, u = {
          path: a,
          offset: n + i
        };
        r()(l.offset >= 0 && l.offset <= o.text.length, "Failed to find valid start position for raw mention replace"), r()(u.offset >= 0 && u.offset <= o.text.length, "Failed to find valid end position for raw mention replace"), d.Q.textToVoid(e, s, {
          anchor: l,
          focus: u
        })
      })(e, [T, c.C0.child(l, _)], t.index, t.length, t.node), u = !0
    };
  }(e, t, n, i, l))
}

function A(e, t, n, i) {
  let [r, s] = t, o = !1;
  for (let t = r.children.length - 1; t >= 0; t--) {
    let a = r.children[t],
      l = t < r.children.length - 1 ? r.children[t + 1] : null;
    if (c.LC.isText(a) && !n) {
      if (null == l || !e.isVoid(l)) continue;
      let n = !1,
        i = 0;
      for (;;) {
        let e = a.text.indexOf("\\", i);
        if (-1 === e) break;
        if (e === a.text.length - 1) {
          n = !0;
          break
        }
        i = e + 2
      }
      if (n) {
        let n = c.C0.child(s, t + 1);
        d.Q.voidToText(e, (0, _.sg)(l, {
          mode: "plain",
          preventEmojiSurrogates: !0
        }), n), o = !0
      }
    } else if (e.isVoid(a)) {
      let r = c.C0.child(s, t),
        l = {
          path: c.C0.child(r, 0),
          offset: 0
        };
      (n || null != i && O(e, s, l, i)) && (d.Q.voidToText(e, (0, _.sg)(a, {
        mode: "plain",
        preventEmojiSurrogates: !0
      }), r), o = !0)
    }
  }
  return o
}

function m(e, t, n, i) {
  let r = t[1],
    s = !1,
    o = [...i.entries].reverse();
  for (let a = 0; a < o.length; a++) {
    let l;
    let _ = o[a],
      c = o[a + 1];
    if (null != c && c.text.endsWith("\\") && _.start === c.start + c.text.length) continue;
    switch (_.attributes[0]) {
      case "emoji":
        l = {
          type: "emoji",
          emoji: {
            name: _.data.name,
            src: _.data.src,
            surrogate: _.data.surrogate,
            jumboable: !0 === _.data.jumboable
          },
          children: [{
            text: ""
          }]
        };
        break;
      case "customEmoji":
        l = {
          type: "customEmoji",
          emoji: {
            emojiId: _.data.emojiId,
            name: _.data.name,
            animated: _.data.animated,
            jumboable: !0 === _.data.jumboable
          },
          children: [{
            text: ""
          }]
        };
        break;
      case "textMention":
        l = {
          type: "textMention",
          name: _.data.text,
          children: [{
            text: ""
          }]
        };
        break;
      case "mention":
        l = {
          type: "userMention",
          userId: _.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "roleMention":
        l = {
          type: "roleMention",
          roleId: _.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "channelMention":
        l = {
          type: "channelMention",
          channelId: _.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "staticRouteLink":
        l = {
          type: "staticRouteLink",
          channelId: _.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "soundboard":
        l = {
          type: "soundboard",
          soundId: _.data.id,
          children: [{
            text: ""
          }]
        };
        break;
      case "timestamp":
        l = {
          type: "timestamp",
          parsed: _.data,
          children: [{
            text: ""
          }]
        };
        break;
      default:
        continue
    }
    if (!R(n, t[0], l)) continue;
    let E = (0, u.t)(e, r, i.serializedChildren, _.start),
      I = (0, u.t)(e, r, i.serializedChildren, _.start + _.text.length);
    d.Q.textToVoid(e, l, {
      anchor: E,
      focus: I
    }), s = !0
  }
  return s
}

function O(e, t, n, i) {
  let r = 0;
  for (let [i, s] of c.bN.nodes(e, {
      at: {
        anchor: c.bN.start(e, t),
        focus: n
      },
      mode: "lowest"
    })) c.LC.isText(i) ? c.C0.equals(s, n.path) ? r += n.offset : r += i.text.length : r += 1;
  for (let e of i.entries) {
    if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
    let t = e.start,
      n = e.start + e.text.length;
    if (t <= r && n >= r) return !0
  }
  return !1
}

function R(e, t, n) {
  if ("applicationCommandOption" !== t.type) return !0;
  switch (t.optionType) {
    case s.jw.CHANNEL:
      return "channelMention" === n.type;
    case s.jw.ROLE:
      return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case s.jw.USER:
      return "userMention" === n.type;
    case s.jw.MENTIONABLE:
      return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
    case s.jw.STRING: {
      let n = null != e ? o.Z.getOption(e, t.optionName) : null;
      return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0
    }
    default:
      return !1
  }
}