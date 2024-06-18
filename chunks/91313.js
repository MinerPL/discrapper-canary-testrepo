"use strict";
n.d(t, {
  HZ: function() {
    return T
  },
  IB: function() {
    return f
  },
  cr: function() {
    return I
  },
  cu: function() {
    return h
  },
  lk: function() {
    return N
  },
  tM: function() {
    return S
  },
  xi: function() {
    return A
  },
  zb: function() {
    return m
  }
}), n(653041), n(47120);
var i = n(911969),
  r = n(555573),
  s = n(998698),
  o = n(509716),
  a = n(703558),
  l = n(117530),
  u = n(752305),
  _ = n(925994),
  d = n(887490),
  c = n(42530);
let E = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

function I(e) {
  let t = d.bN.richValue(e)[0];
  return null == t || "applicationCommand" !== t.type ? null : [t, c.YD]
}

function T(e) {
  var t, n;
  if (null == e.selection) return null;
  let i = null !== (t = d.bN.above(e, {
    at: e.selection.focus,
    match: e => d.aj.isType(e, "applicationCommandOption")
  })) && void 0 !== t ? t : null;
  return null != i || d.M8.isCollapsed(e.selection) ? i : null !== (n = d.bN.above(e, {
    at: e.selection.anchor,
    match: e => d.aj.isType(e, "applicationCommandOption")
  })) && void 0 !== n ? n : null
}

function h(e) {
  let t = I(e),
    n = [],
    i = null == t ? void 0 : t[0].children;
  if (null != i)
    for (let e of i) d.aj.isType(e, "applicationCommandOption") && n.push(e.optionName);
  return n
}

function S(e, t, n) {
  let i = {};
  if (null == t.options) return {};
  let r = I(e),
    s = Object.fromEntries(t.options.map(e => [e.name, e])),
    o = null == r ? void 0 : r[0].children;
  if (null != o) {
    for (let t of o)
      if (d.aj.isType(t, "applicationCommandOption")) {
        let r = s[t.optionName];
        null != r && (i[t.optionName] = f(e, r, t, n))
      }
  }
  return i
}

function f(e, t, n, r) {
  let s = n.children.map(n => {
    if (t.type === i.jw.ATTACHMENT) {
      let e = l.Z.getUpload(r, t.name, a.d.SlashCommand);
      if (null != e) {
        var s;
        return {
          type: "text",
          text: null !== (s = e.filename) && void 0 !== s ? s : ""
        }
      }
    }
    if (d.LC.isText(n)) return {
      type: "text",
      text: n.text
    };
    if (d.bN.isVoid(e, n)) {
      let e = (0, u.VI)(n);
      if (null != e) return e
    }
    return {
      type: "text",
      text: (0, _.sg)(n, {
        mode: "raw"
      })
    }
  });
  if (t.type !== i.jw.STRING) {
    for (; s.length > 0 && "text" === s[0].type && "" === s[0].text.trim();) s.shift();
    for (; s.length > 0 && "text" === s[s.length - 1].type && "" === s[s.length - 1].text.trim();) s.pop()
  }
  return s
}

function N(e, t, n, i, s) {
  if (null == e.options) return {};
  let a = Object.fromEntries(e.options.map(e => {
    var r;
    return [e.name, o.f({
      option: e,
      content: null !== (r = i[e.name]) && void 0 !== r ? r : null,
      guildId: t,
      channelId: n,
      allowEmptyValues: s
    })]
  }));
  return r.VP(n, a), a
}

function A(e, t, n, i, a) {
  var l;
  let [u] = i, _ = s.Z.getActiveCommand(n), d = null == _ ? void 0 : null === (l = _.options) || void 0 === l ? void 0 : l.find(e => e.name === u.optionName);
  if (null == d) return;
  let c = f(e, d, u, n),
    E = o.f({
      option: d,
      content: c,
      guildId: t,
      channelId: n,
      allowEmptyValues: a
    });
  return r.g7(n, {
    [u.optionName]: {
      lastValidationResult: E
    }
  }), E
}

function m(e, t) {
  if (null == t.options || 0 === t.options.length) return [];
  let n = d.bN.richValue(e),
    i = [],
    r = new Set(h(e)),
    s = {},
    o = new Set;
  for (let e of t.options) s[e.displayName] = e, !r.has(e.name) && o.add(e.displayName);
  let a = null;
  for (let t = 0; t < n.length; t++) {
    let r = n[t];
    if ("line" === r.type || "applicationCommand" === r.type)
      for (let u = 0; u < r.children.length; u++) {
        let c;
        let I = r.children[u],
          T = [t, u];
        if (d.aj.isType(I, "applicationCommandOption")) {
          if (null != a) {
            var l;
            a.valueRange.focus = null !== (l = d.bN.before(e, T)) && void 0 !== l ? l : d.bN.start(e, []), a.text = (0, _.sk)(n, {
              mode: "raw",
              range: a.valueRange
            }).trim(), i.push(a), a = null
          }
          continue
        }
        if (!!d.LC.isText(I))
          for (E.lastIndex = 0; null != (c = E.exec(I.text));) {
            if (0 !== c.index && null == I.text.charAt(c.index - 1).match(/(\t|\s)/)) continue;
            let e = c[1];
            if (!o.has(e)) continue;
            o.delete(e);
            let t = s[e];
            if (null == t) continue;
            let r = {
                path: T,
                offset: c.index
              },
              l = {
                path: T,
                offset: r.offset + c[0].length
              },
              u = {
                path: T,
                offset: l.offset
              },
              d = {
                name: t.name,
                displayName: t.displayName,
                type: t.type,
                keyRange: {
                  anchor: r,
                  focus: l
                },
                valueRange: {
                  anchor: u,
                  focus: u
                },
                text: ""
              };
            null != a && (a.valueRange.focus = d.keyRange.anchor, a.text = (0, _.sk)(n, {
              mode: "raw",
              range: a.valueRange
            }).trim(), i.push(a)), a = d
          }
      }
  }
  return null != a && (a.valueRange.focus = d.bN.end(e, []), a.text = (0, _.sk)(n, {
    mode: "raw",
    range: a.valueRange
  }).trim(), i.push(a)), i
}