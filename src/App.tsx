import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <div className="min-h-screen p-10">
        <h1 className="text-2xl font-bold mb-4">Component Library Demo</h1>
        <div className="space-y-4">
          <Button onClick={() => alert("hi")} size="sm">
            Show
          </Button>
          <Button variant="secondary" size="md">
            Cancel
          </Button>
          <Button variant="outline" size="lg">
            Back home
          </Button>
          <Button loading>Saving...</Button>
          <Input label="Name" description="Please enter your name" />
          <Input
            label="Last name"
            description="Please enter your last name"
            disabled
          />
          <Input
            type="tel"
            label="Phone number"
            description="Please enter your mobile"
            error="error"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
