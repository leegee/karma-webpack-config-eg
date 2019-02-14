import { one } from './index.mjs';

describe('one', () => {
    it('tests', () => {
        expect(one).not.to.be.undefined;
        expect(one()).to.equal('One');
    })
});
