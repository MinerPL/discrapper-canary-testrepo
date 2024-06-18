"use strict";
n.d(t, {
  XV: function() {
    return E
  },
  qt: function() {
    return I
  },
  sJ: function() {
    return T
  }
}), n(47120);
var i, r, s = n(392711),
  o = n(704215),
  a = n(524437),
  l = n(231338),
  u = n(689938);
let _ = [{
    id: a.Us.MINT_APPLE,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_MINT_APPLE_1,
      stop: 6.15
    }, {
      token: l.Il.BG_GRADIENT_MINT_APPLE_2,
      stop: 48.7
    }, {
      token: l.Il.BG_GRADIENT_MINT_APPLE_3,
      stop: 93.07
    }],
    angle: 180,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_MINT_APPLE,
    midpointPercentage: 27
  }, {
    id: a.Us.CITRUS_SHERBERT,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_CITRUS_SHERBERT_1,
      stop: 31.1
    }, {
      token: l.Il.BG_GRADIENT_CITRUS_SHERBERT_2,
      stop: 67.09
    }],
    angle: 180,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_CITRUS_SHERBERT,
    midpointPercentage: 27
  }, {
    id: a.Us.RETRO_RAINCLOUD,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_RETRO_RAINCLOUD_1,
      stop: 5.64
    }, {
      token: l.Il.BG_GRADIENT_RETRO_RAINCLOUD_2,
      stop: 26.38
    }, {
      token: l.Il.BG_GRADIENT_RETRO_RAINCLOUD_2,
      stop: 49.92
    }, {
      token: l.Il.BG_GRADIENT_RETRO_RAINCLOUD_1,
      stop: 73.12
    }],
    angle: 148.71,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_RETRO_RAINCLOUD,
    midpointPercentage: 50
  }, {
    id: a.Us.HANAMI,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_HANAMI_1,
      stop: 3.56
    }, {
      token: l.Il.BG_GRADIENT_HANAMI_2,
      stop: 35.49
    }, {
      token: l.Il.BG_GRADIENT_HANAMI_3,
      stop: 68.78
    }],
    angle: 38.08,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_HANAMI,
    midpointPercentage: 50
  }, {
    id: a.Us.SUNRISE,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_SUNRISE_1,
      stop: 8.62
    }, {
      token: l.Il.BG_GRADIENT_SUNRISE_2,
      stop: 48.07
    }, {
      token: l.Il.BG_GRADIENT_SUNRISE_3,
      stop: 76.04
    }],
    angle: 154.19,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_SUNRISE,
    midpointPercentage: 50
  }, {
    id: a.Us.COTTON_CANDY,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_COTTON_CANDY_1,
      stop: 8.5
    }, {
      token: l.Il.BG_GRADIENT_COTTON_CANDY_2,
      stop: 94.28
    }],
    angle: 180.14,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_COTTON_CANDY,
    midpointPercentage: 50
  }, {
    id: a.Us.LOFI_VIBES,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_LOFI_VIBES_1,
      stop: 7.08
    }, {
      token: l.Il.BG_GRADIENT_LOFI_VIBES_2,
      stop: 34.94
    }, {
      token: l.Il.BG_GRADIENT_LOFI_VIBES_3,
      stop: 65.12
    }, {
      token: l.Il.BG_GRADIENT_LOFI_VIBES_4,
      stop: 96.23
    }],
    angle: 179.52,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_LOFI_VIBES,
    midpointPercentage: 27
  }, {
    id: a.Us.DESERT_KHAKI,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_DESERT_KHAKI_1,
      stop: 12.92
    }, {
      token: l.Il.BG_GRADIENT_DESERT_KHAKI_2,
      stop: 32.92
    }, {
      token: l.Il.BG_GRADIENT_DESERT_KHAKI_3,
      stop: 52.11
    }],
    angle: 38.99,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_DESERT_KHAKI,
    midpointPercentage: 50
  }],
  d = [{
    id: a.Us.SUNSET,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_SUNSET_1,
      stop: 27.57
    }, {
      token: l.Il.BG_GRADIENT_SUNSET_2,
      stop: 71.25
    }],
    angle: 141.68,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_SUNSET,
    midpointPercentage: 35
  }, {
    id: a.Us.CHROMA_GLOW,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_CHROMA_GLOW_1,
      stop: 3.94
    }, {
      token: l.Il.BG_GRADIENT_CHROMA_GLOW_2,
      stop: 26.1
    }, {
      token: l.Il.BG_GRADIENT_CHROMA_GLOW_3,
      stop: 39.82
    }, {
      token: l.Il.BG_GRADIENT_CHROMA_GLOW_4,
      stop: 56.89
    }, {
      token: l.Il.BG_GRADIENT_CHROMA_GLOW_5,
      stop: 76.45
    }],
    angle: 128.92,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_CHROMA_GLOW,
    midpointPercentage: 15
  }, {
    id: a.Us.FOREST,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_FOREST_1,
      stop: 11.2
    }, {
      token: l.Il.BG_GRADIENT_FOREST_2,
      stop: 29.93
    }, {
      token: l.Il.BG_GRADIENT_FOREST_3,
      stop: 48.64
    }, {
      token: l.Il.BG_GRADIENT_FOREST_4,
      stop: 67.85
    }, {
      token: l.Il.BG_GRADIENT_FOREST_5,
      stop: 83.54
    }],
    angle: 162.27,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_FOREST,
    midpointPercentage: 50
  }, {
    id: a.Us.CRIMSON_MOON,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_CRIMSON_MOON_1,
      stop: 16.17
    }, {
      token: l.Il.BG_GRADIENT_CRIMSON_MOON_2,
      stop: 72
    }],
    angle: 64.92,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_CRIMSON_MOON,
    midpointPercentage: 30
  }, {
    id: a.Us.MIDNIGHT_BLURPLE,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_MIDNIGHT_BLURPLE_1,
      stop: 11.21
    }, {
      token: l.Il.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
      stop: 61.92
    }],
    angle: 48.17,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_MIDNIGHT_BLURPLE,
    midpointPercentage: 24
  }, {
    id: a.Us.MARS,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_MARS_1,
      stop: 14.61
    }, {
      token: l.Il.BG_GRADIENT_MARS_2,
      stop: 74.62
    }],
    angle: 170.82,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_MARS,
    midpointPercentage: 50
  }, {
    id: a.Us.DUSK,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_DUSK_1,
      stop: 12.84
    }, {
      token: l.Il.BG_GRADIENT_DUSK_2,
      stop: 85.99
    }],
    angle: 180,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_DUSK,
    midpointPercentage: 50
  }, {
    id: a.Us.UNDER_THE_SEA,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_UNDER_THE_SEA_1,
      stop: 1.91
    }, {
      token: l.Il.BG_GRADIENT_UNDER_THE_SEA_2,
      stop: 48.99
    }, {
      token: l.Il.BG_GRADIENT_UNDER_THE_SEA_3,
      stop: 96.35
    }],
    angle: 179.14,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_UNDER_THE_SEA,
    midpointPercentage: 50
  }, {
    id: a.Us.RETRO_STORM,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_RETRO_STORM_1,
      stop: 5.64
    }, {
      token: l.Il.BG_GRADIENT_RETRO_STORM_2,
      stop: 26.38
    }, {
      token: l.Il.BG_GRADIENT_RETRO_STORM_2,
      stop: 49.92
    }, {
      token: l.Il.BG_GRADIENT_RETRO_STORM_1,
      stop: 73.12
    }],
    angle: 148.71,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_RETRO_STORM,
    midpointPercentage: 61
  }, {
    id: a.Us.NEON_NIGHTS,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_NEON_NIGHTS_1,
      stop: 0
    }, {
      token: l.Il.BG_GRADIENT_NEON_NIGHTS_2,
      stop: 50
    }, {
      token: l.Il.BG_GRADIENT_NEON_NIGHTS_3,
      stop: 100
    }],
    angle: 180,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_NEON_NIGHTS,
    midpointPercentage: 50
  }, {
    id: a.Us.STRAWBERRY_LEMONADE,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_STRAWBERRY_LEMONADE_1,
      stop: 18.79
    }, {
      token: l.Il.BG_GRADIENT_STRAWBERRY_LEMONADE_2,
      stop: 49.76
    }, {
      token: l.Il.BG_GRADIENT_STRAWBERRY_LEMONADE_3,
      stop: 80.72
    }],
    angle: 161.03,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_STRAWBERRY_LEMONADE,
    midpointPercentage: 32
  }, {
    id: a.Us.AURORA,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_AURORA_1,
      stop: 10.39
    }, {
      token: l.Il.BG_GRADIENT_AURORA_2,
      stop: 26.87
    }, {
      token: l.Il.BG_GRADIENT_AURORA_3,
      stop: 48.31
    }, {
      token: l.Il.BG_GRADIENT_AURORA_4,
      stop: 64.98
    }, {
      token: l.Il.BG_GRADIENT_AURORA_5,
      stop: 92.5
    }],
    angle: 239.16,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_AURORA,
    midpointPercentage: 34
  }, {
    id: a.Us.SEPIA,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_SEPIA_1,
      stop: 14.14
    }, {
      token: l.Il.BG_GRADIENT_SEPIA_2,
      stop: 60.35
    }],
    angle: 69.98,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_SEPIA,
    midpointPercentage: 50
  }],
  c = {
    id: a.Us.BLURPLE_TWILIGHT,
    theme: l.BR.DARK,
    colors: [{
      token: l.Il.BG_GRADIENT_BLURPLE_TWILIGHT_1,
      stop: 11.18
    }, {
      token: l.Il.BG_GRADIENT_BLURPLE_TWILIGHT_2,
      stop: 64.54
    }],
    angle: 47.61,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_BLURPLE_TWILIGHT,
    midpointPercentage: 50
  },
  E = [..._, ...d, c, {
    id: a.Us.EASTER_EGG,
    theme: l.BR.LIGHT,
    colors: [{
      token: l.Il.BG_GRADIENT_EASTER_EGG_1,
      stop: 4
    }, {
      token: l.Il.BG_GRADIENT_EASTER_EGG_2,
      stop: 96
    }],
    angle: 180,
    getName: () => u.Z.Messages.CLIENT_THEMES_GRADIENT_EASTER_EGG,
    midpointPercentage: 50
  }];
[...d, ..._], (r = i || (i = {}))[r.DARK = 0] = "DARK", r[r.LIGHT = 1] = "LIGHT", r[r.SYSTEM = 2] = "SYSTEM", l.BR.DARK, l.BR.LIGHT, l.BR.DARKER, l.BR.LIGHT, l.BR.MIDNIGHT, () => u.Z.Messages.THEME_MIDNIGHT;
let I = (0, s.keyBy)(E, "id"),
  T = new Map([
    [a.Us.BLURPLE_TWILIGHT, o.z.BRAND_REFRESH_CLIENT_THEME_BADGE]
  ])