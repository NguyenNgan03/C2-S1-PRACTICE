export default function User(props) {
  const { firstName, lastName, title } = props;
  return (
    <li>
      <div id="user" data-testid="user">
        <h2>TODO: {(firstName, lastName)}</h2>
        <p>TODO: {title}</p>
      </div>
    </li>
  );
}
