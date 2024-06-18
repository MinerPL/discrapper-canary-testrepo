"use strict";
var i = n(490983),
  r = n(689938);
t.Z = {
  MENTION_EVERYONE: () => ({
    test: "everyone",
    text: "@everyone",
    description: r.Z.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
  }),
  MENTION_HERE: () => ({
    test: "here",
    text: "@here",
    description: r.Z.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
  }),
  LAUNCHABLE_APPLICATIONS: () => i.Z.launchableApplicationViewItems
}