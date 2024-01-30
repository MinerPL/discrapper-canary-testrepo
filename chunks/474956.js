"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var r, i, l = n("37983"),
  a = n("884691"),
  o = n("77078"),
  s = n("651057"),
  u = n("299285"),
  c = n("20606"),
  d = n("907038"),
  f = n("539938"),
  h = n("653047"),
  p = n("131233"),
  v = n("782340"),
  g = n("501701");

function m(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: r,
    guildId: i,
    subscriptionGroupListing: m
  } = e, [C, x] = a.useState(() => {
    let e = u.default.getApplication(r);
    if (null != e) return {
      status: 2,
      app: e
    };
    let t = u.default.isFetchingApplication(r);
    return t ? {
      status: 1
    } : {
      status: 0
    }
  }), E = 2 === C.status ? C.app : null;
  if (a.useEffect(() => {
      0 === C.status && (x({
        status: 1
      }), s.default.fetchApplication(r).then(e => {
        x({
          status: 2,
          app: h.default.createFromServer(e)
        })
      }).catch(e => {
        x({
          status: 3,
          error: e.message
        })
      }))
    }, [r, C.status]), null == E) return null;
  let b = v.default.Messages.STOREFRONT_TITLE.format({
    appName: E.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": b,
    size: o.ModalSize.LARGE,
    children: [(0, l.jsx)(o.ModalHeader, {
      children: (0, l.jsxs)(f.default, {
        children: [(0, l.jsx)(f.default.Icon, {
          icon: d.default,
          "aria-hidden": !0,
          color: c.default.INTERACTIVE_ACTIVE
        }), (0, l.jsx)(f.default.Title, {
          children: b
        }), (0, l.jsx)(o.ModalCloseButton, {
          onClick: t,
          className: g.modalCloseButton
        })]
      })
    }), (0, l.jsx)(o.ModalContent, {
      children: (0, l.jsx)(p.default, {
        app: E,
        subscriptionGroupListing: m,
        guildId: i
      })
    })]
  })
}(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR"