r.d(t, {
  j: function() {
return E;
  }
});
var n = r(696486),
  a = r(793373),
  o = r(622916),
  i = r(454463),
  _ = r(163162);

function E() {
  _.m9 && _.m9.document ? _.m9.document.addEventListener('visibilitychange', () => {
let e = (0, n.HN)();
if (!e)
  return;
let t = (0, n.Gx)(e);
if (_.m9.document.hidden && t) {
  let e = 'cancelled',
    {
      op: r,
      status: _
    } = (0, n.XU)(t);
  i.X && o.kg.log(`[Tracing] Transaction: ${ e } -> since tab moved to the background, op: ${ r }`), !_ && t.setStatus({
    code: a.jt,
    message: e
  }), t.setAttribute('sentry.cancellation_reason', 'document.hidden'), t.end();
}
  }) : i.X && o.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
}