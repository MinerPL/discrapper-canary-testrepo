s.d(n, {
    Z: function () {
        return u;
    }
});
var t = s(735250);
s(470079);
var l = s(852229), i = s(481060), a = s(626135), r = s(572004), o = s(981631), d = s(689938);
function u(e, n) {
    return r.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER ? (0, t.jsx)(i.MenuItem, {
        id: 'copy-link',
        label: d.Z.Messages.COPY_MESSAGE_LINK,
        icon: i.LinkIcon,
        action: () => {
            (0, l.J)(''.concat(location.protocol, '//').concat(location.host).concat(o.Z5c.CHANNEL(n.guild_id, n.id, e.id))), a.default.track(o.rMx.MESSAGE_LINK_COPIED, {
                message_id: e.id,
                channel: e.channel_id
            });
        }
    }) : null;
}
