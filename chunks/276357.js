n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var a = n(735250), s = n(470079), r = n(924826), l = n(91192), i = n(442837), o = n(481060), c = n(607070), d = n(109434), u = n(456269), m = n(228392), h = n(479099), _ = n(981631), g = n(689938), x = n(256521);
function C() {
    return Promise.resolve();
}
function f(e) {
    let {
            channel: t,
            closePopout: n,
            setPopoutRef: f
        } = e, p = (0, u.Vm)(t), {tagFilter: T} = (0, d.H)(t.id), I = (0, d.v)(), E = (0, i.e7)([c.Z], () => c.Z.keyboardModeEnabled), N = s.useCallback(e => {
            (0, m.e7)({
                guildId: t.guild_id,
                channelId: t.id,
                tagId: e,
                filterTagIds: Array.from(T),
                added: !T.has(e),
                location: {
                    page: _.ZY5.GUILD_CHANNEL,
                    section: _.jXE.FORUM_CHANNEL_HEADER,
                    object: _.qAy.CHANNEL_TAG
                }
            }), I.getState().toggleTagFilter(t.id, e);
        }, [
            t,
            T,
            I
        ]), b = s.useCallback(() => {
            I.getState().setTagFilter(t.id, new Set()), !E && n();
        }, [
            I,
            t.id,
            E,
            n
        ]), v = (0, r.ZP)({
            id: ''.concat(t.id, '-all-tags-dropdown-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: C,
            scrollToEnd: C
        }), S = s.useRef(null);
    return s.useEffect(() => {
        requestAnimationFrame(() => {
            if (null != S.current) {
                let e = S.current.querySelector('.'.concat(x.tag));
                null != e && e.focus();
            }
        });
    }, []), (0, a.jsxs)(o.Dialog, {
        ref: f,
        'aria-label': g.Z.Messages.FORUM_TAG_FILTER_HEADER,
        className: x.container,
        children: [
            (0, a.jsx)('div', {
                className: x.header,
                children: (0, a.jsxs)('div', {
                    className: x.headerLeft,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            color: 'interactive-normal',
                            variant: 'text-xs/bold',
                            className: x.headerText,
                            children: g.Z.Messages.FORUM_TAG_POST_SELECT
                        }),
                        (0, a.jsx)('div', {
                            className: x.countContainer,
                            children: (0, a.jsx)(o.Text, {
                                className: x.countText,
                                color: 'none',
                                variant: 'text-xs/medium',
                                children: T.size
                            })
                        })
                    ]
                })
            }),
            (0, a.jsx)(l.bG, {
                navigator: v,
                children: (0, a.jsx)(l.SJ, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, a.jsx)('div', {
                            ref: e => {
                                t.current = e, S.current = e;
                            },
                            ...n,
                            className: x.tagContainer,
                            children: p.map(e => (0, a.jsx)(h.Z, {
                                className: x.tag,
                                tag: e,
                                selected: T.has(e.id),
                                onClick: () => N(e.id)
                            }, e.id))
                        });
                    }
                })
            }),
            (0, a.jsx)('div', { className: x.separator }),
            (0, a.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                size: o.Button.Sizes.MIN,
                color: o.Button.Colors.CUSTOM,
                className: x.clear,
                'aria-label': g.Z.Messages.FORUM_CLEAR_ALL,
                onClick: b,
                children: (0, a.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-link',
                    children: g.Z.Messages.FORUM_CLEAR_ALL
                })
            })
        ]
    });
}
