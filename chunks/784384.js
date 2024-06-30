n.d(t, {
    H: function () {
        return r;
    }
});
var l = n(131704), a = n(496675), i = n(981631), s = n(689938);
function r(e, t, n) {
    let r = n instanceof l.Sf;
    if (t.isNSFW() && !(r && n.isNSFW()))
        return { label: s.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
    if (r && (0, l.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !a.Z.can(i.Plq.ATTACH_FILES, n))
            return { label: s.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
        if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !a.Z.can(i.Plq.EMBED_LINKS, n))
            return { label: s.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
    }
}
