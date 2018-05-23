import * as moment from "moment";

const weekdayMenu = {
  items: [
    {
      name: "Waffles",
      priceInCents: 450
    },
    {
      name: "Chicken",
      priceInCents: 800
    },
    {
      name: "Chicken & Waffles",
      priceInCents: 1100
    }
  ]
};

const weekendMenu = {
  items: [
    {
      name: "Pancakes",
      priceInCents: 500
    },
    {
      name: "Parfait",
      priceInCents: 300
    },
    {
      name: "Home Fries",
      priceInCents: 250
    }
  ]
};

function isWeekend(date: string) {
  return moment(date).day() % 6 === 0;
}

export const resolvers = {
  Query: {
    menu: (_: any, { date }: { date: string }) => {
      return isWeekend(date) ? weekendMenu : weekdayMenu;
    }
  }
};
