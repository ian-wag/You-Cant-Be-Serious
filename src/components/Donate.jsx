import styles from "./Donate.module.css";
const Donate = () => {
  return (
    <div className={styles.container}>
      Donate Your $$$$
      <ul>
        <li>
          <a
            href="https://secure.everyaction.com/rV67rum-cUiJNSutYPDeUA2?sourceid=1235732"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            NOW (National Organization for Women){" "}
          </a>
        </li>
        <li>
          <a href="https://abortionfunds.org/" target="_blank" rel="noreferrer">
            {" "}
            The National Network of Abortion Funds{" "}
          </a>
        </li>
        <li>
          <a
            href="https://votesaveamerica.com/donate/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Vote Save America{" "}
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer">
            {" "}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Donate;
