import styles from "./Info.module.css";
const Info = () => {
  return (
    <div className={styles.container}>
      <section>
        <h2>
          <a
            href="https://votesaveamerica.com/Roe/"
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            Fuck Bans Action Plan
          </a>
        </h2>
        <p>
          Vote Save America directs you to important elections, ways to donate
          to abortion and women's health infrastructure, and more.
        </p>
      </section>

      <section>
        <h2>
          <a
            href="https://now.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            National Organization for Women
          </a>
        </h2>
        <p>
          Since its founding in 1966, the National Organization for Women has
          focused on grassroots efforts to further women’s rights issues like,
          “feminist ideals, lead societal change, eliminate discrimination, and
          achieve and protect the equal rights of all women and girls in all
          aspects of social, political, and economic life.” Think: eliminating
          harassment in society, reproductive rights and ending violence against
          women.
        </p>
      </section>
      <section>
        <h2>
          <a
            href="https://www.equalitynow.org/the-history/"
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            Equality Now
          </a>
        </h2>
        <p>
          This organization "is determined to address the systemic roots of
          misogyny so that every woman and girl could live safe, fearless, and
          free." They "campaign for legal and systemic change to address
          violence and discrimination against women and girls around the world."
        </p>
      </section>
      <section>
        <h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://reproductiverights.org/"
            className={styles.links}
          >
            Center for Reproductive Rights
          </a>
        </h2>
        <p>
          "The Center for Reproductive Rights is a global human rights
          organization of lawyers and advocates who ensure reproductive rights
          are protected in law as fundamental human rights for the dignity,
          equality, health, and well-being of every person.
        </p>
        <p>
          Since its founding in 1992, the Center’s game-changing litigation,
          legal policy, and advocacy work—combined with unparalleled expertise
          in constitutional, international, and comparative human rights law—has
          transformed how reproductive rights are understood by courts,
          governments, and human rights bodies." "Through our work across five
          continents, we have played a critical role in securing legal victories
          before national courts, United Nations Committees, and regional human
          rights bodies on reproductive rights issues including access to
          life-saving obstetrics care, contraception, maternal health, and safe
          abortion services, as well as the prevention of forced sterilization
          and child marriage."
        </p>
      </section>
    </div>
  );
};

export default Info;
