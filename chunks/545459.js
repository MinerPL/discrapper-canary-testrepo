r.d(e, {
  EN: function() {
return E;
  },
  IQ: function() {
return s;
  },
  bU: function() {
return a;
  }
});
var n = r(46834),
  _ = r(529866);
let a = 'baggage',
  i = 'sentry-',
  o = /^sentry-/;

function E(t) {
  if (!(0, n.HD)(t) && !Array.isArray(t))
return;
  let e = {};
  if (Array.isArray(t))
e = t.reduce((t, e) => {
  let r = c(e);
  return {
    ...t,
    ...r
  };
}, {});
  else {
if (!t)
  return;
e = c(t);
  }
  let r = Object.entries(e).reduce((t, [e, r]) => (e.match(o) && (t[e.slice(i.length)] = r), t), {});
  return Object.keys(r).length > 0 ? r : void 0;
}

function s(t) {
  if (!!t)
return function(t) {
  if (0 !== Object.keys(t).length)
    return Object.entries(t).reduce((t, [e, r], n) => {
      let a = `${ encodeURIComponent(e) }=${ encodeURIComponent(r) }`,
        i = 0 === n ? a : `${ t },${ a }`;
      return i.length > 8192 ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn(`Not adding key: ${ e } with val: ${ r } to baggage header due to exceeding baggage size limits.`), t) : i;
    }, '');
}(Object.entries(t).reduce((t, [e, r]) => (r && (t[`${ i }${ e }`] = r), t), {}));
}

function c(t) {
  return t.split(',').map(t => t.split('=').map(t => decodeURIComponent(t.trim()))).reduce((t, [e, r]) => (t[e] = r, t), {});
}