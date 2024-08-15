r.d(t, {
  U: function() {
return i;
  },
  h: function() {
return _;
  }
});
var n = r(370336),
  a = r(967752);

function o(e) {
  let t = e.protocol ? `${ e.protocol }:` : '',
r = e.port ? `:${ e.port }` : '';
  return `${ t }//${ e.host }${ r }${ e.path ? `/${ e.path }` : '' }/api/`;
}

function i(e, t, r) {
  var a, i, _;
  return t || `${ a = e, `${ o(a) }${ a.projectId }/envelope/` }?${ i = e, _ = r, (0, n._j)({
        sentry_key: i.publicKey,
        sentry_version: '7',
        ..._ && { sentry_client: `${ _.name }/${ _.version }` }
    }) }`;
}

function _(e, t) {
  let r = (0, a.vK)(e);
  if (!r)
return '';
  let n = `${ o(r) }embed/error-page/`,
i = `dsn=${ (0, a.RA)(r) }`;
  for (let e in t) {
if ('dsn' !== e && 'onClose' !== e)
  if ('user' === e) {
    let e = t.user;
    if (!e)
      continue;
    e.name && (i += `&name=${ encodeURIComponent(e.name) }`), e.email && (i += `&email=${ encodeURIComponent(e.email) }`);
  } else
    i += `&${ encodeURIComponent(e) }=${ encodeURIComponent(t[e]) }`;
  }
  return `${ n }?${ i }`;
}