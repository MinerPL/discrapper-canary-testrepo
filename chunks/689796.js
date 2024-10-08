var i = n(735250),
    a = n(470079),
    s = n(77878),
    r = n(770146),
    l = n(600164),
    o = n(981631),
    c = n(689938),
    d = n(803149);
class u extends a.PureComponent {
    renderContentRatingImage() {
        let { contentRating: e, contentRatingAgency: t } = this.props.sku;
        return null == e || null == t
            ? null
            : (0, i.jsx)(s.Z, {
                  className: d.rating,
                  agency: t,
                  rating: e.rating
              });
    }
    render() {
        let {
            sku: { contentRating: e, contentRatingAgency: t },
            className: n
        } = this.props;
        if (null == e || null == t) return null;
        let a = {
                [o.aIt.ESRB]: {
                    1: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ALCOHOL_REFERENCE,
                    2: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ANIMATED_BLOOD,
                    3: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_BLOOD,
                    4: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_BLOOD_AND_GORE,
                    5: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_CARTOON_VIOLENCE,
                    6: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_COMIC_MISCHIEF,
                    7: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_CRUDE_HUMOR,
                    8: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_DRUG_REFERENCE,
                    9: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_FANTASY_VIOLENCE,
                    10: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_INTENSE_VIOLENCE,
                    11: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_LANGUAGE,
                    12: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_LYRICS,
                    13: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MATURE_HUMOR,
                    14: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_NUDITY,
                    15: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_PARTUAL_NUDITY,
                    16: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_REAL_GAMBLING,
                    17: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_CONTENT,
                    18: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_THEMES,
                    19: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_VIOLENCE,
                    20: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SIMULATED_GAMBLING,
                    21: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_LANGUAGE,
                    22: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_LYRICS,
                    23: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_SEXUAL_CONTENT,
                    24: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SUGGESTIVE_THEMES,
                    25: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_TOBACCO_REFERENCE,
                    26: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_ALCOHOL,
                    27: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_DRUGS,
                    28: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_TOBACCO,
                    29: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_VIOLENCE,
                    30: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_VIOLENT_REFERENCES,
                    31: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_IN_GAME_PURCHASES,
                    32: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USERS_INTERACT,
                    33: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SHARES_LOCATION,
                    34: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_UNRESTRICTED_INTERNET,
                    35: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_BLOOD,
                    36: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_CARTOON_VIOLENCE,
                    37: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_FANTASY_VIOLENCE,
                    38: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_LANGUAGE,
                    39: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_LYRICS,
                    40: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_SEXUAL_THEMES,
                    41: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_SUGGESTIVE_THEMES,
                    42: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_VIOLENCE,
                    43: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ANIMATED_VIOLENCE
                },
                [o.aIt.PEGI]: {
                    1: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_VIOLENCE,
                    2: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_BAD_LANGUAGE,
                    3: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_FEAR,
                    4: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_GAMBLING,
                    5: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_SEX,
                    6: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_DRUGS,
                    7: c.Z.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_DISCRIMINATION
                }
            },
            s = e.descriptors.map((e) => a[t][e]).join(', ');
        return (0, i.jsxs)('div', {
            className: n,
            children: [
                (0, i.jsx)(r.Z, { children: c.Z.Messages.APPLICATION_STORE_SECTION_TITLE_RATINGS }),
                (0, i.jsxs)(l.Z, {
                    className: d.content,
                    children: [
                        this.renderContentRatingImage(),
                        (0, i.jsx)('div', {
                            className: d.__invalid_info,
                            children: s
                        })
                    ]
                })
            ]
        });
    }
}
t.Z = u;
