import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, Image, View, Card } from "@aws-amplify/ui-react"
function App({ signOut, email }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo"></Image>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
