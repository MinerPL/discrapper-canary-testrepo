"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("808653"), n("424973"), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  l = n.n(a),
  i = n("446674"),
  o = n("266491"),
  u = n("77078"),
  d = n("345116"),
  c = n("521012"),
  f = n("145131"),
  m = n("965397"),
  E = n("423487"),
  p = n("299039"),
  I = n("782340"),
  _ = n("763247");
class h extends r.PureComponent {
  render() {
    let {
      onClose: e
    } = this.props;
    return (0, s.jsxs)(u.ModalHeader, {
      separator: !1,
      justify: f.default.Justify.BETWEEN,
      children: [(0, s.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        children: this.props.text
      }), null != e ? (0, s.jsx)(u.ModalCloseButton, {
        onClick: e
      }) : null]
    })
  }
}

function S(e) {
  let {
    imageClass: t,
    children: n,
    error: r,
    onDismissError: a
  } = e;
  return (0, s.jsxs)("div", {
    className: _.content,
    children: [(0, s.jsx)("div", {
      className: l(_.image, t)
    }), n, (0, s.jsx)(o.TransitionGroup, {
      children: null != r ? (0, s.jsx)(m.default, {
        className: _.error,
        children: (0, s.jsx)(u.FormErrorBlock, {
          onDismiss: a,
          children: r.message
        })
      }) : null
    })]
  })
}
let C = e => {
  let {
    canceledCount: t
  } = e, n = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
  return null == n ? null : (0, s.jsxs)("div", {
    className: _.pendingCancellation,
    children: [(0, s.jsx)(E.default, {
      className: _.pendingCancellationIcon
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      className: _.pendingCancellationMessage,
      children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function R(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: r,
    warning: a,
    error: l,
    onDismissError: i,
    slotCount: o = 1,
    canceledCount: c = 0
  } = e;
  return (0, s.jsxs)(S, {
    imageClass: t,
    error: l,
    onDismissError: i,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, s.jsx)(d.default, {
      className: _.guildCard,
      guild: r,
      subscriptionChange: o
    }), (0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a
    }), c > 0 ? (0, s.jsx)(C, {
      canceledCount: c
    }) : null]
  })
}
class N extends r.PureComponent {
  render() {
    let {
      confirmation: e,
      confirmationLabel: t,
      isModifyingSubscription: n,
      onConfirm: r,
      onCancel: a
    } = this.props;
    return (0, s.jsxs)(u.ModalFooter, {
      children: [(0, s.jsx)(u.Button, {
        onClick: r,
        submitting: n,
        "aria-label": t,
        children: e
      }), (0, s.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: a,
        disabled: n,
        children: I.default.Messages.CANCEL
      })]
    })
  }
}
class L extends r.PureComponent {
  render() {
    let {
      guild: e,
      header: t,
      blurb: n,
      warning: a,
      confirmation: l,
      confirmationLabel: i,
      imageClass: o,
      error: d,
      isModifyingSubscription: c,
      onConfirm: f,
      onCancel: m,
      onDismissError: E,
      canceledCount: p
    } = this.props;
    return (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(h, {
        text: t
      }), (0, s.jsx)(u.ModalContent, {
        children: (0, s.jsx)(R, {
          guild: e,
          blurb: n,
          warning: a,
          imageClass: o,
          error: d,
          onDismissError: E,
          canceledCount: p
        })
      }), (0, s.jsx)(N, {
        confirmation: l,
        confirmationLabel: i,
        isModifyingSubscription: c,
        onConfirm: f,
        onCancel: m
      })]
    })
  }
}
L.Header = h, L.ApplyBody = R, L.TransferBody = function(e) {
  var t, n;
  let {
    imageClass: a,
    blurb: l,
    fromGuilds: i,
    toGuild: o,
    error: c,
    onDismissError: f,
    slotCount: m = 1,
    canceledCount: E = 0
  } = e, h = r.useRef(i), R = null === (t = h.current) || void 0 === t ? void 0 : t.length, N = null === (n = h.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, s.jsxs)(S, {
    imageClass: a,
    error: c,
    onDismissError: f,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), (0, s.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: _.transferGuildCardHeader,
      children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
        guildCount: R
      })
    }), null != N ? p.default.keys(N).map(e => (0, s.jsx)(d.default, {
      className: _.transferFromGuildCard,
      guild: N[e][0],
      subscriptionChange: -1 * N[e].length
    }, e)) : null, (0, s.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: _.transferGuildCardHeader,
      children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
        slotCount: m
      })
    }), (0, s.jsx)("div", {
      className: _.activeTransferGuildCardBorder,
      children: (0, s.jsx)(d.default, {
        className: _.transferToGuildCard,
        guild: o,
        subscriptionChange: null != i ? i.length : 1
      })
    }), E > 0 ? (0, s.jsx)(C, {
      canceledCount: E
    }) : null]
  })
}, L.Footer = N;
var g = L