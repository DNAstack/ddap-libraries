export function ellipseIfLongerThan(text: string, maxLength: number): string {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}
