/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Jost", "Arial", "Helvetica", "sans-serif"],
    },
    fontSize: {
      s1: [
        "13px",
        {
          lineHeight: "19px",
          fontWeight: "600",
        },
      ],
      s2: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.25",
          fontWeight: "700",
        },
      ],
      s3: [
        "15px",
        {
          lineHeight: "22px",
          fontWeight: "400",
        },
      ],
      s4: [
        "16px",
        {
          lineHeight: "23px",
          fontWeight: "400",
        },
      ],
      s5: [
        "18px",
        {
          lineHeight: "26px",
          letterSpacing: "-0.25",
          fontWeight: "700",
        },
      ],
      s6: [
        "20px",
        {
          lineHeight: "29px",
          letterSpacing: "-0.25",
          fontWeight: "700",
        },
      ],
      s7: [
        "24px",
        {
          lineHeight: "35px",
          letterSpacing: "-0.33",
          fontWeight: 700,
        },
      ],
    },
    colors: {
      "rich-purple": "#AD1FEA",
      "royal-blue": "#4661E6",
      "lightest-gray": "#F2F4FE",
      "darkest-gray": "#CFD7FF",
      "silver-cloud": "#F7F8FD",
      "deep-indigo": "#3A4374",
      "dusk-blue": "#647196",
      peach: "#F49F85",
      "bright-teal": "#62BCFA",
      "brick-red": "#D73737",
    },
    extend: {
      borderRadius: {
        "custom-lg": "10px",
        "custom-sm": "5px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
