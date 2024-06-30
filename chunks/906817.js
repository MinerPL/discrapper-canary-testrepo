n.d(t, {
    EM: function () {
        return f;
    },
    WW: function () {
        return m;
    }
});
var i = n(735250), l = n(470079), r = n(362658), a = n(216306), s = n(155409), o = n(486458), c = n(540126), u = n(301342), d = n(327530), h = n(981631), p = n(689938), _ = n(857100);
function f(e, t, n) {
    if (e === c.zm)
        return d.$k;
    if (e === c.wd)
        return t.hasFeature(h.oNc.HUB) ? 0 : d.$k;
    if (e === n.voiceChannelsSectionNumber) {
        var i;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty())
            return 0;
        if (t.isCollapsed)
            return d.Pw + d.QP;
        let l = null === (i = n.getChannelFromSectionRow(e, 0)) || void 0 === i ? void 0 : i.channel;
        return null == l || l.record.type === h.d4z.GUILD_CATEGORY ? d.QP : 16 + d.QP;
    }
    return d.Pw;
}
function m(e, t) {
    switch (e) {
    case c.zm:
        return 'hoisted-spacer';
    case c.wd:
        return 'uncategorized-spacer';
    case c.p2:
        return 'favorites';
    case t.recentsSectionNumber:
        return 'recents-header';
    case t.voiceChannelsSectionNumber:
        return 'voice-channels-header';
    default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n)
                return 'category-'.concat(n.id);
            return 'section-'.concat(e);
        }
    }
}
t.ZP = l.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: f,
            guildChannelsVersion: m,
            selectedChannelId: g,
            disableManageChannels: C
        } = e, {isFavoritesPerk: I} = (0, r.z)('ChannelListSection'), E = l.useCallback(() => {
            let e = f.getCategoryFromSection(f.recentsSectionNumber);
            if (null == e)
                return;
            let t = null, i = e.getShownChannelAndThreadIds();
            null != g && i.includes(g) && (t = (0, a.KY)(f)), (0, a.Uo)(n.id, i, t);
        }, [
            n.id,
            g,
            f,
            m
        ]);
    switch (t) {
    case c.zm:
        return (0, i.jsx)('div', { style: { height: d.$k } });
    case c.wd:
        if (n.hasFeature(h.oNc.HUB))
            return null;
        return (0, i.jsx)('div', { style: { height: d.$k } });
    case c.p2:
        return (0, i.jsx)(u.P, { name: I ? p.Z.Messages.PINNED_CHANNELS : p.Z.Messages.FAVORITES });
    case f.recentsSectionNumber:
        return (0, i.jsx)(u.P, {
            name: p.Z.Messages.RECENTS_CATEGORY_HEADER,
            onDismiss: E
        });
    case f.voiceChannelsSectionNumber: {
            var N;
            let e = f.getCategoryFromSection(f.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty())
                return null;
            let n = null === (N = f.getChannelFromSectionRow(t, 0)) || void 0 === N ? void 0 : N.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: _.sectionDivider }),
                    (0, i.jsx)(u.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
    case c.wF: {
            let e = f.getNamedCategoryFromSection(t);
            if (null == e)
                return null;
            return (0, i.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: C,
                children: (0, i.jsx)(s.Z, {
                    inlineSpecs: d.MF,
                    arrowAlignment: o.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
    default: {
            let e = f.getNamedCategoryFromSection(t);
            if (null == e)
                return null;
            return (0, i.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: C
            });
        }
    }
});
