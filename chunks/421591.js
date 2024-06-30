t(47120);
var i = t(735250), l = t(470079), a = t(367907), r = t(541099), s = t(695676), o = t(173790), c = t(361917), u = t(684256), d = t(981631), m = t(987421);
n.Z = l.memo(l.forwardRef(function (e, n) {
    let t, {
            channel: p,
            entrypoint: _
        } = e, [E, A] = l.useState(''), N = function (e) {
            let [n, t] = l.useState(null), i = l.useRef(0);
            return l.useEffect(() => {
                null == n || n.scrollTo(0, 0);
            }, [
                n,
                e
            ]), l.useEffect(() => {
                if (null != n)
                    return n.scrollTo(0, i.current), n.addEventListener('scroll', e), () => {
                        n.removeEventListener('scroll', e, !1);
                    };
                function e() {
                    if (null != n)
                        i.current = n.scrollTop;
                }
            }, [n]), t;
        }(E);
    l.useEffect(() => {
        (0, a.yw)(d.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
            source: _,
            location: 'app_launcher'
        });
    }, [_]);
    let {
        history: h,
        setHistory: C,
        currentView: f,
        pushHistory: I,
        goBack: x
    } = function () {
        let [e, n] = l.useState([{ type: s.gc.HOME }]), t = e[e.length - 1];
        return {
            history: e,
            setHistory: n,
            currentView: t,
            pushHistory: t => {
                n([
                    ...e,
                    t
                ]);
            },
            goBack: () => {
                if (0 === e.length)
                    return;
                let t = [...e];
                t.pop(), n(t);
            }
        };
    }();
    switch (l.useEffect(() => {
            let e = Date.now();
            return () => {
                (0, a.yw)(d.rMx.APP_LAUNCHER_CLOSED, {
                    reason: r.Z.closeReason(),
                    time_spent: Date.now() - e,
                    source: _
                });
            };
        }, [_]), null == f ? void 0 : f.type) {
    case s.gc.HOME:
        t = (0, i.jsx)(c.Z, {
            setScroller: N,
            channel: p,
            entrypoint: _,
            searchQuery: E,
            setSearchQuery: A
        });
        break;
    case s.gc.LIST:
        t = (0, i.jsx)(u.Z, {
            channel: p,
            entrypoint: _,
            title: f.title,
            look: f.look,
            items: f.items,
            sectionName: f.sectionName
        });
        break;
    case s.gc.APPLICATION:
        t = (0, i.jsx)(o.Z, {
            channel: p,
            application: f.application,
            sectionName: f.sectionName
        });
        break;
    default:
        t = null;
    }
    return (0, i.jsx)('div', {
        className: m.drawerSizingWrapper,
        ref: n,
        children: (0, i.jsx)('div', {
            className: m.contentWrapper,
            children: (0, i.jsx)(s.uX.Provider, {
                value: {
                    history: h,
                    setHistory: C,
                    currentView: f,
                    pushHistory: I,
                    goBack: x
                },
                children: t
            })
        })
    });
}));
