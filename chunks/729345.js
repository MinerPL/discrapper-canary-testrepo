n.d(t, {
  E: function() {
return f;
  }
});
var r = n(544891),
  i = n(552871),
  a = n(283080),
  o = n(592125),
  s = n(569611),
  l = n(710845),
  u = n(705646),
  c = n(104639),
  d = n(691895),
  _ = n(981631);
let E = new l.Z('DebugUploadManager');
async function f(e, t) {
  await h(e), await (0, i.u)(14680064, t);
}
async function h(e) {
  try {
let t = s.Pz(),
  n = '',
  i = await (0, u.Z)().then(e => (0, u.S)(e, !0)),
  l = t.length + n.length + i.length;
if (l > 9437184) {
  let e = 1 - 9437184 / l;
  t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), i = i.slice(i.length - Math.floor(i.length * e));
}
let E = null,
  f = '\n    '.concat((0, d.Z)(E), '\n\n    ').concat((0, a.EA)(), '\n\n    Metadata:\n    ').concat(JSON.stringify((0, c.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ').concat(JSON.stringify(o.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ').concat(t, '\n\n    System logs:\n    ').concat(n, '\n\n    Push Notifications:\n    ').concat(i, '\n    ');
s.ZH();
let h = _.ANM.DEBUG_LOG(e, 'discord_app_logs');
await r.tn.post({
  url: h,
  body: f,
  retries: 3,
  headers: {
    'Content-Type': 'text/plain'
  },
  oldFormErrors: !0
});
  } catch (e) {
E.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
  }
}