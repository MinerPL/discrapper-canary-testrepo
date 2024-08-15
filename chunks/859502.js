r.d(t, {
  a: function() {
return c;
  }
});
var n = r(824851),
  a = r(753642),
  o = r(622916),
  i = r(255768),
  _ = r(696486),
  E = r(793373);
let s = !1;

function c() {
  if (!s)
s = !0, (0, n.V)(I), (0, a.h)(I);
}

function I() {
  let e = (0, _.HN)(),
t = e && (0, _.Gx)(e);
  if (t) {
let e = 'internal_error';
i.X && o.kg.log(`[Tracing] Root span: ${ e } -> Global error occured`), t.setStatus({
  code: E.jt,
  message: e
});
  }
}
I.tag = 'sentry_tracingErrorCallback';