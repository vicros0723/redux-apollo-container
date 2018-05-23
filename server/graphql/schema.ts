export const schema = `
type MenuItem {
  name: String!
  priceInCents: Int!
}

type Menu {
  items: [MenuItem!]!
}

type Query {
  menu(date: String): Menu!
}
`;
