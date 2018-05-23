import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql, OptionProps } from "react-apollo";
import { State } from "@Reducers/index";
import { Menu as MenuComponent, Props as MenuProps } from "@Components/menu-component";

// Redux
interface StateProps {
  date: Date;
}

function mapStateToProps(state: State): StateProps {
  return {
    date: state.menuDate
  }
}

const connectRedux = connect(mapStateToProps);

// Apollo
const query = gql`
  query Menu($date: String!) {
    menu(date: $date) {
      items {
        name
        priceInCents
      }
    }
  }
`;

type ApolloOwnProps = StateProps;

interface ApolloQueryResultMenuItem {
  name: string;
  priceInCents: number;
}

interface ApolloQueryResultMenu {
  items: ApolloQueryResultMenuItem[];
}

interface ApolloQueryResult {
  menu: ApolloQueryResultMenu;
}

function mapOwnPropsToOptions(ownProps: ApolloOwnProps) {
  return {
    variables: {
      date: ownProps.date.toISOString()
    }
  };
}

function mapQueryResultToContainedProps(opts: OptionProps<ApolloOwnProps, ApolloQueryResult>): MenuProps {
  if (!opts.data || opts.data.loading || !opts.data.menu) {
    return {
      items: []
    };
  }
  return {
    items: opts.data.menu.items
  };
}

const connectApollo = graphql<any, ApolloQueryResult, { date: string }, MenuProps>(
  query,
  {
    options: mapOwnPropsToOptions,
    props: mapQueryResultToContainedProps
  }
);

export const Menu = connectRedux(connectApollo(MenuComponent));
