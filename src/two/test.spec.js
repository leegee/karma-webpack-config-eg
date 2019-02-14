import { two } from './index.mjs';

describe('two', () => {
    it('tests', () => {
        expect(two).not.to.be.undefined;
        expect(two()).to.equal('Two');
    })
});
