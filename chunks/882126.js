var l = t(735250), a = t(470079), i = t(586826), s = t(990792);
n.Z = a.memo(function (e) {
    let {
            fineTuning: n,
            fineTuningResolution: t,
            duration: a
        } = e, {
            file: r,
            audio: u
        } = (0, i.p)();
    return (0, l.jsx)(s.Z, {
        file: r,
        audio: u,
        waveformSettings: {
            fineTuning: n,
            fineTuningResolution: t,
            duration: a
        }
    });
});
