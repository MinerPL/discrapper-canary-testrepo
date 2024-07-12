r.d(e, {
  Pd: function() {
return o;
  }
});
var n = r(529866),
  _ = r(50074),
  a = r(128603);

function i(t, e) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.info(`[Offline]: ${ t }`, e);
}

function o(t) {
  return e => {
let r;
let n = t(e),
  o = e.createStore ? e.createStore(e) : void 0,
  E = 5000;

function s(t) {
  if (!!o)
    r && clearTimeout(r), 'number' != typeof(r = setTimeout(async () => {
      r = void 0;
      let t = await o.pop();
      t && (i('Attempting to send previously queued event'), I(t).catch(t => {
        i('Failed to retry sending', t);
      }));
    }, t)) && r.unref && r.unref();
}

function c() {
  if (!r)
    s(E), E = Math.min(2 * E, 3600000);
}
async function I(t) {
  try {
    let e = await n.send(t),
      r = 100;
    if (e) {
      if (e.headers && e.headers['retry-after'])
        r = (0, a.JY)(e.headers['retry-after']);
      else if ((e.statusCode || 0) >= 400)
        return e;
    }
    return s(r), E = 5000, e;
  } catch (n) {
    var r, I, R;
    if (o && await (r = t, I = n, R = E, !(0, _.R)(r, [
        'replay_event',
        'replay_recording',
        'client_report'
      ]) && (!e.shouldStore || e.shouldStore(r, I, R))))
      return await o.insert(t), c(), i('Error sending. Event queued', n), {};
    throw n;
  }
}
return e.flushAtStartup && c(), {
  send: I,
  flush: t => n.flush(t)
};
  };
}