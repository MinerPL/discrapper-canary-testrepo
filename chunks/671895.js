var l = t(735250), a = t(470079), i = t(481060), s = t(87686), r = t(586826), u = t(507419), o = t(689938), c = t(633265);
n.Z = a.memo(function (e) {
    let {
            sound: n,
            volume: t,
            disabled: a = !1,
            onChange: d
        } = e, {file: f} = (0, r.p)();
    return (0, l.jsx)(i.FormSection, {
        className: c.section,
        title: o.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
        children: (0, l.jsxs)('div', {
            className: c.fakeInput,
            children: [
                null != n && (0, l.jsx)(u.Z, {
                    sound: n,
                    volume: t,
                    disabled: a
                }),
                null == n && null != f && (0, l.jsx)(s.Z, {
                    className: c.audioTrimmer,
                    volume: t,
                    disabled: a,
                    onChange: d
                })
            ]
        })
    });
});
