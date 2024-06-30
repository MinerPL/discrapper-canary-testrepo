t.d(n, {
    Z: function () {
        return h;
    }
});
var a = t(735250), s = t(470079), l = t(120356), r = t.n(l), i = t(481060), o = t(487894), c = t(300234), d = t(689938), u = t(71672);
function h(e) {
    let {
            channel: n,
            threadIds: t,
            startThread: l,
            goToThread: h
        } = e, m = s.useCallback(e => (0, a.jsx)(c.Z, {
            threadId: t[e.row],
            goToThread: h
        }, ''.concat(e.section, '-').concat(e.row)), [
            t,
            h
        ]);
    return 0 === t.length ? (0, a.jsx)(o.Z, {
        channel: n,
        header: d.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
        startThread: l
    }) : (0, a.jsx)(i.List, {
        className: r()(u.list, u.activeThreadsList),
        fade: !0,
        sections: [t.length],
        sectionHeight: 0,
        rowHeight: 80,
        renderRow: m,
        renderSection: () => null,
        chunkSize: 20
    });
}
