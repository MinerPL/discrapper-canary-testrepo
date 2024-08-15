var r,
	i,
	a,
	s,
	o = n(392711),
	l = n.n(o),
	u = n(442837),
	c = n(433517),
	d = n(570140),
	_ = n(65154);
let E = 'CertifiedDeviceStore',
	f = {},
	h = {},
	p = 0;
function I(e, t, n) {
	let r = h[e];
	return null != r ? n(r) : t;
}
function m(e, t) {
	let n = f[e];
	null != n && n.forEach((e) => delete h[e.id]), (f[e] = t), t.forEach((e) => (h[e.id] = e));
}
class T extends (s = u.ZP.Store) {
	initialize() {
		let e = c.K.get(E);
		null != e &&
			l().forEach(e, (e, t) => {
				e.forEach((e) => {
					'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
				}),
					m(t, e);
			});
	}
	isCertified(e) {
		return null != h[e];
	}
	getCertifiedDevice(e) {
		return h[e];
	}
	getCertifiedDeviceName(e, t) {
		let n = this.getCertifiedDevice(e);
		return null != n ? ''.concat(n.vendor.name, ' ').concat(n.model.name) : t;
	}
	getCertifiedDeviceByType(e) {
		return l().find(h, (t) => t.type === e);
	}
	isHardwareMute(e) {
		return I(e, !1, (e) => e.type === _.h7.AUDIO_INPUT && e.hardwareMute);
	}
	hasEchoCancellation(e) {
		return I(e, !1, (e) => e.type === _.h7.AUDIO_INPUT && e.echoCancellation);
	}
	hasNoiseSuppression(e) {
		return I(e, !1, (e) => e.type === _.h7.AUDIO_INPUT && e.noiseSuppression);
	}
	hasAutomaticGainControl(e) {
		return I(e, !1, (e) => e.type === _.h7.AUDIO_INPUT && e.automaticGainControl);
	}
	getVendor(e) {
		return I(e, null, (e) => e.vendor);
	}
	getModel(e) {
		return I(e, null, (e) => e.model);
	}
	getRevision() {
		return p;
	}
}
(a = 'CertifiedDeviceStore'),
	(i = 'displayName') in (r = T)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a),
	(t.Z = new T(d.Z, {
		CERTIFIED_DEVICES_SET: function (e) {
			let { applicationId: t, devices: n } = e;
			m(t, n), c.K.set(E, f), p++;
		}
	}));
