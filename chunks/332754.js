var i = n(735250);
n(470079);
var a = n(481060),
	s = n(570140),
	r = n(84615),
	l = n(429142),
	o = n(1964),
	c = n(852758),
	d = n(314897),
	u = n(594174),
	_ = n(374023),
	E = n(886162),
	h = n(981631),
	m = n(815660),
	I = n(231338);
let g = 'AGREEMENTS_MODAL_KEY';
t.Z = {
	init() {
		s.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction),
			s.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction),
			s.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate),
			d.default.addChangeListener(this.handleAuthenticationStoreChanged);
	},
	handleRequiredAction(e) {
		let t = e.requiredAction;
		if (!_.s.isDisallowPopupsSet() && null != u.default.getCurrentUser())
			t === h.c2C.REQUIRE_CAPTCHA ||
			t === h.c2C.REQUIRE_VERIFIED_EMAIL ||
			t === h.c2C.REQUIRE_VERIFIED_PHONE ||
			t === h.c2C.REQUIRE_REVERIFIED_PHONE ||
			t === h.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
			t === h.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
			o.Z.isEmailReverification(t)
				? (0, r.q4)(() => (0, i.jsx)(c.ZP, {}), {
						layerKey: 'verification',
						Layer: l.ZP
					})
				: t === h.c2C.AGREEMENTS
					? (0, a.openModal)((e) => (0, i.jsx)(E.Z, { ...e }), {
							modalKey: g,
							onCloseRequest: I.Vq
						})
					: null == t && ((0, r.ob)('verification'), (0, a.hasModalOpen)(g) && (0, a.closeModal)(g));
	},
	handleAuthenticationStoreChanged() {
		null == d.default.getId() &&
			((0, r.ob)('verification'),
			(0, a.closeModal)(g),
			(0, a.closeModal)(c.HR),
			(0, a.closeModal)(c.F0),
			(0, a.closeModal)(m.M));
	},
	handleCurrentUserUpdate(e) {
		let { user: t } = e;
		t.verified && (0, a.closeModal)(c.F0);
	}
};
