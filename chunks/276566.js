"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("77078"),
  n = s("945330"),
  r = s("781896"),
  u = s("664336"),
  o = s("158998"),
  d = s("781609"),
  c = s("709863"),
  E = s("227457"),
  I = s("782340"),
  f = s("104585"),
  T = function(e) {
    let {
      guild: t,
      guildJoinRequest: s,
      guildJoinRequestUser: T,
      onClose: R
    } = e, S = l.useMemo(() => {
      var e;
      return null !== (e = s.formResponses) && void 0 !== e ? e : []
    }, [s.formResponses]);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.default, {
        toolbar: (0, a.jsx)(u.default.Icon, {
          icon: n.default,
          onClick: R,
          tooltip: I.default.Messages.CLOSE
        }),
        children: [(0, a.jsx)(u.default.Icon, {
          icon: r.default,
          disabled: !0,
          "aria-label": I.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          children: o.default.getName(T)
        })]
      }), (0, a.jsx)(c.default, {
        guildJoinRequest: s,
        guildJoinRequestUser: T,
        guild: t
      }), (0, a.jsxs)(i.Scroller, {
        children: [(0, a.jsx)(E.default, {
          user: T,
          guildId: t.id,
          className: f.container
        }), (0, a.jsx)("div", {
          className: f.disabledFormRenderer,
          children: (0, a.jsx)(d.default, {
            guildId: t.id,
            formFields: S,
            user: T
          })
        })]
      })]
    })
  }