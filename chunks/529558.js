n.d(t, {
    N: function () {
        return a;
    },
    m: function () {
        return i;
    }
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2023-08_secure_frames_encryption',
        label: 'Allowing testing secure frames for voice/video',
        defaultConfig: {
            protocolVersionFloor: 0,
            canSupportSecureFrames: !1,
            canSupportMls: !1
        },
        treatments: [
            {
                id: 10,
                label: 'Can support secure frames above protocol version 112 (MLS)',
                config: {
                    protocolVersionFloor: 12,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            },
            {
                id: 11,
                label: 'Can support secure frames above protocol version 114 (MLS)',
                config: {
                    protocolVersionFloor: 14,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'guild',
        id: '2024-08_secure_frames_encryption_guilds_v2',
        label: 'Allowing testing secure frames for voice/video (Guilds)',
        defaultConfig: {
            protocolVersionFloor: 0,
            canSupportSecureFrames: !1,
            canSupportMls: !1
        },
        treatments: [
            {
                id: 10,
                label: 'Can support secure frames above protocol version 112 (MLS)',
                config: {
                    protocolVersionFloor: 12,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            },
            {
                id: 11,
                label: 'Can support secure frames above protocol version 114 (MLS)',
                config: {
                    protocolVersionFloor: 14,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            }
        ]
    });
