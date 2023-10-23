import { h } from 'preact';
import habitat from 'preact-habitat';
import { useState } from 'preact/hooks';
import Name from './name';

interface Props {
    initialName: string
}

function Greetings({ initialName }: Props) {
    const [name, setName] = useState(initialName);

    return (
        <div className="greetings container p-3">
            <h3>Greetings Widget</h3>
            <p>
                Nice to see you <Name name={name} />!
            </p>
            <form className="form-inline">
                <label className="sr-only" htmlFor="inputName">Greetings</label>
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-text">Hello</div>
                    <input type="text" className="form-control" id="inputName" value={name} placeholder={name} onInput={(e) => setName(e.currentTarget.value)} />
                </div>
            </form>
        </div>
    );
}

const greetingsWidget = habitat(Greetings);

greetingsWidget.render({
    selector: '#root',
    inline: true,
    clientSpecified: true
});
