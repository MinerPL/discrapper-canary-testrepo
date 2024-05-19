"use strict";
n.r(t), n("733860");
var i = n("735250"),
  r = n("470079"),
  a = n("481060"),
  s = n("353093"),
  o = n("785008");

function l(e) {
  let {
    games: t
  } = e;
  return (0, i.jsx)("div", {
    className: o.tooltipGames,
    children: t.map(e => {
      let t = e.getIconURL(24);
      return null == t ? null : (0, i.jsxs)("div", {
        className: o.tooltipGame,
        children: [(0, i.jsx)("div", {
          className: o.tooltipGameImageContainer,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: o.tooltipGameImage
          })
        }), (0, i.jsx)("span", {
          className: o.tooltipGameName,
          children: e.name
        })]
      }, e.id)
    })
  })
}
t.default = r.memo(function(e) {
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
  let d = u.slice(0, 3),
    _ = r.useMemo(() => {
      let e = u[3];
      if (null == e) return null;
      let t = e.getIconURL(24);
      if (null == t) return null;
      if (u.length > 4) {
        let n = u.slice(3),
          r = (0, s.formatSelectionList)(n.map(e => e.name));
        return (0, i.jsx)(a.Tooltip, {
          "aria-label": null != r ? r : "",
          text: (0, i.jsx)(l, {
            games: n
          }),
          position: "bottom",
          children: r => (0, i.jsxs)("div", {
            ...r,
            className: o.gameImageContainer,
            children: [(0, i.jsx)("img", {
              src: t,
              alt: e.name,
              className: o.gameImage
            }), (0, i.jsx)("div", {
              className: o.extraGameCount,
              children: (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "always-white",
                children: "+".concat(n.length)
              })
            })]
          })
        })
      }
      return (0, i.jsx)(a.Tooltip, {
        text: e.name,
        position: "bottom",
        children: n => (0, i.jsx)("div", {
          ...n,
          className: o.gameImageContainer,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: o.gameImage
          })
        })
      })
    }, [u]);
  return (0, i.jsxs)(i.Fragment, {
    children: [d.map(e => {
      let t = e.getIconURL(24);
      return null == t ? null : (0, i.jsx)(a.Tooltip, {
        text: e.name,
        position: "bottom",
        children: n => (0, i.jsx)("div", {
          ...n,
          className: o.gameImageContainer,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: o.gameImage
          })
        })
      }, e.id)
    }), _]
  })
})