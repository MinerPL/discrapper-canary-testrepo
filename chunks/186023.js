n(47120), n(653041);
var r = n(735250), i = n(470079), a = n(481060), o = n(367907), s = n(153124), l = n(82554), u = n(185625), c = n(255514), d = n(981631), _ = n(875081);
t.Z = e => {
    let {
            reportType: t,
            menu: n,
            modalProps: E,
            onSubmit: f,
            onNavigate: h,
            emailToken: p,
            isAuthenticated: m = !0
        } = e, I = (0, s.Dt)(), {
            nodes: T,
            root_node_id: g,
            success_node_id: S,
            fail_node_id: A
        } = n, [N, v] = i.useState(g), [O, R] = i.useState(void 0), [C, y] = i.useState(void 0), [D, L] = i.useState([]), [b, M] = i.useState(void 0), P = e => {
            var n;
            let {destination: r} = e, [, i] = r, a = T[i];
            if (a.elements.some(e => 'skip' === e.type) && (null === (n = a.button) || void 0 === n ? void 0 : n.type) === 'next')
                return P({
                    ...e,
                    destination: [
                        '',
                        a.button.target
                    ]
                });
            if (L([
                    ...D,
                    e
                ]), null != a.key && (null == h || h(a.key)), R(void 0), y(void 0), t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: a.report_type,
                    current_node: T[N].id,
                    next_node: a.id
                });
            }
            v(i);
        }, U = async e => {
            var r;
            let i = m ? await (0, u.ZD)(n, t, [
                    ...D,
                    e
                ]) : await (0, u.fw)(n, t, [
                    ...D,
                    e
                ], p), a = null == i ? void 0 : null === (r = i.body) || void 0 === r ? void 0 : r.report_id;
            null != a && M(a), null == f || f(a);
        }, w = () => {
            var e, n;
            if (D.length < 1)
                return;
            let r = [...D], i = r.pop(), a = null !== (n = null == i ? void 0 : i.nodeRef) && void 0 !== n ? n : g;
            if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
                let e = t.record.id;
                o.ZP.trackWithMetadata(d.rMx.IAR_NAVIGATE, {
                    message_id: e,
                    content_type: t.name,
                    report_sub_type: T[a].report_type,
                    current_node: T[N].id,
                    next_node: T[a].id
                });
            }
            R(null == i ? void 0 : null === (e = i.multiSelect) || void 0 === e ? void 0 : e.state), y(null == i ? void 0 : i.textInput), v(a), L(r), null == h || h('..');
        }, x = [], G = [];
    for (let e in T) {
        var k, B;
        let t = T[e];
        if (t.id !== S && t.id !== A && t.id !== g) {
            if (t.key.endsWith('_SUBMIT')) {
                G.push(t);
                continue;
            }
            if (x.push(t), (null === (k = t.button) || void 0 === k ? void 0 : k.type) === 'next') {
                let e = null === (B = t.button) || void 0 === B ? void 0 : B.target, n = x.indexOf(T[e]);
                -1 !== n && (x.splice(n, 1), x.push(T[e]));
            }
        }
    }
    let F = [
        T[g],
        ...x,
        ...G,
        T[S],
        T[A]
    ];
    return (0, r.jsx)(a.ModalRoot, {
        transitionState: E.transitionState,
        'aria-labelledby': I,
        children: (0, r.jsx)(a.Slides, {
            width: 440,
            activeSlide: N,
            centered: !1,
            children: F.map(e => (0, r.jsx)(a.Slide, {
                id: e.id,
                children: (0, r.jsx)('div', {
                    className: _.slideContainer,
                    children: (0, r.jsx)(c.Z, {
                        node: e,
                        reportType: t,
                        history: D,
                        onModalClose: E.onClose,
                        onSelectChild: P,
                        onNavigateBack: w,
                        multiSelect: O,
                        textInput: C,
                        successNodeId: S,
                        failNodeId: A,
                        onSubmit: U,
                        reportId: b
                    })
                })
            }, e.id))
        })
    });
};
