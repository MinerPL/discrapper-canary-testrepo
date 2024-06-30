n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(493683), r = n(447543), o = n(598077), c = n(314897), d = n(592125), u = n(699516), _ = n(197409), E = n(51144), m = n(981631), I = n(689938), T = n(637091);
function h(e) {
    var t;
    let {
            invite: n,
            getAcceptInviteContext: h
        } = e, N = (0, s.e7)([c.default], () => c.default.getId()), f = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === N, p = n.state === m.r2o.ACCEPTING, C = (0, s.e7)([u.Z], () => {
            var e;
            return null != n.inviter && u.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }), g = a.useCallback(() => {
            null != n.inviter && null != d.Z.getDMFromUserId(n.inviter.id) && l.Z.openPrivateChannel([n.inviter.id]);
        }, [n.inviter]), S = a.useCallback(() => {
            let e = h('Invite Button Embed');
            r.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [
            n.code,
            h
        ]);
    if (null == n.inviter)
        return null;
    let A = C ? g : S, x = I.Z.Messages.INVITE_BUTTON_ADD_FRIEND, O = _.Z.Button.Colors.GREEN;
    C ? (x = I.Z.Messages.INVITE_BUTTON_ALREADY_FRIENDS, O = _.Z.Button.Colors.PRIMARY) : f && (x = I.Z.Messages.INVITE_BUTTON_ADD_FRIEND, O = _.Z.Button.Colors.PRIMARY);
    let R = f ? I.Z.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : I.Z.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND, M = null != n.inviter ? ''.concat(n.inviter.username) : '', v = null != n.inviter ? E.ZP.getUserTag(n.inviter) : '';
    return (0, i.jsxs)(_.Z, {
        children: [
            (0, i.jsx)(_.Z.Header, { text: R }),
            (0, i.jsxs)(_.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(_.Z.Icon, {
                                user: new o.Z(n.inviter),
                                onClick: C ? A : void 0
                            }),
                            (0, i.jsx)(_.Z.Info, {
                                title: M,
                                onClick: C ? A : void 0,
                                children: v
                            })
                        ]
                    }),
                    (0, i.jsx)(_.Z.Button, {
                        onClick: A,
                        submitting: p,
                        isDisabled: f,
                        color: O,
                        children: x
                    })
                ]
            })
        ]
    });
}
