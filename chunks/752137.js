var r = n(317770),
    i = n(626135),
    a = n(358085),
    s = n(998502),
    o = n(981631);
class l extends r.Z {
    _initialize() {
        if (!!a.isPlatformEmbedded)
            s.ZP.on('APP_PUSH_ANALYTICS', (e, t) => {
                this._handleEventResponse(t);
            }),
                this.processModuleEvents();
    }
    _terminate() {}
    processModuleEvents() {
        try {
            s.ZP.send('APP_GET_ANALYTICS_EVENTS');
        } catch (e) {
            console.error('[analytics] failed to send analytics events query: '.concat(e));
        }
    }
    _handleEventResponse(e) {
        if (null != e)
            e.forEach((e) => {
                'cdm' === e.type && (e.name === o.rMx.CDM_LOAD_STATUS || e.name === o.rMx.CDM_READY_COMPLETE ? i.default.track(e.name, e.data) : console.log('[analytics] received unknown cdm analytic event '.concat(e.name)));
            });
    }
}
t.Z = new l();
