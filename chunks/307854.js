n.d(e, {
    s: function () {
        return f;
    }
});
var r = n(731889),
    i = n(573736),
    s = n(101284),
    o = n(394798),
    u = n(622916),
    c = n(112797),
    a = n(99342);
class l {
    constructor() {
        (this._notifyingListeners = !1), (this._scopeListeners = []), (this._eventProcessors = []), (this._breadcrumbs = []), (this._attachments = []), (this._user = {}), (this._tags = {}), (this._extra = {}), (this._contexts = {}), (this._sdkProcessingMetadata = {}), (this._propagationContext = (0, r.Q)());
    }
    clone() {
        let t = new l();
        return (t._breadcrumbs = [...this._breadcrumbs]), (t._tags = { ...this._tags }), (t._extra = { ...this._extra }), (t._contexts = { ...this._contexts }), (t._user = this._user), (t._level = this._level), (t._session = this._session), (t._transactionName = this._transactionName), (t._fingerprint = this._fingerprint), (t._eventProcessors = [...this._eventProcessors]), (t._requestSession = this._requestSession), (t._attachments = [...this._attachments]), (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }), (t._propagationContext = { ...this._propagationContext }), (t._client = this._client), (t._lastEventId = this._lastEventId), (0, a.D)(t, (0, a.Y)(this)), t;
    }
    setClient(t) {
        this._client = t;
    }
    setLastEventId(t) {
        this._lastEventId = t;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(t) {
        this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t), this;
    }
    setUser(t) {
        return (
            (this._user = t || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }),
            this._session && (0, c.CT)(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
        );
    }
    getUser() {
        return this._user;
    }
    getRequestSession() {
        return this._requestSession;
    }
    setRequestSession(t) {
        return (this._requestSession = t), this;
    }
    setTags(t) {
        return (
            (this._tags = {
                ...this._tags,
                ...t
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setTag(t, e) {
        return (
            (this._tags = {
                ...this._tags,
                [t]: e
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtras(t) {
        return (
            (this._extra = {
                ...this._extra,
                ...t
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtra(t, e) {
        return (
            (this._extra = {
                ...this._extra,
                [t]: e
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setFingerprint(t) {
        return (this._fingerprint = t), this._notifyScopeListeners(), this;
    }
    setLevel(t) {
        return (this._level = t), this._notifyScopeListeners(), this;
    }
    setTransactionName(t) {
        return (this._transactionName = t), this._notifyScopeListeners(), this;
    }
    setContext(t, e) {
        return null === e ? delete this._contexts[t] : (this._contexts[t] = e), this._notifyScopeListeners(), this;
    }
    setSession(t) {
        return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(t) {
        if (!t) return this;
        let e = 'function' == typeof t ? t(this) : t,
            [n, r] = e instanceof f ? [e.getScopeData(), e.getRequestSession()] : (0, i.PO)(e) ? [t, t.requestSession] : [],
            { tags: s, extra: o, user: u, contexts: c, level: a, fingerprint: l = [], propagationContext: h } = n || {};
        return (
            (this._tags = {
                ...this._tags,
                ...s
            }),
            (this._extra = {
                ...this._extra,
                ...o
            }),
            (this._contexts = {
                ...this._contexts,
                ...c
            }),
            u && Object.keys(u).length && (this._user = u),
            a && (this._level = a),
            l.length && (this._fingerprint = l),
            h && (this._propagationContext = h),
            r && (this._requestSession = r),
            this
        );
    }
    clear() {
        return (this._breadcrumbs = []), (this._tags = {}), (this._extra = {}), (this._user = {}), (this._contexts = {}), (this._level = void 0), (this._transactionName = void 0), (this._fingerprint = void 0), (this._requestSession = void 0), (this._session = void 0), (0, a.D)(this, void 0), (this._attachments = []), (this._propagationContext = (0, r.Q)()), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(t, e) {
        let n = 'number' == typeof e ? e : 100;
        if (n <= 0) return this;
        let r = {
                timestamp: (0, s.yW)(),
                ...t
            },
            i = this._breadcrumbs;
        return i.push(r), (this._breadcrumbs = i.length > n ? i.slice(-n) : i), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(t) {
        return this._attachments.push(t), this;
    }
    clearAttachments() {
        return (this._attachments = []), this;
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, a.Y)(this)
        };
    }
    setSDKProcessingMetadata(t) {
        return (
            (this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }),
            this
        );
    }
    setPropagationContext(t) {
        return (this._propagationContext = t), this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(t, e) {
        let n = e && e.event_id ? e.event_id : (0, o.DM)();
        if (!this._client) return u.kg.warn('No client configured on scope - will not capture exception!'), n;
        let r = Error('Sentry syntheticException');
        return (
            this._client.captureException(
                t,
                {
                    originalException: t,
                    syntheticException: r,
                    ...e,
                    event_id: n
                },
                this
            ),
            n
        );
    }
    captureMessage(t, e, n) {
        let r = n && n.event_id ? n.event_id : (0, o.DM)();
        if (!this._client) return u.kg.warn('No client configured on scope - will not capture message!'), r;
        let i = Error(t);
        return (
            this._client.captureMessage(
                t,
                e,
                {
                    originalException: t,
                    syntheticException: i,
                    ...n,
                    event_id: r
                },
                this
            ),
            r
        );
    }
    captureEvent(t, e) {
        let n = e && e.event_id ? e.event_id : (0, o.DM)();
        return this._client
            ? (this._client.captureEvent(
                  t,
                  {
                      ...e,
                      event_id: n
                  },
                  this
              ),
              n)
            : (u.kg.warn('No client configured on scope - will not capture event!'), n);
    }
    _notifyScopeListeners() {
        !this._notifyingListeners &&
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
                t(this);
            }),
            (this._notifyingListeners = !1));
    }
}
let f = l;
