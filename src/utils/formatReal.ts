function formatReal(value: number | null): string | null {
  if (value) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return null;
}

export default formatReal;
