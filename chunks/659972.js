t.d(n, {
  Z: function() {
return T;
  },
  k: function() {
return l;
  }
});
var a, l, s = t(735250);
t(470079);
var i = t(120356),
  r = t.n(i),
  o = t(481060),
  c = t(857395),
  d = t(131154),
  u = t(940627),
  _ = t(346656),
  E = t(38981),
  h = t(54359);

function T(e) {
  let {
guild: n,
stageInstance: t,
showGuildPopout: a,
setShowGuildPopout: l,
handleGuildNameClick: i,
source: T,
speakers: m,
speakerCount: I,
audienceCount: N,
channelName: x
  } = e, f = n.id;
  return (0, s.jsx)('div', {
className: h.contentContainer,
children: (0, s.jsxs)('div', {
  className: h.headerContainer,
  children: [
    (0, s.jsxs)('div', {
      className: h.guildInfoContainer,
      children: [
        (0, s.jsx)(c.Z, {
          guildId: f,
          shouldShow: a,
          onRequestClose: () => l(!1),
          children: () => (0, s.jsxs)(o.Clickable, {
            className: h.flexContainerRow,
            onClick: i,
            children: [
              (0, s.jsx)(_.Z, {
                guild: n,
                size: _.Z.Sizes.MINI,
                className: h.guildIcon
              }),
              (0, s.jsxs)('div', {
                className: h.flexContainerRow,
                children: [
                  (0, s.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: r()(h.guildName, {
                      [h.disabled]: null == i
                    }),
                    children: n.name
                  }),
                  (0, s.jsx)(u.Z, {
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
            6 === T && (0, s.jsx)('div', {
              className: h.featuredTag,
              children: (0, s.jsx)(o.Text, {
                variant: 'text-sm/normal',
                className: h.featuredTagText,
                children: 'Featured'
              })
            }),
            (0, s.jsx)(E.Z, {
              count: N,
              className: h.__invalid_audienceCount
            })
          ]
        })
      ]
    }),
    (0, s.jsx)(o.Text, {
      color: 'header-primary',
      variant: 'text-lg/semibold',
      className: h.topicText,
      children: t.topic
    }),
    (0, s.jsx)(o.Text, {
      color: 'header-secondary',
      className: h.description,
      variant: 'text-sm/normal',
      children: t.description
    }),
    (0, s.jsx)(d.Z, {
      guild: n,
      speakers: m,
      speakerCount: I,
      className: h.speakers
    }),
    null != x && (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)('hr', {
          className: h.divider
        }),
        (0, s.jsxs)('div', {
          className: h.footer,
          children: [
            (0, s.jsx)(o.StageIcon, {
              size: 'custom',
              color: 'currentColor',
              width: 20,
              height: 20,
              className: h.icon
            }),
            (0, s.jsx)(o.Text, {
              color: 'header-secondary',
              className: h.__invalid_label,
              variant: 'text-sm/normal',
              children: x
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