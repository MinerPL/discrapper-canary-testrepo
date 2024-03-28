    "use strict";
    var r, o, u, i;
    e.r(t), e.d(t, {
      ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
        return c
      },
      BACKGROUND_REPLACEMENT_SIZE: function() {
        return a
      },
      BLUR_BACKGROUND_OPTION: function() {
        return _
      },
      DEFAULT_VIDEO_BACKGROUND_SORT: function() {
        return f
      },
      DefaultVideoBackground: function() {
        return o
      },
      MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
        return s
      },
      VideoFilterType: function() {
        return r
      }
    }), e("724458"), (u = r || (r = {}))[u.BACKGROUND = 0] = "BACKGROUND", (i = o || (o = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
    let c = [7, 8, 9, 10],
      f = [7, 8, 9, 10, 0, 1, 2, 3].reduce((n, t, e) => ({
        ...n,
        [t]: e
      }), {}),
      _ = "blur",
      a = {
        width: 1280,
        height: 720
      },
      s = 10485760