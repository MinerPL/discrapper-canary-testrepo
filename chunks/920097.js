e.exports = function(e) {
  let t = '[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*',
n = '\\|[^]*?\\|',
r = '(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?',
i = {
  className: 'literal',
  begin: '\\b(t{1}|nil)\\b'
},
a = {
  className: 'number',
  variants: [{
      begin: r,
      relevance: 0
    },
    {
      begin: '#(b|B)[0-1]+(/[0-1]+)?'
    },
    {
      begin: '#(o|O)[0-7]+(/[0-7]+)?'
    },
    {
      begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'
    },
    {
      begin: '#(c|C)\\(' + r + ' +' + r,
      end: '\\)'
    }
  ]
},
s = e.inherit(e.QUOTE_STRING_MODE, {
  illegal: null
}),
o = e.COMMENT(';', '$', {
  relevance: 0
}),
l = {
  begin: '\\*',
  end: '\\*'
},
u = {
  className: 'symbol',
  begin: '[:&]' + t
},
c = {
  begin: t,
  relevance: 0
},
d = {
  contains: [
    a,
    s,
    l,
    u,
    {
      begin: '\\(',
      end: '\\)',
      contains: [
        'self',
        i,
        s,
        a,
        c
      ]
    },
    c
  ],
  variants: [{
      begin: '[\'`]\\(',
      end: '\\)'
    },
    {
      begin: '\\(quote ',
      end: '\\)',
      keywords: {
        name: 'quote'
      }
    },
    {
      begin: '\'' + n
    }
  ]
},
_ = {
  variants: [{
      begin: '\'' + t
    },
    {
      begin: '#\'' + t + '(::' + t + ')*'
    }
  ]
},
E = {
  begin: '\\(\\s*',
  end: '\\)'
},
f = {
  endsWithParent: !0,
  relevance: 0
};
  return E.contains = [{
  className: 'name',
  variants: [{
      begin: t,
      relevance: 0
    },
    {
      begin: n
    }
  ]
},
f
  ], f.contains = [
d,
_,
E,
i,
a,
s,
o,
l,
u,
{
  begin: n
},
c
  ], {
name: 'Lisp',
illegal: /\S/,
contains: [
  a,
  e.SHEBANG(),
  i,
  s,
  o,
  d,
  _,
  E,
  c
]
  };
};