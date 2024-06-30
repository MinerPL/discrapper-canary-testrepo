t.d(n, {
    Mt: function () {
        return v;
    },
    li: function () {
        return h;
    },
    s4: function () {
        return f;
    },
    up: function () {
        return x;
    },
    zv: function () {
        return g;
    }
}), t(47120), t(653041);
var r = t(470079), i = t(106351), o = t(442837);
t(592125);
var l = t(984933), a = t(914010), d = t(594174);
t(709054);
var c = t(853856), u = t(362658), s = t(434065), m = t(981631);
function h(e) {
    let {
            favoritesEnabled: n,
            hasStaffPrivileges: t
        } = (0, u.z)('useCanFavoriteChannel'), r = (0, o.e7)([c.Z], () => c.Z.isFavorite(e.id)), i = (0, o.e7)([d.default], () => d.default.getCurrentUser()), l = !(e.isDM() || e.isThread()) || t && (null == i ? void 0 : i.isStaff()) === !0;
    return n && !__OVERLAY__ && !r && l;
}
function f(e) {
    return (0, o.e7)([c.Z], () => c.Z.getFavorite(e));
}
function g() {
    return (0, o.e7)([l.ZP], () => l.ZP.getChannels(m.I_8))[i.d.GUILD_CATEGORY].map(e => ({
        id: 'null' === e.channel.id ? null : e.channel.id,
        name: e.channel.name
    }));
}
function v() {
    return (0, o.e7)([a.Z], () => a.Z.getGuildId()) === m.I_8;
}
function x() {
    let {isFavoritesPerk: e} = (0, u.z)('useFavoriteAdded'), n = (0, s.r)(), t = r.useCallback(() => {
            e && n.notifyFavoriteAdded();
        }, [
            n,
            e
        ]), i = r.useCallback(() => {
            e && n.clearFavoriteAdded();
        }, [
            n,
            e
        ]);
    return {
        favoriteAdded: n.favoriteAdded,
        notifyFavoriteAdded: t,
        clearFavoriteAdded: i
    };
}
