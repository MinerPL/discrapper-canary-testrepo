"use strict";
n(733860);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(353093),
  a = n(785008);

function l(e) {
  let {
    games: t
  } = e;
  return (0, i.jsx)("div", {
    className: a.tooltipGames,
    children: t.map(e => {
      let t = e.getIconURL(24);
      return null == t ? null : (0, i.jsxs)("div", {
        className: a.tooltipGame,
        children: [(0, i.jsx)("div", {
          className: a.tooltipGameImageContainer,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: a.tooltipGameImage
          })
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          className: a.tooltipGameName,
          children: e.name
        })]
      }, e.id)
    })
  })
}
t.Z = r.memo(function(e) {
  let {
    games: t,
    prioritizedGameIds: n
  } = e, u = t.filter(e => null != e && null != e.icon);
  if (null != n && n.size > 0) {
    for (let e = 0; e < u.length; e++)
      if (n.has(u[e].id)) {
        let t = u.splice(e, 1)[0];
        u.unshift(t)
      }
  }
  let _ = u.slice(0, 3),
    d = r.useMemo(() => {
      let e = u[3];
      if (null == e) return null;
      let t = e.getIconURL(24);
      if (null == t) return null;
      if (u.length > 4) {
        let n = u.slice(3),
          r = (0, o.f6)(n.map(e => e.name));
        return (0, i.jsx)(s.Tooltip, {
          "aria-label": null != r ? r : "",
          text: (0, i.jsx)(l, {
            games: n
          }),
          position: "bottom",
          children: r => (0, i.jsxs)("div", {
            ...r,
            className: a.gameImageContainer,
            children: [(0, i.jsx)("img", {
              src: t,
              alt: e.name,
              className: a.gameImage
            }), (0, i.jsx)("div", {
              className: a.extraGameCount,
              children: (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "always-white",
                children: "+".concat(n.length)
              })
            })]
          })
        })
      }
      return (0, i.jsx)(s.Tooltip, {
        text: e.name,
        position: "bottom",
        children: n => (0, i.jsx)("div", {
          ...n,
          className: a.gameImageContainer,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: a.gameImage
          })
        })
      })
    }, [u]);
  return (0, i.jsxs)(i.Fragment, {
    children: [_.map(e => {
      let t = e.getIconURL(24);
      return null == t ? null : (0, i.jsx)(s.Tooltip, {
        text: e.name,
        position: "bottom",
        children: n => (0, i.jsx)("div", {
          ...n,
          className: a.gameImageContainer,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: a.gameImage
          })
        })
      }, e.id)
    }), d]
  })
})