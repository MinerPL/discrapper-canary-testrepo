var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(1964), l = n(852758), o = n(314897), c = n(594174), d = n(725568), u = n(78415), _ = n(374023), E = n(886162), h = n(981631), I = n(815660), m = n(231338);
let p = 'AGREEMENTS_MODAL_KEY';
t.Z = {
    init() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction), a.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction), a.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate), o.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        if (!_.s.isDisallowPopupsSet() && null != c.default.getCurrentUser())
            t === h.c2C.REQUIRE_CAPTCHA || t === h.c2C.REQUIRE_VERIFIED_EMAIL || t === h.c2C.REQUIRE_VERIFIED_PHONE || t === h.c2C.REQUIRE_REVERIFIED_PHONE || t === h.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === h.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || r.Z.isEmailReverification(t) ? (0, d.q4)(() => (0, i.jsx)(l.ZP, {}), {
                layerKey: 'verification',
                Layer: u.ZP
            }) : t === h.c2C.AGREEMENTS ? (0, s.openModal)(e => (0, i.jsx)(E.Z, { ...e }), {
                modalKey: p,
                onCloseRequest: m.Vq
            }) : null == t && ((0, d.ob)('verification'), (0, s.hasModalOpen)(p) && (0, s.closeModal)(p));
    },
    handleAuthenticationStoreChanged() {
        null == o.default.getId() && ((0, d.ob)('verification'), (0, s.closeModal)(p), (0, s.closeModal)(l.HR), (0, s.closeModal)(l.F0), (0, s.closeModal)(I.M));
    },
    handleCurrentUserUpdate(e) {
        let {user: t} = e;
        t.verified && (0, s.closeModal)(l.F0);
    }
};
