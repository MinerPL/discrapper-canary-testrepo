r.d(e, {
  I: function() {
return p;
  },
  O: function() {
return o;
  }
});
var n = r(146150),
  i = r(647005);

function o(t) {
  if (0 === t.length)
throw Error('Number skeleton cannot be empty');
  for (var e = t.split(i.r).filter(function(t) {
  return t.length > 0;
}), r = [], n = 0; n < e.length; n++) {
var o = e[n].split('/');
if (0 === o.length)
  throw Error('Invalid number skeleton');
for (var a = o[0], s = o.slice(1), u = 0; u < s.length; u++)
  if (0 === s[u].length)
    throw Error('Invalid number skeleton');
r.push({
  stem: a,
  options: s
});
  }
  return r;
}
var a = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
  s = /^(@+)?(\+|#+)?[rs]?$/g,
  u = /(\*)(0+)|(#+)(0+)|(0+)/g,
  c = /^(0+)$/;

function l(t) {
  var e = {};
  return 'r' === t[t.length - 1] ? e.roundingPriority = 'morePrecision' : 's' === t[t.length - 1] && (e.roundingPriority = 'lessPrecision'), t.replace(s, function(t, r, n) {
return 'string' != typeof n ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : '+' === n ? e.minimumSignificantDigits = r.length : '#' === r[0] ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + ('string' == typeof n ? n.length : 0)), '';
  }), e;
}

function h(t) {
  switch (t) {
case 'sign-auto':
  return {
    signDisplay: 'auto'
  };
case 'sign-accounting':
case '()':
  return {
    currencySign: 'accounting'
  };
case 'sign-always':
case '+!':
  return {
    signDisplay: 'always'
  };
case 'sign-accounting-always':
case '()!':
  return {
    signDisplay: 'always',
      currencySign: 'accounting'
  };
case 'sign-except-zero':
case '+?':
  return {
    signDisplay: 'exceptZero'
  };
case 'sign-accounting-except-zero':
case '()?':
  return {
    signDisplay: 'exceptZero',
      currencySign: 'accounting'
  };
case 'sign-never':
case '+_':
  return {
    signDisplay: 'never'
  };
  }
}

function f(t) {
  var e = h(t);
  return e ? e : {};
}

function p(t) {
  for (var e = {}, r = 0; r < t.length; r++) {
var i = t[r];
switch (i.stem) {
  case 'percent':
  case '%':
    e.style = 'percent';
    continue;
  case '%x100':
    e.style = 'percent', e.scale = 100;
    continue;
  case 'currency':
    e.style = 'currency', e.currency = i.options[0];
    continue;
  case 'group-off':
  case ',_':
    e.useGrouping = !1;
    continue;
  case 'precision-integer':
  case '.':
    e.maximumFractionDigits = 0;
    continue;
  case 'measure-unit':
  case 'unit':
    e.style = 'unit', e.unit = i.options[0].replace(/^(.*?)-/, '');
    continue;
  case 'compact-short':
  case 'K':
    e.notation = 'compact', e.compactDisplay = 'short';
    continue;
  case 'compact-long':
  case 'KK':
    e.notation = 'compact', e.compactDisplay = 'long';
    continue;
  case 'scientific':
    e = (0, n.pi)((0, n.pi)((0, n.pi)({}, e), {
      notation: 'scientific'
    }), i.options.reduce(function(t, e) {
      return (0, n.pi)((0, n.pi)({}, t), f(e));
    }, {}));
    continue;
  case 'engineering':
    e = (0, n.pi)((0, n.pi)((0, n.pi)({}, e), {
      notation: 'engineering'
    }), i.options.reduce(function(t, e) {
      return (0, n.pi)((0, n.pi)({}, t), f(e));
    }, {}));
    continue;
  case 'notation-simple':
    e.notation = 'standard';
    continue;
  case 'unit-width-narrow':
    e.currencyDisplay = 'narrowSymbol', e.unitDisplay = 'narrow';
    continue;
  case 'unit-width-short':
    e.currencyDisplay = 'code', e.unitDisplay = 'short';
    continue;
  case 'unit-width-full-name':
    e.currencyDisplay = 'name', e.unitDisplay = 'long';
    continue;
  case 'unit-width-iso-code':
    e.currencyDisplay = 'symbol';
    continue;
  case 'scale':
    e.scale = parseFloat(i.options[0]);
    continue;
  case 'rounding-mode-floor':
    e.roundingMode = 'floor';
    continue;
  case 'rounding-mode-ceiling':
    e.roundingMode = 'ceil';
    continue;
  case 'rounding-mode-down':
    e.roundingMode = 'trunc';
    continue;
  case 'rounding-mode-up':
    e.roundingMode = 'expand';
    continue;
  case 'rounding-mode-half-even':
    e.roundingMode = 'halfEven';
    continue;
  case 'rounding-mode-half-down':
    e.roundingMode = 'halfTrunc';
    continue;
  case 'rounding-mode-half-up':
    e.roundingMode = 'halfExpand';
    continue;
  case 'integer-width':
    if (i.options.length > 1)
      throw RangeError('integer-width stems only accept a single optional option');
    i.options[0].replace(u, function(t, r, n, i, o, a) {
      if (r)
        e.minimumIntegerDigits = n.length;
      else if (i && o)
        throw Error('We currently do not support maximum integer digits');
      else if (a)
        throw Error('We currently do not support exact integer digits');
      return '';
    });
    continue;
}
if (c.test(i.stem)) {
  e.minimumIntegerDigits = i.stem.length;
  continue;
}
if (a.test(i.stem)) {
  if (i.options.length > 1)
    throw RangeError('Fraction-precision stems only accept a single optional option');
  i.stem.replace(a, function(t, r, n, i, o, a) {
    return '*' === n ? e.minimumFractionDigits = r.length : i && '#' === i[0] ? e.maximumFractionDigits = i.length : o && a ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + a.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), '';
  });
  var o = i.options[0];
  'w' === o ? e = (0, n.pi)((0, n.pi)({}, e), {
    trailingZeroDisplay: 'stripIfInteger'
  }) : o && (e = (0, n.pi)((0, n.pi)({}, e), l(o)));
  continue;
}
if (s.test(i.stem)) {
  e = (0, n.pi)((0, n.pi)({}, e), l(i.stem));
  continue;
}
var p = h(i.stem);
p && (e = (0, n.pi)((0, n.pi)({}, e), p));
var m = function(t) {
  var e;
  if ('E' === t[0] && 'E' === t[1] ? (e = {
      notation: 'engineering'
    }, t = t.slice(2)) : 'E' === t[0] && (e = {
      notation: 'scientific'
    }, t = t.slice(1)), e) {
    var r = t.slice(0, 2);
    if ('+!' === r ? (e.signDisplay = 'always', t = t.slice(2)) : '+?' === r && (e.signDisplay = 'exceptZero', t = t.slice(2)), !c.test(t))
      throw Error('Malformed concise eng/scientific notation');
    e.minimumIntegerDigits = t.length;
  }
  return e;
}(i.stem);
m && (e = (0, n.pi)((0, n.pi)({}, e), m));
  }
  return e;
}