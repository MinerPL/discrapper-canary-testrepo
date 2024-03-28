"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("378720"),
  n = s("232126"),
  l = s("285952"),
  o = s("981631"),
  u = s("689938"),
  d = s("989150");
class c extends i.PureComponent {
  renderContentRatingImage() {
    let {
      contentRating: e,
      contentRatingAgency: t
    } = this.props.sku;
    return null == e || null == t ? null : (0, a.jsx)(n.default, {
      className: d.rating,
      agency: t,
      rating: e.rating
    })
  }
  render() {
    let {
      sku: {
        contentRating: e,
        contentRatingAgency: t
      },
      className: s
    } = this.props;
    if (null == e || null == t) return null;
    let i = {
        [o.ContentRatingAgencies.ESRB]: {
          1: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ALCOHOL_REFERENCE,
          2: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ANIMATED_BLOOD,
          3: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_BLOOD,
          4: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_BLOOD_AND_GORE,
          5: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_CARTOON_VIOLENCE,
          6: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_COMIC_MISCHIEF,
          7: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_CRUDE_HUMOR,
          8: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_DRUG_REFERENCE,
          9: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_FANTASY_VIOLENCE,
          10: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_INTENSE_VIOLENCE,
          11: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_LANGUAGE,
          12: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_LYRICS,
          13: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MATURE_HUMOR,
          14: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_NUDITY,
          15: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_PARTUAL_NUDITY,
          16: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_REAL_GAMBLING,
          17: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_CONTENT,
          18: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_THEMES,
          19: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_VIOLENCE,
          20: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SIMULATED_GAMBLING,
          21: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_LANGUAGE,
          22: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_LYRICS,
          23: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_SEXUAL_CONTENT,
          24: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SUGGESTIVE_THEMES,
          25: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_TOBACCO_REFERENCE,
          26: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_ALCOHOL,
          27: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_DRUGS,
          28: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_TOBACCO,
          29: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_VIOLENCE,
          30: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_VIOLENT_REFERENCES,
          31: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_IN_GAME_PURCHASES,
          32: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USERS_INTERACT,
          33: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SHARES_LOCATION,
          34: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_UNRESTRICTED_INTERNET,
          35: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_BLOOD,
          36: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_CARTOON_VIOLENCE,
          37: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_FANTASY_VIOLENCE,
          38: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_LANGUAGE,
          39: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_LYRICS,
          40: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_SEXUAL_THEMES,
          41: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_SUGGESTIVE_THEMES,
          42: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_VIOLENCE,
          43: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ANIMATED_VIOLENCE
        },
        [o.ContentRatingAgencies.PEGI]: {
          1: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_VIOLENCE,
          2: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_BAD_LANGUAGE,
          3: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_FEAR,
          4: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_GAMBLING,
          5: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_SEX,
          6: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_DRUGS,
          7: u.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_DISCRIMINATION
        }
      },
      n = e.descriptors.map(e => i[t][e]).join(", ");
    return (0, a.jsxs)("div", {
      className: s,
      children: [(0, a.jsx)(r.default, {
        children: u.default.Messages.APPLICATION_STORE_SECTION_TITLE_RATINGS
      }), (0, a.jsxs)(l.default, {
        className: d.content,
        children: [this.renderContentRatingImage(), (0, a.jsx)("div", {
          className: d.__invalid_info,
          children: n
        })]
      })]
    })
  }
}
t.default = c