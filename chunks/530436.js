l.d(n, {
    W: function () {
        return u;
    }
});
var s = l(735250), a = l(470079), t = l(481060), i = l(434404), r = l(496675), o = l(981631), d = l(689938), c = l(165932);
function u(e) {
    let {
            guild: n,
            error: l,
            onClose: u
        } = e, E = n.id, _ = a.useCallback(() => {
            u(), i.Z.open(E, o.pNK.INSTANT_INVITES);
        }, [
            E,
            u
        ]), I = a.useCallback(e => (0, s.jsx)(t.Clickable, {
            className: c.errorLink,
            onClick: _,
            children: (0, s.jsx)(t.Text, {
                variant: 'text-xs/normal',
                color: 'text-link',
                tag: 'span',
                children: e
            })
        }), [_]), x = a.useCallback(e => (0, s.jsx)(t.Anchor, {
            href: o.EYA.INVITES_HELP,
            target: '_blank',
            children: (0, s.jsx)(t.Text, {
                variant: 'text-xs/normal',
                color: 'text-link',
                tag: 'span',
                children: e
            })
        }), []), N = l.code !== o.evJ.TOO_MANY_INVITES ? l.getAnyErrorMessage() : r.Z.can(o.Plq.MANAGE_GUILD, n) ? d.Z.Messages.TOO_MANY_INVITES_ERROR.format({
            inviteListHook: I,
            inviteHelpHook: x
        }) : d.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
    return (0, s.jsx)(t.Text, {
        className: c.errorMessage,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: N
    });
}
