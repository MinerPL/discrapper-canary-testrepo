"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  i = a("481060"),
  r = a("430824"),
  d = a("682864"),
  o = a("259580"),
  u = a("598952"),
  c = a("392739"),
  m = a("916001"),
  f = a("981631"),
  x = a("689938"),
  h = a("726178");
let g = "expanded-area";

function j(e) {
  let {
    attachments: t,
    role: a,
    roleLocked: n
  } = e, [r, f] = s.useState(!1);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.Clickable, {
      className: h.viewContents,
      onClick: () => {
        f(e => !e)
      },
      "aria-expanded": r,
      "aria-controls": g,
      children: [(0, l.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: r ? x.default.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : x.default.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
      }), (0, l.jsx)(o.default, {
        className: h.caretIcon,
        direction: r ? o.default.Directions.UP : o.default.Directions.DOWN
      })]
    }), (0, l.jsx)(d.default, {
      size: 12
    }), r && (0, l.jsxs)("ul", {
      className: h.contentsContainer,
      id: g,
      children: [(0, l.jsx)(c.default, {
        label: x.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
        children: (0, l.jsx)("ul", {
          className: h.attachmentGrid,
          children: t.map(e => (0, l.jsx)(u.default, {
            attachment: e
          }, e.id))
        })
      }), null != a && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: h.separator
        }), (0, l.jsx)(c.default, {
          label: x.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
          children: (0, l.jsx)(m.default, {
            role: a,
            textVariant: "text-md/medium",
            locked: n
          })
        })]
      })]
    })]
  })
}

function _(e) {
  var t;
  let {
    listing: a
  } = e, s = null !== (t = a.attachments) && void 0 !== t ? t : [], i = (0, n.useStateFromStores)([r.default], () => {
    var e;
    return r.default.getRole(a.guild_id, null !== (e = a.role_id) && void 0 !== e ? e : f.EMPTY_STRING_SNOWFLAKE_ID)
  }), d = !a.has_entitlement;
  return 0 === s.length && null == i ? null : 0 === s.length && null != i ? (0, l.jsx)(m.default, {
    role: i,
    textVariant: "text-md/medium",
    locked: d
  }) : (0, l.jsx)(j, {
    attachments: s,
    role: i,
    roleLocked: d
  })
}