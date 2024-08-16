n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(735250),
    i = n(442837),
    a = n(481060),
    s = n(493683),
    o = n(447543),
    l = n(904245),
    u = n(314897),
    c = n(592125),
    d = n(496675),
    _ = n(979651),
    E = n(475413),
    f = n(981631),
    h = n(689938);
function p(e) {
    let { user: t, className: n, onClose: p } = e,
        m = (0, i.e7)([u.default], () => u.default.getId()),
        I = (0, i.e7)([c.Z, _.Z], () => {
            var e;
            return c.Z.getChannel(null === (e = _.Z.getVoiceStateForUser(m)) || void 0 === e ? void 0 : e.channelId);
        }),
        T = null == I ? void 0 : I.isPrivate(),
        g = (0, i.e7)([d.Z], () => d.Z.can(f.Plq.CREATE_INSTANT_INVITE, I));
    if (null == I || T || !g || t.bot) return null;
    let S = async () => {
        await o.Z.createInvite(
            null == I ? void 0 : I.id,
            {
                max_uses: 1,
                unique: !0
            },
            'UserProfileInviteToCallButton'
        ).then((e) =>
            (function (e, t) {
                s.Z.ensurePrivateChannel(e).then((e) => {
                    null != c.Z.getChannel(e) && l.Z.sendInvite(e, t, 'useActiveInviteToCallButton', null);
                });
            })(t.id, e.code)
        ),
            null == p || p();
    };
    return (0, r.jsx)(E.tG, {
        action: 'PRESS_INVITE_TO_CALL',
        text: h.Z.Messages.USER_PROFILE_INVITE_TO_CALL,
        icon: a.GroupPlusIcon,
        fullWidth: !0,
        color: a.Button.Colors.BRAND,
        className: n,
        onClick: S
    });
}
