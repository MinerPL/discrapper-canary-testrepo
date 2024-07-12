r.d(e, {
  U: function() {
return i;
  },
  h: function() {
return o;
  }
});
var n = r(442853),
  _ = r(177668);

function a(t) {
  let e = t.protocol ? `${ t.protocol }:` : '',
r = t.port ? `:${ t.port }` : '';
  return `${ e }//${ t.host }${ r }${ t.path ? `/${ t.path }` : '' }/api/`;
}

function i(t, e = {}) {
  var r, _, i;
  let o = 'string' == typeof e ? e : e.tunnel,
E = 'string' != typeof e && e._metadata ? e._metadata.sdk : void 0;
  return o || `${ r = t, `${ a(r) }${ r.projectId }/envelope/` }?${ _ = t, i = E, (0, n._j)({
        sentry_key: _.publicKey,
        sentry_version: '7',
        ...i && { sentry_client: `${ i.name }/${ i.version }` }
    }) }`;
}

function o(t, e) {
  let r = (0, _.vK)(t);
  if (!r)
return '';
  let n = `${ a(r) }embed/error-page/`,
i = `dsn=${ (0, _.RA)(r) }`;
  for (let t in e) {
if ('dsn' !== t)
  if ('user' === t) {
    let t = e.user;
    if (!t)
      continue;
    t.name && (i += `&name=${ encodeURIComponent(t.name) }`), t.email && (i += `&email=${ encodeURIComponent(t.email) }`);
  } else
    i += `&${ encodeURIComponent(t) }=${ encodeURIComponent(e[t]) }`;
  }
  return `${ n }?${ i }`;
}