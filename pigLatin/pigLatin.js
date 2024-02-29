export function pigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = word[0].toLowerCase();

  if (vowels.includes(firstLetter)) {
    return word + 'ay';
  } else {
    let firstVowelIndex = -1;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        firstVowelIndex = i;
        break;
      }
    }

    if (firstVowelIndex === -1) {
      return word + 'ay';
    } else {
      const prefix = word.slice(0, firstVowelIndex);
      const suffix = word.slice(firstVowelIndex);
      return suffix + prefix + 'ay';
    }
  }
}
