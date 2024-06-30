n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(689938), l = n(382862);
function r(e) {
    let {message: t} = e;
    return (0, i.jsxs)(a.Clickable, {
        onClick: () => {
            (0, a.openModalLazy)(async () => {
                let {default: e} = await n.e('14021').then(n.bind(n, 910673));
                return n => (0, i.jsx)(e, {
                    channelId: t.channel_id,
                    messageId: t.id,
                    ...n
                });
            });
        },
        className: l.accessory,
        children: [
            (0, i.jsx)(a.CircleInformationIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                className: l.accessoryText,
                children: s.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
            })
        ]
    });
}
