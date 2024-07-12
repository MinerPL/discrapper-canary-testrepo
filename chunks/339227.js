n.d(t, {
  Q: function() {
return L;
  }
}), n(47120), n(411104), n(757143), n(653041);
var r = n(512722),
  i = n.n(r),
  a = n(31775),
  o = n.n(a),
  s = n(302454),
  l = n(25209),
  u = n(710845),
  c = n(772096),
  d = n(428595),
  _ = n(594199),
  E = n(364458),
  f = n(70956),
  h = n(40786),
  p = n(362092);
let m = {
link: {
  type: 'skip'
},
highlight: {
  type: 'skip'
},
blockQuote: {
  type: 'skip'
},
codeBlock: {
  type: 'skip'
},
list: {
  type: 'skip'
},
heading: {
  type: 'skip'
},
channelOrMessageUrl: {
  type: 'skip'
},
mediaPostLink: {
  type: 'skip'
},
attachmentLink: {
  type: 'skip'
},
newline: {
  type: 'verbatim'
},
br: {
  type: 'verbatim'
},
paragraph: {
  type: 'verbatim'
},
text: {
  type: 'verbatim'
},
emoticon: {
  type: 'verbatim'
},
mention: {
  type: 'inlineObject'
},
roleMention: {
  type: 'inlineObject'
},
commandMention: {
  type: 'inlineObject'
},
channelMention: {
  type: 'inlineObject'
},
emoji: {
  type: 'inlineObject'
},
customEmoji: {
  type: 'inlineObject'
},
em: {
  type: 'inlineStyle',
  before: '*',
  after: '*'
},
looseEm: {
  type: 'inlineStyle',
  before: '*',
  after: ' *'
},
autolink: {
  type: 'inlineStyle',
  before: '<',
  after: '>'
},
strong: {
  type: 'inlineStyle',
  before: '**',
  after: '**'
},
u: {
  type: 'inlineStyle',
  before: '__',
  after: '__'
},
s: {
  type: 'inlineStyle',
  before: '~~',
  after: '~~'
},
escape: {
  type: 'inlineStyle',
  before: '\\',
  after: ''
},
inlineCode: {
  type: 'inlineStyle',
  before: '`',
  after: '`'
},
staticRouteLink: {
  type: 'inlineStyle',
  before: '<id:',
  after: '>'
},
soundboard: {
  type: 'inlineStyle',
  before: '<sound:',
  after: '>'
},
spoiler: {
  type: 'inlineStyle',
  before: '||',
  after: '||'
},
url: {
  type: 'inlineStyle',
  before: '',
  after: ''
},
codeBlockText: {
  type: 'inlineStyle',
  before: '',
  after: ''
},
codeBlockSyntax: {
  type: 'inlineStyle',
  before: '',
  after: ''
},
codeBlockLang: {
  type: 'inlineStyle',
  before: '',
  after: ''
},
timestamp: {
  type: 'inlineObject'
},
subtext: {
  type: 'inlineStyle',
  before: '-# ',
  after: ''
}
  },
  I = new Set([
'*',
'_',
'\\'
  ]),
  T = {},
  g = {};
for (let e in d.Z.RULES) {
  if (!(e in m))
throw Error('Slate: Unknown markdown rule: '.concat(e, '.  If you have just added a new markdown rule ') + 'then you probably need to add it to this file so that the rich chat box understands it.');
  let t = m[e];
  'skip' !== t.type && (T[e] = S(d.Z.RULES[e])), 'skip' !== t.type && 'inlineObject' !== t.type && (g[e] = S('text' === e ? _.ZP : d.Z.RULES[e]));
}

