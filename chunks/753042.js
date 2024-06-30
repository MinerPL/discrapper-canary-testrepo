n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(399606), r = n(481060), o = n(388905), c = n(376923), u = n(16829), d = n(430824), h = n(944486), p = n(189432), m = n(776767), _ = n(981631), f = n(689938), E = n(332513);
function C(e) {
    let {member: t} = e, n = (0, s.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), a = (0, c.mh)(t.userId, t.guildId), C = (0, c.mV)(t.userId, t.guildId), g = (0, c.LD)(t.userId), I = (0, c.wi)(t.userId, t.guildId);
    return null == n ? null : (0, i.jsx)('div', {
        className: l()(E.__invalid_safetySignalsMainContainer),
        children: (0, i.jsx)(r.FormItem, {
            title: f.Z.Messages.ACCOUNT,
            titleClassName: E.infoTitle,
            children: (0, i.jsxs)(m.WM, {
                children: [
                    (0, i.jsx)(m._2, {
                        icon: (0, i.jsx)(r.ShieldUserIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn,
                            className: E.__invalid_unusualDMLabelIcon
                        }),
                        name: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: f.Z.Messages.MEMBER_VERIFICATION_ACCOUNT_VERIFIED
                        }),
                        description: a ? (0, i.jsx)(r.CheckmarkBoldIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn,
                            color: r.tokens.colors.INFO_POSITIVE_FOREGROUND
                        }) : (0, i.jsx)(r.CloseLargeBoldIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn,
                            color: r.tokens.colors.INFO_DANGER_FOREGROUND
                        })
                    }),
                    C !== c.qc.NO_GATE && (0, i.jsx)(m._2, {
                        icon: (0, i.jsx)(r.BookCheckIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn,
                            className: E.__invalid_unusualDMLabelIcon
                        }),
                        name: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
                        }),
                        description: C === c.qc.AGREED ? (0, i.jsx)(r.CheckmarkBoldIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn,
                            color: r.tokens.colors.INFO_POSITIVE_FOREGROUND
                        }) : (0, i.jsx)(r.CloseLargeBoldIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn,
                            color: r.tokens.colors.INFO_DANGER_FOREGROUND
                        })
                    }),
                    (0, i.jsx)(m._2, {
                        icon: (0, i.jsx)(r.ClydeIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: m.Mn,
                            height: m.Mn
                        }),
                        name: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
                        }),
                        description: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: g
                        })
                    }),
                    (0, i.jsx)(m._2, {
                        icon: (0, i.jsx)(o.Vj, {
                            guild: n,
                            size: o.Vj.Sizes.SMOL,
                            animate: !1,
                            className: E.guildIcon
                        }),
                        name: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
                        }),
                        description: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: I
                        })
                    }),
                    (0, i.jsx)(m._2, {
                        icon: (0, i.jsx)(r.GroupPlusIcon, {
                            size: 'custom',
                            width: m.Mn,
                            height: m.Mn
                        }),
                        name: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
                        }),
                        description: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-normal',
                            children: (0, i.jsx)(u.ZP, {
                                userId: t.userId,
                                guildId: t.guildId,
                                showInviterAsFooter: !0,
                                onClickInviter: e => {
                                    let n = h.Z.getChannelId();
                                    (0, p.r)(t.guildId, e.id, null != n ? n : _.lds);
                                }
                            })
                        })
                    })
                ]
            })
        })
    });
}
