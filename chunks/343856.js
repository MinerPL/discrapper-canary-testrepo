"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  r = n("669491"),
  u = n("77078"),
  a = n("450911"),
  s = n("145079"),
  o = n("87657"),
  d = n("697218"),
  f = n("782340"),
  c = n("766646");

function h(e) {
  let {
    color: t,
    className: n
  } = e;
  return (0, i.jsx)("svg", {
    className: n,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, i.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, i.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, i.jsxs)("g", {
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, i.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, i.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, i.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, i.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function m(e, t) {
  let n = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser());
  return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, i.jsx)(u.MenuItem, {
    id: "make-dm-owner",
    color: "danger",
    label: f.default.Messages.CHANGE_DM_OWNER,
    action: () => {
      var l;
      return l = n, void(0, u.openModal)(n => (0, i.jsxs)(u.ConfirmModal, {
        bodyClassName: c.confirmModal,
        header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
        confirmText: f.default.Messages.CONFIRM,
        cancelText: f.default.Messages.CANCEL,
        onConfirm: () => a.default.setDMOwner(t.id, e.id),
        ...n,
        children: [(0, i.jsx)(h, {
          color: r.default.unsafe_rawColors.PRIMARY_300.css
        }), (0, i.jsxs)("div", {
          className: c.fromToWrapper,
          children: [(0, i.jsx)("div", {
            className: c.from,
            children: (0, i.jsx)(o.default, {
              user: l,
              size: u.AvatarSizes.SIZE_80
            })
          }), (0, i.jsx)("div", {
            className: c.to,
            children: (0, i.jsx)(o.default, {
              user: e,
              size: u.AvatarSizes.SIZE_80
            })
          })]
        }), (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
            usernameHook: (t, n) => (0, i.jsx)(s.default, {
              usernameIcon: (0, i.jsx)(u.Avatar, {
                className: c.avatarIcon,
                src: e.getAvatarURL(void 0, 16),
                size: u.AvatarSizes.SIZE_16,
                "aria-hidden": !0
              }),
              className: c.discordTag,
              usernameClass: c.username,
              discriminatorClass: c.discriminator,
              user: e
            }, n)
          })
        })]
      }))
    }
  })
}