r.d(e, {
  RA: function() {
return a;
  },
  U4: function() {
return i;
  },
  vK: function() {
return E;
  }
});
var n = r(529866);
let _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function a(t, e = !1) {
  let {
host: r,
path: n,
pass: _,
port: a,
projectId: i,
protocol: o,
publicKey: E
  } = t;
  return `${ o }://${ E }${ e && _ ? `:${ _ }` : '' }@${ r }${ a ? `:${ a }` : '' }/${ n ? `${ n }/` : n }${ i }`;
}

function i(t) {
  let e = _.exec(t);
  if (!e) {
console.error(`Invalid Sentry Dsn: ${ t }`);
return;
  }
  let [r, n, a = '', i, E = '', s] = e.slice(1), c = '', I = s, R = I.split('/');
  if (R.length > 1 && (c = R.slice(0, -1).join('/'), I = R.pop()), I) {
let t = I.match(/^\d+/);
t && (I = t[0]);
  }
  return o({
host: i,
pass: a,
path: c,
projectId: I,
port: E,
protocol: r,
publicKey: n
  });
}

function o(t) {
  return {
protocol: t.protocol,
publicKey: t.publicKey || '',
pass: t.pass || '',
host: t.host,
port: t.port || '',
path: t.path || '',
projectId: t.projectId
  };
}

function E(t) {
  let e = 'string' == typeof t ? i(t) : o(t);
  if (!!e && !! function(t) {
  var e;
  if (!('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__))
    return !0;
  let {
    port: r,
    projectId: _,
    protocol: a
  } = t;
  if ([
      'protocol',
      'publicKey',
      'host',
      'projectId'
    ].find(e => !t[e] && (n.kg.error(`Invalid Sentry Dsn: ${ e } missing`), !0)))
    return !1;
  if (!_.match(/^\d+$/))
    return n.kg.error(`Invalid Sentry Dsn: Invalid projectId ${ _ }`), !1;
  return 'http' === (e = a) || 'https' === e ? !(r && isNaN(parseInt(r, 10))) || (n.kg.error(`Invalid Sentry Dsn: Invalid port ${ r }`), !1) : (n.kg.error(`Invalid Sentry Dsn: Invalid protocol ${ a }`), !1);
}(e))
return e;
}