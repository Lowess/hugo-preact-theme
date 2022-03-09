import { h } from 'preact';

interface Props {
    name: string
}

const Name = ({ name }: Props) => {
    return (
        <b>{name}</b>
    );
}

export default Name
