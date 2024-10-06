var i = n(544891),
    s = n(981631);
t.Z = {
    updatePrivateChannelRecipientFlags: (e, t) =>
        i.tn.patch({
            url: s.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t }
        })
};
