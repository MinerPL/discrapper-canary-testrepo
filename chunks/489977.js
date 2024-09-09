var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140),
    r = n(809206),
    l = n(317770),
    o = n(18438),
    c = n(81245),
    d = n(378879),
    u = n(350327),
    _ = n(594174),
    E = n(74538),
    h = n(486324);
function m(e, t) {
    let n = e === h.pC.AVATAR ? 'handleUploadAvatar' : 'handleUploadBanner';
    return !!(0, c.iM)(n) && (0, d.openProfileUpsellModal)(e, t);
}
let I = (e) => {
        let { imageSrc: t, file: s, guildId: l, isTryItOutFlow: c } = e;
        if (c) {
            (0, u.c_)(t);
            return;
        }
        let d = _.default.getCurrentUser(),
            I = null != l ? o.I5 : r.I5;
        if (E.ZP.canUseAnimatedAvatar(d) || 'image/gif' !== s.type) {
            I(t);
            return;
        }
        if (!(null == d || m(h.pC.AVATAR, t)))
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('12736').then(n.bind(n, 844594));
                return (n) =>
                    (0, i.jsx)(e, {
                        user: d,
                        imageSrc: t,
                        uploadType: h.pC.AVATAR,
                        onSubscribe: () => I(t),
                        ...n
                    });
            });
    },
    g = (e) => {
        let { imageSrc: t, guildId: s, isTryItOutFlow: r } = e;
        if (r) {
            (0, u.f4)(t);
            return;
        }
        let l = _.default.getCurrentUser(),
            c = null != s ? o.g_ : u.g_;
        if (E.ZP.canUsePremiumProfileCustomization(l)) {
            c(t);
            return;
        }
        if (!(null == l || m(h.pC.BANNER, t)))
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('12736').then(n.bind(n, 844594));
                return (n) =>
                    (0, i.jsx)(e, {
                        user: l,
                        imageSrc: t,
                        uploadType: h.pC.BANNER,
                        onSubscribe: () => c(t),
                        ...n
                    });
            });
    };
class p extends l.Z {
    _initialize() {
        s.Z.subscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        s.Z.unsubscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === h.pC.AVATAR ? I(e) : e.uploadType === h.pC.BANNER ? g(e) : void 0;
    }
}
t.Z = new p();
