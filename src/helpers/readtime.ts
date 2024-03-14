export function estimateReadingTime(text:string | null | undefined) {
    const wordsPerMinute = 200; // average reading speed
    const wordCount = text?.split(/\s/g).length; // splits the text by spaces to count the words
    const minutes = wordCount ? (wordCount / wordsPerMinute) : null;
    const res = minutes ? Math.ceil(minutes) : 0; // rounds up to the nearest minute
    return res; // rounds up to the nearest minute
  }