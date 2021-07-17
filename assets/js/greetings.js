import { h } from 'preact';
import habitat from "preact-habitat";

import { useState, useEffect } from 'preact/hooks';

const Greetings = (props) => {
  const [name, setName] = useState(props.name );

  return (
    <div class="greetings container p-3">
      <h3>Greetings Widget</h3>
      <p>Nice to see you {name}!</p>
      <form class="form-inline">
        <label class="sr-only" for="inputName">Greetings</label>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">Hello</div>
          </div>
          <input type="text" class="form-control" id="inputName" value={name} placeholder="Florian" onInput={(e) => {setName(e.target.value)}}/>
        </div>
     </form>
    </div>
  );
}

let greetingsWidget = habitat(Greetings);

greetingsWidget.render({
  inline: true,
});