a.r(n);
var t = a(735250), o = a(470079), r = a(442837), i = a(481060), c = a(541099), d = a(827498), _ = a(421591), p = a(314734), b = a(689938), f = a(594992);
n.default = o.memo(function (e) {
    let {
            channel: n,
            ...a
        } = e, C = (0, r.e7)([c.Z], () => c.Z.shouldShowModal());
    return o.useEffect(() => {
        !C && (0, i.closeModal)(p.e9);
    }), (0, t.jsx)(i.ModalRoot, {
        className: f.root,
        'aria-label': b.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
        ...a,
        children: (0, t.jsx)(_.Z, {
            channel: n,
            entrypoint: d._b.VOICE
        })
    });
});
