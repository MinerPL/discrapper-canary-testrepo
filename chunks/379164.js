var i = n(570140),
    l = n(447543),
    r = n(782605);
t.Z = {
    acceptInvite(e) {
        let t = l.Z.getInviteContext('Desktop Invite Modal', e);
        l.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null != e && null != e.guild && null != e.channel && !__OVERLAY__ && l.Z.transitionToInvite(e);
            }
        }).then(
            () => this.close(),
            (e) => {
                i.Z.dispatch({
                    type: 'INVITE_MODAL_ERROR',
                    message: (0, r.O)(e.code)
                });
            }
        );
    },
    close() {
        i.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' });
    }
};
