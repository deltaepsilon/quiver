const clean = require('./clean');

describe('Clean', () => {
  let obj;
  beforeEach(() => {
    const starter = {
      defined: true,
      undefined: undefined,
      null: null,
      zero: 0,
      object: {},
      functions: () => true,
      string: '',
    };
    obj = Object.assign({}, starter, { nested: starter });
  });

  describe('Default', () => {
    let result;
    beforeEach(() => {
      result = clean(obj);
    });

    it('should remove undefined nodes by default', () => {
      expect(Object.keys(result).join()).toEqual('defined,zero,object,functions,string,nested');
    });

    it('should remove nested undefined nodes', () => {
      expect(Object.keys(result.nested).join()).toEqual('defined,zero,object,functions,string');
    });
  });

  describe('Functions', () => {
    let result;
    beforeEach(() => {
      result = clean(obj, { functions: true });
    });

    it('should remove undefined nodes by default', () => {
      expect(Object.keys(result).join()).toEqual('defined,zero,object,string,nested');
    });

    it('should remove nested undefined nodes', () => {
      expect(Object.keys(result.nested).join()).toEqual('defined,zero,object,string');
    });
  });

  describe('objects', () => {
    let result;
    beforeEach(() => {
      result = clean(obj, { objects: true });
    });

    it('should remove undefined nodes by default', () => {
      expect(Object.keys(result).join()).toEqual('defined,zero,functions,string,nested');
    });

    it('should remove nested undefined nodes', () => {
      expect(Object.keys(result.nested).join()).toEqual('defined,zero,functions,string');
    });
  });

  describe('strings', () => {
    let result;
    beforeEach(() => {
      result = clean(obj, { strings: true });
    });

    it('should remove undefined nodes by default', () => {
      expect(Object.keys(result).join()).toEqual('defined,zero,object,functions,nested');
    });

    it('should remove nested undefined nodes', () => {
      expect(Object.keys(result.nested).join()).toEqual('defined,zero,object,functions');
    });
  });
});
