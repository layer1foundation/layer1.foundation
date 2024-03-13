export function estimateReadingTime(text:string) {
    const wordsPerMinute = 200; // average reading speed
    const wordCount = text.split(/\s/g).length; // splits the text by spaces to count the words
    const minutes = wordCount / wordsPerMinute;
    return Math.ceil(minutes); // rounds up to the nearest minute
  }