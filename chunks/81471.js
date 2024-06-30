var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(442837), o = n(481060), c = n(905405), d = n(255269), u = n(937889), _ = n(695346), E = n(496675), h = n(699516), I = n(68588), m = n(512665), p = n(868807), g = n(981631), T = n(768760), S = n(689938), C = n(608524), N = n(622322);
let f = s.memo(function (e) {
    let {channel: t} = e, {
            loaded: n,
            error: a,
            message: f
        } = (0, p.a)(t), A = (0, c.p)(), Z = (0, l.e7)([h.Z], () => null != f && h.Z.isBlockedForMessage(f), [f]), L = (0, l.e7)([E.Z], () => E.Z.can(g.Plq.MANAGE_MESSAGES, t)), v = _.cC.useSetting(), {content: O} = s.useMemo(() => (null == f ? void 0 : f.content) != null && '' !== f.content ? (0, u.ZP)(f, {
            formatInline: !0,
            noStyleAndInteraction: !0,
            shouldFilterKeywords: A
        }) : { content: null }, [
            f,
            A
        ]), R = null;
    if (a)
        R = (0, i.jsx)(o.Text, {
            className: C.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: S.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
        });
    else if (n) {
        if (null != f && Z)
            R = (0, i.jsx)(o.Text, {
                className: C.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: S.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
            });
        else if (null != f) {
            let {
                contentPlaceholder: e,
                renderedContent: t
            } = (0, m.f)(f, O, Z, r()(C.messageContent, N.inlineFormat), {
                leadingIconClass: C.messageContentIcon,
                trailingIconClass: C.messageContentIcon,
                iconSize: T.WW
            });
            R = null != t ? (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                className: C.messageContent,
                children: t
            }) : (0, i.jsx)(o.Text, {
                tag: 'span',
                variant: 'text-sm/normal',
                color: 'text-muted',
                className: C.messageReplacement,
                children: e
            });
        } else
            R = (0, i.jsx)(o.Text, {
                className: C.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: S.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
            });
    } else
        R = null;
    return (0, i.jsx)(I.a.Provider, {
        value: (0, d.Z)(v, L),
        children: (0, i.jsx)(o.FocusBlock, {
            className: C.messageFocusBlock,
            children: R
        })
    });
});
t.Z = f;
