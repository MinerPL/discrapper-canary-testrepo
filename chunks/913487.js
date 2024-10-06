var i = n(570140),
    s = n(703656),
    a = n(981631);
__OVERLAY__ &&
    i.Z.subscribe('OVERLAY_OPEN_MESSAGE', function (e) {
        let { guildId: t, channelId: n, messageId: i } = e;
        (0, s.dL)({ pathname: a.Z5c.CHANNEL(t, n, i) });
    });
