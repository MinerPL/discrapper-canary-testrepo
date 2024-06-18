"use strict";
var i = n(570140);
t.Z = {
  setSection(e) {
    i.Z.dispatch({
      type: "FRIENDS_SET_SECTION",
      section: e
    })
  },
  setInitialSection(e) {
    i.Z.dispatch({
      type: "FRIENDS_SET_INITIAL_SECTION",
      section: e
    })
  }
}