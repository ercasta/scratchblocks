var SVG = require("./draw.js")

var Style = (module.exports = {
  cssContent: `
    .sb3-label {
      font: 250 13pt Arial;
      fill: #000;
      word-spacing: +1pt;
    }

    .sb3-motion { fill: none; stroke: #4c97ff; stroke-width: 3;}
    .sb3-motion-alt { fill: none; stroke: #4280d7; stroke-width: 3; }
    .sb3-motion-dark { fill: none; stroke: #4c97ff; stroke-width: 3; }
    .sb3-looks { fill: none; stroke: #9966ff; stroke-width: 3;}
    .sb3-looks-alt { fill: none; stroke: #855cd6; stroke-width: 3; }
    .sb3-looks-dark { fill: none; stroke: #bd42bd; stroke-width: 3; }
    .sb3-sound { fill: #cf63cf; stroke: #bd42bd; }
    .sb3-sound-alt { fill: #c94fc9; }
    .sb3-sound-dark { fill: #bd42bd; }
    .sb3-control { fill: none; ; stroke: #ffab19; stroke-width: 3;}
    .sb3-control-alt { fill: none; stroke: #ec9c13; stroke-width: 3;}
    .sb3-control-dark { fill: none; stroke: #cf8b17; stroke-width: 3; }
    .sb3-events { fill: none; ; stroke: #ffbf00; stroke-width: 3;}
    .sb3-events-alt { fill: none; ; stroke: #e6ac00; stroke-width: 3;  }
    .sb3-events-dark { fill: none; ; stroke: #cc9900; stroke-width: 3; }
    .sb3-sensing { fill: none; stroke: #5cb1d6; stroke-width: 3;}
    .sb3-sensing-alt { fill: none; stroke: #47a8d1; }
    .sb3-sensing-dark { fill: #2e8eb8; }
    .sb3-operators { fill: none; stroke: #59c059; stroke-width: 3;}
    .sb3-operators-alt { fill: #46b946; }
    .sb3-operators-dark { fill: #389438; }
    .sb3-variables { fill: none; stroke: #ff8c1a; stroke-width: 3;}
    .sb3-variables-alt { fill: none; stroke:  #ff8000; stroke-width: 3; }
    .sb3-variables-dark { fill: none; stroke:  #db6e00; stroke-width: 3; }
    .sb3-list { fill: none; stroke: #ff661a; stroke-width: 3; }
    .sb3-list-alt { fill: none; stroke: #ff5500; stroke-width: 3;  }
    .sb3-list-dark { fill: none; stroke: #e64d00; stroke-width: 3;  }
    .sb3-custom { fill: none; stroke: #ff6680; stroke-width: 3;}
    .sb3-custom-alt { fill: none; stroke: #ff4d6a; stroke-width: 3;}
    .sb3-custom-dark {fill: none; stroke: #ff3355; stroke-width: 3;}
    .sb3-custom-arg { fill: none; stroke: #ff6680; stroke-width: 3;}

    /* extension blocks, e.g. pen */
    .sb3-extension { fill: #0fbd8c; stroke: #0b8e69; }
    .sb3-extension-alt { fill: #0da57a; }
    .sb3-extension-line { stroke: #0da57a; }
    .sb3-extension-dark { fill: #0b8e69; }

    /* obsolete colors: chosen by hand, indicates invalid blocks */ 
    .sb3-obsolete { fill: #ed4242; stroke: #ca2b2b; }
    .sb3-obsolete-alt { fill: #db3333; }
    .sb3-obsolete-dark { fill: #ca2b2b; }

    /* grey: special color from the Scratch 3.0 design mockups */
    .sb3-grey { fill: #bfbfbf; stroke: #909090; }
    .sb3-grey-alt { fill: #b2b2b2; }
    .sb3-grey-dark { fill: #909090; }

    .sb3-input-color {
      stroke: #fff;
    }

    .sb3-input-number,
    .sb3-input-string {
      fill: #fff;
    }
    .sb3-literal-number,
    .sb3-literal-string,
    .sb3-literal-number-dropdown,
    .sb3-literal-dropdown {
      word-spacing: 0;
    }
    .sb3-literal-number,
    .sb3-literal-string {
      fill: #575e75;
    }

    .sb3-comment {
      fill: #ffffa5;
      stroke: #d0d1d2;
      stroke-width: 1;
    }
    .sb3-comment-line {
      fill: #ffff80;
    }
    .sb3-comment-label {
      font: 400 11pt Helevetica Neue, Helvetica, sans-serif;
      fill: #000;
      word-spacing: 0;
    }

    .sb3-diff {
      fill: none;
      stroke: #000;
    }
    .sb3-diff-ins {
      stroke-width: 2px;
    }
    .sb3-diff-del {
      stroke-width: 3px;
    }
  `.replace(/[ \n]+/, " "),

  makeIcons() {
    return [
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
            fill: "#45993d",
          }),
          SVG.el("path", {
            d:
              "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
            fill: "#4cbf56",
          }),
        ]),
        {
          id: "sb3-greenFlag",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
            fill: "#000",
            opacity: ".1",
          }),
          SVG.el("path", {
            d:
              "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
            fill: "#000",
          }),
        ]),
        {
          id: "sb3-dropdownArrow",
          transform: "scale(0.944)"
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
            fill: "#3d79cc",
          }),
          SVG.el("path", {
            d:
              "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-turnRight",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
            fill: "#3d79cc",
          }),
          SVG.el("path", {
            d:
              "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-turnLeft",
        }
      ),

      SVG.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#111",
        id: "sb3-addInput",
      }),

      SVG.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#111",
        id: "sb3-delInput",
      }),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
            fill: "#cf8b17",
          }),
          SVG.el("path", {
            d:
              "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
            fill: "#fff",
          }),
        ]),
        {
          id: "sb3-loopArrow",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
            stroke: "#000",
            "stroke-opacity": ".1",
          }),
          SVG.el("path", {
            d:
              "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
            fill: "#FFF",
          }),
        ]),
        {
          id: "sb3-musicBlock",
          fill: "none",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d:
              "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546",
          }),
          SVG.el("path", {
            d:
              "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
            fill: "#4C97FF",
          }),
          SVG.el("path", {
            d:
              "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
            fill: "#575E75",
            opacity: ".15",
          }),
          SVG.el("path", {
            d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
            fill: "#575E75",
          }),
        ]),
        {
          id: "sb3-penBlock",
          stroke: "#575E75",
          fill: "none",
          "stroke-linejoin": "round",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("circle", {
            opacity: 0.25,
            cx: 32,
            cy: 16,
            r: 4.5,
          }),
          SVG.el("circle", {
            opacity: 0.5,
            cx: 32,
            cy: 12,
            r: 4.5,
          }),
          SVG.el("circle", {
            opacity: 0.75,
            cx: 32,
            cy: 8,
            r: 4.5,
          }),
          SVG.el("circle", {
            cx: 32,
            cy: 4,
            r: 4.5,
          }),
          SVG.el("path", {
            d:
              "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
            fill: "#4D4D4D",
            "stroke-linejoin": "round",
          }),
        ]),
        {
          id: "sb3-videoBlock",
          stroke: "#000",
          fill: "#FFF",
          "stroke-opacity": 0.15,
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d:
              "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
            fill: "#4D4D4D",
          }),
        ]),
        {
          id: "sb3-ttsBlock",
          stroke: "#000",
          "stroke-opacity": 0.15,
        }
      ),

      SVG.el("image", {
        id: "sb3-translateBlock",
        width: "40px",
        height: "40px",
        href:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABTVBMVEX///8AAAAAAAAAAAAAAABqamoAAAAAAAAAAAAAAACurq7Ly8vV1dXZ2dnS0tLDw8MAAAAAAAAAAAAAAADb29vq6urz8/P6+vr////9/f319fXx8fHl5eXPz89HR0e2trbu7u7X19ekpKTe3t74+Pjn5+fg4ODi4uIAAACEhISWlpa9vb0AAAAAAADH3v/0+P8AAADHx8e41f9Rmf9WnP/p8v+Pvv9Nl/9Ynf/S5f9ho/9Smv+82P9PmP9Ml/+Rv/9uqv9mpf9coP+MvP9an/9zrf9Qmf+rzf+Dtv9op/+10/+bxP/d6/96sf9jpP+5ubkAAABrqf92r/9/tP9GieeOrtnW19mgx/96otnZ4u5Znv/q6+5XXnXV19ygpLGWmqhhZ3309fbKzNTAwsuLkKBtbW3s7OxMTEy1uMJ2fI5rcobf4eVFRUWBhperrrqQI7PpAAAAbXRSTlMADBUdJkERBQIfeLzl/9ehGA4aJP///////////8kyhf/yav//////E09ckwcK//8hrv///////////////////////////////////////0b//////////////////////////z//L/////80bccdAQAABJxJREFUeAHtmOd/qkoTgDELVhZLiKwRseuRA5Y00uT03nvvvf7/H++CmVzNsvvD+74f85ie8DCzO2EGpFOiOSWxgmRFRiiZ+r/o0plsTsUULa8UhMp0sbQqc1ktFdNSQCmnr5UNUlmvmrimJPm+pFXXsACtboVHy7hBjjDMZqvA8xVazXajQ7h0Gu3Z0TLukmMaOFvg+LJwYh5wdCGPe/1+wyAhVZw9E5lvC1dFLji6lZTSaGC3zmpw/mpTidiZtNVskBg0mhbdGcd1i6jVPMq8X4tIulhvk1i060U4ZNCc5WRgJeGcFJa0iACHo4gQtZIU4ozt/FEQ5sS2x4lF4Spm93djc2ub3Wu8KgWkLI1uzWxjyv0eVgfuglDGhGHH290jDFieFUVOn8+prKul/02IcJnMY2CLJxzte8ABfLE/YoWLVVbGMk94OPUZpodMypN2Zc5X6dX4KZ87f/6C5108H3Lgb144f/4Sk3La0nqVOZ9mOaI1HHn+ZfjiIHINJQeMkT5mU674V8MNuTb1rkcKwcjxMcK9q96NIMBd/+o2RwhG8ImFZN+7epOQW1PvfHTZgNFgfBzh3tQ/2L7t+d52pBCMOdzHNfCJC/sOrb4Df3orurDBOFbqyhh8YiFdPlrRdwlHCLiuKwFiITn0fEiYIwTiCa9d9egKHgyDbayaOgbu3ed0Q7Hw9oOrPl1Dz58+3G6ATdQNxcK9R1ep6vpodHfqe4+fPI3XDbnCm/tTqtsdEsqzzcfP43ZDnnC4STdj89aIhLx4Ersb8lrA8ODqy2tw/avoOH435DWp7dvzp166G4rbqBkrQOiGMRq9jvn7y3bDGKMIxiQmWOYPS2Lhq9eUNwIhO86JhW8D4TuOkB0458LsBv+5rPB9IHz/QSyEkRgp2Dj2NQeyfJ8Rfnwd8imGMOy2JlS02RwUo65Cn2l4NMjPsYSuDVXSaWtfqI8VfggW8B398CqOMKOtzcL7ivPfHClK+J26PgZpf48jlHEn1OmqXUpLkcIfr1//DDfmZxzheGKul7u6moXxkRH+orG9JSTI+VcMYfK3htVJa1zkXsnfzkwfoRR5QqBYQmjFEbQGmivwPoYQuiJX+AlsUIoiIfTtjCDCz9TzJ+Q1lKJI6Fg13Mc5y4kSwnXhBwn5CaXIFcI0ZcDsEyH8/m/9vYUvuUJ2OmOEEBbUz0+hkJ0fWeHfv3+/z339ly/kTrirS7cAxgfGNNMNl2pSpdrMB8b2pPBfbyphrconRgG0/G3vPBY2TtwYoaVvzBdAqj4fYkPPFZZ9dLCIO1Bxrz9zGv0e1qzU0g83FkmMbRsaSjtvjx3h45fuXHDMwAk4CWh5VdqfhA+IBs1jo4EVxIzEQKHWhw7aQkXXdSQOxUHThCozaYHxSCnNKiSinbXtAUrzjF+0NvRHbLtc45ks1IjR6NOtyXNP7nzL46+zINe0jBQJWyNdwT1JumSreqjs8P4KasQ0QNgQ/mlinFX1bnndnIwlAUmlhs3qeoUY5TU9V5JEFMetiYq130lJRKqg5MOyU3PZTFoS46wgVIIezlcmEZIHMlrh/OUpp/wDfCaVjn0YjrEAAAAASUVORK5CYII=",
      }),

      SVG.el("image", {
        id: "sb3-microbitBlock",
        width: "40px",
        height: "40px",
        href:
          "data:image/png;base64,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",
      }),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d:
              "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z",
          }),
          SVG.el("path", {
            d:
              "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d:
              "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d:
              "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d:
              "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d:
              "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
            fill: "#FFF",
          }),
          SVG.el("path", {
            d:
              "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d:
              "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
            fill: "#4C97FF",
          }),
          SVG.el("path", {
            d:
              "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
            stroke: "#3D79CC",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            stroke: "#7C87A5",
            "stroke-width": ".893",
            d: "M4.47 20.474h27.961l2.157 2.974",
          }),
          SVG.el("path", {
            d:
              "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d:
              "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z",
          }),
          SVG.el("path", {
            d:
              "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z",
          }),
          SVG.el("path", {
            d:
              "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
            fill: "#7C87A5",
          }),
          SVG.el("path", {
            d:
              "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z",
          }),
          SVG.el("path", {
            d:
              "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993",
            fill: "#E6E7E8",
          }),
          SVG.el("path", {
            d:
              "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            d:
              "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
            fill: "#E6E7E8",
          }),
          SVG.el("path", {
            d:
              "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
            stroke: "#7C87A5",
            "stroke-width": ".893",
          }),
          SVG.el("path", {
            fill: "#E6E7E8",
            d: "M19.53 24.438h11.294V20.47H19.529z",
          }),
          SVG.el("path", {
            stroke: "#7C87A5",
            "stroke-width": ".893",
            d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794",
          }),
        ]),
        {
          id: "sb3-wedoBlock",
          fill: "none",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("rect", {
            stroke: "#7C87A5",
            fill: "#FFF",
            x: ".5",
            y: "3.59",
            width: "28",
            height: "25.81",
            rx: "1",
          }),
          SVG.el("rect", {
            stroke: "#7C87A5",
            fill: "#E6E7E8",
            x: "2.5",
            y: ".5",
            width: "24",
            height: "32",
            rx: "1",
          }),
          SVG.el("path", {
            stroke: "#7C87A5",
            fill: "#FFF",
            d: "M2.5 14.5h24v13h-24z",
          }),
          SVG.el("path", {
            d: "M14.5 10.5v4",
            stroke: "#7C87A5",
            fill: "#E6E7E8",
          }),
          SVG.el("rect", {
            fill: "#414757",
            x: "4.5",
            y: "2.5",
            width: "20",
            height: "10",
            rx: "1",
          }),
          SVG.el("rect", {
            fill: "#7C87A5",
            opacity: ".5",
            x: "13.5",
            y: "20.13",
            width: "2",
            height: "2",
            rx: ".5",
          }),
          SVG.el("path", {
            d:
              "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z",
            fill: "#7C87A5",
            opacity: ".5",
          }),
          SVG.el("path", {
            d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z",
            stroke: "#CC4C23",
            fill: "#F15A29",
          }),
        ]),
        {
          transform: "translate(5.5 3.5)",
          id: "sb3-ev3Block",
        }
      ),

      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
            fill: "#fff",
          }),
          SVG.el("path", {
            fill: "red",
            d:
              "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z",
          }),
          SVG.el("path", {
            fill: "red",
            d:
              "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z",
          }),
          SVG.el("circle", { fill: "red", cx: "22.8", cy: "18.2", r: "3.4" }),
          SVG.el("circle", { fill: "red", cx: "30.6", cy: "18.2", r: "3.4" }),
          SVG.el("path", { fill: "red", d: "M4.2 27h31.9v.7H4.2z" }),
          SVG.el("circle", {
            fill: "#e0e0e0",
            cx: "22.8",
            cy: "18.2",
            r: "2.3",
          }),
          SVG.el("circle", {
            fill: "#e0e0e0",
            cx: "30.6",
            cy: "18.2",
            r: "2.3",
          }),
          SVG.el("path", {
            fill: "#e0e0e0",
            d:
              "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z",
          }),
          SVG.el("path", {
            fill: "#e0e0e0",
            d:
              "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z",
          }),
          SVG.el("path", {
            stroke: "#666",
            "stroke-width": ".5",
            d:
              "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z",
          }),
          SVG.el("path", {
            stroke: "#666",
            "stroke-width": ".5",
            d:
              "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z",
          }),
        ]),
        {
          id: "sb3-makeymakeyBlock",
          fill: "none",
        }
      ),
    ]
  },

  makeStyle() {
    var style = SVG.el("style")
    style.appendChild(SVG.cdata(Style.cssContent))
    return style
  },

  defaultFont: "500 12pt Helevetica Neue, Helvetica, sans-serif",
  commentFont: "400 12pt Helevetica Neue, Helvetica, sans-serif",
})
