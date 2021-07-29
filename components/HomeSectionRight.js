import React from "react";
import { Button } from "react-bootstrap";
import ls from "../styles/HomeSectionRight.module.css";

const HomeSectionRight = () => {
  return (
    <div className={`${ls.section} text-center py-1 py-lg-5`}>
      <h2 className="mt-5">CREATE AN ACCOUNT IN VERY FEW STEPS</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora!
        Voluptatem molestiae temporibus aut tempore soluta nobis enim aliquid
        repellat, aperiam!
        <br />
        <Button className={`${ls.create_account_button} mb-3 mt-4`}>
          Create An Account
        </Button>
      </p>
    </div>
  );
};

export default HomeSectionRight;
