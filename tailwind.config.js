module.exports = {
  theme: {
    extend: {
      inset: {
        "10": "10px",
        "20": "20px",
        "30": "30px",
        "40": "40px",
        "44": "44px",
        "45": "45px",
      },
      borderRadius: {
        "5": "5px",
        "50": "50%",
      },
      maxWidth: {
        "960": "960px"
      },
      width: {
        "1/3": "32%",
        "1/4": "24%",
        "48": "48%"
      },
      minWidth: {
        "32": "32%",
        "48": "48%",
      },
      container: {
        center: true,
      },
      boxShadow: {
        hover: "0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)",
        button: "0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)",
        bottom: "0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'card-layer': "#3c3c3c8a"
      })
    },

  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    display: ['responsive', 'hover', 'focus', "group-hover"],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ]
}
