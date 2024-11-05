n.d(t, {
    s: function () {
        return a;
    }
});
var i = n(46973),
    l = n(37113);
let a = (e, t, n) => {
    let a = {
        qualityOptions: {
            preset: l.tI.PRESET_CUSTOM,
            resolution: e,
            frameRate: t
        },
        context: i.Yn.STREAM
    };
    return (
        null != n &&
            (null != n.desktopSource &&
                (a.desktopSettings = {
                    sourceId: n.desktopSource.id,
                    sound: !0
                }),
            null != n.cameraSource &&
                (a.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid
                })),
        a
    );
};