function S(e) {
  i()(null != e.parse, 'Slate: rule must have a parse function');
  let t = e.parse;
  return {
...e,
parse(e, n, r) {
  let i = t.call(this, e, n, r);
  return !(i instanceof Array) && (i.originalMatch = e), i;
}
  };
}
let A = {
url: {
  parse: e => null == (0, c.yw)(e[1]) ? {
    type: 'text',
    content: e[0],
    originalMatch: e
  } : {
    type: 'link',
    content: e[1],
    originalMatch: e
  }
},
autolink: {
  parse: e => null == (0, c.yw)(e[1]) ? {
    type: 'text',
    content: e[0],
    originalMatch: e
  } : {
    type: 'autolink',
    content: e[1],
    originalMatch: e
  }
},
codeBlockSyntax: {
  order: s.defaultRules.inlineCode.order - 0.1,
  match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
  parse: e => null != e[2] && '' !== e[2] && p.i6(e[2]) ? [{
      type: 'codeBlockSyntax',
      content: e[1],
      originalMatch: e
    },
    {
      type: 'codeBlockLang',
      content: e[2],
      originalMatch: e
    }
  ] : {
    type: 'codeBlockSyntax',
    content: e[0],
    originalMatch: e
  }
}
  },
  N = (0, E.Z)([
T,
A
  ]),
  v = (0, E.Z)([
g,
A
  ]),
  O = l._p(N),
  R = l._p(v),
  C = {
max: 1 / 0,
maxAge: 1 * f.Z.Millis.MINUTE,
updateAgeOnGet: !0
  },
  y = new(o())(C),
  D = new(o())(C);

function L(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
i = p.rN(e);
  if (i.push(e.length), 1 === i.length && n)
return [];
  let a = 0,
o = n,
s = [];
  for (let n of i) {
if (o)
  s.push({
    text: e.substring(a, n),
    start: a,
    attributes: ['codeBlockText'],
    data: void 0
  });
else {
  let o = n === i[i.length - 2] ? e.substring(n + 3) : '';
  n += 3 + (null != o.match(p.Q2) ? o : '').length;
  let l = e.substring(a, n);
  '' !== l && function(e, t, n) {
    let r = [],
      i = n ? D : y,
      a = i.get(e);
    if (null != a)
      return a;
    let o = e.replace(/\r\n/g, ' \n').replace(/[\r\f]/g, ' ').replace(/\t/g, ' ') + '\n\n',
      s = {
        originalMatch: {
          index: 0,
          0: ''
        },
        type: 'paragraph',
        content: (n ? R : O)(o, !0, {
          returnMentionIds: !0,
          disableAutoBlockNewlines: !0,
          guildId: t
        })
      };
    b(r, o, s, 0, []);
    let l = function(e) {
      if (0 === (e = e.filter(e => e.text.length > 0)).length)
        return e;
      let t = [e[0]];
      for (let n = 1; n < e.length; n++) {
        let r = t[t.length - 1],
          i = r.start + r.text.length,
          a = e[n];
        a.start === i && null == r.data && null == a.data && r.attributes.join('-') === a.attributes.join('-') ? r.text += a.text : t.push(a);
      }
      return t;
    }(r);
    return i.set(e, l), l;
  }(l, t, r).forEach(e => {
    s.push({
      ...e,
      start: e.start + a
    });
  });
}
o = !o, a = n;
  }
  return s;
}

