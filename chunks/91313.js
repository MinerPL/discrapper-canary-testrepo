n.d(t, {
  HZ: function() {
return h;
  },
  IB: function() {
return I;
  },
  cr: function() {
return f;
  },
  cu: function() {
return p;
  },
  lk: function() {
return T;
  },
  tM: function() {
return m;
  },
  xi: function() {
return g;
  },
  zb: function() {
return S;
  }
}), n(653041), n(47120);
var r = n(911969),
  i = n(555573),
  a = n(998698),
  o = n(509716),
  s = n(703558),
  l = n(117530),
  u = n(752305),
  c = n(925994),
  d = n(887490),
  _ = n(42530);
let E = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

function f(e) {
  let t = d.bN.richValue(e)[0];
  return null == t || 'applicationCommand' !== t.type ? null : [
t,
_.YD
  ];
}

function h(e) {
  var t, n;
  if (null == e.selection)
return null;
  let r = null !== (t = d.bN.above(e, {
at: e.selection.focus,
match: e => d.aj.isType(e, 'applicationCommandOption')
  })) && void 0 !== t ? t : null;
  return null != r || d.M8.isCollapsed(e.selection) ? r : null !== (n = d.bN.above(e, {
at: e.selection.anchor,
match: e => d.aj.isType(e, 'applicationCommandOption')
  })) && void 0 !== n ? n : null;
}

function p(e) {
  let t = f(e),
n = [],
r = null == t ? void 0 : t[0].children;
  if (null != r)
for (let e of r)
  d.aj.isType(e, 'applicationCommandOption') && n.push(e.optionName);
  return n;
}

function m(e, t, n) {
  let r = {};
  if (null == t.options)
return {};
  let i = f(e),
a = Object.fromEntries(t.options.map(e => [
  e.name,
  e
])),
o = null == i ? void 0 : i[0].children;
  if (null != o) {
for (let t of o)
  if (d.aj.isType(t, 'applicationCommandOption')) {
    let i = a[t.optionName];
    null != i && (r[t.optionName] = I(e, i, t, n));
  }
  }
  return r;
}

function I(e, t, n, i) {
  let a = n.children.map(n => {
if (t.type === r.jw.ATTACHMENT) {
  let e = l.Z.getUpload(i, t.name, s.d.SlashCommand);
  if (null != e) {
    var a;
    return {
      type: 'text',
      text: null !== (a = e.filename) && void 0 !== a ? a : ''
    };
  }
}
if (d.LC.isText(n))
  return {
    type: 'text',
    text: n.text
  };
if (d.bN.isVoid(e, n)) {
  let e = (0, u.VI)(n);
  if (null != e)
    return e;
}
return {
  type: 'text',
  text: (0, c.sg)(n, {
    mode: 'raw'
  })
};
  });
  if (t.type !== r.jw.STRING) {
for (; a.length > 0 && 'text' === a[0].type && '' === a[0].text.trim();)
  a.shift();
for (; a.length > 0 && 'text' === a[a.length - 1].type && '' === a[a.length - 1].text.trim();)
  a.pop();
  }
  return a;
}

function T(e, t, n, r, a) {
  if (null == e.options)
return {};
  let s = Object.fromEntries(e.options.map(e => {
var i;
return [
  e.name,
  o.f({
    option: e,
    content: null !== (i = r[e.name]) && void 0 !== i ? i : null,
    guildId: t,
    channelId: n,
    allowEmptyValues: a
  })
];
  }));
  return i.VP(n, s), s;
}

function g(e, t, n, r, s) {
  var l;
  let [u] = r, c = a.Z.getActiveCommand(n), d = null == c ? void 0 : null === (l = c.options) || void 0 === l ? void 0 : l.find(e => e.name === u.optionName);
  if (null == d)
return;
  let _ = I(e, d, u, n),
E = o.f({
  option: d,
  content: _,
  guildId: t,
  channelId: n,
  allowEmptyValues: s
});
  return i.g7(n, {
[u.optionName]: {
  lastValidationResult: E
}
  }), E;
}

function S(e, t) {
  if (null == t.options || 0 === t.options.length)
return [];
  let n = d.bN.richValue(e),
r = [],
i = new Set(p(e)),
a = {},
o = new Set();
  for (let e of t.options)
a[e.displayName] = e, !i.has(e.name) && o.add(e.displayName);
  let s = null;
  for (let t = 0; t < n.length; t++) {
let i = n[t];
if ('line' === i.type || 'applicationCommand' === i.type)
  for (let u = 0; u < i.children.length; u++) {
    let _;
    let f = i.children[u],
      h = [
        t,
        u
      ];
    if (d.aj.isType(f, 'applicationCommandOption')) {
      if (null != s) {
        var l;
        s.valueRange.focus = null !== (l = d.bN.before(e, h)) && void 0 !== l ? l : d.bN.start(e, []), s.text = (0, c.sk)(n, {
          mode: 'raw',
          range: s.valueRange
        }).trim(), r.push(s), s = null;
      }
      continue;
    }
    if (!!d.LC.isText(f))
      for (E.lastIndex = 0; null != (_ = E.exec(f.text));) {
        if (0 !== _.index && null == f.text.charAt(_.index - 1).match(/(\t|\s)/))
          continue;
        let e = _[1];
        if (!o.has(e))
          continue;
        o.delete(e);
        let t = a[e];
        if (null == t)
          continue;
        let i = {
            path: h,
            offset: _.index
          },
          l = {
            path: h,
            offset: i.offset + _[0].length
          },
          u = {
            path: h,
            offset: l.offset
          },
          d = {
            name: t.name,
            displayName: t.displayName,
            type: t.type,
            keyRange: {
              anchor: i,
              focus: l
            },
            valueRange: {
              anchor: u,
              focus: u
            },
            text: ''
          };
        null != s && (s.valueRange.focus = d.keyRange.anchor, s.text = (0, c.sk)(n, {
          mode: 'raw',
          range: s.valueRange
        }).trim(), r.push(s)), s = d;
      }
  }
  }
  return null != s && (s.valueRange.focus = d.bN.end(e, []), s.text = (0, c.sk)(n, {
mode: 'raw',
range: s.valueRange
  }).trim(), r.push(s)), r;
}