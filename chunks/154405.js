r.d(e, {
  _: function() {
return a;
  }
});
var n = r(442853),
  _ = r(28434);

function a(t, e, r) {
  let a = e.getOptions(),
{
  publicKey: i
} = e.getDsn() || {},
{
  segment: o
} = r && r.getUser() || {},
E = (0, n.Jr)({
  environment: a.environment || _.J,
  release: a.release,
  user_segment: o,
  public_key: i,
  trace_id: t
});
  return e.emit && e.emit('createDsc', E), E;
}