function b(e, t, n, r, a) {
  let {
content: o,
type: s,
originalMatch: l
  } = n;
  switch (i()(null != l, 'Slate: originalMatch must be set ' + JSON.stringify(n, void 0, 2)), s) {
case 'newline':
case 'br':
case 'paragraph':
case 'text':
case 'emoticon':
  return M(e, t, o || '', r, a);
case 'emoji':
case 'customEmoji': {
  let i = t.substring(r);
  if (!i.startsWith(l[0]) && (r = x(e, t, r, t.length), i = t.substring(r)), i.startsWith(l[0]))
    return U({
      result: e,
      sourceText: t,
      text: l[0],
      originalStart: r,
      attributes: [s],
      data: n
    });
  throw Error('Slate: Unable to find emoji: '.concat(l[0], ' in ').concat(t, ' at ').concat(r));
}
case 'mention':
case 'roleMention':
case 'channelMention':
case 'commandMention':
case 'staticRouteLink':
case 'soundboard':
case 'channel': {
  let {
    text: a,
    id: o
  } = n;
  if (null != a)
    return i()(a === l[0], 'Slate: text mentions must exactly match the regex match'), U({
      result: e,
      sourceText: t,
      text: a,
      originalStart: r,
      attributes: ['textMention'],
      data: {
        text: a
      }
    });
  return U({
    result: e,
    sourceText: t,
    text: l[0],
    originalStart: r,
    attributes: [s],
    data: {
      id: o
    }
  });
}
case 'timestamp':
  if (h.Z.getCurrentConfig({
      location: 'c70cbb_1'
    }, {
      autoTrackExposure: !1
    }).enabled)
    return U({
      result: e,
      sourceText: t,
      text: l[0],
      originalStart: r,
      attributes: [s],
      data: n
    });
  return M(e, t, l[0], r, a);
case 'em':
case 'autolink':
case 'strong':
case 'u':
case 's':
case 'escape':
case 'inlineCode':
case 'codeBlockSyntax':
case 'codeBlockLang':
case 'spoiler':
case 'url':
case 'link':
case 'subtext': {
  r = w(t, r);
  let {
    before: n,
    after: i
  } = function(e, t, n, r) {
    if ('inlineCode' === t)
      return {
        before: r[1],
        after: r[1]
      };
    if ('em' === t && '_' === e.substring(n, n + 1))
      return {
        before: '_',
        after: '_'
      };
    let i = m['link' === t ? 'url' : t];
    if ('inlineStyle' === i.type)
      return i;
    throw Error('Slate: rule must be an inlineStyle');
  }(t, s, r, l);
  return r = P(e, t, n, r, 'syntaxBefore'), a.push(s), r = M(e, t, null != o ? o : '', r, a), a.pop(), r = P(e, t, i, r, 'syntaxAfter'), w(t, r);
}
default:
  throw Error('Slate: Unknown rule type: '.concat(s));
  }
}

function M(e, t, n, r, i) {
  return 'string' == typeof n ? r = U({
result: e,
sourceText: t,
text: n,
originalStart: r,
attributes: i,
data: null
  }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
r = b(e, t, n, r, i);
  })), w(t, r);
}

function P(e, t, n, r, a) {
  if (n.length > 0) {
let o = t.indexOf(n, r),
  s = t.substring(r, o + n.length);
i()(o >= 0, 'Slate: Unable to find syntax characters'), e.push({
  text: s,
  attributes: [a],
  start: r,
  data: null
}), r = o + n.length;
  }
  return r;
}

function U(e) {
  let {
result: t,
sourceText: n,
text: r,
originalStart: i,
attributes: a,
data: o
  } = e, s = w(n, i);
  for (;
'\n' === r.charAt(0) || ' ' === r.charAt(0);)
r = r.substring(1);
  let l = n.indexOf(r, s);
  if (l !== s ? s = i = x(t, n, s, l) : '\\' === r && '\\' === n.charAt(l + 1) && (l++, i = ++s), l !== s)
throw new u.Z('MarkdownToSlate').error(JSON.stringify({
  sourceText: n,
  searchText: r,
  searchStartsAt: n.substring(s),
  startPos: s
})), Error('Slate: Unable to find content in source text!');
  let c = s + r.length,
d = n.substring(i, c);
  return t.push({
text: d,
attributes: a.slice(),
start: i,
data: o
  }), c;
}

function w(e, t) {
  for (;
'\n' === e.charAt(t) || ' ' === e.charAt(t);)
t++;
  return t;
}

function x(e, t, n, r) {
  for (; n < r;)
if (I.has(t[n]))
  n = P(e, t, t[n], n, 'syntaxBefore'), n = w(t, n);
else
  break;
  return n;
}