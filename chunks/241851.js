t.d(n, {
    g: function () {
        return g;
    }
});
var a = t(735250);
t(470079);
var l = t(120356), i = t.n(l), s = t(704215), o = t(481060), r = t(605236), d = t(434404), u = t(41776), c = t(703656), E = t(981631), I = t(689938), _ = t(750195);
let g = e => {
    let {guild: n} = e, l = n.id, g = async () => {
            let e = u.Z.isLurking(l);
            await d.Z.leaveGuild(l), e ? (0, c.uL)(E.Z5c.GUILD_DISCOVERY) : !(0, r.un)(s.z.GUILD_LEAVE_FEEDBACK) && (0, o.openModalLazy)(async () => {
                let {default: e} = await t.e('74920').then(t.bind(t, 131102));
                return t => (0, a.jsx)(e, {
                    ...t,
                    guildId: l,
                    guildName: n.name
                });
            });
        };
    return (0, a.jsx)(o.ConfirmModal, {
        className: i()(_.__invalid_confirmModal),
        bodyClassName: i()(_.__invalid_confirmModalBody),
        header: I.Z.Messages.LEAVE_SERVER_TITLE.format({ name: n.name }),
        confirmText: n.hasFeature(E.oNc.HUB) ? I.Z.Messages.LEAVE_HUB : I.Z.Messages.LEAVE_SERVER,
        cancelText: I.Z.Messages.CANCEL,
        onConfirm: g,
        ...e,
        children: (0, a.jsx)(o.Text, {
            variant: 'text-md/normal',
            children: n.hasFeature(E.oNc.HUB) ? I.Z.Messages.LEAVE_HUB_BODY.format({ name: n.name }) : I.Z.Messages.LEAVE_SERVER_BODY.format({ name: n.name })
        })
    });
};
