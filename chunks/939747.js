r.d(t, {
  Bg: function() {
return c;
  },
  Ic: function() {
return a;
  },
  M: function() {
return o;
  },
  OC: function() {
return _;
  },
  s3: function() {
return E;
  },
  uv: function() {
return i;
  }
});
var n = r(370336);

function a(e, t, r, a) {
  let o = Object.entries((0, n.Jr)(a)).sort((e, t) => e[0].localeCompare(t[0]));
  return `${ e }${ t }${ r }${ o }`;
}

function o(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
t = (t << 5) - t + e.charCodeAt(r), t &= t;
  return t >>> 0;
}

function i(e) {
  let t = '';
  for (let r of e) {
let e = Object.entries(r.tags),
  n = e.length > 0 ? `|#${ e.map(([e, t]) => `${ e }:${ t }`).join(',') }` : '';
t += `${ r.name }@${ r.unit }:${ r.metric }|${ r.metricType }${ n }|T${ r.timestamp }
`;
  }
  return t;
}

function _(e) {
  return e.replace(/[^\w]+/gi, '_');
}

function E(e) {
  return e.replace(/[^\w\-.]+/gi, '_');
}
let s = [
  [
'\n',
'\\n'
  ],
  [
'\r',
'\\r'
  ],
  [
'\t',
'\\t'
  ],
  [
'\\',
'\\\\'
  ],
  [
'|',
'\\u{7c}'
  ],
  [
',',
'\\u{2c}'
  ]
];

function c(e) {
  let t = {};
  for (let r in e)
if (Object.prototype.hasOwnProperty.call(e, r))
  t[r.replace(/[^\w\-./]+/gi, '')] = [...String(e[r])].reduce((e, t) => e + function(e) {
    for (let [t, r] of s)
      if (e === t)
        return r;
    return e;
  }(t), '');
  return t;
}