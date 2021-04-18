import style from "./information1.module.css";

function information1() {
  return (
    <div className="red-box">
      <div className={style.header}>
        <p>
          {" "}
          While you are still standing, try to reach out to the people who are
          falling.
        </p>
      </div>
      <div className={style.paragraph}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <button type="button" className={style.button}>
          <div className={style.text}>Donate Now</div>
        </button>
      </div>
      <div>
        <img
          src="/information1.svg"
          alt="information1-holyways"
          className={style.picture1}
        />
      </div>
    </div>
  );
}

export default information1;
