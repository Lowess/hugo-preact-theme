import { h } from 'preact';

interface Props {
    name: string
}

function Name({ name }: Props) {
    return (
        <b>{name}</b>
    );
}

export default Name;
