"use strict";
l.r(t), l("724458"), l("653041"), l("47120");
var s, n = l("735250"),
  a = l("470079"),
  r = l("803997"),
  i = l.n(r),
  o = l("442837"),
  d = l("215569"),
  u = l("481060"),
  c = l("777789"),
  C = l("78839"),
  m = l("285952"),
  f = l("864293"),
  S = l("759231"),
  I = l("709054"),
  _ = l("689938"),
  M = l("156665");

function E(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class x extends a.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, n.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: m.default.Justify.BETWEEN,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, n.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function N(e) {
  let {
    imageClass: t,
    children: l,
    error: s,
    onDismissError: a
  } = e;
  return (0, n.jsxs)("div", {
    className: M.content,
    children: [(0, n.jsx)("div", {
      className: i()(M.image, t)
    }), l, (0, n.jsx)(d.TransitionGroup, {
      children: null != s ? (0, n.jsx)(f.default, {
        className: M.error,
        children: (0, n.jsx)(u.FormErrorBlock, {
          onDismiss: a,
          children: s.message
        })
      }) : null
    })]
  })
}
let R = e => {
  let {
    canceledCount: t
  } = e, l = (0, o.useStateFromStores)([C.default], () => C.default.getPremiumTypeSubscription());
  return null == l ? null : (0, n.jsxs)("div", {
    className: M.pendingCancellation,
    children: [(0, n.jsx)(S.default, {
      className: M.pendingCancellationIcon
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      className: M.pendingCancellationMessage,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: l.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function U(e) {
  let {
    imageClass: t,
    blurb: l,
    guild: s,
    warning: a,
    error: r,
    onDismissError: i,
    slotCount: o = 1,
    canceledCount: d = 0
  } = e;
  return (0, n.jsxs)(N, {
    imageClass: t,
    error: r,
    onDismissError: i,
    children: [(0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), (0, n.jsx)(c.default, {
      className: M.guildCard,
      guild: s,
      subscriptionChange: o
    }), (0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a
    }), d > 0 ? (0, n.jsx)(R, {
      canceledCount: d
    }) : null]
  })
}
class p extends a.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: l,
      onConfirm: s,
      onCancel: a
    } = this.props;
    return (0, n.jsxs)(u.ModalFooter, {
      children: [(0, n.jsx)(u.Button, {
        onClick: s,
        submitting: l,
        "aria-label": t,
        children: e
      }), (0, n.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: a,
        disabled: l,
        children: _.default.Messages.CANCEL
      })]
    })
  }
}
class h extends(s = a.PureComponent) {
  render() {
    let {
      guild: e,
      header: t,
      blurb: l,
      warning: s,
      confirmation: r,
      confirmationLabel: i,
      imageClass: o,
      error: d,
      isModifyingSubscription: c,
      onConfirm: C,
      onCancel: m,
      onDismissError: f,
      canceledCount: S
    } = this.props;
    return (0, n.jsxs)(a.Fragment, {
      children: [(0, n.jsx)(x, {
        text: t
      }), (0, n.jsx)(u.ModalContent, {
        children: (0, n.jsx)(U, {
          guild: e,
          blurb: l,
          warning: s,
          imageClass: o,
          error: d,
          onDismissError: f,
          canceledCount: S
        })
      }), (0, n.jsx)(p, {
        confirmation: r,
        confirmationLabel: i,
        isModifyingSubscription: c,
        onConfirm: C,
        onCancel: m
      })]
    })
  }
}
E(h, "Header", x), E(h, "ApplyBody", U), E(h, "TransferBody", function(e) {
  var t, l;
  let {
    imageClass: s,
    blurb: r,
    fromGuilds: i,
    toGuild: o,
    error: d,
    onDismissError: C,
    slotCount: m = 1,
    canceledCount: f = 0
  } = e, S = a.useRef(i), E = null === (t = S.current) || void 0 === t ? void 0 : t.length, x = null === (l = S.current) || void 0 === l ? void 0 : l.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, n.jsxs)(N, {
    imageClass: s,
    error: d,
    onDismissError: C,
    children: [(0, n.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), (0, n.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: M.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: E
      })
    }), null != x ? I.default.keys(x).map(e => (0, n.jsx)(c.default, {
      className: M.transferFromGuildCard,
      guild: x[e][0],
      subscriptionChange: -1 * x[e].length
    }, e)) : null, (0, n.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: M.transferGuildCardHeader,
      children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: m
      })
    }), (0, n.jsx)("div", {
      className: M.activeTransferGuildCardBorder,
      children: (0, n.jsx)(c.default, {
        className: M.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), f > 0 ? (0, n.jsx)(R, {
      canceledCount: f
    }) : null]
  })
}), E(h, "Footer", p), t.default = h