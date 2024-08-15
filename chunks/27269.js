r.d(t, {
	R: function () {
		return E;
	}
});
var n = r(263449),
	a = r(452896),
	o = r(163162);
let i = {
		replayIntegration: 'replay',
		replayCanvasIntegration: 'replay-canvas',
		feedbackIntegration: 'feedback',
		feedbackModalIntegration: 'feedback-modal',
		feedbackScreenshotIntegration: 'feedback-screenshot',
		captureConsoleIntegration: 'captureconsole',
		contextLinesIntegration: 'contextlines',
		linkedErrorsIntegration: 'linkederrors',
		debugIntegration: 'debug',
		dedupeIntegration: 'dedupe',
		extraErrorDataIntegration: 'extraerrordata',
		httpClientIntegration: 'httpclient',
		reportingObserverIntegration: 'reportingobserver',
		rewriteFramesIntegration: 'rewriteframes',
		sessionTimingIntegration: 'sessiontiming',
		browserProfilingIntegration: 'browserprofiling'
	},
	_ = o.m9;
async function E(e) {
	let t = i[e],
		r = (_.Sentry = _.Sentry || {});
	if (!t) throw Error(`Cannot lazy load integration: ${e}`);
	let E = r[e];
	if ('function' == typeof E) return E;
	let s = (function (e) {
			let t = (0, n.s3)(),
				r = t && t.getOptions(),
				o = (r && r.cdnBaseUrl) || 'https://browser.sentry-cdn.com';
			return new URL(`/${a.J}/${e}.min.js`, o).toString();
		})(t),
		c = o.m9.document.createElement('script');
	(c.src = s), (c.crossOrigin = 'anonymous'), (c.referrerPolicy = 'origin');
	let I = new Promise((e, t) => {
		c.addEventListener('load', () => e()), c.addEventListener('error', t);
	});
	o.m9.document.body.appendChild(c);
	try {
		await I;
	} catch (t) {
		throw Error(`Error when loading integration: ${e}`);
	}
	let u = r[e];
	if ('function' != typeof u) throw Error(`Could not load integration: ${e}`);
	return u;
}
