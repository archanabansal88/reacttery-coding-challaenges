import InputLocalStorage from "./challenges/Local-Storage/local-storage-I";
import CheckboxList from "./challenges/select-all-checkboxes/checkbox-list";
import MessageFeed from "./challenges/submit-messages/message-feed";
import LabelFilter from "./challenges/Label-filters-dashboard/label-filter";
import TimerI from "./challenges/Timer/timer-I";
import TimerII from "./challenges/Timer/timer-II";
import TimerIII from "./challenges/Timer/timer-III";
import LocalStorageI from "./challenges/Local-Storage/local-storage-II";
import Counter from "./challenges/Local-Storage/local-storage-counter";
import ToDoList from "./challenges/Local-Storage/local-storage-todolist";

function App() {
  return (
    <div className="App">
      <LocalStorageI />
      <CheckboxList />
      <MessageFeed />
      <LabelFilter />
      <TimerI />
      <TimerIII />
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;
