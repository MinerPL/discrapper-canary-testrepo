"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("481060"),
  i = n("460562"),
  r = n("26290"),
  o = n("15434"),
  u = n("768581"),
  d = n("682662"),
  c = n("662146"),
  f = n("418508");

function h(e) {
  let [t, h] = a.useState(!1);
  return (0, l.jsx)(d.ListItem, {
    children: (0, l.jsx)(c.default, {
      text: e.name,
      children: (0, l.jsx)(s.BlobMask, {
        className: f.circleIconButton,
        selected: t,
        lowerBadge: (0, l.jsx)(r.IconBadge, {
          icon: i.default,
          disableColor: !0,
          className: f.geoRestrictedBadge
        }),
        children: (0, l.jsx)(o.default, {
          name: e.name,
          onMouseEnter: () => {
            h(!0)
          },
          onMouseLeave: () => {
            h(!1)
          },
          onClick: () => {
            (0, s.openModalLazy)(async () => {
              let {
                default: t
              } = await n.e("42358").then(n.bind(n, "210995"));
              return n => (0, l.jsx)(t, {
                name: e.name,
                guildId: e.id,
                ...n
              })
            })
          },
          icon: null != e.icon ? u.default.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            canAnimate: !1,
            size: 42
          }) : null
        })
      })
    })
  })
}