n.d(t, {
    B: function () {
        return m;
    },
    F: function () {
        return p;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(393238), c = n(626135), d = n(981631), u = n(626953);
let _ = [
        'egirl',
        'egirls',
        'waifu',
        'dating',
        'nsfw',
        'sex',
        'playboy',
        'stupid',
        'harem',
        'playgirl',
        'shitcoin',
        'shitpost',
        'porno',
        'nudes',
        'sexy',
        'horny',
        'fart',
        'tits',
        'balls',
        'cum'
    ], E = e => {
        let {
            text: t,
            onClick: n,
            className: s,
            hide: a
        } = e;
        return (0, i.jsx)('li', {
            className: r()(u.tag, s, { [u.hide]: a }),
            children: (0, i.jsx)(l.Clickable, {
                className: u.tagText,
                onClick: e => {
                    e.stopPropagation(), e.preventDefault(), n(e);
                },
                children: t
            })
        });
    }, h = e => {
        let {
            tags: t,
            onTagClick: n,
            guildId: a,
            section: r
        } = e;
        return s.useEffect(() => {
            c.default.track(d.rMx.OPEN_POPOUT, {
                type: 'Discovery Tags Overflow',
                guild_id: a,
                location: {
                    page: d.ZY5.GUILD_DISCOVERY,
                    section: r
                }
            });
        }, [
            a,
            r
        ]), (0, i.jsx)(l.Dialog, {
            className: u.overflowTagsPopout,
            children: (0, i.jsx)('ul', {
                children: t.map(e => (0, i.jsx)(E, {
                    onClick: () => n(e),
                    className: u.tagAlt,
                    text: e
                }, e))
            })
        });
    }, I = e => {
        let {
            className: t,
            count: n
        } = e;
        return (0, i.jsx)(l.Popout, {
            renderPopout: () => (0, i.jsx)(h, { ...e }),
            position: 'right',
            align: 'top',
            closeOnScroll: !0,
            children: e => (0, i.jsx)(E, {
                className: t,
                ...e,
                text: '+'.concat(n)
            })
        });
    }, m = {
        DEFAULT: u.tagDefault,
        LIGHT: u.tagLight,
        ALT: u.tagAlt
    }, p = e => {
        let {
                tags: t,
                onTagClick: n,
                className: a,
                discoveryTagStyle: l = m.DEFAULT,
                hideOverflow: c = !1,
                guildId: d,
                section: h
            } = e, {
                ref: p,
                width: g
            } = (0, o.Z)(), [T, S] = s.useState(null), C = t.filter(e => !_.includes(e.toLowerCase()));
        return s.useLayoutEffect(() => {
            if (null == p.current || null == g || 0 === g)
                return;
            let e = 0, t = 0, n = g - 40 - 4;
            for (let i = 0; i < C.length && (t += p.current.children[i].clientWidth + 4, i === C.length - 1 ? !(t > n + 40) : !(t > n)); i++) {
                ;
                e++;
            }
            S(t => e <= C.length ? e : t);
        }, [
            g,
            p,
            C
        ]), (0, i.jsxs)('ul', {
            ref: p,
            className: r()(u.tagContainer, a, { [u.invisible]: null == T }),
            children: [
                C.map((e, t) => (0, i.jsx)(E, {
                    className: l,
                    onClick: () => n(e),
                    hide: null != T && t >= T,
                    text: e
                }, e)),
                !c && null != T && T < C.length && (0, i.jsx)(I, {
                    className: l,
                    onTagClick: n,
                    tags: C.slice(T),
                    count: C.length - T,
                    guildId: d,
                    section: h
                })
            ]
        });
    };
