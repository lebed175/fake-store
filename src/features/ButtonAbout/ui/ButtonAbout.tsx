import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/ButtonStart/Button";

interface Props {
  type: "blue" | "dark";
}

export default function ButtonAbout({ type }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return <Button text="Learn more" onClick={handleClick} type={type}></Button>;
}
