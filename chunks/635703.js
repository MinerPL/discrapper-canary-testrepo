n.r(t),
	n.d(t, {
		openCreateGuildModal: function () {
			return d;
		},
		updateCreateGuildModal: function () {
			return I;
		}
	});
var o = n(735250);
n(470079);
var l = n(481060),
	a = n(390885),
	s = n(626135),
	r = n(299402),
	i = n(675999),
	c = n(981631),
	u = n(630724);
function _(e, t, n, l) {
	return (0, o.jsx)(r.Z, {
		onSuccess: (t) => {
			a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS), e.onClose(), null == l || l(t);
		},
		onSlideChange: (e) =>
			(function (e, t) {
				switch (e) {
					case i._m.GUILD_TEMPLATES:
						a.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
							s.default.track(c.rMx.OPEN_MODAL, {
								type: 'Create Guild Templates',
								location: t
							});
						break;
					case i._m.CUSTOMIZE_GUILD:
						a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
							s.default.track(c.rMx.OPEN_MODAL, {
								type: 'Create Guild Step 2',
								location: t
							});
						break;
					case i._m.CREATION_INTENT:
						s.default.track(c.rMx.OPEN_MODAL, {
							type: 'Server Intent Discovery',
							location: t
						});
						break;
					case i._m.JOIN_GUILD:
						a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
							s.default.track(c.rMx.OPEN_MODAL, {
								type: 'Join Guild',
								location: t
							});
				}
			})(e, n),
		initialSlide: t,
		hasJoinButton: !0,
		...e
	});
}
let d = (e) => {
		let { initialSlide: t, location: n, onSuccess: o } = e;
		(0, l.openModal)((e) => _(e, t, n, o), { modalKey: i.PU });
	},
	I = (e) => {
		let { slide: t, location: n } = e;
		(0, l.updateModal)(i.PU, (e) => _(e, t, n));
	};
