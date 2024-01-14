export default {
  button:
    'select-none border-0 bg-gradient-to-r from-slate-200 to-slate-800 p-[2px] text-white duration-300 [background-position:0] [background-size:150%] hover:[background-position:50%] active:[background-position:100%] disabled:pointer-events-none disabled:text-opacity-70 disabled:opacity-90',
  span:
    'block duration-300 hover:[background-position:100%_-0.2rem] active:[background-position:100%_-0.4rem]',

  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'text-large px-8 py-4',
  },

  type: {
    normal:
      'bg-gradient-to-b from-ms-primary-100 via-ms-primary-300 to-ms-primary-100',

    danger:
      'bg-gradient-to-b from-ms-danger-100 via-ms-danger-200 to-ms-danger-100',
  },

  position: {
    left: '[clip-path:polygon(10%_0,90%_0,100%_70%,90%_100%,10%_100%,0_30%)]',
    center: '[clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]',
    right: '[clip-path:polygon(10%_0,90%_0,100%_30%,90%_100%,10%_100%,0_70%)]',
  },
};
