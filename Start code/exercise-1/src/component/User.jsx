export default function User({ firstName, lastName, title }) {
//   const { firstName, lastName, title } = props;
  return (
    <div id="user" data-testid="user">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{title}</p>
    </div>
  );
}
