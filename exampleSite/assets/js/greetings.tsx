import { h, render } from "preact";
import habitat from "preact-habitat";
import { useState } from "preact/hooks";
import Name from "./name";
import { createIsland } from "preact-island";

interface Props {
    initialName: string;
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
                <label className="sr-only" htmlFor="inputName">
                    Greetings
                </label>
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-text">Hello</div>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={name}
                        placeholder="Florian"
                        onInput={(e) => setName(e.currentTarget.value)}
                    />
                </div>
            </form>
        </div>
    );
}

// This is a workaround to get the current script URL.
// The way it works is that Vite has access to the URL of the script,
// and we can pass parameters in the script URL to dynamically decide
// where to mount the widget.
// The import.meta.url points to file://module_path when at build time.

// Get the current script url
console.log(import.meta)
const scriptUrl = new URL(import.meta.url)
const mountAt = scriptUrl.searchParams.get('mount_at');

const island = createIsland(Greetings);

island.render({
    selector: mountAt as string,
    replace: true,
    propsSelector: `[data-island-props="${mountAt}"]`
})
