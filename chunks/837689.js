n(47120);
var i = n(735250);
n(470079);
var a = n(873546),
	s = n(481060),
	r = n(570140),
	l = n(317770),
	o = n(594174),
	c = n(295226),
	d = n(74538),
	u = n(374023),
	_ = n(913976),
	E = n(104494),
	h = n(29920),
	m = n(786397),
	I = n(248042),
	g = n(318199),
	p = n(474936);
function T(e, t, n) {
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
let S = 'PremiumServerDriveAnnouncementModal';
class f extends l.Z {
	_initialize() {
		r.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal),
			r.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
	}
	_terminate() {
		r.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal),
			r.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
	}
	constructor(...e) {
		super(...e),
			T(this, 'maybeOpenServerDriveAnnouncementModal', async (e, t) => {
				let a = (0, g.extractAnnouncementModalContent)({
					content: e,
					isPreview: t
				});
				if (null != a)
					return (
						!!(
							!1 !== t ||
							(null == a ? void 0 : a.contentIdentifier) !== 'summer_bogo_content' ||
							(await (0, I.k)())
						) &&
						((0, s.closeModal)(S),
						(0, s.openModalLazy)(
							async () => {
								let { default: e } = await Promise.resolve().then(n.bind(n, 318199));
								return (t) =>
									(0, i.jsx)(e, {
										renderModalProps: t,
										properties: a
									});
							},
							{ modalKey: S }
						),
						!0)
					);
				return !1;
			}),
			T(this, 'handlePreview', (e) => {
				let { properties: t } = e;
				this.maybeOpenServerDriveAnnouncementModal(t, !0);
			}),
			T(this, 'getOfferFromStore', () => {
				let e = o.default.getCurrentUser();
				if ((0, d.I5)(e)) return {};
				let t = [p.hs, p.RU, p.rB, p.ih]
					.map((e) => c.Z.getUserDiscountOffer(e))
					.filter((e) => null != e && !(0, E.kA)(e))
					.shift();
				if (null != t) return { userDiscountOffer: t };
				let n = [p.i_, p.Cn, p.wh, p.AU, p.TL, p.ET, p.C2, p.Hk, p.Rt]
					.map((e) => c.Z.getUserTrialOffer(e))
					.filter((e) => null != e && !(0, m.B)(e))
					.shift();
				return null != n ? { userTrialOffer: n } : {};
			}),
			T(this, 'mayShowAnnouncementModal', async () => {
				if ((await (0, I.l2)(), !u.s.isDisallowPopupsSet())) {
					if (
						!(0, s.hasAnyModalOpen)() &&
						_.Z.getCurrentConfig({ location: 'OfferAnnouncementManager' }).enabled &&
						!a.tq
					) {
						for (let e of await (0, h.H)(this.getOfferFromStore()))
							if (await this.maybeOpenServerDriveAnnouncementModal(e, !1)) break;
					}
				}
			});
	}
}
t.Z = new f();
