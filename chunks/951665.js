n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(481060), r = n(457414), l = n(311173), o = n(689938), c = n(463930);
function d(e) {
    var t;
    let {
            rule: n,
            onChangeRule: d,
            collapsed: u = !1
        } = e, [_, E] = a.useState(!u), I = a.useCallback(() => {
            E(!_);
        }, [
            _,
            E
        ]), T = a.useCallback(e => {
            d({
                ...n,
                triggerMetadata: {
                    ...n.triggerMetadata,
                    regexPatterns: e
                }
            });
        }, [
            d,
            n
        ]);
    return (0, r.S)(n.triggerType) ? (0, s.jsx)(i.Collapsible, {
        isExpanded: _,
        collapsibleContent: (0, s.jsx)(l.Z, {
            rule: n,
            onChangeText: T,
            className: c.textAreaContainer,
            initialValue: null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.regexPatterns
        }),
        className: c.collapseable,
        children: e => {
            let {onClick: t} = e;
            return (0, s.jsx)(i.Clickable, {
                onClick: e => {
                    I(), t(e);
                },
                children: (0, s.jsxs)('div', {
                    className: c.header,
                    children: [
                        (0, s.jsx)(i.Heading, {
                            variant: 'text-sm/medium',
                            children: o.Z.Messages.GUILD_AUTOMOD_REGEX_TEXTAREA_TITLE
                        }),
                        _ ? (0, s.jsx)(i.ChevronSmallUpIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.arrow
                        }) : (0, s.jsx)(i.ChevronSmallDownIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c.arrow
                        })
                    ]
                })
            });
        }
    }) : null;
}
