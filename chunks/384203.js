n.d(t, {
    Z: function () {
        return c;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(592125), s = n(430824), l = n(496675), r = n(983436), o = n(981631);
function c(e) {
    let {
            code: t,
            messageData: n
        } = e, [c, d] = t.split('/'), u = a.Z.getChannel(d), _ = s.Z.getGuild(c);
    return null != u && u.isGuildVocal() && null != _ && l.Z.can(o.Plq.VIEW_CHANNEL, u) && l.Z.can(o.Plq.CONNECT, u) ? (0, i.jsx)(r.Z, {
        guild: _,
        channel: u,
        messageData: n
    }) : null;
}
