var s = n(735250);
n(470079);
var o = n(481060), r = n(113434), a = n(497505), i = n(644646), l = n(613087), c = n(472144), d = n(569379), u = n(232604);
t.Z = e => {
    let {
            quest: t,
            progressBarRef: n,
            isExpanded: p
        } = e, {percentComplete: x} = (0, r.Rf)(t), m = (0, d.eQ)(t), g = (0, d.vf)(t, p), C = p ? 'expanded' : 'collapsed';
    return (0, s.jsxs)('div', {
        className: u.questProgressWrapper,
        children: [
            (0, s.jsx)(l.l7, {
                inState: C,
                id: 'progress-bar',
                ref: n,
                children: e => (0, s.jsx)(c.Z, {
                    ref: e,
                    quest: t,
                    percentComplete: x,
                    size: 42,
                    strokeWidth: 3,
                    children: (0, s.jsx)(i.Z, {
                        className: u.questProgressRewardTile,
                        quest: t,
                        questContent: a.jn.QUEST_BAR_V2,
                        autoplay: !1
                    })
                })
            }),
            (0, s.jsxs)('div', {
                children: [
                    (0, s.jsx)(l.l7, {
                        inState: C,
                        id: 'progress-title',
                        children: e => (0, s.jsx)(o.Text, {
                            ref: e,
                            className: u.questProgressHint,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: m
                        })
                    }),
                    (0, s.jsx)(l.l7, {
                        inState: C,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: e => (0, s.jsx)(o.Text, {
                            ref: e,
                            className: u.questProgressHint,
                            color: 'text-muted',
                            variant: 'text-xs/normal',
                            children: g
                        })
                    })
                ]
            })
        ]
    });
};
