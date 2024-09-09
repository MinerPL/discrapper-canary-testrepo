s.d(t, {
    Z: function () {
        return S;
    }
}),
    s(47120);
var n = s(735250),
    i = s(470079),
    a = s(567526),
    r = s(481060),
    o = s(230711),
    l = s(318661),
    u = s(63063),
    c = s(51144),
    d = s(544508),
    E = s(801461),
    _ = s(981631),
    g = s(689938),
    m = s(740080);
function S(e) {
    let { userRef: t, usernameSuggestionLoading: s = !1, oneClickFlow: S = !1, ...I } = e,
        { user: T, editState: N, onClose: O } = I,
        h = (0, l.ZP)(T.id),
        f = (function (e, t, s) {
            switch (e) {
                case E.Wq.EDIT_USERNAME:
                    return {
                        header: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                        subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                    };
                case E.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
                        subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
                    };
                case E.Wq.PREVIEW:
                    return {
                        header: g.Z.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({ displayName: t }),
                        subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                            onClick: () => {
                                s(), o.Z.open(_.oAB.ACCOUNT);
                            }
                        })
                    };
                case E.Wq.SUGGESTION:
                    return {
                        header: g.Z.Messages.POMELO_ACTION_LABEL_OCF,
                        subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
                        link: g.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({ helpdeskArticle: u.Z.getArticleURL(_.BhN.POMELO_FAQ) })
                    };
                default:
                    return {
                        header: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
                        subtitle: g.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                    };
            }
        })(N, c.ZP.getName(T), O),
        [M, L] = (0, r.useSpring)(() => ({
            opacity: 0,
            y: 10
        }));
    return (
        i.useEffect(() => {
            L({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0
                }
            });
        }, [L, N]),
        (0, n.jsxs)('div', {
            className: m.displayNameContainer,
            children: [
                (0, n.jsxs)(a.animated.div, {
                    style: {
                        opacity: M.opacity,
                        y: M.y
                    },
                    children: [
                        (0, n.jsx)(r.Heading, {
                            className: m.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: f.header
                        }),
                        (0, n.jsxs)('div', {
                            className: m.subtitle,
                            children: [
                                (0, n.jsx)(r.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: f.subtitle
                                }),
                                null != f.link &&
                                    (0, n.jsx)(r.Text, {
                                        className: m.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: f.link
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(d.Z, {
                    ...I,
                    displayProfile: h,
                    ref: t,
                    usernameSuggestionLoading: s,
                    oneClickFlow: S
                })
            ]
        })
    );
}
