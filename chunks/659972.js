t.d(n, {
  Z: function() {
return E;
  },
  k: function() {
return l;
  }
});
var a, l, s = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  r = t(481060),
  c = t(565138),
  d = t(372769),
  u = t(857395),
  _ = t(131154),
  m = t(38981),
  h = t(40916);

function E(e) {
  let {
guild: n,
stageInstance: t,
showGuildPopout: a,
setShowGuildPopout: l,
handleGuildNameClick: i,
source: E,
speakers: x,
speakerCount: I,
audienceCount: T,
channelName: N
  } = e, g = n.id;
  return (0, s.jsx)('div', {
className: h.contentContainer,
children: (0, s.jsxs)('div', {
  className: h.headerContainer,
  children: [
    (0, s.jsxs)('div', {
      className: h.guildInfoContainer,
      children: [
        (0, s.jsx)(u.Z, {
          guildId: g,
          shouldShow: a,
          onRequestClose: () => l(!1),
          children: () => (0, s.jsxs)(r.Clickable, {
            className: h.flexContainerRow,
            onClick: i,
            children: [
              (0, s.jsx)(c.Z, {
                guild: n,
                size: c.Z.Sizes.MINI,
                className: h.guildIcon
              }),
              (0, s.jsxs)('div', {
                className: h.flexContainerRow,
                children: [
                  (0, s.jsx)(r.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: o()(h.guildName, {
                      [h.disabled]: null == i
                    }),
                    children: n.name
                  }),
                  (0, s.jsx)(d.Z, {
                    guild: n
                  })
                ]
              })
            ]
          })
        }),
        (0, s.jsxs)('div', {
          className: h.rightJustifiedContent,
          children: [
            6 === E && (0, s.jsx)('div', {
              className: h.featuredTag,
              children: (0, s.jsx)(r.Text, {
                variant: 'text-sm/normal',
                className: h.featuredTagText,
                children: 'Featured'
              })
            }),
            (0, s.jsx)(m.Z, {
              count: T,
              className: h.__invalid_audienceCount
            })
          ]
        })
      ]
    }),
    (0, s.jsx)(r.Text, {
      color: 'header-primary',
      variant: 'text-lg/semibold',
      className: h.topicText,
      children: t.topic
    }),
    (0, s.jsx)(r.Text, {
      color: 'header-secondary',
      className: h.description,
      variant: 'text-sm/normal',
      children: t.description
    }),
    (0, s.jsx)(_.Z, {
      guild: n,
      speakers: x,
      speakerCount: I,
      className: h.speakers
    }),
    null != N && (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)('hr', {
          className: h.divider
        }),
        (0, s.jsxs)('div', {
          className: h.footer,
          children: [
            (0, s.jsx)(r.StageIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 20,
              height: 20,
              className: h.icon
            }),
            (0, s.jsx)(r.Text, {
              color: 'header-secondary',
              className: h.__invalid_label,
              variant: 'text-sm/normal',
              children: N
            })
          ]
        })
      ]
    })
  ]
})
  });
}
(a = l || (l = {}))[a.UNSPECIFIED = 0] = 'UNSPECIFIED', a[a.TRENDING = 1] = 'TRENDING', a[a.PERSONALIZED = 2] = 'PERSONALIZED', a[a.USER_GUILDS = 3] = 'USER_GUILDS', a[a.FRIENDS_GUILDS = 4] = 'FRIENDS_GUILDS', a[a.INTRO_CARD = 5] = 'INTRO_CARD', a[a.FEATURED = 6] = 'FEATURED';