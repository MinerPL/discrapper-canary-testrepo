var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(809206), l = n(317770), o = n(18438), c = n(350327), d = n(594174), u = n(74538), _ = n(486324);
let E = e => {
        let {
            imageSrc: t,
            file: a,
            guildId: l,
            isTryItOutFlow: E
        } = e;
        if (E) {
            (0, c.c_)(t);
            return;
        }
        let h = d.default.getCurrentUser(), I = null != l ? o.I5 : r.I5;
        if (u.ZP.canUseAnimatedAvatar(h) || 'image/gif' !== a.type) {
            I(t);
            return;
        }
        if (null != h)
            return (0, s.openModalLazy)(async () => {
                let {default: e} = await n.e('12736').then(n.bind(n, 844594));
                return n => (0, i.jsx)(e, {
                    user: h,
                    imageSrc: t,
                    uploadType: _.pC.AVATAR,
                    onSubscribe: () => I(t),
                    ...n
                });
            });
    }, h = e => {
        let {
            imageSrc: t,
            guildId: a,
            isTryItOutFlow: r
        } = e;
        if (r) {
            (0, c.f4)(t);
            return;
        }
        let l = d.default.getCurrentUser(), E = null != a ? o.g_ : c.g_;
        if (u.ZP.canUsePremiumProfileCustomization(l)) {
            E(t);
            return;
        }
        if (null != l)
            return (0, s.openModalLazy)(async () => {
                let {default: e} = await n.e('12736').then(n.bind(n, 844594));
                return n => (0, i.jsx)(e, {
                    user: l,
                    imageSrc: t,
                    uploadType: _.pC.BANNER,
                    onSubscribe: () => E(t),
                    ...n
                });
            });
    };
class I extends l.Z {
    _initialize() {
        a.Z.subscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        a.Z.unsubscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === _.pC.AVATAR ? E(e) : e.uploadType === _.pC.BANNER ? h(e) : void 0;
    }
}
t.Z = new I();
