"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  r = n("669491"),
  u = n("77078"),
  i = n("450911"),
  d = n("145079"),
  l = n("87657"),
  o = n("697218"),
  c = n("782340"),
  f = n("766646");

function m(e) {
  let {
    color: t,
    className: n
  } = e;
  return (0, a.jsx)("svg", {
    className: n,
    height: "16",
    width: "80",
    viewBox: "0 0 80 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, a.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      opacity: ".6",
      children: [(0, a.jsx)("path", {
        d: "m0 0h80v16h-80z"
      }), (0, a.jsxs)("g", {
        stroke: t,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, a.jsx)("path", {
          d: "m71 1h4v4.16"
        }), (0, a.jsx)("path", {
          d: "m2 1h4v4.16",
          transform: "matrix(-1 0 0 1 8 0)"
        }), (0, a.jsx)("path", {
          d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
        }), (0, a.jsx)("path", {
          d: "m72.13 10.474 2.869 3.12 2.631-3.12"
        })]
      })]
    })
  })
}

function p(e, t) {
  let n = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, a.jsx)(u.MenuItem, {
    id: "make-dm-owner",
    color: "danger",
    label: c.default.Messages.CHANGE_DM_OWNER,
    action: () => {
      var s;
      return s = n, void(0, u.openModal)(n => (0, a.jsxs)(u.ConfirmModal, {
        bodyClassName: f.confirmModal,
        header: c.default.Messages.TRANSFER_GROUP_OWNERSHIP,
        confirmText: c.default.Messages.CONFIRM,
        cancelText: c.default.Messages.CANCEL,
        onConfirm: () => i.default.setDMOwner(t.id, e.id),
        ...n,
        children: [(0, a.jsx)(m, {
          color: r.default.unsafe_rawColors.PRIMARY_300.css
        }), (0, a.jsxs)("div", {
          className: f.fromToWrapper,
          children: [(0, a.jsx)("div", {
            className: f.from,
            children: (0, a.jsx)(l.default, {
              user: s,
              size: u.AvatarSizes.SIZE_80
            })
          }), (0, a.jsx)("div", {
            className: f.to,
            children: (0, a.jsx)(l.default, {
              user: e,
              size: u.AvatarSizes.SIZE_80
            })
          })]
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
            usernameHook: (t, n) => (0, a.jsx)(d.default, {
              usernameIcon: (0, a.jsx)(u.Avatar, {
                className: f.avatarIcon,
                src: e.getAvatarURL(void 0, 16),
                size: u.AvatarSizes.SIZE_16,
                "aria-hidden": !0
              }),
              className: f.discordTag,
              usernameClass: f.username,
              discriminatorClass: f.discriminator,
              user: e
            }, n)
          })
        })]
      }))
    }
  })
}