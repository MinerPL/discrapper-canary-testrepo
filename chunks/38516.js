t(411104);
var a = t(735250);
t(470079);
var r = t(120356),
    s = t.n(r),
    i = t(643872),
    o = t(481060),
    l = t(810568),
    c = t(689938),
    d = t(51527),
    u = t(825718);
let _ = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
function E(e) {
    let { website: n, trackClick: t } = e,
        {
            action: r,
            icon: s,
            title: d
        } = (function (e) {
            switch (e.category) {
                case i.p.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(o.GlobeEarthIcon, { colorClass: u.linkIcon }),
                        action: l.as.WebsiteLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL
                    };
                case i.p.TWITTER:
                    return {
                        icon: (0, a.jsx)(o.XNeutralIcon, { colorClass: u.linkIcon }),
                        action: l.as.XLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER
                    };
                case i.p.YOUTUBE:
                    return {
                        action: l.as.YouTubeLink,
                        icon: (0, a.jsx)(o.YoutubeNeutralIcon, { colorClass: u.linkIcon }),
                        title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(n);
    return (0, a.jsx)(
        o.Anchor,
        {
            className: u.linkAnchor,
            title: d,
            href: n.url,
            onClick: () => {
                t(r);
            },
            target: '_blank',
            children: s
        },
        n.url
    );
}
n.Z = function (e) {
    let { detectedGame: n, trackClick: t } = e;
    if (null == n.websites) return null;
    let r = n.websites
        .filter((e) => {
            let { category: n } = e;
            return _.includes(n);
        })
        .sort((e, n) => e.category - n.category);
    return 0 === r.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(o.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.Z.Messages.GAME_PROFILE_LINKS
                  }),
                  (0, a.jsx)('div', {
                      className: s()(d.row, d.gapMd),
                      children: r.map((e) =>
                          (0, a.jsx)(
                              E,
                              {
                                  website: e,
                                  trackClick: t
                              },
                              e.url
                          )
                      )
                  })
              ]
          });
};
