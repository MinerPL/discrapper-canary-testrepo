n.d(t, {
    Z: function () {
        return m;
    },
    m: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var r = n(470079),
    i = n(954955),
    a = n.n(i),
    s = n(442837),
    o = n(285651),
    l = n(268350),
    u = n(453070),
    c = n(926491),
    d = n(594174),
    _ = n(483360),
    E = n(251625),
    f = n(606301),
    h = n(549058);
let p = (0, E.ad)(l.$p, h.J7),
    m = (e, t, n) => {
        let i = (0, u.fQ)(n),
            a = (0, s.e7)([d.default], () => d.default.getCurrentUser());
        return r.useMemo(() => {
            let r = (0, f.wN)(e);
            if (t || null == e || '' === e || r.length > h.t7 || !i) return [];
            let s = [],
                l = [],
                u = (0, f.kT)(e),
                c = u === r[0] ? r : [u, ...r];
            _.ZP.queryStickers(c, !1).forEach((e) => {
                let { sticker: t } = e,
                    r = (0, o.cO)(t, a, n),
                    i = {
                        sticker: t,
                        sendability: r
                    };
                r === o.eb.SENDABLE ? s.push(i) : r === o.eb.SENDABLE_WITH_PREMIUM && l.push(i);
            });
            let d = [];
            return s.length > 0 && ((d = s.slice(0, h.qm)), 0 !== l.length && (d.length === h.qm && d.pop(), d.push(l[0]))), d;
        }, [e, n, i, t, a]);
    },
    I = (e) => {
        let { setTextInputValue: t, setHasDismissed: n, setHasSelection: i, setFocusedSuggestionType: s, delayBeforeSuggestions: o } = e,
            l = r.useRef(null),
            u = r.useRef(!1),
            d = r.useRef(!1),
            _ = r.useMemo(() => a()(t, null != o ? o : h.gf), [t, o]);
        return {
            handleTextChange: async (e) => {
                var r;
                if (null == e || '' === e) _.cancel(), null == t || t(''), null == n || n(!1), null == i || i(!1), null == s || s(null), (l.current = null), (u.current = !1);
                else if (!u.current && e.trim() !== (null === (r = l.current) || void 0 === r ? void 0 : r.trim())) {
                    if (((l.current = e), (0, f.wN)(e).length > h.t7)) {
                        (u.current = !0), _.cancel(), t('');
                        return;
                    }
                    if (!0 === d.current) return;
                    !c.Z.hasLoadedStickerPacks && ((d.current = !0), await p(), (d.current = !1)), _(l.current);
                }
            },
            debouncedSetTextInputValue: _
        };
    };
