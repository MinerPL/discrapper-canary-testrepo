n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(873546), l = n(481060), s = n(130402), r = n(404975), o = n(185923), c = n(689938), u = n(613861);
function d(e) {
    let {
        channel: t,
        message: n,
        togglePopout: d,
        renderEmojiPicker: h,
        shouldShow: p
    } = e;
    return (0, i.jsx)(l.Popout, {
        animation: l.Popout.Animation.FADE,
        renderPopout: e => {
            let {closePopout: i} = e;
            return h(t, n, i, !1);
        },
        shouldShow: p,
        onRequestClose: d,
        position: a.tq ? 'top' : 'left',
        align: a.tq ? 'center' : 'top',
        children: (e, t) => {
            let {
                    onClick: n,
                    ...a
                } = e, {isShown: h} = t;
            return (0, i.jsx)(l.Tooltip, {
                disableTooltipPointerEvents: !1,
                text: c.Z.Messages.ADD_REACTION,
                color: l.TooltipColors.PRIMARY,
                'aria-label': c.Z.Messages.ADD_REACTION,
                hideOnClick: !0,
                tooltipClassName: u.tooltip,
                children: e => {
                    let {
                        onMouseEnter: t,
                        onMouseLeave: n,
                        onClick: p
                    } = e;
                    return (0, i.jsx)(r.zx, {
                        onMouseEnter: () => {
                            null == t || t(), (0, s.x)(o.qR.MessageContextMenuMouseEntered);
                        },
                        onMouseLeave: n,
                        onClick: () => {
                            d(), null == p || p();
                        },
                        'aria-label': c.Z.Messages.ADD_REACTION,
                        selected: h,
                        ...a,
                        children: (0, i.jsx)(l.ReactionIcon, {
                            size: 'sm',
                            color: 'currentColor',
                            className: u.icon
                        })
                    });
                }
            }, 'add-reaction');
        }
    });
}
