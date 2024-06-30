n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(735250), i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(493683), u = n(447543), c = n(904245), d = n(314897), _ = n(592125), E = n(496675), f = n(979651), h = n(785717), p = n(993409), m = n(981631), I = n(689938), T = n(717633), g = n(682583);
function S(e) {
    let {
            user: t,
            onClose: n
        } = e, {trackUserProfileAction: i} = (0, h.KZ)(), S = (0, o.e7)([d.default], () => d.default.getId()), A = (0, o.e7)([
            _.Z,
            f.Z
        ], () => {
            var e;
            return _.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(S)) || void 0 === e ? void 0 : e.channelId);
        }), N = null == A ? void 0 : A.isPrivate(), v = (0, o.e7)([E.Z], () => E.Z.can(m.Plq.CREATE_INSTANT_INVITE, A));
    if (null == A || N || !v)
        return null;
    let O = async () => {
        i({ action: 'PRESS_INVITE_TO_CALL' }), await u.Z.createInvite(null == A ? void 0 : A.id, {
            max_uses: 1,
            unique: !0
        }, 'useActiveInviteToCallButton').then(e => function (e, t) {
            l.Z.ensurePrivateChannel(e).then(e => {
                null != _.Z.getChannel(e) && c.Z.sendInvite(e, t, 'useActiveInviteToCallButton', null);
            });
        }(t.id, e.code)), null == n || n();
    };
    return (0, r.jsx)(p.Z, {
        fullWidth: !0,
        variant: 'text',
        color: a()(s.Button.Colors.BRAND, T.color),
        onClick: O,
        icon: s.GroupPlusIcon,
        text: I.Z.Messages.USER_PROFILE_INVITE_TO_CALL,
        tooltipContainerClassName: g.ctaTooltipContainer
    });
}
