module.exports = {
  future: {
    purgeLayersByDefault: true
  },
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica', 'sans-serif']
    },
    extend: {
      textColor: {
        primary: '#4bd9b4'
      },
      scale: {
        102: '1.02'
      },
      height: {
        350: '350px',
        'screen-50': 'calc(var(--vh) * 50)',
        'screen-75': 'calc(var(--vh) * 75)',
        'screen-95': 'calc(var(--vh) * 95)'
      },
      minHeight: {
        850: '850px'
      }
    }
  },
  plugins: []
};
