var i = n(735250);
n(470079);
var s = n(924826), a = n(91192), r = n(442837), l = n(215569), o = n(481060), c = n(607070), d = n(981631), u = n(28813);
t.Z = function (e) {
    let {
            statusSections: t,
            renderRow: n,
            searchQuery: _,
            sectionFilter: E,
            useReducedMotion: h
        } = e, I = (0, r.e7)([c.Z], () => c.Z.keyboardModeEnabled), m = (0, s.ZP)({
            id: 'people',
            isEnabled: I,
            async scrollToStart() {
            },
            async scrollToEnd() {
            }
        }), p = E !== d.pJs.ONLINE && E !== d.pJs.ALL, g = h || '' !== _ || p, T = t.map((e, t) => g ? (0, i.jsx)('div', { children: e.map(n) }, t) : (0, i.jsx)(l.W, {
            transitionAppear: !1,
            component: 'div',
            children: e.map(n)
        }, t));
    return (0, i.jsx)(a.bG, {
        navigator: m,
        children: (0, i.jsx)(a.SJ, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, i.jsx)(o.ScrollerAuto, {
                    ref: t,
                    className: u.peopleList,
                    ...n,
                    children: T
                });
            }
        })
    });
};
