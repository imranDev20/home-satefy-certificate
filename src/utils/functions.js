import dayjs from "dayjs";

export const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

export const getFutureTime = () => {
  const userOrderTime = dayjs("2023-08-31T02:00:00");
  const currentTime = dayjs().set("minute", 0).set("second", 0);

  if (userOrderTime.hour() >= 9 && userOrderTime.hour() < 17) {
    const deliveryTime = userOrderTime.add(48, "hour");
    return deliveryTime;
  } else if (userOrderTime.hour() >= 17 && userOrderTime.hour() <= 23) {
    const nextDay9am = currentTime.set("hour", 9).add(1, "day");
    const deliveryTime = nextDay9am.add(48, "hour");
    return deliveryTime;
  } else {
    const sameDay9am = currentTime.set("hour", 9);
    const deliveryTime = sameDay9am.add(48, "hour");
    return deliveryTime;
  }
};
