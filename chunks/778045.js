n(733860);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(353093),
  o = n(360794);

function l(e) {
  let {
games: t
  } = e;
  return (0, r.jsx)('div', {
className: o.tooltipGames,
children: t.map(e => {
  let t = e.getIconURL(24);
  return null == t ? null : (0, r.jsxs)('div', {
    className: o.tooltipGame,
    children: [
      (0, r.jsx)('div', {
        className: o.tooltipGameImageContainer,
        children: (0, r.jsx)('img', {
          src: t,
          alt: e.name,
          className: o.tooltipGameImage
        })
      }),
      (0, r.jsx)(a.Text, {
        variant: 'text-xs/medium',
        color: 'text-normal',
        className: o.tooltipGameName,
        children: e.name
      })
    ]
  }, e.id);
})
  });
}
t.Z = i.memo(function(e) {
  let {
games: t,
prioritizedGameIds: n
  } = e, u = t.filter(e => null != e && null != e.icon);
  if (null != n && n.size > 0) {
for (let e = 0; e < u.length; e++)
  if (n.has(u[e].id)) {
    let t = u.splice(e, 1)[0];
    u.unshift(t);
  }
  }
  let c = u.slice(0, 3),
d = i.useMemo(() => {
  let e = u[3];
  if (null == e)
    return null;
  let t = e.getIconURL(24);
  if (null == t)
    return null;
  if (u.length > 4) {
    let n = u.slice(3),
      i = (0, s.f6)(n.map(e => e.name));
    return (0, r.jsx)(a.Tooltip, {
      'aria-label': null != i ? i : '',
      text: (0, r.jsx)(l, {
        games: n
      }),
      position: 'bottom',
      children: i => (0, r.jsxs)('div', {
        ...i,
        className: o.gameImageContainer,
        children: [
          (0, r.jsx)('img', {
            src: t,
            alt: e.name,
            className: o.gameImage
          }),
          (0, r.jsx)('div', {
            className: o.extraGameCount,
            children: (0, r.jsx)(a.Text, {
              variant: 'text-xs/medium',
              color: 'always-white',
              children: '+'.concat(n.length)
            })
          })
        ]
      })
    });
  }
  return (0, r.jsx)(a.Tooltip, {
    text: e.name,
    position: 'bottom',
    children: n => (0, r.jsx)('div', {
      ...n,
      className: o.gameImageContainer,
      children: (0, r.jsx)('img', {
        src: t,
        alt: e.name,
        className: o.gameImage
      })
    })
  });
}, [u]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  c.map(e => {
    let t = e.getIconURL(24);
    return null == t ? null : (0, r.jsx)(a.Tooltip, {
      text: e.name,
      position: 'bottom',
      children: n => (0, r.jsx)('div', {
        ...n,
        className: o.gameImageContainer,
        children: (0, r.jsx)('img', {
          src: t,
          alt: e.name,
          className: o.gameImage
        })
      })
    }, e.id);
  }),
  d
]
  });
});