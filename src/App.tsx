import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("");

  const options = [
    { value: "usa", label: "USA" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" },
    { value: "russia", label: "Russia" },
    { value: "uk", label: "UK", disabled: true },
  ];
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
          <Select
            label="Country"
            placeholder="Select your country"
            description="Choose one option"
            options={options}
            value={country}
            onChange={setCountry}
          />
          <Select
            label="Disabled select"
            options={options}
            value={country}
            onChange={setCountry}
            disabled
          />
          <Select
            label="Error example"
            options={options}
            value={country}
            onChange={setCountry}
            error="You must select a country"
          />
        </div>
      </div>
    </>
  );
}

export default App;
