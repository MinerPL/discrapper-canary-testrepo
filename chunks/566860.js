"use strict";
n.d(t, {
  K: function() {
    return i
  }
});
let i = (0, n(818083).B)({
  kind: "user",
  id: "2024-04_app_launcher_recommendation",
  label: "App Recommendations in App Launcher",
  defaultConfig: {
    recommendationsEnabled: !1,
    recentsDropdownEnabled: !1,
    hideActivities: !1,
    showRecommendationsInSingleList: !1,
    showBannerCardsAsListItems: !1,
    showActivitiesInCollections: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the app recommendations in the App Launcher",
    config: {
      recommendationsEnabled: !0,
      recentsDropdownEnabled: !1,
      hideActivities: !1,
      showRecommendationsInSingleList: !1,
      showBannerCardsAsListItems: !1,
      showActivitiesInCollections: !1
    }
  }, {
    id: 2,
    label: "Enable the app recommendations in the App Launcher, with Recents dropdown",
    config: {
      recommendationsEnabled: !0,
      recentsDropdownEnabled: !0,
      hideActivities: !1,
      showRecommendationsInSingleList: !1,
      showBannerCardsAsListItems: !1,
      showActivitiesInCollections: !1
    }
  }, {
    id: 3,
    label: "No app recommendations in the App Launcher and hide activities.",
    config: {
      recommendationsEnabled: !1,
      recentsDropdownEnabled: !1,
      hideActivities: !0,
      showRecommendationsInSingleList: !1,
      showBannerCardsAsListItems: !1,
      showActivitiesInCollections: !1
    }
  }, {
    id: 4,
    label: "Show Recommendations in a single list",
    config: {
      recommendationsEnabled: !0,
      recentsDropdownEnabled: !1,
      hideActivities: !1,
      showRecommendationsInSingleList: !0,
      showBannerCardsAsListItems: !1,
      showActivitiesInCollections: !1
    }
  }, {
    id: 5,
    label: "Show recommendations and banner cards as list items.",
    config: {
      recommendationsEnabled: !0,
      recentsDropdownEnabled: !1,
      hideActivities: !1,
      showRecommendationsInSingleList: !1,
      showBannerCardsAsListItems: !0,
      showActivitiesInCollections: !1
    }
  }, {
    id: 6,
    label: "All recommendations are just activities split into collections",
    config: {
      recommendationsEnabled: !0,
      recentsDropdownEnabled: !1,
      hideActivities: !1,
      showRecommendationsInSingleList: !1,
      showBannerCardsAsListItems: !1,
      showActivitiesInCollections: !0
    }
  }]
})