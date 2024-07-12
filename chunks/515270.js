n.d(t, {
  L6: function() {
return N;
  },
  ZP: function() {
return I;
  },
  iF: function() {
return A;
  }
}), n(47120), n(411104), n(653041), n(757143);
var r = n(920478),
  i = n(31775),
  a = n.n(i),
  o = n(70956),
  s = n(364964),
  l = n(53529),
  u = n(925994),
  c = n(436660),
  d = n(887490),
  _ = n(42530);
let E = new Set(['line']),
  f = r.Z.listLanguages(),
  h = {};
for (let e of f) {
  e = e.toLowerCase();
  let t = r.Z.getLanguage(e);
  if (null == t)
continue;
  let n = t.aliases;
  if (h[e] = e, null != n)
for (let t of n)
  h[t.toLowerCase()] = e;
}
let p = /^[a-z0-9_+\-.#]+$/,
  m = /^[a-z0-9_+\-.#]+$/i;
for (let e in h)
  if (null == e.match(p))
throw Error('Language name does not match regex: '.concat(e));

function I(e) {
  let {
onChange: t
  } = e, n = null;
  return e.onChange = () => {
d.bN.richValue(e) !== n && (l.T.withMergedEntry(e, () => {
  d.bN.withoutNormalizing(e, () => function(e) {
    let t = function(e) {
      let t = [],
        n = null;
      for (let r of d.bN.blocks(e)) {
        let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
          a = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine);
        n = function(e, t, n, r, i) {
          var a;
          let o = function(e) {
              let t;
              let [n, r] = e;
              if (!E.has(n.type))
                return [];
              let i = [],
                a = /\\|```/g;
              for (let e = 0; e < n.children.length; e++) {
                let o = n.children[e];
                if (d.LC.isText(o))
                  for (a.lastIndex = 0; null != (t = a.exec(o.text));) {
                    if ('\\' === t[0]) {
                      a.lastIndex += 1;
                      continue;
                    }
                    i.push({
                      path: d.C0.child(r, e),
                      offset: t.index
                    });
                  }
              }
              return i;
            }(t),
            s = o[0],
            l = o[o.length - 1],
            u = null;
          if (null != l) {
            let [t] = d.bN.node(e, l.path);
            u = t.text.substring(l.offset + 3);
          }
          let c = n && null != s,
            _ = n && 0 === o.length,
            f = r && 0 === o.length,
            p = (c ? o.slice(1) : o).length % 2 == 1,
            I = p && (null == u || '' === u || null != u.match(m)),
            T = I && null != u && null !== (a = h[u.toLowerCase()]) && void 0 !== a ? a : null;
          return {
            blockEntry: t,
            wasInCodeBlock: n,
            isInCodeBlock: _,
            isStyledCodeBlockLine: f,
            lang: p || c ? T : i,
            hljsTypes: null,
            closesCodeBlock: c,
            opensCodeBlock: p,
            opensCodeBlockOnOwnLine: I
          };
        }(e, r, i, a, null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null), t.push(n);
      }
      return function(e) {
        let t = [],
          n = !1;
        for (let i of e) {
          let a = i === e[e.length - 1];
          if ((i.closesCodeBlock || a) && (n && a && !i.closesCodeBlock && t.push(i), n = !1, t.length > 0)) {
            let e = t.map(e => (0, u.sg)(e.blockEntry[0])).join('\n'),
              n = t[0].lang;
            if (null != n && null != r.Z.getLanguage(n)) {
              let r = function(e, t) {
                let n = ''.concat(e, '-').concat(t),
                  r = S.get(n);
                if (null != r)
                  return r;
                let i = s.default.highlight(t, e, !1);
                if (null == i || i.illegal)
                  return null;
                let a = i.value.split('\n');
                return S.set(n, a), a;
              }(e, n);
              if (null != r && r.length === t.length) {
                let e = [];
                for (let n = 0; n < t.length; n++) {
                  let i;
                  let a = r[n].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, '\''),
                    o = [],
                    s = 0,
                    l = 0;
                  for (; null != (i = T.exec(a));) {
                    let t = i.index + i[0].length,
                      n = i.index - l;
                    i.index > l && (e.length > 0 && o.push({
                      types: [...e],
                      start: s,
                      end: s + n
                    }), s += n), '</span>' === i[0] ? e.pop() : e.push(i[1]), l = t;
                  }
                  if (e.length > 0) {
                    let t = a.length - l;
                    o.push({
                      types: [...e],
                      start: s,
                      end: s + t
                    });
                  }
                  t[n].hljsTypes = o;
                }
              } else
                for (let e = 0; e < t.length; e++)
                  t[e].hljsTypes = null;
            }
            t = [];
          }
          n && t.push(i), i.opensCodeBlock && (n = !0);
        }
      }(t), t;
    }(e);
    (function(e, t) {
      for (let n of t) {
        let [t, r] = n.blockEntry, i = function(e) {
          return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
            lang: e.lang,
            wasInCodeBlock: e.wasInCodeBlock,
            isInCodeBlock: e.isInCodeBlock,
            isStyledCodeBlockLine: e.isStyledCodeBlockLine,
            hljsTypes: e.hljsTypes
          } : null;
        }(n);
        (null == t ? void 0 : t.codeBlockState) != i && c.Q.setNodes(e, {
          codeBlockState: i
        }, {
          at: r
        });
      }
    }(e, t));
  }(e));
}), n = d.bN.richValue(e)), t();
  }, e;
}
let T = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
  g = {
max: 1 / 0,
maxAge: 1 * o.Z.Millis.MINUTE,
updateAgeOnGet: !0
  },
  S = new(a())(g);

function A(e, t) {
  let n = 0;
  for (let i of d.bN.nodes(e, {
  at: {
    anchor: {
      path: _.u9,
      offset: 0
    },
    focus: t
  },
  mode: 'lowest',
  match: e => d.LC.isText(e)
})) {
var r;
let e = i[0].text;
d.C0.equals(i[1], t.path) && (e = e.substring(0, t.offset));
let a = e.match(/```/g);
n += null !== (r = null == a ? void 0 : a.length) && void 0 !== r ? r : 0;
  }
  return n % 2 != 0;
}

function N(e) {
  if (null == e.selection)
return !1;
  let t = d.M8.start(e.selection);
  return A(e, t);
}