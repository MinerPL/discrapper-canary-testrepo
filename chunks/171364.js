n.d(t, {
    E: function () {
        return a;
    },
    I: function () {
        return l;
    }
});
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
        kind: 'user',
        id: '2024-09_app_oauth2_link_embed',
        label: 'app oauth2 link embed',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enable new embed for app oauth2 links',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (0, i.B)({
        kind: 'user',
        id: '2024-10_app_oauth2_link_embed_mobile',
        label: 'app oauth2 link embed',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enable new embed for app oauth2 links',
                config: { enabled: !0 }
            }
        ]
    });
