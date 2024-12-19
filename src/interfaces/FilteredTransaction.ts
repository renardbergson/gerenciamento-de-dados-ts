declare global {
  type FilteredTransaction = Transaction & { value: number };
}
