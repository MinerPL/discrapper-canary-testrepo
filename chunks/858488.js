t.d(n, {
    Z: function () {
        return s;
    }
}), t(47120);
var l = t(735250);
t(470079);
var i = t(442837), a = t(481060), r = t(699516), u = t(689938);
function s(e) {
    let {
            user: n,
            onAction: s
        } = e, d = n.id, [o, c] = (0, i.Wu)([r.Z], () => {
            var e;
            return [
                r.Z.isFriend(d),
                null !== (e = r.Z.getNickname(d)) && void 0 !== e ? e : null
            ];
        }, [d]);
    if (!o)
        return null;
    let Z = null == c ? u.Z.Messages.ADD_FRIEND_NICKNAME : u.Z.Messages.CHANGE_FRIEND_NICKNAME;
    return (0, l.jsx)(a.MenuItem, {
        id: null == c ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: Z,
        action: () => {
            null == s || s(), (0, a.openModalLazy)(async () => {
                let {default: e} = await t.e('25070').then(t.bind(t, 670794));
                return t => (0, l.jsx)(e, {
                    user: n,
                    nickname: c,
                    ...t
                });
            });
        }
    });
}
