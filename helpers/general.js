export const persianDigit = (value) => {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  if (!value && value !== 0) {
    return "";
  }

  value = value.toString();

  for (const key in persian) {
    value = value.replace(new RegExp(`${key}`, "g"), persian[key]);
  }

  return value;
};

export const thousandSeparator = (value) => {
  if (value) {
    const separatedValue = value?.toString().split('.')

    const result = separatedValue?.[0]
      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')


    if (separatedValue?.[1]) {
      return result + '.' + separatedValue?.[1]
    } else {
      return result
    }
  }
}

export function formatPrice(number) {
  if (!number) {
    return persianDigit(0);
  }

  const numberSeparator = thousandSeparator(number);

  const numberFarsi = persianDigit(numberSeparator);

  return numberFarsi;
}

export function removeWorld(text) {
  return text.replace("world,", "").trim();
}
