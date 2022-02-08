export default function Divisio({ numDiv1, numDiv2 }) {
  return (
    <>{numDiv1 === 0 || numDiv2 === 0 ? <p>No pots.</p> : numDiv1 / numDiv2}</>
  );
}
