r.d(e, {
  R: function() {
return T;
  }
});
var n = r(861579),
  _ = r(139782),
  a = r(468391),
  i = r(529866),
  o = r(854569),
  E = r(177668),
  s = r(590171),
  c = r(643487),
  I = r(124969),
  R = r(184612);
class T extends n.W {
  constructor(t) {
let e = c.m9.SENTRY_SDK_SOURCE || (0, a.S)();
t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
  name: 'sentry.javascript.browser',
  packages: [{
    name: `${ e }:@sentry/browser`,
    version: _.J
  }],
  version: _.J
}, super(t), t.sendClientReports && c.m9.document && c.m9.document.addEventListener('visibilitychange', () => {
  'hidden' === c.m9.document.visibilityState && this._flushOutcomes();
});
  }
  eventFromException(t, e) {
return (0, s.dr)(this._options.stackParser, t, e, this._options.attachStacktrace);
  }
  eventFromMessage(t, e = 'info', r) {
return (0, s.aB)(this._options.stackParser, t, e, r, this._options.attachStacktrace);
  }
  sendEvent(t, e) {
let r = this.getIntegrationById(I.p);
r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(t), super.sendEvent(t, e);
  }
  captureUserFeedback(t) {
if (!this._isEnabled()) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn('SDK not enabled, will not capture user feedback.');
  return;
}
let e = (0, R.r)(t, {
  metadata: this.getSdkMetadata(),
  dsn: this.getDsn(),
  tunnel: this.getOptions().tunnel
});
this._sendEnvelope(e);
  }
  _prepareEvent(t, e, r) {
return t.platform = t.platform || 'javascript', super._prepareEvent(t, e, r);
  }
  _flushOutcomes() {
let t = this._clearOutcomes();
if (0 === t.length) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log('No outcomes to send');
  return;
}
if (!this._dsn) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log('No dsn provided, will not send outcomes');
  return;
}
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log('Sending outcomes:', t);
let e = (0, o.y)(t, this._options.tunnel && (0, E.RA)(this._dsn));
this._sendEnvelope(e);
  }
}