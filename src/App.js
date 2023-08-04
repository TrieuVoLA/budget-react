import {
  Container,
  Header,
  Segment,
  Statistic,
  Grid,
  Icon,
  Button,
  Form,
} from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./componentes/DisplayBalance";
import DisplayBalances from "./componentes/DisplayBalances";
import EntryLine from "./componentes/EntryLine";

import MainHeader from "./componentes/MainHeader";
import NewEntryForm from "./componentes/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance
        title="Your Balance:"
        value="2,550.23"
        color="black"
        size="small"
      />

      <DisplayBalances />
      <MainHeader title="History" tytle="h3" />

      <EntryLine description="Something" value="$100,00" />
      <EntryLine description="Expense" value="$100,00" isExpense={true} />

      <MainHeader title="Add new transaction" tytle="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
