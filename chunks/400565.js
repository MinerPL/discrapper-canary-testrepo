"use strict";
n.r(t), n.d(t, {
  ForYouItemImage: function() {
    return d
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("598077"),
  i = n("806519"),
  r = n("609412"),
  o = n("166615");
let u = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : (0, s.jsx)("div", {
      className: o.maskBackground,
      style: {
        backgroundColor: t.color.css
      },
      children: (0, s.jsx)("img", {
        className: o.maskIcon,
        alt: "",
        src: t.icon
      })
    })
  },
  d = a.memo(function(e) {
    let {
      item: t
    } = e, n = null, a = !1;
    if (null != t.icon_name) n = (0, s.jsx)("img", {
      alt: "",
      src: r.FOR_YOU_ICONS[(0, r.getIconByName)(t.icon_name)]
    });
    else if (null != t.other_user) {
      let e = t.other_user instanceof l.default ? t.other_user : new l.default(t.other_user);
      n = (0, s.jsx)("img", {
        alt: "",
        className: o.image,
        src: e.getAvatarURL(void 0, 40)
      }), a = !0
    } else n = null != t.icon_url ? (0, s.jsx)("img", {
      alt: "",
      className: o.image,
      src: t.icon_url
    }) : (0, s.jsx)("img", {
      alt: "",
      src: r.FOR_YOU_ICONS[(0, r.getIcon)(t)]
    });
    let d = (0, r.getMask)(t.type);
    return (0, s.jsxs)(i.default, {
      mask: null == d ? i.MaskIDs.AVATAR_DEFAULT : i.MaskIDs.AVATAR_STATUS_ROUND_16,
      width: 40,
      height: 40,
      rightOverhang: 3,
      bottomOverhang: 3,
      className: o.mask,
      children: [(0, s.jsx)("div", {
        className: o.container,
        style: a ? void 0 : {
          backgroundColor: (0, r.getBackground)(t)
        },
        children: n
      }), (0, s.jsx)(u, {
        mask: d
      })]
    })
  })