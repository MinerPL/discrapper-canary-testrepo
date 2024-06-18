"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(566860),
  o = n(695676),
  a = n(173790),
  l = n(361917),
  u = n(684256),
  _ = n(579539);
t.Z = r.memo(function(e) {
  let t, {
      drawerRef: n,
      channel: d
    } = e,
    {
      history: c,
      setHistory: E,
      currentView: I,
      pushHistory: T,
      goBack: h
    } = function() {
      let [e, t] = r.useState([{
        type: o.gc.HOME
      }]), n = e[e.length - 1];
      return {
        history: e,
        setHistory: t,
        currentView: n,
        pushHistory: n => {
          t([...e, n])
        },
        goBack: () => {
          if (0 === e.length) return;
          let n = [...e];
          n.pop(), t(n)
        }
      }
    }(),
    S = s.K.useExperiment({
      location: "App Launcher Root"
    }, {
      autoTrackExposure: !0
    });
  switch (null == I ? void 0 : I.type) {
    case o.gc.HOME:
      t = (0, i.jsx)(l.Z, {
        channel: d,
        enableRecommendations: S.recommendationsEnabled,
        enableRecents: S.recentsDropdownEnabled
      });
      break;
    case o.gc.LIST:
      t = (0, i.jsx)(u.Z, {
        title: I.title,
        look: I.look,
        items: I.items
      });
      break;
    case o.gc.APPLICATION:
      t = (0, i.jsx)(a.Z, {
        channel: d,
        application: I.application,
        sectionName: I.sectionName
      });
      break;
    default:
      t = null
  }
  return (0, i.jsx)("div", {
    className: _.drawerSizingWrapper,
    ref: n,
    children: (0, i.jsx)("div", {
      className: _.contentWrapper,
      children: (0, i.jsx)(o.uX.Provider, {
        value: {
          history: c,
          setHistory: E,
          currentView: I,
          pushHistory: T,
          goBack: h
        },
        children: t
      })
    })
  })
})