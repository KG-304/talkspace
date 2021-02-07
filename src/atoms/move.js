import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const xStyle = {
  height: "100%",
  width: "100%",
  color: "blue",
};

const oStyle = {
  height: "100%",
  width: "100%",
  color: "green",
};

const Move = props => {
  const { val } = props;
  function render() {
    if (val === "X") {
      return <ClearIcon style={xStyle} />;
    } else if (val === "O") {
      return <RadioButtonUncheckedIcon style={oStyle} />;
    } else return null;
  }
  return render();
};

export default Move;
