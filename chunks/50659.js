n.d(t, {
  U4: function() {
return c;
  },
  hm: function() {
return p;
  },
  py: function() {
return h;
  }
}), n(47120);
var r = n(512722),
  i = n.n(r),
  a = n(53529),
  o = n(436660),
  s = n(887490);
let l = new Set([
'*',
'_',
'~',
'`',
'|'
  ]),
  u = {
bold: '**',
italics: '*',
underline: '__',
strikethrough: '~~',
inlineCode: '`',
spoiler: '||'
  };

function c(e, t, n) {
  if (null == e.selection)
return {
  before: {},
  after: {}
};
  let r = d(e, t),
i = d(e, n);
  for (let e in r)
!(e in i) && delete r[e];
  for (let e in i)
!(e in r) && delete i[e];
  return {
before: r,
after: i
  };
}

function d(e, t) {
  let [n] = s.bN.node(e, t.path);
  if (!s.LC.isText(n))
return {};
  let r = n.text,
i = t.offset;
  for (let e = i - 1; e >= 0; e--)
if (l.has(r.charAt(e)))
  i--;
else
  break;
  let a = t.offset;
  for (let e = a; e < r.length; e++)
if (l.has(r.charAt(e)))
  a++;
else
  break;
  let o = r.substring(i, a),
u = {};
  return E({
result: u,
text: o,
startIndex: i,
syntax: '***',
type1: 'italics',
type2: 'bold'
  }), E({
result: u,
text: o,
startIndex: i,
syntax: '___',
type1: 'italics',
type2: 'underline'
  }), _(u, o, i, '**', 'bold'), _(u, o, i, '*', 'italics'), _(u, o, i, '_', 'italics'), _(u, o, i, '__', 'underline'), _(u, o, i, '`', 'inlineCode'), _(u, o, i, '~~', 'strikethrough'), _(u, o, i, '||', 'spoiler'), u;
}

function _(e, t, n, r, i) {
  let a = f(t, r);
  a >= 0 && (e[i] = {
chars: r,
location: n + a
  });
}

function E(e) {
  let {
result: t,
text: n,
startIndex: r,
syntax: i,
type1: a,
type2: o
  } = e, s = f(n, i);
  s >= 0 && (t[a] = {
chars: i.substring(0, 1),
location: s + r
  }, t[o] = {
chars: i.substring(1),
location: s + r + 1
  });
}

function f(e, t) {
  let n = e.indexOf(t);
  if (n >= 0) {
let r = t.charAt(0);
if (n > 0 && e.charAt(n - 1) === r || n < e.length - 1 && e.charAt(n + t.length) === r)
  return -1;
  }
  return n;
}

function h(e, t) {
  a.T.withSingleEntry(e, () => {
s.bN.withoutNormalizing(e, () => {
  i()(null != e.selection, 'Editor has no selection');
  let [n, r] = s.M8.edges(e.selection), a = c(e, n, r), l = a.before[t], d = a.after[t], _ = s.bN.node(e, n.path), E = s.bN.node(e, r.path);
  if (null == _ || null == E || !s.LC.isText(_[0]) || !s.LC.isText(E[0]))
    return;
  let f = s.C0.equals(_[1], E[1]);
  if (null != l && null != d) {
    let t = {
        path: n.path,
        offset: l.location
      },
      i = {
        path: r.path,
        offset: d.location
      };
    o.Q.delete(e, {
      at: i,
      distance: d.chars.length
    }), o.Q.delete(e, {
      at: t,
      distance: l.chars.length
    });
    let a = n.offset,
      u = r.offset;
    !s.Jz.isBefore(n, t) && (a -= l.chars.length), f && !s.Jz.isBefore(r, t) && (u -= l.chars.length), s.Jz.isAfter(r, i) && (u -= d.chars.length), o.Q.select(e, {
      anchor: {
        path: n.path,
        offset: Math.max(0, a)
      },
      focus: {
        path: r.path,
        offset: Math.max(0, u)
      }
    });
  } else {
    let i = u[t];
    o.Q.insertText(e, i, {
      at: r
    }), o.Q.insertText(e, i, {
      at: n
    });
    let a = _[0].text.length + i.length,
      s = E[0].text.length + (f ? 2 * i.length : i.length);
    o.Q.select(e, {
      anchor: {
        path: n.path,
        offset: Math.min(a, n.offset + i.length)
      },
      focus: {
        path: r.path,
        offset: Math.min(s, r.offset + (f ? i.length : 0))
      }
    });
  }
});
  }), s.bN.focus(e);
}

function p(e, t) {
  let n = e.selection;
  if (null == n)
return;
  let r = !0;
  for (let [i, a] of s.bN.blocks(e))
('line' === i.type || i.type === t) && s.M8.includes(n, a) && (r = r && i.type === t);
  s.bN.withoutNormalizing(e, () => {
for (let [i, a] of s.bN.blocks(e))
  s.M8.includes(n, a) && (r || 'line' !== i.type ? r && i.type === t && o.Q.setNodes(e, {
    type: 'line'
  }, {
    at: a
  }) : o.Q.setNodes(e, {
    type: t
  }, {
    at: a
  }));
  }), s.bN.focus(e);
}