"use client";
import styles from "@/styles/landing.module.scss";

export default function Landing() {
  return (
    <main className={styles.landing}>
      <div className={styles.info}>
        <h1>homework 5</h1>

        <p>
          okay. so here's the deal. this is our landing page, and there are two
          other pages here. so three pages in total:{" "}
        </p>
        <ol>
          <li>landing</li>
          <li>form</li>
          <li>view submission</li>
        </ol>
        <p>
          what i want you to do is go to the form, fill it out, and then go to
          the view submission page to see what you submitted. that's it. but if
          you check ou the submission page before you actually submit anything,
          it's going to be empty. that's due to storing the info in a custom
          context hook, and then throwing it into local storage. so if you want
          to leave and do something else, come back, and still see that info,
          it's there.
        </p>
        <p>
          below you'll see a button that will clear your local storage. try it
          out!
        </p>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              localStorage.clear();
              alert("your local data has been cleared");
            }}
          >
            clear local data
          </button>
        </div>
      </div>
    </main>
  );
}
