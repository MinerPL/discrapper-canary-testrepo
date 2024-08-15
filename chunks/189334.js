n(47120);
var r = n(147913),
	i = n(282397),
	a = n(626135),
	s = n(131595),
	o = n(475774),
	l = n(981631);
function u(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let c = 'interaction_iframe_modal';
async function d(e) {
	let { openInteractionModal: t } = await Promise.all([n.e('29549'), n.e('31605'), n.e('72181'), n.e('81272'), n.e('46097'), n.e('8739'), n.e('30243'), n.e('24864')]).then(n.bind(n, 440934));
	t(e),
		a.default.track(l.rMx.OPEN_MODAL, {
			type: 'interaction_modal',
			application_id: e.application.id
		});
}
class _ extends r.Z {
	constructor(...e) {
		super(...e),
			u(this, 'iframeModalOpenTimeMs', void 0),
			u(this, 'actions', {
				INTERACTION_MODAL_CREATE: (e) => {
					d(e);
				},
				INTERACTION_IFRAME_MODAL_CREATE: (e) => {
					var t;
					(this.iframeModalOpenTimeMs = Date.now()),
						(t = e),
						(0, o.Z)(t),
						a.default.track(l.rMx.OPEN_MODAL, {
							type: c,
							application_id: t.application.id
						});
				},
				INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
					!(function (e, t) {
						let n = null != t ? Date.now() - t : void 0;
						a.default.track(l.rMx.MODAL_DISMISSED, {
							type: c,
							application_id: e.applicationId,
							duration_open_ms: n
						});
					})(e, this.iframeModalOpenTimeMs),
						(this.iframeModalOpenTimeMs = void 0);
				},
				RPC_APP_DISCONNECTED: (e) => {
					!(function (e) {
						let { application: t } = e,
							n = i.ZP.getIFrameModalApplicationId(),
							r = i.ZP.getIFrameModalKey();
						t.id === n && null != n && (0, s.Z)(n, r);
					})(e);
				}
			});
	}
}
t.Z = new _();
