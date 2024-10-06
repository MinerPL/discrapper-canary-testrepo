n(47120);
var i = n(735250);
n(470079);
var a = n(873546),
    s = n(704215),
    r = n(481060),
    l = n(570140),
    o = n(317770),
    c = n(605236),
    d = n(594174),
    u = n(295226),
    _ = n(74538),
    E = n(374023),
    h = n(775412),
    m = n(913976),
    I = n(533990),
    p = n(104494),
    g = n(29920),
    T = n(248042),
    f = n(278945),
    S = n(727310),
    C = n(318199),
    N = n(474936);
function A(e, t, n) {
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
let v = 'PremiumServerDriveAnnouncementModal';
class Z extends o.Z {
    _initialize() {
        l.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), l.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    _terminate() {
        l.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), l.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    constructor(...e) {
        super(...e),
            A(this, 'maybeOpenServerDriveAnnouncementModal', async (e, t) => {
                let a = (0, C.extractAnnouncementModalContent)({
                    content: e,
                    isPreview: t
                });
                if (null != a)
                    return (
                        !!(!1 !== t || (null == a ? void 0 : a.contentIdentifier) !== 'summer_bogo_content' || (await (0, T.k)())) &&
                        ((0, r.closeModal)(v),
                        (0, r.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 318199));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        renderModalProps: t,
                                        properties: a
                                    });
                            },
                            { modalKey: v }
                        ),
                        !0)
                    );
                return !1;
            }),
            A(this, 'handlePreview', (e) => {
                let { properties: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t, !0);
            }),
            A(this, 'getOfferFromStore', () => {
                let e = d.default.getCurrentUser();
                if ((0, _.I5)(e)) return {};
                let t = [N.hs, N.RU, N.rB, N.ih]
                    .map((e) => u.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, p.kA)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, h.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            A(this, 'mayShowAnnouncementModal', async () => {
                if ((await (0, T.l2)(), E.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = I.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).inExperiment || I.Z.isAAMode({ location: 'announcementManager' }),
                    n = (0, c.un)(s.z.REVERSE_TRIAL_ENDED_UPSELL),
                    i = d.default.getCurrentUser();
                if (t && !n && !(0, r.hasAnyModalOpen)() && !(0, _.I5)(i)) {
                    let t = await (0, f.r)(e.userTrialOffer);
                    null != t && (0, S.Z)({ upsellType: t });
                }
                if (null == i || !!i.verified) {
                    if (!(0, r.hasAnyModalOpen)() && m.Z.getCurrentConfig({ location: 'OfferAnnouncementManager' }).enabled && !a.tq) {
                        for (let t of await (0, g.H)(e)) if (await this.maybeOpenServerDriveAnnouncementModal(t, !1)) break;
                    }
                }
            });
    }
}
t.Z = new Z();
