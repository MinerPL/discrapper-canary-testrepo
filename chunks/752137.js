var r = n(317770),
  i = n(626135),
  a = n(358085),
  o = n(998502),
  s = n(981631);
class l extends r.Z {
  _initialize() {
if (!!a.isPlatformEmbedded)
  o.ZP.on('APP_PUSH_ANALYTICS', (e, t) => {
    this._handleEventResponse(t);
  }), this.processModuleEvents();
  }
  _terminate() {}
  processModuleEvents() {
try {
  o.ZP.send('APP_GET_ANALYTICS_EVENTS');
} catch (e) {
  console.error('[analytics] failed to send analytics events query: '.concat(e));
}
  }
  _handleEventResponse(e) {
if (null != e)
  e.forEach(e => {
    'cdm' === e.type && (e.name === s.rMx.CDM_LOAD_STATUS || e.name === s.rMx.CDM_READY_COMPLETE ? i.default.track(e.name, e.data) : console.log('[analytics] received unknown cdm analytic event '.concat(e.name)));
  });
  }
}
t.Z = new l();