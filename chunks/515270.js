"use strict";
n.d(t, {
  L6: function() {
    return R
  },
  ZP: function() {
    return f
  },
  iF: function() {
    return O
  }
}), n(47120), n(411104), n(653041), n(757143);
var i = n(920478),
  r = n(31775),
  s = n.n(r),
  o = n(70956),
  a = n(364964),
  l = n(53529),
  u = n(925994),
  _ = n(436660),
  d = n(887490),
  c = n(42530);
let E = new Set(["line"]),
  I = i.Z.listLanguages(),
  T = {};
for (let e of I) {
  e = e.toLowerCase();
  let t = i.Z.getLanguage(e);
  if (null == t) continue;
  let n = t.aliases;
  if (T[e] = e, null != n)
    for (let t of n) T[t.toLowerCase()] = e
}
let h = /^[a-z0-9_+\-.#]+$/,
  S = /^[a-z0-9_+\-.#]+$/i;
for (let e in T)
  if (null == e.match(h)) throw Error("Language name does not match regex: ".concat(e));

function f(e) {
  let {
    onChange: t
  } = e, n = null;
  return e.onChange = () => {
    d.bN.richValue(e) !== n && (l.T.withMergedEntry(e, () => {
      d.bN.withoutNormalizing(e, () => (function(e) {
        let t = function(e) {
          let t = [],
            n = null;
          for (let i of d.bN.blocks(e)) {
            let r = null != n && (n.isInCodeBlock || n.opensCodeBlock),
              s = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine);
            n = function(e, t, n, i, r) {
              var s;
              let o = function(e) {
                  let t;
                  let [n, i] = e;
                  if (!E.has(n.type)) return [];
                  let r = [],
                    s = /\\|```/g;
                  for (let e = 0; e < n.children.length; e++) {
                    let o = n.children[e];
                    if (d.LC.isText(o))
                      for (s.lastIndex = 0; null != (t = s.exec(o.text));) {
                        if ("\\" === t[0]) {
                          s.lastIndex += 1;
                          continue
                        }
                        r.push({
                          path: d.C0.child(i, e),
                          offset: t.index
                        })
                      }
                  }
                  return r
                }(t),
                a = o[0],
                l = o[o.length - 1],
                u = null;
              if (null != l) {
                let [t] = d.bN.node(e, l.path);
                u = t.text.substring(l.offset + 3)
              }
              let _ = n && null != a,
                c = n && 0 === o.length,
                I = i && 0 === o.length,
                h = (_ ? o.slice(1) : o).length % 2 == 1,
                f = h && (null == u || "" === u || null != u.match(S)),
                N = f && null != u && null !== (s = T[u.toLowerCase()]) && void 0 !== s ? s : null;
              return {
                blockEntry: t,
                wasInCodeBlock: n,
                isInCodeBlock: c,
                isStyledCodeBlockLine: I,
                lang: h || _ ? N : r,
                hljsTypes: null,
                closesCodeBlock: _,
                opensCodeBlock: h,
                opensCodeBlockOnOwnLine: f
              }
            }(e, i, r, s, null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null), t.push(n)
          }
          return function(e) {
            let t = [],
              n = !1;
            for (let r of e) {
              let s = r === e[e.length - 1];
              if ((r.closesCodeBlock || s) && (n && s && !r.closesCodeBlock && t.push(r), n = !1, t.length > 0)) {
                let e = t.map(e => (0, u.sg)(e.blockEntry[0])).join("\n"),
                  n = t[0].lang;
                if (null != n && null != i.Z.getLanguage(n)) {
                  let i = function(e, t) {
                    let n = "".concat(e, "-").concat(t),
                      i = m.get(n);
                    if (null != i) return i;
                    let r = a.default.highlight(t, e, !1);
                    if (null == r || r.illegal) return null;
                    let s = r.value.split("\n");
                    return m.set(n, s), s
                  }(e, n);
                  if (null != i && i.length === t.length) {
                    let e = [];
                    for (let n = 0; n < t.length; n++) {
                      let r;
                      let s = i[n].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                        o = [],
                        a = 0,
                        l = 0;
                      for (; null != (r = N.exec(s));) {
                        let t = r.index + r[0].length,
                          n = r.index - l;
                        r.index > l && (e.length > 0 && o.push({
                          types: [...e],
                          start: a,
                          end: a + n
                        }), a += n), "</span>" === r[0] ? e.pop() : e.push(r[1]), l = t
                      }
                      if (e.length > 0) {
                        let t = s.length - l;
                        o.push({
                          types: [...e],
                          start: a,
                          end: a + t
                        })
                      }
                      t[n].hljsTypes = o
                    }
                  } else
                    for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                }
                t = []
              }
              n && t.push(r), r.opensCodeBlock && (n = !0)
            }
          }(t), t
        }(e);
        (function(e, t) {
          for (let n of t) {
            let [t, i] = n.blockEntry, r = function(e) {
              return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                lang: e.lang,
                wasInCodeBlock: e.wasInCodeBlock,
                isInCodeBlock: e.isInCodeBlock,
                isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                hljsTypes: e.hljsTypes
              } : null
            }(n);
            (null == t ? void 0 : t.codeBlockState) != r && _.Q.setNodes(e, {
              codeBlockState: r
            }, {
              at: i
            })
          }
        })(e, t)
      })(e))
    }), n = d.bN.richValue(e)), t()
  }, e
}
let N = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
  A = {
    max: 1 / 0,
    maxAge: 1 * o.Z.Millis.MINUTE,
    updateAgeOnGet: !0
  },
  m = new(s())(A);

function O(e, t) {
  let n = 0;
  for (let r of d.bN.nodes(e, {
      at: {
        anchor: {
          path: c.u9,
          offset: 0
        },
        focus: t
      },
      mode: "lowest",
      match: e => d.LC.isText(e)
    })) {
    var i;
    let e = r[0].text;
    d.C0.equals(r[1], t.path) && (e = e.substring(0, t.offset));
    let s = e.match(/```/g);
    n += null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0
  }
  return n % 2 != 0
}

function R(e) {
  if (null == e.selection) return !1;
  let t = d.M8.start(e.selection);
  return O(e, t)
}