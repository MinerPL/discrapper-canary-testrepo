n(47120);
var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(317770), l = n(594174), o = n(295226), c = n(74538), d = n(374023), u = n(913976), _ = n(104494), E = n(29920), h = n(786397), I = n(248042), m = n(318199), p = n(474936);
function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let T = 'PremiumServerDriveAnnouncementModal';
class S extends r.Z {
    _initialize() {
        a.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), a.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    _terminate() {
        a.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), a.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    constructor(...e) {
        super(...e), g(this, 'maybeOpenServerDriveAnnouncementModal', (e, t) => {
            let a = (0, m.extractAnnouncementModalContent)({
                content: e,
                isPreview: t
            });
            return null != a && ((0, s.closeModal)(T), (0, s.openModalLazy)(async () => {
                let {default: e} = await Promise.resolve().then(n.bind(n, 318199));
                return t => (0, i.jsx)(e, {
                    renderModalProps: t,
                    properties: a
                });
            }, { modalKey: T }), !0);
        }), g(this, 'handlePreview', e => {
            let {properties: t} = e;
            this.maybeOpenServerDriveAnnouncementModal(t, !0);
        }), g(this, 'getOfferFromStore', () => {
            let e = l.default.getCurrentUser();
            if ((0, c.I5)(e))
                return {};
            let t = [
                p.hs,
                p.RU,
                p.rB,
                p.ih
            ].map(e => o.Z.getUserDiscountOffer(e)).filter(e => null != e && !(0, _.kA)(e)).shift();
            if (null != t)
                return { userDiscountOffer: t };
            let n = [
                p.i_,
                p.Cn,
                p.wh,
                p.AU,
                p.TL,
                p.ET,
                p.C2,
                p.Hk
            ].map(e => o.Z.getUserTrialOffer(e)).filter(e => null != e && !(0, h.B)(e)).shift();
            return null != n ? { userTrialOffer: n } : {};
        }), g(this, 'mayShowAnnouncementModal', async () => {
            if (await (0, I.l2)(), !d.s.isDisallowPopupsSet()) {
                if (!(0, s.hasAnyModalOpen)() && u.Z.getCurrentConfig({ location: 'OfferAnnouncementManager' }).enabled) {
                    for (let e of await (0, E.H)(this.getOfferFromStore()))
                        if (this.maybeOpenServerDriveAnnouncementModal(e, !1))
                            break;
                }
                !(0, s.hasAnyModalOpen)() && await (0, I.k)() && (0, s.openModalLazy)(async () => {
                    let {default: e} = await n.e('28614').then(n.bind(n, 868508));
                    return t => (0, i.jsx)(e, { renderModalProps: t });
                });
            }
        });
    }
}
t.Z = new S();
