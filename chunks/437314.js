"use strict";
n.r(t), n.d(t, {
  FriendsSearchStatus: function() {
    return a
  }
}), n("411104"), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("748780"),
  r = n("442837"),
  o = n("481060"),
  u = n("210887"),
  d = n("186095"),
  c = n("981631"),
  f = n("689938"),
  E = n("521063");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(a || (a = {})).SECTION_NO_RESULTS = "SECTION_NO_RESULTS";
let _ = Object.freeze({
    SECTION_ALL: {
      lightSrc: n("900933"),
      darkSrc: n("67764"),
      width: 376,
      height: 162,
      renderContent: e => (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)(d.default.Text, {
          note: f.default.Messages.FRIENDS_EMPTY_STATE_ALL
        }), (0, s.jsx)(o.Button, {
          className: E.button,
          onClick: e,
          children: f.default.Messages.ADD_FRIEND
        })]
      })
    },
    SECTION_ONLINE: {
      lightSrc: n("55346"),
      darkSrc: n("917847"),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_ONLINE
      })
    },
    SECTION_BLOCKED: {
      lightSrc: n("459505"),
      darkSrc: n("356634"),
      width: 433,
      height: 232,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_BLOCKED
      })
    },
    SECTION_PENDING: {
      lightSrc: n("979770"),
      darkSrc: n("138715"),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_PENDING
      })
    },
    SECTION_SUGGESTIONS: {
      lightSrc: n("979770"),
      darkSrc: n("138715"),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_SUGGESTIONS
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: n("55346"),
      darkSrc: n("917847"),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
      })
    }
  }),
  C = e => {
    let {
      theme: t
    } = e, n = f.default.Messages.FRIENDS_EMPTY_STATE_ALL, a = _.SECTION_ALL;
    return (0, s.jsx)(l.Fragment, {
      children: (0, s.jsxs)(d.default, {
        theme: t,
        children: [(0, s.jsx)(d.default.Image, {
          width: a.width,
          height: a.height,
          lightSrc: a.lightSrc,
          darkSrc: a.darkSrc
        }), (0, s.jsx)(d.default.Text, {
          note: n
        })]
      })
    })
  };
class m extends l.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: n
    } = this.props, a = {
      opacity: this.state.opacity
    }, l = function(e) {
      switch (e) {
        case c.FriendsSections.ADD_FRIEND:
        case c.FriendsSections.ALL:
          return _.SECTION_ALL;
        case c.FriendsSections.ONLINE:
          return _.SECTION_ONLINE;
        case c.FriendsSections.PENDING:
          return _.SECTION_PENDING;
        case c.FriendsSections.SUGGESTIONS:
          return _.SECTION_SUGGESTIONS;
        case c.FriendsSections.BLOCKED:
          return _.SECTION_BLOCKED;
        case "SECTION_NO_RESULTS":
          return _.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(e);
    return e === c.FriendsSections.ADD_FRIEND ? (0, s.jsx)(i.default.div, {
      className: E.friendsEmpty,
      style: a,
      children: (0, s.jsx)(C, {
        theme: n
      })
    }) : (0, s.jsx)(i.default.div, {
      className: E.friendsEmpty,
      style: a,
      children: (0, s.jsxs)(d.default, {
        theme: n,
        children: [(0, s.jsx)(d.default.Image, {
          width: l.width,
          height: l.height,
          lightSrc: l.lightSrc,
          darkSrc: l.darkSrc
        }), l.renderContent(t)]
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      opacity: new i.default.Value(1)
    }), h(this, "componentWillEnter", e => {
      this.state.opacity.setValue(0), i.default.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      i.default.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    })
  }
}
t.default = r.default.connectStores([u.default], () => ({
  theme: u.default.theme
}), {
  forwardRef: !0
})(m)