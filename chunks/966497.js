r.d(t, {
  Z: function() {
return i;
  },
  w: function() {
return _;
  }
});
var n = r(622916),
  a = r(255768),
  o = r(696486);

function i(e) {
  if (!a.X)
return;
  let {
description: t = '< unknown name >',
op: r = '< unknown op >',
parent_span_id: i
  } = (0, o.XU)(e), {
spanId: _
  } = e.spanContext(), E = (0, o.Tt)(e), s = (0, o.Gx)(e), c = s === e, I = `[Tracing] Starting ${ E ? 'sampled' : 'unsampled' } ${ c ? 'root ' : '' }span`, u = [
`op: ${ r }`,
`name: ${ t }`,
`ID: ${ _ }`
  ];
  if (i && u.push(`parent ID: ${ i }`), !c) {
let {
  op: e,
  description: t
} = (0, o.XU)(s);
u.push(`root ID: ${ s.spanContext().spanId }`), e && u.push(`root op: ${ e }`), t && u.push(`root description: ${ t }`);
  }
  n.kg.log(`${ I }
  ${ u.join('\n  ') }`);
}

function _(e) {
  if (!a.X)
return;
  let {
description: t = '< unknown name >',
op: r = '< unknown op >'
  } = (0, o.XU)(e), {
spanId: i
  } = e.spanContext(), _ = (0, o.Gx)(e) === e, E = `[Tracing] Finishing "${ r }" ${ _ ? 'root ' : '' }span "${ t }" with ID ${ i }`;
  n.kg.log(E);
}