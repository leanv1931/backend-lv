import { assert } from 'chai';
import { pigLatin } from './pigLatin.js';

describe('Pig Latin', function() {
  it('should convert words starting with consonants correctly', function() {
    assert.equal(pigLatin("hello"), "ellohay");
    assert.equal(pigLatin("banana"), "ananabay");
    assert.equal(pigLatin("glove"), "oveglay");
  });

  it('should convert words starting with vowels correctly', function() {
    assert.equal(pigLatin("apple"), "appleay");
    assert.equal(pigLatin("egg"), "eggay");
    assert.equal(pigLatin("island"), "islanday");
  });

  it('should handle words without vowels', function() {
    assert.equal(pigLatin("sky"), "skyay");
    assert.equal(pigLatin("try"), "tryay");
  });
});
