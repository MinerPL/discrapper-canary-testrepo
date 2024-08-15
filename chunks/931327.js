r.r(t),
	r.d(t, {
		BrowserClient: function () {
			return o.R;
		},
		SDK_VERSION: function () {
			return n.Jn;
		},
		SEMANTIC_ATTRIBUTE_SENTRY_OP: function () {
			return n.$J;
		},
		SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function () {
			return n.S3;
		},
		SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function () {
			return n.TE;
		},
		SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function () {
			return n.Zj;
		},
		Scope: function () {
			return n.sX;
		},
		WINDOW: function () {
			return a.m9;
		},
		addBreadcrumb: function () {
			return n.n_;
		},
		addEventProcessor: function () {
			return n.Qy;
		},
		addIntegration: function () {
			return n.M5;
		},
		addTracingExtensions: function () {
			return n.Ts;
		},
		breadcrumbsIntegration: function () {
			return I.f;
		},
		browserApiErrorsIntegration: function () {
			return A.t;
		},
		browserProfilingIntegration: function () {
			return P.x;
		},
		browserTracingIntegration: function () {
			return g.E8;
		},
		captureConsoleIntegration: function () {
			return n.Xs;
		},
		captureEvent: function () {
			return n.eN;
		},
		captureException: function () {
			return n.Tb;
		},
		captureFeedback: function () {
			return n.N$;
		},
		captureMessage: function () {
			return n.uT;
		},
		captureSession: function () {
			return n.cg;
		},
		captureUserFeedback: function () {
			return c.Jd;
		},
		chromeStackLineParser: function () {
			return _.$3;
		},
		close: function () {
			return n.xv;
		},
		contextLinesIntegration: function () {
			return p.S;
		},
		continueTrace: function () {
			return n.yn;
		},
		createTransport: function () {
			return n.qv;
		},
		createUserFeedbackEnvelope: function () {
			return s.r;
		},
		debugIntegration: function () {
			return n.sC;
		},
		dedupeIntegration: function () {
			return n.RH;
		},
		defaultRequestInstrumentationOptions: function () {
			return C.k3;
		},
		defaultStackLineParsers: function () {
			return _.d8;
		},
		defaultStackParser: function () {
			return _.Dt;
		},
		endSession: function () {
			return n.TM;
		},
		eventFromException: function () {
			return E.dr;
		},
		eventFromMessage: function () {
			return E.aB;
		},
		exceptionFromError: function () {
			return E.GJ;
		},
		extraErrorDataIntegration: function () {
			return n.EY;
		},
		feedbackAsyncIntegration: function () {
			return S.Q;
		},
		feedbackIntegration: function () {
			return D.r;
		},
		feedbackSyncIntegration: function () {
			return D.r;
		},
		flush: function () {
			return n.yl;
		},
		forceLoad: function () {
			return c.Eg;
		},
		functionToStringIntegration: function () {
			return n.CP;
		},
		geckoStackLineParser: function () {
			return _.$Q;
		},
		getActiveSpan: function () {
			return n.HN;
		},
		getClient: function () {
			return n.s3;
		},
		getCurrentHub: function () {
			return n.Gd;
		},
		getCurrentScope: function () {
			return n.nZ;
		},
		getDefaultIntegrations: function () {
			return c.nV;
		},
		getFeedback: function () {
			return L.qm;
		},
		getGlobalScope: function () {
			return n.lW;
		},
		getIsolationScope: function () {
			return n.aF;
		},
		getReplay: function () {
			return O.T;
		},
		getRootSpan: function () {
			return n.Gx;
		},
		getSpanDescendants: function () {
			return n.Dp;
		},
		getSpanStatusFromHttpCode: function () {
			return n.ix;
		},
		globalHandlersIntegration: function () {
			return u.k;
		},
		httpClientIntegration: function () {
			return N.l;
		},
		httpContextIntegration: function () {
			return l.s;
		},
		inboundFiltersIntegration: function () {
			return n.SG;
		},
		init: function () {
			return c.S1;
		},
		instrumentOutgoingRequests: function () {
			return C.L7;
		},
		isInitialized: function () {
			return n.dk;
		},
		lastEventId: function () {
			return n.eW;
		},
		lazyLoadIntegration: function () {
			return T.R;
		},
		linkedErrorsIntegration: function () {
			return R.O;
		},
		makeBrowserOfflineTransport: function () {
			return M.O1;
		},
		makeFetchTransport: function () {
			return i.f;
		},
		makeMultiplexedTransport: function () {
			return n.Wq;
		},
		metrics: function () {
			return h.q;
		},
		moduleMetadataIntegration: function () {
			return n.wo;
		},
		onLoad: function () {
			return c.lA;
		},
		opera10StackLineParser: function () {
			return _.NP;
		},
		opera11StackLineParser: function () {
			return _.HH;
		},
		parameterize: function () {
			return n.XB;
		},
		registerSpanErrorInstrumentation: function () {
			return n.ar;
		},
		replayCanvasIntegration: function () {
			return f.m;
		},
		replayIntegration: function () {
			return O.G;
		},
		reportingObserverIntegration: function () {
			return d.y;
		},
		rewriteFramesIntegration: function () {
			return n.vU;
		},
		sendFeedback: function () {
			return L.fA;
		},
		sessionTimingIntegration: function () {
			return n.rE;
		},
		setContext: function () {
			return n.v;
		},
		setCurrentClient: function () {
			return n.KW;
		},
		setExtra: function () {
			return n.sU;
		},
		setExtras: function () {
			return n.rJ;
		},
		setHttpStatus: function () {
			return n.Q0;
		},
		setMeasurement: function () {
			return n.oi;
		},
		setTag: function () {
			return n.YA;
		},
		setTags: function () {
			return n.mG;
		},
		setUser: function () {
			return n.av;
		},
		showReportDialog: function () {
			return c.jp;
		},
		spanToBaggageHeader: function () {
			return n.uc;
		},
		spanToJSON: function () {
			return n.XU;
		},
		spanToTraceHeader: function () {
			return n.Hb;
		},
		startBrowserTracingNavigationSpan: function () {
			return g.og;
		},
		startBrowserTracingPageLoadSpan: function () {
			return g.Wo;
		},
		startInactiveSpan: function () {
			return n.qp;
		},
		startNewTrace: function () {
			return n.Iw;
		},
		startSession: function () {
			return n.yj;
		},
		startSpan: function () {
			return n.GK;
		},
		startSpanManual: function () {
			return n.V0;
		},
		thirdPartyErrorFilterIntegration: function () {
			return n.Lw;
		},
		winjsStackLineParser: function () {
			return _.R2;
		},
		withActiveSpan: function () {
			return n._d;
		},
		withIsolationScope: function () {
			return n.wi;
		},
		withScope: function () {
			return n.$e;
		},
		zodErrorsIntegration: function () {
			return n.id;
		}
	});
var n = r(148503),
	a = r(163162),
	o = r(833772),
	i = r(387486),
	_ = r(297117),
	E = r(878719),
	s = r(463461),
	c = r(509068),
	I = r(408720),
	u = r(804410),
	l = r(376457),
	R = r(42367),
	A = r(515737),
	T = r(27269),
	d = r(17411),
	N = r(453574),
	p = r(386797),
	O = r(616456),
	f = r(778600),
	S = r(780850),
	D = r(226483),
	L = r(185461),
	h = r(166800),
	C = r(799033),
	g = r(325124),
	M = r(281894),
	P = r(130260);
