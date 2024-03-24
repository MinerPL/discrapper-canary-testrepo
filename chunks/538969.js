"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("222007");
var l = i("37983");
i("884691");
var s = i("750485"),
  a = i("77078"),
  n = i("887657"),
  r = i("549586"),
  o = i("564875"),
  d = i("404158"),
  c = i("671088"),
  u = i("368874"),
  h = i("775032"),
  C = i("821586"),
  f = i("922832"),
  T = i("782340"),
  p = i("782962"),
  x = i("392963");
let A = {
    [f.TeenActionDisplayType.USER_INTERACTION]: (0, l.jsx)(C.default, {
      width: 18,
      height: 18
    }),
    [f.TeenActionDisplayType.USER_CALLED]: (0, l.jsx)(n.default, {
      width: 22,
      height: 22
    }),
    [f.TeenActionDisplayType.USER_ADD]: (0, l.jsx)(o.default, {
      className: p.personWavingIcon,
      width: 22,
      height: 22
    }),
    [f.TeenActionDisplayType.GUILD_ADD]: (0, l.jsx)(r.default, {
      width: 22,
      height: 22
    }),
    [f.TeenActionDisplayType.GUILD_INTERACTION]: (0, l.jsx)(d.default, {
      className: p.threadIcon,
      width: 22,
      height: 22
    })
  },
  g = e => {
    let {
      header: t,
      description: i,
      icon: n
    } = e;
    return (0, l.jsxs)(s.default, {
      className: p.row,
      grow: 0,
      children: [(0, l.jsx)("div", {
        className: p.iconContainer,
        children: n
      }), (0, l.jsxs)("div", {
        className: p.rowContent,
        children: [(0, l.jsx)(a.Text, {
          className: p.rowHeader,
          variant: "text-sm/bold",
          children: t
        }), (0, l.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: i
        })]
      })]
    })
  };
var _ = e => {
  let {
    transitionState: t,
    onClose: i
  } = e, n = (0, u.useAgeSpecificText)(T.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, T.default.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), r = (0, h.default)(), o = Array.from(f.ACTION_TO_TEXT.entries()), d = (0, c.useIsEligibleForFamilyCenterVCJoin)({
    location: "family_center_tooltip_modal_web"
  });
  return (0, l.jsxs)(a.ModalRoot, {
    transitionState: t,
    children: [(0, l.jsx)("img", {
      className: p.art,
      src: x,
      alt: T.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
    }), (0, l.jsx)(a.ModalContent, {
      className: p.content,
      children: (0, l.jsxs)(s.default, {
        direction: s.default.Direction.VERTICAL,
        align: s.default.Align.CENTER,
        children: [(0, l.jsx)(a.Heading, {
          className: p.header,
          color: "header-primary",
          variant: "heading-lg/semibold",
          children: (0, l.jsx)(a.HeadingLevel, {
            children: n
          })
        }), o.map(e => {
          let [t, i] = e;
          return (0, l.jsx)(g, {
            icon: A[t],
            header: i.tooltipHeader(),
            description: i.tooltipDescription(null != r ? r : void 0, d)
          }, t)
        })]
      })
    }), (0, l.jsx)(a.ModalFooter, {
      children: (0, l.jsx)(a.Button, {
        className: p.button,
        type: "button",
        color: a.Button.Colors.BRAND,
        onClick: i,
        children: T.default.Messages.GOT_IT
      })
    })]
  })
}