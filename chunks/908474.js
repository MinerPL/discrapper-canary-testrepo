n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), l = n(399606), s = n(481060), r = n(69882), o = n(815790), c = n(893966), u = n(373791), d = n(776767), h = n(689938), p = n(332513);
function m(e) {
    let {member: t} = e, n = t.userId, m = t.guildId, _ = (0, l.e7)([c.Z], () => c.Z.getEnhancedMember(m, n), [
            n,
            m
        ]), f = (null != _ ? _ : t).unusualDMActivityUntil, E = a.useCallback(e => {
            if (null == e)
                return null;
            let t = new Date(e).getTime();
            return (0, o.fv)(t, o.jq.JOINED_AT);
        }, []), C = a.useMemo(() => null == t ? null : E(f), [
            t,
            E,
            f
        ]), g = a.useMemo(() => (0, r.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), I = a.useMemo(() => null == t.communicationDisabledUntil ? new Date() : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
    return null != f || g ? (0, i.jsx)(s.FormItem, {
        title: h.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
        titleClassName: p.infoTitle,
        children: (0, i.jsxs)(d.WM, {
            children: [
                null != f && (0, i.jsx)(d._2, {
                    icon: (0, i.jsx)(s.ChatAlertIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: d.Mn,
                        height: d.Mn,
                        className: p.__invalid_unusualDMLabelIcon
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY
                    }),
                    description: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: C
                    })
                }),
                g && null != I && (0, i.jsx)(d._2, {
                    icon: (0, i.jsx)(s.ClockWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: d.Mn,
                        height: d.Mn,
                        className: p.__invalid_unusualDMLabelIcon
                    }),
                    name: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.Z.Messages.GUILD_COMMUNICATION_DISABLED_ON_MEMBER
                    }),
                    description: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: (0, i.jsx)(u.Z, {
                            deadline: I,
                            showUnits: !0,
                            stopAtOneSec: !0
                        })
                    })
                })
            ]
        })
    }) : null;
}
