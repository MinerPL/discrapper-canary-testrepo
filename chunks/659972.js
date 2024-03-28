"use strict";
n.r(t), n.d(t, {
  StageDiscoveryRecommendationSource: function() {
    return s
  },
  default: function() {
    return S
  }
});
var a, s, l = n("735250");
n("470079");
var i = n("803997"),
  r = n.n(i),
  d = n("481060"),
  u = n("857395"),
  o = n("131154"),
  c = n("940627"),
  E = n("346656"),
  f = n("170039"),
  h = n("38981"),
  _ = n("708461");

function S(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: a,
    setShowGuildPopout: s,
    handleGuildNameClick: i,
    source: S,
    speakers: T,
    speakerCount: N,
    audienceCount: g,
    channelName: v
  } = e, x = t.id;
  return (0, l.jsx)("div", {
    className: _.contentContainer,
    children: (0, l.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, l.jsxs)("div", {
        className: _.guildInfoContainer,
        children: [(0, l.jsx)(u.default, {
          guildId: x,
          shouldShow: a,
          onRequestClose: () => s(!1),
          children: () => (0, l.jsxs)(d.Clickable, {
            className: _.flexContainerRow,
            onClick: i,
            children: [(0, l.jsx)(E.default, {
              guild: t,
              size: E.default.Sizes.MINI,
              className: _.guildIcon
            }), (0, l.jsxs)("div", {
              className: _.flexContainerRow,
              children: [(0, l.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: r()(_.guildName, {
                  [_.disabled]: null == i
                }),
                children: t.name
              }), (0, l.jsx)(c.default, {
                guild: t
              })]
            })]
          })
        }), (0, l.jsxs)("div", {
          className: _.rightJustifiedContent,
          children: [6 === S && (0, l.jsx)("div", {
            className: _.featuredTag,
            children: (0, l.jsx)(d.Text, {
              variant: "text-sm/normal",
              className: _.featuredTagText,
              children: "Featured"
            })
          }), (0, l.jsx)(h.default, {
            count: g,
            className: _.__invalid_audienceCount
          })]
        })]
      }), (0, l.jsx)(d.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: _.topicText,
        children: n.topic
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        className: _.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, l.jsx)(o.default, {
        guild: t,
        speakers: T,
        speakerCount: N,
        className: _.speakers
      }), null != v && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: _.divider
        }), (0, l.jsxs)("div", {
          className: _.footer,
          children: [(0, l.jsx)(f.default, {
            width: 20,
            height: 20,
            className: _.icon
          }), (0, l.jsx)(d.Text, {
            color: "header-secondary",
            className: _.__invalid_label,
            variant: "text-sm/normal",
            children: v
          })]
        })]
      })]
    })
  })
}(a = s || (s = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.TRENDING = 1] = "TRENDING", a[a.PERSONALIZED = 2] = "PERSONALIZED", a[a.USER_GUILDS = 3] = "USER_GUILDS", a[a.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", a[a.INTRO_CARD = 5] = "INTRO_CARD", a[a.FEATURED = 6] = "FEATURED"