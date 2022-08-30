export const Images = {
  hands: {
    x: require('./hands/x.png'),
    o: require('./hands/o.png'),
    om: require('./hands/om.png'),
    mm: require('./hands/mm.png'),
    mmx: require('./hands/mmx.png'),
    lines: require('./hands/lines.png'),
  },
  miniImages: {
    front: require('./front-mini.png'),
    back: require('./back-mini.png'),
  },
  bigImages: {
    front: require('./front.png'),
    back: require('./back.png'),
  },
  vectors: {
    x: require('./vectors/x-small.png'),
    o: require('./vectors/o-small.png'),
    om: require('./vectors/om-small.png'),
    mm: require('./vectors/mm-small.png'),
    mmx: require('./vectors/mmx-small.png'),
    lines: require('./vectors/lines-small.png'),
  }
};

export const imageSelect = (field, image) => {
  return Images[field][image];
};
