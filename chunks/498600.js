var r = n(818083);
t.Z = (0, r.B)({
    kind: 'user',
    id: '2021-06_hdr_screen_capture',
    label: 'HDR Screen Capture',
    defaultConfig: { hdrCaptureMode: 'never' },
    treatments: [
        {
            id: 1,
            label: 'Always',
            config: { hdrCaptureMode: 'always' }
        },
        {
            id: 2,
            label: 'Permitted Devices Only',
            config: { hdrCaptureMode: 'permittedDevicesOnly' }
        }
    ]
});
