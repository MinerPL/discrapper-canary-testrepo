var r = n(735250),
    i = n(470079),
    a = n(588468),
    s = n(271383),
    o = n(483360),
    l = n(51144),
    u = n(877565),
    c = n(590921),
    d = n(665692),
    _ = n(689938);
let E = {
    sentinel: d.ME,
    stores: [s.ZP],
    matches: (e, t, n, r, i) => (i.mentions.user !== c.h3.DENY || i.mentions.role !== c.Fw.DENY || i.mentions.global !== c.VV.DENY) && !0,
    queryResults(e, t, n, r, i) {
        let a = r.mentions.global === c.VV.ALLOW_EVERYONE || r.mentions.global === c.VV.ALLOW_EVERYONE_OR_HERE,
            s = r.mentions.global === c.VV.ALLOW_EVERYONE_OR_HERE,
            l = r.mentions.user !== c.h3.DENY,
            u = r.mentions.role !== c.Fw.DENY,
            d = r.mentions.user === c.h3.ALLOW_GUILD,
            _ = r.mentions.role === c.Fw.ALLOW_ALL;
        return {
            results: o.ZP.queryMentionResults({
                query: n,
                channel: e,
                canMentionEveryone: a,
                canMentionHere: s,
                canMentionUsers: l,
                canMentionRoles: u,
                includeAllGuildUsers: d,
                includeNonMentionableRoles: _,
                request: i
            })
        };
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { users: s, globals: o, roles: l },
                selectedIndex: E,
                channel: f,
                query: h,
                options: p,
                onHover: m,
                onClick: I
            } = e,
            T = s.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.User,
                    {
                        guildId: f.guild_id,
                        onClick: I,
                        onHover: m,
                        selected: E === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        status: e.status,
                        hidePersonalInformation: p.hidePersonalInformation
                    },
                    e.user.id
                )
            ),
            g = o.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Generic,
                    {
                        onClick: I,
                        onHover: m,
                        selected: E === t + s.length,
                        index: s.length + t,
                        text: e.text,
                        description: p.hideMentionDescription ? null : e.description,
                        'aria-label': e.text
                    },
                    e.text
                )
            ),
            S = l.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Role,
                    {
                        onClick: I,
                        onHover: m,
                        selected: E === t + s.length + o.length,
                        index: s.length + o.length + t,
                        role: e,
                        hideDescription: p.hideMentionDescription
                    },
                    e.id
                )
            );
        return (
            p.mentions.user === c.h3.DENY ? ((t = _.Z.Messages.ROLES_MATCHING), (n = _.Z.Messages.ROLES)) : ((t = _.Z.Messages.MEMBERS_MATCHING), (n = _.Z.Messages.MEMBERS)),
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, u.gm)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: h,
                            getQuery: (e) => ''.concat(d.ME).concat(e)
                        }),
                        T,
                        s.length > 0 && o.length > 0 ? (0, r.jsx)(a.ZP.Divider, {}) : null,
                        g,
                        (s.length > 0 && l.length > 0) || (o.length > 0 && l.length > 0) ? (0, r.jsx)(a.ZP.Divider, {}) : null,
                        S
                    ]
                },
                'mentions'
            )
        );
    },
    onSelect(e) {
        let {
                results: { users: t, globals: n, roles: r },
                index: i,
                options: a,
                channel: s
            } = e,
            u = t[i],
            _ = n[i - t.length],
            E = r[i - t.length - n.length];
        return (
            null != u
                ? a.insertText(
                      (function (e, t, n) {
                          return o.ZP.hasSameRoleAsUsername(t, e) ? ''.concat(d.ME).concat(e.tag) : ''.concat(d.ME).concat(l.ZP.getUserTag(e, { identifiable: n ? 'never' : 'always' }));
                      })(u.user, s, a.hidePersonalInformation),
                      (function (e) {
                          return '<@'.concat(e.id, '>');
                      })(u.user)
                  )
                : null != _
                  ? a.insertText(
                        (function (e) {
                            return e.text;
                        })(_)
                    )
                  : null != E &&
                    a.insertText(
                        (function (e) {
                            return ''.concat(d.ME).concat(e.name);
                        })(E),
                        (function (e) {
                            return '<@&'.concat(e.id, '>');
                        })(E)
                    ),
            { type: c.z2.MENTION }
        );
    }
};
t.Z = E;
