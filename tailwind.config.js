/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Jost", "Arial", "Helvetica", "sans-serif"],
    },
    fontSize: {
      s1: [
        "0.813rem",
        {
          lineHeight: "19px",
        },
      ],
      s2: [
        "0.875rem",
        {
          lineHeight: "20px",
          letterSpacing: "-0.25",
        },
      ],
      s3: [
        "0.938rem",
        {
          lineHeight: "22px",
        },
      ],
      s4: [
        "1rem",
        {
          lineHeight: "23px",
        },
      ],
      s5: [
        "1.125rem",
        {
          lineHeight: "26px",
          letterSpacing: "-0.25",
        },
      ],
      s6: [
        "1.25rem",
        {
          lineHeight: "29px",
          letterSpacing: "-0.25",
        },
      ],
      s7: [
        "1.5rem",
        {
          lineHeight: "35px",
          letterSpacing: "-0.33",
        },
      ],
    },
    colors: {
      "rich-purple": "#AD1FEA",
      "royal-blue": "#4661E6",
      "lightest-gray": "#F2F4FE",
      "medium-gray": "#647196",
      "darkest-gray": "#CFD7FF",
      "silver-cloud": "#F7F8FD",
      "deep-indigo": "#3A4374",
      "dusk-blue": "#647196",
      peach: "#F49F85",
      "bright-teal": "#62BCFA",
      "brick-red": "#D73737",
      white: "#FFFFFF",
    },
    extend: {
      borderRadius: {
        "custom-lg": "10px",
        "custom-sm": "5px",
      },
      backgroundImage: {
        "mobile-header":
          "url('/assets/images/suggestions/mobile/background-header.png')",
        "tablet-header":
          "url('/assets/images/suggestions/tablet/background-header.png')",
        "icon-gradient":
          "linear-gradient(45deg, rgba(40,167,237,1) 0%, rgba(163,55,246,1) 50%, rgba(232,77,112,1) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "global" })],
};
