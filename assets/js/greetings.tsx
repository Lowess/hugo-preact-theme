import { h } from 'preact';
import habitat from "preact-habitat";

import { useState, useEffect } from 'preact/hooks';

import Name from './name';

// Mandatory for hugo to work
import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  name : string
}

const Greetings = (props : Props) => {
  const [name, setName] = useState(props.name);

  return (
    <div className="greetings container p-3">
      <h3>Greetings Widgets</h3>
      <p>Nice to see you <Name name={name} />!</p>
      <form className="form-inline">
        <label className="sr-only" for="inputName">Greetings</label>
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Hello</div>
          </div>
          <input type="text" className="form-control" id="inputName" value={name} placeholder="Florian" onInput={(e) => {setName(e.target.value)}}/>
        </div>
     </form>
    </div>
  );
}

let greetingsWidget = habitat(Greetings);

greetingsWidget.render({
  inline: true,
});