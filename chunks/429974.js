n.d(t, {
    z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(603113),
    l = n(812206),
    u = n(158776),
    c = n(699516),
    d = n(594174),
    _ = n(626135),
    E = n(621853),
    f = n(981631),
    h = n(616922);
let p = null;
function I(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t || t === f.ME ? '' : t);
}
async function m(e) {
    var t, a, s, m;
    let { userId: T, section: S, subsection: g, guildId: A = f.ME, channelId: N, friendToken: O, analyticsLocation: R, showGuildProfile: v = !0, ...C } = e,
        y = d.default.getUser(T);
    if (null == y) return;
    let L = E.Z.getUserProfile(T),
        D = u.Z.getPrimaryActivity(T),
        b = u.Z.getStatus(T),
        M = u.Z.isMobileOnline(T),
        { party: P, assets: U, application_id: w } = null != D ? D : {},
        x = null != w ? l.Z.getApplication(w) : null,
        G = M ? f.j28.ONLINE_MOBILE : f.j28.ONLINE_DESKTOP,
        k = b === f.Skl.ONLINE ? G : b;
    (p = await (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('82412'), n.e('33217')]).then(n.bind(n, 533835));
            return (t) =>
                (0, r.jsx)(e, {
                    user: y,
                    guildId: A,
                    friendToken: O,
                    initialSection: S,
                    initialSubsection: g,
                    channelId: N,
                    showGuildProfile: v,
                    ...t,
                    ...C
                });
        },
        { modalKey: I(T, v ? A : void 0) }
    )),
        _.default.track(f.rMx.OPEN_MODAL, {
            type: 'Profile Modal',
            guild_id: A !== f.ME ? A : null,
            channel_id: N,
            other_user_id: T,
            application_id: null !== (a = null == D ? void 0 : D.application_id) && void 0 !== a ? a : null,
            application_name: null == D ? void 0 : D.name,
            sku_id: null !== (s = null == x ? void 0 : x.primarySkuId) && void 0 !== s ? s : null,
            is_friend: c.Z.isFriend(T),
            has_images: !!(null !== (m = null == U ? void 0 : U.large_image) && void 0 !== m ? m : null == U ? void 0 : U.small_image),
            party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
            party_id: null == P ? void 0 : P.id,
            party_platform: (0, h.Ps)(null == P ? void 0 : P.id) ? f.ABu.SPOTIFY : null,
            game_platform: (0, o.Z)(D),
            profile_user_status: k,
            profile_has_nitro_customization: (null == L ? void 0 : L.banner) != null,
            profile_has_profile_effect: (null == L ? void 0 : L.profileEffectId) != null,
            ...(null == R ? null : (0, _.expandLocation)(R))
        });
}
function T() {
    null != p && (0, i.closeModal)(p), (p = null);
}
class S extends s.Z {
    _initialize() {
        a.Z.subscribe('USER_PROFILE_MODAL_OPEN', m), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', T);
    }
    _terminate() {
        a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', m), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', T);
    }
}
t.Z = new S();
