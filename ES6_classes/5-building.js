export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    if (new.target !== undefined && new.target !== Building) {
      if (typeof new.target.prototype.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
