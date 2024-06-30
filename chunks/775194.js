n.d(t, {
    Z: function () {
        return p;
    }
}), n(653041), n(47120);
var r = n(735250);
n(470079);
var a = n(392711), i = n.n(a), o = n(481060), s = n(481250), l = n(513547), c = n(689938), d = n(16281), u = n(331651);
let m = {
    userId: 1,
    dataType: 2,
    savedKB: 3,
    numFrames: 4,
    startTimestampMs: 5,
    endTimestampMs: 6,
    width: 7,
    height: 8,
    audioChannels: 9,
    sampleRate: 10
};
function p(e) {
    let {clips: t} = e;
    if (null == t)
        return (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (void 0 !== e && 'buffers' !== t)
            return (0, r.jsx)(l.ck, {
                label: t,
                value: e
            }, t);
    });
    return n.push((0, r.jsx)(l.ck, {
        label: 'Frames Per Second',
        value: t.recentEncodedFrames / (t.recentDurationMs / 1000)
    }, 'framerate')), (0, r.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H2,
        title: c.Z.Messages.RTC_DEBUG_CLIPS,
        children: [
            (0, s.a)(n),
            function (e) {
                if (null != e.buffers)
                    return e.buffers.map(e => {
                        let t = [];
                        for (let n of Object.keys(e).sort((e, t) => {
                                let n = m[e], r = m[t];
                                if (n !== r)
                                    return void 0 === n ? 1 : void 0 === r ? -1 : n - r;
                                return e > t ? 1 : -1;
                            })) {
                            let a = e[n];
                            if (null !== a && 'key' !== n)
                                t.push((0, r.jsx)(l.ck, {
                                    label: n,
                                    value: a
                                }, n));
                        }
                        return (0, r.jsx)(o.FormSection, {
                            className: u.marginBottom40,
                            title: 'Buffer: '.concat(e.key),
                            titleClassName: d.title,
                            children: (0, s.a)(t)
                        }, 'Buffer: '.concat(e.key));
                    });
            }(t)
        ]
    });
}
