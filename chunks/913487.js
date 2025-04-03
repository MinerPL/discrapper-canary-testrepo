var i = t(570140),
    a = t(703656),
    o = t(981631);
__OVERLAY__ &&
    i.Z.subscribe('OVERLAY_OPEN_MESSAGE', function (e) {
        let { guildId: n, channelId: t, messageId: i } = e;
        (0, a.dL)({ pathname: o.Z5c.CHANNEL(n, t, i) });
    });
