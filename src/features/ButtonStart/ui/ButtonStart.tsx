import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/ButtonStart/Button";

export default function ButtonStart() {
  const navigate = useNavigate();
  const handleClickCatalog = () => {
    navigate("/products");
  };
  const handleClickAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <Button text="Start Shopping" onClick={handleClickCatalog}></Button>
      <Button text="Learn more" onClick={handleClickAbout}></Button>
    </div>
  );
}
